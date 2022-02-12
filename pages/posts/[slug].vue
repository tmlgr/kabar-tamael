<template>
  <transition>
    <div v-if="post">
      <div class="mt-4 bg-white m-2 p-2 rounded-xl shadow-sm">
        <img
          :alt="post.title"
          v-lazy="post.cover"
          lazy="loading"
          class="rounded-xl object-fill min-w-full"
        />
        <div class="flex flex-row items-center px-2">
          <div class="mt-4">
            <ul class="flex flex-row space-x-2">
              <li
                v-for="(category, index) in post.categories"
                :key="index"
                class="bg-green-300 py-[1px] px-2 rounded-full text-sm text-green-700"
                v-html="category.name"
              ></li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col mt-4 px-2 pb-4">
          <h1 class="text-xl font-bold" v-html="post.title"></h1>
          <div class="flex mt-4">
            <img
              :alt="post.author.name"
              class="rounded-full mr-2"
              v-lazy="post.author.profile_picture"
            />
            <div>
              <h1 class="font-semibold">{{ post.author.name }}</h1>
              <span class="text-sm text-gray-400">
                {{ $datetime(post.created_at) }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4" v-html="post.content"></div>
    </div>
  </transition>
</template>
<script setup>
const route = useRoute();
const { slug } = route.params;
const { post } = await $fetch(`/api/posts/${slug}`);

useMeta({
  title: `${post?.title} | Kabar Tamael`,
});
</script>
