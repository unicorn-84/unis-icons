import * as React from 'react';
import { SVGProps } from 'react';

const SvgDiamondsFour = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.288 3.71 11.7 7.299a1 1 0 0 0 0 1.414l3.586 3.586a1 1 0 0 0 1.414 0l3.588-3.589a1 1 0 0 0 0-1.414L16.703 3.71a1 1 0 0 0-1.415 0Zm8.002 8-3.59 3.588a1 1 0 0 0 0 1.415l3.586 3.586a1 1 0 0 0 1.414 0l3.589-3.589a1 1 0 0 0 0-1.414l-3.586-3.586a1 1 0 0 0-1.414 0Zm-16.002-.011L3.7 15.287a1 1 0 0 0 0 1.414l3.586 3.586a1 1 0 0 0 1.414 0l3.589-3.588a1 1 0 0 0 0-1.414l-3.586-3.586a1 1 0 0 0-1.415 0Zm8.002 8-3.59 3.588a1 1 0 0 0 0 1.415l3.586 3.585a1 1 0 0 0 1.414 0l3.59-3.587a1 1 0 0 0 0-1.414L16.704 19.7a1 1 0 0 0-1.414 0Z"
    />
  </svg>
);

export default SvgDiamondsFour;
