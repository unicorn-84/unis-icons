import * as React from 'react';
import { SVGProps } from 'react';

const SnapchatLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.313 23.587S9 20.487 9 10a7 7 0 1 1 14 0c0 10.488 6.688 13.587 6.688 13.587-1.163 1.088-3.625.425-5.025 1.188-1.4.763-2.125 3.2-3.688 3.6C19.412 28.775 17.625 27 16 27c-1.625 0-3.463 1.762-4.975 1.375-1.513-.387-2.313-2.837-3.688-3.6-1.374-.762-3.862-.1-5.024-1.188Zm21.35-8.249L27 14M8.338 15.338 5 14"
    />
  </svg>
);

export default SnapchatLogo;
