const Editor = ({ content, handleTextChange, bold, italic, color }) => {
  return (
    <textarea
      value={content}
      onChange={handleTextChange}
      style={{
        color,
        fontWeight: bold ? "bold" : "normal",
        fontStyle: italic ? "italic" : "normal",
      }}
      className="w-full h-64 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default Editor;
