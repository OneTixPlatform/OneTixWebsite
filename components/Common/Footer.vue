<template>
  <div
    style="
      clip-path: polygon(20% 1%, 79% 11%, 100% 11%, 100% 100%, 0 100%, 0 10%);
    "
    class="bg-black-highest sm:px-8 px-4 py-4 relative z-[100] -mt-[60px] w-full flex flex-col items-center"
  >
    <div
      class="w-full mt-[121px] flex flex-col gap-[16px] items-center justify-center"
    >
      <h1 class="font-bold lg:text-[36px] text-[24px] text-white text-center">
        Events You Love. Tickets You Trust
      </h1>
      <p
        class="lg:text-[16px] text-[14px] text-white w-full max-w-[745px] text-center"
      >
        Whether it’s music, sports or your favourite underground party Onetix is
        where your best memories begin. Find your moment. Be there.
      </p>
    </div>
    <div class="flex gap-[29px] text-white mt-8 items-center justify-center">
      <button
        class="border-[1px] border-white py-[6px] px-[12px] text-center rounded-[16px]"
      >
        Contact us
      </button>
      <button
        class="border-[1px] border-white py-[6px] px-[12px] text-center rounded-[16px]"
      >
        About us
      </button>
    </div>

    <div
      class="flex flex-wrap justify-between items-center w-full mt-8 max-w-[1275px]"
    >
      <!-- logo -->
      <div class="sm:w-[140px] sm:h-[48px] h-[40px] w-[120px]">
        <img
          :src="oneTixWhite"
          alt="one-tix"
          class="w-full h-full object-contain object-center"
        />
      </div>

      <div
        class="text-white w-full lg:w-auto text-center mt-4 lg:mt-0 lg:order-none order-last text-[16px]"
      >
        <p>© 2025 Onetix. All Rights Reserved.</p>
      </div>

      <div class="flex items-center gap-[16px]">
        <CommonFooterLogo
          v-for="(icon, index) in footerIcons"
          :key="index"
          :icon="icon.icon"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import oneTixWhite from "@/assets/images/logo/onetixWhite.png";
import IconsFaceBook from "@/components/icons/FaceBook.vue";
import IconsLinkedIn from "@/components/icons/LinkedIn.vue";
import IconsTwitter from "@/components/icons/Twitter.vue";

const footerIcons = [
  { name: "Facebook", icon: IconsFaceBook },
  { name: "LinkedIn", icon: IconsLinkedIn }, // Replace with actual LinkedIn icon component
  { name: "Twitter", icon: IconsTwitter }, // Replace with actual Twitter icon component
];
</script>

<style scoped></style>
