"use client";
import {
  ArrowDown2,
  Category,
  Home,
  Moon,
  SearchNormal1,
  ShoppingCart,
  User,
} from "iconsax-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY < lastScrollY) {
      setIsScrollingUp(true);
    } else {
      setIsScrollingUp(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`absolute -z-10 hidden w-full bg-white text-black shadow-md transition-all duration-400 lg:block ${
          !isScrollingUp && "-translate-y-14"
        }`}
      >
        <nav className="container mx-auto flex items-center gap-8 p-3 text-lg">
          <Link className="group flex items-center gap-1" href="/products">
            دسته بندی کالا ها
            <ArrowDown2 color="black" size={24} />
            {/* mega menu */}
            {/* <div className='bg-black/20  fixed top-32 left-0 h-screen w-screen'>
              sghl
            </div> */}
          </Link>

          <Link href="/">تخفیف ها و پیشنهاد ها </Link>
          <Link href="/">فروش ویژه</Link>
          <Link href="/">خرید اقساطی</Link>
          <Link href="/">راهنمای خرید</Link>
          <span className="flex size-[32px] cursor-pointer items-center justify-center rounded-full bg-black">
            <Moon className="fill-white stroke-white" size={16} />
          </span>
        </nav>
      </div>

      <div
        className={`fixed bottom-0 left-0 z-90 flex w-screen gap-5 bg-white p-2 text-black shadow-2xl transition-transform duration-300 *:w-1/4 lg:hidden ${
          !isScrollingUp && "translate-y-20"
        }`}
      >
        <Link
          href="/"
          className={`text-primary flex flex-col items-center justify-center gap-2 text-sm md:text-base`}
        >
          <Home size="30px" className={`stroke-primary`} />
          خانه
        </Link>
        <Link
          href="/"
          className={`flex flex-col items-center justify-center gap-2 text-sm md:text-base`}
        >
          <Category size="30px" className={`stroke-black`} />
          دسته بندی
        </Link>
        <Link
          href="/"
          className={`flex flex-col items-center justify-center gap-2 text-sm md:text-base`}
        >
          <ShoppingCart size="30px" className={`stroke-black`} />
          سبد خرید
        </Link>
        <Link
          href="/"
          className={`flex flex-col items-center justify-center gap-2 text-sm md:text-base`}
        >
          <User size="30px" className={`stroke-black`} />
          حساب من
        </Link>
      </div>
    </>
  );
};
