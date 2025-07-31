<template>
  <!-- Full-width section with background -->
  <div
    class="w-full bg-white dark:bg-black-highest px-4 lg:px-[82px] py-[150px] -mt-[130px] -mb-[80px] sm:-mb-[60px]"
  >
    <!-- Centered content -->
    <div
      class="flex flex-col lg:flex-row 2xl:max-w-[1320px] 2xl:mx-auto items-center lg:items-start gap-[24px] lg:gap-[130px]"
    >
      <!-- Text Block -->
      <div
        class="w-full max-w-[623px] mt-[20px] lg:mt-[147px] flex flex-col items-center lg:items-start gap-[24px]"
      >
        <h1
          class="text-[46px] font-extrabold text-center lg:text-start dark:text-[#EFF2F4]"
        >
          Why People Choose the OneTix App
        </h1>
        <div class="flex flex-col gap-[20px]">
          <div
            v-for="(item, index) in why"
            :key="index"
            class="flex items-center gap-2"
          >
            <IconsRedSuccess />
            <p class="text-[#475569] dark:text-[#EFF2F4] text-[18px]">
              {{ item.item }}
            </p>
          </div>
        </div>
      </div>

      <!-- Image Block -->
      <div class="h-[715px] max-w-[417px] w-full">
        <img
          :src="isDark ? ticketDark : ticketlight"
          alt=""
          class="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ticketlight from "@/assets/images/img/TicketLight.png";
import ticketDark from "@/assets/images/img/TicketDark.png";

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");
const why = [
  {
    item: "Zero stress setup: Create and launch events in a few clicks",
  },
  {
    item: "Straight-up pricing: Just 5% + ₦100 per ticket. You get to choose who pays for it",
  },
  {
    item: "Fast payments: Get your cash straight to your account",
  },
  {
    item: "Flexible ticketing: Discount codes, early birds, VIPs — it’s your call+/38 s",
  },
  {
    item: "Real-time reports: Stay on top of sales, engagement, and what’s working",
  },
  {
    item: "Built-in integrations: Google Maps. Uber. Payment systems. All synced",
  },
];
</script>

<style scoped></style>
