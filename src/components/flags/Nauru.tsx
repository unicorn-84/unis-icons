import * as React from 'react';
import { SVGProps } from 'react';

const SvgNauru = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#nauru_svg__a)">
      <g clipPath="url(#nauru_svg__b)">
        <path
          fill="#2E42A5"
          fillRule="evenodd"
          d="M3 2v24h36V2H3Z"
          clipRule="evenodd"
        />
        <mask
          id="nauru_svg__c"
          width={36}
          height={24}
          x={3}
          y={2}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: 'alpha',
          }}
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
        </mask>
        <g mask="url(#nauru_svg__c)" fillRule="evenodd" clipRule="evenodd">
          <path fill="#FECA00" d="M3 10v4h36v-4H3Z" />
          <path
            fill="#F7FCFF"
            d="m12.933 21.58-1.738 2.005-.08-2.53-2.732.714 1.608-2.09-2.683-.85 2.683-.85-1.608-2.088 2.732.714.08-2.53 1.738 2.005 1.739-2.006.08 2.53 2.732-.713-1.608 2.089 2.682.85-2.682.85 1.608 2.089-2.732-.715-.08 2.53-1.739-2.004Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="nauru_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="nauru_svg__a"
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
          result="effect1_dropShadow_91_26102"
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
          in2="effect1_dropShadow_91_26102"
          result="effect2_dropShadow_91_26102"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26102"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgNauru;
