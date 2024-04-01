<template>
  <div
    class="mx-auto sm:px-0 sm:mx-4 md:mx-20 xl:mx-auto mt-[100px] md:mt-[140px] xl:mt-[200px]"
  >
    <footer class="flex flex-col xl:justify-center xl:flex-row xl:gap-x-32">
      <div class="flex items-center flex-col xl:block md:mb-10">
        <img
          src="/images/logo-only.svg"
          alt="Vue School"
          class="w-[268px] h-[88px]"
          loading="lazy"
          fetchPriority="low"
        />
        <p
          class="max-w-lg text-center my-8 md:my-10 xl:text-left xl:mt-[85px] xl:mb-[60px]"
        >
          Thanks to fine people like you, Vue School can proudly sponsor Evan
          and the future of Vue.js by being a Platinum Patreon
        </p>
        <p class="footer-heading mb-6 md:mb-8 xl:mb-10">
          follow us in social media
        </p>
        <div class="flex gap-3 md:gap-[42px] xl:gap-[42px] mb-10 xl:mb-0">
          <div v-for="{ name, href } in social_links" :key="name">
            <NuxtLink :to="href" target="_blank">
              <img
                :src="`/images/social_media/${name}.svg`"
                :alt="`Vue School on ${name}`"
                loading="lazy"
                fetchPriority="low"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
      <div>
        <div
          class="grid flex-1 text-center md:text-left md:grid-flow-row md:grid-cols-3 md:grid-rows-2 md:gap-x-30 xl:grid-cols-2 xl:grid-rows-3 xl:gap-x-32"
        >
          <div
            v-for="{ heading, links, customClasses } in footer_links"
            :key="heading"
            class="footer-link-group"
            :class="customClasses"
          >
            <p class="footer-heading">
              {{ heading }}
            </p>
            <a
              v-for="{ name, href } in links"
              :key="name"
              :href="href"
              target="_blank"
              class="footer-link"
            >
              {{ name }}
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const social_links = [
  {
    name: "facebook",
    href: "https://www.facebook.com/vueschool",
  },
  {
    name: "twitter",
    href: "https://twitter.com/vueschool_io",
  },
  {
    name: "github",
    href: "https://github.com/vueschool/",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/company/vueschool",
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/@vueschool",
  },
];

const footer_links = [
  {
    heading: "products",
    customClasses: ["xl:order-1"],
    links: [
      {
        name: "courses",
        href: "/",
      },
      {
        name: "workshops",
        href: "/",
      },
      {
        name: "vue masterclass",
        href: "/",
      },
      {
        name: "mastering nuxt",
        href: "/",
      },
    ],
  },
  {
    heading: "corporate",
    customClasses: ["xl:order-4", "xl:-mt-12"],
    links: [
      {
        name: "corporate training",
        href: "/",
      },
      {
        name: "developer recruitement",
        href: "/",
      },
      {
        name: "course development",
        href: "/",
      },
      {
        name: "on-site workshops",
        href: "/",
      },
      {
        name: "consulting",
        href: "/",
      },
      {
        name: "affiliate programs",
        href: "/",
      },
    ],
  },
  {
    heading: "connect with us",
    customClasses: ["xl:order-5", "xl:-mt-28"],
    links: [
      {
        name: "about us",
        href: "/",
      },
      {
        name: "careers",
        href: "/",
      },
      {
        name: "contact us",
        href: "/",
      },
    ],
  },
  {
    heading: "events",
    customClasses: ["xl:order-2"],
    links: [
      {
        name: "vue.js nation",
        href: "/",
      },
      {
        name: "nuxt nation",
        href: "/",
      },
      {
        name: "vue.js forge",
        href: "/",
      },
    ],
  },
  {
    heading: "resources",
    customClasses: ["xl:order-6"],
    links: [
      {
        name: "articles",
        href: "/",
      },
    ],
  },
  {
    heading: "pricing",
    customClasses: ["xl:order-3"],
    links: [
      {
        name: "plans",
        href: "/",
      },
    ],
  },
];
</script>

<style scoped>
.footer-link-group {
  @apply flex flex-col mb-8;
}

.footer-heading {
  @apply text-gray-2 font-medium uppercase text-xl mb-5;
}

.footer-link {
  @apply hover:text-green capitalize mb-[14px];
}
</style>
