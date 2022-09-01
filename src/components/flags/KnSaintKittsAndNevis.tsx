import * as React from 'react';
import { SVGProps } from 'react';

const KnSaintKittsAndNevis = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#kn-saint-kitts-and-nevis_svg__a)">
      <g clipPath="url(#kn-saint-kitts-and-nevis_svg__b)">
        <mask
          id="kn-saint-kitts-and-nevis_svg__c"
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
        <g mask="url(#kn-saint-kitts-and-nevis_svg__c)">
          <path
            fill="#C51918"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <path
            fill="#5EAA22"
            fillRule="evenodd"
            d="M3 2v24L39 2H3Z"
            clipRule="evenodd"
          />
          <path
            fill="#272727"
            stroke="#FFD018"
            strokeWidth={2.5}
            d="m3.882 30.005.687.681.831-.493L46.194 5.989l1.39-.824-1.148-1.138L40.45-1.91l-.686-.68-.832.492L-1.86 22.107l-1.39.825 1.147 1.138 5.986 5.935Z"
          />
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="m16.6 18.919-1.225 1.894-.782-2.134-2.433-.688 2.027-1.1-.244-2.232 2 1.367 2.072-1.021-.58 2.274 1.662 1.7-2.498-.06Zm11.25-6.554-1.225 1.895-.782-2.134-2.433-.688 2.027-1.1-.244-2.233 2 1.367 2.072-1.02-.58 2.274 1.662 1.7-2.498-.06Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="kn-saint-kitts-and-nevis_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="kn-saint-kitts-and-nevis_svg__a"
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
          result="effect1_dropShadow_91_27022"
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
          in2="effect1_dropShadow_91_27022"
          result="effect2_dropShadow_91_27022"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_27022"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default KnSaintKittsAndNevis;
