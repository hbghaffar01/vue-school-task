<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useServerSeoMeta({
  title: "Vue School",
  ogTitle: "Vue School | Complete Vue.js training solutions for companies",
  description:
    "Training solutions designed for companies who are using the Vue.js framework",
  ogDescription: "Training solutions for Vue.js framework",
  ogUrl: "https://vueschool.io",
  ogType: "website",
  ogImage: "/images/logo-only.svg",
  twitterTitle: "Vue School | Complete Vue.js training solutions for companies",
  twitterDescription:
    "Training solutions designed for companies, agencies and organisations with developers using or who are considering using the Vue.js framework",
});
</script>
