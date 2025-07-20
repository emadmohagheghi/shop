"use client";
import { NotificationType } from "@/types/notification.types";
import { useEffect, useState } from "react";
import { Progress } from "../progress/progress";
import {
  NotificationBing,
  CloseCircle,
} from "iconsax-react";
import { NotificationToastProps } from "./notification.type";
import { useNotificationStore } from "@/stores/notification.store";

const notificationTypes: Record<NotificationType, string> = {
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
};

export const NotificationToast: React.FC<NotificationToastProps> = ({
  notification: { id, message, type, duration = 5000 },
}) => {
  const dismissNotification = useNotificationStore(
    (state) => state.dismissNotification,
  );
  const [progessValue, setProgressValue] = useState<number>(100);
  useEffect(() => {
    const interval = duration / 100;
    const intervalId = setInterval(() => {
      setProgressValue((oldValue) =>
        Math.max(oldValue - 100 / (duration / interval), 0),
      );
    }, interval);
    return () => clearInterval(intervalId);
  }, [duration]);
  return (
    <div className="animate-show-notification relative m-0 flex w-full max-w-xs items-center gap-3 rounded-lg bg-gray-800 p-4 text-gray-400 shadow">
      <div
        className={`inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md ${notificationTypes[type]}`}
      >
        <NotificationBing size={20} color="white" />
      </div>
      <div className="text-sm font-semibold">{message}</div>
      <button
        className="mt-2 mr-auto hover:text-white"
        onClick={() => dismissNotification(id)}
      >
        <CloseCircle className="cursor-pointer" color="white" size={20} />
      </button>
      <Progress
        className="!absolute right-2 bottom-1 left-2 !w-auto"
        size="tiny"
        variant={type}
        value={progessValue}
      />
    </div>
  );
};
