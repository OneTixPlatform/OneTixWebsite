<template>
  <button
    class="flex items-center btn rounded-[12px] gap-2 btn justify-center"
    :disabled="loading"
  >
    <p class="font-semibold text-[16px]">{{ props.label }}</p>
    <MazSpinner v-if="loading" color="white" size="1em" />
  </button>
</template>
<script setup>
defineOptions({ inheritAttrs: true });
const props = defineProps({
  label: {
    type: String,
    default: "Button",
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
