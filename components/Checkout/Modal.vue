<template>
  <div class="modal-overlay h-screen lg:px-4">
    <!-- modal -->
    <div class="modal-content h-full w-full lg:h-[600px] lg:rounded-[16px]">
      <!-- Top -->
      <div
        class="rounded-t-[16px] flex justify-between items-center py-[16px] px-[24px] border-b border-[#E2E8F0] w-full"
      >
        <div class="flex items-center gap-[24px]">
          <div
            @click="previousStep"
            v-if="!showSuccess"
            class="flex items-center cusor.pointer border border-[#E2E8F0] justify-center h-[36px] w-[36px] rounded-full"
          >
            <IconsArrowLeft />
          </div>
          <p class="font-semibold text-[18px] text-gray-background-8">
            {{ showSuccess ? "Successful" : "Checkout" }}
          </p>
        </div>
        <div>
          <div
            v-if="!showSuccess"
            @click="showLeaveCheckout = true"
            class="flex cursor-pointer items-center border border-[#E2E8F0] justify-center h-[36px] w-[36px] rounded-full"
          >
            <IconsClose />
          </div>
          <div
            v-if="showSuccess"
            @click="emit('close')"
            class="flex cursor-pointer items-center border border-[#E2E8F0] justify-center h-[36px] w-[36px] rounded-full"
          >
            <IconsClose />
          </div>
        </div>
      </div>
      <div v-if="showSuccess" @close="emit('close')" class="flex-grow h-full">
        <CheckoutSuccess />
      </div>

      <div v-if="showLeaveCheckout" class="flex-grow h-full">
        <CheckoutLeaveCheckout
          @close="emit('close')"
          @stay="showLeaveCheckout = false"
        />
      </div>

      <div
        v-if="!showLeaveCheckout && !showSuccess"
        class="flex flex-col px-2 lg:px-[24px] h-full lg:h-auto justify-between lg:justify-normal lg:flex-row"
      >
        <div
          class="lg:w-[632px] w-full lg:border-r py-[16px] px-2 lg:px-[24px] lg:h-[728px] lg:border-[#e2e8f0]"
        >
          <div
            class="flex items-center justify-center lg:justify-start gap-[8px]"
          >
            <div
              v-for="(s, index) in steps"
              :key="index"
              class="flex items-center gap-[8px]"
            >
              <div
                :class="[
                  s.name === 'Ticket' && ticketStore.ticket.name
                    ? 'bg-[#ECFDF5]'
                    : step === s.name
                      ? 'bg-secondary-1'
                      : 'bg-[#F1F5F9]',
                  'h-[32px] w-[32px] flex rounded-full items-center justify-center',
                ]"
              >
                <component
                  :is="
                    s.name === 'Ticket' && ticketStore.ticket.name
                      ? IconsDone
                      : step === s.name
                        ? s.activeIcon
                        : s.icon
                  "
                />
              </div>
              <p
                :class="[
                  step === s.name ? 'text-gray-background-7' : 'text-[#94A3B8]',
                  'text-[14px] font-medium',
                ]"
              >
                {{ s.name }}
              </p>
              <div
                v-if="index !== steps.length - 1"
                class="h-[3px] w-[22px] lg:w-[48px] rounded-[50px] bg-[#E2E8F0]"
              ></div>
            </div>
          </div>
          <div class="flex-col mt-[24px] gap-[16px] flex">
            <div
              class="h-[86px] card-shadow border border-[#E2E8F0] flex gap-[16px] items-center w-full px-2 lg:px-[16px] py-[12px] rounded-[12px]"
            >
              <div class="w-[86px] h-[62px] rounded-[8px]">
                <img
                  :src="event.imageUrl"
                  alt="event-image"
                  class="h-full w-full rounded-[8px] object-center object-cover"
                />
              </div>

              <div>
                <p class="text-[14px] font-medium text-gray-background-8">
                  {{ event.title }}
                </p>
                <div class="flex gap-[8px] text-[14px] text-gray-background-8">
                  <span>{{ formatDate(event.eventDate) }}</span>
                  <div
                    class="flex items-center gap-[8px] text-gray-background-8"
                  >
                    <div
                      class="h-[8px] w-[8px] rounded-full bg-[#64748B]"
                    ></div>
                    <span class="text-[14px] leading-[18px]">
                      {{ formatTime(event.eventDate) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="ticketTypes.length === 0" class="flex flex-col gap-2">
              <div
                v-for="(loader, index) in 3"
                :key="index"
                class="h-[80px] rounded-md w-full skeleton"
              ></div>
            </div>

            <div v-if="step === 'Ticket'">
              <CheckoutTicket
                v-for="ticket in ticketTypes"
                :key="ticket.id"
                :ticket="ticket"
                :is-editing="isEditing"
                :currently-editing-id="currentlyEditingId"
                @focus="handleFocus"
                @blur="handleBlur"
              />
            </div>
            <CheckoutContact
              v-if="step === 'Contact'"
              ref="checkoutContactRef"
            />
          </div>
        </div>

        <div
          class="py-[16px] mt-[16px] lg:mt-0 lg:w-[400px] flex flex-col gap-[24px] items-center lg:flex-grow px-2 lg:px-[24px]"
        >
          <p>Summary</p>

          <div class="w-full">
            <div
              v-if="!ticketStore?.ticket.name"
              class="w-full flex text-[15px] text-gray-background-7 justify-between border-b border-[#E2E8F0] py-[12px] px-[8px]"
            >
              <span>---</span>
              <span>₦0</span>
            </div>
            <div
              v-if="ticketStore.ticket.name"
              class="w-full flex text-[15px] text-gray-background-7 justify-between border-b border-[#E2E8F0] py-[12px] px-[8px]"
            >
              <span
                >{{ ticketStore.ticketAmount }} x
                {{ ticketStore.ticket.name }}</span
              >
              <span>₦{{ ticketStore.ticket.price }}</span>
            </div>
            <div
              v-if="ticketStore.ticket.name"
              class="w-full flex text-[15px] text-gray-background-7 justify-between border-b border-[#E2E8F0] py-[12px] px-[8px]"
            >
              <span>Onetix Fee</span>
              <span>₦{{ ticketStore.oneTixFee }}</span>
            </div>
            <div
              class="w-full flex text-[15px] text-gray-background-7 justify-between border-b border-[#E2E8F0] py-[12px] px-[8px]"
            >
              <span>SubTotal</span>
              <span>₦{{ ticketStore.subTotal }}</span>
            </div>
            <div
              class="w-full flex text-[15px] text-gray-background-7 font-semibold justify-between border-b border-[#E2E8F0] py-[12px] px-[8px]"
            >
              <span>Total</span>
              <span>₦{{ ticketStore.Total }}</span>
            </div>
          </div>
          <div
            v-if="
              ticketStore.email && ticketStore.name && ticketStore.ticket.name
            "
            class="flex flex-col gap-[24px] items-start w-full"
          >
            <p class="text-[15px] text-gray-background-7">
              By clicking checkout, you agree to the
              <span class="text-secondary-5 underline"
                >OneTix Terms of Service</span
              >
            </p>
            <div class="flex items-center gap-[8px]">
              <input type="checkbox" v-model="keep" />
              <p class="text-[14px] lg:mt-4 text-[#64748B]">
                Keep me updated on top online and offline events.
              </p>
            </div>
          </div>

          <CommonButton
            :class="[
              !ticketStore.name && !ticketStore.email && step === 'Contact'
                ? 'opacity-20'
                : '',
              'w-full !h-[48px] text-white bg-primary-5',
            ]"
            :label="step === 'Contact' ? 'CHECKOUT' : 'CONTINUE'"
            @click="nextStep"
            :disabled="
              (step === 'Ticket' && ticketStore.ticketAmount === 0) ||
              (step === 'Contact' &&
                (!ticketStore.name ||
                  !ticketStore.email ||
                  !ticketStore.payStack ||
                  checkoutContactRef?.v$?.$invalid))
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useFirestore, useCollection } from "vuefire";
import { collection, query, where } from "firebase/firestore";
import IconsTicket from "@/components/icons/Tickets.vue";
import IconsContact from "@/components/icons/Contact.vue";
import IconsCard from "@/components/icons/Card.vue";
import IconsActiveIcon from "../icons/ActiveIcon.vue";
import IconsDone from "@/components/icons/checkedSmall.vue";
import { formatDate, formatTime } from "@/utils/helpers";
// import {payWithPaystack} from '@/services/paystack'
import { setData } from "@/utils/helpers";

