<template>
  <div
    class="flex flex-col py-10 px-6 bg-blue opacity-90 border-white/15 rounded-3xl min-w-[150px] xl:px-6"
  >
    <div class="flex gap-2">
      <img
        :src="`/images/icons/${planIcon}.svg`"
        class="h-8 w-8"
        alt="Pricing plan"
        loading="lazy"
        fetchPriority="high"
      />
      <span class="text-[22px] font-bold">{{ props.plan.plan_name }}</span>
    </div>
    <div class="mt-10">
      <p class="text-green mb-6">Includes 1 year access to:</p>
      <div clas="flex flex-col xl:flex-row">
        <div
          v-for="(item, index) in props.plan.plan_details"
          :key="index"
          class="flex justify-between my-4 items-center"
        >
          <div
            class="flex gap-2 md:gap-4 items-center"
            :class="!item?.accessible && 'opacity-20'"
          >
            <img
              class="h-[18px] w-[18px]"
              loading="lazy"
              :src="`/images/icons/${item?.accessible ? 'check' : 'cross'}.svg`"
              :alt="item?.accessible ? 'availble' : 'not availble'"
              fetchPriority="high"
            />
            <span class="text-sm" :class="item?.highlighted && 'font-bold'">
              {{ item?.detail }}
            </span>
          </div>
          <img
            v-if="item?.accessible"
            src="/images/icons/info.svg"
            class="h-[14px] w-[14px]"
            loading="lazy"
            alt="accessible"
            fetchPriority="high"
          />
        </div>

        <div
          v-if="isProPlan"
          class="flex rounded-[10px] py-4 pl-6 bg-green/20 gap-4"
        >
          <img
            src="/images/master-class.svg"
            class="h-12 w-12"
            alt="Vue Master class"
            loading="lazy"
            fetchPriority="high"
          />
          <div class="flex flex-col font-medium">
            <span class="text-gray text-sm"> Enough time to watch: </span>
            <span class="text-lg"> The Vue 3 Masterclass </span>
          </div>
        </div>

        <div
          class="bg-blue-dark rounded-3xl mt-6 py-6 px-4 md:px-[42px] xl:px-6"
        >
          <div class="flex items-center gap-[10px]">
            <span class="text-white text-title font-bold">$50</span>
            <span class="text-gray"> / seat / month </span>
          </div>
          <div class="mt-6 font-bold">How many licenses do you need?</div>
          <div class="mt-4">
            <input
              v-model="sliderValue"
              class="slider w-full h-1 rounded-[20px] appearance-none cursor-pointer"
              type="range"
              aria-label="Select seats slider"
              :style="sliderStyle"
              :min="sliderMin"
              :max="sliderMax"
              :aria-valuenow="sliderValue"
              :aria-valuemin="sliderMin"
              :aria-valuemax="sliderMax"
            />
            <div class="flex justify-between text-sm text-gray-2">
              <span>5</span>
              <span>20</span>
            </div>
          </div>
          <div
            class="mt-4 flex items-center justify-between md:justify-start md:gap-5 xl:justify-between"
          >
            <div
              class="flex items-center justify-between w-[138px] bg-blue-dark-2/20 rounded-lg px-[14px] py-1"
            >
              <img
                src="/images/icons/seats.svg"
                alt="Seats"
                loading="lazy"
                class="h-4 w-4"
                fetchPriority="high"
              />
              <span class="text-gray-3 text-[26px] font-bold">{{
                sliderValue
              }}</span>
              <span class="text-gray-4">seats</span>
            </div>
            <div class="font-medium text-green">26% discount</div>
          </div>
        </div>
      </div>
    </div>
    <Button class="w-full mt-8 xl:mt-10"> Start Learning </Button>
    <div
      class="font-bold mt-6 text-center cursor-pointer text-green hover:text-green-dark"
    >
      Refer your manager
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  plan: PricingPlan;
}>();

const sliderMin = ref(5);
const sliderMax = ref(20);

const planIcon = iconMap[props.plan.plan_name];

const isProPlan = computed(() => props.plan.plan_name === PlanName.PRO);

const sliderValue = ref(12);
const sliderStyle = computed(() => {
  const value =
    ((sliderValue.value - sliderMin.value) /
      (sliderMax.value - sliderMin.value)) *
    100;
  return {
    background: `linear-gradient(to right, #0BD88F ${value}%, #737B98 ${value}%)`,
  };
});
</script>
<style scoped>
.slider::-webkit-slider-thumb {
  @apply bg-green appearance-none w-4 h-4 rounded-full;
}

.slider::-moz-range-thumb {
  @apply bg-green appearance-none w-4 h-4 rounded-full;
}
</style>
