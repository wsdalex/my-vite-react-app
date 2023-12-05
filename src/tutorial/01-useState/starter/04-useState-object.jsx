import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "coding",
  });

  const changePerson = () => {
    setPerson({
      name: "john",
      age: "35",
      hobby: "running",
    });
  };

  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.hobby}</h2>
      <button type="button" className="btn" onClick={changePerson}>
        click me
      </button>
    </>
  );
};

export default UseStateObject;
