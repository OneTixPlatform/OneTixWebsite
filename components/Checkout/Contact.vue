<template>
  <div>
    <div class="gap-4 grid grid-cols-1 lg:grid-cols-2">
      <div class="w-full flex flex-col gap-[8px]">
        <label class="text-[14px] text-gray-background-7">
          First Name <span style="color: #ef4444">*</span>
        </label>
        <CommonInput
          v-model="form.firstName"
          class="w-full"
          placeHolder="Enter first Name"
        />
      </div>
      <div class="w-full flex flex-col gap-[8px]">
        <label class="text-[14px] text-gray-background-7">
          Last Name <span style="color: #ef4444">*</span>
        </label>
        <CommonInput
          v-model="form.lastName"
          class="w-full"
          placeHolder="Enter Last Name"
        />
      </div>
      <div class="w-full flex flex-col gap-[8px]">
        <label class="text-[14px] text-gray-background-7">
          Email <span style="color: #ef4444">*</span>
        </label>
        <CommonInput
          class="w-full"
          placeHolder="Enter email"
          v-model="form.email"
        />
      </div>
      <div class="w-full flex flex-col gap-[8px]">
        <label class="text-[14px] text-gray-background-7">
          Confirm Name <span style="color: #ef4444">*</span>
        </label>
        <CommonInput class="w-full" type="email" placeHolder="Confirm Email" />
      </div>
    </div>
    <div
      v-if="ticketStore.email && ticketStore.name && ticketStore.ticket.name"
      class="mt-[16px]"
    >
      <p class="text-gray-background-9 text-[16px] font-medium">
        Pay with Bank or Card
      </p>
      <div class="flex justify-between mt-[16px] items-center">
        <div class="flex gap-2 items-center">
          <div
            @click="togglePaystack"
            :class="[
              usePaystack ? 'border-primary-5  bg-secondary-1' : '',
              'h-[20px] w-[20px] flex cursor-pointer justify-center items-center rounded-full border border-[#CBD5E1]',
            ]"
          >
            <div
              v-if="usePaystack"
              class="h-[7.5px] w-[7.5px] bg-[#E61636] rounded-full"
            ></div>
          </div>
          <p class="text-gray-background-7 font-medium text-[16px]">
            Use Paystack
          </p>
        </div>
        <div class="lg:h-[26px] h-[20px] w-[100px] lg:w-[150px]">
          <img
            :src="Paystack"
            alt="paystack"
            class="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Paystack from "@/assets/images/img/Paystick.png";

const usePaystack = ref(false);
const ticketStore = useTicketStore();
const form = reactive({
  firstName: ticketStore.firstName,
  name: ticketStore.name,
  email: ticketStore.email,
  lastName: ticketStore.lastName,
});

const togglePaystack = () => {
  usePaystack.value = !usePaystack.value;
};

watch(
  () => [form.firstName, form.lastName],
  ([first, last]) => {
    form.name = `${first} ${last}`.trim();
  },
);

watch(
  () => ({
    first: form.firstName,
    last: form.lastName,
    email: form.email,
  }),
  ({ first, last, email }) => {
    if (first && last && email) {
      ticketStore.setUserDetails(`${first} ${last}`.trim(), email, first, last);
    }
  },
  { deep: true },
);
</script>

<style scoped></style>
