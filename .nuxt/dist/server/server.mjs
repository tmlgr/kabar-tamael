
// --------------------
// Request: /home/rizkhal/Project/tamael-news-2/node_modules/nuxt3/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// --------------------
const $id_9a6d43ef = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const entry = true ? (ctx) => __vite_ssr_dynamic_import__('/node_modules/nuxt3/dist/app/bootstrap.mjs').then((m) => m.default(ctx)) : () => __vite_ssr_dynamic_import__('/node_modules/nuxt3/dist/app/bootstrap.mjs').then((m) => m.default);
if (false) {
  entry();
}
__vite_ssr_exports__.default = entry;
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/bootstrap.mjs
// Parents: 
// - /home/rizkhal/Project/tamael-news-2/node_modules/nuxt3/dist/app/entry ($id_9a6d43ef)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/css.mjs ($id_c64a0c4c)
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/plugins/server.mjs ($id_335baa12)
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/root-component.mjs ($id_10960c1c)
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/app-component.mjs ($id_1501ce06)
// --------------------
const $id_fef466a9 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/css.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/plugins/server.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/root-component.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/app-component.mjs");

let entry;
const plugins = __vite_ssr_import_1__.normalizePlugins(__vite_ssr_import_3__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp, ssrContext });
    await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_4__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp });
    await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    await nuxt.hooks.callHook("app:beforeMount", vueApp);
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    vueApp.mount("#__nuxt");
    await nuxt.hooks.callHook("app:mounted", vueApp);
    await __vite_ssr_import_0__.nextTick();
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// - /node_modules/nuxt3/dist/pages/runtime/utils.mjs ($id_e1b210cc)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/layouts.mjs ($id_8a5724dc)
// - /components/icons/hamburger.vue ($id_de732361)
// - /components/navbar.vue ($id_ccd51fbe)
// - /components/leftbar.vue ($id_f6660085)
// - /layouts/default.vue ($id_7689e89d)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/posts/[slug].vue?macro=true ($id_1478ca25)
// - /pages/posts/index.vue?macro=true ($id_9751f318)
// - /pages/videos/index.vue?macro=true ($id_adf04a08)
// - /pages/index.vue ($id_cca58e97)
// - /components/page-title.vue ($id_fbef8245)
// - /components/headline.vue ($id_a2a60e42)
// - /components/horizontal-list.vue ($id_a31e722f)
// - /pages/posts/[slug].vue ($id_83940f72)
// - /pages/posts/index.vue ($id_763a1eda)
// - /pages/videos/index.vue ($id_ce816178)
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/components.mjs ($id_83e4d643)
// - /components/popular.vue ($id_aaef8ecc)
// - /components/posts.vue ($id_1292e8ce)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///home/rizkhal/Project/tamael-news-2/node_modules/vue/dist/vue.cjs.js").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/home/rizkhal/Project/tamael-news-2/node_modules/vue/dist/vue.cjs.js\".") })


// --------------------
// Request: /node_modules/nuxt3/dist/app/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/composables/ssr.mjs ($id_4d0dc923)
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// - /components/leftbar.vue ($id_f6660085)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// --------------------
const $id_d8c2af0f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// --------------------
const $id_bf77ef36 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/compat/legacy-app.mjs");

