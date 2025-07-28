// utils/dateFormatter.js or plugins/dayjs.ts
import dayjs from "dayjs";

// Format: 26th July, 2024
export function formatDate(timestamp: {
  seconds: number;
  nanoseconds: number;
}) {
  if (!timestamp?.seconds) return "";
  return dayjs.unix(timestamp.seconds).format("Do MMMM, YYYY");
}

// Format: 3:30 PM
export function formatTime(timestamp: {
  seconds: number;
  nanoseconds: number;
}) {
  if (!timestamp?.seconds) return "";
  return dayjs.unix(timestamp.seconds).format("h:mm A");
}

export function formatCurrency(amount: number) {
  if (typeof amount !== "number") return "";
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount);
}
