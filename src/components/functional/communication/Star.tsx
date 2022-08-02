import * as React from 'react';
import { SVGProps } from 'react';

const Star = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16.55 23.837 6.3 4c.813.513 1.813-.25 1.575-1.187L22.6 19.475a1.087 1.087 0 0 1 .362-1.1l5.65-4.713c.738-.612.363-1.85-.6-1.912l-7.375-.475a1.037 1.037 0 0 1-.912-.675l-2.75-6.925a1.038 1.038 0 0 0-1.95 0l-2.75 6.925a1.038 1.038 0 0 1-.912.675l-7.376.475c-.962.063-1.337 1.3-.6 1.912l5.65 4.713a1.087 1.087 0 0 1 .363 1.1l-1.688 6.65c-.287 1.125.913 2.038 1.875 1.425l5.863-3.713a1.025 1.025 0 0 1 1.1 0v0Z"
    />
  </svg>
);

export default Star;