const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.provide("config", options.ssrContext.runtimeConfig.private);
    nuxtApp.payload.config = options.ssrContext.runtimeConfig.public;
  } else {
    nuxtApp.provide("config", __vite_ssr_import_0__.reactive(nuxtApp.payload.config));
  }
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_2__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
let currentNuxtAppInstance;
const setNuxtAppInstance = (nuxt) => {
  currentNuxtAppInstance = nuxt;
};
Object.defineProperty(__vite_ssr_exports__, "setNuxtAppInstance", { enumerable: true, configurable: true, get(){ return setNuxtAppInstance }});
function callWithNuxt(nuxt, setup, args) {
  setNuxtAppInstance(nuxt);
  const p = args ? setup(...args) : setup();
  if (true) {
    setNuxtAppInstance(null);
  }
  return p;
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    if (!currentNuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return currentNuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///home/rizkhal/Project/tamael-news-2/node_modules/hookable/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/home/rizkhal/Project/tamael-news-2/node_modules/hookable/dist/index.mjs\".") })


// --------------------
// Request: /node_modules/nuxt3/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// --------------------
const $id_75047751 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = { ...nuxtApp.vueApp };
      legacyApp.$root = legacyApp;
      legacyApp.constructor = legacyApp;
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///home/rizkhal/Project/tamael-news-2/node_modules/unenv/runtime/mock/proxy.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/home/rizkhal/Project/tamael-news-2/node_modules/unenv/runtime/mock/proxy.mjs\".") })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/composables/ssr.mjs ($id_4d0dc923)
// --------------------
const $id_42ae3d5d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useLazyFetch }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useCookie }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useRequestHeaders }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_b47c3881 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///home/rizkhal/Project/tamael-news-2/node_modules/vue-router/dist/vue-router.cjs.js").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/home/rizkhal/Project/tamael-news-2/node_modules/vue-router/dist/vue-router.cjs.js\".") })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_a2ef143e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const asyncData = {
    data: __vite_ssr_import_0__.ref(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(true),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (force) => {
    if (nuxt._asyncDataPromises[key] && !force) {
      return nuxt._asyncDataPromises[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = options.default();
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = asyncData.refresh();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating) {
      asyncData.pending.value = false;
    } else if (instance && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(asyncData.refresh);
    } else {
      asyncData.refresh();
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_43a772c2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_d232db97 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    state.value = init();
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/murmurhash-es/dist/index.mjs ($id_fbf6dac3)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_765a0ed7 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/murmurhash-es/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

function useFetch(url, opts = {}) {
  if (!opts.key) {
    const keys = { u: url };
    if (opts.baseURL) {
      keys.b = opts.baseURL;
    }
    if (opts.method && opts.method.toLowerCase() !== "get") {
      keys.m = opts.method.toLowerCase();
    }
    if (opts.params) {
      keys.p = opts.params;
    }
    opts.key = generateKey(keys);
  }
  return __vite_ssr_import_1__.useAsyncData(opts.key, () => $fetch(url, opts), opts);
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(url, opts = {}) {
  return useFetch(url, { ...opts, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
function generateKey(keys) {
  return "$f" + __vite_ssr_import_0__.murmurHashV3(JSON.stringify(keys));
}
;
}


// --------------------
// Request: /node_modules/murmurhash-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 

// --------------------
const $id_fbf6dac3 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///home/rizkhal/Project/tamael-news-2/node_modules/murmurhash-es/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/home/rizkhal/Project/tamael-news-2/node_modules/murmurhash-es/dist/index.mjs\".") })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/cookie-es/dist/index.mjs ($id_f4975261)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_792d64c4 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const CookieDefaults = {
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_0__.ref(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const initialValue = cookie.value;
    const nuxtApp = __vite_ssr_import_4__.useNuxtApp();
    nuxtApp.hooks.hookOnce("app:rendered", () => {
      if (cookie.value !== initialValue) {
        writeServerCookie(useSSRRes(nuxtApp), name, cookie.value, opts);
      }
    });
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function useSSRReq(nuxtApp = __vite_ssr_import_4__.useNuxtApp()) {
  return nuxtApp.ssrContext?.req;
}
function useSSRRes(nuxtApp = __vite_ssr_import_4__.useNuxtApp()) {
  return nuxtApp.ssrContext?.res;
}
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(useSSRReq().headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(res, name, value, opts = {}) {
  if (res) {
    __vite_ssr_import_2__.appendHeader(res, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_f4975261 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///home/rizkhal/Project/tamael-news-2/node_modules/cookie-es/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/home/rizkhal/Project/tamael-news-2/node_modules/cookie-es/dist/index.mjs\".") })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_57d7ded6 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///home/rizkhal/Project/tamael-news-2/node_modules/h3/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/home/rizkhal/Project/tamael-news-2/node_modules/h3/dist/index.mjs\".") })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_03d15ecd = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///home/rizkhal/Project/tamael-news-2/node_modules/destr/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/home/rizkhal/Project/tamael-news-2/node_modules/destr/dist/index.mjs\".") })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_4d0dc923 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
;
}


// --------------------
// Request: /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/css.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// Dependencies: 
// - /assets/css/tailwind.css ($id_f75548e1)
// --------------------
const $id_c64a0c4c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/assets/css/tailwind.css");
;
}


// --------------------
// Request: /assets/css/tailwind.css
// Parents: 
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/css.mjs ($id_c64a0c4c)
// Dependencies: 

// --------------------
const $id_f75548e1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/*\n! tailwindcss v3.0.21 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.visible {\n  visibility: visible;\n}\n.relative {\n  position: relative;\n}\n.inset-0 {\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.right-0 {\n  right: 0px;\n}\n.float-right {\n  float: right;\n}\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.ml-auto {\n  margin-left: auto;\n}\n.ml-4 {\n  margin-left: 1rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mr-auto {\n  margin-right: auto;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.hidden {\n  display: none;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-64 {\n  height: 16rem;\n}\n.h-full {\n  height: 100%;\n}\n.h-1\\/2 {\n  height: 50%;\n}\n.h-40 {\n  height: 10rem;\n}\n.h-0 {\n  height: 0px;\n}\n.h-60 {\n  height: 15rem;\n}\n.h-24 {\n  height: 6rem;\n}\n.h-80 {\n  height: 20rem;\n}\n.h-\\[90px\\] {\n  height: 90px;\n}\n.min-h-full {\n  min-height: 100%;\n}\n.w-1\\/4 {\n  width: 25%;\n}\n.w-\\[6rem\\] {\n  width: 6rem;\n}\n.w-full {\n  width: 100%;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-1\\/2 {\n  width: 50%;\n}\n.w-10 {\n  width: 2.5rem;\n}\n.w-auto {\n  width: auto;\n}\n.w-40 {\n  width: 10rem;\n}\n.w-0 {\n  width: 0px;\n}\n.w-60 {\n  width: 15rem;\n}\n.w-\\[90px\\] {\n  width: 90px;\n}\n.min-w-full {\n  min-width: 100%;\n}\n.max-w-sm {\n  max-width: 24rem;\n}\n.flex-shrink {\n  flex-shrink: 1;\n}\n.resize {\n  resize: both;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n.space-y-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n.space-y-0\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.125rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.125rem * var(--tw-space-y-reverse));\n}\n.space-y-0 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0px * var(--tw-space-y-reverse));\n}\n.divide-y > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-y-reverse: 0;\n  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.border-\\[2px\\] {\n  border-width: 2px;\n}\n.border {\n  border-width: 1px;\n}\n.border-green-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(34 197 94 / var(--tw-border-opacity));\n}\n.border-purple-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(233 213 255 / var(--tw-border-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity));\n}\n.bg-green-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(134 239 172 / var(--tw-bg-opacity));\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\n.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.object-fill {\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n.object-center {\n  -o-object-position: center;\n     object-position: center;\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-\\[15px\\] {\n  padding: 15px;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.py-\\[1px\\] {\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.pb-4 {\n  padding-bottom: 1rem;\n}\n.pr-2 {\n  padding-right: 0.5rem;\n}\n.pr-8 {\n  padding-right: 2rem;\n}\n.pr-12 {\n  padding-right: 3rem;\n}\n.pr-16 {\n  padding-right: 4rem;\n}\n.pr-20 {\n  padding-right: 5rem;\n}\n.pr-24 {\n  padding-right: 6rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.leading-tight {\n  line-height: 1.25;\n}\n.text-green-700 {\n  --tw-text-opacity: 1;\n  color: rgb(21 128 61 / var(--tw-text-opacity));\n}\n.text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity));\n}\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n.text-slate-500 {\n  --tw-text-opacity: 1;\n  color: rgb(100 116 139 / var(--tw-text-opacity));\n}\n.text-purple-600 {\n  --tw-text-opacity: 1;\n  color: rgb(147 51 234 / var(--tw-text-opacity));\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.hover\\:border-transparent:hover {\n  border-color: transparent;\n}\n.hover\\:bg-purple-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(147 51 234 / var(--tw-bg-opacity));\n}\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus\\:ring-2:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-purple-600:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(147 51 234 / var(--tw-ring-opacity));\n}\n.focus\\:ring-offset-2:focus {\n  --tw-ring-offset-width: 2px;\n}\n@media (min-width: 640px) {\n\n  .sm\\:mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n\n  .sm\\:flex {\n    display: flex;\n  }\n\n  .sm\\:shrink-0 {\n    flex-shrink: 0;\n  }\n\n  .sm\\:items-center {\n    align-items: center;\n  }\n\n  .sm\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0px * var(--tw-space-y-reverse));\n  }\n\n  .sm\\:space-x-6 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(1.5rem * var(--tw-space-x-reverse));\n    margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n\n  .sm\\:py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .sm\\:text-left {\n    text-align: left;\n  }\n}\n@media (min-width: 768px) {\n\n  .md\\:flex {\n    display: flex;\n  }\n\n  .md\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .md\\:flex-row {\n    flex-direction: row;\n  }\n\n  .md\\:p-8 {\n    padding: 2rem;\n  }\n\n  .md\\:px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n";
}


// --------------------
// Request: /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/plugins/server.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_7b587af2)
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/components.mjs ($id_83e4d643)
// --------------------
const $id_335baa12 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/router.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/components.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default
];
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/plugins/server.mjs ($id_335baa12)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_b9f3c557 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/plugins/server.mjs ($id_335baa12)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_cbe5172d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_2__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp._useMeta = (meta) => {
    const headObj = __vite_ssr_import_1__.ref(meta);
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      for (const name of Object.keys(actualTags)) {
        updateElements(document, name, actualTags[name]);
      }
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/plugin.mjs
// Parents: 
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/plugins/server.mjs ($id_335baa12)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/meta.config.mjs ($id_283924a0)
// --------------------
const $id_9fd5f35e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/meta.config.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useMeta(__vite_ssr_import_4__.default.globalMeta);
  nuxtApp.vueApp.mixin({
    [__vite_ssr_import_4__.default.mixinKey]() {
      const instance = __vite_ssr_import_0__.getCurrentInstance();
      const options = instance?.type || instance?.proxy?.$options;
      if (!options || !("head" in options)) {
        return;
      }
      const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
      __vite_ssr_import_2__.useMeta(source);
    }
  });
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// --------------------
const $id_94744df3 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useMeta(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    key: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup: (_props, ctx) => ctx.slots.default
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_ca9295be = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

function useMeta(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useMeta(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///home/rizkhal/Project/tamael-news-2/node_modules/@vue/shared/dist/shared.cjs.js").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/home/rizkhal/Project/tamael-news-2/node_modules/@vue/shared/dist/shared.cjs.js\".") })


// --------------------
// Request: /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 

// --------------------
const $id_283924a0 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"}],"link":[],"style":[],"script":[]},"mixinKey":"created"};
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/plugins/server.mjs ($id_335baa12)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/routes.mjs ($id_1d110c72)
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/middleware.mjs ($id_4392ebd3)
// --------------------
const $id_a4d6cb5b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/page.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/layout.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/routes.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/middleware.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_4__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_2__.default);
  nuxtApp.vueApp.component("NuxtLayout", __vite_ssr_import_3__.default);
  nuxtApp.vueApp.component("NuxtLink", __vite_ssr_import_1__.RouterLink);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_2__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_2__.default);
  const { baseURL } = __vite_ssr_import_4__.useRuntimeConfig().app;
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory(baseURL) : __vite_ssr_import_1__.createMemoryHistory(baseURL);
  const router = __vite_ssr_import_1__.createRouter({
    history: routerHistory,
    routes: __vite_ssr_import_5__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_0__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = new Set([...__vite_ssr_import_6__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_6__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (true && !middleware) {
        console.warn(`Unknown middleware: ${entry}. Valid options are ${Object.keys(__vite_ssr_import_6__.namedMiddleware).join(", ")}.`);
      }
      const result = await __vite_ssr_import_4__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(() => {
    delete nuxtApp._processingMiddleware;
  });
  nuxtApp.hook("app:created", async () => {
    if (true) {
      router.push(nuxtApp.ssrContext.url);
      router.afterEach((to) => {
        if (to.fullPath !== nuxtApp.ssrContext.url) {
          nuxtApp.ssrContext.res.setHeader("Location", to.fullPath);
        }
      });
    }
    await router.isReady();
    const is404 = router.currentRoute.value.matched.length === 0;
    if (true && is404) {
      const error = new Error(`Page not found: ${nuxtApp.ssrContext.url}`);
      error.statusCode = 404;
      nuxtApp.ssrContext.error = error;
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/pages/runtime/utils.mjs ($id_e1b210cc)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_485c89bf = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  props: {
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, {}, {
        default: (routeProps) => routeProps.Component && __vite_ssr_import_2__.wrapIf(__vite_ssr_import_0__.Transition, routeProps.route.meta.pageTransition ?? defaultPageTransition, __vite_ssr_import_2__.wrapInKeepAlive(routeProps.route.meta.keepalive, __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
          onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
          onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
        }, { default: () => __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) }))).default()
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_e1b210cc = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default();
  }
};
const wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "wrapIf", { enumerable: true, configurable: true, get(){ return wrapIf }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/layout.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/pages/runtime/utils.mjs ($id_e1b210cc)
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/layouts.mjs ($id_8a5724dc)
// --------------------
const $id_9b68c93f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/layouts.mjs");

const defaultLayoutTransition = { name: "layout", mode: "out-in" };
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = __vite_ssr_import_1__.useRoute();
    return () => {
      const layout = (__vite_ssr_import_0__.isRef(props.name) ? props.name.value : props.name) ?? route.meta.layout ?? "default";
      const hasLayout = layout && layout in __vite_ssr_import_3__.default;
      if (true && layout && !hasLayout && layout !== "default") {
        console.warn(`Invalid layout \`${layout}\` selected.`);
      }
      return __vite_ssr_import_2__.wrapIf(__vite_ssr_import_0__.Transition, hasLayout && (route.meta.layoutTransition ?? defaultLayoutTransition), __vite_ssr_import_2__.wrapIf(__vite_ssr_import_3__.default[layout], hasLayout, context.slots)).default();
    };
  }
});
;
}


// --------------------
// Request: /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /layouts/default.vue ($id_7689e89d)
// --------------------
const $id_8a5724dc = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = {
  default: __vite_ssr_import_0__.defineAsyncComponent({ suspensible: false, loader: () => __vite_ssr_dynamic_import__('/layouts/default.vue') })
};
}


// --------------------
// Request: /layouts/default.vue
// Parents: 
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/layouts.mjs ($id_8a5724dc)
// Dependencies: 
// - /components/navbar.vue ($id_ccd51fbe)
// - /components/leftbar.vue ($id_f6660085)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7689e89d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/navbar.vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/leftbar.vue");


const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/leftbar.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/navbar.vue");


const _sfc_main = {
  components: {
    navbar: __vite_ssr_import_3__.default,
    leftbar: __vite_ssr_import_2__.default,
  },
};

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_navbar = __vite_ssr_import_0__.default
  const _component_leftbar = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({ class: "bg-gray-100" }, _attrs))}>`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_navbar, null, null, _parent))
  _push(`<div class="flex flex-row md:p-8">`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_leftbar, null, null, _parent))
  _push(`<div class="w-full overflow-hidden">`)
  __vite_ssr_import_5__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div></div></div>`)
}


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/default.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/rizkhal/Project/tamael-news-2/layouts/default.vue"]]);
}


// --------------------
// Request: /components/navbar.vue
// Parents: 
// - /layouts/default.vue ($id_7689e89d)
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/components.mjs ($id_83e4d643)
// Dependencies: 
// - /components/icons/hamburger.vue ($id_de732361)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/navbar.vue?vue&type=style&index=0&lang.css ($id_96e91790)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ccd51fbe = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/icons/hamburger.vue");

const _sfc_main = {
  name: "navbar",
  components: {
    hamburger: __vite_ssr_import_0__.default,
  },
};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_hamburger = __vite_ssr_import_1__.resolveComponent("hamburger")

  _push(`<header${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "bg-white items-center shadow py-2 md:px-4 px-2" }, _attrs))}><div class="flex items-center p-3 px-4"><a href="/" class="text-xl font-bold uppercase"> Tamael </a><button class="ml-auto">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_hamburger, null, null, _parent))
  _push(`</button></div></header>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/navbar.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/navbar.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/rizkhal/Project/tamael-news-2/components/navbar.vue"]]);
}


// --------------------
// Request: /components/icons/hamburger.vue
// Parents: 
// - /components/navbar.vue ($id_ccd51fbe)
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/components.mjs ($id_83e4d643)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_de732361 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${
    __vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
      fill: "currentColor",
      viewBox: "0 0 20 20",
      class: "w-6 h-6"
    }, _attrs))
  }><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path><path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" style="${
    __vite_ssr_import_1__.ssrRenderStyle({"display":"none"})
  }"></path></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/icons/hamburger.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/rizkhal/Project/tamael-news-2/components/icons/hamburger.vue"]]);
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /components/icons/hamburger.vue ($id_de732361)
// - /components/navbar.vue ($id_ccd51fbe)
// - /components/leftbar.vue ($id_f6660085)
// - /layouts/default.vue ($id_7689e89d)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/posts/[slug].vue?macro=true ($id_1478ca25)
// - /pages/posts/index.vue?macro=true ($id_9751f318)
// - /pages/videos/index.vue?macro=true ($id_adf04a08)
// - /components/page-title.vue ($id_fbef8245)
// - /components/horizontal-list.vue ($id_a31e722f)
// - /components/headline.vue ($id_a2a60e42)
// - /pages/index.vue ($id_cca58e97)
// - /pages/posts/[slug].vue ($id_83940f72)
// - /pages/posts/index.vue ($id_763a1eda)
// - /pages/videos/index.vue ($id_ce816178)
// - /components/popular.vue ($id_aaef8ecc)
// - /components/posts.vue ($id_1292e8ce)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///home/rizkhal/Project/tamael-news-2/node_modules/vue/server-renderer/index.js").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/home/rizkhal/Project/tamael-news-2/node_modules/vue/server-renderer/index.js\".") })


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /components/icons/hamburger.vue ($id_de732361)
// - /components/navbar.vue ($id_ccd51fbe)
// - /components/leftbar.vue ($id_f6660085)
// - /layouts/default.vue ($id_7689e89d)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/posts/[slug].vue?macro=true ($id_1478ca25)
// - /pages/posts/index.vue?macro=true ($id_9751f318)
// - /pages/videos/index.vue?macro=true ($id_adf04a08)
// - /components/page-title.vue ($id_fbef8245)
// - /components/horizontal-list.vue ($id_a31e722f)
// - /components/headline.vue ($id_a2a60e42)
// - /pages/index.vue ($id_cca58e97)
// - /pages/posts/[slug].vue ($id_83940f72)
// - /pages/posts/index.vue ($id_763a1eda)
// - /pages/videos/index.vue ($id_ce816178)
// - /components/popular.vue ($id_aaef8ecc)
// - /components/posts.vue ($id_1292e8ce)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /components/navbar.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /components/navbar.vue ($id_ccd51fbe)
// Dependencies: 

// --------------------
const $id_96e91790 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\na.nuxt-link-active {\n  font-weight: bold;\n}\n/* exact link will show the primary color for only the exact matching link */\na.nuxt-link-exact-active {\n  color: #00c58e;\n}\n";
}


// --------------------
// Request: /components/leftbar.vue
// Parents: 
// - /layouts/default.vue ($id_7689e89d)
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/components.mjs ($id_83e4d643)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f6660085 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const categories = __vite_ssr_import_0__.ref([]);
const config = __vite_ssr_import_1__.useRuntimeConfig();

const {
  data: { value },
} = (
  ([__temp,__restore] = __vite_ssr_import_2__.withAsyncContext(() => __vite_ssr_import_1__.useFetch(`${config.API_BASE}/wp-json/wp/v2/categories`))),
  __temp = await __temp,
  __restore(),
  __temp
);

categories.value = value;

const __returned__ = { categories, config, value }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "md:flex flex-col space-y-4 w-1/4 hidden" }, _attrs))}><div class="bg-white p-4 rounded-lg shadow-sm"><span class="font-bold text-xl">Kategori</span><ul class="mt-4 flex flex-col space-y-3"><!--[-->`)
  __vite_ssr_import_4__.ssrRenderList($setup.categories, (category, index) => {
    _push(`<li><a href="#">${__vite_ssr_import_4__.ssrInterpolate(category.name)}</a></li>`)
  })
  _push(`<!--]--></ul></div></div>`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/leftbar.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/rizkhal/Project/tamael-news-2/components/leftbar.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/posts/[slug].vue?macro=true ($id_1478ca25)
// - /pages/posts/index.vue?macro=true ($id_9751f318)
// - /pages/videos/index.vue?macro=true ($id_adf04a08)
// - /pages/index.vue ($id_cca58e97)
// - /pages/posts/[slug].vue ($id_83940f72)
// - /pages/posts/index.vue ($id_763a1eda)
// - /pages/videos/index.vue ($id_ce816178)
// --------------------
const $id_1d110c72 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/posts/[slug].vue?macro=true");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/posts/index.vue?macro=true");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/videos/index.vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "index",
    path: "/",
    file: "/home/rizkhal/Project/tamael-news-2/pages/index.vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    component: () => __vite_ssr_dynamic_import__('/pages/index.vue')
  },
  {
    name: "posts-slug",
    path: "/posts/:slug",
    file: "/home/rizkhal/Project/tamael-news-2/pages/posts/[slug].vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    component: () => __vite_ssr_dynamic_import__('/pages/posts/[slug].vue')
  },
  {
    name: "posts",
    path: "/posts",
    file: "/home/rizkhal/Project/tamael-news-2/pages/posts/index.vue",
    children: [],
    meta: __vite_ssr_import_2__.meta,
    component: () => __vite_ssr_dynamic_import__('/pages/posts/index.vue')
  },
  {
    name: "videos",
    path: "/videos",
    file: "/home/rizkhal/Project/tamael-news-2/pages/videos/index.vue",
    children: [],
    meta: __vite_ssr_import_3__.meta,
    component: () => __vite_ssr_dynamic_import__('/pages/videos/index.vue')
  }
];
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/routes.mjs ($id_1d110c72)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5dd70240 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const posts = __vite_ssr_import_0__.ref([]);
const config = __vite_ssr_import_1__.useRuntimeConfig();

const {
  data: { value },
} = (
  ([__temp,__restore] = __vite_ssr_import_2__.withAsyncContext(() => __vite_ssr_import_1__.useFetch(`${config.API_BASE}/wp-json/wp/v2/posts`))),
  __temp = await __temp,
  __restore(),
  __temp
);

posts.value = value;

const __returned__ = { posts, config, value }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_page_title = __vite_ssr_import_3__.resolveComponent("page-title")
  const _component_headline = __vite_ssr_import_3__.resolveComponent("headline")
  const _component_nuxt_link = __vite_ssr_import_3__.resolveComponent("nuxt-link")

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "w-full" }, _attrs))}><div class="p-6 shadow">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_page_title, { title: "<strong>Headline</strong> hari ini" }, null, _parent))
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_headline, null, null, _parent))
  _push(`</div><div class="flex flex-col divide-y"><div class="p-6">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_page_title, { title: "<strong>Kabar</strong> terkini" }, null, _parent))
  _push(`</div><!--[-->`)
  __vite_ssr_import_4__.ssrRenderList($setup.posts, (post, index) => {
    _push(`<div class="relative p-[15px] bg-white min-h-4"><div class="relative float-right w-[90px] h-[90px]"><img${
      __vite_ssr_import_4__.ssrRenderAttr("src", post.featured_media_src_url)
    }${
      __vite_ssr_import_4__.ssrRenderAttr("alt", post.title.rendered)
    } class="rounded-xl object-cover min-w-full min-h-full"></div><div class="pr-24 text-gray-800">`)
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_nuxt_link, {
      to: `/posts/${post.slug}`
    }, {
      default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<h3 class="font-semibold text-lg leading-tight"${
            _scopeId
          }>${
            __vite_ssr_import_4__.ssrInterpolate(post.title.rendered)
          }</h3>`)
        } else {
          return [
            __vite_ssr_import_3__.createVNode("h3", { class: "font-semibold text-lg leading-tight" }, __vite_ssr_import_3__.toDisplayString(post.title.rendered), 1 /* TEXT */)
          ]
        }
      }),
      _: 2 /* DYNAMIC */
    }, _parent))
    _push(`</div></div>`)
  })
  _push(`<!--]--></div></div>`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/rizkhal/Project/tamael-news-2/pages/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/posts/[slug].vue?macro=true
// Parents: 
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/routes.mjs ($id_1d110c72)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_1478ca25 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${
    __vite_ssr_import_0__.ssrRenderAttrs(_attrs)
  }>${
    __vite_ssr_import_0__.ssrInterpolate(_ctx.$route.params)
  }</div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/posts/[slug].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/rizkhal/Project/tamael-news-2/pages/posts/[slug].vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/posts/index.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/routes.mjs ($id_1d110c72)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9751f318 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {
  setup(__props, { expose }) {
  expose();

//

const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_headline = __vite_ssr_import_0__.resolveComponent("headline")

  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "flex flex-col space-y-4" }, _attrs))}><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList(_ctx.posts, (post, index) => {
    _push(__vite_ssr_import_1__.ssrRenderComponent(_component_headline, {
      key: index,
      post: post
    }, null, _parent))
  })
  _push(`<!--]--></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/posts/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/rizkhal/Project/tamael-news-2/pages/posts/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/videos/index.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/routes.mjs ($id_1d110c72)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_adf04a08 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {

}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}><h1>Video</h1></div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/videos/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/rizkhal/Project/tamael-news-2/pages/videos/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/routes.mjs ($id_1d110c72)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /components/page-title.vue ($id_fbef8245)
// - /components/headline.vue ($id_a2a60e42)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cca58e97 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/page-title.vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/headline.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const posts = __vite_ssr_import_0__.ref([]);
const config = __vite_ssr_import_1__.useRuntimeConfig();

const {
  data: { value },
} = (
  ([__temp,__restore] = __vite_ssr_import_4__.withAsyncContext(() => __vite_ssr_import_1__.useFetch(`${config.API_BASE}/wp-json/wp/v2/posts`))),
  __temp = await __temp,
  __restore(),
  __temp
);

posts.value = value;

const __returned__ = { posts, config, value }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_page_title = __vite_ssr_import_2__.default
  const _component_headline = __vite_ssr_import_3__.default
  const _component_nuxt_link = __vite_ssr_import_5__.resolveComponent("nuxt-link")

  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "w-full" }, _attrs))}><div class="p-6 shadow">`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_page_title, { title: "<strong>Headline</strong> hari ini" }, null, _parent))
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_headline, null, null, _parent))
  _push(`</div><div class="flex flex-col divide-y"><div class="p-6">`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_page_title, { title: "<strong>Kabar</strong> terkini" }, null, _parent))
  _push(`</div><!--[-->`)
  __vite_ssr_import_6__.ssrRenderList($setup.posts, (post, index) => {
    _push(`<div class="relative p-[15px] bg-white min-h-4"><div class="relative float-right w-[90px] h-[90px]"><img${
      __vite_ssr_import_6__.ssrRenderAttr("src", post.featured_media_src_url)
    }${
      __vite_ssr_import_6__.ssrRenderAttr("alt", post.title.rendered)
    } class="rounded-xl object-cover min-w-full min-h-full"></div><div class="pr-24 text-gray-800">`)
    _push(__vite_ssr_import_6__.ssrRenderComponent(_component_nuxt_link, {
      to: `/posts/${post.slug}`
    }, {
      default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<h3 class="font-semibold text-lg leading-tight"${
            _scopeId
          }>${
            __vite_ssr_import_6__.ssrInterpolate(post.title.rendered)
          }</h3>`)
        } else {
          return [
            __vite_ssr_import_5__.createVNode("h3", { class: "font-semibold text-lg leading-tight" }, __vite_ssr_import_5__.toDisplayString(post.title.rendered), 1 /* TEXT */)
          ]
        }
      }),
      _: 2 /* DYNAMIC */
    }, _parent))
    _push(`</div></div>`)
  })
  _push(`<!--]--></div></div>`)
}


