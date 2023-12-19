import React, { createContext, useContext, useState } from "react";
import NavLink from "./NavLink";

export const NavBarContext = createContext();

//custom hook
export const useAppContext = () => useContext(NavBarContext);

const NavBar = () => {
  const [user, setUser] = useState({ name: "Geoff" });

  const handleClick = () => {
    setUser(null);
  };

  return (
    <NavBarContext.Provider value={{ user, handleClick }}>
      <nav className="navbar">
        <h5>Context API</h5>
        <NavLink user={user} handleClick={handleClick} />
      </nav>
    </NavBarContext.Provider>
  );
};

export default NavBar;
