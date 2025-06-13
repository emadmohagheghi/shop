'use client';
import { useNotificationStore } from '@/stores/notification.store';
import { NotificationToast } from './notification-toast';
import { NotificationProps } from './notification.type';
import { useEffect } from 'react';

export const Notifications: React.FC<NotificationProps> = () => {
  const notifications = useNotificationStore((state) => state.notifications);
  if (notifications.length < 1) return null;

  return (
    <div className="fixed flex flex-col-reverse top-20 lg:bottom-3 right-3 gap-3 z-90">
      {notifications.map((p) => {
        return (
          <NotificationToast key={`notification-${p.id}`} notification={p} />
        );
      })}
    </div>
  );
};