const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/rizkhal/Project/tamael-news-2/pages/index.vue"]]);
}


// --------------------
// Request: /components/page-title.vue
// Parents: 
// - /pages/index.vue ($id_cca58e97)
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/components.mjs ($id_83e4d643)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_fbef8245 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  props: {
    title: String,
  },
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h1${
    __vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "text-2xl flex items-center" }, _attrs))
  }><!-- <p><strong>Headline</strong> hari ini</p> --><p>${
    $props.title
  }</p><hr class="w-[6rem] border-[2px] rounded-full bg-green-500 border-green-500 ml-4"></h1>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/page-title.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/rizkhal/Project/tamael-news-2/components/page-title.vue"]]);
}


// --------------------
// Request: /components/headline.vue
// Parents: 
// - /pages/index.vue ($id_cca58e97)
// - /pages/posts/index.vue ($id_763a1eda)
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/components.mjs ($id_83e4d643)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/horizontal-list.vue ($id_a31e722f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/headline.vue?vue&type=style&index=0&scoped=true&lang.css ($id_5d1b4b93)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a2a60e42 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/horizontal-list.vue");


const _sfc_main = {
  name: "headline",
  components: {
    VueHorizontalList: __vite_ssr_import_1__.default,
  },
  data() {
    return {
      items: [
        {
          title: "Sed non ante non cras amet",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.",
          image: "https://picsum.photos/id/1015/600/600",
        },
        {
          title: "Curabitur sit amet nunc",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.",
          image: "https://picsum.photos/id/1019/600/600",
        },
        {
          title: "Proin pharetra, ante metus",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex efficitur posuere. Pellentesque cursus pellentesque risus, non.",
          image: "https://picsum.photos/id/1039/600/600",
        },
        {
          title: "Cras pharetra non enim a",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada varius nibh, a malesuada nisi feugiat eget. Aenean convallis semper.",
          image: "https://picsum.photos/id/1042/600/600",
        },
        {
          title: "Proin vulputate, augue eu accumsan",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla tempor libero sit amet mollis. Praesent quis leo erat. Integer.",
          image: "https://picsum.photos/id/1044/600/600",
        },
        {
          title: "Maecenas feugiat magna sapien in",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet fringilla ante. Quisque at ipsum non lacus consequat dictum.",
          image: "https://picsum.photos/id/1057/600/600",
        },
        {
          title: "Donec commodo sed enim at",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu condimentum risus. Praesent dignissim, neque nec pharetra vestibulum, libero odio.",
          image: "https://picsum.photos/id/1063/600/600",
        },
        {
          title: "In bibendum urna et turpis",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ante volutpat leo vulputate volutpat et sed ex. Vivamus eu.",
          image: "https://picsum.photos/id/1076/600/600",
        },
        {
          title: "Phasellus iaculis dignissim erat at",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam scelerisque, eleifend purus gravida, scelerisque orci. Ut et turpis.",
          image: "https://picsum.photos/id/1083/600/600",
        },
      ],
      options: {},
    };
  },
};

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_vue_horizontal_list = __vite_ssr_import_2__.resolveComponent("vue-horizontal-list")

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(_attrs)} data-v-3fdf780f>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_vue_horizontal_list, {
    items: $data.items,
    options: $data.options
  }, {
    default: __vite_ssr_import_2__.withCtx(({ item }, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div data-v-3fdf780f${
          _scopeId
        }><div class="image-container" data-v-3fdf780f${
          _scopeId
        }><div class="image-content" data-v-3fdf780f${
          _scopeId
        }><img${
          __vite_ssr_import_3__.ssrRenderAttr("src", item.image)
        } data-v-3fdf780f${
          _scopeId
        }><div class="image-text" data-v-3fdf780f${
          _scopeId
        }><h2 data-v-3fdf780f${
          _scopeId
        }>${
          __vite_ssr_import_3__.ssrInterpolate(item.title)
        }</h2></div></div></div><div class="subtitle" data-v-3fdf780f${
          _scopeId
        }>SUBTITLE • FOCUS</div><p data-v-3fdf780f${
          _scopeId
        }>${
          __vite_ssr_import_3__.ssrInterpolate(item.content)
        }</p></div>`)
      } else {
        return [
          __vite_ssr_import_2__.createVNode("div", null, [
            __vite_ssr_import_2__.createVNode("div", { class: "image-container" }, [
              __vite_ssr_import_2__.createVNode("div", { class: "image-content" }, [
                __vite_ssr_import_2__.createVNode("img", {
                  src: item.image
                }, null, 8 /* PROPS */, ["src"]),
                __vite_ssr_import_2__.createVNode("div", { class: "image-text" }, [
                  __vite_ssr_import_2__.createVNode("h2", null, __vite_ssr_import_2__.toDisplayString(item.title), 1 /* TEXT */)
                ])
              ])
            ]),
            __vite_ssr_import_2__.createVNode("div", { class: "subtitle" }, "SUBTITLE • FOCUS"),
            __vite_ssr_import_2__.createVNode("p", null, __vite_ssr_import_2__.toDisplayString(item.content), 1 /* TEXT */)
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/headline.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/headline.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-3fdf780f"],['__file',"/home/rizkhal/Project/tamael-news-2/components/headline.vue"]]);
}


// --------------------
// Request: /components/horizontal-list.vue
// Parents: 
// - /components/headline.vue ($id_a2a60e42)
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/components.mjs ($id_83e4d643)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/horizontal-list.vue?vue&type=style&index=0&scoped=true&lang.css ($id_5bb0df3d)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a31e722f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = {
  name: "VueHorizontalList",
  props: {
    /**
     * items to display in horizontal-list
     */
    items: {
      type: Array,
      required: true,
    },

    /**
     * item.class = css class for each individual item.
     * item.padding = padding between each item in the list.
     *
     * list.class = css class for the parent of item
     * list.windowed = maximum width of the list it can extend to, basically the container max-width
     * list.padding = padding of the list, if container < windowed what is the left-right padding of the list
     *
     * responsive breakpoints to calculate how many items to show in the list at each width interval
     * Examples:
     * [{size: 5}] show 5 items regardless
     * [{end: 992, size: 3}},{size: 4}] < 992 show 3 items, else show 4 items
     * [{end: 576, size: 1}, {start: 576, end: 992, size: 2}, {size: 3}] < 576 show 1, 576 - 992 show 2, else show 3
     *
     * These are the default responsive fallback, if you don't have a catch all, it will fallback to this.
     * [{end: 576, size: 1},
     * {start: 576, end: 768, size: 2},
     * {start: 768, end: 992, size: 3},
     * {start: 992, end: 1200, size: 4},
     * {start: 1200, size: 5}]
     */
    options: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      /**
       * Current item position of list
       */
      position: 0,

      /**
       * Width of item, list and window
       */
      width: {
        container: 0,
        window: 576,
      },
      /**
       * Debounce timer of the scroll
       */
      scrollTimer: null,
      /**
       * Interval of the autoPlay
       */
      autoPlayInterval: null,
    };
  },
  mounted() {
    this.$resize = () => {
      this.width.window = window.innerWidth;
      this.width.container = this.$refs.container.clientWidth;
    };

    // TODO(fuxing): Need to re-do this
    // Added a simple SSR fix, need to look into it for optimization in the future
    // require("smoothscroll-polyfill").polyfill();

    this.$resize();
    window.addEventListener("resize", this.$resize);

    if (this._options.position.start) {
      this.$nextTick(() => {
        this.go(this._options.position.start);
      });
    }

    if (this._options.autoplay.play) {
      this.runAutoPlay();
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.$resize);
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  },
  computed: {
    _items() {
      return [
        ...(this.$slots["start"] ? [{ type: "start" }] : []),
        ...this.items.map((value) => ({ type: "item", item: value })),
        ...(this.$slots["end"] ? [{ type: "end" }] : []),
      ];
    },
    _length() {
      return this._items.length;
    },

    _options() {
      const options = this.options;

      return {
        navigation: {
          start: options?.navigation?.start ?? 992,
          // TODO(fuxing): Deprecate this in favor of navigation slot
          color: options?.navigation?.color ?? "#000",
        },
        item: {
          class: options?.item?.class ?? "",
          padding: options?.item?.padding ?? 16,
        },
        list: {
          class: options?.list?.class ?? "",
          windowed: options?.list?.windowed ?? 1200,
          padding: options?.list?.padding ?? 24,
        },
        responsive: [
          ...(options?.responsive ?? []),

          // Fallback default responsive
          { end: 576, size: 1 },
          { start: 576, end: 768, size: 2 },
          { start: 768, end: 992, size: 3 },
          { start: 992, end: 1200, size: 4 },
          { start: 1200, size: 5 },
        ],
        position: {
          start: options?.position?.start ?? 0,
        },
        autoplay: {
          play: options?.autoplay?.play ?? false,
          speed: options?.autoplay?.speed ?? 2000,
          repeat: options?.autoplay?.repeat ?? false,
        },
      };
    },

    _style() {
      const style = {
        container: {},
        list: {},
        item: {},
        tail: {},
      };

      const workingWidth = this._workingWidth;
      const size = this._size;

      // Full Screen Mode
      if (this.width.window < this._options.list.windowed) {
        style.container.marginLeft = `-${this._options.list.padding}px`;
        style.container.marginRight = `-${this._options.list.padding}px`;

        style.item.width = `${
          (workingWidth - (size - 1) * this._options.item.padding) / size
        }px`;
        style.item.paddingLeft = `${this._options.list.padding}px`;
        style.item.paddingRight = `${this._options.item.padding}px`;
        style.item.marginRight = `-${this._options.list.padding}px`;
      }

      // Windowed Mode
      else {
        style.item.paddingLeft = `${this._options.item.padding / 2}px`;
        style.item.paddingRight = `${this._options.item.padding / 2}px`;

        style.container.marginLeft = `-${this._options.item.padding / 2}px`;
        style.container.marginRight = `-${this._options.item.padding / 2}px`;

        style.item.width = `${
          (workingWidth - (size - 1) * this._options.item.padding) / size
        }px`;
      }

      return style;
    },

    _itemWidth() {
      return (
        (this._workingWidth - (this._size - 1) * this._options.item.padding) /
        this._size
      );
    },

    /**
     * @return number actual width of the container
     */
    _workingWidth() {
      // Full Screen Mode
      if (this.width.window < this._options.list.windowed) {
        return this.width.window - this._options.list.padding * 2;
      }

      // Windowed Mode
      else {
        return this.width.container;
      }
    },

    /**
     * @return visible items in horizontal list at the current width/state
     */
    _size() {
      const width = this._workingWidth;
      return this._options.responsive.find((value) => {
        return (
          (!value.start || value.start <= width) &&
          (!value.end || value.end >= width)
        );
      }).size;
    },

    /**
     * @return boolean whether there is prev set of items for navigation
     * @private internal use
     */
    _hasNext() {
      return this._length > this.position + this._size;
    },

    /**
     * @return boolean whether there is next set of items for navigation
     * @private internal use
     */
    _hasPrev() {
      return this.position > 0;
    },
  },
  methods: {
    /**
     * @param position of item to scroll to
     */
    go(position) {
      const maxPosition = this._length - this._size;
      this.position = position > maxPosition ? maxPosition : position;

      const left =
        this._itemWidth * this.position +
        this.position * this._options.item.padding;
      this.$refs.list.scrollTo({ top: 0, left: left, behavior: "smooth" });
    },
    /**
     * Run autoPlay slide show
     */
    runAutoPlay() {
      this.autoPlayInterval = setInterval(
        function () {
          if (
            this._options.autoplay.repeat &&
            this.position === this._length - this._size
          ) {
            this.position = 0;
            this.go(this.position);
          } else {
            this.position += 1;
            this.go(this.position);
          }
        }.bind(this),
        this._options.autoplay.speed
      );
    },
    /**
     * Stop autoPlay slide show
     */
    stopAutoPlay() {
      clearInterval(this.autoPlayInterval);
    },
    /**
     * Go to a set of previous items
     */
    prev() {
      this.go(this.position - this._size);
    },

    /**
     * Go to a set of next items
     */
    next() {
      this.go(this.position + this._size);
    },
    /**
     * On horizontal scroll re-evaluate the actual position
     */
    scrollHandler() {
      clearTimeout(this.scrollTimer);

      //Renew timer
      this.scrollTimer = setTimeout(
        function () {
          const parentLeftOffset =
            this.$refs["list"].getBoundingClientRect().left;

          let items = this._items.map((item, index) => {
            const itemLeftOffset =
              this.$refs.item[index].getBoundingClientRect().left;
            return Math.abs(itemLeftOffset - parentLeftOffset);
          });

          this.position = items.indexOf(Math.min(...items));
        }.bind(this),
        50
      );
    },
  },
  watch: {
    "options.autoplay.play": function (newVal, oldVal) {
      if (!newVal) {
        this.stopAutoPlay();
      } else {
        this.runAutoPlay();
      }
    },
  },
};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
    class: "vue-horizontal-list",
    ref: "container"
  }, _attrs))} data-v-73a974bc>`)
  if ($data.width.window > $options._options.navigation.start) {
    _push(`<div class="vhl-navigation" data-v-73a974bc>`)
    if ($options._hasPrev) {
      _push(`<div class="vhl-btn-left" data-v-73a974bc>`)
      __vite_ssr_import_2__.ssrRenderSlot(_ctx.$slots, "nav-prev", {}, () => {
        _push(`<svg${__vite_ssr_import_2__.ssrRenderAttr("fill", $options._options.navigation.color)} width="32px" height="32px" viewBox="0 0 24 24" data-v-73a974bc><path d="M10.757 12l4.95 4.95a1 1 0 1 1-1.414 1.414l-5.657-5.657a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 0 1 1.414 1.414L10.757 12z" data-v-73a974bc></path></svg>`)
      }, _push, _parent)
      _push(`</div>`)
    } else {
      _push(`<!---->`)
    }
    if ($options._hasNext) {
      _push(`<div class="vhl-btn-right" data-v-73a974bc>`)
      __vite_ssr_import_2__.ssrRenderSlot(_ctx.$slots, "nav-next", {}, () => {
        _push(`<svg${__vite_ssr_import_2__.ssrRenderAttr("fill", $options._options.navigation.color)} width="32px" height="32px" viewBox="0 0 24 24" data-v-73a974bc><path d="M13.314 12.071l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z" data-v-73a974bc></path></svg>`)
      }, _push, _parent)
      _push(`</div>`)
    } else {
      _push(`<!---->`)
    }
    _push(`</div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`<div class="vhl-container" style="${
    __vite_ssr_import_2__.ssrRenderStyle($options._style.container)
  }" data-v-73a974bc><div class="${
    __vite_ssr_import_2__.ssrRenderClass([$options._options.list.class, "vhl-list"])
  }" style="${
    __vite_ssr_import_2__.ssrRenderStyle($options._style.list)
  }" data-v-73a974bc><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($options._items, (item) => {
    _push(`<div class="${
      __vite_ssr_import_2__.ssrRenderClass([$options._options.item.class, "vhl-item"])
    }" style="${
      __vite_ssr_import_2__.ssrRenderStyle($options._style.item)
    }" data-v-73a974bc>`)
    if (item.type === 'start') {
      __vite_ssr_import_2__.ssrRenderSlot(_ctx.$slots, "start", {}, null, _push, _parent)
    } else if (item.type === 'end') {
      __vite_ssr_import_2__.ssrRenderSlot(_ctx.$slots, "end", {}, null, _push, _parent)
    } else if (item.type === 'item') {
      __vite_ssr_import_2__.ssrRenderSlot(_ctx.$slots, "default", {
        item: item.item
      }, () => {
        _push(`${__vite_ssr_import_2__.ssrInterpolate(item)}`)
      }, _push, _parent)
    } else {
      _push(`<!---->`)
    }
    _push(`</div>`)
  })
  _push(`<!--]--><div style="${__vite_ssr_import_2__.ssrRenderStyle($options._style.tail)}" data-v-73a974bc></div></div></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/horizontal-list.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/horizontal-list.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-73a974bc"],['__file',"/home/rizkhal/Project/tamael-news-2/components/horizontal-list.vue"]]);
}


// --------------------
// Request: /components/horizontal-list.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/horizontal-list.vue ($id_a31e722f)
// Dependencies: 

// --------------------
const $id_5bb0df3d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.vue-horizontal-list[data-v-73a974bc] {\n  position: relative;\n}\n.vhl-navigation[data-v-73a974bc] {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  margin-top: -6px;\n}\n.vhl-btn-left[data-v-73a974bc],\n.vhl-btn-right[data-v-73a974bc] {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border-radius: 24px;\n  background: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n\n  z-index: 2;\n}\n.vhl-btn-left[data-v-73a974bc]:hover,\n.vhl-btn-right[data-v-73a974bc]:hover {\n  cursor: pointer;\n}\n.vhl-btn-left[data-v-73a974bc] {\n  margin-left: -24px;\n  margin-right: auto;\n}\n.vhl-btn-right[data-v-73a974bc] {\n  margin-left: auto;\n  margin-right: -24px;\n}\n.vhl-container[data-v-73a974bc] {\n  overflow-y: hidden;\n  height: 100%;\n  margin-bottom: -24px;\n}\n.vhl-list[data-v-73a974bc] {\n  display: flex;\n  padding-bottom: 24px;\n  margin-bottom: -24px;\n\n  overflow-x: scroll;\n  overflow-y: hidden;\n  scroll-behavior: smooth;\n  -webkit-overflow-scrolling: touch;\n  -ms-scroll-snap-type: x mandatory;\n      scroll-snap-type: x mandatory;\n}\n.vhl-item[data-v-73a974bc] {\n  box-sizing: content-box;\n\n  padding-top: 24px;\n  padding-bottom: 24px;\n\n  z-index: 1;\n\n  /* Prevent content from collapsing when empty. E.g. image while loading height=0. */\n  min-height: 1px;\n}\n.vhl-list > *[data-v-73a974bc] {\n  scroll-snap-align: start;\n  flex-shrink: 0;\n}\n";
}


// --------------------
// Request: /components/headline.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /components/headline.vue ($id_a2a60e42)
// Dependencies: 

// --------------------
const $id_5d1b4b93 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\np[data-v-3fdf780f],\nh3[data-v-3fdf780f],\nh2[data-v-3fdf780f] {\n  margin-top: 4px;\n\n  overflow: hidden;\n  display: -webkit-box;\n  text-overflow: ellipsis;\n  word-break: break-word;\n\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.subtitle[data-v-3fdf780f] {\n  margin-top: 10px;\n  font-size: 12px;\n  font-weight: 600;\n  color: black;\n  margin-bottom: 8px;\n}\n.image-container[data-v-3fdf780f] {\n  border-radius: 3px;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  padding-top: 120%;\n}\n.image-content[data-v-3fdf780f] {\n  border-radius: 100px;\n}\n.image-text[data-v-3fdf780f] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n\n  padding: 32px 24px;\n  display: flex;\n  align-items: flex-end;\n  background: rgba(0, 0, 0, 0.4);\n}\n.image-text h2[data-v-3fdf780f] {\n  margin: 0;\n  color: white;\n  text-align: center;\n}\nimg[data-v-3fdf780f] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n";
}


// --------------------
// Request: /pages/posts/[slug].vue
// Parents: 
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/routes.mjs ($id_1d110c72)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_83940f72 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${
    __vite_ssr_import_0__.ssrRenderAttrs(_attrs)
  }>${
    __vite_ssr_import_0__.ssrInterpolate(_ctx.$route.params)
  }</div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/posts/[slug].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/rizkhal/Project/tamael-news-2/pages/posts/[slug].vue"]]);
}


// --------------------
// Request: /pages/posts/index.vue
// Parents: 
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/routes.mjs ($id_1d110c72)
// Dependencies: 
// - /components/headline.vue ($id_a2a60e42)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_763a1eda = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/headline.vue");

const _sfc_main = {
  setup(__props, { expose }) {
  expose();

//

const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_headline = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "flex flex-col space-y-4" }, _attrs))}><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList(_ctx.posts, (post, index) => {
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_headline, {
      key: index,
      post: post
    }, null, _parent))
  })
  _push(`<!--]--></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/posts/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/rizkhal/Project/tamael-news-2/pages/posts/index.vue"]]);
}


