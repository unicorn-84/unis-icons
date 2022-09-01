import * as React from 'react';
import { SVGProps } from 'react';

const MkNorthMacedonia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#mk-north-macedonia_svg__a)">
      <g clipPath="url(#mk-north-macedonia_svg__b)">
        <mask
          id="mk-north-macedonia_svg__c"
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
        <g mask="url(#mk-north-macedonia_svg__c)">
          <path
            fill="#F50100"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="mk-north-macedonia_svg__d"
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
          <g mask="url(#mk-north-macedonia_svg__d)" fill="#FFD018">
            <path
              fillRule="evenodd"
              d="M3 1.958v4.084l15.75 5.951L6.662 1.958H3ZM21 14l3.375-12h-6.75L21 14Zm0 0-3.375 12h6.75L21 14ZM3 21.951v4.084h3.662L18.75 16 3 21.951ZM39 6.066V1.982h-3.662L23.25 12.018 39 6.066Zm0 19.993v-4.083l-15.75-5.952L35.338 26.06H39ZM39 11l-13.5 3L39 17v-6Zm-22.5 3L3 11v6l13.5-3Z"
              clipRule="evenodd"
            />
            <path
              stroke="#F50100"
              strokeWidth={2}
              d="M21 19c2.924 0 5.5-2.131 5.5-5S23.924 9 21 9s-5.5 2.131-5.5 5 2.576 5 5.5 5Z"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="mk-north-macedonia_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="mk-north-macedonia_svg__a"
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
          result="effect1_dropShadow_91_26508"
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
          in2="effect1_dropShadow_91_26508"
          result="effect2_dropShadow_91_26508"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26508"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default MkNorthMacedonia;
