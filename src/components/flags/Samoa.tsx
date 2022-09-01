import * as React from 'react';
import { SVGProps } from 'react';

const SvgSamoa = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#samoa_svg__a)">
      <g clipPath="url(#samoa_svg__b)">
        <mask
          id="samoa_svg__c"
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
        <g mask="url(#samoa_svg__c)">
          <path
            fill="#C51918"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="samoa_svg__d"
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
          <g mask="url(#samoa_svg__d)" fillRule="evenodd" clipRule="evenodd">
            <path fill="#2E42A5" d="M3 2v14h18V2H3Z" />
            <path
              fill="#FEFFFF"
              d="m7.011 9.772-1.192.64.272-1.25-.993-.934 1.344-.05.57-1.166.568 1.166h1.343l-.991.985.298 1.249-1.219-.64Zm9 0-1.192.64.272-1.25-.993-.934 1.344-.05.57-1.166.568 1.166h1.343l-.991.985.298 1.249-1.219-.64Zm-4.612-3.634-1.123.602.256-1.175-.934-.88 1.265-.047.536-1.098.535 1.098h1.264l-.933.927.28 1.175-1.146-.602Zm1.215 4.287-.701.377.16-.735-.584-.55.79-.03.335-.685.335.686h.79l-.583.58.175.734-.717-.377Zm-1.279 4.403-1.684.904.384-1.763-1.402-1.32 1.899-.071.803-1.646.803 1.646h1.895l-1.399 1.39.422 1.764-1.721-.904Z"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="samoa_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="samoa_svg__a"
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
          result="effect1_dropShadow_91_23891"
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
          in2="effect1_dropShadow_91_23891"
          result="effect2_dropShadow_91_23891"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_23891"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgSamoa;
