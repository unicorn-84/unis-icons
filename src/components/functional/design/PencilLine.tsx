import * as React from 'react';
import { SVGProps } from 'react';

const SvgPencilLine = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 27H6a1 1 0 0 1-1-1v-5.587a.987.987 0 0 1 .288-.7l15-15a1 1 0 0 1 1.424 0l5.576 5.574a1 1 0 0 1 0 1.425L12 27Zm5-19 7 7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M27 27H12l-6.938-6.938M20.5 11.5l-12 12"
    />
  </svg>
);

export default SvgPencilLine;
