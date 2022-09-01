import * as React from 'react';
import { SVGProps } from 'react';

const SvgFrenchGuiana = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#french-guiana_svg__a)">
      <g clipPath="url(#french-guiana_svg__b)">
        <mask
          id="french-guiana_svg__c"
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
        <g mask="url(#french-guiana_svg__c)">
          <rect width={36} height={24} x={3} y={2} fill="#5EAA22" rx={2} />
          <path
            fill="#FECA00"
            fillRule="evenodd"
            d="m3 2 36 24H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#E21835"
            fillRule="evenodd"
            d="m20.922 16.406-3.921 2.418 1.253-4.14-2.879-2.646 3.898-.143L20.922 7.8l1.65 4.095h3.89l-2.872 2.788 1.439 3.897-4.107-2.174Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="french-guiana_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="french-guiana_svg__a"
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
          result="effect1_dropShadow_91_28135"
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
          in2="effect1_dropShadow_91_28135"
          result="effect2_dropShadow_91_28135"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28135"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgFrenchGuiana;
