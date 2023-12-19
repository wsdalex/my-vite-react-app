import { useAppContext } from "./NavBar";

const UserContainer = () => {
  const { user, handleClick } = useAppContext();

  if (!user) {
    return (
      <div className="user-container">
        <p>Please Log In</p>
        <button className="btn">Log In</button>
      </div>
    );
  }

  return (
    <div className="user-container">
      <p>Hello There, {user.name}</p>
      <button className="btn" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default UserContainer;
