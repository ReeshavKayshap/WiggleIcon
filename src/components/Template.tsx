// import { useState } from "react";

import { Bell } from "@/icons/Bell";
import { SearchTwo } from "@/icons/SearchTwo";
import { Setting } from "@/icons/Setting";
import { SmartHome } from "@/icons/SmartHome";
import { User } from "@/icons/User";

const ICONS = {
  SmartHome,
  SearchTwo,
  Bell,
  Setting,
  User,
};

const BASE_CODE = `
import { Bell } from "@/icons/Bell";
import { SearchTwo } from "@/icons/SearchTwo";
import { Setting } from "@/icons/Setting";
import { SmartHome } from "@/icons/SmartHome";
import { User } from "@/icons/User";

<div className="flex justify-center">
  <div className="flex justify-between gap-5 bg-neutral-800 w-80 px-4 py-3 rounded-full">
    {{ICONS}}
  </div>
</div>;
`;
// const DEFAULT_ICONS = ["SmartHome", "SearchTwo", "Bell", "Setting", "User"];
