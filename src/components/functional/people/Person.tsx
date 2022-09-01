import * as React from 'react';
import { SVGProps } from 'react';

const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.988 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm3.25 7.837 4.35 3.375A1.5 1.5 0 0 0 25.7 18.1l-4.95-6.363A2.488 2.488 0 0 0 18.988 11h-6a2.538 2.538 0 0 0-1.775.738L6.263 18.1a1.5 1.5 0 0 0 2.124 2.112l4.35-3.375-3.475 10.95a1.504 1.504 0 0 0 2.726 1.276l4-6.3 4 6.3a1.501 1.501 0 0 0 2.879-.698 1.5 1.5 0 0 0-.167-.577l-3.462-10.95Z"
    />
  </svg>
);

export default SvgPerson;
