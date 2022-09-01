import * as React from 'react';
import { SVGProps } from 'react';

const MvMaldives = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#mv-maldives_svg__a)">
      <g clipPath="url(#mv-maldives_svg__b)">
        <mask
          id="mv-maldives_svg__c"
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
        <g mask="url(#mv-maldives_svg__c)">
          <path
            fill="#C51918"
            fillRule="evenodd"
            d="M3 2h36v22a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#C51918"
            fillRule="evenodd"
            d="M3 2h36v24H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#579D20"
            fillRule="evenodd"
            d="M9.75 8h22.5v12H9.75V8Z"
            clipRule="evenodd"
          />
          <path
            stroke="#B6EB9A"
            strokeOpacity={0.238}
            strokeWidth={2}
            d="M10.75 9h20.5v10h-20.5V9Z"
          />
          <mask
            id="mv-maldives_svg__d"
            width={24}
            height={12}
            x={9}
            y={8}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: 'alpha',
            }}
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M9.75 8h22.5v12H9.75V8Z"
              clipRule="evenodd"
            />
            <path stroke="#fff" strokeWidth={2} d="M10.75 9h20.5v10h-20.5V9Z" />
          </mask>
          <g mask="url(#mv-maldives_svg__d)">
            <path
              fill="#F9FAFA"
              fillRule="evenodd"
              d="M21.037 14.462c-.019 3.066 2.696 4.7 2.696 4.7-3.098.324-5.16-2.173-5.16-4.67s2.81-4.56 5.16-5.491c0 0-2.677 2.396-2.696 5.461Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="mv-maldives_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="mv-maldives_svg__a"
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
          result="effect1_dropShadow_91_26295"
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
          in2="effect1_dropShadow_91_26295"
          result="effect2_dropShadow_91_26295"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26295"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default MvMaldives;
