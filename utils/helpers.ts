export function getDayWithSuffix(day: number) {
  if (day > 3 && day < 21) return `${day}th`;
  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
}

export function formatEventDate(timestamp?: {
  seconds: number;
  nanoseconds: number;
}) {
  if (!timestamp || !timestamp.seconds) {
    return {
      formattedDate: "Date unavailable",
      formattedTime: "Time unavailable",
    };
  }

  const dateObj = new Date(timestamp.seconds * 1000);

  const day = getDayWithSuffix(dateObj.getDate());
  const month = dateObj.toLocaleString("default", { month: "long" });
  const year = dateObj.getFullYear();

  const time = dateObj.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return {
    formattedDate: `${day}, ${month} ${year}`,
    formattedTime: time,
  };
}
