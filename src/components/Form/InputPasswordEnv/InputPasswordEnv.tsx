import { useEffect, useState } from "react";
import { Checkbox, Input, InputGroup, Stack } from "rsuite";
import EyeIcon from "@rsuite/icons/legacy/Eye";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";

export default function InputPasswordEnv({
  envCheckbox,
  envCheckboxOnChange,
  defaultChecked = false,
  ...props
}: {
  [key: string]: any;
}) {
  const [visible, setVisible] = useState(false);
  const [lastVissibleState, setLastVissibleState] = useState(false);
  const [env, setEnv] = useState(false);

  useEffect(() => {
    if (env) {
      setLastVissibleState(visible);
      setVisible(true);
    } else {
      setVisible(lastVissibleState);
    }
  }, [env]);

  const handleChange = () => {
    setVisible(!visible);
  };

  return (
    <Stack>
      <InputGroup inside size={props.size}>
        <Input type={visible ? "text" : "password"} {...props} />
        <InputGroup.Button onClick={handleChange} disabled={env}>
          {visible ? <EyeIcon /> : <EyeSlashIcon />}
        </InputGroup.Button>
      </InputGroup>
      {envCheckbox ? (
        <Checkbox
          onChange={(_val, checked, _event) => {
            setEnv(checked);
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
