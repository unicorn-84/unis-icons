import * as React from 'react';
import { SVGProps } from 'react';

const SvgBaseball = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.15 14.125c.104-.658.262-1.306.475-1.938m0 7.626a11.831 11.831 0 0 1-.475-1.938m-10.3-3.75a11.831 11.831 0 0 0-.475-1.938m0 7.626c.213-.632.371-1.28.475-1.938m12.5-9.012c.353-.472.737-.919 1.15-1.338m0 16.95a14.45 14.45 0 0 1-1.15-1.338M7.5 24.475c.41-.422.794-.869 1.15-1.338m0-14.274A12.975 12.975 0 0 0 7.5 7.525"
    />
  </svg>
);

export default SvgBaseball;
