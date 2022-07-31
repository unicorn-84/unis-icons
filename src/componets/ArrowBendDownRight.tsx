import * as React from 'react';
import { IIcon } from '../types.js';

const ArrowBendDownRight: React.FC<IIcon> = ({
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
        d="M11 6.5L14 9.5L11 12.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 3.5C2 5.0913 2.63214 6.61742 3.75736 7.74264C4.88258 8.86786 6.4087 9.5 8 9.5H14"
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
        d="M16.5 9.75L21 14.25L16.5 18.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 5.25C3 7.63695 3.94821 9.92613 5.63604 11.614C7.32387 13.3018 9.61305 14.25 12 14.25H21"
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
        d="M22 13L28 19L22 25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 7C4 10.1826 5.26428 13.2348 7.51472 15.4853C9.76516 17.7357 12.8174 19 16 19H28"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return size === 'sm' ? sm : size === 'xs' ? xs : md;
};

export default ArrowBendDownRight;
