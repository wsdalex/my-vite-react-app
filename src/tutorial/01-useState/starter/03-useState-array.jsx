import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  const clearPeople = () => {
    setPeople([]);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removePerson(id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={clearPeople}>
        Clear List
      </button>
    </>
  );
};

export default UseStateArray;
