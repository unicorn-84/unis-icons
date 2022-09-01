import * as React from 'react';
import { SVGProps } from 'react';

const SvgFingerprintSimple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 16a30.038 30.038 0 0 1-2.237 11.4m.712-15.4A6 6 0 0 0 10 16a17.825 17.825 0 0 1-2.25 8.712"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.688A12 12 0 0 1 28 16a36.658 36.658 0 0 1-.887 8m-24.2-3A11.938 11.938 0 0 0 4 16a11.963 11.963 0 0 1 4-8.938M13.825 26c-.25.55-.525 1.1-.825 1.625M16 16a23.7 23.7 0 0 1-.763 6"
    />
  </svg>
);

export default SvgFingerprintSimple;
