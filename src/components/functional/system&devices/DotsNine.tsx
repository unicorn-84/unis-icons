import * as React from 'react';
import { SVGProps } from 'react';

const DotsNine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M7.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-17 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7.5 26a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);

export default DotsNine;
