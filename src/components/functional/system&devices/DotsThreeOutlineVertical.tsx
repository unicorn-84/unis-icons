import * as React from 'react';
import { SVGProps } from 'react';

const SvgDotsThreeOutlineVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M16 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </svg>
);

export default SvgDotsThreeOutlineVertical;
