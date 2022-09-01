import * as React from 'react';
import { SVGProps } from 'react';

const JmJamaica = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#jm-jamaica_svg__a)">
      <g clipPath="url(#jm-jamaica_svg__b)">
        <mask
          id="jm-jamaica_svg__c"
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
        <g mask="url(#jm-jamaica_svg__c)">
          <path
            fill="#093"
            fillRule="evenodd"
            d="M3 2h36v24H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#272727"
            stroke="#FECA00"
            strokeWidth={2.7}
            d="M2.674.912.525-.665v29.33l2.149-1.577 16.355-12L20.512 14l-1.483-1.088-16.355-12ZM39.35.894l2.125-1.489v29.19l-2.125-1.49-17.121-12L20.652 14l1.577-1.105 17.121-12Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="jm-jamaica_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="jm-jamaica_svg__a"
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
          result="effect1_dropShadow_91_27315"
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
          in2="effect1_dropShadow_91_27315"
          result="effect2_dropShadow_91_27315"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_27315"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default JmJamaica;
