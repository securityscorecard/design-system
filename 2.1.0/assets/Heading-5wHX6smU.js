import{j as m}from"./jsx-runtime-Cw0GR0a5.js";import{R as k}from"./index-CTjT7uj6.js";import{P as r}from"./index-BRV0Se7Z.js";import{A as f,h as n,Z as t,D as c,F as O,s as u,G as l,H as p,O as x,N as y,a as I}from"./space-BY85GhUc.js";import{c as E}from"./index-C7IrpltL.js";const s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5"},i={default:"primary",subtle:"secondary",primary:"primary",secondary:"secondary"},v=f(["color:var(--sscds-color-text-default);"]),h=f(["color:var(--sscds-color-icon-subtle);"]),P={default:v,subtle:h,primary:v,secondary:h},b={h1:{top:n(t*5),bottom:n(t*2.5)},h2:{top:n(t*4),bottom:n(t*2)},h3:{top:n(t*3),bottom:n(t*1.5)},h4:{top:n(t*2),bottom:n(t)},h5:{top:n(t*2),bottom:n(t)}},d=f(["font-family:",";font-weight:",";margin-top:",";margin-bottom:",";",";",";"],O("base"),c("medium"),({size:e})=>y([e,"top"],b),({size:e})=>y([e,"bottom"],b),I,({variant:e})=>P[e]),C=u.h1.withConfig({displayName:"Heading__HeadingH1",componentId:"sc-vblmq0-0"})(["",";font-size:",";line-height:",";font-weight:",";"],d,l("h1"),p("xxl"),c("bold")),R=u.h2.withConfig({displayName:"Heading__HeadingH2",componentId:"sc-vblmq0-1"})(["",";font-size:",";line-height:",";"],d,l("h2"),p("xxl")),S=u.h3.withConfig({displayName:"Heading__HeadingH3",componentId:"sc-vblmq0-2"})(["",";font-size:",";line-height:",";"],d,l("h3"),p("xl")),V=u.h4.withConfig({displayName:"Heading__HeadingH4",componentId:"sc-vblmq0-3"})(["",";font-size:",";line-height:",";font-weight:",";"],d,l("h4"),p("h4"),c("semibold")),A=u.h5.withConfig({displayName:"Heading__HeadingH5",componentId:"sc-vblmq0-4"})(["",";font-size:",";line-height:",";font-weight:",";"],d,l("h5"),p("h4"),c("semibold")),D={h1:C,h2:R,h3:S,h4:V,h5:A},o=({children:e,size:a=s.h1,variant:T=i.primary,className:w,...N})=>{const j={size:a,variant:T,className:E(x,w),children:e,...N};return k.createElement(D[a],j,e)};o.propTypes={size:r.oneOf(Object.values(s)),variant:r.oneOf(Object.values(i)),className:r.string};const W=o,g=({children:e,...a})=>m.jsx(o,{size:s.h1,...a,children:e});g.propTypes={variant:r.oneOf(Object.values(i))};const H=({children:e,...a})=>m.jsx(o,{size:s.h2,...a,children:e});H.propTypes={variant:r.oneOf(Object.values(i))};const q=({children:e,...a})=>m.jsx(o,{size:s.h3,...a,children:e});q.propTypes={variant:r.oneOf(Object.values(i))};const _=({children:e,...a})=>m.jsx(o,{size:s.h4,...a,children:e});_.propTypes={variant:r.oneOf(Object.values(i))};const z=({children:e,...a})=>m.jsx(o,{size:s.h5,...a,children:e});z.propTypes={variant:r.oneOf(Object.values(i))};o.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{margin:{required:!1,tsType:{name:"union",raw:`| 'none'
| number
| {
    vertical?: number;
    horizontal?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }`,elements:[{name:"literal",value:"'none'"},{name:"number"},{name:"signature",type:"object",raw:`{
  vertical?: number;
  horizontal?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}`,signature:{properties:[{key:"vertical",value:{name:"number",required:!1}},{key:"horizontal",value:{name:"number",required:!1}},{key:"top",value:{name:"number",required:!1}},{key:"bottom",value:{name:"number",required:!1}},{key:"left",value:{name:"number",required:!1}},{key:"right",value:{name:"number",required:!1}}]}}]},description:`**DEPRECATED** use Layout Primitives for layouts

@deprecated use layout primitives instead`},padding:{required:!1,tsType:{name:"union",raw:`| 'none'
| number
| {
    vertical?: number;
    horizontal?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }`,elements:[{name:"literal",value:"'none'"},{name:"number"},{name:"signature",type:"object",raw:`{
  vertical?: number;
  horizontal?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}`,signature:{properties:[{key:"vertical",value:{name:"number",required:!1}},{key:"horizontal",value:{name:"number",required:!1}},{key:"top",value:{name:"number",required:!1}},{key:"bottom",value:{name:"number",required:!1}},{key:"left",value:{name:"number",required:!1}},{key:"right",value:{name:"number",required:!1}}]}}]},description:`**DEPRECATED** use Layout Primitives for layouts

@deprecated use layout primitives instead`},size:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof HeadingSizes)[keyof typeof HeadingSizes]"},description:"",defaultValue:{value:"'h1'",computed:!1},type:{name:"enum",value:[{value:'"h1"',computed:!1},{value:'"h2"',computed:!1},{value:'"h3"',computed:!1},{value:'"h4"',computed:!1},{value:'"h5"',computed:!1}]}},variant:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof HeadingVariants)[keyof typeof HeadingVariants]"},description:"",defaultValue:{value:"'primary'",computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1}]}},className:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},children:{required:!0,tsType:{name:"ReactNode"},description:""},as:{required:!1,tsType:{name:"ElementType"},description:""}}};g.__docgenInfo={description:"",methods:[],displayName:"H1",props:{variant:{description:"",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1}]},required:!1}}};H.__docgenInfo={description:"",methods:[],displayName:"H2",props:{variant:{description:"",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1}]},required:!1}}};q.__docgenInfo={description:"",methods:[],displayName:"H3",props:{variant:{description:"",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1}]},required:!1}}};_.__docgenInfo={description:"",methods:[],displayName:"H4",props:{variant:{description:"",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1}]},required:!1}}};z.__docgenInfo={description:"",methods:[],displayName:"H5",props:{variant:{description:"",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1}]},required:!1}}};export{H,W as a,s as b,i as c,g as d,q as e,_ as f,z as g};
