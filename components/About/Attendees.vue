<template>
  <div
    style="clip-path: polygon(100% 0, 100% 99%, 80% 100%, 35% 94%, 0 100%, 0 0)"
    class="bg-[#F1F5F9] dark:bg-[#262A2F] py-[120px] -mt-[100px] z-0 lg:px-[88px] px-4 w-full"
  >
    <div
      class="flex flex-col lg:flex-row 2xl:mx-auto max-w-[1320px] w-full items-center gap-[30px] 2xl:gap-[15px]"
    >
      <div
        class="flex flex-col items-center sm:flex-row gap-[15px] 2xl:mx-auto sm:gap-[30px]"
      >
        <IconsDirectDark v-if="isDark" />
        <IconsDirect v-else />
        <div>
          <p
            class="text-[#334155] font-extrabold dark:text-[#EFF2F4] text-[20px] sm:text-[32px]"
          >
            For Organizers
          </p>
          <p class="text-[#334155] dark:text-[#EFF2F4] text-[18px]">
            We help you
          </p>
        </div>
      </div>
      <div
        class="flex flex-col items-center sm:flex-row gap-[15px] sm:gap-[30px]"
      >
        <IconsDirectLeftDark v-if="isDark" />
        <IconsDirectLeft v-else />
        <div>
          <p
            class="text-[#94A3B8] dark:text-[#CED4DA] font-extrabold text-[20px] sm:text-[32px]"
          >
            For Attendees
          </p>
          <p class="text-[#94A3B8] dark:text-[#CED4DA] text-[18px]">
            We make it easy to
          </p>
        </div>
      </div>
    </div>
    <div
      v-if="isDark"
      class="grid grid-cols-1 sm:grid-cols-2 mt-[48px] gap-[58px] place-items-center 2xl:mx-auto 2xl:max-w-[1120px] mb-[109px] w-full lg:grid-cols-4"
    >
      <div
        v-for="(item, index) in darkitems"
        :key="index"
        class="h-[212px] max-w-[268px] w-full"
      >
        <img
          :src="item.image"
          alt=""
          class="w-full object-contain object-center h-full"
        />
      </div>
    </div>
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 mt-[48px] gap-[58px] place-items-center 2xl:mx-auto 2xl:max-w-[1120px] mb-[109px] w-full lg:grid-cols-4"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="h-[212px] max-w-[268px] w-full"
      >
        <img
          :src="item.image"
          alt=""
          class="w-full object-contain object-center h-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import setUp from "@/assets/images/img/setUp.png";
import Offer from "@/assets/images/img/Offer.png";
import Watch from "@/assets/images/img/Watch.png";
import Recieve from "@/assets/images/img/Recieve.png";
import Make from "@/assets/images/img/Make.png";
import setUpDark from "@/assets/images/img/setUpDark.png";
import OfferDark from "@/assets/images/img/OfferDark.png";
import WatchDark from "@/assets/images/img/WatchDark.png";
import RecieveDark from "@/assets/images/img/RecieveDark.png";
import makeDark from "@/assets/images/img/mDark.png";

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

const items = [
  {
    image: setUp,
  },
  {
    image: Offer,
  },
  {
    image: Watch,
  },
  {
    image: Recieve,
  },
  {
    image: Make,
  },
];

const darkitems = [
  {
    image: setUpDark,
  },
  {
    image: OfferDark,
  },
  {
    image: WatchDark,
  },
  {
    image: RecieveDark,
  },
  {
    image: makeDark,
  },
];
</script>

<style scoped></style>
