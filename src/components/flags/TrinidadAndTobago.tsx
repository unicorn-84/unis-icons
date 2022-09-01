import * as React from 'react';
import { SVGProps } from 'react';

const SvgTrinidadAndTobago = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#trinidad-and-tobago_svg__a)">
      <g clipPath="url(#trinidad-and-tobago_svg__b)">
        <mask
          id="trinidad-and-tobago_svg__c"
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
        <g mask="url(#trinidad-and-tobago_svg__c)">
          <path
            fill="#E31D1C"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="trinidad-and-tobago_svg__d"
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
          <g mask="url(#trinidad-and-tobago_svg__d)">
            <path
              fill="#272727"
              stroke="#F7FCFF"
              strokeWidth={1.5}
              d="m36.159 31.494-.536.39-.453-.43L1.032-.947l-.617-.586.73-.53 3.483-2.533.536-.39.453.431 34.138 32.399.617.586-.73.53-3.483 2.533Z"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="trinidad-and-tobago_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="trinidad-and-tobago_svg__a"
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
          result="effect1_dropShadow_91_24432"
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
          in2="effect1_dropShadow_91_24432"
          result="effect2_dropShadow_91_24432"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_24432"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgTrinidadAndTobago;
