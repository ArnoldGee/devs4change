import cn from "classnames";
import Link from "next/link";

const links = [
  {
    label: "Our Mission",
    href: "/about",
  },
  {
    label: "Login",
    href: "/login",
  },
  {
    label: "Join",
    href: "/join",
  },
];

const Navbar = (): JSX.Element => (
  <nav>
    <div className="hidden sm:flex justify-end items-center space-x-5 uppercase">
      {links.map(({ label, href }, index) => (
        <div
          key={label}
          className={cn(
            "px-3 py-0.5",
            index === links.length - 1 && "bg-white text-green font-bold"
          )}
        >
          <Link href={href}>{label}</Link>
        </div>
      ))}
    </div>
    <div className="sm:hidden">Hamburger</div>
  </nav>
);

export default Navbar;
