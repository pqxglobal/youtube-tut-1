import Link from 'next/link';
import { SlArrowUp } from 'react-icons/sl';

const DesktopNavbar = () => {
  return (
    <div className="fixed hidden sm:flex w-full bottom-10 z-40 text-center items-center justify-center">
      <div className="bg-[#105271] flex items-center text-white rounded-full mx-auto max-w-[660px] px-3 py-5">
        <ul className="flex gap-10 justify-around text-xl items-center">
          <li className="rounded-full bg-[#66bc45] text-black p-3 flex-nowrap">
            <SlArrowUp className="text-2xl mx-auto cursor-pointer" />
          </li>
          <Link href="https://github.com/pqxglobal">
            <li className="hover:bg-[#66bc45] hover:text-black hover:p-2 hover:rounded-full ease-in-out duration-500 cursor-pointer">
              Portfolio
            </li>
          </Link>
          <Link href="/">
            <li className="hover:bg-[#66bc45] hover:text-black hover:p-2 hover:rounded-full ease-in-out duration-500 cursor-pointer">
              Pricing
            </li>
          </Link>
          <Link href="/">
            <li className="hover:bg-[#66bc45] hover:text-black hover:p-2 hover:rounded-full ease-in-out duration-500 cursor-pointer">
              FAQ
            </li>
          </Link>
          <Link href="/">
            <li className="hover:bg-[#66bc45] hover:text-black hover:p-2 hover:rounded-full ease-in-out duration-500 cursor-pointer">
              Book A Call
            </li>
          </Link>
          <Link href="/">
            <li className="bg-[#66bc45] text-black rounded-full tracking-tight p-3">Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default DesktopNavbar;
