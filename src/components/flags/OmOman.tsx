import * as React from 'react';
import { SVGProps } from 'react';

const OmOman = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#om-oman_svg__a)">
      <g clipPath="url(#om-oman_svg__b)">
        <mask
          id="om-oman_svg__c"
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
        <g mask="url(#om-oman_svg__c)">
          <path
            fill="#F50101"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="om-oman_svg__d"
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
          <g mask="url(#om-oman_svg__d)">
            <path
              fill="#F7FCFF"
              fillRule="evenodd"
              d="M3 2v8h36V2H3Z"
              clipRule="evenodd"
            />
            <path
              fill="#5EAA22"
              fillRule="evenodd"
              d="M3 18v8h36v-8H3Z"
              clipRule="evenodd"
            />
            <path fill="#F50101" d="M3 2h13.5v24H3z" />
            <path
              fill="#F7FCFF"
              fillRule="evenodd"
              d="M15.12 3.997c.01-.089-.1-.126-.15-.051-.39.591-1.42 2.08-3.142 4.04V7.07c-.16-.156-.673-.573-.673-.573V5.58l.927-.746L10.809 4l-1.341.834 1.013.746v.916c0 .44-.614.573-.614.573l-.113.808C8.151 6.027 7.166 4.594 6.77 3.986c-.05-.078-.166-.037-.15.054.117.718.486 2.38 1.536 4.157h-.277v.597h.299a.679.679 0 0 0 .606.358c.19.261.396.521.62.778-.515-.045-3.914-.303-3.914.797 0 .656.827 1.003 1.864 1.182-1.043.84-2.027 1.63-2.481 1.994-.07.056-.021.163.066.144.8-.176 2.934-.725 4.964-1.957h.063c.57 0 .965-.219 1.24-.516 2.063 1.497 4.398 2.185 5.4 2.43.096.022.143-.103.06-.155a29.955 29.955 0 0 1-4.557-3.49l.05-.05c.385-.405.721-.821 1.014-1.238a.626.626 0 0 0 .277-.277h.298v-.597h-.022l.023-.04V9.49c0 .048.038.087.086.087h2.395a.087.087 0 0 0 .086-.087V8.164a.087.087 0 0 0-.087-.087h-2.394a.087.087 0 0 0-.051.017c.985-1.774 1.262-3.417 1.338-4.097ZM5.31 8.164c0-.048.039-.087.087-.087H7.79c.048 0 .087.04.087.087V9.49a.087.087 0 0 1-.087.087H5.397a.087.087 0 0 1-.087-.087V8.164Zm4.035.397c0 .267-.246.484-.55.484-.304 0-.55-.217-.55-.484s.246-.484.55-.484c.304 0 .55.217.55.484Zm2.935 0c0 .267.246.484.55.484.304 0 .55-.217.55-.484s-.246-.484-.55-.484c-.304 0-.55.217-.55.484Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="om-oman_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="om-oman_svg__a"
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
          result="effect1_dropShadow_91_26018"
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
          in2="effect1_dropShadow_91_26018"
          result="effect2_dropShadow_91_26018"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26018"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default OmOman;
