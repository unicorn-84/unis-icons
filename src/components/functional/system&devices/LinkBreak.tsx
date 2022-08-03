import * as React from 'react';
import { SVGProps } from 'react';

const LinkBreak = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 9V6m8 20v-3M9 12H6m20 8h-3M8.875 16.05l-1.413 1.412a5.003 5.003 0 0 0 7.075 7.076l1.413-1.413m7.175-7.175 1.412-1.412a5.003 5.003 0 0 0-7.075-7.075L16.05 8.875"
    />
  </svg>
);

export default LinkBreak;
