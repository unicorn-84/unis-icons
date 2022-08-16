import * as React from 'react';
import { SVGProps } from 'react';

const TwitchLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.637 25h-5.274a.975.975 0 0 0-.638.238L9 30v-5H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v13.538a1.012 1.012 0 0 1-.363.762l-5.362 4.462a.975.975 0 0 1-.637.238v0ZM21 11v6m-6-6v6"
    />
  </svg>
);

export default TwitchLogo;
