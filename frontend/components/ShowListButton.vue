<template>
  <div
    class="absolute bottom-10 left-1/2 ml-[-72px] opacity-100 transition-opacity ease-in"
  >
    <NuxtLink to="/" class="flex justify-center items-center">
      <button
        class="flex justify-center items-center bg-[#00ADB5] w-36 h-full pt-3 pb-3 pr-4 pl-4 rounded-3xl text-[#F1F1EF] font-semibold"
      >
        <p class="hidden md:block">Show List</p>
        <p class="block md:hidden">List</p>
        <span class="material-symbols-outlined">list</span>
      </button>
    </NuxtLink>
  </div>
</template>
