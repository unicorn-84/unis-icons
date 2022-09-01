import * as React from 'react';
import { SVGProps } from 'react';

const SvgGibraltar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#gibraltar_svg__a)">
      <g clipPath="url(#gibraltar_svg__b)">
        <mask
          id="gibraltar_svg__c"
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
        <g mask="url(#gibraltar_svg__c)">
          <path fill="#F7FCFF" d="M3 2h36v24H3z" />
          <path
            fill="#C51918"
            fillRule="evenodd"
            d="M3 18h36v8H3v-8Z"
            clipRule="evenodd"
          />
          <path
            fill="#DB000B"
            fillRule="evenodd"
            d="M22.563 7h-4.25v4.615H17.25V8.846H13v2.77h-2.125v.923h1.063v4.615h17v-4.615H30v-.924h-2.125V8.846h-4.25v2.77h-1.063V7ZM30 17.154H10.875v.923H30v-.923Z"
            clipRule="evenodd"
          />
          <path
            fill="#272727"
            d="M14.063 10.692a.923.923 0 1 1 1.845 0V11.8h-1.845v-1.108Zm10.625 0a.923.923 0 1 1 1.845 0V11.8h-1.846v-1.108Z"
          />
          <path
            fill="#272727"
            fillRule="evenodd"
            d="M13.763 15.606a1.222 1.222 0 1 1 2.444 0v1.732h-2.444v-1.732Z"
            clipRule="evenodd"
          />
          <path
            fill="#272727"
            d="M24.388 15.606a1.222 1.222 0 1 1 2.444 0v1.732h-2.444v-1.732Z"
          />
          <path
            fill="#272727"
            fillRule="evenodd"
            d="M18.631 15.814a1.566 1.566 0 1 1 3.132 0v2.495H18.63v-2.495Z"
            clipRule="evenodd"
          />
          <path
            fill="#272727"
            d="M19.375 9.769a.923.923 0 1 1 1.845 0V11.8h-1.845V9.769Z"
          />
          <path fill="#DE1A23" d="M10.875 10.692h1.063v.923h-1.063z" />
          <path
            fill="#DE1A23"
            fillRule="evenodd"
            d="M12.563 8h1.124v1h-1.124V8Zm4.295 0h1.125v1h-1.125V8Zm-.64 0h-1.687v1h1.688V8Zm7.134 0h1.125v1h-1.125V8Zm4.194 0h1.125v1h-1.125V8Zm-.691 0h-1.688v1h1.688V8Zm-8.33-1.977H17.4v1h1.125v-1Zm1.687 0h-1.125v1h1.125v-1Zm.563 0H21.9v1h-1.125v-1Zm2.812 0h-1.125v1h1.125v-1Z"
            clipRule="evenodd"
          />
          <path fill="#DE1A23" d="M28.875 10.775H30v.839h-1.125z" />
          <path
            fill="#E8AA00"
            fillRule="evenodd"
            d="m20.37 20.453 3.051-1.774-3.256-1.353-3.256 1.663 3.46 1.464Zm-1.192-1.611.998-.595 1.055.51-.948.552-1.105-.467Zm-1.018 4.165h1.658v1.107-.374h-1.03v.374h-.628v-1.107Z"
            clipRule="evenodd"
          />
          <path
            fill="#E8AA00"
            fillRule="evenodd"
            d="M19.668 20.114h1.407v4h-1.407v-4Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="gibraltar_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="gibraltar_svg__a"
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
          result="effect1_dropShadow_91_28070"
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
          in2="effect1_dropShadow_91_28070"
          result="effect2_dropShadow_91_28070"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28070"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgGibraltar;
