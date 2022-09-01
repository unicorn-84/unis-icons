import * as React from 'react';
import { SVGProps } from 'react';

const SvgNewspaper = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#newspaper_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14h10m-10 4h10M4 25a2 2 0 0 0 2-2V8a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v15a2 2 0 0 1-2 2H4Zm0 0a2 2 0 0 1-2-2V11"
      />
    </g>
    <defs>
      <clipPath id="newspaper_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgNewspaper;
