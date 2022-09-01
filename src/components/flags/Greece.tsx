import * as React from 'react';
import { SVGProps } from 'react';

const SvgGreece = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#greece_svg__a)">
      <g clipPath="url(#greece_svg__b)">
        <mask
          id="greece_svg__c"
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
        <g mask="url(#greece_svg__c)">
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M3 2h36v24H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#4564F9"
            fillRule="evenodd"
            d="M3 7.5h36v2.957H3V7.5Zm0 5.315h36v2.957H3v-2.957Zm36 5.128H3V20.9h36v-2.957ZM3 2h36v3H3V2Z"
            clipRule="evenodd"
          />
          <path fill="#4564F9" d="M3 23h36v3H3z" />
          <path
            fill="#4564F9"
            fillRule="evenodd"
            d="M3 2h16.875v13.8H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M9.75 2h3.375v5.504h6.75v2.935h-6.75V16.5H9.75v-6.061H3V7.504h6.75V2Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="greece_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="greece_svg__a"
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
          result="effect1_dropShadow_91_27954"
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
          in2="effect1_dropShadow_91_27954"
          result="effect2_dropShadow_91_27954"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_27954"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgGreece;
