<template>
   <div  class="py-[16px] flex justify-between">
<div class="flex flex-col gap-[8px]">
  <p :class="[ticket.available === 0 ? 'text-[#94A3B8]':'text-[#1E293B]','text-[18px] font-medium']">{{ ticket.name }}</p>
  <div class="flex gap-2 items-center">
 <p :class="[ticket.available === 0 ? 'text-secondary-3':'text-primary-5',' text-[15px] font-semibold']">{{ formatCurrency(ticket.price) }}</p>
 <div v-if="ticket.available === 0" class="h-[16px]  rounded-[16px] bg-[#FFFBEB] flex px-[8px] py-[2px] items-center justify-center">
    <span class="text-[12px] text-[#F59E0B] font-medium ">Sold out</span>
 </div>
  </div>

<p :class="[ticket.available === 0 ? 'text-[#CBD5E1]':'text-[#64748B]',' text-[14px] max-w-[429px] w-full']" >{{ ticket.description }}</p>
</div>
<div class="">
  
</div>
</div>
</template>

<script setup>
import { formatCurrency} from "@/utils/helpers";
const props = defineProps(['ticket'])
</script>

<style scoped>

</style>