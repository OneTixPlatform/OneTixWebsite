// utils/dateFormatter.js or plugins/dayjs.ts
import dayjs from "dayjs";
import {
  doc,
  writeBatch,
  serverTimestamp,
  increment,
  collection,
} from "firebase/firestore";
import { useFirestore } from "vuefire";

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

// setdata
export async function setData(
  ticket: { id: string; available: number; name: string },
  email: string,
  amount: number,
  ticketCount: number,
  event: { id: string },
  name: string,
  response: { reference: string; transaction: string; receipt_url?: string },
  platformFees: number,
  mode: "paystack" | "cash" = "paystack",
) {
  const db = useFirestore();
  const batch = writeBatch(db);

  // Generate document references with auto-IDs
  const purchaseRef = doc(collection(db, "purchases"));
  const ticketRef = doc(collection(db, "tickets"));
  const ticketTypeRef = doc(db, "ticketTypes", ticket.id);

  // Add purchase document
  batch.set(purchaseRef, {
    eventId: event.id,
    ticketTypeId: ticket.id,
    buyerName: name,
    buyerEmail: email,
    ticketCount,
    amount,
    platformFees,
    ticketName: ticket.name,
    transactionId: response.transaction,
    mode,
    paymentRef: response.reference,
    receiptUrl: response.receipt_url ?? null,
    createdAt: serverTimestamp(),
  });

  // Add ticket document
  batch.set(ticketRef, {
    eventId: event.id,
    ticketTypeId: ticket.id,
    purchaseId: purchaseRef.id,
    buyerName: name,
    buyerEmail: email,
    isUsed: false,
    ticketName: ticket.name,
    usedAt: null,
    count: ticketCount,
    createdAt: serverTimestamp(),
  });

  // Update ticket type available count
  batch.update(ticketTypeRef, {
    available: increment(-ticketCount),
  });

  try {
    await batch.commit();
    // console.log("✅ Firebase batch committed successfully.");
    return ticketRef.id;
  } catch (error) {
    console.error("❌ Error committing batch:", error);
    throw error;
  }
}
