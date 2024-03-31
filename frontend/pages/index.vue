<script setup lang="ts">
let listClient = ref(false);
let listTalent = ref(true);

const handleClientButtonClick = () => {
  listClient.value = true;
  listTalent.value = false;
};

const handleTalentButtonClick = () => {
  listClient.value = false;
  listTalent.value = true;
};

const el = ref(null);
const { width, height } = useElementSize(el);
</script>
<!-- #2F414F #00ADB5 #F1F1EF #C7DAD4 #111419 -->
<template>
  <main class="bg-slate-50">
    <Header />
    <section class="min-h-[100px] py-12 px-4" ref="el">
      <!-- # Later sa ni gamiton # -->
      <!-- <div v-if="!loginClient && !loginTalent" class="p-4">
        <div class="flex justify-center items-center gap-8">
          <button
            class="text-2xl font-semibold rounded-3xl px-4 py-2 transition-colors duration-150 ease-in-out"
            :class="[
              { 'bg-primary hover:bg-primary text-[#F1F1EF]': listTalent },
              { 'hover:bg-gray-100': !listTalent },
            ]"
            @click="handleTalentButtonClick"
          >
            Find Talent
          </button>
          <button
            class="text-2xl font-semibold rounded-3xl px-4 py-2 transition-colors duration-150 ease-in-out"
            :class="[
              { 'bg-primary hover:bg-primary text-[#F1F1EF]': listClient },
              { 'hover:bg-gray-100': !listClient },
            ]"
            @click="handleClientButtonClick"
          >
            Find Client
          </button>
        </div>

        <div class="flex justify-center items-center">
          <div v-if="listTalent">
            <ListTalent />
          </div>
          <div v-else-if="listClient">
            <ListClient />
          </div>
        </div>
      </div>
      <div v-else-if="loginClient">
        <ListClient />
      </div>
      <div v-else-if="loginTalent">
        <ListTalent />
      </div> -->
      <section class="container mx-auto bg-white p-4 rounded-xl">
        <div class="font-bold text-3xl flex items-center gap-4">
          <span class="material-symbols-outlined text-3xl"> location_on </span>
          <div>
            You're At
            <span
              class="text-main hover:border-b-4 border-main hover:cursor-pointer"
            >
              Butuan City, Ampayon
            </span>
          </div>
        </div>
        <div class="py-4">
          <ListTalent />
        </div>
      </section>
      <section class="mx-auto container bg-white rounded-xl mt-4">
        <div class="flex justify-between items-center p-4 gap-4">
          <div
            class="flex-1 basis-0 flex justify-center font-bold text-3xl text-main border-2 border-main rounded-xl p-4"
          >
            <p>Talents</p>
          </div>
          <button
            class="flex-1 basis-0 flex justify-center font-medium duration-150 text-gray-700 hover:text-main rounded-xl p-4 border-2 border-transparent hover:border-gray-300 ease-in-out"
          >
            <p>Clients</p>
          </button>
        </div>
        <!-- <div>
          <h2 class="text-3xl font-bold text-center mt-8">Find Talent</h2>
          <p class="text-center text-lg text-gray-500">
            Search for the best talent in your area
          </p>
        </div> -->
        <div class="relative">
          <input
            type="text"
            class="p-3 border-2 border-gray-200 rounded-lg w-full mt-4 font-medium"
            placeholder="Manicure | Dog Walker | Tutor"
          />

          <button type="submit" class="absolute right-6 top-[29px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </section>

      <section
        class="container mx-auto grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))]"
      >
        <div class="mx-5 mt-5" v-for="i in Array.from({ length: 15 })">
          <img
            class="rounded-lg object-cover h-[250px] w-full"
            src="/joseana.jpg"
            alt=""
          />
          <div class="flex flex-row justify-between items-start mt-4">
            <div>
              <p class="text-sm text-gray-800 font-bold">Jose Ana's Manicure</p>
              <p class="text-sm text-gray-800">500 m radius away</p>
              <p class="text-sm text-gray-800 mt-2">
                <strong>₱200</strong> service
              </p>
            </div>
            <div class="flex flex-row items-center">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <p class="text-sm">4.92</p>
            </div>
          </div>
        </div>
        <div class="mx-5 mt-5" v-for="i in Array.from({ length: 15 })">
          <img
            class="rounded-lg object-cover h-[250px] w-full"
            src="/medi.jpg"
            alt=""
          />
          <div class="flex flex-row justify-between items-start mt-4">
            <div>
              <p class="text-sm text-gray-800 font-bold">Medi's Cleaners</p>
              <p class="text-sm text-gray-800">1 km radius away</p>
              <p class="text-sm text-gray-800 mt-2">
                <strong>₱1000</strong> service
              </p>
            </div>
            <div class="flex flex-row items-center">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <p class="text-sm">4.92</p>
            </div>
          </div>
        </div>
      </section>
      <MapButton :container-height="height" />
    </section>

    <Footer />
    <NavBar />
  </main>
</template>

<style scoped></style>
