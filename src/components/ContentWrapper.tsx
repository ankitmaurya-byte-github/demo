import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ContentWrapper = ({ children }: Props) => {
  return <div className="w-full max-w-[1200px] mx-auto px-5">{children}</div>;
};

export default ContentWrapper;
