import * as React from 'react';
import { SVGProps } from 'react';

const SvgHourglassMedium = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16 16-7.6-5.7a1.012 1.012 0 0 1-.4-.8V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4.45a1.012 1.012 0 0 1-.4.8L16 16Zm0 0-7.6 5.7a1.012 1.012 0 0 0-.4.8V27a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.45a1.013 1.013 0 0 0-.4-.8L16 16Zm-6.663-5h13.276M16 21v-5"
    />
  </svg>
);

export default SvgHourglassMedium;
