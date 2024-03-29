import { Checkbox, Input, InputGroup, Stack } from "rsuite";

export default function InputEnv({
  envCheckbox,
  envCheckboxOnChange,
  defaultChecked = false,
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
          defaultChecked={defaultChecked}
        >
          ENV
        </Checkbox>
      ) : (
        <></>
      )}
    </Stack>
  );
}
