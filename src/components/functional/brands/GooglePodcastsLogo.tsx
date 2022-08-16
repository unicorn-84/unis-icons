import * as React from 'react';
import { SVGProps } from 'react';

const GooglePodcastsLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 3v3m6 2.5v3M16 26v3m0-19v12M10 8.5v8m12-1v8m-18-9v3m6 3v3m18-9v3"
    />
  </svg>
);

export default GooglePodcastsLogo;
