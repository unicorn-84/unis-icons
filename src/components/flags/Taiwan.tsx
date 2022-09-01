import * as React from 'react';
import { SVGProps } from 'react';

const SvgTaiwan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#taiwan_svg__a)">
      <g clipPath="url(#taiwan_svg__b)">
        <mask
          id="taiwan_svg__c"
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
        <g mask="url(#taiwan_svg__c)">
          <path
            fill="#EF0000"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="taiwan_svg__d"
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
          <g mask="url(#taiwan_svg__d)" fillRule="evenodd" clipRule="evenodd">
            <path fill="#2E42A5" d="M3 2v14h20.25V2H3Z" />
            <path
              fill="#FEFFFF"
              d="m12.82 12.81-1.666 1.85-.404-2.342-2.483.86.968-2.208-2.635-.359L8.68 9.13 6.6 7.648l2.635-.359-.968-2.207 2.483.86.404-2.342 1.667 1.849L14.488 3.6l.404 2.342 2.483-.86-.968 2.207 2.635.36-2.08 1.48 2.08 1.482-2.635.36.968 2.207-2.483-.86-.404 2.341-1.667-1.848Zm0-.818c1.78 0 3.221-1.281 3.221-2.862 0-1.581-1.442-2.863-3.22-2.863-1.779 0-3.22 1.282-3.22 2.863 0 1.58 1.441 2.862 3.22 2.862Zm2.577-2.862c0 1.264-1.153 2.29-2.576 2.29s-2.576-1.026-2.576-2.29c0-1.265 1.153-2.29 2.576-2.29s2.576 1.025 2.576 2.29Z"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="taiwan_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="taiwan_svg__a"
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
          result="effect1_dropShadow_91_24387"
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
          in2="effect1_dropShadow_91_24387"
          result="effect2_dropShadow_91_24387"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_24387"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgTaiwan;
