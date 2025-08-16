<template>
  <div
    style="clip-path: polygon(100% 0, 100% 96%, 65% 99%, 31% 94%, 0 100%, 0 0)"
    class="lg:py-[86px] z-20 bg-white relative dark:bg-black-highest flex flex-col items-center lg:items-start 2xl:items-center px-4 py-8 lg:px-[82px]"
  >
    <div class="relative" id="about-us">
      <IconsTicket
        v-if="!isDark"
        class="absolute hidden xl:flex top-[47px] left-[900px]"
      />
      <IconsTicketDark
        v-if="isDark"
        class="absolute hidden xl:flex top-[47px] left-[900px]"
      />
      <IconsMarks class="absolute top-[2px] hidden xl:flex left-[1022px]" />
      <div
        class="w-full flex flex-col gap-[24px] max-w-[830px] text-center lg:text-start 2xl:mx-auto"
      >
        <h1
          class="font-extrabold text-[#1E293B] dark:text-[#EFF2F4] text-[30px] mt-[50px] lg:mt-0 sm:text-[45px] md:text-[60px]"
        >
          Every Unforgettable Event Starts with OneTix.
        </h1>
        <p class="text-[#475569] dark:text-[#EFF2F4] text-[18px]">
          Planning events shouldn’t be stressful. That’s why we built OneTix a
          platform designed to simplify how you create, promote, and manage your
          events. With powerful tools for ticket sales, audience tracking, and
          engagement, OneTix helps you make your event unforgettable, from start
          to finish.
        </p>
      </div>
    </div>
    <div
      class="w-full max-w-[1320px] 2xl:mx-auto mb-[97px] flex flex-col items-center lg:items-start lg:flex-row gap-[44px] mt-[117px]"
    >
      <div class="h-[324px] relative w-full max-w-[626px]">
        <IconsMarks
          class="absolute bottom-[320px] hidden xl:flex left-[624px]"
        />
        <img
          :src="AboutHero"
          alt=""
          class="h-full w-full rounded-[8px] object-cover object-center"
        />
      </div>
      <div
        class="flex flex-col max-w-[602px] w-full items-center lg:items-start gap-[24px] mt-[33px]"
      >
        <h1
          class="font-extrabold text-[#1E293B] dark:text-[#EFF2F4] text-center lg:text-left text-[30px] sm:text-[46px]"
        >
          What we are about
        </h1>
        <p
          class="text-[18px] text-center lg:text-left text-[#475569] dark:text-[#EFF2F4]"
        >
          OneTix is for everyone whether you’re throwing the party or showing up
          to enjoy it. Organizers get a seamless platform to plan, promote, and
          sell tickets with ease. Attendees get fast access to the best events
          around. No stress. Just good times, made simple
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutHero from "@/assets/images/img/About-hero.png";

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");
</script>

<style scoped></style>
