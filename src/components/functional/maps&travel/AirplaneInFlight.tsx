import * as React from 'react';
import { SVGProps } from 'react';

const SvgAirplaneInFlight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 27h18M3.35 10H5.5L8 13h4l-1.563-4.688A1 1 0 0 1 11.387 7H13.5l5.5 6h7a4 4 0 0 1 4 4v3H7.975a4 4 0 0 1-3.825-2.85l-1.763-5.862A1 1 0 0 1 3.35 10v0Z"
    />
  </svg>
);

export default SvgAirplaneInFlight;
