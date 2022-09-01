import * as React from 'react';
import { SVGProps } from 'react';

const SvgGenderMale = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 28a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm6.363-15.363L27 5m-6 0h6v6"
    />
  </svg>
);

export default SvgGenderMale;
