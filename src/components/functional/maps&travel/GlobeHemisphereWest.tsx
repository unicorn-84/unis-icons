import * as React from 'react';
import { SVGProps } from 'react';

const SvgGlobeHemisphereWest = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m26.775 21.3-6.787-4.175a.9.9 0 0 0-.388-.137l-2.863-.388a.975.975 0 0 0-1.037.587l-1.712 3.838a1 1 0 0 0 .175 1.088l2.35 2.537a1.026 1.026 0 0 1 .25.875L16.274 28"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.125 6.95 7 9.6a1 1 0 0 0-.013.738l1.438 3.825a.988.988 0 0 0 .725.637l2.675.575a.975.975 0 0 1 .688.537l.475.988a1.025 1.025 0 0 0 .9.563h1.687"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19.063 4.388 1.162 2.1a1.013 1.013 0 0 1-.2 1.224l-3.362 3.038a.9.9 0 0 1-.188.137l-1.538.85a1.077 1.077 0 0 1-.474.126h-2.675a1.012 1.012 0 0 0-.925.612l-1.038 2.463"
    />
  </svg>
);

export default SvgGlobeHemisphereWest;
