<template>
  <div
    class="px-[24px] fixed z-999 lg:z-0 lg:relative bottom-2 left-0 w-full flex py-[20px] xl:flex flex-col bg-white rounded-[12px] border-[1px] border-[#E2E8F0] gap-[14px]"
  >
    <p
      class="font-medium px-2 hidden lg:flex text-[16px] text-gray-background-8"
    >
      {{ eventData.title }}
    </p>
    <p
      v-if="eventData.price > 0"
      class="text-secondary-5 px-2 hidden lg:flex text-[16px] font-regular"
    >
      From {{ formatCurrency(eventData.price) }}
    </p>
    <p
      v-if="eventData.isFree"
      class="text-secondary-5 hidden lg:flex px-2 text-[16px] font-regular"
    >
      Free
    </p>
    <div
      @click="$emit('showCheckout')"
      class="lg:w-[324px] cursor-pointer w-full h-[48px] relative flex justify-center items-center font-600 text-[18px] text-white rounded-[8px] bg-primary-5"
    >
      <span class="">GET TICKET</span>
      <div
        class="h-[22px] w-[28px] bg-white top-[15px] -left-1.5 rounded-full absolute"
      ></div>
      <div
        class="h-[22px] w-[28px] bg-white top-[15px] -right-1.5 rounded-full absolute"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { formatCurrency } from "@/utils/helpers";
const props = defineProps(["eventData"]);
const emit = defineEmits(["showCheckout"]);
</script>

<style lang="scss" scoped></style>
