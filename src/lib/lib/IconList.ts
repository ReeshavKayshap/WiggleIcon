import type { ComponentType } from "react";
import type { IconItem } from "../../types/Type";
import Home from "../../icons/Home";
import { Notification } from "../../icons/Notification";
import { UnorderedList } from "../../icons/UnorderedList";
import Search from "../../icons/Search";
import Phone from "../../icons/Phone";
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
import { FingerPrint } from "@/icons/FingerPrint";
import { Menu } from "@/icons/Menu";
import { User } from "@/icons/User";
import { Download } from "@/icons/Download";
import { Mail } from "@/icons/Mail";
import { Copy } from "@/icons/Copy";
import { Bell } from "@/icons/Bell";
import { BellRinging } from "@/icons/BellRinging";
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
import Pinned from "@/icons/Pinned";
import { Rotate } from "@/icons/Rotate";
import { CircleArrowRight } from "@/icons/CircleArrowRight";
import { Refresh } from "@/icons/Refresh";
import { IncomingPhoneCall } from "@/icons/Send";
import { Coffee } from "@/icons/Coffee";
import { SearchTwo } from "@/icons/SearchTwo";
import { History } from "@/icons/History";

export const IconList: IconItem[] = [
  {
    id: 1,
    Component: SmartHome,
    title: "smart-home-icon",
    source: `import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function SmartHome({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.6,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".show",

      { pathLength: [0, 1], pathOffset: [1, 0], opacity: [0, 1] },

      { duration, ease: "easeInOut" },
    );
  };

  return (
    <>
      <motion.svg
        onMouseEnter={handleHover}
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
}
`,
  },
  {
    id: 2,
    Component: Menu,
    title: "menu-icon",
    source: `
import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function Menu({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.5,
}:IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(".showTwo", { scaleX: [1, 0.25, 1] }, { duration, ease: "easeInOut" });
    animate(".showOne", { scaleX: [1, 0.3, 1] }, { duration, ease: "easeInOut", delay: 0.1 });
    animate(".showThree", { scaleX: [1, 0.3, 1] }, { duration, ease: "easeInOut", delay: 0.2 });
  };

  return (
    <motion.svg
      onMouseEnter={handleHover}
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
  );
}
`,
  },
  {
    id: 3,
    Component: Search,
    title: "search-icon",
    source: `import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
function Search({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.5,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const MouseEnter = () => {
    animate(
      ".flip",
      { y: [0, -2, 0], x: [0, 1, 0, -1, 0] },
      { duration: duration * 2, ease: "easeInOut", repeat: Infinity },
    );
  };
  const MouseLeave = () => {
    animate(".flip", { y: 0, x: 0 }, { duration: duration, ease: "easeInOut" });
  };
  return (
    <>
      <motion.svg
        ref={scope}
        onMouseEnter={MouseEnter}
        onMouseLeave={MouseLeave}
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
}

export default Search;
`,
  },
  {
    id: 4,
    Component: Setting,
    title: "setting-icon",
    source: `import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function Setting({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.8,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".role",

      { rotate: [0, -90, 0] },

      { duration, ease: "easeInOut" },
    );
  };

  return (
    <>
      <motion.svg
        onMouseEnter={handleHover}
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
}
`,
  },

  {
    id: 5,
    Component: User,
    title: "user-icon",
    source: `import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function User({
  size = 50,

  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.7,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = () => {
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
  return (
    <>
      <motion.svg
        ref={scope}
        onMouseEnter={handleHover}
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
}
`,
  },
  {
    id: 6,
    Component: Download,
    title: "download-icon",
    source: `import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function Download({
  size = 50,

  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.5,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = () => {
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
  return (
    <>
      <motion.svg
        ref={scope}
        onMouseEnter={handleHover}
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
}
`,
  },
  {
    id: 7,
    Component: Map,
    title: "map-icon",
    source: `import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function Map({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.8,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
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

  return (
    <>
      <span onMouseEnter={handleHover} ref={scope}>
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
}
`,
  },
  {
    id: 8,
    Component: Eye,
    title: "eye-icon",
    source: `import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function Eye({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.5,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
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

  return (
    <>
      <motion.svg
        onMouseEnter={handleHover}
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
}
`,
  },
  {
    id: 9,
    Component: Copy,
    title: "copy-icon",
    source: `import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function Copy({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.6,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = () => {
    animate(
      ".main",
      {
        y: [0, -3, 0],
        x: [0, -3, 0],
      },
      { duration, ease: "easeInOut" },
    );
  };
  return (
    <>
      <motion.svg
        ref={scope}
        onMouseEnter={handleHover}
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
}
`,
  },

  {
    id: 10,
    Component: Heart,
    title: "heart-icon",
    source: `import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function Heart({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.9,
}: IconProps) {
  const stroke = 1.5;
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".heart",

      {
        scale: [1, 0.8, 1, 0.8, 1],
        strokeWidth: [stroke, 2.3, stroke, 2.3, stroke],
      },

      { duration, ease: "easeInOut" },
    );
  };

  return (
    <>
      <motion.svg
        onMouseEnter={handleHover}
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
}
`,
  },
  {
    id: 11,
    Component: Phone,
    title: "phone-call-icon",
    source: `import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
function Phone({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.9,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = () => {
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
  return (
    <>
      <motion.svg
        ref={scope}
        onMouseEnter={handleHover}
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
}

export default Phone;
`,
  },
  {
    id: 12,
    Component: Trash,
    title: "trash-icon",
    source: `import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function Trash({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.98,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      ".up",

      { y: [0, -5, -3, -1.2, 0], rotate: [0, -3, 3, -3, 0] },

      { duration, ease: "easeInOut" },
    );
  };

  return (
    <>
      <motion.svg
        onMouseEnter={handleHover}
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
}
`,
  },
  {
    id: 13,
    Component: World,
    title: "world-icon",
    source: `import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function World({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.98,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
    animate(
      "#roted",

      { rotate: [0, -180] },

      { duration, ease: "easeInOut" },
    );
  };

  return (
    <>
      <span onMouseEnter={handleHover} ref={scope}>
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
}
`,
  },
  {
    id: 14,
    Component: UnorderedList,
    title: "list-icon",
    source: `import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function UnorderedList({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.4,
}: IconProps) {
  const stroke = 1.5;
  const [scope, animate] = useAnimate();

  const handleHover = () => {
    animate(
      ".one",

      { scale: [1, 1.2, 1], x: [0, 1, 0], strokeWidth: [stroke, 1.8, stroke] },

      { duration, ease: "easeInOut" },
    );

    animate(
      ".two",
      { scale: [1, 1.2, 1], x: [0, 1, 0], strokeWidth: [stroke, 1.8, stroke] },
      { duration, ease: "easeInOut", delay: 0.3 },
    );
    animate(
      ".three",
      { scale: [1, 1.2, 1], x: [0, 1, 0], strokeWidth: [stroke, 1.8, stroke] },

      { duration, ease: "easeInOut", delay: 0.6 },
    );
  };
  const handelleave = () => {
    animate(
      ".one",

      { scale: 1, x: 0, strokeWidth: 2 },

      { duration, ease: "easeInOut" },
    );

    animate(
      ".two",
      { scale: 1, x: 0, strokeWidth: 2 },
      { duration, ease: "easeInOut" },
    );
    animate(
      ".three",
      { scale: 1, x: 0, strokeWidth: 2 },

      { duration, ease: "easeInOut" },
    );
  };

  return (
    <>
      <motion.svg
        onMouseEnter={handleHover}
        onMouseLeave={handelleave}
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
}
`,
  },
  {
    id: 15,
    Component: InfoCircle,
    title: "info-icon",
    source: `import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function InfoCircle({
  size = 50,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  duration = 0.5,
}: IconProps) {
  const [scope, animate] = useAnimate();

  const handleHover = async () => {
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

  return (
    <>
      <motion.svg
        onMouseEnter={handleHover}
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
}
`,
  },
  {
    id: 16,
    Component: FaceId,
    title: "face-id-icon",
  },
  {
    id: 17,
    Component: Bell,
    title: "bell-icon",
  },

  {
    id: 18,
    Component: EyeOff,
    title: "eye-off-icon",
  },
  {
    id: 19,
    Component: Cast,
    title: "cast-icon",
  },
  {
    id: 20,
    Component: Battery,
    title: "battery-low-icon",
  },
  {
    id: 21,
    Component: FingerPrint,
    title: "finger-Print-icon",
  },
  {
    id: 22,
    Component: BatteryCharging,
    title: "battery-charging-icon",
  },
  {
    id: 23,
    Component: BellRinging,
    title: "bell-off-icon",
  },
  {
    id: 24,
    Component: Home,
    title: "home-icon",
  },
  {
    id: 25,
    Component: Edit,
    title: "pen-icon",
  },
  {
    id: 26,
    Component: Bluetooth,
    title: "bluetooth-icon",
  },
  {
    id: 27,
    Component: ArrowBack,
    title: "arrow-back-icon",
  },
  {
    id: 28,
    Component: Image,
    title: "image-icon",
  },
  {
    id: 29,
    Component: Dots,
    title: "dots-icon",
  },
  {
    id: 30,
    Component: Filter,
    title: "filter-icon",
  },
  {
    id: 31,
    Component: Github,
    title: "github-icon",
  },
  {
    id: 32,
    Component: Twitter,
    title: "twitter-x-icon",
  },
  {
    id: 33,
    Component: Share,
    title: "share-icon",
  },
  {
    id: 34,
    Component: Help,
    title: "help-icon",
  },
  {
    id: 35,
    Component: Activity,
    title: "activity-icon",
  },
  {
    id: 36,
    Component: CircleCheck,
    title: "circle-check-icon",
  },
  {
    id: 37,
    Component: ArrowBackUp,
    title: "arrow-back-up-icon",
  },
  {
    id: 38,
    Component: ThumbUp,
    title: "like-icon",
  },
  {
    id: 39,
    Component: Check,
    title: "check-icon",
  },
  {
    id: 40,
    Component: Volume,
    title: "volume-icon",
  },
  {
    id: 41,
    Component: DotsVertical,
    title: "dots-vertical-icon",
  },
  {
    id: 42,
    Component: Upload,
    title: "upload-icon",
  },
  {
    id: 43,
    Component: ArrowRight,
    title: "arrow-right-icon",
  },
  {
    id: 44,
    Component: Stack,
    title: "stack-icon",
  },
  {
    id: 45,
    Component: Cross,
    title: "cross-icon",
  },
  {
    id: 46,
    Component: Wifi,
    title: "wifi-icon",
  },
  {
    id: 47,
    Component: VolumeOff,
    title: "volume-off-icon",
  },
  {
    id: 48,
    Component: Pinned,
    title: "pinned-icon",
  },
  {
    id: 49,
    Component: Rotate,
    title: "rotate-icon",
  },
  {
    id: 50,
    Component: CircleArrowRight,
    title: "circle-arrow-right-icon",
  },
  {
    id: 51,
    Component: Refresh,
    title: "refresh-icon",
  },
  {
    id: 52,
    Component: IncomingPhoneCall,
    title: "incoming-phone-icon",
  },
  {
    id: 53,
    Component: Coffee,
    title: "coffee-icon",
  },
  {
    id: 54,
    Component: SearchTwo,
    title: "search-two-icon",
  },
  {
    id: 55,
    Component: History,
    title: "history-icon",
  },
];
