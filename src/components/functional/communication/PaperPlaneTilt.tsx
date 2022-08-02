import * as React from 'react';
import { SVGProps } from 'react';

const PaperPlaneTilt = (props: SVGProps<SVGSVGElement>) => (
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
      d="m26.288 4.487-23.3 6.563a1 1 0 0 0-.15 1.875l10.7 5.063a.97.97 0 0 1 .475.474l5.062 10.7a1 1 0 0 0 1.875-.15l6.563-23.3a.987.987 0 0 0-1.225-1.225v0Zm-12.426 13.65 5.65-5.65"
    />
  </svg>
);

export default PaperPlaneTilt;
