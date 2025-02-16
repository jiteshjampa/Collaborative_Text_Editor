const UsernameModal = ({ username, setUsername, handleJoin }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Enter Your Name</h2>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
          onClick={handleJoin}
        >
          Join Document
        </button>
      </div>
    </div>
  );
};

export default UsernameModal;
