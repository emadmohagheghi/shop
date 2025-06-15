"use client";
import { Instagram, Whatsapp, Youtube } from "iconsax-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useNotificationStore } from "@/stores/notification.store";

export const Communication = () => {
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
    <div className="bg-shade-800">
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
  );
};
