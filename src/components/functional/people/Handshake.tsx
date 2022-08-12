import * as React from 'react';
import { SVGProps } from 'react';

const Handshake = (props: SVGProps<SVGSVGElement>) => (
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
      d="M30.087 15.225 27 16.762l-4-7.65 3.125-1.562a.988.988 0 0 1 1.325.425l3.075 5.888a1 1 0 0 1-.438 1.362v0ZM5 16.637l-3.087-1.55a.987.987 0 0 1-.438-1.35L4.55 7.85a1 1 0 0 1 1.325-.438L9 8.975l-4 7.662Zm22 .125-2 2.35-4.6 4.6a1.063 1.063 0 0 1-.95.263l-7.25-1.813a1 1 0 0 1-.362-.187L5 16.637"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m25 19.113-5.5-4-1.6 1.2a4.012 4.012 0 0 1-4.8 0l-.675-.513a1.012 1.012 0 0 1-.113-1.513l4.9-4.887a.986.986 0 0 1 .7-.288H23"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.075 8.975 15.488 7.1a1 1 0 0 1 .687.05L20.5 9.113m-6.5 17.5-3.762-.95a.925.925 0 0 1-.413-.213L7 23"
    />
  </svg>
);

export default Handshake;
