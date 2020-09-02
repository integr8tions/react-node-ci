export type NotificationType = "success" | "warning" | "error";

export interface NotificationInterface {
  type: NotificationType;
  description: string;
  postiion?: string;
  autoDelete?: boolean;
  dismissTime?: number;
}

export type NotificationList = NotificationInterface[];

export const getSuccessNotification = (description: string): NotificationInterface => ({
  type: "success",
  description,
});
