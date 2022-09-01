import * as React from 'react';
import { SVGProps } from 'react';

const SvgPakistan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#pakistan_svg__a)">
      <g clipPath="url(#pakistan_svg__b)">
        <mask
          id="pakistan_svg__c"
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
        <g mask="url(#pakistan_svg__c)" fillRule="evenodd" clipRule="evenodd">
          <path fill="#2F8D00" d="M12 2h27v24H12V2Z" />
          <path fill="#F7FCFF" d="M3 2h9v24H3V2Z" />
          <path
            fill="#F1F9FF"
            d="M28.233 17.307s-5.024 1.164-9.012-1.211c-3.987-2.375-1.983-7.848-1.983-7.848-2.08.27-5.346 7.015-.081 10.399 5.265 3.383 10.31.13 11.076-1.34Zm-5.575-6.44-2.668 1.16 2.815.445.38 2.446 1.594-2.083 3.137.188-2.457-1.629 1.308-2.176-2.446.995-1.818-1.518.155 2.172Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="pakistan_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="pakistan_svg__a"
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
          result="effect1_dropShadow_91_25853"
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
          in2="effect1_dropShadow_91_25853"
          result="effect2_dropShadow_91_25853"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_25853"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgPakistan;
