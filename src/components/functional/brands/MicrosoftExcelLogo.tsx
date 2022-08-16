import * as React from 'react';
import { SVGProps } from 'react';

const MicrosoftExcelLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 12h7m-7 8h7M8 9V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-4m9 0v5m0-24v5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 9H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1Zm-8.75 4 4.5 6m0-6-4.5 6"
    />
  </svg>
);

export default MicrosoftExcelLogo;
