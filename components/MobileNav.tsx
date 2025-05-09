"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { link } from "./Nav";

//nav links

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-[#E86305]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col p-4 text-black">
        <div className="mt-32 mb-40 flex items-center justify-center">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <img src="/ink.png" alt="" className="w-24 h-10"  />
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-9">
          {link.map((link, idx) => {
            return (
              <Link
                href={link.path}
                key={idx}
                onClick={() => setIsOpen(false)}
                className={`${pathname === link.path && "text-[#E86305] border-b-2 border-accent"} capitalize text-xl font-medium hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

