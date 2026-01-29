import type { ComponentType } from "react";
import Home from "./Home";
import { Notification } from "./Notification";
import { UnorderedList } from "./UnorderedList";
import Search from "./Search";
import Phone from "./Phone";
import { Cast } from "./Cast";
import { Eye } from "./Eye";
import { Map } from "./Map";
import { Mic } from "./Mic";
import { Heart } from "./Heart";
import { Bluetooth } from "./Bluetooth";
import { Trash } from "./Trash";
import { World } from "./World";
import { Setting } from "./Setting";
import { InfoCircle } from "./InfoCircle";
import { Bell } from "./Bell";

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
    Component: Bell,
  },
];
