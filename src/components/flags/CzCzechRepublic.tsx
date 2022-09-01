import * as React from 'react';
import { SVGProps } from 'react';

const CzCzechRepublic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#cz-czech-republic_svg__a)">
      <g clipPath="url(#cz-czech-republic_svg__b)">
        <mask
          id="cz-czech-republic_svg__c"
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
        <g mask="url(#cz-czech-republic_svg__c)">
          <path
            fill="#E31D1C"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="cz-czech-republic_svg__d"
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
          <g mask="url(#cz-czech-republic_svg__d)">
            <path
              fill="#F7FCFF"
              fillRule="evenodd"
              d="M3 0v14h36V0H3Z"
              clipRule="evenodd"
            />
          </g>
          <path
            fill="#3D58DB"
            fillRule="evenodd"
            d="M3 2v24l20.25-12L3 2Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="cz-czech-republic_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="cz-czech-republic_svg__a"
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
          result="effect1_dropShadow_91_28811"
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
          in2="effect1_dropShadow_91_28811"
          result="effect2_dropShadow_91_28811"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28811"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default CzCzechRepublic;
