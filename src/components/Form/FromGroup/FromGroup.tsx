import React, { CSSProperties } from "react";
import { Form } from "rsuite";

interface FormGroupProps {
  name: string;
  label: string;
  helperText?: string | JSX.Element;
  accepter?: React.ElementType<any, keyof React.JSX.IntrinsicElements>;
  envCheckbox?: boolean;
  helperTextStyle?: CSSProperties;
  envCheckboxOnChange?: (val: boolean) => void;
  [key: string]: any;
}

export default function FormGroup({
  name,
  label,
  helperText,
  accepter,
  helperTextStyle = {},
  ...rest
}: FormGroupProps) {
  return (
    <Form.Group controlId={name}>
      <Form.ControlLabel style={{ width: 220 }}>{label}</Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
      {helperText ? (
        <Form.HelpText style={helperTextStyle}>{helperText}</Form.HelpText>
      ) : (
        <></>
      )}
    </Form.Group>
  );
}