// --------------------
// Request: /pages/videos/index.vue
// Parents: 
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/routes.mjs ($id_1d110c72)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ce816178 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {

}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}><h1>Video</h1></div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/videos/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/rizkhal/Project/tamael-news-2/pages/videos/index.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 

// --------------------
const $id_4392ebd3 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs
// Parents: 
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/plugins/server.mjs ($id_335baa12)
// Dependencies: 
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// --------------------
const $id_7b587af2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");


if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_0__.$fetch
}

__vite_ssr_exports__.default = () => {}
;
}


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_7b587af2)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import("file:///home/rizkhal/Project/tamael-news-2/node_modules/ohmyfetch/dist/index.mjs").then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error("[vite dev] Error loading external \"/home/rizkhal/Project/tamael-news-2/node_modules/ohmyfetch/dist/index.mjs\".") })


// --------------------
// Request: /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/components.mjs
// Parents: 
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/plugins/server.mjs ($id_335baa12)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/headline.vue ($id_a2a60e42)
// - /components/horizontal-list.vue ($id_a31e722f)
// - /components/leftbar.vue ($id_f6660085)
// - /components/navbar.vue ($id_ccd51fbe)
// - /components/page-title.vue ($id_fbef8245)
// - /components/popular.vue ($id_aaef8ecc)
// - /components/posts.vue ($id_1292e8ce)
// - /components/icons/hamburger.vue ($id_de732361)
// --------------------
const $id_83e4d643 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {
  Headline: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/headline.vue').then(c => c.default || c)),
  HorizontalList: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/horizontal-list.vue').then(c => c.default || c)),
  Leftbar: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/leftbar.vue').then(c => c.default || c)),
  Navbar: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/navbar.vue').then(c => c.default || c)),
  PageTitle: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/page-title.vue').then(c => c.default || c)),
  Popular: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/popular.vue').then(c => c.default || c)),
  Posts: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/posts.vue').then(c => c.default || c)),
  IconsHamburger: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/icons/hamburger.vue').then(c => c.default || c))
}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /components/popular.vue
// Parents: 
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/components.mjs ($id_83e4d643)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_aaef8ecc = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = {
  name: "popular",
};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __vite_ssr_import_1__.resolveComponent("nuxt-link")

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}><div class="flex items-center"><h1 class="text-2xl"><span class="font-bold">Kabar</span> populer</h1>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_nuxt_link, {
    to: "/posts/popular",
    class: "ml-auto"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Lihat Semua`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Lihat Semua")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><div class="flex flex-col items-center gap-2 mt-4"><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList(5, (v, i) => {
    _push(`<div class="flex bg-white rounded-lg shadow-sm p-2"><img src="https://via.placeholder.com/80x80" alt="Popuplar news thumbnail" class="rounded-lg mr-2"><div class="flex items-center"><p class="text-md font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. ${__vite_ssr_import_2__.ssrInterpolate(++i)}</p></div></div>`)
  })
  _push(`<!--]--></div></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/popular.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/rizkhal/Project/tamael-news-2/components/popular.vue"]]);
}


// --------------------
// Request: /components/posts.vue
// Parents: 
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/components.mjs ($id_83e4d643)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_1292e8ce = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  name: "headline",
  props: {
    post: Object,
  },
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_0__.ssrRenderAttrs(_attrs)
  }><div class="mt-4 bg-white p-2 rounded-xl shadow-sm"><img${
    __vite_ssr_import_0__.ssrRenderAttr("src", $props.post.featured_media_src_url)
  }${
    __vite_ssr_import_0__.ssrRenderAttr("alt", $props.post.title.rendered)
  } class="rounded-xl object-fill min-w-full"><div class="flex items-center px-6"><div class="mt-4"><ul class="flex flex-row space-x-2"><!--[-->`)
  __vite_ssr_import_0__.ssrRenderList(3, (v, i) => {
    _push(`<li class="bg-green-300 py-[1px] px-2 rounded-full text-sm text-green-700"> Ternate ${__vite_ssr_import_0__.ssrInterpolate(++i)}</li>`)
  })
  _push(`<!--]--></ul></div><div class="ml-auto mt-4"><ul class="flex flex-row space-x-4"><li>dwd</li><li>dwd</li><li>dwd</li></ul></div></div><p class="mt-4 font-semibold px-4 pb-4">${__vite_ssr_import_0__.ssrInterpolate($props.post.title.rendered)}</p></div></div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/posts.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/rizkhal/Project/tamael-news-2/components/posts.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/root-component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// --------------------
const $id_10960c1c = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/root-component.mjs ($id_10960c1c)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f8564e04 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {


const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");


const _sfc_main = {
  setup () {
    const nuxtApp = __vite_ssr_import_0__.useNuxtApp()
    const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
    if (true && results && results.some(i => i && 'then' in i)) {
      console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
    }
    return {
      onResolve: () => nuxtApp.callHook('app:suspense:resolve')
    }
  }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_1__.resolveComponent("App")

  __vite_ssr_import_2__.ssrRenderSuspense(_push, {
    default: () => {
      _push(__vite_ssr_import_2__.ssrRenderComponent(_component_App, null, null, _parent))
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/rizkhal/Project/tamael-news-2/node_modules/nuxt3/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/app-component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// Dependencies: 
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// --------------------
const $id_1501ce06 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/app.vue
// Parents: 
// - /@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/app-component.mjs ($id_1501ce06)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_0851ff57 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.resolveComponent("NuxtLayout")
  const _component_NuxtPage = __vite_ssr_import_0__.resolveComponent("NuxtPage")

  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: __vite_ssr_import_0__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_1__.ssrRenderComponent(_component_NuxtPage, null, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_0__.createVNode(_component_NuxtPage)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/rizkhal/Project/tamael-news-2/node_modules/nuxt3/dist/pages/runtime/app.vue"]]);
}


const __modules__ = {
  "/home/rizkhal/Project/tamael-news-2/node_modules/nuxt3/dist/app/entry": $id_9a6d43ef,
  "/node_modules/nuxt3/dist/app/bootstrap.mjs": $id_fef466a9,
  "/node_modules/vue/dist/vue.cjs.js": $id_60f0615f,
  "/node_modules/nuxt3/dist/app/index.mjs": $id_d8c2af0f,
  "/node_modules/nuxt3/dist/app/nuxt.mjs": $id_bf77ef36,
  "/node_modules/hookable/dist/index.mjs": $id_a2c811c4,
  "/node_modules/nuxt3/dist/app/compat/legacy-app.mjs": $id_75047751,
  "/node_modules/unenv/runtime/mock/proxy.mjs": $id_39e12da7,
  "/node_modules/nuxt3/dist/app/composables/index.mjs": $id_42ae3d5d,
  "/node_modules/nuxt3/dist/app/composables/component.mjs": $id_b47c3881,
  "/node_modules/vue-router/dist/vue-router.cjs.js": $id_f9a4a698,
  "/node_modules/nuxt3/dist/app/composables/asyncData.mjs": $id_a2ef143e,
  "/node_modules/nuxt3/dist/app/composables/hydrate.mjs": $id_43a772c2,
  "/node_modules/nuxt3/dist/app/composables/state.mjs": $id_d232db97,
  "/node_modules/nuxt3/dist/app/composables/fetch.mjs": $id_765a0ed7,
  "/node_modules/murmurhash-es/dist/index.mjs": $id_fbf6dac3,
  "/node_modules/nuxt3/dist/app/composables/cookie.mjs": $id_792d64c4,
  "/node_modules/cookie-es/dist/index.mjs": $id_f4975261,
  "/node_modules/h3/dist/index.mjs": $id_57d7ded6,
  "/node_modules/destr/dist/index.mjs": $id_03d15ecd,
  "/node_modules/nuxt3/dist/app/composables/ssr.mjs": $id_4d0dc923,
  "/@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/css.mjs": $id_c64a0c4c,
  "/assets/css/tailwind.css": $id_f75548e1,
  "/@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/plugins/server.mjs": $id_335baa12,
  "/node_modules/nuxt3/dist/app/plugins/preload.server.mjs": $id_b9f3c557,
  "/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs": $id_cbe5172d,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_c032264e,
  "/node_modules/nuxt3/dist/meta/runtime/plugin.mjs": $id_9fd5f35e,
  "/node_modules/nuxt3/dist/meta/runtime/components.mjs": $id_94744df3,
  "/node_modules/nuxt3/dist/meta/runtime/composables.mjs": $id_ca9295be,
  "/node_modules/@vue/shared/dist/shared.cjs.js": $id_852b06a2,
  "/@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/meta.config.mjs": $id_283924a0,
  "/node_modules/nuxt3/dist/pages/runtime/router.mjs": $id_a4d6cb5b,
  "/node_modules/nuxt3/dist/pages/runtime/page.mjs": $id_485c89bf,
  "/node_modules/nuxt3/dist/pages/runtime/utils.mjs": $id_e1b210cc,
  "/node_modules/nuxt3/dist/pages/runtime/layout.mjs": $id_9b68c93f,
  "/@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/layouts.mjs": $id_8a5724dc,
  "/layouts/default.vue": $id_7689e89d,
  "/components/navbar.vue": $id_ccd51fbe,
  "/components/icons/hamburger.vue": $id_de732361,
  "/node_modules/vue/server-renderer/index.js": $id_b215fa1c,
  "/@id/plugin-vue:export-helper": $id_bbb863c1,
  "/components/navbar.vue?vue&type=style&index=0&lang.css": $id_96e91790,
  "/components/leftbar.vue": $id_f6660085,
  "/@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/routes.mjs": $id_1d110c72,
  "/pages/index.vue?macro=true": $id_5dd70240,
  "/pages/posts/[slug].vue?macro=true": $id_1478ca25,
  "/pages/posts/index.vue?macro=true": $id_9751f318,
  "/pages/videos/index.vue?macro=true": $id_adf04a08,
  "/pages/index.vue": $id_cca58e97,
  "/components/page-title.vue": $id_fbef8245,
  "/components/headline.vue": $id_a2a60e42,
  "/components/horizontal-list.vue": $id_a31e722f,
  "/components/horizontal-list.vue?vue&type=style&index=0&scoped=true&lang.css": $id_5bb0df3d,
  "/components/headline.vue?vue&type=style&index=0&scoped=true&lang.css": $id_5d1b4b93,
  "/pages/posts/[slug].vue": $id_83940f72,
  "/pages/posts/index.vue": $id_763a1eda,
  "/pages/videos/index.vue": $id_ce816178,
  "/@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/middleware.mjs": $id_4392ebd3,
  "/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs": $id_7b587af2,
  "/node_modules/ohmyfetch/dist/index.mjs": $id_780217c4,
  "/@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/components.mjs": $id_83e4d643,
  "/components/popular.vue": $id_aaef8ecc,
  "/components/posts.vue": $id_1292e8ce,
  "/@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/root-component.mjs": $id_10960c1c,
  "/node_modules/nuxt3/dist/app/components/nuxt-root.vue": $id_f8564e04,
  "/@id/__x00__virtual:/home/rizkhal/Project/tamael-news-2/.nuxt/app-component.mjs": $id_1501ce06,
  "/node_modules/nuxt3/dist/pages/runtime/app.vue": $id_0851ff57
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  await mod(
    __ssrContext__.global,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("/home/rizkhal/Project/tamael-news-2/node_modules/nuxt3/dist/app/entry")