import { LoginCurve, SearchNormal1, ShoppingCart } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Navbar } from './navbar';
import { Input } from '../ui/input';

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-90">
      <div className="hidden lg:block bg-white">
        <div className="container mx-auto flex items-center justify-between gap-4 p-3 ">
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
                  className={`stroke-gray-500 group-focus-within:stroke-primary`}
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
            <span className="w-[1px] h-8 bg-gray-500"></span>
            <Link href="/">
              <ShoppingCart size="32" color="black" />
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
      <div className="lg:hidden p-3 bg-white relative">
        <div className="relative group">
          <Input
            icon={
              <SearchNormal1
                size="28px"
                className={`stroke-gray-500 group-focus-within:stroke-primary`}
              />
            }
            className="focus:placeholder:opacity-0"
          />
          <span className="absolute top-1/2 -translate-1/2 text-gray-600 right-15 group-focus-within:hidden pointer-events-none">
            در{' '}
            <span className="text-primary text-lg font-bold pointer-events-none">
              تکنوشاپ
            </span>
          </span>
        </div>
      </div>
    </header>
  );
};
