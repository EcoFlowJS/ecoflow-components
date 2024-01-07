import React, { CSSProperties } from "react";
import "./LoadingSquareCircle.style.less";
import styled from "styled-components";

interface LoadingSquareCircleProps {
  style?: CSSProperties;
  loaderColor?: string;
}

export default function (
  { loaderColor, style }: LoadingSquareCircleProps = { loaderColor: "#fff" }
) {
  const LoadingSquareCircle = styled.div`
    &:after,
    &:before {
      box-shadow: 0 0 0 3px inset ${loaderColor};
    }
  `;
  return <LoadingSquareCircle className="loadingsquarecircle" style={style} />;
}
