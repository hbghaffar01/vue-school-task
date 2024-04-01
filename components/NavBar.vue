<template>
  <header class="flex px-6 pt-5">
    <nav class="flex items-center justify-between py-5 xl:px-12 flex-1">
      <div class="flex gap-6">
        <img
          src="/images/burger-icon.svg"
          alt="Collapsed menu"
          class="xl:hidden cursor-pointer w-[26px] h-[56px]"
          aria-label="Toggle navigation menu"
        />
        <NuxtLink to="/" aria-label="Back to home page">
          <img
            src="/images/logo-only.svg"
            alt="Vue School"
            class="w-[170px] h-[56px]"
          />
        </NuxtLink>
      </div>

      <div class="hidden gap-5 xl:flex">
        <div
          v-for="{ name, path, isDropdown } in Navlinks"
          :key="`${name}-${path}`"
          class="hover:text-green hover:cursor-pointer"
        >
          <div v-if="isDropdown" class="flex gap-2">
            <span>{{ name }}</span>
            <img
              src="/images/chevron.svg"
              class="w-2 text-white"
              alt="Dropdown menu"
              fetchPriority="high"
            />
          </div>
          <div v-else>
            <NuxtLink to="/">
              {{ name }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="hidden sm:flex gap-[30px] items-center">
        <NuxtLink to="/" class="hover:text-green"> Log in </NuxtLink>
        <button
          class="border-gradient relative font-medium text-green py-5 px-10"
          role="button"
        >
          Sign up
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const Navlinks = [
  {
    name: "Courses",
    isDropdown: true,
  },
  {
    name: "Plans",
    path: "/plans",
  },
  {
    name: "Business Services",
    isDropdown: true,
  },
  {
    name: "Learning Paths",
    path: "/learning-paths",
  },
  {
    name: "Articles",
    path: "/articles",
  },
  {
    name: "Events",
    isDropdown: true,
  },
  {
    name: "Get Certified",
    path: "/certified",
  },
];
</script>

<style scoped>
.border-gradient:before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 10px;
  border: 2px solid transparent;
  background: linear-gradient(45deg, #0bd88f, #00c2ff) border-box;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
</style>
