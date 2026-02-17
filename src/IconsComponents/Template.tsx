import { Home } from "@/icons/Home";
import { Menu } from "@/icons/Menu";
import { SmartHome } from "@/icons/SmartHome";
import type { AnimatedIconHandle } from "@/types/Type";
import { useRef } from "react";

function Nav() {
  const items = [
    { id: "home", Icon: Home, label: "Home" },
    { id: "smart", Icon: SmartHome, label: "Smart Home" },
    { id: "menu", Icon: Menu, label: "Menu" },
  ];
  const iconRefs = useRef<Record<string, AnimatedIconHandle | null>>({});

  return (
    <div className="flex justify-center gap-20">
      {items.map(({ id, Icon, label }) => (
        <div
          key={id}
          onMouseEnter={() => iconRefs.current[id]?.startAnimation()}
          onMouseLeave={() => iconRefs.current[id]?.stopAnimation()}
          className="flex items-center gap-4 bg-amber-950"
        >
          <Icon
            ref={(el) => {
              iconRefs.current[id] = el;
            }}
            className="size-10 pointer-events-none"
          />
          <h1>{label}</h1>
        </div>
      ))}
    </div>
  );
}

export default Nav;
