import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlashlight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 3h14a1 1 0 0 1 1 1v5.662c0 .217-.071.427-.2.6l-2.6 3.476c-.129.173-.2.383-.2.6V28a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V14.338c0-.217-.071-.427-.2-.6l-2.6-3.476a1.012 1.012 0 0 1-.2-.6V4a1 1 0 0 1 1-1v0Zm7 12v4M8 8h16"
    />
  </svg>
);

export default SvgFlashlight;
