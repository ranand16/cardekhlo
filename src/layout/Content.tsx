import React, { ReactNode } from "react";

type IContentProps = {
  children: ReactNode;
};

const Content = (props: IContentProps) => (
  <div className="">
    {props.children}

    <style jsx>
      {`
        .content :global(*) {
          @apply break-words;
        }
        .content :global(ul) {
          @apply my-6;
        }

        .content :global(style) {
          @apply text-xl font-semibold text-blue-700 my-4;
        }
      `}
    </style>
  </div>
);

export { Content };
