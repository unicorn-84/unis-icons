import * as React from 'react';
import { SVGProps } from 'react';

const InIndia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#in-india_svg__a)">
      <g clipPath="url(#in-india_svg__b)">
        <mask
          id="in-india_svg__c"
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
        <g mask="url(#in-india_svg__c)">
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="in-india_svg__d"
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
          <g mask="url(#in-india_svg__d)" fillRule="evenodd" clipRule="evenodd">
            <path fill="#FF8C1A" d="M3 2v8h36V2H3Z" />
            <path fill="#5EAA22" d="M3 18v8h36v-8H3Z" />
            <path
              fill="#3D58DB"
              d="M16.5 14c0 2.21 2.015 4 4.5 4s4.5-1.79 4.5-4-2.015-4-4.5-4-4.5 1.79-4.5 4Zm7.875 0c0 1.657-1.511 3-3.375 3s-3.375-1.343-3.375-3 1.511-3 3.375-3 3.375 1.343 3.375 3Z"
            />
            <path
              fill="#3D58DB"
              d="m20.994 14.86-.642 3.121.373-3.155-1.606 2.834 1.358-2.934-2.438 2.316 2.233-2.475-3.074 1.613 2.927-1.816-3.46.777 3.383-1.009-3.566-.121 3.566-.12-3.384-1.01 3.46.777-2.926-1.816 3.074 1.613-2.233-2.475 2.438 2.316-1.358-2.933 1.606 2.833-.373-3.155.642 3.12.642-3.12-.373 3.155 1.606-2.833-1.358 2.933 2.438-2.316-2.233 2.475 3.074-1.613-2.927 1.816 3.46-.777-3.383 1.01 3.566.12-3.566.121 3.384 1.01-3.46-.778 2.926 1.816-3.073-1.612 2.232 2.474-2.438-2.316 1.358 2.934-1.606-2.834.373 3.155-.642-3.12Z"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="in-india_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="in-india_svg__a"
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
          result="effect1_dropShadow_91_27554"
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
          in2="effect1_dropShadow_91_27554"
          result="effect2_dropShadow_91_27554"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_27554"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default InIndia;
