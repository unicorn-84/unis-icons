import * as React from 'react';
import { SVGProps } from 'react';

const SvElSalvador = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#sv-el-salvador_svg__a)">
      <g clipPath="url(#sv-el-salvador_svg__b)">
        <mask
          id="sv-el-salvador_svg__c"
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
        <g mask="url(#sv-el-salvador_svg__c)">
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="sv-el-salvador_svg__d"
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
          <g mask="url(#sv-el-salvador_svg__d)">
            <path
              fill="#3D58DB"
              fillRule="evenodd"
              d="M3 2v8h36V2H3Zm0 16v8h36v-8H3Z"
              clipRule="evenodd"
            />
            <path
              stroke="#E8AA00"
              d="M24.916 13.858c0 1.958-1.805 3.642-4.16 3.642-2.354 0-4.159-1.684-4.159-3.642s1.805-3.642 4.16-3.642c2.354 0 4.16 1.684 4.16 3.642Z"
            />
            <path
              fill="#1E601B"
              fillRule="evenodd"
              d="M18.537 11.662s-1.072 1.568-1.072 2.644 1.283 2.429 3.301 2.429c1.969 0 3.384-1.045 3.426-2.429.043-1.384-1.059-2.369-1.059-2.369s.624 1.992.312 2.8c-.312.807-1.32 1.783-2.679 1.66-1.358-.125-2.647-1.611-2.647-2.091 0-.48.418-2.644.418-2.644Z"
              clipRule="evenodd"
            />
            <path stroke="#188396" d="M18.93 14.329h3.609" />
            <path
              stroke="#E8AA00"
              d="M19.266 13.806h3.105m-.137.605h-2.869l1.448-2.135 1.42 2.135Z"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="sv-el-salvador_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="sv-el-salvador_svg__a"
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
          result="effect1_dropShadow_91_24960"
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
          in2="effect1_dropShadow_91_24960"
          result="effect2_dropShadow_91_24960"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_24960"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvElSalvador;
