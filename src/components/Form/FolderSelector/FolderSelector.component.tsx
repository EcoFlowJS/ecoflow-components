import { CSSProperties, ChangeEvent, useEffect, useState } from "react";
import { Button, Input, InputGroup, InputProps, Modal, Tree } from "rsuite";
import { FormControlBaseProps, ItemDataType } from "rsuite/esm/internals/types";
import FolderFillIcon from "@rsuite/icons/FolderFill";
import PageIcon from "@rsuite/icons/Page";
import { ApiResponse } from "@ecoflow/types";

interface FolderSelectorProps
  extends Omit<FormControlBaseProps<string>, "onChange">,
    Omit<
      InputProps,
      | "name"
      | "value"
      | "defaultValue"
      | "onChange"
      | "disabled"
      | "plaintext"
      | "readOnly"
      | "type"
    > {
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
  fileType?: "Directory" | "File";
  inside?: boolean;
  width?: CSSProperties["width"];
  showIndentLine?: boolean;
  fetchDirectory?: (
    path?: string,
    type?: "Directory" | "File"
  ) => Promise<ApiResponse>;
}

export default function FolderSelector({
  fileType = "File",
  width,
  name,
  value,
  defaultValue,
  inside = false,
  showIndentLine,
  onChange = () => {},
  disabled,
  fetchDirectory = async () => ({}),
  ...props
}: FolderSelectorProps) {
  const [folderValue, setFolderValue] = useState(value || defaultValue || "");

  const [openModal, setOpenModal] = useState(false);
  const [basePath, setBasePath] = useState<ItemDataType<string>[]>([]);
  const [_isBasePathLoading, setBasePathLoading] = useState(false);
  let selectedValue = value || defaultValue || "";

  const handleClose = () => setOpenModal(false);

  const getChildren = async ({
    value,
  }: ItemDataType): Promise<ItemDataType<string>[]> => {
    if (typeof value !== "string") return [];
    try {
      const { success, payload } = await fetchDirectory(
        value as string,
        fileType
      );
      if (success)
        return payload?.map(({ name, type }: any) => ({
          label: name,
          value: value.endsWith("/") ? `${value}${name}` : `${value}/${name}`,
          children: type === "Directory" ? [] : null,
        }));
    } catch (err) {
      console.error(err);
    }
    return [];
  };

  useEffect(() => onChange(folderValue), [folderValue]);

  useEffect(() => {
    if (fetchDirectory) {
      setBasePathLoading(true);
      fetchDirectory().then(
        ({ success, payload }: ApiResponse) => {
          setBasePathLoading(false);
          if (success)
            setBasePath(
              payload?.map((value: any) => ({
                label: value,
                value,
                children: [],
              }))
            );
        },
        ({ error, payload }: ApiResponse) => {
          setBasePathLoading(false);
          if (error) console.error(payload);
          setBasePath([]);
        }
      );
    }
  }, []);

  return (
    <>
      <InputGroup inside={inside} style={width ? { width } : {}}>
        <Input
          name={name}
          type="text"
          value={folderValue}
          disabled={disabled}
          {...props}
          onChange={(value: string, event: ChangeEvent<HTMLInputElement>) => {
            setFolderValue(value);
            onChange(value, event);
          }}
        />
        <InputGroup.Button
          onClick={() => setOpenModal(disabled ? false : true)}
        >
          <FolderFillIcon />
        </InputGroup.Button>
      </InputGroup>

      <Modal open={openModal} onClose={handleClose} overflow>
        <Modal.Header>
          <Modal.Title>
            Select {fileType === "Directory" ? "directory" : "file"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tree
            data={basePath}
            value={value}
            getChildren={getChildren}
            showIndentLine={showIndentLine}
            onSelect={(_, value) => (selectedValue = value as string)}
            renderTreeNode={(node) => {
              return (
                <TreeNode>
                  {node.children ? <FolderFillIcon /> : <PageIcon />}{" "}
                  {node.label}
                </TreeNode>
              );
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              handleClose();
              setFolderValue(selectedValue);
            }}
            appearance="primary"
          >
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const TreeNode = ({ children, ...rest }: any) => {
  return (
    <div {...rest} style={{ display: "flex", alignItems: "center", gap: 4 }}>
      {children}
    </div>
  );
};
