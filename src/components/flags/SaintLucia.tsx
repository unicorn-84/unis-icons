import * as React from 'react';
import { SVGProps } from 'react';

const SvgSaintLucia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#saint-lucia_svg__a)">
      <g clipPath="url(#saint-lucia_svg__b)">
        <mask
          id="saint-lucia_svg__c"
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
          mask="url(#saint-lucia_svg__c)"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path fill="#7CCFF5" d="M3 2h36v24H3V2Z" />
          <path fill="#F7FCFF" d="m21 6 9 16H12l9-16Z" />
          <path fill="#272727" d="m21 10 7.875 12h-15.75L21 10Z" />
          <path fill="#FECA00" d="m21 16 9 6H12l9-6Z" />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="saint-lucia_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="saint-lucia_svg__a"
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
          result="effect1_dropShadow_91_26759"
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
          in2="effect1_dropShadow_91_26759"
          result="effect2_dropShadow_91_26759"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26759"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgSaintLucia;
