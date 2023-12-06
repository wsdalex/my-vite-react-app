import { useEffect, useState } from "react";

const ToggleChallenge = () => {
  const [value, setValue] = useState(false);
  const clickHandle = () => {
    value ? setValue(false) : setValue(true);
  };

  return (
    <div>
      <button onClick={clickHandle}>Click me</button>
      {value ? <Element /> : <h1>Click button!</h1>}
    </div>
  );
};

const Element = () => {
  return (
    <div>
      <h1>The value is true!</h1>
    </div>
  );
};

export default ToggleChallenge;
