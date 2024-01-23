import Button from "./button";

const Navbar = () => {
  return (
    <nav className=" flex w-full h-12 absolute top-7 z-10 px-24">
      <div className="w-1/3 flex items-center gap-x-5 h-full">
        <img src="images/logo.png" alt="logo" className="w-10 h-10" />
        <span className="text-2xl font-semibold ">Hounter</span>
      </div>
      <div className="w-2/3 flex h-full items-center justify-end">
        <ul className="w-4/6 flex gap-x-5 justify-end text-white ">
          <li>
            <Button className="bg-white/10 border-2 border-white/35 py-1">
              About Us
            </Button>
          </li>
          <li>
            <Button className="bg-white/10 border-2 border-white/35 py-1">
              Article
            </Button>
          </li>
          <li>
            <Button className="bg-white/10 border-2 border-white/35 py-1 flex gap-x-2 items-center">
              Property <img src="images/arrowDown.png" alt="arrowdown" />
            </Button>
          </li>
        </ul>
        <div className="w-1/6 flex justify-end ">
          <Button className="font-bold bg-teal-100 py-3 text-teal-800">
            Sign Up!
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
