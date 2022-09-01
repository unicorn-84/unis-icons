import * as React from 'react';
import { SVGProps } from 'react';

const SvgBrazil = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#brazil_svg__a)">
      <g clipPath="url(#brazil_svg__b)">
        <mask
          id="brazil_svg__c"
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
        <g mask="url(#brazil_svg__c)">
          <path
            fill="#093"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="brazil_svg__d"
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
          <g mask="url(#brazil_svg__d)">
            <g
              filter="url(#brazil_svg__e)"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path
                fill="#FFD221"
                d="m20.918 5.704 13.727 8.504L20.73 22.17 7.285 14.043l13.633-8.339Z"
              />
              <path
                fill="url(#brazil_svg__f)"
                d="m20.918 5.704 13.727 8.504L20.73 22.17 7.285 14.043l13.633-8.339Z"
              />
            </g>
            <path
              fill="#2E42A5"
              fillRule="evenodd"
              d="M21 19.2c3.107 0 5.625-2.239 5.625-5s-2.518-5-5.625-5-5.625 2.239-5.625 5 2.518 5 5.625 5Z"
              clipRule="evenodd"
            />
            <mask
              id="brazil_svg__g"
              width={12}
              height={11}
              x={15}
              y={9}
              maskUnits="userSpaceOnUse"
              style={{
                maskType: 'alpha',
              }}
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M21 19.2c3.107 0 5.625-2.239 5.625-5s-2.518-5-5.625-5-5.625 2.239-5.625 5 2.518 5 5.625 5Z"
                clipRule="evenodd"
              />
            </mask>
            <g mask="url(#brazil_svg__g)">
              <path
                fill="#F7FCFF"
                fillRule="evenodd"
                d="m19.177 16.57-.25.117.047-.248-.203-.176.28-.037.127-.226.125.226.281.037-.203.176.048.248-.252-.117Zm2.25 0-.25.117.047-.248-.203-.176.28-.037.127-.226.125.226.281.037-.203.176.048.248-.252-.117Zm0 1.2-.25.117.047-.248-.203-.177.28-.036.127-.226.125.226.281.037-.203.176.048.248-.252-.117Zm-1.125-4.2-.25.117.047-.248-.203-.176.28-.037.127-.226.125.226.281.037-.203.176.048.248-.252-.117Zm0 2-.25.117.047-.248-.203-.176.28-.037.127-.226.125.226.281.037-.203.176.048.248-.252-.117Zm-1.575-1-.251.117.048-.248-.203-.176.28-.037.126-.226.126.226.28.037-.202.176.048.248-.252-.117Zm-1.574.8-.252.118.048-.25-.203-.175.281-.037.126-.226.125.226.281.037-.203.176.048.248-.251-.117Zm5.174-3.4-.25.117.047-.248-.203-.177.28-.036.126-.226.126.226.281.037-.203.176.048.248-.252-.117Z"
                clipRule="evenodd"
              />
              <path
                fill="#F7FCFF"
                d="m14.165 12.997.17-1.994c5.397.362 9.658 1.94 12.727 4.745l-1.613 1.395c-2.66-2.433-6.404-3.819-11.284-4.146Z"
              />
              <path
                fill="#093"
                d="m16.826 12.603.058-.498c3.48.32 6.464 1.505 8.944 3.552l-.382.366c-2.39-1.971-5.261-3.11-8.62-3.42Z"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="brazil_svg__a"
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
          result="effect1_dropShadow_91_29363"
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
          in2="effect1_dropShadow_91_29363"
          result="effect2_dropShadow_91_29363"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_29363"
          result="shape"
        />
      </filter>
      <filter
        id="brazil_svg__e"
        width={27.359}
        height={16.467}
        x={7.285}
        y={5.704}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feColorMatrix values="0 0 0 0 0.0313726 0 0 0 0 0.368627 0 0 0 0 0 0 0 0 0.28 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_91_29363"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_91_29363"
          result="shape"
        />
      </filter>
      <linearGradient
        id="brazil_svg__f"
        x1={39}
        x2={39}
        y1={26}
        y2={2}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFC600" />
        <stop offset={1} stopColor="#FFDE42" />
      </linearGradient>
      <clipPath id="brazil_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBrazil;
