import * as React from 'react';
import { SVGProps } from 'react';

const GgGuernsey = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#gg-guernsey_svg__a)">
      <g clipPath="url(#gg-guernsey_svg__b)">
        <mask
          id="gg-guernsey_svg__c"
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
        <g mask="url(#gg-guernsey_svg__c)">
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="gg-guernsey_svg__d"
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
          <g
            mask="url(#gg-guernsey_svg__d)"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path
              fill="#E31D1C"
              d="M16.5 2h9v8H39v8H25.5v8h-9v-8H3v-8h13.5V2Z"
            />
            <path
              fill="#FECA00"
              d="M17.631 5.046 18.75 6.8V12h-8.027v-.057l-1.979-.998v5.96L10.617 16h8.133v5.05l-1.119 1.755h6.705l-1.076-1.76h-.01V16h8.1l1.873.906v-5.96l-1.979.997V12H23.25V6.805h.01l1.076-1.76h-6.705Z"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="gg-guernsey_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="gg-guernsey_svg__a"
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
          result="effect1_dropShadow_91_28121"
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
          in2="effect1_dropShadow_91_28121"
          result="effect2_dropShadow_91_28121"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28121"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default GgGuernsey;
