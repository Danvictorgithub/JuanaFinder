<script setup lang="ts">
import { ref } from "vue";

const categories = [
  "All",
  "Outside",
  "Errands",
  "Kitchen",
  "Academics",
  "House",
  "Clean",
  "Gardening",
  "Pet",
  "Others",
  "Outside",
  "Errands",
  "Kitchen",
  "Academics",
  "House",
  "Clean",
  "Gardening",
  "Pet",
  "Others",
  "Outside",
  "Errands",
  "Kitchen",
  "Academics",
  "House",
  "Clean",
  "Gardening",
  "Pet",
  "Others",
  "Outside",
  "Errands",
  "Kitchen",
  "Academics",
  "House",
  "Clean",
  "Gardening",
  "Pet",
  "Others",
];

const activeCategory = ref(categories[0]);

function setActiveCategory(category: string) {
  activeCategory.value = category;
}
</script>

<template>
  <div class="">
    <div class="flex gap-4 pb-4 overflow-auto whitespace-nowrap snap-mandatory">
      <div
        v-for="category in categories"
        @click="setActiveCategory(category)"
        class="flex flex-col justify-center items-center text-gray-500 border-b-2 border-white hover:border-b-2 hover:border-gray-500 hover:text-black cursor-pointer"
        :class="[
          { 'text-primary': activeCategory === category },
          { 'hover:text-primary': activeCategory === category },
          { 'hover:border-b-primary': activeCategory === category },
        ]"
      >
        <span class="material-symbols-outlined text-3xl">favorite</span>
        <button
          @click="setActiveCategory(category)"
          class="text-sm font-semibold"
        >
          {{ category }}
        </button>
      </div>
    </div>
    <!-- <div class="flex justify-center items-center py-8">
      {{ activeCategory }}
    </div> -->
  </div>
</template>

<style scoped></style>
