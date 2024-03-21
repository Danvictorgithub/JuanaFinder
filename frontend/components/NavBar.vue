<script setup>
const isLogin = ref(true)
</script>

<template>
    <div class="bottom-0 w-full block sm:hidden fixed">
        <nav class="bg-white">
            <div class="flex items-center justify-center h-18">
                <div v-if="!isLogin" class="flex gap-16">
                    <NuxtLink class="flex flex-col items-center justify-center">
                        <span class="material-symbols-outlined text-3xl">search</span>
                        <p>Search</p>
                    </NuxtLink>
                    <NuxtLink class="flex flex-col items-center justify-center" style="text-align: center;">
                        <span class="material-symbols-outlined">add_circle</span>
                        <p>Proposal</p>
                    </NuxtLink>
                    <NuxtLink class="flex flex-col items-center justify-center">
                        <span class="material-symbols-outlined text-3xl ">person</span>
                        <p>Log In</p>
                    </NuxtLink>
                </div>
                <div v-else class="flex gap-8">
                    <NuxtLink class="flex flex-col items-center justify-center">
                        <span class="material-symbols-outlined text-3xl ">person</span>
                        <p>Profile</p>
                    </NuxtLink>
                    <NuxtLink class="flex flex-col items-center justify-center">
                        <span class="material-symbols-outlined text-3xl">search</span>
                        <p>Search</p>
                    </NuxtLink>
                    <NuxtLink class="flex flex-col items-center justify-center">
                        <span class="material-symbols-outlined">add_circle</span>
                        <p>Proposal</p>
                    </NuxtLink>
                    <NuxtLink class="flex flex-col items-center justify-center">
                        <span class="material-symbols-outlined">contract</span>
                        <p>Contract</p>
                    </NuxtLink>
                    <NuxtLink class="flex flex-col items-center justify-center">
                        <span class="material-symbols-outlined">notifications</span>
                        <p>Alert</p>
                    </NuxtLink>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>

</style>