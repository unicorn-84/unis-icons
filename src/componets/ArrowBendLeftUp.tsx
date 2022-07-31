import * as React from 'react';
import { IIcon } from '../types.js';

const ArrowBendLeftUp: React.FC<IIcon> = ({
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
        d="M9.5 5L6.5 2L3.5 5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 14C10.9087 14 9.38258 13.3679 8.25736 12.2426C7.13214 11.1174 6.5 9.5913 6.5 8V2"
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
        d="M14.25 7.5L9.75 3L5.25 7.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.75 21C16.3631 21 14.0739 20.0518 12.386 18.364C10.6982 16.6761 9.75 14.3869 9.75 12V3"
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
        d="M19 10L13 4L7 10"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 28C21.8174 28 18.7652 26.7357 16.5147 24.4853C14.2643 22.2348 13 19.1826 13 16V4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return size === 'sm' ? sm : size === 'xs' ? xs : md;
};

export default ArrowBendLeftUp;
