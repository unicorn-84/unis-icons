import * as React from 'react';
import { SVGProps } from 'react';

const SvgCube = (props: SVGProps<SVGSVGElement>) => (
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
      d="M28 22.163V9.838a1.013 1.013 0 0 0-.512-.875l-11-6.188a.975.975 0 0 0-.976 0l-11 6.188A1.012 1.012 0 0 0 4 9.838v12.325a1.012 1.012 0 0 0 .513.875l11 6.187a.975.975 0 0 0 .975 0l11-6.188a1.013 1.013 0 0 0 .512-.874v0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M27.862 9.325 16.112 16 4.138 9.325M16.113 16 16 29.35"
    />
  </svg>
);

export default SvgCube;
