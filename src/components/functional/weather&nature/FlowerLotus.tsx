import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlowerLotus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#flower-lotus_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M16 25c2 0 5.313-.025 9.113-2.225s5.037-4.938 5.425-6.35a.987.987 0 0 0-.713-1.225c-.912-.237-2.512-.45-4.563.038m-18.525-.013c-2.05-.475-3.65-.262-4.562-.025a.988.988 0 0 0-.713 1.225c.388 1.412 1.625 4.162 5.425 6.35C10.687 24.963 14 25 16 25" />
      <path d="M16 25s5-2.725 5-10c0-5.7-3.075-8.6-4.4-9.6a1.012 1.012 0 0 0-1.2 0C14.075 6.4 11 9.3 11 15c0 7.275 5 10 5 10Z" />
      <path d="M16 25c1.5-.325 5.538-2.6 7.962-6.8 2.425-4.2 1.826-7.537 1.35-9a.975.975 0 0 0-1.15-.662 9.638 9.638 0 0 0-3.924 1.887m-8.476 0a9.638 9.638 0 0 0-3.925-1.888.975.975 0 0 0-1.15.663c-.474 1.463-1.075 4.813 1.35 9C10.462 22.388 14.5 24.675 16 25" />
    </g>
    <defs>
      <clipPath id="flower-lotus_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFlowerLotus;
