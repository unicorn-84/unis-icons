import * as React from 'react';
import { IIcon } from '../types.js';

const ArrowBendLeftDown: React.FC<IIcon> = ({
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
        d="M9.5 11L6.5 14L3.5 11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 2C10.9087 2 9.38258 2.63214 8.25736 3.75736C7.13214 4.88258 6.5 6.4087 6.5 8V14"
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
        d="M14.25 16.5L9.75 21L5.25 16.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.75 3C16.3631 3 14.0739 3.94821 12.386 5.63604C10.6982 7.32387 9.75 9.61305 9.75 12V21"
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
        d="M19 22L13 28L7 22"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 4C21.8174 4 18.7652 5.26428 16.5147 7.51472C14.2643 9.76516 13 12.8174 13 16V28"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return size === 'sm' ? sm : size === 'xs' ? xs : md;
};

export default ArrowBendLeftDown;
