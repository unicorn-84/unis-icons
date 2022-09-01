import * as React from 'react';
import { SVGProps } from 'react';

const MwMalawi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#mw-malawi_svg__a)">
      <g clipPath="url(#mw-malawi_svg__b)">
        <mask
          id="mw-malawi_svg__c"
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
        <g mask="url(#mw-malawi_svg__c)">
          <path
            fill="#E11C1B"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="mw-malawi_svg__d"
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
            mask="url(#mw-malawi_svg__d)"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path fill="#272727" d="M3 2v10h36V2H3Z" />
            <path fill="#5EAA22" d="M3 18v8h36v-8H3Z" />
            <path
              fill="#E11C1B"
              d="M7.502 13.946v-.002l-.01.001.01.001Zm.707-3.82h.116l-.178-.023.062.024Zm3.293 0c.06-.1.12-.2.185-.298L9.11 8.313l3.038.878c.17-.211.352-.416.546-.613l-2.233-1.89 2.845 1.32c.209-.177.428-.347.656-.51l-1.806-2.217 2.55 1.734c.237-.14.482-.273.735-.397l-1.3-2.481 2.153 2.102c.257-.102.52-.196.788-.282l-.732-2.665 1.668 2.404c.269-.063.542-.12.819-.167l-.122-2.754 1.109 2.623c.274-.026.551-.044.831-.054l.502-2.744.503 2.745c.28.01.556.028.83.055l1.11-2.625-.122 2.758c.276.048.548.104.816.168l1.67-2.409-.733 2.671c.267.086.528.18.783.282l2.16-2.108-1.305 2.49c.25.124.494.256.73.395l2.56-1.74-1.814 2.226c.226.162.443.33.65.506l2.859-1.326-2.245 1.9c.192.196.372.4.54.608l3.056-.883-2.592 1.525c.062.095.121.192.178.289h-2.21c-1.523-1.877-4.308-3.134-7.49-3.134-3.182 0-5.967 1.257-7.49 3.134h-2.1Zm3.378 0c1.443-1.322 3.709-2.175 6.257-2.175 2.548 0 4.815.853 6.258 2.176H14.88Zm19.112 0h.116l.062-.023-.178.024Zm.825 3.818.009.001h-.01v-.001Z"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="mw-malawi_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="mw-malawi_svg__a"
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
          result="effect1_dropShadow_91_26277"
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
          in2="effect1_dropShadow_91_26277"
          result="effect2_dropShadow_91_26277"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26277"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default MwMalawi;
