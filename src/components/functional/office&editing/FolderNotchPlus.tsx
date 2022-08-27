import * as React from 'react';
import { SVGProps } from 'react';

const FolderNotchPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#folder-notch-plus_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M16 10h11a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V13" />
      <path d="M11.662 13H4V8a1 1 0 0 1 1-1h6.662c.217 0 .427.071.6.2L16 10l-3.738 2.8c-.173.129-.383.2-.6.2v0ZM13 18.5h6m-3-3v6" />
    </g>
    <defs>
      <clipPath id="folder-notch-plus_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default FolderNotchPlus;