const step = ref("Ticket");
const keep = ref(false);
const route = useRoute();
const router = useRouter();
const db = useFirestore();
const ticketStore = useTicketStore();
const showLeaveCheckout = ref(false);
const showSuccess = ref(false);
const isEditing = ref(false);
const currentlyEditingId = ref(null);
const checkoutContactRef = ref(null);
const eventId = route.params.id;
const toast = useToast();

function nextStep() {
  if (step.value === "Ticket") {
    step.value = "Contact";
  } else if (step.value === "Contact") {
    pay();
  }
}
const ticket = computed(() => ({
  id: ticketStore.ticket?.id ?? "",
  available: ticketStore.ticket?.available ?? 0,
  name: ticketStore?.ticket?.name,
}));

const pay = () => {
  if (
    !ticket.value.id ||
    !ticketStore.email ||
    !props.event?.id ||
    !ticketStore.ticketAmount
  ) {
    console.error(" Missing required data", {
      ticket: ticket.value,
      email: ticketStore.email,
      event: props.event,
      ticketAmount: ticketStore.ticketAmount,
    });
    return;
  }

  payWithPaystack({
    email: ticketStore.email,
    amount: ticketStore.Total,
    ticket: ticket.value,
    ticketCount: ticketStore.ticketAmount,
    event: props.event,
    name: ticketStore.name,
    platformFees: ticketStore.oneTixFee,
    router,
  });
};
function previousStep() {
  if (step.value === "Contact") {
    step.value = "Ticket";
  }
}

