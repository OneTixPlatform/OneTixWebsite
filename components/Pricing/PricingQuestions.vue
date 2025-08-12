<template>
  <div class="w-full bg-[#f8fafc] -mb-16">
    <div
      style="clip-path: polygon(36% 0, 70% 6%, 100% 0, 100% 100%, 0 100%, 0 6%)"
      class="flex items-center flex-col gap-[48px] bg-[#F1F5F9] h-full py-[90px] px-4 text-center"
    >
      <h1
        class="w-full max-w-[870px] font-bold lg:text-[48px] text-[30px] lg:leading-[60px]"
      >
        All the Pricing Questions You Were Too Polite to Ask.
      </h1>
      <div class="w-full max-w-[940px] flex mb-[155px] flex-col gap-[16px]">
        <div
          v-for="(question, index) in questions"
          :key="index"
          style="box-shadow: 0px 4px 10px #0a0d120d"
          class="bg-white cursor-pointer border border-[#E2E8F0] flex justify-between gap-[8px] items-center py-[16px] lg:px-[24px] px-4 rounded-[16px]"
        >
          <div class="flex gap-[8px] items-center">
            <IconsMessage />
            <p
              class="text-[14px] lg:text-[18px] font-semibold text-gray-background-9"
            >
              {{ question.question }}
            </p>
          </div>
          <div
            class="h-[20px] w-[20px] flex justify-center items-center rounded-[100px] p-[2px] bg-secondary-1"
          >
            <IconsQuestionsArrow />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const questions = [
  {
    question: "How do i get paid for ticket sales?",
  },
  {
    question: "What is the commission rate for ticket sales?",
  },

  {
    question: "Are there any fees associated with processing payments?",
  },
  {
    question: "When will I receive my payment after the event?",
  },
];
</script>

<style lang="scss" scoped></style>
