import{s as l,C as r,i as f,g as o,S as n,L as c}from"./space-B9R18Mwn.js";import{P as t}from"./index-Dk74W0Oi.js";import{c as m}from"./index-CVyJwDg7.js";import{A as p,J as u}from"./flex.types-q2tZp175.js";import{p as s}from"./prop-3Huj0iT1.js";const d={start:"start",end:"end",all:"all"},g=e=>{if(c(e))return`
      > :nth-child(${e}) { flex: 1 1 0%; }
    `;switch(e){case"start":return`
        > :first-child { flex: 1 1 0%; }
      `;case"end":return`
        > :last-child { flex: 1 1 0%; }
      `;case"all":return`
        > * { flex: 1 1 0%; }
      `;default:return null}},a=l.div.attrs(e=>({...e,className:m(r,e==null?void 0:e.className)})).withConfig({displayName:"Inline",componentId:"sc-fj42mf-0"})(["display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:",";align-items:",";"," && > *{margin-left:0;margin-right:0;}&& > * + *{margin-left:",";}"],s("justify"),s("align"),({stretch:e})=>f(e)&&g(e),({gap:e,theme:i})=>o(e,{theme:i}));a.propTypes={align:p,justify:u,gap:t.oneOf(Object.values(n)),stretch:t.oneOfType([t.number,t.oneOf(Object.values(d))]),className:t.string};a.defaultProps={gap:n.none};const I=a;export{I,d as S};
