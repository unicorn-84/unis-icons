import * as React from 'react';
import { SVGProps } from 'react';

const Fingerprint = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.337 23.113A15.925 15.925 0 0 0 8 16a8.025 8.025 0 0 1 3-6.25M16 16a23.9 23.9 0 0 1-3 11.625"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 16a4 4 0 1 1 8 0 27.786 27.786 0 0 1-2.663 11.925"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M27.325 23c.448-2.306.674-4.65.675-7a12 12 0 0 0-24 0 11.8 11.8 0 0 1-.688 4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.6 20a20.239 20.239 0 0 1-2.263 5.988M15 8.063A8 8 0 0 1 24 16a32.574 32.574 0 0 1-.25 3.999M22.988 24c-.188.738-.4 1.475-.638 2.188"
    />
  </svg>
);

export default Fingerprint;
