import * as React from 'react';
import { SVGProps } from 'react';

const SpotifyLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22.387 13.537A14.012 14.012 0 0 0 9.6 13.55m10.938 3.538a9.987 9.987 0 0 0-9.088.012m7.238 3.537A5.913 5.913 0 0 0 16 20a6.088 6.088 0 0 0-2.7.637"
    />
  </svg>
);

export default SpotifyLogo;
