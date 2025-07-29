<template>
  <div class="">
    <CommonNavigation @showMobileNav="showMobileNav = true" />
    <div class="flex-1">
      <slot />
    </div>
    <CommonFooter />
  </div>
  <CommonMobileNav v-if="showMobileNav" @close="showMobileNav = false" />
</template>

<script setup lang="ts">
import LogoIcon from "@/assets/images/logo/logoIcon.png";

const showMobileNav = ref(false);

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
