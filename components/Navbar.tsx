import cn from "classnames";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

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

const Navbar = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = (): void => setOpen(!open);

  return (
    <nav>
      <div
        className={cn(
          "overflow-hidden transition-all sm:overflow-auto absolute sm:relative top-16 sm:top-auto inset-x-0 sm:inset-x-auto",
          !open ? "h-0 sm:h-auto" : "h-80 sm:h-auto"
        )}
      >
        <div className="justify-end bg-green uppercase items-center p-7 pb-10 sm:pb-0 sm:p-0 space-y-10 sm:space-y-0 sm:space-x-7 flex flex-col sm:flex-row ">
          {links.map(({ label, href }, index) => (
            <div
              key={label}
              className={cn(
                "py-0.5",
                index === links.length - 1 && "px-3 bg-white text-green font-bold"
              )}
            >
              <Link href={href}>{label}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-5 sm:hidden">
        <Hamburger onToggle={toggle} />
      </div>
    </nav>
  );
};

export default Navbar;
