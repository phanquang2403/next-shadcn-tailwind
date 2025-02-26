import React from "react";
import { ModeToggle } from "./toggle-theme";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/login"}>Đăng nhập</Link>
        </li>
        <li>
          <Link href={"/register"}>Đăng Ký</Link>
        </li>
      </ul>
      <ModeToggle />
    </div>
  );
};

export default Header;
