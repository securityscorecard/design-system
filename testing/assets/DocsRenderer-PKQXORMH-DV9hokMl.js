function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-DSkyVWTJ.js","./index-CTjT7uj6.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as u}from"./iframe-Ix-0Lw17.js";import{R as o,r as m}from"./index-CTjT7uj6.js";import{c as l}from"./client-BPO8Cs_a.js";import{an as h,ao as d,ap as E,aq as R}from"./index-BXUN0mrA.js";import"../sb-preview/runtime.js";import"./index-DIVhMF2i.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-MJJVguu6.js";import"./index-DrFu-skq.js";var n=new Map,f=({callback:t,children:e})=>{let r=m.useRef();return m.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},x=async(t,e,r)=>{let s=await w(e,r);return new Promise(a=>{s.render(o.createElement(f,{callback:()=>a(null)},t))})},_=(t,e)=>{let r=n.get(t);r&&(r.unmount(),n.delete(t))},w=async(t,e)=>{let r=n.get(t);return r||(r=l.createRoot(t,e),n.set(t,r)),r},g={code:h,a:d,...E},y=class extends m.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:o.createElement(o.Fragment,null,e)}},H=class{constructor(){this.render=async(t,e,r)=>{let s={...g,...e==null?void 0:e.components},a=R;return new Promise((i,p)=>{u(()=>import("./index-DSkyVWTJ.js"),__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:c})=>x(o.createElement(y,{showException:p,key:Math.random()},o.createElement(c,{components:s},o.createElement(a,{context:t,docsParameter:e}))),r)).then(()=>i())})},this.unmount=t=>{_(t)}}};export{H as DocsRenderer,g as defaultComponents};
