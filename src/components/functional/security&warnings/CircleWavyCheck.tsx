import * as React from 'react';
import { SVGProps } from 'react';

const CircleWavyCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.813 25.188c-1.15-1.15-.388-3.563-.975-4.976C5.25 18.8 3 17.563 3 16c0-1.563 2.225-2.75 2.838-4.213.612-1.462-.176-3.825.974-4.975 1.15-1.15 3.563-.387 4.975-.974C13.2 5.25 14.438 3 16 3c1.563 0 2.75 2.225 4.212 2.838 1.463.612 3.826-.176 4.976.974s.387 3.563.975 4.975C26.75 13.2 29 14.438 29 16c0 1.563-2.225 2.75-2.837 4.212-.613 1.463.174 3.826-.976 4.976s-3.562.387-4.975.975C18.8 26.75 17.563 29 16 29c-1.563 0-2.75-2.225-4.213-2.837-1.462-.613-3.825.174-4.975-.976Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21.5 13-7.338 7-3.662-3.5"
    />
  </svg>
);

export default CircleWavyCheck;
