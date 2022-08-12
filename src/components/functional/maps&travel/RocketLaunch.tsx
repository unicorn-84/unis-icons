import * as React from 'react';
import { SVGProps } from 'react';

const RocketLaunch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.762 23.075c-1.425 4.238-7.075 4.238-7.075 4.238s0-5.65 4.238-7.075m15.563-7.063L16 21.663 10.338 16l8.487-8.488c3.213-3.212 6.425-3.174 7.8-2.974a.975.975 0 0 1 .837.837c.2 1.375.238 4.588-2.974 7.8Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M23.075 14.588v8.075a1 1 0 0 1-.3.7l-4.037 4.05a1 1 0 0 1-1.688-.513L16 21.663m1.413-12.738H9.338a1 1 0 0 0-.7.3l-4.05 4.037A1 1 0 0 0 5.1 14.95L10.338 16"
    />
  </svg>
);

export default RocketLaunch;
