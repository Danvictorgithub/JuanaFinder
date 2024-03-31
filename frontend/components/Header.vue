<script setup lang="ts">
let isLoginClient = ref(true);
let isLoginTalent = ref(false);
</script>

<template>
  <header class="p-4 border-b-2 border-b-gray-200 bg-white">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Desktop -->
      <div class="hidden md:block w-full py-2">
        <nav
          v-if="!isLoginClient && !isLoginTalent"
          class="hidden md:flex justify-between items-center gap-8"
        >
          <NuxtLink to="/" class="flex gap-3 items-center">
            <img src="/logo.svg" class="h-12 w-12" alt="" />
            <h1 class="text-primary text-2xl font-bold">JuanaFinder</h1>
          </NuxtLink>
          <NuxtLink
            class="text-lg font-semibold text-[#2F414F] hover:bg-gray-100 rounded-3xl p-2 px-4"
          >
            Sign In
          </NuxtLink>
          <NuxtLink
            class="border-2 border-primary py-0.5 px-3.5 rounded-md text-primary font-semibold text-lg hover:bg-primary hover:text-[#F1F1EF]"
          >
            Sign Up
          </NuxtLink>
        </nav>

        <nav v-else-if="isLoginClient" class="hidden md:block">
          <div class="flex justify-around items-center gap-8 w-full">
            <NuxtLink to="/" class="flex gap-3 items-center">
              <img src="/logo.svg" class="h-12 w-12" alt="" />
              <h1 class="text-primary text-2xl font-bold">JuanaFinder</h1>
            </NuxtLink>
            <div class="flex gap-8">
              <NuxtLink
                to="client/profile"
                class="text-lg font-semibold text-[#2F414F] hover:bg-gray-100 rounded-3xl p-2 px-4 cursor-pointer"
              >
                Profile
              </NuxtLink>
              <NuxtLink
                class="text-lg font-semibold text-[#2F414F] hover:bg-gray-100 rounded-3xl p-2 px-4 cursor-pointer"
              >
                Search
              </NuxtLink>
              <NuxtLink
                class="text-lg font-semibold text-[#2F414F] hover:bg-gray-100 rounded-3xl p-2 px-4 cursor-pointer"
              >
                Contract
              </NuxtLink>
            </div>
            <div class="flex">
              <NuxtLink
                class="text-lg font-semibold text-[#2F414F] hover:bg-gray-100 rounded-3xl p-2 px-4 cursor-pointer"
              >
                Become a Talent
              </NuxtLink>
              <NuxtLink class="">
                <img
                  src="/profilesample.jpg"
                  class="h-12 w-12 rounded-full cursor-pointer"
                  alt=""
                />
              </NuxtLink>
            </div>
          </div>
          <div class="flex justify-center items-center p-2">
            <NuxtLink
              class="p-4 px-16 border-2 border-primary text-xl font-bold text-primary hover:bg-gray-100 rounded-full cursor-pointer"
            >
              Post a Job
            </NuxtLink>
          </div>
        </nav>

        <nav v-else-if="isLoginTalent" class="hidden md:block">
          <div class="flex justify-around items-center gap-8 w-full">
            <NuxtLink to="/" class="flex gap-3 items-center">
              <img src="/logo.svg" class="h-12 w-12" alt="" />
              <h1 class="text-primary text-2xl font-bold">JuanaFinder</h1>
            </NuxtLink>
            <div class="flex gap-8">
              <NuxtLink
                class="text-lg font-semibold text-[#2F414F] hover:bg-gray-100 rounded-3xl p-2 px-4 cursor-pointer"
              >
                Profile
              </NuxtLink>
              <NuxtLink
                class="text-lg font-semibold text-[#2F414F] hover:bg-gray-100 rounded-3xl p-2 px-4 cursor-pointer"
              >
                Search
              </NuxtLink>
              <NuxtLink
                class="text-lg font-semibold text-[#2F414F] hover:bg-gray-100 rounded-3xl p-2 px-4 cursor-pointer"
              >
                Contract
              </NuxtLink>
            </div>
            <div class="flex items-center">
              <NuxtLink
                class="text-lg font-semibold text-[#2F414F] hover:bg-gray-100 rounded-3xl p-2 px-4 cursor-pointer"
              >
                Become a Talent
              </NuxtLink>

              <NuxtLink class="">
                <img
                  src="/profilesample.jpg"
                  class="h-12 w-12 rounded-full cursor-pointer"
                  alt=""
                />
              </NuxtLink>
            </div>
          </div>
          <div class="flex justify-center items-center p-2">
            <NuxtLink
              class="p-4 px-16 border-2 border-primary text-xl font-bold text-primary hover:bg-gray-100 rounded-full cursor-pointer"
            >
              Post a Job
            </NuxtLink>
          </div>
        </nav>
      </div>

      <!-- Mobile -->
      <div class="block md:hidden w-full">
        <div class="flex justify-between items-center">
          <NuxtLink to="/">
            <button>
              <img src="/logo.svg" class="h-12 w-12" alt="" />
            </button>
          </NuxtLink>
          <button v-if="!isLoginClient && !isLoginTalent">
            <span class="material-symbols-outlined text-primary text-5xl"
              >account_circle</span
            >
          </button>
          <button v-else-if="isLoginClient">
            <img
              src="/profilesample.jpg"
              class="h-12 w-12 rounded-full cursor-pointer"
              alt=""
            />
          </button>
          <button v-else-if="isLoginTalent">
            <img
              src="/profilesample.jpg"
              class="h-12 w-12 rounded-full cursor-pointer"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Add any additional styles here */
</style>
