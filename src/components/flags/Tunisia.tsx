import * as React from 'react';
import { SVGProps } from 'react';

const SvgTunisia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#tunisia_svg__a)">
      <g clipPath="url(#tunisia_svg__b)">
        <mask
          id="tunisia_svg__c"
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
        <g mask="url(#tunisia_svg__c)">
          <path
            fill="#E31D1C"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="tunisia_svg__d"
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
          <g mask="url(#tunisia_svg__d)" fillRule="evenodd" clipRule="evenodd">
            <path
              fill="#F7FCFF"
              d="M21 22c4.97 0 9-3.582 9-8s-4.03-8-9-8-9 3.582-9 8 4.03 8 9 8Z"
            />
            <path
              fill="#E31D1C"
              d="M22.578 19.65s-4.744-1.15-4.744-5.677c0-4.527 4.744-5.776 4.744-5.776-1.962-.674-7.702.361-7.702 5.776 0 5.416 5.9 6.391 7.702 5.678Zm-.261-6.662-2.354.765 2.53.786.085 2.104 1.54-1.635 2.537.16-1.828-1.326 1.1-1.915-2.15.644-1.49-1.656.03 2.073Z"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="tunisia_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="tunisia_svg__a"
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
          result="effect1_dropShadow_91_24458"
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
          in2="effect1_dropShadow_91_24458"
          result="effect2_dropShadow_91_24458"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_24458"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgTunisia;
