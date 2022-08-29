import * as React from 'react';
import { SVGProps } from 'react';

const MicrophoneStage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      clipPath="url(#microphone-stage_svg__a)"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M21 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm5.663-2.337L15.338 5.338M12.5 19.5 11 21" />
      <path d="M13.1 12.238 3.513 25.313a.988.988 0 0 0 .1 1.3l1.775 1.775a.988.988 0 0 0 1.3.1L19.763 18.9" />
    </g>
    <defs>
      <clipPath id="microphone-stage_svg__a">
        <rect width={32} height={32} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);

export default MicrophoneStage;
