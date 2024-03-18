import { getMessaging, getToken } from "firebase/messaging";
import app from "../firebase";

export const getDeviceToken = async () => {
  const isAccessible = await Notification.requestPermission();
  console.log("isAccessible", isAccessible);
  if (isAccessible !== "granted") {
    console.log("Notification permission is denied");
    return;
  }

  const messaging = getMessaging(app);
  const deviceToken = await getToken(messaging, {
    vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY
  });
  return deviceToken;
};