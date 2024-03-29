import { CSSProperties } from "react";
import "./LoadingDotInfinity.style.less";
import styled from "styled-components";

interface LoadingDotInfinityProps {
  scale?: CSSProperties["scale"];
  loaderColor?: string;
}

export default function (
  { loaderColor, scale }: LoadingDotInfinityProps = { loaderColor: "#fff" }
) {
  const LoadingDotInfinity = styled.div`
    --c: ${loaderColor} 92%, transparent;
  `;
  return (
    <LoadingDotInfinity
      className="loadingdotinfinity"
      style={{ scale: scale }}
    />
  );
}
