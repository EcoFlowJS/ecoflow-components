import React from "react";
import { Form } from "rsuite";

interface FormGroupProps {
  name: string;
  label: string;
  helperText?: string | JSX.Element;
  accepter?: React.ElementType<any, keyof React.JSX.IntrinsicElements>;
  envCheckbox?: boolean;
  envCheckboxOnChange?: (val: boolean) => void;
  [key: string]: any;
}

export default function FormGroup({
  name,
  label,
  helperText,
  accepter,
  ...rest
}: FormGroupProps) {
  return (
    <Form.Group controlId={name}>
      <Form.ControlLabel>{label}</Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
      {helperText ? <Form.HelpText>{helperText}</Form.HelpText> : <></>}
    </Form.Group>
  );
}
