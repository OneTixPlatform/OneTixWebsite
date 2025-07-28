<template>
  <div
    class="relative w-[119px] h-[48px] flex items-center justify-between px-[12px] border border-[#E2E8F0] rounded-[12px] bg-white"
  >
    <input
      type="number"
      v-model.number="localValue"
      @blur="emitChange"
      @keydown.enter="emitChange"
      class="appearance-none w-[48px] text-[16px] text-[#0F172A] font-medium text-center outline-none bg-transparent [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
    />

    <!-- Up/Down Controls -->
    <div
      class="h-[24px] w-[24px] rounded-[12px] flex flex-col gap-2 justify-center items-center bg-[#F1F5F9]"
    >
      <button
        @click="increment"
        class="leading-0 font-bold text-[#94A3B8] m-0 p-0"
      >
        <i
          class="ri-arrow-up-s-line leading-0 font-bold text-[#94A3B8] m-0 p-0"
        ></i>
      </button>
      <button
        @click="decrement"
        class="leading-0 font-bold text-[#94A3B8] m-0 p-0"
      >
        <i
          class="ri-arrow-down-s-line leading-0 font-bold text-[#94A3B8] m-0 p-0"
        ></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["update:modelValue"]);

const localValue = ref(props.modelValue);

// Sync when parent updates
watch(
  () => props.modelValue,
  (val) => {
    localValue.value = val;
  },
);

const emitChange = () => {
  emit("update:modelValue", localValue.value || 0);
};

const increment = () => {
  localValue.value += 1;
  emitChange();
};

const decrement = () => {
  if (localValue.value > 0) {
    localValue.value -= 1;
    emitChange();
  }
};
</script>
