import type { ComponentType } from "react";

export interface AnimatedIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}
export interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  duration?: number;
  className?: string;
}

export interface IconItem {
  id: number;
  Component: ComponentType<IconProps>;
  title: string;
  source: string;
}
