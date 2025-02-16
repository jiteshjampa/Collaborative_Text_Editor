const TitleEditor = ({ title, setTitle, editingTitle, setEditingTitle }) => {
  return (
    <div className="mb-4 flex items-center">
      {editingTitle ? (
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => setEditingTitle(false)}
          autoFocus
          className="text-2xl font-bold border p-2 w-full"
        />
      ) : (
        <h2
          onClick={() => setEditingTitle(true)}
          className="text-2xl font-bold cursor-pointer"
        >
          {title}
        </h2>
      )}
    </div>
  );
};

export default TitleEditor;
