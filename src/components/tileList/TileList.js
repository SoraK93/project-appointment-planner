import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ list }) => {
  const contactsToRender = list?.map((info, index) => {
    const { name, ...rest } = info
    return <Tile idx={index} name={name} description={rest} />
  })

  return (
    <div>
      {contactsToRender}
    </div>
  );
};
