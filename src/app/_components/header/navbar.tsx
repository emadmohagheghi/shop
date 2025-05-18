'use client';
import {
  ArrowDown2,
  Category,
  Home,
  Moon,
  SearchNormal1,
  ShoppingCart,
  User,
} from 'iconsax-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';


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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`absolute w-full transition-all duration-400 bg-white text-black -z-10 hidden lg:block shadow-md ${
          !isScrollingUp && '-translate-y-14'
        }`}
      >
        <nav className="container mx-auto flex items-center p-3 gap-8 text-lg">
          <Link className="flex items-center gap-1 group" href="/products" >
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
          <span className="flex items-center justify-center bg-black rounded-full size-[32px] cursor-pointer">
            <Moon className="stroke-white fill-white" size={16} />
          </span>
        </nav>
      </div>

      <div
        className={`lg:hidden w-screen flex gap-5 *:w-1/4 fixed bottom-0 p-2 bg-white transition-transform duration-300 left-0 shadow-2xl text-black z-10 ${
          !isScrollingUp && 'translate-y-20'
        }`}
      >
        <Link
          href="/"
          className={`flex flex-col items-center justify-center gap-2 text-sm md:text-base text-primary`}
        >
          <Home size="30px" className={`stroke-primary`} />
          خانه
        </Link>
        <Link
          href="/"
          className={`flex flex-col items-center justify-center gap-2 text-sm md:text-base `}
        >
          <Category size="30px" className={`stroke-black`} />
          دسته بندی
        </Link>
        <Link
          href="/"
          className={`flex flex-col items-center justify-center gap-2 text-sm md:text-base `}
        >
          <ShoppingCart size="30px" className={`stroke-black`} />
          سبد خرید
        </Link>
        <Link
          href="/"
          className={`flex flex-col items-center justify-center gap-2 text-sm md:text-base `}
        >
          <User size="30px" className={`stroke-black`} />
          حساب من
        </Link>
      </div>
    </>
  );
};
