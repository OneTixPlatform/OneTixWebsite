<template>
  <div class="py-[16px] flex justify-between">
    <!-- Ticket Info -->
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
          v-if="ticket.isFree"
          class="text-primary-5 text-[15px] font-semibold"
        >
          Free
        </p>
        <p
          v-else
          :class="[
            ticket.available <= 0 ? 'text-secondary-3' : 'text-primary-5',
            ' text-[15px] font-semibold',
          ]"
        >
          {{ formatCurrency(ticket.price) }}
        </p>

        <!-- Sold Out Badge -->
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

    <!-- Quantity Dropdown -->
    <div>
      <CommonDropDown
        v-if="ticket.available > 0"
        v-model="selectedAmount"
        :items="dropdownItemsSimple"
        @update:model-value="handleAmountChange"
        :disabled="isDisabled"
      />
      <!-- <MazDropdown
        v-if="ticket.available > 0"
        :items="dropdownItems"
        :disabled="isDisabled"
        class="custom-dropdown no-dark-mode"
        :class="[
          'rounded-[16px]',
          isDisabled
            ? 'bg-[#E2E8F0]  border border-gray-300 text-gray-400'
            : 'bg-white border border-[#E2E8F0] text-[#1E293B]',
        ]"
      >
        <span
          :class="[isDisabled ? 'dark:text-white' : '']"
          class="block text-[15px] font-medium text-[#1E293B]"
        >
          {{ selectedAmount === 0 ? "Select" : `${selectedAmount} ticket(s)` }}
        </span>
      </MazDropdown> -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { formatCurrency } from "@/utils/helpers";

const ticketStore = useTicketStore();
const selectedAmount = ref(0);

const props = defineProps(["ticket", "isEditing", "currentlyEditingId"]);
const emit = defineEmits(["focus", "blur"]);

const isDisabled = computed(() => {
  return props.isEditing && props.currentlyEditingId !== props.ticket.id;
});

const dropdownItemsSimple = computed(() => {
  const max = Math.min(10, props.ticket.available);
  return Array.from({ length: max + 1 }, (_, i) => ({
    label: i === 0 ? "0 (Clear)" : `${i}`,
    value: i,
  }));
});

function handleAmountChange(amount) {
  selectedAmount.value = amount;

  if (amount > 0) {
    ticketStore.setTicket(props.ticket);
    ticketStore.setTicketAmount(amount);
    emit("focus", props.ticket.id);
  } else {
    ticketStore.resetStore();
    emit("blur");
  }
}
</script>

<style scoped></style>
