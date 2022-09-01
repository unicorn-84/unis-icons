import * as React from 'react';
import { SVGProps } from 'react';

const SvgMongolia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={30}
    fill="none"
    {...props}
  >
    <g filter="url(#mongolia_svg__a)">
      <g clipPath="url(#mongolia_svg__b)">
        <mask
          id="mongolia_svg__c"
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
        <g mask="url(#mongolia_svg__c)">
          <path
            fill="#4C67E8"
            fillRule="evenodd"
            d="M14.25 2h13.5v24h-13.5V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#C51918"
            fillRule="evenodd"
            d="M27.75 2H39v24H27.75V2ZM3 2h13.5v24H3V2Z"
            clipRule="evenodd"
          />
          <path
            fill="#F8D000"
            fillRule="evenodd"
            d="M9.766 8.884c-1.14 0-.99-.987-.99-.987l.54-1.038v1.038c0 .134.205-.133.205-.455 0-.321.245-.802.245-.802s.01-.161.016-.32c.04.082.118.153.237.26l.067.06c.14.128.121.468.105.762-.015.266-.028.495.082.495.232 0 .214-.919.214-.919l.389.92s.03.986-1.11.986Zm0-2.82c.029-.15.025.051.016.256-.032-.068-.038-.144-.016-.255Zm1.715 4.62c0 .803-.756 1.453-1.688 1.453-.932 0-1.687-.65-1.687-1.453s.755-1.453 1.687-1.453 1.688.65 1.688 1.453Zm-4.24 2.72H5.25v8.572h1.99v-8.571Zm7.009 0h-1.99v8.572h1.99v-8.571Zm-6.49.075 1.94 1.068 2.187-1.068H7.76ZM9.7 22l-1.94-1.068h4.127L9.7 22Zm-1.94-7.105h4.067v.67H7.76v-.67Zm4.067 4.994H7.76v.67h4.067v-.67Zm-1.99-.373c1.146 0 2.076-.8 2.076-1.789 0-.988-.93-1.788-2.077-1.788-1.147 0-2.076.8-2.076 1.788s.93 1.79 2.076 1.79Zm-2.333-8.3s.07 1.868 2.14 1.868c2.07 0 2.405-1.868 2.405-1.868s-.802 1.144-2.273 1.144-2.272-1.144-2.272-1.144Z"
            clipRule="evenodd"
          />
          <path
            fill="#C51918"
            d="m10.153 15.973.093-.368c.464.451.674.704.575 1.118-.11.462-.694.976-1.37 1.4-.41.256-.662.948-.459 1.168l-.194.314c-.453-.49-.09-1.416.535-1.808.575-.36.976-.736 1.046-1.033.046-.193.131-.445-.226-.791Z"
          />
          <path
            fill="#C51918"
            fillRule="evenodd"
            d="M10.313 19c.31 0 .562-.224.562-.5s-.252-.5-.563-.5c-.31 0-.562.224-.562.5s.252.5.563.5Zm-1.265-1.35c.31 0 .562-.223.562-.5 0-.276-.251-.5-.562-.5-.31 0-.563.224-.563.5 0 .277.252.5.563.5Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="mongolia_svg__b">
        <rect width={36} height={24} x={3} y={2} fill="#fff" rx={2} />
      </clipPath>
      <filter
        id="mongolia_svg__a"
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
          result="effect1_dropShadow_91_26471"
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
          in2="effect1_dropShadow_91_26471"
          result="effect2_dropShadow_91_26471"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_91_26471"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgMongolia;
