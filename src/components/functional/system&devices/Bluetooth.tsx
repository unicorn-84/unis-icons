import * as React from 'react';
import { SVGProps } from 'react';

const SvgBluetooth = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15 4 8 6-8 6V4Zm0 12 8 6-8 6V16Zm-8-6 8 6m-8 6 8-6"
    />
  </svg>
);

export default SvgBluetooth;
