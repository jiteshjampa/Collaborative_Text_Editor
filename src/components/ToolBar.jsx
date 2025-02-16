const Toolbar = ({
  bold,
  setBold,
  italic,
  setItalic,
  color,
  setColor,
  handleCopyLink,
}) => {
  return (
    <div className="mb-4 flex gap-2">
      <button
        className={`px-3 py-1 border rounded ${bold ? "bg-gray-300" : ""}`}
        onClick={() => setBold(!bold)}
      >
        B
      </button>
      <button
        className={`px-3 py-1 border rounded ${italic ? "bg-gray-300" : ""}`}
        onClick={() => setItalic(!italic)}
      >
        I
      </button>
      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="px-2 py-1 border rounded"
      >
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <button
        className="ml-auto bg-blue-500 text-white px-3 py-1 rounded"
        onClick={handleCopyLink}
      >
        Copy Link
      </button>
    </div>
  );
};

export default Toolbar;
