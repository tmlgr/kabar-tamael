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
<script>
export default {
  props: {
    post: Object,
  },
};
</script>
