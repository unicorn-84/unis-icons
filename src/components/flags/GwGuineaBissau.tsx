import * as React from 'react';
import { SVGProps } from 'react';

const GwGuineaBissau = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#gw-guinea-bissau_svg__a)">
      <g clipPath="url(#gw-guinea-bissau_svg__b)">
        <mask
          id="gw-guinea-bissau_svg__c"
          width={36}
          height={24}
          x={3}
          y={2}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: 'alpha',
          }}
        >
          <path fill="#fff" d="M3 2h36v24H3z" />
        </mask>
        <g
          mask="url(#gw-guinea-bissau_svg__c)"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path fill="#FBCD17" d="M21 2h18v12H21V2Z" />
          <path fill="#0B9E7A" d="M21 14h18v12H21V14Z" />
          <path fill="#E11C1B" d="M3 2h18v24H3V2Z" />
          <path
            fill="#1D1D1D"
            d="m13.047 16.606-3.921 2.418 1.253-4.141L7.5 12.238l3.898-.143L13.047 8l1.65 4.095h3.89l-2.872 2.788 1.439 3.897-4.107-2.174Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="gw-guinea-bissau_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="gw-guinea-bissau_svg__a"
        width={42}
        height={30}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_91_27794"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1.5} />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
        <feBlend
          in2="effect1_dropShadow_91_27794"
          result="effect2_dropShadow_91_27794"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_27794"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default GwGuineaBissau;
