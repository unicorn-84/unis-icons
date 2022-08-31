import * as React from 'react';
import { SVGProps } from 'react';

const Ticket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#ticket_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 7v18m-9-4.1a.987.987 0 0 1 .8-.975 4.013 4.013 0 0 0 0-7.85.987.987 0 0 1-.8-.975V8a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v3.1a.987.987 0 0 1-.8.975 4.012 4.012 0 0 0 0 7.85.987.987 0 0 1 .8.975V24a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3.1Z"
      />
    </g>
    <defs>
      <clipPath id="ticket_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default Ticket;
