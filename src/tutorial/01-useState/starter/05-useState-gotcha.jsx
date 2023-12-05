import { useState } from "react";
const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((currentState) => {
      const newState = currentState + 1;
      return newState;
    });
  };

  return (
    <>
      <h1>You have clicked {count} times</h1>
      <button className="btn" onClick={handleClick}>
        increase
      </button>
    </>
  );
};

export default UseStateGotcha;
