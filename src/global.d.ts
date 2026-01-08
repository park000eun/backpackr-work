import type { SVGProps } from 'react';

export {};

declare global {
  interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number;
    fill?: string;
  }
}
