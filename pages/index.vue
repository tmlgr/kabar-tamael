<template>
  <div class="w-full">
    <div class="p-6 shadow">
      <page-title title="<strong>Headline</strong> hari ini" />
      <headline />
    </div>
    <div class="flex flex-col divide-y">
      <div class="p-6">
        <page-title title="<strong>Kabar</strong> terkini" />
      </div>
      <template v-if="posts">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="relative p-[15px] bg-white min-h-4"
        >
          <div class="relative float-right w-[90px] h-[90px]">
            <img
              :src="post.jetpack_featured_media_url"
              :alt="post.title.rendered"
              class="rounded-xl object-cover min-w-full min-h-full"
            />
          </div>
          <div class="pr-24 text-gray-800">
            <nuxt-link :to="`/posts/${post.slug}`">
              <h3 class="font-semibold text-lg leading-tight">
                {{ post.title.rendered }}
              </h3>
            </nuxt-link>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
const posts = ref(null);
const config = useRuntimeConfig();

const { data, pending, refresh, error } = await useFetch(
  `${config.API_BASE}/wp-json/wp/v2/posts?per_page=10`
);

posts.value = data.value;
</script>
