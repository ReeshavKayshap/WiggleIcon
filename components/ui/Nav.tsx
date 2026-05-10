import { ThemeToggle } from "../ThemeToggle";

function Nav() {
  const links = [
    { title: "Icons", id: "icons" },
    { title: "Components", id: "components" },
    { title: "Contact", id: "contact" },
  ];
  return (
    <>
      <nav className="flex items-center ">
        {links.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.title}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </>
  );
}
export { Nav };
