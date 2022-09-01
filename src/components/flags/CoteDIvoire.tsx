import * as React from 'react';
import { SVGProps } from 'react';

const SvgCoteDIvoire = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#cote-d-ivoire_svg__a)">
      <g clipPath="url(#cote-d-ivoire_svg__b)">
        <mask
          id="cote-d-ivoire_svg__c"
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
          mask="url(#cote-d-ivoire_svg__c)"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path fill="#67BD38" d="M27.75 2H39v24H27.75V2Z" />
          <path fill="#E47E00" d="M3 2h11.25v24H3V2Z" />
          <path fill="#F7FCFF" d="M14.25 2h13.5v24h-13.5V2Z" />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="cote-d-ivoire_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="cote-d-ivoire_svg__a"
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
          result="effect1_dropShadow_91_28995"
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
          in2="effect1_dropShadow_91_28995"
          result="effect2_dropShadow_91_28995"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28995"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgCoteDIvoire;
