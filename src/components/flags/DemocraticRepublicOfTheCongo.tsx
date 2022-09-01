import * as React from 'react';
import { SVGProps } from 'react';

const SvgDemocraticRepublicOfTheCongo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#democratic-republic-of-the-congo_svg__a)">
      <g clipPath="url(#democratic-republic-of-the-congo_svg__b)">
        <mask
          id="democratic-republic-of-the-congo_svg__c"
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
        <g mask="url(#democratic-republic-of-the-congo_svg__c)">
          <path
            fill="#3195F9"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="democratic-republic-of-the-congo_svg__d"
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
          <g mask="url(#democratic-republic-of-the-congo_svg__d)">
            <path
              fill="#E31D1C"
              stroke="#FECA00"
              strokeWidth={2.5}
              d="m1.12 27.496.674.896.964-.572L43.552 3.617l1.198-.711-.837-1.115-2.498-3.327-.673-.896-.964.572-40.794 24.203-1.198.711.837 1.115 2.498 3.327Z"
            />
            <path
              fill="#FECA00"
              fillRule="evenodd"
              d="m8.547 10.606-3.921 2.418 1.253-4.141L3 6.238l3.898-.143L8.547 2l1.65 4.095h3.89l-2.872 2.788 1.439 3.897-4.107-2.174Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="democratic-republic-of-the-congo_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="democratic-republic-of-the-congo_svg__a"
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
          result="effect1_dropShadow_91_29031"
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
          in2="effect1_dropShadow_91_29031"
          result="effect2_dropShadow_91_29031"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_29031"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgDemocraticRepublicOfTheCongo;
