import * as React from 'react';
import { SVGProps } from 'react';

const SvgDjibouti = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#djibouti_svg__a)">
      <g clipPath="url(#djibouti_svg__b)">
        <mask
          id="djibouti_svg__c"
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
        <g mask="url(#djibouti_svg__c)">
          <path
            fill="#73BE4A"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="djibouti_svg__d"
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
          <g mask="url(#djibouti_svg__d)">
            <path
              fill="#69F"
              fillRule="evenodd"
              d="M3 0v14h36V0H3Z"
              clipRule="evenodd"
            />
          </g>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M3 2v24l20.25-12L3 2Z"
            clipRule="evenodd"
          />
          <mask
            id="djibouti_svg__e"
            width={21}
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
              d="M3 2v24l20.25-12L3 2Z"
              clipRule="evenodd"
            />
          </mask>
          <g mask="url(#djibouti_svg__e)">
            <path
              fill="#E31D1C"
              fillRule="evenodd"
              d="M10.877 16.07 8.773 17.2l.48-2.204-1.753-1.65 2.373-.088 1.004-2.058 1.004 2.058h2.369l-1.748 1.738.526 2.204-2.151-1.13Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="djibouti_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="djibouti_svg__a"
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
          result="effect1_dropShadow_91_28793"
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
          in2="effect1_dropShadow_91_28793"
          result="effect2_dropShadow_91_28793"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28793"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgDjibouti;
