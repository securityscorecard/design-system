import{s as m,C as n,g as r,i as c,S as i}from"./space-BY85GhUc.js";import{P as a}from"./index-BRV0Se7Z.js";import{c as l}from"./index-C7IrpltL.js";import{A as f}from"./flex.types-BrkCVx66.js";import{p as e}from"./prop-Cw0eZkJ_.js";const s=m.div.attrs(t=>({...t,className:l(n,t==null?void 0:t.className)})).withConfig({displayName:"Stack",componentId:"sc-1m2fhx8-0"})(["display:flex;flex-direction:column;flex-wrap:nowrap;align-items:",";justify-content:",";"," *{margin-top:0;margin-bottom:0;}"," * + *{margin-top:",";}",""],e("justify"),e("align"),({isRecursive:t})=>t?"&&":"&& >",({isRecursive:t})=>t?"&&":"&& >",({gap:t,theme:o})=>r(t,{theme:o}),({splitAt:t})=>c(t)&&`
    :only-child {
      height: 100%;
    }

    > :nth-child(${t}) {
      margin-bottom: auto;
    }
  `);s.propTypes={gap:a.oneOf(Object.values(i)),justify:f,splitAt:a.number,isRecursive:a.bool,className:a.string};s.defaultProps={gap:i.none,justify:"stretch",isRecursive:!1};const h=s;export{h as S};
