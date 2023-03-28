import React, { ReactNode } from 'react';

type IContentProps = {
  children: ReactNode;
};

const Content = (props: IContentProps) => (
  <div className="content">
    {props.children}

    <style jsx>
      {`
        .content :global(*) {
          @apply break-words;
        }
        .content :global(p) {
          @apply my-1;
          font-size: 1.125rem;
          --text-opacity: 1;
          color: #2d3748;
          color: rgba(45, 55, 72, var(--text-opacity));
        }
        .content :global(ul) {
          @apply my-6;
        }
        .content :global(h2) {
          @apply text-2xl font-semibold text-gray-800 my-4;
        }
        .content :global(h3) {
          line-height: 20px;
          @apply text-xl font-semibold text-gray-700 my-2;
        }
        .content :global(style) {
          @apply text-xl font-semibold text-blue-700 my-4;
        }
      `}
    </style>
  </div>
);

export { Content };