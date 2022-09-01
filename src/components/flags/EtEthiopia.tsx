import * as React from 'react';
import { SVGProps } from 'react';

const EtEthiopia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#et-ethiopia_svg__a)">
      <g clipPath="url(#et-ethiopia_svg__b)">
        <mask
          id="et-ethiopia_svg__c"
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
        <g mask="url(#et-ethiopia_svg__c)">
          <path
            fill="#FECA00"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="et-ethiopia_svg__d"
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
          <g mask="url(#et-ethiopia_svg__d)">
            <path
              fill="#5EAA22"
              fillRule="evenodd"
              d="M3 2v8h36V2H3Z"
              clipRule="evenodd"
            />
            <path
              fill="#E31D1C"
              fillRule="evenodd"
              d="M3 18v8h36v-8H3Z"
              clipRule="evenodd"
            />
            <path
              fill="#2B77B8"
              fillRule="evenodd"
              d="M21 20c3.728 0 6.75-2.686 6.75-6S24.728 8 21 8s-6.75 2.686-6.75 6 3.022 6 6.75 6Z"
              clipRule="evenodd"
            />
            <path
              stroke="#FECA00"
              strokeWidth={1.5}
              d="m21 16-3.107.927.967-2.309-2.108-2.236h2.925L21 10l1.323 2.382h2.989l-2.172 2.236.77 2.309L21 16Z"
              clipRule="evenodd"
            />
            <path
              stroke="#2B77B8"
              d="m20.658 14.034-2.345 4.36m1.977-4.914h-4.5m5.347 1.358 4.397 1.804m-3.447-2.768 3.184-3.098"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="et-ethiopia_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="et-ethiopia_svg__a"
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
          result="effect1_dropShadow_91_28395"
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
          in2="effect1_dropShadow_91_28395"
          result="effect2_dropShadow_91_28395"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28395"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default EtEthiopia;
