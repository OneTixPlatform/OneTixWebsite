<template>
  <div
    class="flex flex-col items-center px-4 bg-secondary-1 dark:bg-purple-brown w-full pt-[32px] pb-[94px]"
  >
    <div class="w-full max-w-[1156px]">
      <div class="h-auto bg-red-400 w-full rounded-[16px]">
        <img
          :src="details"
          alt="details-image"
          class="object-contain w-full h-full"
        />
      </div>
      <div
        class="flex flex-col lg:flex-row w-full text-gray-background-8 font-medium text-[16px] justify-between mt-[16px]"
      >
        <p>July 26, 2025</p>
        <div class="items-center hidden lg:flex gap-2">
          <IconsActivity />
          <p>Activity Fest</p>
        </div>
      </div>
      <p
        class="text-gray-background-8 font-bold leading-[44px] mt-2 text-[36px]"
      >
        ÁLÓ - A FOLK MUSIC CONCERT EXPERIENCE
      </p>
      <div class="flex items-center lg:hidden mt-[6px] gap-2">
        <IconsActivity />
        <p>Activity Fest</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import details from "@/assets/images/img/details.png";
import detailsHero from "@/assets/images/img/detailsHero.png";
</script>

<style scoped></style>
