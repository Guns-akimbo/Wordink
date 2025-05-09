"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const link = [
  { name: "faq", path: "#faq" },
  { name: "reviews", path: "#reviews" },
  { name: "pricing", path: "#pricing" },
  { name: "instructors", path: "#instructors" },
  { name: "Students", path: "#students" },
];

const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-9">
      {link.map((linkItem, idx) => {
        const isInternalScroll = linkItem.path.startsWith("#");

        if (isInternalScroll) {
          const sectionId = linkItem.path.replace("#", "");

          return (
            <button
              key={idx}
              onClick={() => scrollToElement(sectionId)}
              className="capitalize text-[16px] font-medium cursor-pointer hover:text-[#E86305] transition-all"
            >
              {linkItem.name}
            </button>
          );
        }

        return (
          <Link
            href={linkItem.path}
            key={idx}
            className={`${
              pathname === linkItem.path ? "text-[#E86305] border-b-2 border-accent" : ""
            } capitalize text-[16px] font-medium hover:text-[#E86305] transition-all`}
          >
            {linkItem.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
