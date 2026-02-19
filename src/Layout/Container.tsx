"use client";

import { FC } from "react";

interface IContainer {
  children: React.ReactNode;
  className?: string;
  rest?: React.HTMLAttributes<HTMLDivElement>;
}

const Container: FC<IContainer> = ({ children, className = "", ...rest }) => {
  return (
    <div className={`container mx-auto my-20 ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;
