import * as React from 'react';
import { IIcon } from '../types.js';

const ArrowBendDownLeft: React.FC<IIcon> = ({
  stroke = 'currentColor',
  size = 'sm',
  ...props
}) => {
  const xs = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={stroke}
      {...props}
    >
      <path
        d="M5 6.5L2 9.5L5 12.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 3.5C14 5.0913 13.3679 6.61742 12.2426 7.74264C11.1174 8.86786 9.5913 9.5 8 9.5H2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const sm = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={stroke}
      {...props}
    >
      <path
        d="M7.5 9.75L3 14.25L7.5 18.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 5.25C21 7.63695 20.0518 9.92613 18.364 11.614C16.6761 13.3018 14.3869 14.25 12 14.25H3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const md = (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={stroke}
      {...props}
    >
      <path
        d="M10 13L4 19L10 25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 7C28 10.1826 26.7357 13.2348 24.4853 15.4853C22.2348 17.7357 19.1826 19 16 19H4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return size === 'sm' ? sm : size === 'xs' ? xs : md;
};

export default ArrowBendDownLeft;
