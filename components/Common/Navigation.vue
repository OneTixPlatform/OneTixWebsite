<template>
  <div>
    <!-- Spacer to prevent layout jump when header becomes fixed -->
    <div v-if="isScrolled" class="h-[80px] bg-red-400 xl:h-[88px]"></div>
    <header
      :class="[
        isScrolled
          ? 'bg-white xl:bg-secondary-1 dark:bg-black-highest  fixed top-0 right-0 z-50'
          : '',
        'w-full cursor-pointer py-[16px] transition-transform duration-700 px-[20px] xl:py-[20px] flex justify-between items-center bg-secondary-1 dark:bg-black-highest xl:px-[84px]',
      ]"
    >
      <!-- logo -->
      <NuxtLink :to="'/'">
        <div class="lg:w-[140px] lg:h-[48px] w-[120px] h-[38px]">
          <ClientOnly>
            <img
              :src="isDark ? oneTixWhite : oneTix"
              alt="one-tix"
              class="w-full h-full object-contain object-center"
            />
          </ClientOnly>
        </div>
      </NuxtLink>

      <!-- routes -->
      <div class="hidden cursor-pointer lg:flex">
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
          class="px-[24px] text-gray-background-8 dark:text-white hidden lg:flex py-[8px] font-semibold text-[16px]"
          >Login</span
        >
        <button
          class="bg-primary-5 hidden lg:flex h-[48px] items-center justify-center rounded-[50px] text-white px-[16px] py-[8px]"
        >
          Get started
        </button>
        <IconsHamburger
          @click="emit('showMobileNav')"
          v-if="!isDark"
          class="flex lg:hidden cursor-pointer"
        />
        <IconsHamburgerLight
          @click="emit('showMobileNav')"
          v-if="isDark"
          class="flex lg:hidden cursor-pointer"
        />
        <div class="px-[12px] py-[7px]">
          <ClientOnly>
            <IconsMoon v-if="!isDark" @click="toggleDark" />
            <IconsSunshine v-else @click="toggleDark" />
          </ClientOnly>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import oneTix from "@/assets/images/logo/onetix.png";
import oneTixWhite from "@/assets/images/logo/onetixWhite.png";
import { useRoute } from "vue-router";

const route = useRoute();

const isScrolled = ref(false);

const emit = defineEmits(["showMobileNav"]);
//Define helper functions
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

//Define lifecycle hooks
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const links = [
  { name: "Discover events", path: "/" },
  { name: "How Onetix works", path: "/How" },
  { name: "Pricing", path: "/" },
  { name: "About us", path: "/" },
];

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

function toggleDark() {
  colorMode.preference = isDark.value ? "light" : "dark";
}
</script>
