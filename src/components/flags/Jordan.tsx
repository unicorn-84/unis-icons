import * as React from 'react';
import { SVGProps } from 'react';

const SvgJordan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#jordan_svg__a)">
      <g clipPath="url(#jordan_svg__b)">
        <mask
          id="jordan_svg__c"
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
        <g mask="url(#jordan_svg__c)">
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="jordan_svg__d"
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
          <g mask="url(#jordan_svg__d)" fillRule="evenodd" clipRule="evenodd">
            <path fill="#272727" d="M3 2v8h36V2H3Z" />
            <path fill="#093" d="M3 18v8h36v-8H3Z" />
          </g>
          <path
            fill="#E31D1C"
            fillRule="evenodd"
            d="M3 2v24l22.5-12L3 2Z"
            clipRule="evenodd"
          />
          <mask
            id="jordan_svg__e"
            width={23}
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
              d="M3 2v24l22.5-12L3 2Z"
              clipRule="evenodd"
            />
          </mask>
          <g mask="url(#jordan_svg__e)">
            <path
              fill="#F7FCFF"
              fillRule="evenodd"
              d="M13.127 15.87 11.023 17l.48-2.204-1.753-1.65 2.373-.088L13.127 11l1.004 2.058H16.5l-1.748 1.738.526 2.204-2.151-1.13Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="jordan_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="jordan_svg__a"
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
          result="effect1_dropShadow_91_27303"
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
          in2="effect1_dropShadow_91_27303"
          result="effect2_dropShadow_91_27303"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_27303"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgJordan;
