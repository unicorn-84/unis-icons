import * as React from 'react';
import { SVGProps } from 'react';

const Vibrate = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 25V7a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Zm4-14v10m4-8v6M6 11v10m-4-8v6"
    />
  </svg>
);

export default Vibrate;
