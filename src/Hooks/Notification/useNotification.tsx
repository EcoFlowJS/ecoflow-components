import {
  Divider,
  Placeholder,
  Notification as RsuiteNotification,
  NotificationProps as RsuiteNotificationProps,
  useToaster,
} from "rsuite";
import { PlacementType } from "rsuite/esm/toaster/ToastContainer";

interface NotificationProps extends RsuiteNotificationProps {
  children?: JSX.Element;
  placement?: PlacementType;
  divider?: boolean;
}

export default function useNotification({
  children,
  placement = "topEnd",
  divider = false,
  ...props
}: NotificationProps = {}): {
  show: () => void;
  remove: (key: string) => void;
  clear: () => void;
} {
  const toast = useToaster();

  const msg = (
    <RsuiteNotification
      type={props.type ? props.type : "info"}
      header={props.header ? props.header : "INFO"}
      closable={props.closable ? props.closable : true}
      {...props}
    >
      {children ? (
        <div style={{ width: 320 }}>
          {divider ? <Divider /> : <></>}
          {children}
        </div>
      ) : (
        <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
      )}
    </RsuiteNotification>
  );

  return {
    show: () => toast.push(msg, { placement }),
    remove: (key: string) => toast.remove(key),
    clear: () => toast.clear(),
  };
}
