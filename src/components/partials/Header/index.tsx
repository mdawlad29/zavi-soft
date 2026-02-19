"use client";

import { Typography, Drawer } from "antd";
import { IoIosSearch, IoMdArrowDropdown, IoMdMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { MobileDrawer } from "./MobileDrawer";
import { menuItems } from "@/constants";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 mx-4 my-8 rounded-3xl bg-white shadow md:mx-[60px]">
      <div className="flex items-center justify-between p-4 md:p-8">
        {/* Mobile Menu Icon */}
        <IoMdMenu
          onClick={() => setMobileOpen(true)}
          className="block cursor-pointer text-2xl md:hidden"
        />
        {/* Left Menu - Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {menuItems.map((item, index) => (
            <li key={index} className="group relative">
              <Link
                href="#"
                className="flex items-center gap-1 text-base font-semibold capitalize text-secondary transition-colors duration-300 hover:text-primary"
              >
                {item.label}

                {item?.child && (
                  <IoMdArrowDropdown className="transition-transform duration-300 group-hover:rotate-180" />
                )}
              </Link>

              {/* Dropdown */}
              {item?.child && (
                <div className="absolute left-0 top-8 hidden min-w-[160px] rounded-xl bg-white p-4 shadow-lg group-hover:block">
                  {item.child.map((childItem, i) => (
                    <Link key={i} href="#" className="block py-1 text-sm">
                      {childItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Logo */}
        <Link href="/">
          <Image src={"/images/logo.png"} alt="Logo" width={80} height={20} />
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          <IoIosSearch className="hidden cursor-pointer text-[24px] text-secondary md:block" />
          <FaUser className="cursor-pointer text-[24px] text-secondary" />

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-400 text-[16px] font-semibold text-secondary">
            0
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </header>
  );
};

export default Header;
