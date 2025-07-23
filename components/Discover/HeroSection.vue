<template>
  <div
    class="bg-secondary-1 h-[704px] flex flex-col mt-[64px] items-center dark:bg-purple-brown"
  >
    <div class="flex flex-col px-2 text-center gap-[16px] sm:gap-[32px]">
      <div class="text-center">
        <div class="flex sm:gap-4 flex-col sm:flex-row items-center z-0">
          <h1
            class="text-[29px] xs:text-[36px] md:text-[48px] lg:text-[60px] sm:leading-[56px] md:leading-[72px] font-extrabold text-gray-background-9 dark:text-[#EFF2F4]"
          >
            Find
          </h1>
          <div class="w-full max-w-[618px] relative">
            <!-- Pink background with cut edges -->
            <IconsIncredibleTop class="w-full max-w-[607px]" />

            <!-- Outline / Shadow underline -->
            <IconsIncredibleBottom
              class="absolute top-2 right-0 -left-1.5 w-full max-w-[618px]"
            />
            <h1
              class="sm:text-[48px] md:text-[48px] text-[29px] xs:text-[36px] sm:leading-[56px] absolute md:top-[2.0px] lg:left-[35px] text-center w-full lg:text-left lg:text-[60px] top-4 md:leading-[72px] font-extrabold text-gray-background-9 dark:text-[#EFF2F4]"
            >
              incredible events
            </h1>
          </div>
        </div>

        <h1
          class="text-[29px] xs:text-[36px] lg:text-[60px] mt-0 sm:mt-2 md:text-[48px] sm:leading-[56px] md:leading-[72px] font-extrabold text-gray-background-9 dark:text-[#EFF2F4]"
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
