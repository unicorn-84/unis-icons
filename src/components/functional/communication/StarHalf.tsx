import * as React from 'react';
import { SVGProps } from 'react';

const StarHalf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 3v20.675m11.525-9.1 1.088-.912c.737-.613.362-1.85-.6-1.913l-1.438-.088m-3.563 9.45-.412-1.637a1.087 1.087 0 0 1 .362-1.1l1.25-1.05m-1.937-5.95-1.637-.1a1.037 1.037 0 0 1-.913-.675L19.087 9l-2.112-5.325a1.038 1.038 0 0 0-1.95 0l-2.75 6.925a1.038 1.038 0 0 1-.912.675l-7.376.475c-.962.063-1.337 1.3-.6 1.912l5.65 4.713a1.087 1.087 0 0 1 .363 1.1l-1.688 6.65c-.287 1.125.913 2.038 1.875 1.425l5.863-3.713a1.025 1.025 0 0 1 1.1 0l1.438.913m3.637 2.313 1.225.774c.813.513 1.813-.25 1.575-1.187l-.35-1.362"
    />
  </svg>
);

export default StarHalf;
