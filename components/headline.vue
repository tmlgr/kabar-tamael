<template>
  <div>
    <div class="mt-4 bg-white p-2 rounded-xl shadow-sm">
      <img
        src="https://via.placeholder.com/700x300"
        alt="Headline Image"
        class="rounded-xl object-fill min-w-full"
      />
      <div class="flex items-center px-6">
        <div class="mt-4">
          <ul class="flex flex-row space-x-2">
            <li
              v-for="(v, i) in 3"
              :key="i"
              class="bg-green-300 py-[1px] px-2 rounded-full text-sm text-green-700"
            >
              Ternate {{ ++i }}
            </li>
          </ul>
        </div>
        <div class="ml-auto mt-4">
          <ul class="flex flex-row space-x-4">
            <li>dwd</li>
            <li>dwd</li>
            <li>dwd</li>
          </ul>
        </div>
      </div>
      <p class="mt-4 font-semibold px-4 pb-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam non qui adipisci tenetur similique ut dicta.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "headline",
};
</script>
