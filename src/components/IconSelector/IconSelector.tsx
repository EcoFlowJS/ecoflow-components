import { IconButton, IconButtonProps } from "rsuite";

interface IconSelectorProps {
  list?: IconButtonProps[];
}

export default function IconSelector({ list }: IconSelectorProps) {
  return (
    <>
      {list ? (
        list.map((props, index) => {
          return <IconButton key={index} {...props} />;
        })
      ) : (
        <></>
      )}
    </>
  );
}
