import MaxWidth from "./atoms/MaxWidth";
import Navbar from "./Navbar";

const Header = (): JSX.Element => (
  <header className="fixed inset-x-0 p-5 bg-green text-white">
    <MaxWidth>
      <div className="flex justify-between">
        <h1 className="sr-only">Devs for Change</h1>
        <div className="font-mono text-xl">{">_ Devs for Change"}</div>
        <Navbar />
      </div>
    </MaxWidth>
  </header>
);

export default Header;
