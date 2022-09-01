import * as React from 'react';
import { SVGProps } from 'react';

const SvgAntarctica = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#antarctica_svg__a)">
      <g clipPath="url(#antarctica_svg__b)">
        <mask
          id="antarctica_svg__c"
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
        <g mask="url(#antarctica_svg__c)">
          <path
            fill="#5196ED"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="antarctica_svg__d"
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
          <g mask="url(#antarctica_svg__d)">
            <path
              fill="#F5F8FB"
              fillRule="evenodd"
              d="M12.807 9.894s2.322 1.132 2.645 1.445c.323.314.84 1.464 1.647.814s1.614-.145 1.614-1.181 1.205-3.44 2.954-2.838c1.748.603 3.186.226 3.589.467.404.24 1.372 1.437 2.125 1.437.753 0 1.13.699 1.184 1.71.053 1.013-.242 1.11.457 1.23.7.12.968.579.619 1.18-.35.603-.323.338-.27.965.055.626-.698 4.321-3.012 4.683-2.314.361-4.507.168-3.915-.53.592-.7 1.411-1.503.2-1.672-1.21-.169-1.973-.313-3.183-.023-1.211.289-2.476.746-3.229-.12-.753-.868-.591-1.495-1.21-1.905-.619-.41-1.373-.337-.753-1.132.618-.795 1.129-.498.618-1.125-.51-.626-2.44-.9-2.44-1.525 0-.627-1.227-2 .36-1.88Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="antarctica_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="antarctica_svg__a"
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
          result="effect1_dropShadow_91_29839"
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
          in2="effect1_dropShadow_91_29839"
          result="effect2_dropShadow_91_29839"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_29839"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgAntarctica;
