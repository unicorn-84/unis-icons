import * as React from 'react';
import { SVGProps } from 'react';

const FilmSlate = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#film-slate_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 14h22v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V14Zm0 0 21.25-5.7-1.038-3.863a.987.987 0 0 0-1.224-.7L4.675 8.912a1 1 0 0 0-.712 1.225L5 14Zm11.262-8.2 6.125 3.537M7.575 8.138l6.112 3.537"
      />
    </g>
    <defs>
      <clipPath id="film-slate_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default FilmSlate;
