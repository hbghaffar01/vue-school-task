<template>
  <section class="mt-[120px] md:mt-[140px] xl:mt-[200px]">
    <div
      class="custom-container mx-auto xl:text-balance md:max-w-2xl xl:max-w-3xl"
    >
      <p class="text-title sm:text-6xl/snug font-bold text-center">
        Discounted
        <span class="text-cyan-light"> Corporate </span>
        <span class="text-gradient"> Training </span>
        Bundles
      </p>
    </div>
    <div
      class="pricing-bg-image1 bg-[url('/images/backgrounds/wave-5.svg')] bg-cover md:bg-contain xl:bg-[url('/images/backgrounds/wave-6.svg')] xl:bg-cover bg-no-repeat xl:-mt-20"
    >
      <div
        class="pricing-bg-image2 xl:bg-cover bg-no-repeat flex justify-center"
      >
        <div class="custom-container mt-[72px] xl:mt-64">
          <div
            class="flex flex-col gap-6 justify-center items-center xl:flex-row xl:gap-[30px] xl:items-start"
          >
            <template v-for="(plan, index) in pricingPlans" :key="index">
              <PricingCard :plan="plan" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import PricingCard from "./ui-components/PricingCard.vue";

const query = groq`*[_type == "pricing"][0]{pricing_plans[]{plan_name, plan_details}}`;
const { data, error } = await useSanityQuery<PricingPlans>(query);

if (error.value) {
  throw createError({
    status: 400,
    message: error.value.message,
  });
}

const { pricing_plans: pricingPlans } = data.value as PricingPlans;
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .pricing-bg-image1 {
    background-position: top right -35rem;
  }
}

@media screen and (min-width: 1280px) {
  .pricing-bg-image2 {
    background-image: url("/images/backgrounds/wave-8.svg"),
      linear-gradient(to bottom, transparent, #212436 60%);
    background-blend-mode: hue;
    background-position: left 28rem;
    background-size: cover;
  }
}

@media screen and (max-width: 1280px) {
  .pricing-bg-image2 {
    background-image: url("/images/backgrounds/wave-7.svg"),
      linear-gradient(to bottom, transparent, #212436 60%);
    background-blend-mode: hue;
    background-position: center 30rem;
    background-size: contain;
  }
}
</style>
