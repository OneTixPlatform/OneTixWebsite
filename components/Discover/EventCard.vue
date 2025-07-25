<template>
  <div class="h-[313px] relative max-w-[304px] w-full cursor-pointer">
    <div class="h-[147px] relative w-full overflow-hidden group rounded-[16px]">
      <img
        :src="details"
        alt=""
        class="object-center object-cover h-full w-full rounded-[16px] transform transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div
        class="rounded-[16px] bg-[#334155E5] flex items-center gap-[6px] absolute bottom-2 right-2 px-[10px] py-[2px]"
      >
        <div class="h-[8px] w-[8px] rounded-full bg-white"></div>
        <span class="text-[12px] text-white">Free</span>
      </div>
    </div>
    <div class="mt-[12px] flex flex-col gap-[6px]">
        <NuxtLink :to="'/events/24'">
 <p
        class="font-medium text-[18px] hover:underline text-gray-background-8 leading-[23px] dark:text-[#EFF2F4]"
      >
        ÁLÓ - A FOLK MUSIC CONCERT EXPEREINCE
      </p>
        </NuxtLink>

      <p class="text-[#64748B] text-[14px dark:text-[#CED4DA]">Activity Fest</p>
      <div class="flex items-center gap-[8px]">
        <span
          class="text-[14px] leading-[18px] dark:text-[#EFF2F4] text-gray-background-8"
          >Sat 26 July, 2025</span
        >
        <div class="flex items-center gap-[8px] text-gray-background-8">
          <div
            class="h-[8px] w-[8px] rounded-full bg-[#64748B] dark:bg-[#CED4DA]"
          ></div>
          <span class="text-[14px] leading-[18px] dark:text-[#EFF2F4]"
            >3:30 PM</span
          >
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
</template>

<script setup lang="ts">
import details from "@/assets/images/img/details.png";
</script>

<style scoped></style>
