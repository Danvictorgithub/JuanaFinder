<script setup>
    import { ref } from 'vue';

    const isMenuOpen = ref(false);

    function toggleMenu() {
        isMenuOpen.value = !isMenuOpen.value;
    }
</script>

<template>
    <div class="bottom-0 absolute w-full block sm:hidden">
        <nav class="bg-gray-800">
            <div class="flex items-center justify-center h-12">
                <div class="ml-10 flex items-baseline space-x-4">
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Profile</a>
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Search</a>
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contracts</a>
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Notification</a>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>

</style>