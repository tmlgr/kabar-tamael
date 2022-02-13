<template>
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
        <div class="relative float-right w-[130px] h-[130px]">
          <img
            :alt="post.title"
            v-lazy="post.cover"
            class="rounded-xl object-cover min-w-full min-h-full"
          />
        </div>
        <div class="text-gray-800">
          <nuxt-link :to="`/posts/${post.slug}`">
            <h3
              class="font-semibold text-lg leading-tight"
              v-html="post.title"
            ></h3>
          </nuxt-link>
        </div>
        <div class="mt-[5px] mb-2 flex flex-row items-center space-x-2">
          <span
            class="font-semibold text-green-500"
            v-for="(category, index) in post.categories"
            :key="index"
            v-html="category.name"
          ></span>
        </div>
        <span class="text-gray-600 absolute bottom-3">
          <div class="flex">
            <div>
              <img
                :alt="post.author.name"
                v-lazy="post.author.profile_picture"
                class="rounded-full w-[2.5em] h-[2.5em] mr-2"
              />
            </div>
            <div class="flex flex-col">
              <span class="font-semibold">{{ post.author.name }}</span>
              <span class="text-xs">{{ $datetime(post.created_at) }}</span>
            </div>
          </div>
        </span>
      </div>
    </template>
  </div>
</template>

<script setup>
defineProps({
  posts: [Object, Array],
});
</script>
