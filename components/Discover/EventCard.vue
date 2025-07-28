<template>
  <NuxtLink :to="`/events/${eventData.id}`">
  <div class="h-[313px] relative max-w-[304px] w-full cursor-pointer">
    <div class="h-[147px] relative w-full overflow-hidden group rounded-[16px]">
      <img
        :src="eventData.imageUrl"
        alt="event-image"
        class="object-center object-cover h-full w-full rounded-[16px] transform transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div
        class="rounded-[16px] bg-[#334155E5] flex items-center gap-[6px] absolute bottom-2 right-2 px-[10px] py-[2px]"
      >
        <div class="h-[8px] w-[8px] rounded-full bg-white"></div>
        <span v-if="eventData?.isFree" class="text-[12px] text-white"
          >Free</span
        >
        <span v-if="eventData?.price" class="text-[12px] text-white">{{
          formatCurrency(eventData.price)
        }}</span>
      </div>
    </div>
    <div class="mt-[12px] flex flex-col gap-[6px]">
    
        <p
          class="font-medium text-[18px] hover:underline text-gray-background-8 leading-[23px] dark:text-[#EFF2F4]"
        >
          {{ eventData.title }}
        </p>


      <p class="text-[#64748B] clamp-3 text-[14px dark:text-[#CED4DA]">
        {{ eventData.description }}
      </p>
      <div class="flex items-center gap-[8px]">
        <span
          class="text-[14px] leading-[18px] dark:text-[#EFF2F4] text-gray-background-8"
          >{{ formatDate(eventData.eventDate) }}</span
        >
        <div class="flex items-center gap-[8px] text-gray-background-8">
          <div
            class="h-[8px] w-[8px] rounded-full bg-[#64748B] dark:bg-[#CED4DA]"
          ></div>
          <span class="text-[14px] leading-[18px] dark:text-[#EFF2F4]">{{
            formatTime(eventData.eventDate)
          }}</span>
        </div>
      </div>
    </div>
    <!-- Left Circle Cut -->
    <div
      class="absolute top-[75px] -translate-y-1/2 -left-[15px] h-[40px] w-[40px] rounded-full bg-white dark:bg-black-highest z-10"
    ></div>

    <!-- Right Circle Cut -->
    <div
      class="absolute top-[75px] -translate-y-1/2 -right-[15px] h-[40px] w-[40px] rounded-full bg-white dark:bg-black-highest z-10"
    ></div>
  </div>
  </NuxtLink>

</template>

<script setup>
import details from "@/assets/images/img/details.png";
import { formatDate, formatTime, formatCurrency } from "@/utils/helpers";

const props = defineProps(["eventData"]);
</script>

<style scoped></style>
