import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/home/rizkhal/Project/tamael-news/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}