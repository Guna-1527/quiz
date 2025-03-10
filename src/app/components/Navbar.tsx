import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link href="/" className="text-xl font-bold">Quiz App</Link>
      <div>
        <Link href="/quiz" className="mx-2">Categories</Link>
        <Link href="/auth/login" className="mx-2">Login</Link>
        <Link href="/auth/signup" className="mx-2">Sign Up</Link>
      </div>
    </nav>
  );
}


export default Navbar;