import * as React from 'react';
import { SVGProps } from 'react';

const SvgOctagon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.563 4h-9.125a.987.987 0 0 0-.7.288l-6.45 6.45a.988.988 0 0 0-.288.7v9.124a.987.987 0 0 0 .288.7l6.45 6.45a.99.99 0 0 0 .7.288h9.124a.987.987 0 0 0 .7-.288l6.45-6.45a.987.987 0 0 0 .288-.7v-9.125a.987.987 0 0 0-.288-.7l-6.45-6.45a.986.986 0 0 0-.7-.287Z"
    />
  </svg>
);

export default SvgOctagon;
