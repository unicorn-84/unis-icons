import * as React from 'react';
import { SVGProps } from 'react';

const SvgLiberia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#liberia_svg__a)">
      <g clipPath="url(#liberia_svg__b)">
        <mask
          id="liberia_svg__c"
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
        <g mask="url(#liberia_svg__c)">
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M3 2h36v24H3V2Z"
            clipRule="evenodd"
          />
          <path fill="#E31D1C" d="M3.03 7.5h36v3h-36z" />
          <path
            fill="#E31D1C"
            fillRule="evenodd"
            d="M3 2h36v3H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#E31D1C"
            d="M2.934 13h36v3h-36zm.191 5.4h36v3h-36zm-.011 5.1h36v3h-36z"
          />
          <path
            fill="#3D58DB"
            fillRule="evenodd"
            d="M3 2h18v14H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M12.149 11.213 8.862 13.24l1.05-3.47L7.5 7.552l3.267-.12L12.149 4l1.382 3.432h3.261l-2.407 2.337 1.206 3.266-3.442-1.822Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="liberia_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="liberia_svg__a"
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
          result="effect1_dropShadow_91_26712"
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
          in2="effect1_dropShadow_91_26712"
          result="effect2_dropShadow_91_26712"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26712"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgLiberia;
