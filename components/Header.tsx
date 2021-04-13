import MaxWidth from "./atoms/MaxWidth";
import Navbar from "./Navbar";
import Link from "next/link";

const Header = (): JSX.Element => (
  <>
    <header className="fixed z-20 inset-x-0 p-5 bg-green text-white">
      <MaxWidth>
        <div className="flex justify-between">
          <h1 className="sr-only">Devs for Change</h1>
          <Link href="/">
            <div className="font-mono text-xl">{">_ Devs for Change"}</div>
          </Link>
          <Navbar />
        </div>
      </MaxWidth>
    </header>
    <div className="h-16" />
  </>
);

export default Header;
