"use client";
import { secondsToHHMMSS } from "@/utils/time";
import { useState, useEffect } from "react";

export const Timer = ({ initialSeconds }: { initialSeconds: number }) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  // تایمر معکوس با استفاده از useEffect
  useEffect(() => {
    if (secondsLeft <= 0) return; // اگر زمان به صفر رسید، متوقف شود

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, [secondsLeft]);

  // تبدیل ثانیه‌های باقی‌مانده به فرمت مورد نظر
  const { hours, minutes, seconds } = secondsToHHMMSS(Math.max(secondsLeft, 0));

  return (
    <div className="text-primary divide-primary flex w-full items-center divide-x-[1px] rounded-xl bg-white p-2 *:flex *:flex-1 *:flex-col *:items-center *:px-4">
      <div>
        <p className="text-3xl font-medium">{seconds}</p>
        <p className="text-[10px]">ثانیه</p>
      </div>
      <div>
        <p className="text-3xl font-medium">{minutes}</p>
        <p className="text-[10px]">دقیقه</p>
      </div>
      <div>
        <p className="text-3xl font-medium">{hours}</p>
        <p className="text-[10px]">ساعت</p>
      </div>
    </div>
  );
};
