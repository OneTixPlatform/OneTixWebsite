<!-- components/TicketDropdown.vue -->
<template>
  <div class="relative">
    <!-- Trigger -->
    <button
      @click="toggleDropdown"
      :disabled="disabled"
      class="w-full flex items-center justify-between px-4 py-2 gap-2 rounded-[16px] border"
      :class="[
        disabled
          ? 'bg-[#E2E8F0] border-gray-300 text-gray-400'
          : 'bg-white border-[#E2E8F0] text-[#1E293B]',
      ]"
    >
      <span class="text-[15px] font-medium">
        {{ modelValue === 0 ? "Select" : `${modelValue} ticket(s)` }}
      </span>
      <svg
        class="w-4 h-4 transform transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <ul
      v-if="isOpen"
      class="absolute z-50 mt-2 w-full max-h-[200px] overflow-y-auto bg-white border border-[#E2E8F0] rounded-[16px] shadow-md"
    >
      <li
        v-for="item in items"
        :key="item.value"
        @click="select(item.value)"
        class="px-4 py-2 hover:bg-[#F1F5F9] text-sm cursor-pointer"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);
const dropdownRef = ref(null);

function toggleDropdown() {
  if (!props.disabled) isOpen.value = !isOpen.value;
}

function select(value) {
  emit("update:modelValue", value);
  isOpen.value = false;

  // ✅ Mobile fix: remove focus to prevent reopenned
  setTimeout(() => {
    document.activeElement?.blur();
  }, 50);
}

// ✅ Auto-close on click outside
onClickOutside(dropdownRef, () => {
  isOpen.value = false;
});
</script>
