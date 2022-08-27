import * as React from 'react';
import { SVGProps } from 'react';

const FolderSimpleStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#folder-simple-star_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M15 26H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h6.662c.217 0 .427.071.6.2l3.476 2.6c.173.129.383.2.6.2H27a1 1 0 0 1 1 1v4" />
      <path d="M23.5 24.813 27.212 27 26.2 22.925l3.3-2.725-4.337-.337L23.5 16l-1.663 3.863-4.337.337 3.3 2.725L19.788 27l3.712-2.188Z" />
    </g>
    <defs>
      <clipPath id="folder-simple-star_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default FolderSimpleStar;
