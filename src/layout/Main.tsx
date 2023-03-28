import React, { ReactNode } from 'react';

import Link from 'next/link';
import { Navbar } from '../layout/Navbar';
import { AppConfig } from '@/utility/Constants';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-3 md:px-0">
    {props.meta}

    <div className="mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="font-semibold text-3xl text-gray-900">
            {AppConfig.title}
          </div>
          <div className="text-xl">{AppConfig.description}</div>
        </div>
        <div>
          {/* <Navbar>
            <li className="mr-6">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about">
                About
              </Link>
            </li>
          </Navbar> */}
          <Navbar/>
        </div>
      </div>

      <div className="text-xl py-5">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by <a href="">Rishabh Anand</a>
      </div>
    </div>
  </div>
);

export { Main };