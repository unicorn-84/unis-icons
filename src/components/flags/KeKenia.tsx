import * as React from 'react';
import { SVGProps } from 'react';

const KeKenia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#ke-kenia_svg__a)">
      <g clipPath="url(#ke-kenia_svg__b)">
        <mask
          id="ke-kenia_svg__c"
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
        <g mask="url(#ke-kenia_svg__c)">
          <path
            fill="#272727"
            fillRule="evenodd"
            d="M3 2v8h36V2H3Z"
            clipRule="evenodd"
          />
          <path
            fill="#4E8B1D"
            fillRule="evenodd"
            d="M3 18v8h36v-8H3Z"
            clipRule="evenodd"
          />
          <path
            fill="#E31D1C"
            stroke="#F7FCFF"
            strokeWidth={2}
            d="M3 9H2v10h38V9H3Z"
          />
        </g>
        <path
          fill="#fff"
          d="M24.397 5.929c.214-.39.79-.816 1.727-1.278a.125.125 0 0 1 .104-.003c.056.025.08.085.052.134L16.57 22.48l-.506-.22 8.56-15.599c-.388-.056-.464-.3-.227-.731Z"
        />
        <path
          fill="#fff"
          d="M17.593 5.929c.236.431.16.675-.227.731l8.56 15.6-.506.22-9.71-17.698c-.028-.05-.005-.11.051-.134a.125.125 0 0 1 .105.003c.937.462 1.512.888 1.727 1.278Z"
        />
        <path
          fill="#E31D1C"
          fillRule="evenodd"
          d="M21 22c1.121 0 5.625-3.582 5.625-8S22.121 6 21 6c-1.121 0-5.625 3.582-5.625 8s4.504 8 5.625 8Z"
          clipRule="evenodd"
        />
        <mask
          id="ke-kenia_svg__d"
          width={12}
          height={16}
          x={15}
          y={6}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: 'alpha',
          }}
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M21 22c1.121 0 5.625-3.582 5.625-8S22.121 6 21 6c-1.121 0-5.625 3.582-5.625 8s4.504 8 5.625 8Z"
            clipRule="evenodd"
          />
        </mask>
        <g mask="url(#ke-kenia_svg__d)">
          <path
            fill="#272727"
            d="M10.313 21c4.349 0 7.874-3.134 7.874-7s-3.525-7-7.875-7c-4.349 0-7.874 3.134-7.874 7s3.525 7 7.874 7Zm21.375 0c4.349 0 7.875-3.134 7.875-7s-3.526-7-7.876-7c-4.349 0-7.875 3.134-7.875 7s3.526 7 7.875 7Z"
          />
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M21.225 12.93c.513-.324.9-1.737.9-3.43s-.387-3.106-.9-3.43v6.86Zm-.563-.09c-.456-.447-.787-1.773-.787-3.34s.331-2.894.787-3.34v6.68ZM21 6Zm-.337 9.16v6.68c-.456-.447-.787-1.773-.787-3.34s.331-2.894.787-3.34Zm.563 6.77v-6.86c.513.324.9 1.736.9 3.43 0 1.693-.387 3.106-.9 3.43Z"
            clipRule="evenodd"
          />
          <path
            fill="#F7FCFF"
            d="M21 13c.621 0 1.125.448 1.125 1s-.504 1-1.125 1-1.125-.448-1.125-1 .504-1 1.125-1Z"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="ke-kenia_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="ke-kenia_svg__a"
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
          result="effect1_dropShadow_91_27033"
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
          in2="effect1_dropShadow_91_27033"
          result="effect2_dropShadow_91_27033"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_27033"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default KeKenia;
