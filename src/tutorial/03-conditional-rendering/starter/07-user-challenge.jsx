import { useState, useEffect } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const data = { name: "john" };

  const login = () => {
    setUser(data.name);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Hello {user}</h1>
          <button className="btn" onClick={logout}>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <h1>Please Log In</h1>
          <button className="btn" onClick={login}>
            Log In
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
