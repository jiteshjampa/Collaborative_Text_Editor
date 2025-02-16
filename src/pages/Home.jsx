import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createDocument, getAllDocuments } from "../api/api";
import { v4 as uuidv4 } from "uuid";
import { Dialog } from "@headlessui/react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState([]);
  const navigate = useNavigate();

  // Fetch documents
  useEffect(() => {
    const fetchDocuments = async () => {
      const docs = await getAllDocuments();
      setDocuments(docs);
    };
    fetchDocuments();
  }, []);

  // Create new document
  const handleCreateDoc = async () => {
    if (!title.trim()) return alert("Please enter a document title");

    setLoading(true);
    const TextId = uuidv4();
    const newDoc = await createDocument(TextId, title);
    setIsOpen(false);
    navigate(`/docs/${newDoc.TextId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Collaborative Text Editor</h1>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Create New Document
      </button>

      {/* Document List */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {documents.length > 0 ? (
          documents.map((doc) => (
            <div
              key={doc.TextId}
              onClick={() => navigate(`/docs/${doc.TextId}`)}
              className="p-4 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-100 transition"
            >
              <h2 className="text-lg font-semibold">{doc.Title}</h2>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-3 text-center">
            No documents found. Create a new one!
          </p>
        )}
      </div>

      {/* Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-black/30"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-lg font-semibold mb-4">Enter Document Name</h2>
          <input
            type="text"
            className="w-full border p-2 rounded-lg mb-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Document Title"
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-gray-300 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleCreateDoc}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              {loading ? "Creating..." : "Create"}
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Home;
