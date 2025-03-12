import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white border-b-2 border-gray-800 w-full p-4 flex justify-between items-center fixed z-10">
      <Link href="/" className="text-xl font-bold">
        Quiz App
      </Link>
      <div className="flex justify-between items-center">
        <Link href="/quiz" className="mx-2">
          Categories
        </Link>
        <Link href="/auth/login" className="mx-2 border-1 btn border-gray-800">
          Login
        </Link>
        <Link href="/auth/signup" className="mx-2 btn bg-gray-800 text-white">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
