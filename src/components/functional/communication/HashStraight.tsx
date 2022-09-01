import * as React from 'react';
import { SVGProps } from 'react';

const SvgHashStraight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 12h22M5 20h22M20 5v22M12 5v22"
    />
  </svg>
);

export default SvgHashStraight;
