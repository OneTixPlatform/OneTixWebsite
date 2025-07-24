<template>
  <div
    class="px-[24px] hidden lg:flex py-[20px] flex flex-col bg-white rounded-[12px] border-[1px] border-[#E2E8F0] gap-[14px]"
  >
    <p class="font-medium px-2 text-[16px] text-gray-background-8">
      ÁLÓ - A FOLK MUSIC CONCERT EXPEREINCE
    </p>
    <p class="text-secondary-5 px-2 text-[16px] font-regular">₦25,00.00</p>
    <img :src="Group17" alt="group-17" class="w-full max-w-[500px]" />
  </div>
</template>

<script lang="ts" setup>
import getTicket from "@/assets/images/img/getTicket.png";
import Group17 from "@/assets/images/img/Group 17.png";
const props = defineProps<{
  event: {
    name: string;
    price: number;
  };
}>();
</script>

<style lang="scss" scoped></style>
