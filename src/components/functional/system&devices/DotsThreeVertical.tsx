import * as React from 'react';
import { SVGProps } from 'react';

const DotsThreeVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M16 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0-8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

export default DotsThreeVertical;
