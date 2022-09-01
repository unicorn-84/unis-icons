import * as React from 'react';
import { SVGProps } from 'react';

const SvgBurkinaFaso = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#burkina-faso_svg__a)">
      <g clipPath="url(#burkina-faso_svg__b)">
        <mask
          id="burkina-faso_svg__c"
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
        <g mask="url(#burkina-faso_svg__c)">
          <path
            fill="#5EAA22"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="burkina-faso_svg__d"
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
            mask="url(#burkina-faso_svg__d)"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path fill="#C51918" d="M3 2v12h36V2H3Z" />
            <path
              fill="#FECA00"
              d="m21.04 17.77-5.291 3.56 1.693-5.797-4.963-3.53h5.915l2.645-5.145 2.645 5.146h5.915l-5.015 3.534 1.745 5.792-5.29-3.56Z"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="burkina-faso_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="burkina-faso_svg__a"
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
          result="effect1_dropShadow_91_29648"
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
          in2="effect1_dropShadow_91_29648"
          result="effect2_dropShadow_91_29648"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_29648"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgBurkinaFaso;
