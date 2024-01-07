import React from "react";
import "./LoadingDotInfinity.style.less";
import styled from "styled-components";

interface LoadingDotInfinityProps {
  loaderColor?: string;
}

export default function (
  { loaderColor }: LoadingDotInfinityProps = { loaderColor: "#fff" }
) {
  const LoadingDotInfinity = styled.div`
    --c: ${loaderColor} 92%, transparent;
  `;
  return <LoadingDotInfinity className="loadingdotinfinity" />;
}
