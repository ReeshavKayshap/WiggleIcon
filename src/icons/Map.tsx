import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const Map = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,

      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.8,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        "#map",

        { y: [0, -8, 4, 0] },

        { duration: duration * 1, ease: "easeInOut" },
      );
      animate(
        ".tilt",

        { rotateX: [0, -20, 4, 0] },

        { duration: duration * 1, ease: "easeInOut" },
      );
      animate(
        ".round",

        { rotateY: [0, 90, 0] },

        { duration: duration * 0.75, ease: "easeInOut" },
      );
    };
    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <span onMouseEnter={start} ref={scope}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            id="map"
            className={`cursor-pointer${className}`}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path className="round" d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path
              className="tilt"
              d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0"
            />
          </motion.svg>
        </span>
      </>
    );
  },
);
