"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onCtaClick = () => {
    scrollToElement("pricing");
  };

  return (
    <header className="py- desktop:py-4 text-white p-4  bg-white ">
      {/* //logo */}
      <div className="container mx-auto flex justify-between items-center ">
        {/* Added prefetch={false} to the Link to prevent automatic prefetching if this isn't needed */}
        <Link href="/" prefetch={false}>
          <h1 className="text-2xl font-semibold flex gap-2 items-center ">
            <Image
              src="/wordink.jpg"
              alt=""
              width={96} // w-24 = 96px
              height={40}
            />
          </h1>
        </Link>
        <div className="hidden laptop:flex items-center  text-black gap-8">
          <Nav />
        </div>
        <div className="hidden laptop:flex">
          <Button onClick={onCtaClick} className="" size="lg">
            Enroll{" "}
          </Button>
        </div>

        <div className="laptop:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
