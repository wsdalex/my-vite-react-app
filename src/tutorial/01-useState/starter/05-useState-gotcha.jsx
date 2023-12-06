import { useState } from "react";
const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setTimeout(() => {
      setCount((currentCount) => {
        return currentCount + 1;
      });
    }, 3000);
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
