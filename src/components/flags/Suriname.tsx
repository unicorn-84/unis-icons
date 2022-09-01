import * as React from 'react';
import { SVGProps } from 'react';

const SvgSuriname = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#suriname_svg__a)">
      <g clipPath="url(#suriname_svg__b)">
        <mask
          id="suriname_svg__c"
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
        <g mask="url(#suriname_svg__c)">
          <path
            fill="#4E8B1D"
            fillRule="evenodd"
            d="M3 18h36v8H3v-8ZM3 2h36v6H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#AF0100"
            stroke="#fff"
            strokeWidth={3}
            d="M3 8.5H1.5v11h39v-11H3Z"
          />
          <path
            fill="#FECA00"
            fillRule="evenodd"
            d="M21.003 16.494 18.197 18l.64-2.938-2.337-2.2 3.164-.118L21.003 10l1.338 2.744H25.5l-2.331 2.318L23.87 18l-2.867-1.506Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="suriname_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="suriname_svg__a"
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
          result="effect1_dropShadow_91_24995"
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
          in2="effect1_dropShadow_91_24995"
          result="effect2_dropShadow_91_24995"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_24995"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgSuriname;
