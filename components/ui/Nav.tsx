import { ThemeToggle } from "../ThemeToggle";

function Nav() {
  const links = [{ title: "WiggleIcon", id: "logo" }];
  return (
    <>
      <nav className="flex items-center justify-between">
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
