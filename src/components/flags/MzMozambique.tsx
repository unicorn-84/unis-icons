import * as React from 'react';
import { SVGProps } from 'react';

const MzMozambique = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#mz-mozambique_svg__a)">
      <g clipPath="url(#mz-mozambique_svg__b)">
        <mask
          id="mz-mozambique_svg__c"
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
        <g mask="url(#mz-mozambique_svg__c)">
          <path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="mz-mozambique_svg__d"
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
          <g mask="url(#mz-mozambique_svg__d)">
            <path
              fill="#FECA00"
              fillRule="evenodd"
              d="M3 2v8h36V2H3Z"
              clipRule="evenodd"
            />
            <path
              fill="#093"
              fillRule="evenodd"
              d="M3 18v8h36v-8H3Z"
              clipRule="evenodd"
            />
            <path
              fill="#272727"
              stroke="#fff"
              strokeWidth={2}
              d="M3 9H2v10h38V9H3Z"
            />
          </g>
          <path
            fill="#F50100"
            fillRule="evenodd"
            d="M3 2v24l20.25-12L3 2Z"
            clipRule="evenodd"
          />
          <mask
            id="mz-mozambique_svg__e"
            width={21}
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
              d="M3 2v24l20.25-12L3 2Z"
              clipRule="evenodd"
            />
          </mask>
          <g mask="url(#mz-mozambique_svg__e)">
            <path
              fill="#FECA00"
              fillRule="evenodd"
              d="m12.077 16.353-4.251 3.05 1.95-4.076-3.35-2.868h3.954L12.003 9l1.724 3.459h3.948l-3.527 2.868 1.765 4.077-3.836-3.05Z"
              clipRule="evenodd"
            />
            <path
              fill="#F7FCFF"
              fillRule="evenodd"
              d="m9.926 13.984-.721 2.14s2.434-.02 2.726.198c.88-.488 2.694-.197 2.694-.197l-.964-2.291s-1.223-.493-1.73-.223c-1.242-.25-2.005.373-2.005.373Z"
              clipRule="evenodd"
            />
            <path
              fill="#000"
              d="M16.01 17.216c.186.22.137.534-.112.7a.61.61 0 0 1-.787-.098l-4.703-5.551c-.187-.221-.137-.534.111-.7a.61.61 0 0 1 .788.098l4.702 5.551Z"
            />
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m10.846 11.84-.45-.48"
            />
            <path
              fill="#000"
              fillRule="evenodd"
              d="m9.305 11.362-1.36 1.936.68 1.046 1.556-2.054.28-.635-.28-.293h-.876Zm-1.761 5.746.655.822 5.058-5.319.21.209 1.166-.975 1.863-1.802-1.863 1.354-.603-.149-.563.787h-.565L8.77 16.122l-1.227.986Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="mz-mozambique_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="mz-mozambique_svg__a"
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
          result="effect1_dropShadow_91_26223"
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
          in2="effect1_dropShadow_91_26223"
          result="effect2_dropShadow_91_26223"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26223"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default MzMozambique;
