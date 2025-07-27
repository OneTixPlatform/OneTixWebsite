<template>
  <div class="bg-white dark:bg-black-highest">
    <EventsDetailsHeroSection :eventData="eventData" />
    <div class="lg:px-[142px] pb-[100px]">
      <div
        class="flex flex-col py-[56px] lg:flex-row lg:border-b-[1px] lg:border-b-[#CBD5E1] px-4 gap-[45px] 2xl:mx-auto"
      >
        <div class="flex flex-col w-full max-w-[741px] gap-[24px]">
          <div>
            <div class="flex gap-2 py-[12px] items-center">
              <IconsCalendar />
              <p class="text-gray-background-8 dark:text-[#CED4DA] text-[16px]">
              {{ formatDate(eventData.eventDate) }}
              </p>
            </div>
            <div class="flex gap-2 py-[12px] items-center">
              <IconsTime />
              <p
                class="text-gray-background-8 dark:text-[#CED4DA] w-full text-[16px]"
              >
            {{ formatTime(eventData.eventDate) }}
              </p>
            </div>
            <div class="flex gap-2 py-[12px] items-center">
              <IconsLocation />
              <p
                class="text-gray-background-8 dark:text-[#CED4DA] w-full text-[16px]"
              >
                {{ eventData.location }}
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-[20px]">
            <p class="font-500 dark:text-[#CED4DA] text-[16px]">
              About this event
            </p>
            <p
              class="font-normal text-[16px] text-gray-background-8 dark:text-[#CED4DA]"
            >
              {{ eventData.description }}
            </p>
          </div>
          <div class="flex dark:text-[#CED4DA] flex-col gap-[20px]">
            <p>Directions</p>
            <!-- <div class="w-full bg-[#CBD5E1] rounded-[16px] h-[302px]"></div> -->
            <div class="w-full h-[300px] rounded-[16px] overflow-hidden">
              <iframe
                :src="`https://www.google.com/maps?q=${encodeURIComponent(eventData.location)}&output=embed`"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div class="">
          <EventsGetTicket :eventData="eventData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useDocument } from "vuefire";
import { useFirestore } from "vuefire";
import { doc } from "firebase/firestore";
import {formatDate,formatTime} from '@/utils/helpers'



const route = useRoute();
const db = useFirestore();

const eventRef = doc(db, "events", route.params.id);
const eventData = useDocument(eventRef);



</script>

<style scoped></style>
