import type { IconItem } from "../../types/Type";

import { UnorderedList } from "../../icons/UnorderedList";
import { Search } from "@/icons/Search";
import { Phone } from "@/icons/Phone";
import { Cast } from "../../icons/Cast";
import { Eye } from "../../icons/Eye";
import { Map } from "../../icons/Map";
import { Mic } from "../../icons/Mic";
import { Heart } from "../../icons/Heart";
import { Bluetooth } from "../../icons/Bluetooth";
import { Trash } from "../../icons/Trash";
import { World } from "../../icons/World";
import { Setting } from "../../icons/Setting";
import { InfoCircle } from "../../icons/InfoCircle";
import { Battery } from "../../icons/Battery";
import { BatteryCharging } from "@/icons/BatteryCharging";
import { EyeOff } from "@/icons/EyeOff";
import { Edit } from "@/icons/Edit";
import { FaceId } from "@/icons/FaceId";

import { Menu } from "@/icons/Menu";
import { User } from "@/icons/User";
import { Download } from "@/icons/Download";
import { Mail } from "@/icons/Mail";
import { Copy } from "@/icons/Copy";
import { Notification } from "@/icons/Notification";
import { NotificationOff } from "@/icons/NotificationOff";
import { SmartHome } from "@/icons/SmartHome";
import { ArrowBack } from "@/icons/ArrowBack";
import { Image } from "@/icons/Image";
import { Dots } from "@/icons/Dots";
import { Filter } from "@/icons/Filter";
import { Github } from "@/icons/Github";
import { Twitter } from "@/icons/Twitter";
import { Share } from "@/icons/Share";
import { Help } from "@/icons/Help";
import { Activity } from "@/icons/Activity";
import { CircleCheck } from "@/icons/CircleCheck";
import { ArrowBackUp } from "@/icons/ArrowBackUp";
import { ThumbUp } from "@/icons/ThumbUp";
import { Check } from "@/icons/Check";
import { Volume } from "@/icons/Volume";
import { DotsVertical } from "@/icons/DotsVertical";
import { Upload } from "@/icons/Upload";
import { ArrowRight } from "@/icons/ArrowRight";
import { Stack } from "@/icons/Stack";
import { Cross } from "@/icons/Cross";
import { Wifi } from "@/icons/Wifi";
import { VolumeOff } from "@/icons/VolumeOff";
import { Pin } from "@/icons/Pin";
import { Rotate } from "@/icons/Rotate";
import { CircleArrowRight } from "@/icons/CircleArrowRight";
import { Refresh } from "@/icons/Refresh";

import { Coffee } from "@/icons/Coffee";
import { SearchTwo } from "@/icons/SearchTwo";
import { History } from "@/icons/History";
import { CircleArrowLeft } from "@/icons/CircleArrowLeft";
import { IncomingPhoneCall } from "@/icons/IncomingPhoneCall";
import { Home } from "@/icons/Home";
import { Box } from "@/icons/Box";
import { File } from "@/icons/File";
import { Pricing } from "@/icons/Pricing";
import { BoxPlus } from "@/icons/BoxPlus";
import { Attachment } from "@/icons/Attachment";
import { Users } from "@/icons/Users";
import { Bag } from "@/icons/Bag";
import { Logout } from "@/icons/Logout";
import { ArrowLeft } from "@/icons/ArrowLeft";
import { Plug } from "@/icons/Plug";

