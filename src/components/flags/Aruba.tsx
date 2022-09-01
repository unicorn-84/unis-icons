import * as React from 'react';
import { SVGProps } from 'react';

const SvgAruba = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#aruba_svg__a)">
      <g clipPath="url(#aruba_svg__b)">
        <mask
          id="aruba_svg__c"
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
        <g mask="url(#aruba_svg__c)">
          <path
            fill="#5BA3DA"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="aruba_svg__d"
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
          <g mask="url(#aruba_svg__d)" fillRule="evenodd" clipRule="evenodd">
            <path
              fill="red"
              stroke="#F7FCFF"
              strokeWidth={0.35}
              d="m9.495 9.96-4.929-.925 4.99-.878 1.443-4.59 1.138 4.553 4.454.92-4.402.92-1.27 3.743L9.495 9.96Z"
            />
            <path fill="#FAD615" d="M39 16H3v2h36v-2Zm0 4H3v2h36v-2Z" />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="aruba_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="aruba_svg__a"
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
          result="effect1_dropShadow_91_29710"
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
          in2="effect1_dropShadow_91_29710"
          result="effect2_dropShadow_91_29710"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_29710"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgAruba;
