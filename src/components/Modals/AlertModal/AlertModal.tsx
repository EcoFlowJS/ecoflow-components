import React from "react";
import { Button, ButtonProps, FlexboxGrid, Modal, ModalProps } from "rsuite";
import "./AlertModal.style.less";

interface AlertModalProps extends ModalProps {
  children?: React.ReactNode;
  confirmButtonProps?: ButtonProps;
  confirmButtonText?: string | JSX.Element;
  CancelButtonProps?: ButtonProps;
  CancelButtonText?: string | JSX.Element;
}

function AlertModal({
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
      {children}
      <Modal.Footer>
        <FlexboxGrid justify="space-between">
          <FlexboxGrid.Item>
            <Button
              {...confirmButtonProps}
              appearance={
                confirmButtonProps?.appearance
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
                CancelButtonProps?.appearance
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

AlertModal.Body = Modal.Body;
AlertModal.Header = Modal.Header;
AlertModal.Title = Modal.Title;

export default AlertModal;
