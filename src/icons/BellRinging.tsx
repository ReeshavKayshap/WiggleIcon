import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const BellRinging = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.4,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".line",

        { pathLength: [0, 1], pathOffset: [1, 0] },

        { duration: duration * 1.5, ease: "easeInOut" },
      );
      animate(
        ".top",

        { scale: [1, 0.96], x: [0, -1, 1, -1, 0], opacity: 0.6 },

        { duration, ease: "easeInOut" },
      );
    };
    const stop = () => {
      animate(
        ".top",
        {
          scale: [0.96, 1],

          opacity: 1,
        },
        { duration, ease: "easeInOut" },
      );
    };
    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <motion.svg
          onMouseEnter={start}
          onMouseLeave={stop}
          ref={scope}
          width={size}
          height={size}
          viewBox="0 0 18 22"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`cursor-pointer ${className}`}
        >
          <path
            className="top"
            d="M12.8064 15.7274H1.51056C1.08631 15.7274 0.849362 15.065 1.10599 14.697C1.70147 13.8431 2.27624 12.5907 2.27624 11.0826L2.3008 8.89728C2.3008 7.14508 2.86355 5.53605 3.80292 4.27295"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="top"
            d="M17.1422 15.1689C16.5709 14.3146 16.016 13.0554 16.016 11.5369L16.0405 9.4599C16.0405 5.33991 12.9744 2 9.19218 2C8.78529 2 8.38681 2.03922 7.99976 2.11439"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="line"
            d="M15.3431 18.4545L2.99976 1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="top"
            d="M6.49976 18C7.20743 18.5653 8.14195 18.9091 9.16642 18.9091C10.1909 18.9091 11.1254 18.5653 11.8331 18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </>
    );
  },
);
