import * as React from 'react';
import { SVGProps } from 'react';

const PaintBrushBroad = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 14h22m-14.15 5H7a2 2 0 0 1-2-2V8a4 4 0 0 1 4-4h18v13a2 2 0 0 1-2 2h-5.85a1 1 0 0 0-.987 1.137L19 26a3 3 0 0 1-6 0l.838-5.863A1 1 0 0 0 12.85 19v0ZM23 4v6"
    />
  </svg>
);

export default PaintBrushBroad;
