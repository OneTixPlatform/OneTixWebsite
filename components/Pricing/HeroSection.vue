<template>
  <div
    class="xl:h-[580px] w-full items-center flex-col flex relative bg-[#F8FAFC]"
  >
    <div
      style="
        clip-path: polygon(
          100% 0,
          100% 85%,
          80% 99%,
          52% 94%,
          25% 100%,
          0 100%,
          0 0
        );
      "
      class="bg-[#F1F5F9] h-full justify-center px-4 w-full font-extrabold flex text-gray-background-9 text-[35px] lg:text-[52px]"
    >
      <div class="mt-[64px] w-full flex mb-[100px] flex-col max-w-[867px]">
        <div
          class="flex flex-col items-center lg:justify-center lg:flex-row gap-[16px]"
        >
          <h1>Yes, it actually</h1>
          <div class="w-full max-w-[294px] h-[60px] lg:h-[84.62px]">
            <img
              :src="costLess"
              alt="costless"
              class="w-full h-full object-contain object-center"
            />
          </div>
        </div>

        <h1 class="w-full text-center">than printing paper tickets.</h1>
      </div>
    </div>
    <div
      class="flex flex-col w-full justify-center xl:flex-row xl:absolute lg:-bottom-28 xl:left-1/2 xl:-translate-x-1/2 px-4 mt-[100px] gap-[40px] xl:h-[344px] items-center xl:items-start"
    >
      <img :src="free" alt="free" class="h-full w-full max-w-[377px]" />
      <img
        :src="fivePercent"
        alt="five-percent"
        class="h-full w-full max-w-[377px]"
      />
    </div>
  </div>
</template>

<script setup>
import costLess from "@/assets/images/img/CostsLess.png";
import free from "@/assets/images/img/free.png";
import fivePercent from "@/assets/images/img/fivePercent.png";
</script>

<style lang="scss" scoped></style>
