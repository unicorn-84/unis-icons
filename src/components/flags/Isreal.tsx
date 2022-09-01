import * as React from 'react';
import { SVGProps } from 'react';

const SvgIsreal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#isreal_svg__a)">
      <g clipPath="url(#isreal_svg__b)">
        <mask
          id="isreal_svg__c"
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
        <g mask="url(#isreal_svg__c)">
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="isreal_svg__d"
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
            mask="url(#isreal_svg__d)"
            fill="#3D58DB"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M3 5v3h36V5H3Zm0 15v3h36v-3H3Zm12.804-3.061h10.549L21.13 8.62l-5.326 8.319Zm8.743-1.01h-6.9l3.473-5.47 3.427 5.47Z" />
            <path d="M15.672 11.076h10.594l-5.113 8.086-5.481-8.086Zm8.754.974h-6.744l3.44 5.481 3.304-5.48Z" />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="isreal_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="isreal_svg__a"
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
          result="effect1_dropShadow_91_27588"
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
          in2="effect1_dropShadow_91_27588"
          result="effect2_dropShadow_91_27588"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_27588"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgIsreal;
