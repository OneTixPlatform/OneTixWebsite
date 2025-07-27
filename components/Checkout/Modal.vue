<template>
  <div class="modal-overlay px-4">
    <!-- modal -->
    <div class="modal-content lg:h-[600px]  rounded-[16px]">
      <!-- Top -->
      <div
        class="rounded-t-[16px] flex justify-between items-center py-[16px] px-[24px] border-b border-[#E2E8F0] w-full"
      >
        <div class="flex items-center gap-[24px]">
          <div
          @click="previousStep"
            class="flex items-center cusor.pointer border border-[#E2E8F0] justify-center h-[36px] w-[36px] rounded-full"
          >
            <IconsArrowLeft />
          </div>
          <p class="font-semibold text-[18px] text-gray-background-8">
            Checkout
          </p>
        </div>
        <div
@click="emit('close')" 
          class="flex cursor-pointer items-center border border-[#E2E8F0] justify-center h-[36px] w-[36px] rounded-full"
        >
          <IconsClose  />
        </div>
      </div>

      <div class="flex flex-col px-[24px] lg:flex-row">
        <!-- first part -->
        <div
          class="lg:w-[632px] w-full lg:border-r py-[16px] px-[24px] h-[728px] lg:border-[#e2e8f0]"
        >
          <div class="flex items-center justify-center lg:justify-start gap-[8px]">
            <div
              v-for="(s, index) in steps"
              :key="index"
              class="flex items-center gap-[8px]"
            >
              <div
                class="h-[32px] w-[32px] flex rounded-full items-center justify-center bg-[#F1F5F9]"
              >
                <component :is="s.icon" />
              </div>
              <p :class="[step === s.name ? 'text-gray-background-7': 'text-[#94A3B8]','text-[14px] font-medium']">
                {{ s.name }}
              </p>
              <div
                v-if="index !== steps.length - 1"
                class="h-[3px] w-[48px] rounded-[50px] bg-[#E2E8F0]"
              ></div>
            </div>
          </div>
          <div class="flex-col mt-[24px] gap-[16px] flex">
            <div
              class="h-[86px] card-shadow border border-[#E2E8F0] flex gap-[16px] items-center w-full px-[16px] py-[12px]  rounded-[12px]"
            >
            <div class="w-[86px] h-[62px] bg-red-400 rounded-[8px]">
  <img :src="event.imageUrl" alt="event-image" class="h-full w-full rounded-[8px] object-center object-cover" />
            </div>

              <div>
                <p class="text-[14px] font-medium text-gray-background-8">
                 {{ event.title }}
                </p>
                <div class="flex gap-[8px] text-[14px] text-gray-background-8">
                <span>{{formatDate(event.eventDate)}}</span>
                  <div
                    class="flex items-center gap-[8px] text-gray-background-8"
                  >
                    <div
                      class="h-[8px] w-[8px] rounded-full bg-[#64748B] dark:bg-[#CED4DA]"
                    ></div>
                    <span class="text-[14px] leading-[18px] dark:text-[#EFF2F4]"
                      >
                      {{formatTime(event.eventDate)}}
                      </span
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- Ticket Component  -->
            <div v-if="step === 'Ticket'">
<CheckoutTicket v-for="(ticket,index) in ticketTypes" :key="index" :ticket="ticket"/>
            </div>
           <CheckoutContact v-if="step === 'Contact'"/>
           <CheckoutPayment v-if="step === 'Payment'"/>
          </div>
        </div>

        <!-- second part -->
        <div
          class="py-[16px] flex flex-col gap-[24px] items-center flex-grow px-[24px]"
        >
          <p>Summary</p>

          <div class="w-full">
            <div
              class="w-full flex text-[15px] text-gray-background-7 justify-between border-b border-[#E2E8F0] py-[12px] px-[8px]"
            >
              <span>---</span>
              <span>₦0</span>
            </div>
            <div
              class="w-full flex text-[15px] text-gray-background-7 justify-between border-b border-[#E2E8F0] py-[12px] px-[8px]"
            >
              <span>SubTotal</span>
              <span>₦0</span>
            </div>
            <div
              class="w-full flex text-[15px] text-gray-background-7 font-semibold justify-between border-b border-[#E2E8F0] py-[12px] px-[8px]"
            >
              <span>Total</span>
              <span>₦0</span>
            </div>
          </div>

          <CommonButton
            class="w-full !h-[48px] text-white bg-primary-5"
            label="CONTINUE"
            @click="nextStep"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useFirestore, useCollection } from 'vuefire'
import { collection, query, where } from 'firebase/firestore'
import IconsTicket from "@/components/icons/Tickets.vue";
import IconsContact from "@/components/icons/Contact.vue";
import IconsCard from "@/components/icons/Card.vue";
import { formatDate, formatTime } from "@/utils/helpers";



const step = ref('Ticket')
const route = useRoute()
const db = useFirestore()


function nextStep() {
  if (step.value === 'Ticket') {
    step.value = 'Contact'
  } else if (step.value === 'Contact') {
    step.value = 'Payment'
  }
}

function previousStep() {
  if (step.value === 'Payment') {
    step.value = 'Contact'
  } else if (step.value === 'Contact') {
    step.value = 'Ticket'
  }
}

const eventId = route.params.id

const ticketTypesQuery = query(
  collection(db, 'ticketTypes'),
  where('eventId', '==', eventId)
)

const ticketTypes = useCollection(ticketTypesQuery)

onMounted(()=>{
  console.log(ticketTypes )
})
const props = defineProps(['event'])
const emit = defineEmits(['close'])

const steps = [
  {
    name: "Ticket",
    icon: IconsTicket,
  },
  {
    name: "Contact",
    icon: IconsContact,
  },
  {
    name: "Payment",
    icon: IconsCard,
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
  /* height: 360px; */
  overflow-y: scroll;
  background-color: #fff;

  width: 100%;
  max-width: 1080px;
  margin-inline: 0.5rem;
}
</style>
