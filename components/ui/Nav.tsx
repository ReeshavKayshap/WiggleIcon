import { IconLayoutFilled } from "@tabler/icons-react";
import { ThemeToggle } from "../ThemeToggle";

function Nav() {
  const links = [{ title: "WiggleIcon", id: "logo" }];
  return (
    <>
      <nav className="flex items-center justify-between">

        {links.map((item) => (
          <a className="flex justify-center items-center gap-2 " key={item.id} href={`#${item.id}`}>
            <IconLayoutFilled size={27} />
            <h1 className="font-inter text-[27px] font-semibold ">{item.title}</h1>
          </a>
        ))}
        
        <ThemeToggle />
      </nav>
    </>
  );
}
export { Nav };
