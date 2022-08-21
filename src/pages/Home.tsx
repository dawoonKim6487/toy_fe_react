import { ReactNode } from "react";

type ComponentsProps = {
  children: ReactNode;
};

const Home = ({ children }: ComponentsProps) => <div>{children}</div>;

export default Home;
