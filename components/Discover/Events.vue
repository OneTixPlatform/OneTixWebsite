<template>
  <div class="bg-white dark:bg-black-highest lg:px-[64px] mt-[87px] px-[20px]">
    <div class="flex gap-[16px] 2xl:mx-auto 2xl:max-w-[1120px] items-center">
      <div class="flex gap-[4px] items-center">
        <IconsLocation />
        <MazDropdown>
          <span
            class="font-medium text-[14px] sm:text-[16px] dark:text-[#EFF2F4] text-gray-background-7"
            >Lagos</span
          >
        </MazDropdown>
      </div>
      <div class="flex gap-[4px] items-center">
        <IconsCalendar />
        <MazDropdown>
          <span
            class="font-medium text-[14px] sm:text-[16px] dark:text-[#EFF2F4] text-gray-background-7"
            >Date</span
          >
        </MazDropdown>
      </div>
    </div>
    <!-- overflowCard -->
    <div
      class="overflow-x-auto no-scrollbar mt-[48px] mb-[48px] 2xl:mx-auto 2xl:max-w-[1400px] w-full"
    >
    <p v-if="!isLoading && events.length === 0 " class="font-semibold text-[14px] text-gray-backgound-9">No Published Events Yet</p>
      <div
        v-if="isLoading"
        class="flex gap-[20px] lg:grid lg:grid-cols-4 lg:gap-[20px] min-w-max lg:min-w-full"
      >
        <!-- loader -->
        <div
          v-for="(loader, index) in 4"
          :key="index"
          class="flex w-[300px] flex-col gap-4"
        >
          <div class="h-[147px] w-full skeleton rounded-[16px]"></div>
          <p class="w-[100px] h-[23px] rounded-[16px] skeleton"></p>
          <p class="w-full h-[40px] rounded-[16px] skeleton"></p>
        </div>
      </div>
      <div
        v-else
        class="flex gap-4 lg:grid lg:grid-cols-4 2xl:place-items-center lg:gap-[20px] min-w-max lg:min-w-full"
      >
        <DiscoverEventCard
          :eventData="event"
          v-for="(event, index) in events"
          :key="index"
        />
      </div>
    </div>

    <div class="w-full flex justify-center items-center mb-[138px] gap-[16px]">
      <IconsLeftDuotone />
      <IconsMoreEvents />
      <IconsRightDuotone />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  where,
} from "firebase/firestore";
import { useFirestore } from "vuefire";

const db = useFirestore();
const events = ref([]);
const isLoading = ref(true);

async function fetchEvents() {
  isLoading.value = true;

  try {
    const eventsQuery = query(
      collection(db, "events"),
      limit(8),
      where("status", "==", "published"),
    );

    const snapshot = await getDocs(eventsQuery);
    events.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching events:", error);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  fetchEvents();
});
</script>

<style scoped></style>
