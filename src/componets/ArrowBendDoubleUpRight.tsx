import * as React from 'react';
import { IIcon } from '../types.js';

const ArrowBendDoubleUpRight: React.FC<IIcon> = ({
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
        d="M11 9.5L14 6.5L11 3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.5L11 6.5L8 3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12.5C2 10.9087 2.63214 9.38258 3.75736 8.25736C4.88258 7.13214 6.4087 6.5 8 6.5H11"
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
        d="M16.5 14.25L21 9.75L16.5 5.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14.25L16.5 9.75L12 5.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 18.75C3 16.3631 3.94821 14.0739 5.63604 12.386C7.32387 10.6982 9.61305 9.75 12 9.75H16.5"
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
        d="M22 19L28 13L22 7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 19L22 13L16 7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 25C4 21.8174 5.26428 18.7652 7.51472 16.5147C9.76516 14.2643 12.8174 13 16 13H22"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return size === 'sm' ? sm : size === 'xs' ? xs : md;
};

export default ArrowBendDoubleUpRight;
