import * as React from 'react';
import { SVGProps } from 'react';

const SvgHexagon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27.5 21.913V10.088a1.013 1.013 0 0 0-.512-.875l-10.5-5.938a.975.975 0 0 0-.976 0l-10.5 5.938a1.012 1.012 0 0 0-.512.875v11.825a1.012 1.012 0 0 0 .513.875l10.5 5.937a.975.975 0 0 0 .975 0l10.5-5.938a1.013 1.013 0 0 0 .512-.874v0Z"
    />
  </svg>
);

export default SvgHexagon;
