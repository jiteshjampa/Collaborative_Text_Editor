import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocument, updateDocument } from "../api/api";
import { io } from "socket.io-client";
import UsernameModal from "../components/UsernameModal";
import ActiveUsers from "../components/ActiveUsers";
import Toolbar from "../components/ToolBar";
import TitleEditor from "../components/TitleEditor";
import Editor from "../components/Editor";

const socket = io("https://collaborative-text-editor-backend.onrender.com");

const DocumentPage = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [editingTitle, setEditingTitle] = useState(false);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [color, setColor] = useState("black");
  const [username, setUsername] = useState("");
  const [activeUsers, setActiveUsers] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [lastSaved, setLastSaved] = useState(null); // New state for last saved time

  useEffect(() => {
    if (!username) return;

    const fetchDocument = async () => {
      try {
        const doc = await getDocument(id);
        setContent(doc.content);
        setTitle(doc.Title);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchDocument();
    socket.emit("join-doc", { docId: id, username });

    socket.on("update-users", (users) => {
      setActiveUsers(users);
    });

    return () => {
      socket.emit("leave-doc", { docId: id, username });
    };
  }, [id, username]);

  useEffect(() => {
    socket.on("receive-update", (newContent) => {
      setContent(newContent);
    });

    return () => {
      socket.off("receive-update");
    };
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (content && title) {
        updateDocument(id, { content, Title: title });
        setLastSaved(new Date().toLocaleTimeString()); // Update last saved time
      }
    }, 1000);

    return () => clearTimeout(handler);
  }, [id, content, title]);

  const handleJoin = () => {
    if (username.trim()) {
      setShowModal(false);
      socket.emit("join-doc", { docId: id, username });
    }
  };

  const handleTextChange = (e) => {
    setContent(e.target.value);
    socket.emit("update-doc", { docId: id, content: e.target.value });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Document link copied to clipboard!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {showModal && (
        <UsernameModal
          username={username}
          setUsername={setUsername}
          handleJoin={handleJoin}
        />
      )}

      {!showModal && loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="w-full max-w-2xl p-4 border rounded-lg bg-white">
          <ActiveUsers activeUsers={activeUsers} />
          <Toolbar
            bold={bold}
            setBold={setBold}
            italic={italic}
            setItalic={setItalic}
            color={color}
            setColor={setColor}
            handleCopyLink={handleCopyLink}
          />
          <TitleEditor
            title={title}
            setTitle={setTitle}
            editingTitle={editingTitle}
            setEditingTitle={setEditingTitle}
          />

          {/* Last Saved Indicator */}
          {lastSaved && (
            <p className="text-sm text-gray-500 mb-2">
              Last saved at {lastSaved}
            </p>
          )}

          <Editor
            content={content}
            handleTextChange={handleTextChange}
            bold={bold}
            italic={italic}
            color={color}
          />
        </div>
      )}
    </div>
  );
};

export default DocumentPage;
