import * as React from 'react';
import { IIcon } from '../types.js';

const ArrowArcLeft: React.FC<IIcon> = ({
  stroke = 'currentColor',
  size = 'sm',
  ...props
}) => {
  return size === 'sm' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.63428 13.8844H2.63428V7.8844"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9999 17.25C21.0006 15.4695 20.4731 13.7288 19.4842 12.2481C18.4953 10.7674 17.0894 9.61338 15.4445 8.93192C13.7996 8.25045 11.9894 8.07222 10.2432 8.41976C8.49691 8.7673 6.89296 9.62501 5.63428 10.8844L2.63428 13.8844"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : size === 'xs' ? (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.75635 9.25623H1.75635V5.25623"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0001 11.5C14.0005 10.313 13.6489 9.15254 12.9896 8.16544C12.3304 7.17834 11.3931 6.40896 10.2965 5.95465C9.19987 5.50034 7.99312 5.38152 6.82895 5.61322C5.66477 5.84491 4.59547 6.41671 3.75635 7.25627L1.75635 9.25627"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.5125 18.5125H3.51245V10.5125"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 23C28.0008 20.626 27.2975 18.305 25.979 16.3308C24.6605 14.3566 22.786 12.8179 20.5928 11.9092C18.3995 11.0006 15.986 10.763 13.6576 11.2264C11.3293 11.6898 9.1907 12.8334 7.51245 14.5125L3.51245 18.5125"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowArcLeft;
