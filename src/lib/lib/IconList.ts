import type { ComponentType } from "react";
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
interface Icon {
  id: number;
  Component: ComponentType;
  titel: string;
}

export const IconList: Icon[] = [
  {
    id: 1,
    Component: SmartHome,
    titel: "smart-home-icon",
  },
  {
    id: 2,
    Component: Menu,
    titel: "menu-icon",
  },
  {
    id: 3,
    Component: Search,
    titel: "search-icon",
  },
  {
    id: 4,
    Component: Setting,
    titel: "setting-icon",
  },

  {
    id: 5,
    Component: User,
    titel: "user-icon",
  },
  {
    id: 6,
    Component: Download,
    titel: "download-icon",
  },
  {
    id: 7,
    Component: Map,
    titel: "map-icon",
  },
  {
    id: 8,
    Component: Eye,
    titel: "eye-icon",
  },
  {
    id: 9,
    Component: Copy,
    titel: "copy-icon",
  },

  {
    id: 10,
    Component: Heart,
    titel: "heart-icon",
  },
  {
    id: 11,
    Component: Phone,
    titel: "phone-call-icon",
  },
  {
    id: 12,
    Component: Trash,
    titel: "trash-icon",
  },
  {
    id: 13,
    Component: World,
    titel: "world-icon",
  },
  {
    id: 14,
    Component: UnorderedList,
    titel: "list-icon",
  },
  {
    id: 15,
    Component: InfoCircle,
    titel: "info-icon",
  },
  {
    id: 16,
    Component: FaceId,
    titel: "face-id-icon",
  },
  {
    id: 17,
    Component: Bell,
    titel: "bell-icon",
  },

  {
    id: 18,
    Component: EyeOff,
    titel: "eye-off-icon",
  },
  {
    id: 19,
    Component: Cast,
    titel: "cast-icon",
  },
  {
    id: 20,
    Component: Battery,
    titel: "battery-low-icon",
  },
  {
    id: 21,
    Component: FingerPrint,
    titel: "finger-Print-icon",
  },
  {
    id: 22,
    Component: BatteryCharging,
    titel: "battery-charging-icon",
  },
  {
    id: 23,
    Component: BellRinging,
    titel: "bell-off-icon",
  },
  {
    id: 24,
    Component: Home,
    titel: "home-icon",
  },
  {
    id: 25,
    Component: Edit,
    titel: "pen-icon",
  },
  {
    id: 26,
    Component: Bluetooth,
    titel: "bluetooth-icon",
  },
  {
    id: 27,
    Component: ArrowBack,
    titel: "arrow-back-icon",
  },
  {
    id: 28,
    Component: Image,
    titel: "image-icon",
  },
  {
    id: 29,
    Component: Dots,
    titel: "dots-icon",
  },
  {
    id: 30,
    Component: Filter,
    titel: "filter-icon",
  },
  {
    id: 31,
    Component: Github,
    titel: "github-icon",
  },
  {
    id: 32,
    Component: Twitter,
    titel: "twitter-x-icon",
  },
  {
    id: 33,
    Component: Share,
    titel: "share-icon",
  },
  {
    id: 34,
    Component: Help,
    titel: "help-icon",
  },
  {
    id: 35,
    Component: Activity,
    titel: "activity-icon",
  },
  {
    id: 36,
    Component: CircleCheck,
    titel: "circle-check-icon",
  },
  {
    id: 37,
    Component: ArrowBackUp,
    titel: "arrow-back-up-icon",
  },
  {
    id: 38,
    Component: ThumbUp,
    titel: "like-icon",
  },
  {
    id: 39,
    Component: Check,
    titel: "check-icon",
  },
  {
    id: 40,
    Component: Volume,
    titel: "volume-icon",
  },
  {
    id: 41,
    Component: DotsVertical,
    titel: "dots-vertical-icon",
  },
  {
    id: 42,
    Component: Upload,
    titel: "upload-icon",
  },
  {
    id: 43,
    Component: ArrowRight,
    titel: "arrow-right-icon",
  },
  {
    id: 44,
    Component: Stack,
    titel: "stack-icon",
  },
  {
    id: 45,
    Component: Cross,
    titel: "cross-icon",
  },
  {
    id: 46,
    Component: Wifi,
    titel: "wifi-icon",
  },
  {
    id: 47,
    Component: VolumeOff,
    titel: "volume-off-icon",
  },
  {
    id: 48,
    Component: Pinned,
    titel: "pinned-icon",
  },
  {
    id: 49,
    Component: Rotate,
    titel: "rotate-icon",
  },
  {
    id: 50,
    Component: CircleArrowRight,
    titel: "circle-arrow-right-icon",
  },
];
