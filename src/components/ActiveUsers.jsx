const ActiveUsers = ({ activeUsers }) => {
  return (
    <div className="mb-4 p-2 bg-gray-200 rounded-md">
      <h3 className="font-semibold">🟢 Active Users:</h3>
      <ul>
        {activeUsers.map((user, index) => (
          <li key={index} className="text-blue-500 font-semibold">
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveUsers;
