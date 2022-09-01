import * as React from 'react';
import { SVGProps } from 'react';

const SvgCalendarPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M26 5H6a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Zm-4-2v4M10 3v4m-5 4h22m-7.5 8h-7m3.5-3.5v7"
    />
  </svg>
);

export default SvgCalendarPlus;
