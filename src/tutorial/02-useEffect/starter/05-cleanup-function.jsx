import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [value, setValue] = useState(false);

  return (
    <div>
      <button className="btn" type="button" onClick={() => setValue(!value)}>
        Toggle
      </button>
      {value && <SomeComponent />}
    </div>
  );
};

const SomeComponent = () => {
  useEffect(() => {
    console.log("hmmmm");

    const intID = setInterval(() => {
      console.log("hello from interval");
    }, 1000);

    return () => {
      clearInterval(intID);
    };
  }, []);

  return (
    <div>
      <h1>The value is true</h1>
    </div>
  );
};

export default CleanupFunction;
