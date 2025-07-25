<template>
  <div
    style="
      clip-path: polygon(
        100% 0,
        100% 32%,
        100% 88%,
        76% 100%,
        44% 92%,
        0 92%,
        0 0
      );
    "
    class="bg-secondary-1 h-[704px] flex flex-col py-[64px] items-center dark:bg-purple-brown"
  >
    <div class="flex flex-col px-2 text-center gap-[16px] sm:gap-[32px]">
      <div class="text-center px-4 sm:px-6 md:px-8">
        <!-- <div class="flex flex-col w-full  bg-red-400 sm:flex-row items-center justify-center sm:gap-4 relative z-0">
  <h1
    class="text-[29px] xs:text-[36px] md:text-[48px] lg:text-[60px] sm:leading-[56px] md:leading-[72px] font-extrabold text-gray-background-9 dark:text-[#EFF2F4]"
  >
    Find
  </h1>

  <img v-if="!isDark" :src="incredibleLight" class="w-full max-w-[611px] h-full max-h-[99px]" alt=""/>
    <img v-else :src="incredibleDark" class="w-full max-w-[611px]  h-full max-h-[99px]" alt=""/>
</div> -->
        <div
          class="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center sm:gap-4 relative z-0 w-full"
        >
          <!-- "Find" -->
          <h1
            class="text-[29px] xs:text-[36px] md:text-[48px] lg:text-[60px] sm:leading-[56px] md:leading-[72px] font-extrabold text-gray-background-9 dark:text-[#EFF2F4] mb-3 sm:mb-0"
          >
            Find
          </h1>

          <!-- Responsive image based on theme -->
          <ClientOnly>
            <img
              :src="isDark ? incredibleDark : incredibleLight"
              alt="Incredible Events"
              class="max-w-full sm:w-[420px] md:w-[500px] lg:w-[611px] h-auto"
            />
          </ClientOnly>
        </div>

        <!-- "and get inspired!" -->
        <h1
          class="text-[29px] xs:text-[36px] md:text-[48px] lg:text-[60px] font-extrabold text-gray-background-9 dark:text-[#EFF2F4] mt-4 sm:mt-2 sm:leading-[56px] md:leading-[72px]"
        >
          and get inspired!
        </h1>
      </div>

      <p
        class="font-regular text-center text-gray-background-7 dark:text-[#EFF2F4]"
      >
        Explore exciting events and spark your inspiration!
      </p>
    </div>
    <div class="overflow-x-auto no-scrollbar flex justify-center w-full">
      <div class="flex gap-[18px] mt-[56px] md:justify-center ml-12 w-full">
        <DiscoverEventType
          v-for="(event, index) in eventTypes"
          :event="event"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import IconsMicrophone from "@/components/icons/Microphone.vue";
import IconsTwoFace from "@/components/icons/TwoFace.vue";
import IconsRun from "@/components/icons/Run.vue";
import IconsCareer from "@/components/icons/Career.vue";
import IconsChurch from "@/components/icons/Church.vue";
import IconsFoodandDrink from "@/components/icons/FoodandDrink.vue";
import incredibleLight from "@/assets/images/img/incredibleLight.png";
import incredibleDark from "@/assets/images/img/incredibleDark.png";

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

const eventTypes = [
  {
    description: "Music & Performance",
    icon: IconsMicrophone,
  },
  {
    description: "Arts & Culture",
    icon: IconsTwoFace,
  },
  {
    description: "Sports & Wellness",
    icon: IconsRun,
  },
  {
    description: "Career & Business",
    icon: IconsCareer,
  },
  {
    description: "Spirituality & Religion",
    icon: IconsChurch,
  },
  {
    description: "Food  & Drink",
    icon: IconsFoodandDrink,
  },
];
</script>

<style lang="scss" scoped></style>
