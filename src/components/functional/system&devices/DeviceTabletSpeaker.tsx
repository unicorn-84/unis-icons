import * as React from 'react';
import { SVGProps } from 'react';

const DeviceTabletSpeaker = (props: SVGProps<SVGSVGElement>) => (
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
      d="M26 26V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2ZM12 8h8"
    />
  </svg>
);

export default DeviceTabletSpeaker;