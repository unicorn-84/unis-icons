import * as React from 'react';
import { SVGProps } from 'react';

const SvgPhoneSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 5 20 22M14.375 14.213c-.625.098-1.24.252-1.837.462a1 1 0 0 0-.65.737l-.725 3.688a1.023 1.023 0 0 1-.613.737L4.638 22.2a.987.987 0 0 1-1.163-.313 6 6 0 0 1 .5-7.912 17.014 17.014 0 0 1 6.5-4.05m4.588-.9a17.013 17.013 0 0 1 12.962 4.95 6 6 0 0 1 .5 7.912.988.988 0 0 1-1.162.313l-.5-.2"
    />
  </svg>
);

export default SvgPhoneSlash;
