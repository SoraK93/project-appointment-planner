import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ list }) => {
  const contactsToRender = list?.map((contact, index) => {
    const { name, ...rest } = contact
    return <Tile key={index} name={name} description={rest} />
  })

  return (
    <div>
      {contactsToRender}
    </div>
  );
};
