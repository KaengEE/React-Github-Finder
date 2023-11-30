import { useEffect, useState } from "react";

function UserResults() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []); //앱 시작시 실행됨

  const fetchUsers = async () => {
    //console.log(`${import.meta.env.VITE_GITHUB_URL}/users`);
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();

    setUsers(data);
  };

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map((user) => {
        return <h3>{user.login}</h3>;
      })}
    </div>
  );
}

export default UserResults;
