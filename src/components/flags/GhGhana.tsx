import * as React from 'react';
import { SVGProps } from 'react';

const GhGhana = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#gh-ghana_svg__a)">
      <g clipPath="url(#gh-ghana_svg__b)">
        <mask
          id="gh-ghana_svg__c"
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
        <g mask="url(#gh-ghana_svg__c)" fillRule="evenodd" clipRule="evenodd">
          <path fill="#5EAA22" d="M3 18h36v8H3v-8Z" />
          <path fill="#FECA00" d="M3 10h36v8H3v-8Z" />
          <path fill="#E11C1B" d="M3 2h36v8H3V2Z" />
          <path
            fill="#1D1D1D"
            d="m21.085 16.49-3.921 2.418 1.253-4.14-3.312-2.646 4.33-.143 1.65-4.095 1.65 4.095h4.304l-3.286 2.788 1.439 3.897-4.107-2.174Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="gh-ghana_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="gh-ghana_svg__a"
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
          result="effect1_dropShadow_91_28113"
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
          in2="effect1_dropShadow_91_28113"
          result="effect2_dropShadow_91_28113"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28113"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default GhGhana;
