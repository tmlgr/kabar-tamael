<template>
  <header class="items-center shadow md:px-4">
    <div
      :class="{ 'border-b': isOpen }"
      class="flex items-center px-3 py-5 bg-white"
    >
      <span @click.prevent="homeScrollTop" class="text-xl font-bold uppercase">
        Tamael
      </span>
      <button @click.prevent="toggle" type="button" class="ml-auto">
        <hamburger />
      </button>
    </div>
    <transition>
      <div v-if="isOpen" class="flex flex-col bg-white px-4 py-3 space-y-4">
        <div class="w-full flex-none">
          <input
            type="text"
            class="border border-gray-300 w-full bg-gray-200 p-2 text-md rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>
        <div>Beranda</div>
        <div>Headline</div>
        <div>Video</div>
      </div>
    </transition>
  </header>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  mixins: {
    homeScrollTop: Function,
  },
  computed: {
    ...mapState(["isOpen"]),
  },
  methods: {
    ...mapMutations(["toggle"]),
  },
};
</script>
