import * as React from 'react';
import { SVGProps } from 'react';

const SvgLaos = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#laos_svg__a)">
      <g clipPath="url(#laos_svg__b)">
        <mask
          id="laos_svg__c"
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
        <g mask="url(#laos_svg__c)" fillRule="evenodd" clipRule="evenodd">
          <path fill="#E31D1C" d="M3 18h36v8H3v-8Z" />
          <path fill="#2E42A5" d="M3 10h36v8H3v-8Z" />
          <path fill="#E31D1C" d="M3 2h36v8H3V2Z" />
          <path
            fill="#F7FCFF"
            d="M21 17.74c2.33 0 4.219-1.679 4.219-3.75 0-2.07-1.889-3.75-4.219-3.75s-4.219 1.68-4.219 3.75c0 2.071 1.889 3.75 4.219 3.75Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="laos_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="laos_svg__a"
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
          result="effect1_dropShadow_91_26777"
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
          in2="effect1_dropShadow_91_26777"
          result="effect2_dropShadow_91_26777"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26777"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgLaos;
