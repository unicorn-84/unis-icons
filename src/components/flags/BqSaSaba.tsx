import * as React from 'react';
import { SVGProps } from 'react';

const BqSaSaba = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#bq-sa-saba_svg__a)">
      <g clipPath="url(#bq-sa-saba_svg__b)">
        <mask
          id="bq-sa-saba_svg__c"
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
        <g mask="url(#bq-sa-saba_svg__c)" fillRule="evenodd" clipRule="evenodd">
          <path fill="#fff" d="M3 2h36v24H3V2Z" />
          <path
            fill="#F00000"
            d="M3 13.664V2h18L3 13.664Zm36 0V2H21l18 11.664Z"
          />
          <path
            fill="#00268D"
            d="M3 13.664V26h18L3 13.664Zm36 0v12.672L21 26l18-12.336Z"
          />
          <path
            fill="#FEDA00"
            d="m20.678 16.256-3.957 2.507 1.452-4.141-3.923-2.535h4.888L20.678 8l1.633 4.087h4.755l-3.89 2.535 1.479 4.141-3.977-2.507Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="bq-sa-saba_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="bq-sa-saba_svg__a"
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
          result="effect1_dropShadow_91_29395"
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
          in2="effect1_dropShadow_91_29395"
          result="effect2_dropShadow_91_29395"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_29395"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default BqSaSaba;
