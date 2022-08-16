import * as React from 'react';
import { SVGProps } from 'react';

const GithubLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.5 30a2.986 2.986 0 0 0 3-3v-6m8 9a2.986 2.986 0 0 1-3-3v-6m.5 0h2a2.988 2.988 0 0 1 3 3v1a2.986 2.986 0 0 0 3 3m-14-7h-2a2.988 2.988 0 0 0-3 3v1a2.987 2.987 0 0 1-3 3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.975 8A6.5 6.5 0 0 0 8.5 5a6.5 6.5 0 0 0-.438 5.588A6.163 6.163 0 0 0 7 14v1a6 6 0 0 0 6 6h6a6 6 0 0 0 6-6v-1a6.163 6.163 0 0 0-1.063-3.412A6.5 6.5 0 0 0 23.5 5a6.5 6.5 0 0 0-5.475 3h-4.05Z"
    />
  </svg>
);

export default GithubLogo;
