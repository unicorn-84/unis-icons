import * as React from 'react';
import { SVGProps } from 'react';

const SvgChina = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#china_svg__a)">
      <g clipPath="url(#china_svg__b)">
        <mask
          id="china_svg__c"
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
        <g mask="url(#china_svg__c)" fillRule="evenodd" clipRule="evenodd">
          <path fill="#E31D1C" d="M3 2h36v24H3V2Z" />
          <path
            fill="#FECA00"
            d="m19.893 6.548-1.137.61.26-1.19-.947-.89 1.282-.049.542-1.11.542 1.11h1.28l-.945.94.284 1.19-1.161-.61Zm-8.998 5.059-3.241 1.551.74-3.026-2.7-2.265 3.655-.123 1.546-2.826 1.546 2.826h3.648l-2.692 2.388.81 3.026-3.312-1.55Zm11.248-1.059-1.137.61.26-1.19-.947-.89 1.282-.049.542-1.11.542 1.11h1.28l-.945.94.284 1.19-1.161-.61Zm-1.125 4-1.137.61.26-1.19-.947-.89 1.282-.049.542-1.11.542 1.11h1.28l-.945.94.284 1.19-1.161-.61Zm-3.375 3-1.137.61.26-1.19-.947-.89 1.282-.049.542-1.11.542 1.11h1.28l-.945.94.284 1.19-1.161-.61Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="china_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="china_svg__a"
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
          result="effect1_dropShadow_91_28936"
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
          in2="effect1_dropShadow_91_28936"
          result="effect2_dropShadow_91_28936"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28936"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgChina;
