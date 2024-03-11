import React from "react";
import { IconButton } from "rsuite";
import FacebookOfficialIcon from "@rsuite/icons/legacy/FacebookOfficial";

interface ButtonOptions {
  list?: IconButtonOptions[];
}

interface IconButtonOptions {
  buttonText: string;
}

export default function IconSelector(Props: ButtonOptions): JSX.Element {
  const { list } = Props;
  return (
    <>
      {list!.map((buttonOptions, key) => {
        return (
          <IconButton
            icon={<FacebookOfficialIcon />}
            color="blue"
            appearance="primary"
            circle
          />
        );
      })}
    </>
  );
}
