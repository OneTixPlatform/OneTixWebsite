<template>
  <div
    class="h-[39px] w-[39px] flex items-center justify-center bg-[#FFFFFF33] rounded-[19.5px]"
  >
    <component :is="icon" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: any;
}>();
</script>

<style scoped></style>
