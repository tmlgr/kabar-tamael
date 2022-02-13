import Vue from "vue";

Vue.mixin({
  methods: {
    truncate(string, limit = 80) {
      if (string.length <= limit) {
        return string;
      }

      return string.slice(0, limit) + "...";
    },
  },
});
