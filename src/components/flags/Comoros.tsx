import * as React from 'react';
import { SVGProps } from 'react';

const SvgComoros = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#comoros_svg__a)">
      <g clipPath="url(#comoros_svg__b)">
        <mask
          id="comoros_svg__c"
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
        <g mask="url(#comoros_svg__c)">
          <path
            fill="#5196ED"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="comoros_svg__d"
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
          <g mask="url(#comoros_svg__d)" fillRule="evenodd" clipRule="evenodd">
            <path fill="#AF0100" d="M3 14v6h36v-6H3Z" />
            <path fill="#F7FCFF" d="M3 8v6h36V8H3Z" />
            <path fill="#FECA00" d="M3 2v6h36V2H3Z" />
            <path fill="#5EAA22" d="m3 2 21.375 12L3 26V2Z" />
            <path
              fill="#F7FCFF"
              d="M11.217 18.501s-4.03-1.223-3.888-5.052c.142-3.828 4.247-4.579 4.247-4.579-1.437-.922-6.581.159-6.746 4.58-.164 4.42 4.855 5.402 6.387 5.051Zm.122-6.692.126-.654-.535-.464.74-.095L12 10l.33.596.74.095-.535.464.126.654L12 11.5l-.661.31Zm.126 1.346-.126.654.66-.309.662.31-.126-.655.535-.464-.74-.095L12 12l-.33.596-.74.095.535.464Zm-.126 2.654.126-.654-.535-.464.74-.095L12 14l.33.596.74.095-.535.464.126.654L12 15.5l-.661.31Zm0 2 .126-.654-.535-.464.74-.095L12 16l.33.596.74.095-.535.464.126.654L12 17.5l-.661.31Z"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="comoros_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="comoros_svg__a"
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
          result="effect1_dropShadow_91_27054"
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
          in2="effect1_dropShadow_91_27054"
          result="effect2_dropShadow_91_27054"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_27054"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgComoros;
