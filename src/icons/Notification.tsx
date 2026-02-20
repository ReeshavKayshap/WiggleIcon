import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, IconProps } from "@/types/Type";

export const Notification = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.6,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".top",

        { rotate: [0, 6, -6, 6, -6, 0] },

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
          ref={scope}
          width={size}
          height={size}
          viewBox="0 0 18 21"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`cursor-pointer ${className}`}
        >
          <path
            className="top"
            d="M1.50739 15.1818H16.4931C16.9095 15.1818 17.1456 14.5379 16.9004 14.169C16.3327 13.3147 15.7812 12.0555 15.7812 10.537L15.8056 8.45995C15.8056 4.33993 12.7585 1 8.99976 1C5.29556 1 2.29272 4.29145 2.29272 8.35166L2.26831 10.537C2.26831 12.0451 1.69712 13.2975 1.10533 14.1514C0.850296 14.5194 1.08578 15.1818 1.50739 15.1818Z"
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
