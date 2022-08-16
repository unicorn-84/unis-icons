import * as React from 'react';
import { SVGProps } from 'react';

const GitlabLogoSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.375 14h11.25l2.825-7.537a.5.5 0 0 1 .95.05l3.425 12.812a1.025 1.025 0 0 1-.4 1.075l-11.85 8.2a1.012 1.012 0 0 1-1.15 0l-11.85-8.2a1.025 1.025 0 0 1-.4-1.075L6.6 6.513a.5.5 0 0 1 .95-.05L10.375 14Z"
    />
  </svg>
);

export default GitlabLogoSimple;
