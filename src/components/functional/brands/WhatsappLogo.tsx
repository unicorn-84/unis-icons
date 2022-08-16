import * as React from 'react';
import { SVGProps } from 'react';

const WhatsappLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.675 22.125a11.988 11.988 0 1 1 4.2 4.2v0L5.725 27.5A.988.988 0 0 1 4.5 26.275l1.175-4.15Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.012 23A9.987 9.987 0 0 1 9 12.988 3.5 3.5 0 0 1 12.5 9.5v0a.85.85 0 0 1 .75.438l1.463 2.55A1.013 1.013 0 0 1 14.7 13.5l-1.175 1.963a6 6 0 0 0 3.013 3.012L18.5 17.3a1.013 1.013 0 0 1 1.012-.012l2.55 1.462a.85.85 0 0 1 .438.75 3.513 3.513 0 0 1-3.488 3.5v0Z"
    />
  </svg>
);

export default WhatsappLogo;
