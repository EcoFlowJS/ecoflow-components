import { Button, Input, InputGroup } from "rsuite";
import { GrDocumentZip } from "react-icons/gr";
import "./style.less";
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
} from "react";
import IconWrapper from "../../IconWrapper/IconWrapper";

interface UploaderProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "value" | "name" | "onClick" | "onChange" | "rtl"
  > {
  name?: string;
  value?: FileList | null;
  hideTextArea?: boolean;
  buttonText?: string;
  icon?: ReactNode;
  rtl?: boolean;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onChange?: (value: FileList | null) => void;
  onCancel?: () => void;
}

export default function Uploader({
  name,
  value = null,
  hideTextArea = false,
  buttonText,
  icon,
  rtl = false,
  onChange = () => {},
  onClick = () => {},
  ...props
}: UploaderProps) {
  const [uploadvalue, setValue] = React.useState("Select File : ");
  const [inputvalue, setInputValue] = React.useState("");
  const inputRefTextArea = React.useRef(null);
  const inputRefNoTextArea = React.useRef(null);

  const fileNameList = (files: FileList): string => {
    let result = "";
    for (let i = 0; i < files.length; i++) {
      result = `${result} ${files.item(i)?.name},`;
    }
    return result;
  };

  useEffect(() => {
    if (value !== null) {
      setValue(value[0].name);
      if (hideTextArea) (inputRefNoTextArea.current as any).files = value;
      else (inputRefTextArea.current as any).files = value;
      return;
    }
    setInputValue("");
    setValue("Select File : ");
  }, [value]);

  return (
    <>
      {!hideTextArea ? (
        <InputGroup>
          <Input
            readOnly
            value={uploadvalue}
            style={{ textAlign: rtl ? "right" : "left", cursor: "pointer" }}
            onClick={(event) => {
              (inputRefTextArea.current as any).click();
              onClick(event);
            }}
          />
          <input
            className="hideInput"
            type="file"
            ref={inputRefTextArea}
            value={inputvalue}
            name={name}
            onChange={(event) => {
              setValue(
                event.target.files?.length && event.target.files.length > 0
                  ? event.target.files.length > 1
                    ? fileNameList(event.target.files)
                    : event.target.files[0].name
                  : "Select File : "
              );
              onChange(event.target.files);
              setInputValue(event.target.value);
            }}
            {...props}
          />
          <InputGroup.Button
            onClick={() => (inputRefTextArea.current as any).click()}
            startIcon={icon ? icon : <IconWrapper icon={GrDocumentZip} />}
          >
            {buttonText}
          </InputGroup.Button>
        </InputGroup>
      ) : (
        <>
          <input
            className="hideInput"
            type="file"
            ref={inputRefNoTextArea}
            value={inputvalue}
            name={name}
            onChange={(event) => {
              setValue(
                event.target.files?.length && event.target.files.length > 0
                  ? event.target.files.length > 1
                    ? fileNameList(event.target.files)
                    : event.target.files[0].name
                  : "Select File : "
              );
              onChange(event.target.files);
              setInputValue(event.target.value);
            }}
            {...props}
          />
          <Button
            onClick={() => (inputRefNoTextArea.current as any).click()}
            startIcon={icon ? icon : <IconWrapper icon={GrDocumentZip} />}
          >
            {buttonText}
          </Button>
        </>
      )}
    </>
  );
}
