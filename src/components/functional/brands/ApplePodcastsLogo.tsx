import * as React from 'react';
import { SVGProps } from 'react';

const ApplePodcastsLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.363 28h-.726a2 2 0 0 1-1.962-1.613l-1.2-6A1.998 1.998 0 0 1 14.438 18h3.124a2 2 0 0 1 1.963 2.387l-1.2 6A2 2 0 0 1 16.363 28v0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.537 18.9a8 8 0 1 1 14.925 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.55 26.113a12 12 0 1 1 12.9 0"
    />
  </svg>
);

export default ApplePodcastsLogo;
