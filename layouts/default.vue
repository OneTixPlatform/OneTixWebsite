<template>
  <div class="">
    <CommonNavigation />
    <div class="flex-1">
      <slot />
    </div>
    <CommonFooter />
  </div>
</template>

<script setup lang="ts">
import LogoIcon from "@/assets/images/logo/logoIcon.png";

useHead({
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: LogoIcon,
    },
  ],
});
</script>

<style scoped></style>
