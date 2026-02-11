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
    //     copyText: `import { motion, useAnimate } from "motion/react";

    // interface ActivityProps {
    //   size?: number;
    //   strokeWidth?: number;
    //   color?: string;
    //   className?: string;
    // }

    // export function SmartHome({
    //   size = 60,
    //   strokeWidth = 2,
    //   color = "currentColor",
    //   className = "",
    // }: ActivityProps) {
    //   const [scope, animate] = useAnimate();

    //   const handleHover = async () => {
    //     animate(
    //       ".show",
    //       { pathLength: [0, 1], pathOffset: [1, 0], opacity: [0, 1] },
    //       { duration: 0.6, ease: "easeInOut" }
    //     );
    //   };

    //   return (
    //     <motion.svg
    //       onMouseEnter={handleHover}
    //       ref={scope}
    //       xmlns="http://www.w3.org/2000/svg"
    //       width={size}
    //       height={size}
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke={color}
    //       strokeWidth={strokeWidth}
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       className={\`cursor-pointer \${className}\`}
    //     >
    //       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //       <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105" />
    //       <path className="show" d="M16 15c-2.21 1.333 -5.792 1.333 -8 0" />
    //     </motion.svg>
    //   );
    // }`,
  },
  {
    id: 2,
    Component: Menu,
    title: "menu-icon",
    source: `
import { motion, useAnimate } from "motion/react";
import type { IconProps } from "../types/Type";
export function Menu({
  size = 60,
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
  },
  {
    id: 4,
    Component: Setting,
    title: "setting-icon",
  },

  {
    id: 5,
    Component: User,
    title: "user-icon",
  },
  {
    id: 6,
    Component: Download,
    title: "download-icon",
  },
  {
    id: 7,
    Component: Map,
    title: "map-icon",
  },
  {
    id: 8,
    Component: Eye,
    title: "eye-icon",
  },
  {
    id: 9,
    Component: Copy,
    title: "copy-icon",
  },

  {
    id: 10,
    Component: Heart,
    title: "heart-icon",
  },
  {
    id: 11,
    Component: Phone,
    title: "phone-call-icon",
  },
  {
    id: 12,
    Component: Trash,
    title: "trash-icon",
  },
  {
    id: 13,
    Component: World,
    title: "world-icon",
  },
  {
    id: 14,
    Component: UnorderedList,
    title: "list-icon",
  },
  {
    id: 15,
    Component: InfoCircle,
    title: "info-icon",
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
