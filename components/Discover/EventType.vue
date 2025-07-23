<template>
  <div
    class="h-[136px] w-[110px] flex flex-col justify-center gap-[10px] shrink-0 items-center py-[20px] px-[12px] bg-white dark:bg-[#262A2F] rounded-[16px]"
  >
    <component :is="event.icon" />
    <p
      class="text-[13px] h-[36px] font-regular leading-[18px] text-center text-gray-background-8 dark:text-[#EFF2F4]"
    >
      {{ event.description }}
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  event: {
    description: string;
    icon: any;
  };
}>();
</script>

<style lang="scss" scoped></style>
