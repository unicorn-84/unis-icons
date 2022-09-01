import * as React from 'react';
import { SVGProps } from 'react';

const GyGuyana = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#gy-guyana_svg__a)">
      <g clipPath="url(#gy-guyana_svg__b)">
        <mask
          id="gy-guyana_svg__c"
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
        <g mask="url(#gy-guyana_svg__c)">
          <path
            fill="#5EAA22"
            fillRule="evenodd"
            d="M3 2h36v24H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#FECA00"
            stroke="#F7FCFF"
            strokeWidth={2}
            d="M4 24.638V3.362L37.91 14 4 24.638Z"
          />
          <path
            fill="#E11C1B"
            stroke="#272727"
            strokeWidth={2}
            d="M1.75 26.093V1.907L19.241 14 1.75 26.093Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="gy-guyana_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="gy-guyana_svg__a"
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
          result="effect1_dropShadow_91_27787"
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
          in2="effect1_dropShadow_91_27787"
          result="effect2_dropShadow_91_27787"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_27787"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default GyGuyana;
