import { CSSProperties } from "react";
import "./PageLoader.style.less";

interface PageLoaderProps {
  scale?: CSSProperties["scale"];
}

export default function (props: PageLoaderProps) {
  const { scale } = props;
  return (
    <div className="box" style={{ scale: scale }}>
      <div className="item">
        <div className="item__s"></div>
        <div className="item__s"></div>
        <div className="item__s"></div>
        <div className="item__s"></div>
      </div>
      <div className="item">
        <div className="item__s"></div>
        <div className="item__s"></div>
        <div className="item__s"></div>
        <div className="item__s"></div>
      </div>
      <div className="item">
        <div className="item__s"></div>
        <div className="item__s"></div>
        <div className="item__s"></div>
        <div className="item__s"></div>
      </div>
    </div>
  );
}
