import * as React from 'react';
import { SVGProps } from 'react';

const SvgFederatedStatesOfMicronesia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#federated-states-of-micronesia_svg__a)">
      <g clipPath="url(#federated-states-of-micronesia_svg__b)">
        <mask
          id="federated-states-of-micronesia_svg__c"
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
        <g mask="url(#federated-states-of-micronesia_svg__c)">
          <path
            fill="#63B3E1"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="federated-states-of-micronesia_svg__d"
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
          <g mask="url(#federated-states-of-micronesia_svg__d)">
            <path
              fill="#F7FCFF"
              fillRule="evenodd"
              d="m21 9.3-1.984.927.38-1.963-1.606-1.391 2.218-.286L21 4.8l.992 1.787 2.218.286-1.605 1.39.379 1.964L21 9.3Zm0 12-1.984.927.379-1.963-1.605-1.391 2.218-.287L21 16.8l.992 1.787 2.218.286-1.605 1.39.379 1.964L21 21.3Zm-6.975-5.8-1.984.927.379-1.963-1.605-1.391 2.218-.287.992-1.786.992 1.787 2.218.286-1.605 1.39.379 1.964-1.984-.927Zm13.725 0-1.984.927.38-1.963-1.606-1.391 2.218-.287L27.75 11l.992 1.787 2.218.286-1.605 1.39.379 1.964-1.984-.927Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="federated-states-of-micronesia_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="federated-states-of-micronesia_svg__a"
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
          result="effect1_dropShadow_91_28277"
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
          in2="effect1_dropShadow_91_28277"
          result="effect2_dropShadow_91_28277"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_28277"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgFederatedStatesOfMicronesia;
