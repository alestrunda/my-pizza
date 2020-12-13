import React from "react";

interface Props {
  children: React.ReactNode;
}

const Page = ({ children }: Props) => (
  <div className="page">
    <div className="container">{children}</div>
  </div>
);

export default Page;
