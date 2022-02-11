<template>
  <div class="flex flex-col space-y-4 w-1/4">
    <div class="bg-white p-4 rounded-lg shadow-sm">
      <span class="font-bold text-xl">Kategori</span>
      <ul class="mt-4 flex flex-col space-y-3">
        <li v-for="(category, index) in categories" :key="index">
          <a href="#">{{ category.name }}</a>
        </li>
      </ul>
    </div>

    <div class="bg-white p-4 rounded-lg shadow-sm">
      <span class="font-bold text-xl">Tag</span>
      <ul class="mt-4 flex flex-col space-y-3">
        <li v-for="(tag, index) in tags" :key="index">
          <a href="#">{{ tag.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftbar",
  data() {
    return {
      tags: null,
      categories: null,
    };
  },
  mounted() {
    this.getTags();
    this.getCategories();
  },
  methods: {
    async getTags() {
      let response = await fetch(
        "https://css-tricks.com/wp-json/wp/v2/tags"
      );
      let results = await response.json();

      console.log(results);

      this.tags = results;
    },
    async getCategories() {
      let response = await fetch(
        "https://css-tricks.com/wp-json/wp/v2/categories"
      );
      let results = await response.json();

      this.categories = results;
    },
  },
};
</script>
