import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Call, Instagram, Sms, Whatsapp, Youtube } from "iconsax-react";
import { useNotificationStore } from "@/stores/notification.store";
import Image from "next/image";

export const Footer = () => {
  const showNotification = useNotificationStore(
    (store) => store.showNotification,
  );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showNotification({
      message: "ایمیل شما با موفقیت ثبت شد!",
      type: "success",
    });
  };
  return (
    <div className="mt-12">
      <div className="bg-shade-800">
        {/* socials */}
        <div className="container flex flex-col items-center justify-between gap-14 px-3 py-14 text-white lg:flex-row">
          <div className="flex flex-col gap-3 text-center">
            <p>
              برای دریافت آخرین اخبار و تخفیف های جدید، ایمیل خود را وارد کنید
            </p>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <Input
                required
                type="email"
                searchPath=""
                className="!bg-shade-800 text-white placeholder:text-white"
                placeholder="ایمیل شما"
              />
              <Button variant="primary" type="submit">
                ثبت
              </Button>
            </form>
          </div>
          <div>
            <p className="mb-2 text-center">شبکه های اجتماعی</p>
            <div className="*:bg-tint-200 flex gap-3 *:cursor-pointer *:rounded-lg *:p-2">
              <div>
                <Whatsapp color="white" size={32} />
              </div>
              <div>
                <Instagram color="white" size={32} />
              </div>
              <div>
                <Youtube color="white" size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main */}
      <footer className="container my-12 grid grid-cols-12 gap-x-8 gap-y-4 px-3">
        <div className="text-primary col-span-12 my-8 grid grid-cols-4 gap-8 text-right text-sm font-medium *:col-span-2 *:flex *:flex-col *:gap-8 lg:col-span-9 *:lg:col-span-1">
          <div className="">
            <p className="text-lg">خدمات</p>
            <ul className="space-y-6">
              <li>قیمت لپ تاپ</li>
              <li>خرید لپ تاپ دست دوم</li>
              <li>گارانتی</li>
              <li>خرید اقساطی</li>
            </ul>
          </div>
          <div className="">
            <p className="text-lg">خرید لپ تاپ</p>
            <ul className="space-y-6">
              <li>انتخاب هوشمند لپ تاپ</li>
              <li>قیمت لپ تاپ لنوو</li>
              <li>قیمت لپ تاپ ایسوس</li>
              <li>قیمت لپ تاپ اچ پی</li>
            </ul>
          </div>
          <div className="">
            <p className="text-lg">فروشگاه اینترنتی</p>
            <ul className="space-y-6">
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>شرایط و قوانین</li>
              <li>نظرات کاربران</li>
            </ul>
          </div>
          <div className="">
            <p className="text-lg">پشتیبانی</p>
            <div className="space-y-6">
              <p>شنبه تا پنجشنبه 8:30 الی 18:30</p>
              <p className="flex items-center justify-start gap-2 text-xs sm:text-base">
                <Sms size={32} className="fill-primary" variant="Bold" />
                TechnoShop@Gmail.Com
              </p>
              <div className="flex items-center justify-start gap-2">
                <Call className="fill-primary" size={32} variant="Bold" />
                <p>
                  تلفن امور مشتریان <br /> 0210000
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 space-y-8 p-2 lg:col-span-3">
          <Image
            src="/images/logo.svg"
            alt="technoshop"
            width={200}
            height={80}
          />
          <div className="text-primary flex flex-col justify-start gap-5">
            <p className="text-lg font-bold">ادرس فروشگاه:</p>
            <p className="text text-sm leading-[180%]">
              تهران، خیابان ولیعصر، بالاتر از زرتشت، کوچه جاوید، پلاک ۲۴ کد
              <br />
              پستی: ۱۵۹۴۸۴۳۸۱۲
            </p>
          </div>
        </div>
        <div className="col-span-12 flex w-full justify-center lg:justify-end">
          <div className="flex gap-x-8">
            <Image
              src="/images/footer-banners/namad-1.png"
              alt="technoshop"
              width={75}
              height={90}
            />
            <Image
              src="/images/footer-banners/namad-2.png"
              alt="technoshop"
              width={75}
              height={90}
            />
            <Image
              src="/images/footer-banners/namad-3.png"
              alt="technoshop"
              width={75}
              height={90}
            />
          </div>
        </div>
      </footer>
      <div className="md:bg-primary mt-5 text-center text-white">
        <p className="bg-primary container py-4">
          تمامی حقوق مادی و معنوی این سایت متعلق به تکنوشاپ می‌باشد.{" "}
        </p>
      </div>
    </div>
  );
};
