import React from "react";
import { Button, ButtonProps, FlexboxGrid, Modal, ModalProps } from "rsuite";
import "./AlertModal.style.less";

interface AlertModalProps extends ModalProps {
  children?: JSX.Element[];
  confirmButtonProps?: ButtonProps;
  confirmButtonText?: string | JSX.Element;
  CancelButtonProps?: ButtonProps;
  CancelButtonText?: string | JSX.Element;
}

export default function AlertModal({
  children,
  confirmButtonProps,
  CancelButtonProps,
  confirmButtonText = "Confirm",
  CancelButtonText = "Cancel",
  backdrop = "static",
  role = "alertdialog",
  size = "xs",
  ...props
}: AlertModalProps) {
  return (
    <Modal backdrop={backdrop} role={role} {...props} size={size}>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <FlexboxGrid justify="space-between">
          <FlexboxGrid.Item>
            <Button
              {...confirmButtonProps}
              appearance={
                confirmButtonProps!.appearance
                  ? confirmButtonProps!.appearance
                  : "primary"
              }
              style={{ minWidth: "80px" }}
            >
              {confirmButtonText}
            </Button>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item>
            <Button
              {...CancelButtonProps}
              appearance={
                CancelButtonProps!.appearance
                  ? CancelButtonProps!.appearance
                  : "primary"
              }
              style={{ minWidth: "80px" }}
            >
              {CancelButtonText}
            </Button>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Modal.Footer>
    </Modal>
  );
}
