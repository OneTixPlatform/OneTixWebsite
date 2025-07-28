<template>
  <div
    class="h-[728px] flex flex-col gap-[25px] items-center justify-center text-center"
  >
    <p class="text-gray-background-9 font-medium text-[20px]">Leave Checkout</p>
    <p class="w-full max-w-[352px] text-[#64748B] text-[14px]">
      Leaving checkout now could result in losing your selected items. Are you
      sure you want to continue?
    </p>
    <div class="flex gap-4 justify-center h-[40px]">
      <CommonButton
        label="STAY"
        @click="$emit('stay')"
        class="border border-[#E2E8F0] px-[16px] text-[14px] !text-[#475569] py-[8px] w-[132px]"
      />
      <CommonButton
        label="LEAVE"
        @click="$emit('close')"
        class="bg-primary-5 !text-white h-full font-semibold text-[16px] w-[134px] px-[16px] py-[8px]"
      />
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close", "stay"]);
</script>

<style scoped></style>
