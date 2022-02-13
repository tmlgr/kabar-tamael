<template>
  <div class="p-2">
    <div :class="{ ready: disqusReady }">
      <client-only>
        <lazy-component @show="disqusReady = true">
          <Disqus shortname="nuepress-kmr-io" :identifier="post.slug" />
        </lazy-component>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  data() {
    return {
      disqusReady: false,
    };
  },
};
</script>
