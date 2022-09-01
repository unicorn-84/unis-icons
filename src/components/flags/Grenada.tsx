import * as React from 'react';
import { SVGProps } from 'react';

const SvgGrenada = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#grenada_svg__a)">
      <g clipPath="url(#grenada_svg__b)">
        <mask
          id="grenada_svg__c"
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
        <g mask="url(#grenada_svg__c)">
          <path
            fill="#C51918"
            fillRule="evenodd"
            d="M3 2h36v24H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#FECA00"
            fillRule="evenodd"
            d="M9.75 8h22.5v12H9.75V8Z"
            clipRule="evenodd"
          />
          <mask
            id="grenada_svg__d"
            width={24}
            height={12}
            x={9}
            y={8}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: 'alpha',
            }}
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M9.75 8h22.5v12H9.75V8Z"
              clipRule="evenodd"
            />
          </mask>
          <g mask="url(#grenada_svg__d)" fillRule="evenodd" clipRule="evenodd">
            <path
              fill="#23875F"
              d="M9.75 8 21 14 9.75 20V8Zm22.5 0L21 14l11.25 6V8Z"
            />
            <path
              fill="#C51918"
              d="M21 18c2.485 0 4.5-1.79 4.5-4s-2.015-4-4.5-4-4.5 1.79-4.5 4 2.015 4 4.5 4Z"
            />
            <path
              fill="#FECA00"
              d="m20.92 15.313-2.33 1.437.745-2.46-1.71-1.572 2.316-.085.98-2.433.98 2.433h2.311l-1.706 1.656.855 2.315-2.44-1.29Z"
            />
          </g>
          <path
            fill="#FECA00"
            fillRule="evenodd"
            d="m12.874 6.442 1.273-.702 1.333.631-.467-1.131.933-.81h-1.264l-.535-1.188-.536 1.189-1.265.041.934.768-.406 1.202Zm6.75 0 1.273-.702 1.333.631-.467-1.131.933-.81h-1.264l-.535-1.188-.536 1.189-1.265.041.934.768-.406 1.202Zm8.023-.702-1.273.702.407-1.202-.935-.768 1.265-.041.536-1.19.535 1.19h1.264l-.933.809.467 1.131-1.333-.63ZM12.873 24.167l1.273-.702 1.333.631-.467-1.13.933-.81H14.68l-.535-1.189-.536 1.189-1.265.041.934.768-.406 1.202Zm8.023-.702-1.273.702.406-1.202-.934-.768 1.265-.041.536-1.189.535 1.189h1.264l-.933.81.467 1.13-1.333-.63Zm5.477.702 1.273-.702 1.333.631-.467-1.13.933-.81H28.18l-.535-1.189-.536 1.189-1.265.041.934.768-.406 1.202Z"
            clipRule="evenodd"
          />
          <path
            fill="#C51918"
            fillRule="evenodd"
            d="M12.714 14.772s.606.48.936.643c.114-.384-.14-1.252-.14-1.252-.072-.208-.853-.58-.853-.58s-.22.655.057 1.189Z"
            clipRule="evenodd"
          />
          <path
            fill="#FECA00"
            fillRule="evenodd"
            d="M13.345 15.93s-1.556-.646-1.714-1.56c-.158-.913.177-2.37.177-2.37s2.527.51 2.699 1.606c.172 1.095-.399 1.783-.399 1.783s-.584-1.335-1.136-1.483c0 0 0 1.323.373 2.024Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="grenada_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="grenada_svg__a"
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
          result="effect1_dropShadow_91_28155"
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
          in2="effect1_dropShadow_91_28155"
          result="effect2_dropShadow_91_28155"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28155"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgGrenada;
