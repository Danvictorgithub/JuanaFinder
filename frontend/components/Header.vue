<script setup lang="ts"></script>

<template>
  <header class="p-4 border-b-2 border-b-gray-200 bg-white">
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
          to="/signup"
          class="border-2 border-[#00ADB5] py-2 px-3.5 rounded-md text-[#00ADB5] font-semibold text-lg"
        >
          Sign Up
        </NuxtLink>
      </nav>
      <!-- Mobile -->
      <nav class="hidden md:flex justify-between items-center gap-8">
        <NuxtLink
          class="text-lg font-semibold text-[#2F414F] hover:bg-gray-100 rounded-3xl p-2 px-4"
        >
          Become a Talent
        </NuxtLink>
        <NuxtLink
          to="/signin"
          class="text-lg font-semibold text-[#2F414F] hover:bg-gray-100 rounded-3xl p-2 px-4"
          >Sign In</NuxtLink
        >
        <NuxtLink
          to="/signup"
          class="border-2 border-[#00ADB5] py-0.5 px-3.5 rounded-md text-[#00ADB5] font-semibold text-lg hover:bg-[#00ADB5] hover:text-[#F1F1EF]"
        >
          Sign Up
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Add any additional styles here */
</style>
