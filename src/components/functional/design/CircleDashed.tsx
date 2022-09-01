import * as React from 'react';
import { SVGProps } from 'react';

const SvgCircleDashed = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.413 12.887a12.05 12.05 0 0 1 3.1-5.375m0 16.976a11.962 11.962 0 0 1-3.1-5.388m14.699 8.487a11.774 11.774 0 0 1-6.212 0m14.687-8.474a12.05 12.05 0 0 1-3.1 5.375m0-16.976a11.962 11.962 0 0 1 3.1 5.388M12.888 4.412a11.775 11.775 0 0 1 6.212 0"
    />
  </svg>
);

export default SvgCircleDashed;
