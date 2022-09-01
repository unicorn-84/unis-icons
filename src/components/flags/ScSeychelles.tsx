import * as React from 'react';
import { SVGProps } from 'react';

const ScSeychelles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#sc-seychelles_svg__a)">
      <g clipPath="url(#sc-seychelles_svg__b)">
        <mask
          id="sc-seychelles_svg__c"
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
        <g mask="url(#sc-seychelles_svg__c)">
          <path
            fill="#2E42A5"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="sc-seychelles_svg__d"
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
          <g mask="url(#sc-seychelles_svg__d)">
            <path
              fill="#FFD018"
              fillRule="evenodd"
              d="M3 25.997 21.17 0h18.17L3 25.997Z"
              clipRule="evenodd"
            />
            <path fill="#E31D1C" d="m3 25.996 38.771-12.998V-3.104L3 25.996Z" />
            <path fill="#F7FCFF" d="m3 25.996 38.771-4.998v-8.102L3 25.996Z" />
            <path
              fill="#5EAA22"
              fillRule="evenodd"
              d="M3 25.996h38.771v-7.1L3 25.996Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="sc-seychelles_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="sc-seychelles_svg__a"
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
          result="effect1_dropShadow_91_25253"
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
          in2="effect1_dropShadow_91_25253"
          result="effect2_dropShadow_91_25253"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_25253"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default ScSeychelles;
