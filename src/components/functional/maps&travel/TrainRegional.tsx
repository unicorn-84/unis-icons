import * as React from 'react';
import { SVGProps } from 'react';

const TrainRegional = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.762 4h14.476a.987.987 0 0 1 .962.737L27 15l-2.8 10.262a.988.988 0 0 1-.962.738H8.761a.988.988 0 0 1-.962-.738L5 15 7.8 4.738A.988.988 0 0 1 8.762 4v0ZM16 26v-9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m5 15 11 2 11-2m-15-4h8m-8 15-3 4m11-4 3 4"
    />
  </svg>
);

export default TrainRegional;
