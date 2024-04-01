<template>
  <section class="mt-[120px] md:mt-[140px] xl:mt-[160px]">
    <div
      class="custom-container mx-auto flex justify-center text-center xl:justify-between"
    >
      <div class="font-bold text-white text-title sm:text-6xl">
        Available Workshops
      </div>
      <Button class="hidden xl:block"> See all the workshops </Button>
    </div>
    <div class="overflown-body overflow-auto">
      <!-- calculate margin-left based on .custom-container width -->
      <div
        class="mt-[72px] overflow-auto scroll-smooth min-w-min flex gap-[30px] mr-4 ml-[calc((100%-22rem)/2)] sm:ml-[calc((100%-24rem)/2)] md:ml-[calc((100%-36rem)/2)] lg:ml-[calc((100%-48rem)/2)] xl:ml-[calc((100%-72rem)/2)] 2xl:ml-[calc((100%-80rem)/2)]"
      >
        <template v-for="(item, index) in workShop" :key="index">
          <WorkshopCard :title="item.title" :description="item.description" />
        </template>
      </div>
    </div>
    <div class="block xl:hidden text-center mt-[56px]">
      <Button> See all the workshops </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
import WorkshopCard from "./ui-components/WorkshopCard.vue";

const workShop = reactive([
  {
    title: "Vue.js Fundamentals",
    description:
      "A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally...",
  },
  {
    title: "Vue 3 and Composition API",
    description:
      "Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...",
  },
  {
    title: "Vue 3 and Composition API",
    description:
      "Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...",
  },
]);
</script>
<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.overflown-body::-webkit-scrollbar {
  display: none;
}

.overflown-body {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
