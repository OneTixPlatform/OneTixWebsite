<template>
  <div class="relative w-[100px] flex items-center">
    <input
      type="number"
      :value="modelValue"
      @input="$emit('update:modelValue', +$event.target.value)"
      class="w-full pr-8 px-2 py-1 border rounded text-center text-black dark:text-white"
    />
    <!-- Up/Down Controls -->
    <div
      class="absolute right-1 top-1/2 transform -translate-y-1/2 flex flex-col"
    >
      <button @click="increment" class="p-0.5">
        <UpIcon />
      </button>
      <button @click="decrement" class="p-0.5">
        <DownIcon />
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// Accept v-model
defineProps({
  modelValue: Number,
});

const emit = defineEmits(["update:modelValue"]);

const increment = () => {
  emit("update:modelValue", modelValue + 1);
};
const decrement = () => {
  emit("update:modelValue", modelValue > 0 ? modelValue - 1 : 0);
};
</script>
