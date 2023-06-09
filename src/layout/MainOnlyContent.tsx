import React, { ReactNode } from "react";
import Navbar from "./Navbar";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const MainOnlyContent = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}
    <Navbar />
    <div>{props.children}</div>
  </div>
);

export { MainOnlyContent };
