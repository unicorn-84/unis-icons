import * as React from 'react';
import { SVGProps } from 'react';

const TgTogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#tg-togo_svg__a)">
      <g clipPath="url(#tg-togo_svg__b)">
        <mask
          id="tg-togo_svg__c"
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
        <g mask="url(#tg-togo_svg__c)">
          <path
            fill="#5EAA22"
            stroke="#F7FCFF"
            strokeWidth={2}
            d="M3 1H2v26h38V1H3Z"
          />
          <path
            fill="#FECA00"
            fillRule="evenodd"
            d="M3 8v4h36V8H3Zm0 8v4h36v-4H3Z"
            clipRule="evenodd"
          />
          <path fill="#F50101" d="M3 2h18v14H3z" />
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="m12.281 12.144-4.184 2.302 1.624-3.864L6.375 7.98h4.104l1.802-3.85 1.376 3.85h4.054l-2.847 2.603 1.401 3.674-3.984-2.112Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="tg-togo_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="tg-togo_svg__a"
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
          result="effect1_dropShadow_91_24788"
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
          in2="effect1_dropShadow_91_24788"
          result="effect2_dropShadow_91_24788"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_24788"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default TgTogo;
