<script setup lang="ts">
import { ref } from 'vue';

const categories = [
    'All',
    'Outside',
    'Errands',
    'Kitchen',
    'Academics',
    'House',
    'Clean',
];

const activeCategory = ref(categories[0]);

function setActiveCategory(category: string) {
    activeCategory.value = category;
}
</script>

<template>
    <div class="">
        <div class="flex flex-wrap justify-center items-center gap-12 py-6">
            <div v-for="category in categories" @click="setActiveCategory(category)" class="flex flex-col justify-center items-center text-gray-500 border-b-2 border-white hover:border-b-2 hover:border-gray-500 hover:text-black cursor-pointer" :class="[{'text-primary': activeCategory === category}, {'hover:text-primary': activeCategory === category},{'hover:border-b-primary': activeCategory === category}]">
                <span class="material-symbols-outlined text-3xl">favorite</span>
                <button class="text-sm font-semibold ">{{ category }}</button>
            </div>
        </div>  
        <div class="flex justify-center items-center py-8">
            {{ activeCategory }}
        </div>
    </div>
</template>

<style scoped>
</style>