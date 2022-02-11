<template>
  <header class="bg-white w-full items-center px-8 shadow">
    <div class="flex items-center">
      <div class="w-2/5">
        <h1 class="text-2xl font-bold uppercase">Kabar Tamael</h1>
      </div>
      <div class="w-full flex justify-start items-center">
        <ul class="flex flex-row items-center space-x-8">
          <li class="p-4">
            <nuxt-link to="/">Beranda</nuxt-link>
          </li>
          <li class="p-4">
            <nuxt-link to="/posts">Kabar</nuxt-link>
          </li>
          <li class="p-4">
            <nuxt-link to="/videos">Video</nuxt-link>
          </li>
        </ul>
        <div class="ml-auto">
          <input
            id="search"
            type="search"
            name="search"
            class="rounded p-2 text-xs focus:outline-none bg-gray-100 focus:ring-2 focus:ring-green-400"
            placeholder="Ketik Pencarian"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "navbar",
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
