<template>
  <div>
    <div class="mt-4 bg-white m-2 p-2 rounded-xl shadow-sm">
      <img
        :src="post.cover"
        :alt="post.title"
        class="rounded-xl object-fill min-w-full"
      />
      <div class="flex items-center px-2">
        <div class="mt-4">
          <ul class="flex flex-row space-x-2">
            <li
              v-for="(v, i) in 2"
              :key="i"
              class="bg-green-300 py-[1px] px-2 rounded-full text-sm text-green-700"
            >
              Ternate {{ ++i }}
            </li>
          </ul>
        </div>
        <div class="ml-auto mt-4">
          <ul class="flex flex-row space-x-2">
            <li>dwd</li>
            <li>dwd</li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col mt-4 px-4 pb-4">
        <span>{{ post.title }}</span>
        <div class="flex mt-4">
          <img
            :src="post.author.picture"
            :alt="post.author.name"
            class="rounded-full mr-2"
          />
          <div>
            <h1 class="font-semibold">{{ post.author.name }}</h1>
            <span class="text-sm text-gray-400">{{ post.created_at }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4" v-html="post.content"></div>
  </div>
</template>
<script setup>
const post = ref(null);
const related = ref([]);
const config = useRuntimeConfig();
const route = useRoute();

const { slug } = route.params;

const {
  data: { value },
} = await useFetch(`${config.API_BASE}/wp-json/wp/v2/posts?slug=${slug}`, {
  transform: (data) => {
    let result = data[0];

    return {
      author: result["_links"].author[0],
      created_at: result.date,
      title: result.title.rendered,
      content: result.content.rendered,
      cover: result.jetpack_featured_media_url,
      related: result["jetpack-related-posts"],
    };
  },
});

const {
  author: { href },
} = value;

const { data } = await useFetch(`${href}`, {
  transform: (data) => {
    return {
      author: {
        name: data.name,
        picture: Object.values(data.avatar_urls)[1],
      },
    };
  },
});

value.author = data.value.author;

post.value = value;
</script>
