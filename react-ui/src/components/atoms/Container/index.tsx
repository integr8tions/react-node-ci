import React from "react";

import "./styles.scss";

interface ContainerProps {
  style?: React.CSSProperties | undefined;
  className?: string;
  largePaddings?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  style,
  className,
  largePaddings = false,
}) => {
  return (
    <div
      className={`container ${className || ""} ${largePaddings ? "x-paddings" : ""}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Container;
