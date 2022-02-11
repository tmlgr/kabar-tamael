<template>
  <div class="md:flex flex-col space-y-4 w-1/4 hidden">
    <div class="bg-white p-4 rounded-lg shadow-sm">
      <span class="font-bold text-xl">Kategori</span>
      <ul class="mt-4 flex flex-col space-y-3">
        <li v-for="(category, index) in categories" :key="index">
          <a href="#">{{ category.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const categories = ref([]);
const config = useRuntimeConfig();

const {
  data: { value },
} = await useFetch(`${config.API_BASE}/wp-json/wp/v2/categories`);

categories.value = value;
</script>
