function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-PKQXORMH-BJs1QP18.js","./iframe-Cs5C-iW1.js","./index-CTjT7uj6.js","./client-BPO8Cs_a.js","./index-DIVhMF2i.js","./index-D4lxgMQs.js","./extends-CF3RwP-h.js","./isNativeReflectConstruct-lfp1ZYuW.js","./inheritsLoose-B6jfs0L0.js","./setPrototypeOf-DgZC2w_0.js","./index-MJJVguu6.js","./index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./iframe-Cs5C-iW1.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-PKQXORMH-BJs1QP18.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
//# sourceMappingURL=preview-BqeHDkAa.js.map
