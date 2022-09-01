import * as React from 'react';
import { SVGProps } from 'react';

const BaBosniaAndHerzegovina = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#ba-bosnia-and-herzegovina_svg__a)">
      <g clipPath="url(#ba-bosnia-and-herzegovina_svg__b)">
        <mask
          id="ba-bosnia-and-herzegovina_svg__c"
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
        <g
          mask="url(#ba-bosnia-and-herzegovina_svg__c)"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path fill="#2E42A5" d="M3 2h33.882v24H3V2Z" />
          <path fill="#FECA00" d="M12.53 2h21.176v24L12.529 2Z" />
          <path
            fill="#F7FCFF"
            d="m9.467 4.794-1.245.618.238-1.31-1.007-.926 1.392-.191.622-1.191.622 1.19 1.392.192-1.007.927.238 1.309-1.245-.618Zm3.692 4.28-1.245.618.238-1.31-1.007-.926 1.392-.191.622-1.191.622 1.19 1.392.192-1.007.927.238 1.309-1.245-.618Zm3.461 4.164-1.245.618.238-1.309-1.007-.927 1.392-.19.622-1.192.622 1.191 1.392.191-1.007.927.238 1.31-1.245-.619Zm3.39 3.992-1.245.617.238-1.309-1.007-.927 1.392-.19.622-1.192.622 1.191 1.392.191-1.007.927.238 1.31-1.245-.619Zm3.652 4.107-1.245.618.238-1.31-1.007-.926 1.392-.191.622-1.191.622 1.19 1.392.192-1.007.927.238 1.309-1.245-.618Zm4.038 3.974-1.246.618.238-1.309-1.007-.927 1.392-.191.622-1.191.622 1.191 1.392.191-1.007.927.238 1.31-1.245-.619Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="ba-bosnia-and-herzegovina_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="ba-bosnia-and-herzegovina_svg__a"
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
          result="effect1_dropShadow_91_29677"
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
          in2="effect1_dropShadow_91_29677"
          result="effect2_dropShadow_91_29677"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_29677"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default BaBosniaAndHerzegovina;
