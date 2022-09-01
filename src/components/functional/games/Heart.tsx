import * as React from 'react';
import { SVGProps } from 'react';

const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 27S3.5 20 3.5 11.5A6.5 6.5 0 0 1 16 9v0a6.5 6.5 0 0 1 12.5 2.5C28.5 20 16 27 16 27Z"
    />
  </svg>
);

export default SvgHeart;
