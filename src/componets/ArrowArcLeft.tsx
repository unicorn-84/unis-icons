import * as React from 'react';
import { IIcon } from '../types.js';

const ArrowArcLeft: React.FC<IIcon> = ({
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
        d="M8.63428 13.8844H2.63428V7.8844"
        stroke={stroke}
        strokeWidth={size === 'sm' ? 1.5 : size === 'xs' ? 1 : 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9999 17.25C21.0006 15.4695 20.4731 13.7288 19.4842 12.2481C18.4953 10.7674 17.0894 9.61338 15.4445 8.93192C13.7996 8.25045 11.9894 8.07222 10.2432 8.41976C8.49691 8.7673 6.89296 9.62501 5.63428 10.8844L2.63428 13.8844"
        stroke={stroke}
        strokeWidth={size === 'sm' ? 1.5 : size === 'xs' ? 1 : 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowArcLeft;
