<template>
  <header class="bg-white items-center shadow py-2 md:px-4 px-2">
    <div class="flex items-center p-3 px-4">
      <a href="/" class="text-xl font-bold uppercase"> Tamael </a>
      <button class="ml-auto">
        <hamburger />
      </button>
    </div>
  </header>
</template>

<script>
import hamburger from "~/components/icons/hamburger.vue";
export default {
  name: "navbar",
  components: {
    hamburger,
  },
};
</script>
<style lang="css">
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e;
}
</style>
