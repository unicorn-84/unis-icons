import * as React from 'react';
import { SVGProps } from 'react';

const SlackLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 13v3H7a3 3 0 0 1 0-6h6a3 3 0 0 1 3 3v0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 10h-3a2.987 2.987 0 0 1-3-3v0a2.987 2.987 0 0 1 3-3v0a2.987 2.987 0 0 1 3 3v3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 16h-3V7a3 3 0 0 1 6 0v6a3 3 0 0 1-3 3v0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 16v-3a2.986 2.986 0 0 1 3-3v0a2.988 2.988 0 0 1 3 3v0a2.988 2.988 0 0 1-3 3h-3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 19v-3h9a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 22h3a2.988 2.988 0 0 1 3 3v0a2.988 2.988 0 0 1-3 3 2.986 2.986 0 0 1-3-3v-3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h3v9a3 3 0 0 1-3 3v0a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3v0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 16v3a2.988 2.988 0 0 1-3 3v0a2.986 2.986 0 0 1-3-3 2.987 2.987 0 0 1 3-3h3Z"
    />
  </svg>
);

export default SlackLogo;
