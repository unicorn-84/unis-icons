import * as React from 'react';
import { SVGProps } from 'react';

const SvgMacao = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#macao_svg__a)">
      <g clipPath="url(#macao_svg__b)">
        <mask
          id="macao_svg__c"
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
        <g mask="url(#macao_svg__c)">
          <path
            fill="#1C9975"
            fillRule="evenodd"
            d="M3 2v24h36V2H3Z"
            clipRule="evenodd"
          />
          <mask
            id="macao_svg__d"
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
          <g mask="url(#macao_svg__d)">
            <path
              fill="#FECA00"
              fillRule="evenodd"
              d="m21.024 8.854-1.838.986.42-1.925-1.53-1.44 2.072-.078.877-1.797.876 1.797h2.07l-1.528 1.518.46 1.925-1.878-.986Zm-5.218.731-1.137.61.26-1.19-.947-.891 1.281-.048.543-1.111.542 1.11h1.279l-.944.94.284 1.19-1.161-.61Zm10.348 0-1.137.61.26-1.19-.947-.891 1.282-.048.542-1.111.542 1.11h1.28l-.945.94.284 1.19-1.161-.61ZM12.862 11.61l-.912.49.208-.955-.76-.715 1.03-.038.434-.892.435.892h1.027l-.758.753.228.955-.932-.49Zm16.644 0-.912.49.208-.955-.76-.715 1.029-.038.435-.892.435.892h1.027l-.758.753.228.955-.932-.49Z"
              clipRule="evenodd"
            />
            <mask
              id="macao_svg__e"
              width={18}
              height={16}
              x={12}
              y={8}
              maskUnits="userSpaceOnUse"
              style={{
                maskType: 'alpha',
              }}
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M21 24c4.97 0 9-3.582 9-8s-4.03-8-9-8-9 3.582-9 8 4.03 8 9 8Z"
                clipRule="evenodd"
              />
            </mask>
            <g mask="url(#macao_svg__e)" fill="#F7FCFF">
              <path
                fillRule="evenodd"
                d="M17.266 23.064h7.468v1.072h-7.468v-1.072Zm-3.064-1.604h14.362v.983H14.202v-.983Z"
                clipRule="evenodd"
              />
              <path d="M17.198 21.02h-4.393v-1h4.385c1.553-.019 2.688-.413 3.446-1.172l.377-.378.421.34c1.012.815 2.022 1.21 3.044 1.21h4.842v1h-4.842c-1.174 0-2.308-.392-3.392-1.16-.96.756-2.263 1.14-3.888 1.16Z" />
            </g>
            <path
              fill="#F7FCFF"
              fillRule="evenodd"
              d="M21.04 9.608s-1.923 1.688-1.923 4.005c0 .495.088.964.226 1.394-.619-1.22-.662-2.543-.127-3.987l-.728-.213c-.544 1.468-.546 2.849-.006 4.128-1.117-.598-2.402-1-3.72-1.13l-.085.677a9.207 9.207 0 0 1 3.266.96 6.597 6.597 0 0 0-.767-.223c-2.433-.552-4.82.23-4.82.23s1.377 2.747 4.044 3.152c.133.02.264.036.394.047h-.02c-1.272 0-2.454-.462-3.562-1.4l-.528.492c1.243 1.055 2.611 1.59 4.09 1.59 1.446 0 2.789-.512 4.016-1.521a4.5 4.5 0 0 0 .33-.194l.048.037-.038.06s.121.064.34.156c1.21.835 2.727 1.461 3.926 1.461 1.479 0 2.847-.535 4.09-1.59l-.528-.492c-1.108.94-2.29 1.401-3.562 1.401a4.74 4.74 0 0 1-1.366-.2c.625.03 1.314-.02 2.027-.213 2.627-.715 3.723-2.874 3.723-2.874s-1.398-.67-3.174-.678a9.9 9.9 0 0 1 1.246-.2l-.084-.678c-1.666.164-3.106.664-4.315 1.498.707-1.382.762-2.886.165-4.496l-.727.213c.487 1.315.494 2.53.023 3.66.08-.334.128-.69.128-1.067 0-2.443-2.003-4.005-2.003-4.005Zm.845 7.148-.028.036.034-.037h-.006Zm-1.858-.16.075-.061c.069.1.137.196.204.285a8.535 8.535 0 0 0-.28-.224Z"
              clipRule="evenodd"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="macao_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="macao_svg__a"
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
          result="effect1_dropShadow_91_26442"
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
          in2="effect1_dropShadow_91_26442"
          result="effect2_dropShadow_91_26442"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26442"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgMacao;
