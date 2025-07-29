<template>
  <div class="py-[16px] flex justify-between">
    <div class="flex flex-col gap-[8px]">
      <p
        :class="[
          ticket.available === 0 ? 'text-[#94A3B8]' : 'text-[#1E293B]',
          'text-[18px] font-medium',
        ]"
      >
        {{ ticket.name }}
      </p>
      <div class="flex gap-2 items-center">
        <p
          :class="[
            ticket.available <= 0 ? 'text-secondary-3' : 'text-primary-5',
            ' text-[15px] font-semibold',
          ]"
        >
          {{ formatCurrency(ticket.price) }}
        </p>
        <div
          v-if="ticket.available <= 0"
          class="h-[16px] rounded-[16px] bg-[#FFFBEB] flex px-[8px] py-[2px] items-center justify-center"
        >
          <span class="text-[12px] text-[#F59E0B] font-medium">Sold out</span>
        </div>
      </div>

      <p
        :class="[
          ticket.available <= 0 ? 'text-[#CBD5E1]' : 'text-[#64748B]',
          ' text-[14px] max-w-[429px] w-full',
        ]"
      >
        {{ ticket.description }}
      </p>
    </div>
    <div class="">
      <CommonNumberInput
        v-if="ticket.available > 0"
        v-model="localAmount"
        :ticket="ticket"
        :disabled="isDisabled"
        @focus="handleFocus"
        @blur="handleBlur"
        @update:modelValue="handleAmountChange"
      />
    </div>
  </div>
</template>

<script setup>
import { formatCurrency } from "@/utils/helpers";

const ticketStore = useTicketStore();
const props = defineProps(["ticket", "isEditing", "currentlyEditingId"]);
const isDisabled = computed(
  () => props.isEditing && props.currentlyEditingId !== props.ticket.id,
);

const emit = defineEmits(["focus", "blur"]);

function handleFocus() {
  emit("focus", props.ticket.id);
}
function handleBlur() {
  emit("blur");
}

const localAmount = ref(0);
function handleAmountChange(newAmount) {
  const parsedAmount = Number(newAmount);

  if (parsedAmount > 0) {
    ticketStore.setTicket(props.ticket);

    ticketStore.setTicketAmount(parsedAmount);
  } else {
    localAmount.value = 0;
    ticketStore.resetStore();
    emit("blur");
  }
}
</script>

<style scoped></style>
