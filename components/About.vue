<template>
  <section
    class="about-bg-image1 bg-[url('/images/backgrounds/wave-1.svg')] xl:bg-[url('/images/backgrounds/wave-2.svg')] bg-cover bg-no-repeat -mt-12"
  >
    <div class="about-bg-image2 bg-cover bg-no-repeat flex pt-5">
      <div class="custom-container mx-auto mt-[160px] xl:mt-[100px]">
        <div
          class="bg-blue opacity-90 mb-20 p-6 items-center flex flex-col border-2 border-white/15 rounded-3xl xl:items-center xl:py-16 xl:px-10 md:py-10 md:px-6 md:items-start md:flex-row"
        >
          <div class="m-0 mb-4 md:mx-20 md:mb-14 md:mt-8 xl:mx-36 xl:my-14">
            <img
              src="/images/logo.svg"
              alt="Vue School"
              fetchPriority="high"
              class="w-auto h-auto max-w-24 max-h-24 md:max-w-md md:max-h-32 xl:max-w-max xl:max-h-max"
            />
          </div>
          <div class="text-center md:text-left sm:max-w-lg md:max-w-xl xl:max-w-3xl">
            <p class="font-bold mb-8 text-2xl/[28px] text-white sm:text-title">
              {{ about_data.about }}
            </p>
            <p class="text-sm sm:text-[22px]/[30px]">
              {{ about_data.description }}
            </p>
          </div>
        </div>

        <div class="hidden xl:flex justify-between">
          <img
            v-for="n in 6"
            :key="n"
            src="/images/google-icon.svg"
            alt="sponsors"
            class="w-[160px] h-[57px]"
            fetchPriority="low"
          />
        </div>

        <section
          class="flex flex-col text-center mt-[120px] xl:text-left xl:flex-row xl:justify-between xl:mt-[180px] md:mt-[140px]"
        >
          <div class="xl:max-w-xl">
            <p class="text-gradient text-2xl font-medium mb-3">
              YOUR #1 SOURCE OF VUE.JS COURSES
            </p>
            <h1>
              Full Stack
              <span class="text-cyan-light"> Vue </span>
              <span class="text-gradient"> Training </span>
              Solutions
            </h1>
          </div>
          <div class="flex justify-center gap-6 flex-col xs:flex-row md:gap-[60px]">
            <template v-for="{ title, amount, icon } in staticsData" :key="title">
              <Statistics :title :amount :icon />
            </template>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Statistics from "./ui-components/Statistics.vue";

interface Staistics {
  lessons: number;
  courses: number;
  hours?: number;
}
interface About {
  about: string;
  description: string;
}

const about_data = ref();

const query = groq`*[_type == "statics"][0]{ lessons, courses, hours }`;
const about = groq`*[_type == "hero"][0]{ ..., about, description }`;
const getAbout = async () => {
  const { data, error } = await useSanityQuery<About>(about);
  if (error.value) {
    throw createError({
      status: 400,
      message: error.value.message,
    });
  } else {
    about_data.value = data.value;
  }
};
getAbout();

const { data, error } = await useSanityQuery<Staistics>(query);

if (error.value) {
  throw createError({
    status: 400,
    message: error.value.message,
  });
}

const { lessons, courses, hours } = data.value as Staistics;

const staticsData = computed(() => [
  {
    title: "Video lessons",
    amount: lessons,
    icon: "lessons",
  },
  {
    title: "Courses",
    amount: courses,
    icon: "courses",
  },
  {
    title: "Hours",
    amount: hours,
    icon: "hours",
  },
]);
</script>

<style scoped>
.about-bg-image1 {
  background-position: top;
}

@media screen and (max-width: 768px) {
  .about-bg-image1 {
    background-position: top right -25rem;
    margin-top: -6rem;
  }
}

@media screen and (min-width: 1280px) {
  .about-bg-image2 {
    background-image: url("/images/backgrounds/wave-2.svg"),
      linear-gradient(to bottom, transparent, #212436 60%);
    background-position: top;
    background-blend-mode: hue;
  }
}

@media screen and (max-width: 1280px) {
  .about-bg-image2 {
    background-image: url("/images/backgrounds/wave-3.svg"),
      linear-gradient(to bottom, transparent, #212436 60%);
    background-position: center 1rem;
    background-blend-mode: hue;
  }
}
</style>
