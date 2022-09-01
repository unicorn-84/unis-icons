import * as React from 'react';
import { SVGProps } from 'react';

const SvgParaguay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#paraguay_svg__a)">
      <g clipPath="url(#paraguay_svg__b)">
        <mask
          id="paraguay_svg__c"
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
        <g mask="url(#paraguay_svg__c)">
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="paraguay_svg__d"
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
          <g mask="url(#paraguay_svg__d)">
            <path
              stroke="#272727"
              strokeWidth={0.35}
              d="M25.325 14c0 2.094-1.916 3.825-4.325 3.825-2.409 0-4.325-1.731-4.325-3.825 0-2.094 1.916-3.825 4.325-3.825 2.409 0 4.325 1.731 4.325 3.825Z"
            />
            <path
              fill="#272727"
              fillRule="evenodd"
              d="M17.625 14c0 1.657 1.511 3 3.375 3s3.375-1.343 3.375-3c0-.886-.432-1.682-1.118-2.23A3.609 3.609 0 0 0 21 11c-.73 0-1.406.206-1.958.556-.858.544-1.417 1.436-1.417 2.444Zm6.356 0c0 1.464-1.335 2.65-2.981 2.65s-2.981-1.186-2.981-2.65c0-.894.498-1.685 1.26-2.165A3.228 3.228 0 0 1 21 11.35c.796 0 1.519.277 2.053.729.572.482.928 1.165.928 1.921Z"
              clipRule="evenodd"
            />
            <path
              fill="#F05234"
              fillRule="evenodd"
              d="M3 2v8h36V2H3Z"
              clipRule="evenodd"
            />
            <path
              fill="#3D58DB"
              fillRule="evenodd"
              d="M3 18v8h36v-8H3Z"
              clipRule="evenodd"
            />
            <path
              fill="#73BE4A"
              d="m19.444 12.002.32.412c-.742.456-1.078.993-.804 1.903.272.901.91 1.348 1.97 1.381l-.02.5c-1.307-.04-2.19-.517-2.526-1.631-.333-1.106.113-1.982 1.06-2.565Z"
            />
            <path
              fill="#FBCD17"
              fillRule="evenodd"
              d="m21 14.315-.992.599.334-1.024-.947-.653 1.198-.034L21 12.2l.407 1.003 1.198.034-.947.653.334 1.024-.992-.599Z"
              clipRule="evenodd"
            />
            <path
              stroke="#73BE4A"
              strokeWidth={0.5}
              d="M22.314 12.176s1.266.78.81 2.291c-.455 1.512-2.231 1.567-2.231 1.567"
            />
            <path fill="#F7FCFF" d="m19.385 11.044.525.718Z" />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="paraguay_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="paraguay_svg__a"
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
          result="effect1_dropShadow_91_25505"
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
          in2="effect1_dropShadow_91_25505"
          result="effect2_dropShadow_91_25505"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_25505"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgParaguay;
