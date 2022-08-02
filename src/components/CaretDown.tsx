import * as React from 'react';
import { SVGProps } from 'react';

const CaretDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="m15.976 22.8-9.59-10.964c-1.132-1.292-.212-3.315 1.506-3.315h19.184a2 2 0 0 1 1.506 3.317l-9.593 10.96a2 2 0 0 1-3.011 0v.003Z"
    />
  </svg>
);

export default CaretDown;
