import * as React from 'react';
import { SVGProps } from 'react';

const HnHonduras = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#hn-honduras_svg__a)">
      <g clipPath="url(#hn-honduras_svg__b)">
        <mask
          id="hn-honduras_svg__c"
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
        <g mask="url(#hn-honduras_svg__c)">
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="hn-honduras_svg__d"
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
          <g mask="url(#hn-honduras_svg__d)">
            <path
              fill="#4564F9"
              fillRule="evenodd"
              d="M3 2v8h36V2H3Zm0 16v8h36v-8H3Zm18.452-3.33-.975.448.187-.947-.789-.74h1.09l.487-.931.488.93h1.09l-.789.74.186.948-.975-.447Zm-6.844-2.167-.975.447.186-.947-.789-.74h1.09l.488-.931.487.93h1.09l-.789.74.186.948-.974-.447Zm0 4.2-.975.447.186-.947-.789-.74h1.09l.488-.93.487.93h1.09l-.789.74.186.947-.974-.447Zm13.5-4.2-.975.447.186-.947-.789-.74h1.09l.488-.931.487.93h1.09l-.789.74.186.948-.974-.447Zm0 4.2-.975.447.186-.947-.789-.74h1.09l.488-.93.487.93h1.09l-.789.74.186.947-.974-.447Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="hn-honduras_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="hn-honduras_svg__a"
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
          result="effect1_dropShadow_91_27723"
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
          in2="effect1_dropShadow_91_27723"
          result="effect2_dropShadow_91_27723"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_27723"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default HnHonduras;
