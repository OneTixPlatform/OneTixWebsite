<template>
  <div
    class="flex flex-col relative items-center bg-secondary-1 dark:bg-purple-brown overflow-hidden px-4 w-full pt-[32px] pb-[94px]"
  >
    <div class="w-full max-w-[1156px]">
      <div v-if="eventData?.imageUrl" class="h-[380px] w-full rounded-[16px]">
        <img
          :src="eventData?.imageUrl"
          alt="details-image"
          class="object-cover object-center rounded-[16px] w-full h-full"
        />
      </div>
      <div
        class="flex flex-col lg:flex-row w-full text-gray-background-8 dark:text-[#CED4DA] font-medium text-[16px] mt-[16px]"
      >
        <p>{{ formatDate(eventData?.eventDate) }}</p>
        <!-- <div class="items-center hidden lg:flex gap-2">
          <IconsActivity />
          <p>Activity Fest</p>
        </div> -->
      </div>
      <p
        class="text-gray-background-8 dark:text-[#CED4DA] font-bold leading-[44px] mt-2 text-[36px]"
      >
        {{ eventData?.title }}
      </p>
      <!-- <div
        class="flex items-center dark:text-[#CED4DA] text-gray-background-8 lg:hidden mt-[6px] gap-2"
      >
        <IconsActivity />
        <p>Activity Fest</p>
      </div> -->
    </div>
    <div class="flex gap-4 -bottom-[15.5px] absolute">
      <div
        v-for="(circle, index) in 1000"
        :key="index"
        class="rounded-full h-[29px] w-[29px] bg-white dark:bg-black-highest"
      ></div>
    </div>
  </div>
</template>

<script setup>
import details from "@/assets/images/img/details.png";
import { formatDate, formatTime } from "@/utils/helpers";

const props = defineProps(["eventData"]);
</script>

<style scoped></style>
