import * as React from 'react';
import { SVGProps } from 'react';

const SvgPaintBrushHousehold = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9 13 10 10m-6.275-.075-3.9 3.9m.4-7.4-3.9 3.9m11.687-11.8 6.863-7.65a3.005 3.005 0 0 1 4.25 4.25l-7.65 6.863a1 1 0 0 0-.038 1.45l1.15 1.15a2.012 2.012 0 0 1 0 2.825L12 30 2 20l9.588-9.588a2.013 2.013 0 0 1 2.825 0l1.15 1.15a1 1 0 0 0 1.45-.037v0Z"
    />
  </svg>
);

export default SvgPaintBrushHousehold;