const ticketTypesQuery = query(
  collection(db, "ticketTypes"),
  where("eventId", "==", eventId),
  where("public", "==", true),
);
const ticketTypes = useCollection(ticketTypesQuery);

const props = defineProps(["event"]);
const emit = defineEmits(["close"]);

function handleFocus(ticketId) {
  isEditing.value = true;
  currentlyEditingId.value = ticketId;
}

function handleBlur() {
  isEditing.value = false;
  currentlyEditingId.value = null;
}

function payWithPaystack({
  email,
  amount,
  ticket,
  ticketCount,
  event,
  name,
  platformFees,
}) {
  try {
    if (!window.PaystackPop) {
      toast.error(
        "Unable to load Paystack. Please check your internet and try again.",
      );
      return;
    }

    const config = useRuntimeConfig();
    const publicKey = config.public.PAYSTACK_PUBLIC_KEY;

    let paymentCompleted = false;

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email,
      amount: amount * 100,
      currency: "NGN",
      callback: function (response) {
        paymentCompleted = true;
        handleSuccessfulPayment({
          email,
          amount,
          ticket,
          ticketCount,
          event,
          name,
          response,
          platformFees,
        });
      },
      onClose: function () {
        if (!paymentCompleted) {
          toast.message(
            "You closed Paystack without completing your transaction.",
          );
        }
      },
    });

    handler.openIframe();
  } catch (err) {
    console.error("❌ Paystack error:", err);
    toast.error(
      "Something went wrong while starting your payment. Please try again.",
    );
  }
}

async function handleSuccessfulPayment({
  email,
  amount,
  ticket,
  ticketCount,
  event,
  name,
  response,
  platformFees,
}) {
  try {
    const ticketId = await setData(
      ticket,
      email,
      amount,
      ticketCount,
      event,
      name,
      response,
      platformFees,
    );
    ticketStore.setTicketId(ticketId);
    showSuccess.value = true;
  } catch (error) {
    toast.error(
      "Payment was successful but we could not save your ticket. Please contact support.",
    );
  }
}
const steps = [
  {
    name: "Ticket",
    icon: IconsTicket,
    activeIcon: IconsActiveIcon,
  },
  {
    name: "Contact",
    icon: IconsContact,
    activeIcon: IconsActiveIcon,
  },
  {
    name: "Payment",
    icon: IconsCard,
    activeIcon: IconsActiveIcon,
  },
];
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;
  background-color: #fff;

  width: 100%;
  max-width: 1080px;
  margin-inline: 0.5rem;
}
</style>
