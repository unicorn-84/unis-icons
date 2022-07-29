import * as React from 'react';

export interface IIcon extends React.SVGAttributes<SVGElement> {
  /**
   * The stroke width of the icon.
   * @default 1
   */
  strokeWidth?: number;

  /**
   * The stroke color of the icon.
   * @default 'currentColor'
   */
  stroke?: string;

  /**
   * The size of the icon.
   * @default 'sm'
   */
  size?: 'xs' | 'sm' | 'md';
}
