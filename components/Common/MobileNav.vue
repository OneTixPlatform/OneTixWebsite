<template>
  <div
    class="fixed top-0 flex transition-all duration-700 flex-col z-99999 lg:hidden right-0 h-screen bg-white dark:bg-black-highest w-full"
  >
    <header
      class="py-[16px] flex justify-between w-full h-[80px] items-center px-[20px]"
    >
      <NuxtLink :to="'/'">
        <div class="w-[140px] h-[48px]">
          <ClientOnly>
            <img
              :src="isDark ? oneTixWhite : oneTix"
              alt="one-tix"
              class="w-full h-full object-contain object-center"
            />
          </ClientOnly>
        </div>
      </NuxtLink>
      <div class="flex items-center">
        <div @click="emit('close')" class="p-[14px] cursor-pointer">
          <IconsClose2 />
        </div>

        <div class="px-[12px] py-[7px]">
          <ClientOnly>
            <IconsMoon v-if="!isDark" @click="toggleDark" />
            <IconsSunshine v-else @click="toggleDark" />
          </ClientOnly>
        </div>
      </div>
    </header>
    <div class="px-[16px] flex h-full flex-col justify-between mt-[18px]">
      <ul class="flex flex-col items-center">
        <li v-for="(link, index) in links" :key="index" class="py-[14px]">
          <NuxtLink
            :to="link.path"
            @click.prevent="handleNav(link.path)"
            :class="[
              route.path === link.path
                ? 'text-primary-6 font-medium'
                : 'text-gray-background-8 text-[16px] py-[14px] leading-[12px] transition-all duration-500 dark:text-white  hover:text-primary-6 ',
            ]"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
      <div class="mb-[44px] flex flex-col items-center">
        <p
          class="py-[14px] text-gray-background-8 text-[16px] dark:text-white px-[24px]"
        >
          Login
        </p>
        <CommonButton
          style="box-shadow: 0px 4px 12px 0px #0a0d120d"
          label="Get started"
          class="bg-primary-5 text-white w-full !text-[16px] !font-semibold py-[8px] px-[16px] rounded-[50px] !h-[48px]"
        />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import oneTix from "@/assets/images/logo/onetix.png";
import oneTixWhite from "@/assets/images/logo/onetixWhite.png";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { nextTick } from "vue";

const router = useRouter();

function handleNav(path: string) {
  router.push(path);
  // Delay the menu close so routing settles
  setTimeout(() => {
    emit("close");
  }, 150); // smooth transition, you can adjust the delay
}

const route = useRoute();
const emit = defineEmits(["close"]);
const links = [
  { name: "Discover events", path: "/" },

  { name: "Pricing", path: "/how" },
  { name: "About us", path: "/" },
  { name: "Contact us", path: "/" },
];

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

function toggleDark() {
  colorMode.preference = isDark.value ? "light" : "dark";
}
</script>

<style scoped></style>
