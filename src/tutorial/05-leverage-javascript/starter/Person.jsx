import React from "react";
import avatar from "../../../assets/default-avatar.svg";

export function Person({ name, nickName = "Bum", images }) {
  const img = images?.[0]?.small?.url;
  return (
    <div>
      <img src={img ? img : avatar} alt={name} style={{ width: "50px" }} />
      <h2>{name}</h2>
      <p>{nickName}</p>
    </div>
  );
}
