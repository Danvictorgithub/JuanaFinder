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
</script>
  <!-- #2F414F #00ADB5 #F1F1EF #C7DAD4 #111419 -->
<template>
  <main class="">
    <Header />
    <section class="min-h-svh">
      <div class="p-4">
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

      <MapButton />
    </section>
    
    <Footer />
    <NavBar/> 

  </main>
</template>

<style scoped></style>
