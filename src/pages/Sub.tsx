import { ReactNode } from "react";

type ComponentsProps = {
  children: ReactNode;
};

const Sub = ({ children }: ComponentsProps) => <div>{children}</div>;

export default Sub;
