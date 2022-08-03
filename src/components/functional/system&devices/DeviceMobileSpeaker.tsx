import * as React from 'react';
import { SVGProps } from 'react';

const DeviceMobileSpeaker = (props: SVGProps<SVGSVGElement>) => (
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
      d="M24 27V5a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2ZM12 7h8"
    />
  </svg>
);

export default DeviceMobileSpeaker;
