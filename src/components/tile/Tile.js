import React from "react";

export const Tile = ({ key, name, description }) => {
  const renderDescription = Object.values(description).map((info, index) => {
    return <p key={index}>{info}</p>
  })
  return (
    <div key={key} className="tile-container">
      <p className="tile-title">{name}</p>
      {renderDescription}
    </div>
  );
};
