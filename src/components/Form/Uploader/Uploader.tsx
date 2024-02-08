import { Input, InputGroup } from "rsuite";
import { Icon } from "@rsuite/icons";
import { GrDocumentZip } from "react-icons/gr";
import "./style.less";
import React, { useEffect } from "react";

interface UploaderProps {
  name?: string;
  value?: FileList | null;
  onCLick?: React.MouseEventHandler<HTMLInputElement>;
  onChange?: any;
  rtl?: boolean;
  [key: string]: any;
}

export default function Uploader({
  onClick = () => {},
  name,
  value = null,
  onChange = () => {},
  rtl = false,
  ...props
}: UploaderProps) {
  const [uploadvalue, setValue] = React.useState("Select File : ");
  const inputRef = React.useRef(null);

  useEffect(() => {
    if (value !== null) {
      setValue(value[0].name);
      (inputRef.current as any).files = value;
    }
  }, []);

  return (
    <InputGroup>
      <Input
        readOnly
        value={uploadvalue}
        style={{ textAlign: rtl ? "right" : "left", cursor: "pointer" }}
        onClick={(event) => {
          (inputRef.current as any).click();
          onClick(event);
        }}
      />
      <input
        className="hideInput"
        type="file"
        ref={inputRef}
        name={name}
        onChange={(event) => {
          setValue(
            event.target.files?.length && event.target.files.length >= 1
              ? event.target.files[0].name
              : "Select File : "
          );
          onChange(event.target.files);
        }}
        {...props}
      />
      <InputGroup.Button onClick={() => (inputRef.current as any).click()}>
        <Icon as={GrDocumentZip} />
      </InputGroup.Button>
    </InputGroup>
  );
}
