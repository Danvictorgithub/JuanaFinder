<script setup lang="ts">
const props = defineProps({ containerHeight: Number });
const { x, y } = useWindowScroll();
const { height, width } = useWindowSize();
</script>

<template>
  <div
    :class="
      y > 0 &&
      y <= (containerHeight ? containerHeight - height : undefined || 1000)
        ? 'fixed bottom-10 left-1/2 ml-[-72px] opacity-100 transition-opacity ease-in'
        : 'fixed bottom-10 left-1/2 ml-[-72px] transition-opacity ease-in opacity-0'
    "
  >
    <!-- <div class="fixed bottom-16 left-1/2 ml-[-72px] opacity-100"> -->
    <NuxtLink to="map" class="flex justify-center items-center">
      <button
        class="flex justify-center items-center bg-primary w-36 h-full pt-3 pb-3 pr-4 pl-4 rounded-3xl text-[#F1F1EF] font-semibold"
      >
        <p class="hidden md:block">Show Map</p>
        <p class="block md:hidden">Map</p>
        <span class="material-symbols-outlined">pin_drop</span>
      </button>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
