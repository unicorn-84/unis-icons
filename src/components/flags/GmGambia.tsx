import * as React from 'react';
import { SVGProps } from 'react';

const GmGambia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#gm-gambia_svg__a)">
      <g clipPath="url(#gm-gambia_svg__b)">
        <mask
          id="gm-gambia_svg__c"
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
        <g mask="url(#gm-gambia_svg__c)">
          <path
            fill="#5EAA22"
            fillRule="evenodd"
            d="M3 18h36v8H3v-8Z"
            clipRule="evenodd"
          />
          <path
            fill="#E31D1C"
            fillRule="evenodd"
            d="M3 2h36v8H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#3D58DB"
            stroke="#fff"
            strokeWidth={3}
            d="M3 10.5H1.5v7h39v-7H3Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="gm-gambia_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="gm-gambia_svg__a"
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
          result="effect1_dropShadow_91_28051"
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
          in2="effect1_dropShadow_91_28051"
          result="effect2_dropShadow_91_28051"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28051"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default GmGambia;
