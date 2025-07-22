<template>
  <header
    class="sticky top-0 right-0 bg-transparent cursor-pointer py-[16px] px-[20px] xl:py-[20px] flex justify-between items-center xl:bg-secondary-1 xl:dark:bg-black-highest xl:px-[84px]"
  >
    <!-- logo -->
    <div class="w-[140px] h-[48px]">
      <img
        :src="isDark ? oneTixWhite : oneTix"
        alt="one-tix"
        class="w-full h-full object-contain object-center"
      />
    </div>

    <!-- routes -->
    <div class="hidden cursor-pointer xl:flex">
      <ul class="flex gap-[32px]">
        <li
          v-for="(link, index) in links"
          :key="index"
          class="text-[16px] cursor-pointer transform hover:translate-y-[-3px] transition-all duration-500 hover:px-[1.5px] font-regular text-gray-background-8"
        >
          <NuxtLink
            :to="link.path"
            :class="[
              route.path === link.path
                ? 'text-primary-6 font-medium'
                : 'text-gray-background-8 transition-all duration-500 dark:text-white  hover:text-primary-6 ',
            ]"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- login -->
    <div class="flex items-center cursor-pointer">
      <span
        class="px-[24px] dark:text-white hidden xl:flex py-[8px] font-semibold text-[16px]"
        >Login</span
      >
      <button
        class="bg-primary-5 hidden xl:flex h-[48px] items-center justify-center rounded-[50px] text-white px-[16px] py-[8px]"
      >
        Get started
      </button>
      <IconsHamburger v-if="!isDark" class="flex xl:hidden cursor-pointer" />
      <IconsHamburgerLight
        v-if="isDark"
        class="flex xl:hidden cursor-pointer"
      />
      <div @click="toggleDark" class="px-[12px] py-[7px]">
        <IconsMoon v-if="!isDark" />
        <IconsSunshine v-else />
      </div>
    </div>
  </header>
</template>

<script setup>
import oneTix from "@/assets/images/logo/onetix.png";
import oneTixWhite from "@/assets/images/logo/onetixWhite.png";
import { useRoute } from "vue-router";

const route = useRoute();

const isDark = ref(false);

onMounted(() => {
  isDark.value =
    localStorage.theme === "dark" ||
    document.documentElement.classList.contains("dark");
});

const links = [
  { name: "Discover events", path: "/" },
  { name: "How Onetix works", path: "/How" },
  { name: "Pricing", path: "/contact" },
  { name: "About us", path: "/contact" },
];

// function for toggling dark mode
function toggleDark() {
  const html = document.documentElement;
  html.classList.toggle("dark");
  const isNowDark = html.classList.contains("dark");
  localStorage.theme = html.classList.contains("dark") ? "dark" : "light";
  isDark.value = isNowDark;
}
</script>
