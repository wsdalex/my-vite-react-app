import React, { useReducer, useState } from "react";
import { data } from "../../../data";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";
import reducer from "./reducer";

const defaultState = {
  people: data,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

  return (
    <div>
      {state.people.length ? (
        <div>
          {state.people.map((person) => {
            const { id, name } = person;
            return (
              <div key={id} className="item">
                <h4>{name}</h4>
                <button onClick={() => removeItem(id)}>remove</button>
              </div>
            );
          })}
          <button
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={clearList}
          >
            clear items
          </button>{" "}
        </div>
      ) : (
        <div>
          <button
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={resetList}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default ReducerBasics;
