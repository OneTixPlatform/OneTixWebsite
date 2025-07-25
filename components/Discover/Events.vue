<template>
  <div class="bg-white dark:bg-black-highest lg:px-[64px] px-[20px]">
    <div class="flex gap-[16px] items-center">
      <div class="flex gap-[4px] items-center">
        <IconsLocation />
        <MazDropdown
          :items="[
            { label: 'Italy', action: () => toast.success('CLICKED') },
            { label: 'Spain', action: () => toast.success('CLICKED') },
            { label: 'Germany', action: () => toast.success('CLICKED') },
          ]"
        >
          <span
            class="font-medium text-[16px] dark:text-[#EFF2F4] text-gray-background-7"
            >Lagos</span
          >
        </MazDropdown>
      </div>
      <div class="flex gap-[4px] items-center">
        <IconsCalendar />
        <MazDropdown
          :items="[
            { label: 'Italy', action: () => toast.success('CLICKED') },
            { label: 'Spain', action: () => toast.success('CLICKED') },
            { label: 'Germany', action: () => toast.success('CLICKED') },
          ]"
        >
          <span
            class="font-medium text-[16px] dark:text-[#EFF2F4] text-gray-background-7"
            >Date</span
          >
        </MazDropdown>
      </div>
    </div>
    <!-- overflowCard -->
    <div class="overflow-x-auto no-scrollbar mt-[48px] mb-[48px] w-full">
      <div
        class="flex gap-4 lg:grid lg:grid-cols-4 2xl:place-items-center lg:gap-[20px] min-w-max lg:min-w-full"
      >
        <DiscoverEventCard v-for="n in 10" :key="n" />
      </div>
    </div>

    <div class="w-full flex justify-center items-center mb-[138px] gap-[16px]">
      <IconsLeftDuotone />
      <IconsMoreEvents />
      <IconsRightDuotone />
    </div>
  </div>
</template>

<script setup lang="ts">
const cities = [
  { name: "Lagos", value: "lagos" },
  { name: "Abuja", value: "abuja" },
  { name: "Port Harcourt", value: "portharcourt" },
];
</script>

<style scoped></style>
