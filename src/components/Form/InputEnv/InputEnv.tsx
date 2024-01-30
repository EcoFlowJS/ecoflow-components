import React from "react";
import { Checkbox, Input, InputGroup, Stack } from "rsuite";

export default function InputEnv({
  envCheckbox,
  envCheckboxOnChange,
  size,
  ...props
}: {
  [key: string]: any;
}) {
  return (
    <Stack>
      <InputGroup inside size={size}>
        <Input {...props} />
      </InputGroup>
      {envCheckbox ? (
        <Checkbox
          onChange={(_val, checked, _event) => {
            envCheckboxOnChange(checked);
          }}
        >
          ENV
        </Checkbox>
      ) : (
        <></>
      )}
    </Stack>
  );
}
