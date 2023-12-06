import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  console.log(users);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img style={{ width: "50px" }} src={user.avatar_url} alt="user" />
            <h3>{user.login}</h3>
            <a href={user.login}>Profile</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FetchData;
