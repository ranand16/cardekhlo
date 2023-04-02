import React, { ReactNode } from "react";

import { Navbar } from "../layout/Navbar";
import { AppConfig } from "@/utility/Constants";
import Footer from "./Footer";

type IMainProps = {
  meta: ReactNode;
  children?: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-3 md:px-0">
    {props.meta}

    <div className="mx-auto">
      <Navbar />

      <div className="text-xl py-5">{props.children}</div>

      <Footer />
    </div>
  </div>
);

export { Main };
