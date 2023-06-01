import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full fixed z-[100] bg-[#ecf0f3] shadow-xl h-20">
      <div className="flex items-center sm:justify-center justify-between h-full w-full">
        <Link href="/">
          <Image
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
