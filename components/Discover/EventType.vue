<template>
  <ClientOnly>
    <div
      :style="{
        backgroundImage: `url(${isDark ? eventTypeCardDark : eventTypeCard})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }"
      class="h-[136px] w-[110px] flex flex-col justify-center gap-[10px] shrink-0 items-center py-[20px] px-[12px] rounded-[16px]"
    >
      <component :is="event.icon" />
      <p
        class="text-[13px] h-[36px] font-regular leading-[18px] text-center text-gray-background-8 dark:text-[#EFF2F4]"
      >
        {{ event.description }}
      </p>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import eventTypeCard from "@/assets/images/img/eventTypeCard.png";
import eventTypeCardDark from "@/assets/images/img/eventTypeCardDark.png";
const props = defineProps<{
  event: {
    description: string;
    icon: any;
  };
}>();

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");
</script>

<style lang="scss" scoped></style>