export const IconList: IconItem[] = [
  {
    id: 1,
    Component: SmartHome,
    title: "smart-home-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle, useCallback } from "react";

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

export const SmartHome = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.7,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(() => {
      animate(
        ".show",

        { pathLength: [0, 1], pathOffset: [1, 0], opacity: [0, 1] },

        { duration, ease: "easeInOut" },
      );
    }, [animate, duration]);

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <>
        <motion.svg
          onMouseEnter={start}
          ref={scope}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105" />
          <path className="show" d="M16 15c-2.21 1.333 -5.792 1.333 -8 0" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 2,
    Component: Menu,
    title: "menu-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Menu = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".showTwo",

        { scaleX: [1, 0.25, 1] },

        { duration, ease: "easeInOut" },
      );
      animate(
        ".showOne",

        { scaleX: [1, 0.3, 1] },

        { duration, ease: "easeInOut", delay: 0.1 },
      );
      animate(
        ".showThree",

        { scaleX: [1, 0.3, 1] },

        { duration, ease: "easeInOut", delay: 0.2 },
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
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="showOne" d="M4 6l16 0" />
          <path className="showTwo" d="M4 12l16 0" />
          <path className="showThree" d="M4 18l16 0" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 3,
    Component: Search,
    title: "search-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Search = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.5,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".flip",
        { y: [0, -2, 0], x: [0, 1, 0, -1, 0] },
        { duration: duration * 2, ease: "easeInOut", repeat: Infinity },
      );
    };
    const stop = () => {
      animate(
        ".flip",
        { y: 0, x: 0 },
        { duration: duration, ease: "easeInOut" },
      );
    };

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <motion.svg
          ref={scope}
          onMouseEnter={start}
          onMouseLeave={stop}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          stroke={color}
          strokeWidth={strokeWidth}
          className={\`cursor-pointer\${className}\`}
        >
          <path
            d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flip"
          />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 4,
    Component: Setting,
    title: "setting-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Setting = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".role",

        { rotate: [0, -90, 0] },

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
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            className="role"
            d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065"
          />
          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
        </motion.svg>
      </>
    );
  },
);
`,
  },

  {
    id: 5,
    Component: User,
    title: "user-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const User = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".top",
        {
          y: [0, -1.5, 1.5, -1.5, 0],
        },
        { duration, ease: "easeInOut" },
      );
      animate(
        ".bottom",
        {
          y: [0, 0, 1, 0],
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
          ref={scope}
          onMouseEnter={start}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="top" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
          <path
            className="bottom"
            d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
          />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 6,
    Component: Download,
    title: "download-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Download = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,

      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.5,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".down",
        {
          y: [0, 3.5, 0],
        },
        { duration, ease: "easeInOut" },
      );
      animate(
        ".downThree",
        {
          y: [0, 1.1, 0],
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
          ref={scope}
          onMouseEnter={start}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            className="downThree"
            d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"
          />
          <path className="down" d="M7 11l5 5l5 -5" />
          <path className="down" d="M12 4l0 12" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 7,
    Component: Map,
    title: "map-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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
            className={\`cursor-pointer\${className}\`}
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
`,
  },
  {
    id: 8,
    Component: Eye,
    title: "eye-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Eye = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.5,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      animate(
        ".main",

        { scaleY: [1, 0.85, 1] },

        { duration: duration * 1, ease: "easeInOut" },
      );

      animate(
        ".eye",
        {
          scale: [1, 0.9, 1],
        },
        { duration: duration * 1.4, ease: "easeInOut", delay: duration * 0.8 },
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
          viewBox="0 0 24 24"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={\`cursor-pointer\${className}\`}
        >
          <path
            className="main"
            d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="eye"
            d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 9,
    Component: Copy,
    title: "copy-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Copy = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".main",
        {
          y: [0, -3, 0],
          x: [0, -3, 0],
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
          ref={scope}
          onMouseEnter={start}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            className="main"
            d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666"
          />
          <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
        </motion.svg>
      </>
    );
  },
);
`,
  },

  {
    id: 10,
    Component: Heart,
    title: "heart-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Heart = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.9,
    },
    ref,
  ) => {
    const stroke = 1.5;
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".heart",

        {
          scale: [1, 0.8, 1, 0.8, 1],
          strokeWidth: [stroke, 2.3, stroke, 2.3, stroke],
        },

        { duration, ease: "easeInOut" },
      );
    };
    const stop = () => {
      animate(
        ".heart",

        {
          scale: 1,
          strokeWidth: 2,
        },

        { duration: 0.2, ease: "easeInOut" },
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
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            className="heart"
            d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
          />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 11,
    Component: Phone,
    title: "phone-call-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Phone = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.9,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".phone",
        {
          scale: [1, 0.8, 0.8, 0.8, 1],
          rotate: [10, 0],
          y: [-2, 2, -2, 2, -2, 2, 0],
        },
        { duration: duration * 1, ease: "easeInOut" },
      );
      animate(
        ".glow",
        {
          opacity: [1, 0, 1],
          rotate: [10, 0],
          scale: [1, 0.8, 0.8, 0.8, 1],
        },
        { duration: duration * 0.78, ease: "easeInOut" },
      );
      animate(
        ".glowTwo",
        {
          opacity: [1, 0, 1, 0, 1],
          rotate: [10, 0],
          scale: [1, 0.8, 0.8, 0.8, 1],
        },
        { duration: duration * 0.89, ease: "easeInOut" },
      );
    };
    const stop = () => {
      animate(
        ".phone",
        {
          scale: 1,
          rotate: 0,
          y: 0,
        },
        { duration: 0.2, ease: "easeInOut" },
      );
      animate(
        ".glow",
        {
          opacity: 1,
          rotate: 0,
          scale: 1,
        },
        { duration: 0.2, ease: "easeInOut" },
      );
      animate(
        ".glowTwo",
        {
          opacity: 1,
          rotate: 0,
          scale: 1,
        },
        { duration: 0.2, ease: "easeInOut" },
      );
    };
    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <motion.svg
          ref={scope}
          onMouseEnter={start}
          onMouseLeave={stop}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            className="phone"
            d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
          />
          <path className="glow" d="M15 7a2 2 0 0 1 2 2" />
          <path className="glowTwo" d="M15 3a6 6 0 0 1 6 6" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 12,
    Component: Trash,
    title: "trash-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Trash = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.98,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".up",

        { y: [0, -5, -3, -1.2, 0], rotate: [0, -3, 3, -3, 0] },

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
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="up" d="M4 7l16 0" />
          <path className="down" d="M10 11l0 6" />
          <path className="down" d="M14 11l0 6" />
          <path
            className="down"
            d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
          />
          <path className="up" d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 13,
    Component: World,
    title: "world-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const World = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.98,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        "#roted",

        { rotate: [0, -180] },

        { duration, ease: "easeInOut" },
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
            id="roted"
            className={\`cursor-pointer\${className}\`}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M3.6 9h16.8" />
            <path d="M3.6 15h16.8" />
            <path d="M11.5 3a17 17 0 0 0 0 18" />
            <path d="M12.5 3a17 17 0 0 1 0 18" />
          </motion.svg>
        </span>
      </>
    );
  },
);
`,
  },
  {
    id: 14,
    Component: UnorderedList,
    title: "list-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const UnorderedList = forwardRef<AnimatedIconHandle, IconProps>(
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
    const stroke = 1.5;
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".one",

        {
          scale: [1, 1.2, 1],
          x: [0, 1, 0],
          strokeWidth: [stroke, 1.8, stroke],
        },

        { duration, ease: "easeInOut" },
      );

      animate(
        ".two",
        {
          scale: [1, 1.2, 1],
          x: [0, 1, 0],
          strokeWidth: [stroke, 1.8, stroke],
        },
        { duration, ease: "easeInOut", delay: 0.3 },
      );
      animate(
        ".three",
        {
          scale: [1, 1.2, 1],
          x: [0, 1, 0],
          strokeWidth: [stroke, 1.8, stroke],
        },

        { duration, ease: "easeInOut", delay: 0.6 },
      );
    };
    const stop = () => {
      animate(
        ".one",

        { scale: 1, x: 0, strokeWidth: 2 },

        { duration: 0.2, ease: "easeInOut" },
      );

      animate(
        ".two",
        { scale: 1, x: 0, strokeWidth: 2 },
        { duration: 0.2, ease: "easeInOut" },
      );
      animate(
        ".three",
        { scale: 1, x: 0, strokeWidth: 2 },

        { duration: 0.2, ease: "easeInOut" },
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
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="one" d="M9 6l11 0" />
          <path className="two" d="M9 12l11 0" />
          <path className="three" d="M9 18l11 0" />
          <path className="one" d="M5 6l0 .01" />
          <path className="two" d="M5 12l0 .01" />
          <path className="three" d="M5 18l0 .01" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 15,
    Component: InfoCircle,
    title: "info-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const InfoCircle = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.5,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      animate(
        ".show",

        { pathLength: [0, 1] },

        { duration: duration, ease: "easeInOut" },
      );
      animate(
        ".visible",

        { opacity: [0, 1] },

        {
          duration: duration * 1.2,
          ease: "easeInOut",
          delay: duration * 0.8,
        },
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
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path className="visible" d="M12 9h.01" />
          <path className="show" d="M11 12h1v4h1" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 16,
    Component: FaceId,
    title: "face-id-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const FaceId = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".face",

        { x: [2, -2, 0] },

        { duration, ease: "easeInOut" },
      );
      animate(
        "#blink",

        { scaleY: [1, 0, 1] },

        { duration: duration * 0.5, ease: "easeInOut", delay: 0.6 },
      );
      animate(
        ".scan",

        { opacity: [0, 1, 0, 1, 0], y: [0, 23, 0] },

        { duration: duration * 1.625, ease: "easeInOut", delay: 0.9 },
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
          viewBox="0 0 22 25"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={\`cursor-pointer \${className}\`}
        >
          <path
            d="M7.4 4H3.13333C1.95513 4 1 4.95513 1 6.13333V10.4M7.4 23.2H3.13333C1.95513 23.2 1 22.2449 1 21.0667V16.8M13.8 4H18.0667C19.2449 4 20.2 4.95513 20.2 6.13333V10.4M20.2 16.8V21.0667C20.2 22.2449 19.2449 23.2 18.0667 23.2H13.8"
            strokeLinecap="round"
          />
          <motion.path
            className="scan"
            initial={{ opacity: 0 }}
            d="M1 1H20.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="face"
            d="M6.5 10.17V9M7.35266 16.6049C8.72082 17.665 11.7889 17.665 13.7007 16.6049M10.1 13.68L10.3485 13.4377C10.5736 13.2183 10.7 12.9207 10.7 12.6104V9.585"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="blink"
            className="face"
            d="M14.9 10.17L14.8999 9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 17,
    Component: Notification,
    title: "notification-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Bell = forwardRef<AnimatedIconHandle, IconProps>(
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
          className={\`cursor-pointer \${className}\`}
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
`,
  },

  {
    id: 18,
    Component: EyeOff,
    title: "eye-off-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const EyeOff = forwardRef<AnimatedIconHandle, IconProps>(
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

        { pathLength: [0, 1] },

        { duration: duration * 1.5, ease: "easeInOut" },
      );

      animate(
        ".eye",
        {
          scale: [1, 0.96],
          x: [0, -1, 1, -1, 0],
          opacity: 0.6,
        },
        { duration, ease: "easeInOut" },
      );
    };
    const stop = () => {
      animate(
        ".eye",
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
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 22 22"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="eye" d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
          <path
            className="eye"
            d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"
          />
          <path className="line" d="M3 3l18 18" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 19,
    Component: Cast,
    title: "cast-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Cast = forwardRef<AnimatedIconHandle, IconProps>(
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

    const start = async () => {
      animate(
        "#vibrate",

        { x: [-2, 2, -2, 2, 0] },

        { duration, ease: "easeInOut" },
      );
      animate(
        ".show",

        { opacity: [1, 0, 1] },

        { duration: duration * 1.5, ease: "easeInOut" },
      );
      animate(
        ".showTwo",

        { opacity: [1, 0, 1] },

        { duration: duration * 1.5, ease: "easeInOut", delay: duration * 0.5 },
      );
      animate(
        ".showThree",

        { opacity: [1, 0, 1] },

        { duration: duration * 1.5, ease: "easeInOut", delay: duration * 1 },
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
            id="vibrate"
            className={\`cursor-pointer\${className}\`}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path className="show" d="M3 19l.01 0" />
            <path className="showTwo" d="M7 19a4 4 0 0 0 -4 -4" />
            <path className="showThree" d="M11 19a8 8 0 0 0 -8 -8" />
            <path d="M15 19h3a3 3 0 0 0 3 -3v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -2.8 2" />
          </motion.svg>
        </span>
      </>
    );
  },
);
`,
  },
  {
    id: 20,
    Component: Battery,
    title: "battery-low-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Battery = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 1.2,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".show",

        { opacity: [0, 1, 0, 1, 0, 1, 0] },

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
          viewBox="0 0 22 14"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={\`cursor-pointer\${className}\`}
        >
          <path
            d="M15.4 1H3.39999C2.07451 1 1 2.07454 1 3.40002V10.6C1 11.9255 2.07451 13 3.39999 13H15.4C16.7255 13 17.8 11.9255 17.8 10.6V3.40002C17.8 2.07454 16.7255 1 15.4 1Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 8.59998V5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.path
            initial={{ opacity: 0 }}
            className="show"
            d="M9 6V4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.path
            initial={{ opacity: 0 }}
            className="show"
            d="M9 9V9.03955"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 21,
    Component: CircleArrowLeft,
    title: "circle-arrow-left-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const CircleArrowLeft = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.7,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".main",

        { x: [0, 2, -2, 0] },

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
          xmlns="http://www.w3.org/2000/svg"
          ref={scope}
          onMouseEnter={start}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18" />
          <path className="main" d="M8 12l4 4" />
          <path className="main" d="M8 12h8" />
          <path className="main" d="M12 8l-4 4" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 22,
    Component: BatteryCharging,
    title: "battery-charging-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const BatteryCharging = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".show",

        { pathLength: [0, 1], pathOffset: [1, 0] },

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
          viewBox="0 0 22 14"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={\`cursor-pointer\${className}\`}
        >
          <path
            d="M15.4 1H3.39999C2.07451 1 1 2.07454 1 3.40002V10.6C1 11.9255 2.07451 13 3.39999 13H15.4C16.7255 13 17.8 11.9255 17.8 10.6V3.40002C17.8 2.07454 16.7255 1 15.4 1Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 8.59998V5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="show"
            d="M8.39999 9.99992L11.4 6.99996H6L8.99999 4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 23,
    Component: NotificationOff,
    title: "notification-off-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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
          className={\`cursor-pointer\${className}\`}
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
`,
  },
  {
    id: 24,
    Component: Home,
    title: "home-icon",
    source: `import { forwardRef, useImperativeHandle, useCallback } from "react";
import { motion, useAnimate } from "motion/react";

export interface AnimatedIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}
export interface AnimatedIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  duration?: number;
  className?: string;
}

export const Home = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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

    const start = useCallback(() => {
      animate(".house", { scale: [1.08, 1] }, { duration, ease: "easeInOut" });

      animate(
        ".door",
        { pathLength: [0, 1], opacity: [0, 1] },
        { duration, ease: "easeInOut" },
      );
    }, [animate, duration]);

    const stop = useCallback(() => {
      animate(".house", { scale: 1 }, { duration: 0.3 });
      animate(".door", { pathLength: 1, opacity: 1 }, { duration: 0.3 });
    }, [animate]);

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <motion.svg
        ref={scope}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={\`cursor-pointer \${className}\`}
        onHoverStart={start}
        onHoverEnd={stop}
      >
        <path className="house" d="M5 12l-2 0l9 -9l9 9l-2 0" />
        <path
          className="house"
          style={{ transformOrigin: "center" }}
          d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"
        />
        <path className="door" d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
      </motion.svg>
    );
  },
);

`,
  },
  {
    id: 25,
    Component: Edit,
    title: "pen-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Edit = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 1,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".main",

        {
          x: [-2, 2, -2, 2, 0],
          rotate: [0, -16, -10, -8, 3, 0],
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
          ref={scope}
          width={size}
          height={size}
          viewBox="0 0 18 18"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={\`cursor-pointer\${className}\`}
        >
          <path
            className="main"
            d="M9.99994 3.50319L13.5999 7.10319M1 16.1032L5.36598 15.2235C5.59776 15.1768 5.81058 15.0626 5.97772 14.8954L15.7514 5.11637C16.22 4.64752 16.2197 3.88753 15.7507 3.41907L13.6803 1.35099C13.2115 0.882725 12.4519 0.883044 11.9835 1.3517L2.20876 11.1318C2.04195 11.2987 1.92805 11.511 1.8813 11.7423L1 16.1032Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 26,
    Component: Bluetooth,
    title: "bluetooth-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Bluetooth = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".show",

        { pathLength: [0, 1] },

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
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="show" d="M7 8l10 8l-5 4l0 -16l5 4l-10 8" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 27,
    Component: ArrowBack,
    title: "arrow-back-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const ArrowBack = forwardRef<AnimatedIconHandle, IconProps>(
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
      animate(".main", { x: [0, 1, -1, 1, 0] }, { duration, ease: "easeOut" });
    };
    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <motion.svg
          ref={scope}
          onMouseEnter={start}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            className="main"
            d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"
          />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 28,
    Component: Image,
    title: "image-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Image = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".show",
        {
          pathLength: [0, 1],
        },
        { duration: duration * 2, ease: "easeInOut" },
      );
      animate(
        ".showTwo",
        {
          opacity: [0, 1],
        },
        { duration, ease: "easeInOut", delay: duration * 1.5 },
      );
    };
    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <motion.svg
          ref={scope}
          onMouseEnter={start}
          width={size}
          height={size}
          viewBox="0 0 22 20"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={\`cursor-pointer\${className}\`}
        >
          <path d="M1 4.375C1 2.51104 2.51104 1 4.375 1H15.625C17.489 1 19 2.51104 19 4.375V15.625C19 17.489 17.489 19 15.625 19H4.375C2.51104 19 1 17.489 1 15.625V4.375Z" />
          <path
            className="show"
            d="M2 17.3125L6.5 12.8125L8.75 15.0625L13.8125 10L18.3125 14.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="showTwo"
            d="M6 6.09023V6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 29,
    Component: Dots,
    title: "dots-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Dots = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.5,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".show",

        { y: [0, -2, 0] },

        { duration, ease: "easeInOut" },
      );
      animate(
        ".showTwo",

        { y: [0, -2, 0] },

        { duration, ease: "easeInOut", delay: duration * 0.4 },
      );
      animate(
        ".showThree",

        { y: [0, -2, 0] },

        { duration, ease: "easeInOut", delay: duration * 0.8 },
      );
    };
    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={start}
          ref={scope}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="show" d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <path className="showTwo" d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <path className="showThree" d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 30,
    Component: Filter,
    title: "filter-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Filter = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.5,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".show",

        { scaleX: [1, 0.5, 1] },

        { duration, ease: "easeInOut" },
      );
      animate(
        ".showTwo",

        { scaleX: [1, 0.6, 1] },

        { duration, ease: "easeInOut", delay: duration * 0.4 },
      );
      animate(
        ".showThree",

        { scaleX: [1, 0.6, 1] },

        { duration, ease: "easeInOut", delay: duration * 0.8 },
      );
    };
    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={start}
          ref={scope}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="show" d="M4 6h16" />
          <path className="showTwo" d="M6 12h12" />
          <path className="showThree" d="M9 18h6" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 31,
    Component: Github,
    title: "github-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Github = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.7,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".main",
        { scale: [1, 1.1, 1], rotate: [0, -3, 3, -3, 3, -3, 0] },

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
          xmlns="http://www.w3.org/2000/svg"
          ref={scope}
          onMouseEnter={start}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          className={\`cursor-pointer\${className}\`}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            className="main"
            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
          />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 32,
    Component: Twitter,
    title: "twitter-x-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Twitter = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.98,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".up",

        { scale: [1, 1.1, 1], rotate: [0, -3, 3, -3, 3, -3, 0] },

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
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="up" d="M4 4l11.733 16h4.267l-11.733 -16l-4.267 0" />
          <path className="up" d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 33,
    Component: Share,
    title: "share-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Share = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".main",

        { rotate: [0, -10, 10, 0], x: [0, 1, 0] },

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
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            className="main"
            d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7"
          />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 34,
    Component: Help,
    title: "help-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Help = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".show",

        {
          pathLength: [0, 1],
          pathOffset: [1, 0],
          opacity: [0, 1],
        },

        { duration, ease: "easeInOut" },
      );
      animate(
        ".showTwo",

        {
          opacity: [0, 1],
        },

        { duration, ease: "easeInOut", delay: 0.5 },
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
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path className="showTwo" d="M12 17l0 .01" />
          <path
            className="show"
            d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"
          />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 35,
    Component: Activity,
    title: "activity-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Activity = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".show",

        { pathLength: [0, 1] },

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
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={start}
          ref={scope}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="show" d="M3 12h4l3 8l4 -16l3 8h4" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 36,
    Component: CircleCheck,
    title: "circle-check-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const CircleCheck = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".circle",

        { pathLength: [0, 1], pathOffset: [1, 0] },

        { duration, ease: "easeInOut" },
      );
      animate(
        ".check",

        { pathLength: [0, 1], opacity: [0, 1] },

        {
          duration: duration * 0.75,
          ease: "easeInOut",
          delay: duration * 0.75,
        },
      );
    };
    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={start}
          ref={scope}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="circle" d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path className="check" d="M9 12l2 2l4 -4" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 37,
    Component: ArrowBackUp,
    title: "arrow-back-up-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const ArrowBackUp = forwardRef<AnimatedIconHandle, IconProps>(
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
      animate(".main", { x: [0, 1, -1, 1, 0] }, { duration, ease: "easeOut" });
    };
    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <motion.svg
          ref={scope}
          onMouseEnter={start}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="main" d="M9 14l-4 -4l4 -4" />
          <path className="main" d="M5 10h11a4 4 0 1 1 0 8h-1" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 38,
    Component: ThumbUp,
    title: "like-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const ThumbUp = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".main",

        { y: [0, 2, -4, 0], scale: [1, 0.8, 1.15, 1], rotate: [0, 0, -4, 0] },

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
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            className="main"
            d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"
          />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 39,
    Component: Check,
    title: "check-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Check = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.7,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".main",

        { pathLength: [0, 1], opacity: [0, 1] },

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
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={start}
          ref={scope}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="main" d="M5 12l5 5l10 -10" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 40,
    Component: Volume,
    title: "volume-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Volume = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.7,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".main",

        { x: [0, -1.1, 0] },

        { duration, ease: "easeInOut" },
      );
      animate(
        ".one",

        { x: [0, -3, 0] },

        { duration, ease: "easeInOut" },
      );
      animate(
        "#one",

        { scale: [1, 1.2, 1], opacity: [1, 0.4, 1] },

        {
          duration: duration * 0.857,
          ease: "easeInOut",
          delay: duration * 0.571,
        },
      );
      animate(
        "#two",

        { scale: [1, 1.2, 1], opacity: [1, 0.4, 1] },

        {
          duration: duration * 0.857,
          ease: "easeInOut",
          delay: duration * 0.857,
        },
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
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path id="one" className="one" d="M15 8a5 5 0 0 1 0 8" />
          <path id="two" className="one" d="M17.7 5a9 9 0 0 1 0 14" />
          <path
            className="main"
            d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"
          />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 41,
    Component: DotsVertical,
    title: "dots-vertical-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const DotsVertical = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 1.5,
      color = "currentColor",
      className = "",
      duration = 0.5,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".show",

        { x: [0, -2, 0] },

        { duration, ease: "easeInOut" },
      );
      animate(
        ".showTwo",

        { x: [0, -2, 0] },

        { duration, ease: "easeInOut", delay: duration * 0.4 },
      );
      animate(
        ".showThree",

        { x: [0, -2, 0] },

        { duration, ease: "easeInOut", delay: duration * 0.8 },
      );
    };
    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={start}
          ref={scope}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="showTwo" d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <path className="showThree" d="M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <path className="show" d="M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 42,
    Component: Upload,
    title: "upload-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Upload = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 50,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.5,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".down",
        {
          y: [0, -3.5, 0],
        },
        { duration, ease: "easeInOut" },
      );
      animate(
        ".downThree",
        {
          y: [0, -1.1, 0],
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
          ref={scope}
          onMouseEnter={start}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            className="downThree"
            d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"
          />
          <path className="down" d="M7 9l5 -5l5 5" />
          <path className="down" d="M12 4l0 12" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 43,
    Component: ArrowRight,
    title: "arrow-right-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const ArrowRight = forwardRef<AnimatedIconHandle, IconProps>(
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
      animate(".main", { x: [0, 1, -1, 1, 0] }, { duration, ease: "easeOut" });
    };
    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <motion.svg
          ref={scope}
          onMouseEnter={start}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="main" d="M5 12l14 0" />
          <path className="main" d="M15 16l4 -4" />
          <path className="main" d="M15 8l4 4" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 44,
    Component: Stack,
    title: "stack-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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
export const Stack = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".one",

        { y: [0, -1.8, 0] },

        { duration, ease: "easeInOut" },
      );
      animate(
        ".three",

        { y: [0, 1.8, 0] },

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
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="one" d="M12 4l-8 4l8 4l8 -4l-8 -4" />
          <path d="M4 12l8 4l8 -4" />
          <path className="three" d="M4 16l8 4l8 -4" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 45,
    Component: Cross,
    title: "cross-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Cross = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".one",
        {
          // scale: [1, 0.85, 1],

          rotate: [0, 90],
        },
        { duration, ease: "easeInOut" },
      );
    };
    const stop = () => {
      animate(
        ".one",
        {
          // scale: 1,
          rotate: 0,
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
          ref={scope}
          onMouseEnter={start}
            onMouseLeave={stop}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="one" d="M18 6l-12 12" />
          <path className="one" d="M6 6l12 12" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 46,
    Component: Wifi,
    title: "wifi-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Wifi = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".one",

        { opacity: [1, 0, 1] },

        { duration, ease: "easeInOut" },
      );
      animate(
        ".two",

        { opacity: [1, 0, 1] },

        { duration, ease: "easeInOut", delay: 0.2 },
      );
      animate(
        ".three",

        { opacity: [1, 0, 1] },

        { duration, ease: "easeInOut", delay: 0.4 },
      );
      animate(
        ".four",

        { opacity: [1, 0, 1] },

        { duration, ease: "easeInOut", delay: 0.6 },
      );
    };
    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={start}
          ref={scope}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="one" d="M12 18l.01 0" />
          <path className="two" d="M9.172 15.172a4 4 0 0 1 5.656 0" />
          <path className="three" d="M6.343 12.343a8 8 0 0 1 11.314 0" />
          <path
            className="four"
            d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"
          />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 47,
    Component: VolumeOff,
    title: "volume-off-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const VolumeOff = forwardRef<AnimatedIconHandle, IconProps>(
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

        { pathLength: [0, 1] },

        { duration: duration * 1.5, ease: "easeInOut" },
      );
      animate(
        ".sound",
        {
          scale: [1, 0.96],
          x: [0, -1, 1, -1, 0],
          opacity: 0.6,
        },
        { duration, ease: "easeInOut" },
      );
    };
    const stop = () => {
      animate(
        ".sound",
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
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            className="sound"
            d="M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602a5 5 0 0 1 -.535 .464"
          />
          <path
            className="sound"
            d="M17.7 5a9 9 0 0 1 2.362 11.086m-1.676 2.299a9 9 0 0 1 -.686 .615"
          />
          <path
            className="sound"
            d="M9.069 5.054l.431 -.554a.8 .8 0 0 1 1.5 .5v2m0 4v8a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l1.294 -1.664"
          />
          <path className="line" d="M3 3l18 18" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 48,
    Component: Pin,
    title: "pin-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Pin = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.9,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".main",
        {
          y: [0, -3, 3, -1, 0.4, 0],
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
          ref={scope}
          onMouseEnter={start}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="main" d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" />
          <path className="main" d="M12 16l0 5" />
          <path className="main" d="M8 4l8 0" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 49,
    Component: Rotate,
    title: "rotate-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Rotate = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 1,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".main",
        {
          rotate: [0, -360],
          scale: [1, 1.05, 1],
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
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={start}
          ref={scope}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="main" d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 50,
    Component: CircleArrowRight,
    title: "circle-arrow-right-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const CircleArrowRight = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.7,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".main",

        { x: [0, -2, 2, 0] },

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
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={start}
          ref={scope}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
          <path className="main" d="M16 12l-4 -4" />
          <path className="main" d="M16 12h-8" />
          <path className="main" d="M12 16l4 -4" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 51,
    Component: Refresh,
    title: "refresh-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Refresh = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 1,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        "#one",
        {
          rotate: [0, -360],
          scale: [1, 1.05, 1],
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
        <span onMouseEnter={start} ref={scope}>
          {" "}
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
            id="one"
            className={\`cursor-pointer\${className}\`}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
            <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
          </motion.svg>
        </span>
      </>
    );
  },
);
`,
  },
  {
    id: 52,
    Component: IncomingPhoneCall,
    title: "incoming-phone-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const IncomingPhoneCall = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".arrow",
        { opacity: [0, 1], x: [2, 0], y: [-2, 0] },
        { duration, ease: "easeInOut" },
      );

      animate(
        ".show",
        { rotate: [0, -15, 15, -10, 10, 0] },
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
          ref={scope}
          onMouseEnter={start}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            className="show"
            d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
          />
          <path className="arrow" d="M15 9l5 -5" />
          <path className="arrow" d="M15 5l0 4l4 0" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 53,
    Component: Coffee,
    title: "coffee-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Coffee = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".cup",
        {
          rotate: [0, 8, -8, 0],
          y: [0, -1, 0],
        },
        { duration, ease: "easeInOut" },
      );
      animate(
        ".steam",
        {
          y: [0, -2, 0],
          opacity: [1, 0.5, 0, 1],
        },
        {
          duration: duration * 1.333,
          ease: "easeInOut",
          delay: duration * 0.5,
        },
      );
    };
    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <motion.svg
          ref={scope}
          onMouseEnter={start}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path className="steam" d="M6 2v3" />
          <path className="steam" d="M10 2v3" />
          <path className="steam" d="M14 2v3" />

          <path
            className="cup"
            d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
          />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 54,
    Component: SearchTwo,
    title: "search-two-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const SearchTwo = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".flip",
        { rotateY: [0, 180, 0] },
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
          ref={scope}
          onMouseEnter={start}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          stroke={color}
          strokeWidth={strokeWidth}
          className={\`cursor-pointer\${className}\`}
        >
          <path
            d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flip"
          />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 55,
    Component: History,
    title: "history-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const History = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".time",

        {
          rotate: [0, -360],
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
          ref={scope}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="time" d="M12 8l0 4l2 2" />
          <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 56,
    Component: Box,
    title: "box-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Box = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".box",

        { rotate: [0, 90, 0] },

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
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            className="box"
            d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"
          />
          <path className="box" d="M12 12l8 -4.5" />
          <path className="box" d="M12 12l0 9" />
          <path className="box" d="M12 12l-8 -4.5" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 57,
    Component: File,
    title: "file-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const File = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.5,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".one",

        { scale: [1, 0.6, 1] },

        { duration, ease: "easeInOut" },
      );
      animate(
        ".two",

        { scale: [1, 0.6, 1] },

        { duration, ease: "easeInOut", delay: 0.2 },
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
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
          <path className="two" d="M9 17h6" />
          <path className="one" d="M9 13h6" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 58,
    Component: Pricing,
    title: "pricing-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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


export const Pricing = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.9,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".main",
        {
          y: [0, -1.5, 1.5, -1, 0.4, 0],
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
          ref={scope}
          onMouseEnter={start}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
          <path className="main" d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 59,
    Component: BoxPlus,
    title: "box-plus-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const BoxPlus = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".plus",

        { rotate: [0, 90, 0] },

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
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M21 12.5v-4.509a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.007c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008a2.016 2.016 0 0 0 2 0" />
          <path d="M12 22v-10" />
          <path d="M12 12l8.73 -5.04" />
          <path d="M3.27 6.96l8.73 5.04" />
          <path className="plus" d="M16 19h6" />
          <path className="plus" d="M19 16v6" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 60,
    Component: Attachment,
    title: "attachment-pin-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Attachment = forwardRef<AnimatedIconHandle, IconProps>(
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
      animate(".main", { scaleX: [1, -1, 1] }, { duration, ease: "easeOut" });
    };
    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <motion.svg
          ref={scope}
          onMouseEnter={start}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            className="main"
            d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5"
          />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 61,
    Component: Users,
    title: "users-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Users = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.7,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = () => {
      animate(
        ".user",
        {
          x: [-5, 0],
          opacity: [0, 1],
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
          ref={scope}
          onMouseEnter={start}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path className="user" d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path className="user" d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 62,
    Component: Bag,
    title: "bag-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Bag = forwardRef<AnimatedIconHandle, IconProps>(
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
      animate(".top", { y: [0, -2, 0] }, { duration, ease: "easeOut" });
      animate(
        ".bag",
        { rotate: [0, -6, 6, -6, 6, 0] },
        { duration, ease: "easeOut" },
      );
    };
    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <motion.svg
          ref={scope}
          onMouseEnter={start}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            className="bag"
            d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9"
          />
          <path className="top" d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 63,
    Component: Logout,
    title: "logout-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const Logout = forwardRef<AnimatedIconHandle, IconProps>(
  (
    {
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      className = "",
      duration = 0.5,
    },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      animate(
        ".arrow",

        { x: [0, -2, 2, 0] },

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
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
          <path className="arrow" d="M9 12h12l-3 -3" />
          <path className="arrow" d="M18 15l3 -3" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 64,
    Component: ArrowLeft,
    title: "arrow-left-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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

export const ArrowLeft = forwardRef<AnimatedIconHandle, IconProps>(
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
      animate(".main", { x: [0, -1, 1, -1, 0] }, { duration, ease: "easeOut" });
    };
    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));
    return (
      <>
        <motion.svg
          ref={scope}
          onMouseEnter={start}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path className="main" d="M5 12l14 0" />
          <path className="main" d="M5 12l4 4" />
          <path className="main" d="M5 12l4 -4" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
  {
    id: 65,
    Component: Plug,
    title: "webstock-icon",
    source: `import { motion, useAnimate } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

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


export const Plug = forwardRef<AnimatedIconHandle, IconProps>(
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
        ".main",
        {
          y: [0, -2, 0],
          x: [0, 2, 0],
        },
        { duration, ease: "easeInOut" },
      );
    };
    const stop = () => {
      animate(
        ".main",
        {
          rotate: [0],
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
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={\`cursor-pointer\${className}\`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            className="main"
            d="M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054"
          />
          <path className="main" d="M4 20l3.5 -3.5" />
          <path className="main" d="M15 4l-3.5 3.5" />
          <path className="main" d="M20 9l-3.5 3.5" />
        </motion.svg>
      </>
    );
  },
);
`,
  },
];
