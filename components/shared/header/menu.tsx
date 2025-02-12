import { UserIcon } from "lucide-react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex justify-end">
      <nav className="md:flex gap-3 hidden w-full">
        <Link href={"/signin"} className="header-button">
          <UserIcon className="h-8 w-8" />
          <span className="font-bold">Sign in</span>
        </Link>
        <Link href={"/cart"} className="header-button">
          <UserIcon className="h-8 w-8" />
          <span className="font-bold">Cart</span>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
