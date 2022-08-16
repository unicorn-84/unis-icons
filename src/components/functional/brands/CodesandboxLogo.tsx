import * as React from 'react';
import { SVGProps } from 'react';

const CodesandboxLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M28 22.163V9.837a1.013 1.013 0 0 0-.512-.875l-11-6.187a.975.975 0 0 0-.976 0l-11 6.187A1.012 1.012 0 0 0 4 9.837v12.326a1.013 1.013 0 0 0 .513.875l11 6.187a.976.976 0 0 0 .975 0l11-6.188a1.013 1.013 0 0 0 .512-.874v0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M27.863 9.325 16.113 16 4.138 9.325M16.113 16 16 29.35"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22.125 5.938 16 9.387l-6.125-3.45M22 26.125v-6.887l6-3.375M10 26.125v-6.887l-6-3.375"
    />
  </svg>
);

export default CodesandboxLogo;
