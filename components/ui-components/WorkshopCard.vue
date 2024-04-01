<template>
  <div class="rounded-[30px] w-[345px] md:w-[570px] bg-blue/90 cursor-pointer">
    <div
      class="flex gap-3 py-6 pl-4 md:px-[35px] rounded-t-[30px] bg-gradient-to-r from-[#4F08E6] to-[#FF4975]"
    >
      <img
        src="/images/icons/calendar.svg"
        class="h-5 w-[18px]"
        alt="calendar"
      />
      <span>December 14th - 11:00 AM (GMT-3)</span>
    </div>
    <div class="px-4 py-[35px] sm:p-[35px] text-gray-2">
      <div class="flex gap-[35px] text-sm">
        <div class="flex items-center gap-2">
          <img
            src="/images/icons/live-training.svg"
            class="h-4 w-4"
            alt="Live training"
            loading="lazy"
          />
          <span>LIVE Training</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="/images/icons/time.svg"
            class="h-4 w-4"
            alt="Duration"
            loading="lazy"
          />
          <span>15 Hours</span>
        </div>
      </div>
      <div class="my-5">
        <div class="text-2xl font-medium text-gray-light">
          {{ title }}
        </div>
        <div class="mt-3 text-sm">
          {{ description }}
        </div>
      </div>
      <div class="flex items-center gap-3 text-sm">
        <img
          src="/images/trainer.svg"
          class="w-6 h-6"
          alt="Trainer"
          loading="lazy"
          fetchPriority="low"
        />
        Steve Popoola
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>
