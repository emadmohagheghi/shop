import { LoginCurve, SearchNormal1, ShoppingCart } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Navbar } from "./navbar";
import { Input } from "../ui/input";

export const Header = () => {
  return (
    <header className="fixed top-0 z-30 w-full">
      <div className="hidden bg-white lg:block">
        <div className="container mx-auto flex items-center justify-between gap-4 p-3">
          <div>
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="تکنوشاپ"
                width={156}
                height={63}
              />
            </Link>
          </div>
          <div className="relative w-full max-w-[600px]">
            <Input
              icon={
                <SearchNormal1
                  size="28px"
                  className={`group-focus-within:stroke-primary stroke-gray-500`}
                />
              }
            />
          </div>
          <div className="flex items-center gap-5">
            <Link href="/auth">
              <Button
                variant="primary"
                rightIcon={<LoginCurve color="white" size="24" />}
              >
                ورود / ثبت نام
              </Button>
            </Link>
            <span className="h-8 w-[1px] bg-gray-500"></span>
            <Link href="/">
              <ShoppingCart size="32" color="black" />
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
      <div className="relative bg-white p-3 lg:hidden">
        <div className="group relative">
          <Input
            icon={
              <SearchNormal1
                size="28px"
                className={`group-focus-within:stroke-primary stroke-gray-500`}
              />
            }
            className="focus:placeholder:opacity-0"
          />
          <span className="pointer-events-none absolute top-1/2 right-15 -translate-1/2 text-gray-600 group-focus-within:hidden">
            در{" "}
            <span className="text-primary pointer-events-none text-lg font-bold">
              تکنوشاپ
            </span>
          </span>
        </div>
      </div>
    </header>
  );
};
