<template>
  <div
    style="clip-path: polygon(0 1%, 100% 9%, 100% 100%, 0% 100%)"
    class="lg:h-[626px] px-4 pb-[142px] lg:z-0 z-50 relative w-full bg-secondary-1 dark:bg-purple-brown"
  >
    <div class="flex flex-col gap-[60px] items-center">
      <h1
        class="font-extrabold text-center mt-[134px] md:text-[48px] text-[36px] lg:text-[72px] w-full max-w-[1020px] lg:leading-[72px] text-gray-background-9 dark:text-[#EFF2F4]"
      >
        You’re the reason we built it. Everyone else just jumped on the
        bandwagon
      </h1>
      <img
        :src="GetStarted"
        alt="get-started"
        class="w-full max-w-[258px] h-auto"
      />
    </div>
    <!-- Responsive flower icons -->
    <IconsFlower1
      class="absolute top-[30px] lg:top-[93px] left-[5%] w-[60px] sm:w-[80px]"
    />
    <IconsFlower2
      class="absolute top-[436px] xs:top-[390px] sm:top-[400px] md:top-[460px] right-[5%] w-[60px] sm:w-[80px]"
    />
  </div>
</template>

<script setup lang="ts">
import GetStarted from "@/assets/images/img/GetStarted.png";
</script>

<style scoped></style>
