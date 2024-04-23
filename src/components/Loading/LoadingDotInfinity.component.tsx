import { CSSProperties } from "react";
import "./LoadingDotInfinity.style.less";
import styled from "styled-components";

interface LoadingDotInfinityProps {
  scale?: CSSProperties["scale"];
  loaderColor?: string;
}

const LoadingDotInfinity = styled.div<{ loaderColor?: string }>`
  --c: ${(props) => props.loaderColor || "#FFFFFF"} 92%, transparent;
`;

export default function (
  { loaderColor, scale }: LoadingDotInfinityProps = { loaderColor: "#fff" }
) {
  return (
    <LoadingDotInfinity
      className="loadingdotinfinity"
      loaderColor={loaderColor}
      style={{ scale: scale }}
    />
  );
}
