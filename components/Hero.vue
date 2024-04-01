<template>
  <div class="custom-container mx-auto mt-8 md:mt-12 xl:mt-8">
    <section class="flex flex-col items-center xl:justify-between xl:flex-row">
      <div class="text-center xl:text-left xl:max-w-xl">
        <h1 v-html="sanitizer(highlightedHeading)" />
        <p class="text-[22px] mt-10">
          {{ paragraph }}
        </p>
        <Button class="mt-10">
          {{ ctaText }}
        </Button>
      </div>
      <div class="">
        <img
          src="/images/hero.svg"
          alt="Hero image"
          class="mt-12 w-auto h-auto max-w-[90%] xl:mt-0 xl:float-right"
          fetchPriority="high"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import sanitizeHtml from "sanitize-html";

const sanitizer = (html: string): string => {
  return sanitizeHtml(html, {
    allowedTags: ["span"],
    allowedAttributes: {
      span: ["class"],
    },
  });
};

interface HeroSection {
  heading: string;
  paragraph: string;
  cta_text: string;
  highlighted_heading_texts?: string;
}

const query = groq`*[_type == "hero"][0]{ heading, paragraph, cta_text, highlighted_heading_texts }`;
const { data, error } = await useSanityQuery<HeroSection>(query);

if (error.value) {
  throw createError({
    status: 400,
    message: error.value.message,
  });
}

const {
  heading,
  paragraph,
  cta_text: ctaText,
  highlighted_heading_texts: highlightedTexts,
} = data.value as HeroSection;

const highlightedHeading = computed(() => {
  if (!highlightedTexts) return heading;

  return `<span>${heading.replace(
    highlightedTexts,
    `<span class="text-green">${highlightedTexts}</span>`
  )}</span>`;
});
</script>
