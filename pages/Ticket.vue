<template>
  <div
    class="w-full flex flex-col lg:flex-row items-center lg:items-start pt-[48px] pb-[119px] gap-[146px] 2xl:justify-center lg:px-[142px] px-4 bg-[#F8FAFC]"
  >
    <div
      v-if="ticketEvent"
      id="ticket-pdf-content"
      class="flex flex-col items-center text-center gap-10"
      style="
        position: absolute;
        left: -9999px;
        top: 0;
        width: 800px;
        padding: 80px 40px;
        background: white;
        font-family: &quot;Arial&quot;, sans-serif;
      "
    >
      <!-- Logo -->
      <div>
        <img :src="oneTix" alt="one-tix logo" style="height: 120px" />
      </div>

      <!-- Event Info -->
      <div style="max-width: 600px">
        <h2 style="font-size: 38px; font-weight: 700; margin-bottom: 20px">
          {{ ticketEvent.title }}
        </h2>
        <p style="font-size: 22px; margin-bottom: 10px">
          <strong>Date:</strong> {{ formatDate(ticketEvent.eventDate) }}
        </p>
        <p style="font-size: 22px; margin-bottom: 10px">
          <strong>Time:</strong> {{ formatTime(ticketEvent.eventDate) }}
        </p>
        <p style="font-size: 22px">
          <strong>Location:</strong> {{ ticketEvent.location }}
        </p>
      </div>

      <!-- Buyer Info -->
      <div style="max-width: 600px; font-size: 24px">
        <p style="margin-bottom: 10px">
          <strong>Name:</strong> {{ userTicket.buyerName }}
        </p>
        <p><strong>Type:</strong> {{ userTicket.ticketName }}</p>
        <p><strong>Tickets:</strong> {{ userTicket.count }}</p>
      </div>

      <!-- QR Code -->
      <div style="margin-top: 30px; width: 420px; height: 420px">
        <Qrcode
          :value="ticketStore.currentUserTicket"
          :size="700"
          variant="pixelated"
          :foreground="qrColors.foreground"
          :background="qrColors.background"
        />
      </div>
    </div>

    <div
      v-if="userTicket && ticketEvent"
      class="bg-white shadow-[0px_4px_10px_#00000014] relative lg:h-[715px] border border-[#E2E8F0] py-[14px] rounded-[24px] px-[12px] max-w-[470px] w-full"
    >
      <div
        class="absolute bottom-4 flex flex-col gap-[4px] items-center right-4"
      >
        <p class="sm:text-[11px] text-[8px] text-[#475569]">Powered by</p>
        <div class="sm:h-[27px] h-[20px] w-[60px] sm:w-[80px]">
          <img :src="oneTix" alt="one-tix" class="w-full h-full" />
        </div>
      </div>
      <div class="h-[215px] w-full rounded-[16px]">
        <img
          :src="ticketEvent.imageUrl"
          alt=""
          class="object-cover rounded-[16px] h-full w-full object-center"
        />
      </div>
      <div class="mt-[13px] h-[192px] px-[23px] w-full">
        <h1 class="font-bold text-[24px] leading-[32px] text-gray-background-8">
          {{ ticketEvent.title }}
        </h1>
        <div class="flex mb-4 justify-between mt-[16px]">
          <div>
            <p class="text-[14px] text-[#64748B]">Date</p>
            <p class="font-medium text-[16px] text-gray-background-8">
              {{ formatDate(ticketEvent.eventDate) }}
            </p>
          </div>
          <div>
            <p class="text-[14px] text-[#64748B]">Time</p>
            <p class="font-medium text-[16px] text-gray-background-8">
              {{ formatTime(ticketEvent.eventDate) }}
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-[4px] mt-[8px]">
          <p class="text-[14px] text-[#64748B]">Location</p>
          <p class="font-medium text-[16px] text-gray-background-8">
            {{ ticketEvent.location }}
          </p>
        </div>
      </div>
      <div class="lg:mt-[40px] mt-[20px] w-full flex justify-center">
        <IconsDottedLine />
      </div>

      <div class="mt-[48px] flex gap-4 pl-[30px] pr-[23px]">
        <Qrcode
          :value="ticketStore.currentUserTicket"
          variant="pixelated"
          height="100"
          width="100"
          :foreground="qrColors.foreground"
          :background="qrColors.background"
        />
        <div class="flex flex-col gap-[6px]">
          <p class="text-secondary-5 font-semibold text-[18px]">
            {{ userTicket.ticketName }}
          </p>
          <p class="text-secondary-5 font-semibold text-[18px]">
            {{ userTicket.count }} ticket(s)
          </p>
          <!-- <p class="text-[15px] font-bold text-gray-background-8">₦200,000.00</p> -->
          <p class="text-[14px] text-gray-background-8">
            {{ userTicket.buyerName }}
          </p>
        </div>
      </div>

      <!-- Left Circle -->
      <div
        class="absolute rounded-full border-r border-[#E2E8F0] bg-[#F8FAFC] lg:-left-[41px] bottom-[140px] -left-[10px] lg:bottom-48 h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[70px] md:w-[70px] lg:h-[81px] lg:w-[81px]"
      ></div>

      <!-- Right Circle -->
      <div
        class="absolute rounded-full border-l border-[#E2E8F0] bg-[#F8FAFC] lg:-right-[41px] -right-[10px] bottom-[140px] lg:bottom-48 h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[70px] md:w-[70px] lg:h-[81px] lg:w-[81px]"
      ></div>
    </div>

    <!-- skeleton loader -->
    <div
      v-else
      class="bg-white shadow-[0px_4px_10px_#00000014] relative lg:h-[715px] border border-[#E2E8F0] py-[14px] rounded-[24px] px-[12px] max-w-[500px] w-full"
    >
      <div class="h-[215px] w-full skeleton rounded-[16px]"></div>
      <div class="w-full h-[30px] rounded-[16px] skeleton mt-[20px]"></div>
      <div class="flex justify-between gap-4">
        <div class="h-[20px] rounded-[16px] w-full skeleton mt-[20px]"></div>
        <div class="h-[20px] rounded-[16px] w-full skeleton mt-[20px]"></div>
      </div>
      <div class="w-full h-[30px] rounded-[16px] skeleton mt-[20px]"></div>

      <div class="h-[80px] rounded-[16px] w-full skeleton mt-[150px]"></div>
    </div>

    <div
      v-if="userTicket && ticketEvent"
      class="max-w-[352px] w-full flex flex-col items-center gap-[16px] px-4 lg:mt-[46px]"
    >
      <IconsSuccess />
      <div class="text-center max-w-[352px] w-full flex flex-col gap-[4px]">
        <p class="text-gray-background-9 font-medium text-[20px]">
          Your ticket is ready
        </p>
        <p class="text-[14px] text-[#64748B]">
          Click the button below to download ticket. You can also see it in your
          email.
        </p>
      </div>
      <div
        class="flex bg-[#F1F5F9] px-[16px] rounded-[12px] gap-[4px] py-[12px] items-center"
      >
        <IconsBulb />
        <p class="text-[13px] text-[#475569]">
          Please make sure you have your ticket to present in the event.
        </p>
      </div>
      <CommonButton
        class="w-full !h-[48px] text-white !bg-primary-5"
        label="DOWNLOAD TICKET"
        :loading="loading"
        @click="downloadTicketPdf"
      />
    </div>
  </div>
