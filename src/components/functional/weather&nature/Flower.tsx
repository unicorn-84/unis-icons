import * as React from 'react';
import { SVGProps } from 'react';

const Flower = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#flower_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M16 19.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
      <path d="M14.375 12.9C13.463 10.975 12.5 8.575 12.5 7a3.5 3.5 0 1 1 7 0c0 1.575-.962 3.975-1.875 5.9M12.5 15.85c-2.125-.162-4.688-.537-6.05-1.325a3.5 3.5 0 0 1 3.5-6.05c1.363.775 2.963 2.813 4.175 4.575m0 5.9c-1.213 1.762-2.813 3.8-4.175 4.575a3.5 3.5 0 1 1-3.5-6.05c1.362-.788 3.925-1.163 6.05-1.325m5.125 2.95c.913 1.925 1.875 4.325 1.875 5.9a3.5 3.5 0 1 1-7 0c0-1.575.963-3.975 1.875-5.9m5.125-2.95c2.125.163 4.688.538 6.05 1.325a3.5 3.5 0 0 1-3.5 6.05c-1.363-.775-2.963-2.813-4.175-4.575m0-5.9c1.212-1.763 2.813-3.8 4.175-4.575a3.5 3.5 0 0 1 3.5 6.05c-1.363.787-3.925 1.162-6.05 1.325" />
    </g>
    <defs>
      <clipPath id="flower_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Flower;
