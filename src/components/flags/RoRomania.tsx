import * as React from 'react';
import { SVGProps } from 'react';

const RoRomania = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#ro-romania_svg__a)">
      <g clipPath="url(#ro-romania_svg__b)">
        <mask
          id="ro-romania_svg__c"
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
        <g mask="url(#ro-romania_svg__c)" fillRule="evenodd" clipRule="evenodd">
          <path fill="#FBCD17" d="M14.25 2h13.5v24h-13.5V2Z" />
          <path fill="#E11C1B" d="M27.75 2H39v24H27.75V2Z" />
          <path fill="#2E42A5" d="M3 2h11.25v24H3V2Z" />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="ro-romania_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="ro-romania_svg__a"
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
          result="effect1_dropShadow_91_25485"
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
          in2="effect1_dropShadow_91_25485"
          result="effect2_dropShadow_91_25485"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_25485"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default RoRomania;
