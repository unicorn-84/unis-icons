import * as React from 'react';
import { SVGProps } from 'react';

const SvgMalaysia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#malaysia_svg__a)">
      <g clipPath="url(#malaysia_svg__b)">
        <mask
          id="malaysia_svg__c"
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
        <g mask="url(#malaysia_svg__c)">
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M3 2h36v24H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#E31D1C"
            d="M3.03 7h36v2.9h-36zm0 5.2h36v2.9h-36zm.095 5h36v2.5h-36zm0 5h36v2.7h-36z"
          />
          <path
            fill="#E31D1C"
            fillRule="evenodd"
            d="M3 2h36v2.5H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#3D58DB"
            fillRule="evenodd"
            d="M3 2h18v12H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#FECA00"
            fillRule="evenodd"
            d="M7.043 8.202c0 1.376.729 2.678 2.213 2.678 2.226 0 2.659-.422 3.697-1.004.246.49-.583 2.588-3.728 2.588-2.516-.045-4.549-1.841-4.549-4.262 0-2.778 2.3-4.279 4.486-4.262 1.93 0 3.978.974 3.915 2.216-.91-.79-1.897-.79-3.541-.79s-2.493 1.46-2.493 2.836Z"
            clipRule="evenodd"
          />
          <path
            fill="#FECA00"
            fillRule="evenodd"
            d="m15.375 9.3-1.043 1.353.051-1.64-1.738.55 1.125-1.3L12 7.8l1.77-.464-1.125-1.3 1.738.55-.05-1.64L15.374 6.3l1.043-1.353-.051 1.64 1.738-.55-1.125 1.3 1.77.463-1.77.463 1.125 1.3-1.738-.55.05 1.64-1.04-1.353Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="malaysia_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="malaysia_svg__a"
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
          result="effect1_dropShadow_91_26242"
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
          in2="effect1_dropShadow_91_26242"
          result="effect2_dropShadow_91_26242"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26242"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgMalaysia;
