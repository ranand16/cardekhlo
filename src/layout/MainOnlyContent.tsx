import React, { ReactNode } from 'react';
import Navbar from './Navbar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const MainOnlyContent = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}
    <Navbar/>
    <div className="text-xl py-5">{props.children}</div>
  </div>
);

export { MainOnlyContent };