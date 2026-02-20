"use client";

import { FC } from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
  rest?: React.HTMLAttributes<HTMLDivElement>;
}

const ComponentLayout: FC<IProps> = ({ children, className = "", ...rest }) => {
  return (
    <section
      className={`mx-4 mb-[90px] mt-6 md:mx-[60px] ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
};

export default ComponentLayout;
