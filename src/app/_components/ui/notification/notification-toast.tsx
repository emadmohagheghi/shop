'use client';
import { Notification, NotificationType } from '@/types/notification.types';
import { ReactNode, useEffect, useState } from 'react';
import { Progress } from '../progress/progress';
import {
  TickCircle,
  Warning2,
  NotificationBing,
  Add,
  CloseCircle,
} from 'iconsax-react';
import { NotificationToastProps } from './notification.type';
import { useNotificationStore } from '@/app/stores/notification.store';

const notificationTypes: Record<NotificationType, string> = {
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
};

export const NotificationToast: React.FC<NotificationToastProps> = ({
  notification: { id, message, type, duration = 5000 },
}) => {
  const dismissNotification = useNotificationStore(
    (state) => state.dismissNotification
  );
  const [progessValue, setProgressValue] = useState<number>(100);
  useEffect(() => {
    const interval = duration / 100;
    const intervalId = setInterval(() => {
      setProgressValue((oldValue) =>
        Math.max(oldValue - 100 / (duration / interval), 0)
      );
    }, interval);
    return () => clearInterval(intervalId);
  }, [duration]);
  return (
    <div className="flex gap-3 animate-show-notification relative items-center w-full max-w-xs p-4 m-0 text-gray-400 bg-gray-800 rounded-lg shadow">
      <div
        className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-md ${notificationTypes[type]}`}
      >
        <NotificationBing size={20} color='white' />
      </div>
      <div className="text-sm font-semibold">{message}</div>
      <button
        className="mr-auto hover:text-white mt-2"
        onClick={() => dismissNotification(id)}
      >
        <CloseCircle className='cursor-pointer' color='white' size={20} />
      </button>
      <Progress
        className="!absolute bottom-1 left-2 right-2 !w-auto"
        size="tiny"
        variant={type}
        value={progessValue}
      />
    </div>
  );
};
