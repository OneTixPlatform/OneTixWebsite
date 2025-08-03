<template>
  <div
    class="h-full flex flex-col gap-[24px] justify-center lg:justify-normal items-center w-full"
  >
    <IconsSuccess class="lg:mt-[150px]" />
    <div class="flex flex-col gap-[4px] text-center">
      <p class="text-[20px] text-gray-background-9 font-medium">
        ORDER SUCCESSFUL
      </p>
      <p class="text-[14px] text-[#64748B]">Taking you to your ticket now...</p>
      <!-- <CommonButton
        @click="goToTicket"
        label="VIEW MY TICKET"
        class="bg-primary-5 mt-4 cursor-pointer text-[16px] text-white max-w-[300px] w-full rounded-[16px] px-[16px] py-[8px]"
      /> -->
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

async function goToTicket() {
  try {
    await router.push("/ticket");
  } catch (err) {
    console.error("❌ Navigation failed:", err);
  }
}

onMounted(() => {
  setTimeout(() => {
    goToTicket();
  }, 4000);
});
</script>

<style lang="scss" scoped></style>
