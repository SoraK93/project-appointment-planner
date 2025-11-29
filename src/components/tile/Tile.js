import React from "react";

export const Tile = ({ idx, name, description }) => {
  const renderDescription = Object.values(description).map((info, index) => {
    return <p key={`${info}-${index}`}>{info}</p>
  })
  return (
    <div key={idx} className="tile-container">
      <p className="tile-title">{name}</p>
      {renderDescription}
    </div>
  );
};
