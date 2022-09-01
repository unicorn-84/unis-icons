import * as React from 'react';
import { SVGProps } from 'react';

const ClChile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#cl-chile_svg__a)">
      <g clipPath="url(#cl-chile_svg__b)">
        <mask
          id="cl-chile_svg__c"
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
        <g mask="url(#cl-chile_svg__c)" fillRule="evenodd" clipRule="evenodd">
          <path fill="#3D58DB" d="M3 2h15.75v14H3V2Z" />
          <path fill="#F7FCFF" d="M18.75 0H39v16H18.75V0Z" />
          <path fill="#E31D1C" d="M3 16h36v10H3V16Z" />
          <path
            fill="#F7FCFF"
            d="m10.891 11.783-4.279 2.272 2.112-3.865-3.74-2.51 4.318-.041L10.93 4.21l1.05 3.43 4.086.017-3.108 2.455 1.614 3.944-3.68-2.272Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="cl-chile_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="cl-chile_svg__a"
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
          result="effect1_dropShadow_91_28955"
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
          in2="effect1_dropShadow_91_28955"
          result="effect2_dropShadow_91_28955"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28955"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default ClChile;
