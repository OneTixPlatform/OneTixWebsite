<template>
  <NuxtLink :to="link">
  <div
    class="h-[39px] w-[39px] flex items-center cursor-pointer justify-center bg-[#334155] rounded-[19.5px]"
  >
    <component :is="icon" />
  </div>
  </NuxtLink>

</template>

<script setup lang="ts">
const props = defineProps<{
  icon: any;
  link:string
}>();
</script>

<style scoped></style>
