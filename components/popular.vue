<template>
  <div>
    <div class="flex items-center">
      <h1 class="text-2xl"><span class="font-bold">Kabar</span> populer</h1>
      <nuxt-link to="/posts/popular" class="ml-auto">Lihat Semua</nuxt-link>
    </div>
    <div class="flex flex-col items-center gap-2 mt-4">
      <div v-for="(v, i) in 5" :key="i" class="flex bg-white rounded-lg shadow-sm p-2">
        <img
          src="https://via.placeholder.com/80x80"
          alt="Popuplar news thumbnail"
          class="rounded-lg mr-2"
        />
        <div class="flex items-center">
          <p class="text-md font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.  {{ ++i }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popular",
};
</script>
