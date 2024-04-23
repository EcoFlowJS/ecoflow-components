import { CSSProperties } from "react";
import "./LoadingSquareCircle.style.less";
import styled from "styled-components";

interface LoadingSquareCircleProps {
  scale?: CSSProperties["scale"];
  loaderColor?: string;
}

const LoadingSquareCircle = styled.div<{ loadercolor?: string }>`
  &:after,
  &:before {
    box-shadow: 0 0 0 3px inset ${(props) => props.loadercolor};
  }
`;

export default function ({
  loaderColor = "#FFF",
  scale,
}: LoadingSquareCircleProps) {
  return (
    <LoadingSquareCircle
      loadercolor={loaderColor}
      className="loadingsquarecircle"
      style={{ scale: scale }}
    />
  );
}
