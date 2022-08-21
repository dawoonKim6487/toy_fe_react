import { ReactNode } from "react";

type ComponentsProps = {
  children: ReactNode;
};

const Welcome = ({ children }: ComponentsProps) => <div>{children}</div>;

export default Welcome;
