import * as React from 'react';
import { SVGProps } from 'react';

const FolderStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#folder-star_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M4 10V7a1 1 0 0 1 1-1h6.588a.987.987 0 0 1 .7.288L16 10m-.925 16H4.925A.925.925 0 0 1 4 25.075V10h23a1 1 0 0 1 1 1v4" />
      <path d="M23.5 24.813 27.212 27 26.2 22.925l3.3-2.725-4.337-.337L23.5 16l-1.663 3.863-4.337.337 3.3 2.725L19.788 27l3.712-2.188Z" />
    </g>
    <defs>
      <clipPath id="folder-star_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default FolderStar;
