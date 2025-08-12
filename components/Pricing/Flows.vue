<template>
  <div class="w-full flex justify-center lg:py-[252px] py-[100px] bg-[#F8FAFC]">
    <div
      class="grid max-w-[1247px] w-full gap-[58px] grid-cols-1 sm:grid-cols-2 px-4 place-items-center lg:grid-cols-4"
    >
      <div
        v-for="(flow, index) in flows"
        :key="index"
        class="h-[224px] max-w-[268px] w-full"
      >
        <img
          :src="flow.image"
          alt=""
          class="w-full h-full object-contain object-center"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import custom from "@/assets/images/img/custom.png";
import Host from "@/assets/images/img/Host.png";
import Nofees from "@/assets/images/img/Nofees.png";
import FreeCheck from "@/assets/images/img/FreeCheckIn.png";

const flows = [
  {
    image: custom,
  },
  {
    image: Host,
  },
  {
    image: Nofees,
  },
  {
    image: FreeCheck,
  },
];
</script>

<style lang="scss" scoped></style>
