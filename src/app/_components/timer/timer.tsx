'use client';
import { secondsToHHMMSS } from '@/utils/time';
import { useState, useEffect } from 'react';

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
    <div className="flex items-center w-full bg-white text-primary divide-primary divide-x-[1px] p-2 rounded-xl *:flex *:flex-col *:items-center  *:px-4 *:flex-1">
      <div>
        <p className='font-medium text-3xl'>{seconds}</p>
        <p className='text-[10px]'>ثانیه</p>
      </div>
      <div>
        <p className='font-medium text-3xl'>{minutes}</p>
        <p className='text-[10px]'>دقیقه</p>
      </div>
      <div>
        <p className='font-medium text-3xl'>{hours}</p>
        <p className='text-[10px]'>ساعت</p>
      </div>
    </div>
  );
};
