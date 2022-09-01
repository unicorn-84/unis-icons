import * as React from 'react';
import { SVGProps } from 'react';

const SvgGeorgia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#georgia_svg__a)">
      <g clipPath="url(#georgia_svg__b)">
        <mask
          id="georgia_svg__c"
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
        <g mask="url(#georgia_svg__c)">
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="georgia_svg__d"
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
          <g
            mask="url(#georgia_svg__d)"
            fill="#E31D1C"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M18.75 2h4.5v10H39v4H23.25v10h-4.5V16H3v-4h15.75V2Z" />
            <path d="M14.249 19.222 16.725 19v2s-2.476-.138-2.476-.098c0 .04.226 2.098.226 2.098h-2.25l.18-2h-2.43v-2l2.43.222-.18-2.222h2.25l-.226 2.222Zm0-12L16.725 7v2s-2.476-.138-2.476-.098c0 .04.226 2.098.226 2.098h-2.25l.18-2h-2.43V7l2.43.222L12.225 5h2.25l-.226 2.222Zm15.75 0L32.475 7v2S30 8.862 30 8.902c0 .04.226 2.098.226 2.098h-2.25l.18-2h-2.43V7l2.43.222L27.975 5h2.25L30 7.222Zm0 12L32.475 19v2S30 20.862 30 20.902c0 .04.226 2.098.226 2.098h-2.25l.18-2h-2.43v-2l2.43.222-.18-2.222h2.25L30 19.222Z" />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="georgia_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="georgia_svg__a"
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
          result="effect1_dropShadow_91_28142"
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
          in2="effect1_dropShadow_91_28142"
          result="effect2_dropShadow_91_28142"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28142"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgGeorgia;
