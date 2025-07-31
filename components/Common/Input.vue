<template>
  <div class="flex flex-col gap-2">
    <div
      class="h-[40px] border border-[#E2E8F0] rounded-[8px] px-[12px] py-[8px]"
    >
      <input
        :type="inputType"
        class="w-full h-full outline-none placeholder:text-[14px] placeholder:text-[#94A3B8]"
        :placeholder="placeHolder"
        :value="modelValue"
        @input="(event) => emit('update:modelValue', event.target.value)"
        @blur="onBlur"
      />
      <component v-if="icon" :is="icon" class="w-6 h-6" @click="showPassword" />
    </div>

    <div v-if="shouldShowErrors">
      <span
        v-for="(error, index) in errorMessage"
        :key="index"
        class="text-red-500 text-[12px] font-inter"
      >
        {{ error?.$message }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  placeHolder: {
    type: String,
    default: "Type a message",
  },
  icon: {
    type: [String, Object, Function, null],
  },
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: String,
  },
  errorMessage: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputType = ref(props.type);
const isBlurred = ref(false);

const onBlur = () => {
  isBlurred.value = true;
};

const shouldShowErrors = computed(() => {
  return isBlurred.value && props.errorMessage?.length > 0;
});
</script>

<style lang="scss" scoped></style>
