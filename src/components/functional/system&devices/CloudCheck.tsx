import * as React from 'react';
import { SVGProps } from 'react';

const SvgCloudCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 16a10 10 0 1 1 10 10H9a7 7 0 0 1 0-14c.586 0 1.17.071 1.738.213"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m24 14.5-6 6-3-3"
    />
  </svg>
);

export default SvgCloudCheck;
