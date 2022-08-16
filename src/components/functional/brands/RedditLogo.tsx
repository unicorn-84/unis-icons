import * as React from 'react';
import { SVGProps } from 'react';

const RedditLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M23.5 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-3.375 16a8.987 8.987 0 0 1-8.25 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16 9 1-6 4.525.7m-14.1 7.538C9.713 9.838 12.713 9 16 9c3.288 0 6.288.838 8.575 2.238a3.001 3.001 0 0 1 4.911 3.445 3 3 0 0 1-.961.905v0c.314.765.476 1.585.475 2.412 0 4.975-5.825 9-13 9S3 22.975 3 18c0-.828.16-1.647.475-2.412v0a3 3 0 1 1 3.95-4.35v0Z"
    />
    <path
      fill="currentColor"
      d="M11 18.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </svg>
);

export default RedditLogo;
