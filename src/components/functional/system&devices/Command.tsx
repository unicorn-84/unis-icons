import * as React from 'react';
import { SVGProps } from 'react';

const SvgCommand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.5 6a3.5 3.5 0 1 1 0 7H19V9.5A3.5 3.5 0 0 1 22.5 6v0ZM13 13H9.5A3.5 3.5 0 1 1 13 9.5V13Zm6 6h3.5a3.5 3.5 0 1 1-3.5 3.5V19Zm-9.5 7a3.5 3.5 0 1 1 0-7H13v3.5A3.5 3.5 0 0 1 9.5 26v0ZM19 13h-6v6h6v-6Z"
    />
  </svg>
);

export default SvgCommand;
