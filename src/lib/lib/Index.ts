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

interface Icon {
  id: number;
  Component: ComponentType;
}

export const IconList: Icon[] = [
  {
    id: 1,
    Component: Home,
  },
  {
    id: 2,
    Component: Notification,
  },
  {
    id: 3,
    Component: UnorderedList,
  },
  {
    id: 4,
    Component: Search,
  },
  {
    id: 5,
    Component: Phone,
  },
  {
    id: 6,
    Component: Cast,
  },
  {
    id: 7,
    Component: Map,
  },
  {
    id: 8,
    Component: Eye,
  },
  {
    id: 9,
    Component: Mic,
  },

  {
    id: 10,
    Component: Heart,
  },
  {
    id: 11,
    Component: Bluetooth,
  },
  {
    id: 12,
    Component: Trash,
  },
  {
    id: 13,
    Component: World,
  },
  {
    id: 14,
    Component: Setting,
  },
  {
    id: 15,
    Component: InfoCircle,
  },
  {
    id: 16,
    Component: Battery,
  },
  {
    id: 17,
    Component: BatteryCharging,
  },
  {
    id: 18,
    Component: EyeOff,
  },
  {
    id: 19,
    Component: Edit,
  },
  {
    id: 20,
    Component: FaceId,
  },
  {
    id: 20,
    Component: FingerPrint,
  },
];
