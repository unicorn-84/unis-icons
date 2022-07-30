import * as React from 'react';
import { IIcon } from '../types.js';

const ArrowArcRight: React.FC<IIcon> = ({
  stroke = 'currentColor',
  size = 'sm',
  ...props
}) => {
  return (
    <svg
      width={size === 'sm' ? 24 : size === 'xs' ? 16 : 32}
      height={size === 'sm' ? 24 : size === 'xs' ? 16 : 32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.366 13.884h6v-6"
        stroke={stroke}
        strokeWidth={size === 'sm' ? 1.5 : size === 'xs' ? 1 : 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 17.25a9 9 0 0 1 15.366-6.366l3 3"
        stroke={stroke}
        strokeWidth={size === 'sm' ? 1.5 : size === 'xs' ? 1 : 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowArcRight;
