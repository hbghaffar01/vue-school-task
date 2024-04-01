<template>
  <div class="flex flex-col items-center">
    <span class="text-gradient text-[64px] sm:text-[90px]">
      {{ amount }}
    </span>
    <div class="flex items-center gap-[10px] text-sm">
      <img
        :src="`/images/icons/${icon}.svg`"
        :alt="title"
        loading="lazy"
        fetchPriority="low"
        class="h-4 w-4"
      />
      {{ title }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  amount: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: "Placeholder Title",
  },
  icon: {
    type: String,
    default: "",
  },
});
</script>
