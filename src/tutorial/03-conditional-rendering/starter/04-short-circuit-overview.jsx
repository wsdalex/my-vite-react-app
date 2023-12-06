import { useState } from "react";

const ShortCircuitOverview = () => {
  const [string, setString] = useState("");
  const [num, setNum] = useState(0);

  return (
    <div>
      <h4>falsy OR : {string || "hello world"}</h4>
      <h4>falsy AND : {string && "hello world"}</h4>
      <h4>truthy OR : {num || "hello world"}</h4>
      <h4>truthy And : {num && "hello world"}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
