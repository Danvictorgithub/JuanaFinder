<script setup lang="ts"></script>

<template>
  <header class="p-4 border-b-2 border-b-[#111419] border-opacity-50">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Mobile -->
      <!-- <button class="block md:hidden">
        <span class="material-symbols-outlined"> menu </span>
      </button> -->
      <!-- Mobile -->
      <NuxtLink to="/" class="flex gap-3 items-center">
        <img src="/logo.svg" class="h-12 w-12" alt="" />
        <h1 class="text-[#00ADB5] text-2xl font-bold">JuanaFinder</h1>
      </NuxtLink>
      <!-- Mobile -->
      <nav class="block md:hidden">
        <NuxtLink
          class="border-2 border-[#00ADB5] py-2 px-3.5 rounded-md text-[#00ADB5] font-semibold text-lg"
        >
          Join
        </NuxtLink>
      </nav>
      <!-- Mobile -->
      <nav class="hidden md:flex justify-between items-center gap-8">
        <NuxtLink class="text-lg font-semibold text-[#2F414F]">
          Become a Talent
        </NuxtLink>
        <NuxtLink class="text-lg font-semibold text-[#2F414F]"
          >Sign In</NuxtLink
        >
        <NuxtLink
          class="border-2 border-[#00ADB5] py-0.5 px-3.5 rounded-md text-[#00ADB5] font-semibold text-lg"
        >
          Join
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Add any additional styles here */
</style>
