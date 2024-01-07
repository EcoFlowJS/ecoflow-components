import React, { CSSProperties } from "react";
import "./LoadingDotInfinity.style.less";
import styled from "styled-components";

interface LoadingDotInfinityProps {
  style?: CSSProperties;
  loaderColor?: string;
}

export default function (
  { loaderColor, style }: LoadingDotInfinityProps = { loaderColor: "#fff" }
) {
  const LoadingDotInfinity = styled.div`
    --c: ${loaderColor} 92%, transparent;
  `;
  return <LoadingDotInfinity className="loadingdotinfinity" style={style} />;
}
