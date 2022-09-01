import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlagBanner = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 27V6h23l-6 7.5 6 7.5H5"
    />
  </svg>
);

export default SvgFlagBanner;
