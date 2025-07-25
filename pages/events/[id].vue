<template>
  <div class="bg-white dark:bg-black-highest">
    <EventsDetailsHeroSection />
    <div class="lg:px-[142px] pb-[100px]">
      <div
        class="flex flex-col py-[56px] lg:flex-row lg:border-b-[1px] lg:border-b-[#CBD5E1] px-4 gap-[45px] 2xl:mx-auto"
      >
        <div class="flex flex-col w-full max-w-[741px] gap-[24px]">
          <div>
            <div class="flex gap-2 py-[12px] items-center">
              <IconsCalendar />
              <p class="text-gray-background-8 dark:text-[#CED4DA] text-[16px]">
                Saturday, July 26th 2025
              </p>
            </div>
            <div class="flex gap-2 py-[12px] items-center">
              <IconsTime />
              <p
                class="text-gray-background-8 dark:text-[#CED4DA] w-full text-[16px]"
              >
                10:00 AM - 4:00 PM UTC
              </p>
            </div>
            <div class="flex gap-2 py-[12px] items-center">
              <IconsLocation />
              <p
                class="text-gray-background-8 dark:text-[#CED4DA] w-full text-[16px]"
              >
                2500 Capacity Auditorium, Federal University Of Technology,
                Akure, Ondo State.
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
              Welcome to the International Conference on Computing and Missions,
              Nigeria 2025! This year, we're gathering at the IITA Conference
              Center for a jam-packed event filled
              with innovative ideas, networking opportunities, and inspiring
              speakers. Join us as we explore the intersection
              of technology and missions, and how they can work together to
              create a better world. Whether you're a seasoned professional or
              just starting out in the field, this conference is the perfect
              place to learn, grow, and connect with like-minded individuals.
              Don't miss out on this incredible opportunity to be part of
              something truly special. Mark your calendars and get ready for an
              unforgettable experience at the International Conference on
              Computing and Missions, Nigeria 2025!
            </p>
          </div>
          <div class="flex dark:text-[#CED4DA] flex-col gap-[20px]">
            <p>Directions</p>
            <div class="w-full bg-[#CBD5E1] rounded-[16px] h-[302px]"></div>
          </div>
        </div>
        <div class="">
          <EventsGetTicket />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
