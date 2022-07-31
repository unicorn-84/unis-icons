import * as React from 'react';
import { IIcon } from '../types.js';

const ArrowArcRight: React.FC<IIcon> = ({
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
        d="M10.2437 9.25623H14.2437V5.25623"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 11.5C1.99956 10.313 2.35122 9.15254 3.01048 8.16544C3.66973 7.17834 4.60697 6.40896 5.7036 5.95465C6.80023 5.50034 8.00697 5.38152 9.17115 5.61322C10.3353 5.84491 11.4046 6.41671 12.2437 7.25627L14.2437 9.25627"
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
        d="M15.3657 13.8844H21.3657V7.8844"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 17.25C2.99934 15.4695 3.52683 13.7288 4.51571 12.2481C5.5046 10.7674 6.91045 9.61338 8.5554 8.93192C10.2003 8.25045 12.0105 8.07222 13.7567 8.41976C15.503 8.7673 17.1069 9.62501 18.3656 10.8844L21.3656 13.8844"
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
        d="M20.4875 18.5125H28.4875V10.5125"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 23C3.99912 20.626 4.70243 18.305 6.02095 16.3308C7.33947 14.3566 9.21394 12.8179 11.4072 11.9092C13.6005 11.0006 16.0139 10.763 18.3423 11.2264C20.6707 11.6898 22.8093 12.8334 24.4875 14.5125L28.4875 18.5125"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return size === 'sm' ? sm : size === 'xs' ? xs : md;
};

export default ArrowArcRight;
