import type { ComponentType } from "react";

export interface IconProps {
  size?: number;
  strokeWidth?: number;
  duration?: number;
  color?: string;
  className?: string;
  trigger?: boolean;
  triggerMode?: "self" | "external";
}

export interface IconItem {
  id: number;
  Component: ComponentType<IconProps>;
  title: string;
  source: string;
}
