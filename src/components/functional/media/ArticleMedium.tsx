import * as React from 'react';
import { SVGProps } from 'react';

const SvgArticleMedium = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#article-medium_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M3.013 7h2m9.999 0h2M3.013 17h3m7.999 0h3M21 13h9m-8.988 4h9M9 21h21M9 25h21M5.013 17V7l5 8 5-8v10M3 7h2m10 0h2M3 17h3m8 0h3m4-4h9m-9 4h9M9 21h21M9 25h21" />
      <path d="M5 17V7l5 8 5-8v10" />
    </g>
    <defs>
      <clipPath id="article-medium_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgArticleMedium;
