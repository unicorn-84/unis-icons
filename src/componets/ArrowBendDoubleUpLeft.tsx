import * as React from 'react';
import { IIcon } from '../types.js';

const ArrowBendDoubleUpLeft: React.FC<IIcon> = ({
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
        d="M5 9.5L2 6.5L5 3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.5L5 6.5L8 3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 12.5C14 10.9087 13.3679 9.38258 12.2426 8.25736C11.1174 7.13214 9.5913 6.5 8 6.5H5"
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
        d="M7.5 14.25L3 9.75L7.5 5.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14.25L7.5 9.75L12 5.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 18.75C21 16.3631 20.0518 14.0739 18.364 12.386C16.6761 10.6982 14.3869 9.75 12 9.75H7.5"
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
        d="M10 19L4 13L10 7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 19L10 13L16 7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 25C28 21.8174 26.7357 18.7652 24.4853 16.5147C22.2348 14.2643 19.1826 13 16 13H10"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return size === 'sm' ? sm : size === 'xs' ? xs : md;
};

export default ArrowBendDoubleUpLeft;
