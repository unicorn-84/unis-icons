import * as React from 'react';
import { SVGProps } from 'react';

const BbBarbados = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#bb-barbados_svg__a)">
      <g clipPath="url(#bb-barbados_svg__b)">
        <mask
          id="bb-barbados_svg__c"
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
          mask="url(#bb-barbados_svg__c)"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path fill="#2E42A5" d="M27.75 2H39v24H27.75V2Z" />
          <path fill="#FECA00" d="M14.25 2h13.5v24h-13.5V2Z" />
          <path fill="#2E42A5" d="M3 2h11.25v24H3V2Z" />
          <path
            fill="#000"
            d="M23.939 17.668c.211-1.29 1.71-4.093 1.71-4.093l.696-1.644-2.756.795.652.301-1.276 3.199L22 16.02V9.853l.762-.05-1.88-2.431-1.837 2.48h.886v6.17l-1.086.16-.775-3.234.447-.333-2.998-.492.895 1.469s1.205 2.516 1.656 4.076l1.86-.128v2.398H22V17.54l1.938.128Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="bb-barbados_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="bb-barbados_svg__a"
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
          result="effect1_dropShadow_91_29669"
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
          in2="effect1_dropShadow_91_29669"
          result="effect2_dropShadow_91_29669"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_29669"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default BbBarbados;