</template>

<script setup>
import oneTix from "@/assets/images/logo/onetix.png";
import { doc, getDoc } from "firebase/firestore";
import { useFirestore } from "vuefire";
import { formatDate, formatTime } from "@/utils/helpers";
import html2canvas from "html2canvas";

const db = useFirestore();
const colorMode = useColorMode();
const ticketStore = useTicketStore();
const userTicket = ref(null);
const ticketEvent = ref(null);
const loading = ref(false);

async function fetchTicketById(ticketId) {
  const ticketDocRef = doc(db, "tickets", ticketId);
  const ticketSnapshot = await getDoc(ticketDocRef);

  if (!ticketSnapshot.exists()) {
    console.warn("⚠️ Ticket not found for ID:", ticketId);
    return;
  }

  const ticket = ticketSnapshot.data();
  ticket.id = ticketSnapshot.id;
  userTicket.value = ticket;

  if (ticket?.eventId && typeof ticket.eventId === "string") {
    await fetchEventById(ticket.eventId);
  } else {
    console.warn("⚠️ No valid eventId found in ticket:", ticket);
  }
}

async function fetchEventById(eventId) {
  const eventDocRef = doc(db, "events", eventId);
  const eventSnapshot = await getDoc(eventDocRef);

  if (!eventSnapshot.exists()) {
    console.warn("⚠️ Event not found for ID:", eventId);
    return;
  }

  const event = eventSnapshot.data();
  event.id = eventSnapshot.id;
  ticketEvent.value = event;
}

const qrColors = computed(() => {
  return {
    foreground: colorMode.value === "dark" ? "#FFFFFF" : "#000000",
    background: "transparent",
  };
});

let jsPDF;
try {
  jsPDF = (await import("jspdf/dist/jspdf.umd.min.js")).jsPDF;
} catch (e) {
  console.error("Failed to load jsPDF UMD:", e);
}

const downloadTicketPdf = async () => {
  loading.value = true;
  await nextTick();

  const element = document.getElementById("ticket-pdf-content");
  if (!element) {
    console.warn("❌ ticket-pdf-content not found");
    loading.value = false;
    return;
  }

  try {
    const { default: html2canvas } = await import("html2canvas");
    const { jsPDF } = await import("jspdf/dist/jspdf.umd.min.js");

    // Capture canvas at medium quality
    const canvas = await html2canvas(element, {
      scale: 1.5,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    // Compress to JPEG
    const imgData = canvas.toDataURL("image/jpeg", 0.85);

    // Initialize PDF with compression
    const pdf = new jsPDF("p", "mm", "a4", true);
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgHeight = (canvas.height * pageWidth) / canvas.width;
    let position = 0;
    let remainingHeight = imgHeight;

    // Add first page
    pdf.addImage(imgData, "JPEG", 0, position, pageWidth, imgHeight);
    remainingHeight -= pageHeight;

    // Additional pages if needed
    while (remainingHeight > 0) {
      position = -remainingHeight + imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "JPEG", 0, position, pageWidth, imgHeight);
      remainingHeight -= pageHeight;
    }

    pdf.save(`${userTicket.value.id}.pdf`);
  } catch (error) {
    console.error("📛 Error generating PDF:", error);
  } finally {
    loading.value = false;
  }
};

onUnmounted(() => {
  ticketStore.$reset();
});

onMounted(async () => {
  // const ticketId = ticketStore.currentUserTicket;
  // if (!ticketId) {
  //   console.warn("No ticket ID found in store. Redirecting...");
  //   useRouter().push("/");
  //   return;
  // }
  // fetchTicketById(ticketId);
  await nextTick(); // Let store update
  const ticketId = ticketStore.currentUserTicket;
  if (!ticketId) {
    useRouter().push("/");
    return;
  }
  fetchTicketById(ticketId);
});
</script>

<style lang="scss" scoped></style>
