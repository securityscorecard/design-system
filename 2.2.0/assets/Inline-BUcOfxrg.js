import{s,C as r,i as u,g as d,S as t,G as f}from"./space-1LtLrmuu.js";import{P as a}from"./index-BRV0Se7Z.js";import{c as o}from"./index-C7IrpltL.js";import{A as m,J as c}from"./flex.types-BrkCVx66.js";import{p as n}from"./prop-DG2n0FAQ.js";const p={start:"start",end:"end",all:"all"},v=e=>{if(f(e))return`
      > :nth-child(${e}) { flex: 1 1 0%; }
    `;switch(e){case"start":return`
        > :first-child { flex: 1 1 0%; }
      `;case"end":return`
        > :last-child { flex: 1 1 0%; }
      `;case"all":return`
        > * { flex: 1 1 0%; }
      `;default:return null}},l=s.div.attrs(e=>({...e,className:o(r,e==null?void 0:e.className)})).withConfig({displayName:"Inline",componentId:"sc-fj42mf-0"})(["display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:",";align-items:",";"," && > *{margin-left:0;margin-right:0;}&& > * + *{margin-left:",";}"],n("justify"),n("align"),({stretch:e})=>u(e)&&v(e),({gap:e,theme:i})=>d(e,{theme:i}));l.propTypes={align:m,justify:c,gap:a.oneOf(Object.values(t)),stretch:a.oneOfType([a.number,a.oneOf(Object.values(p))]),className:a.string};l.defaultProps={gap:t.none};const S=l;try{l.displayName="Inline",l.__docgenInfo={description:"",displayName:"Inline",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},align:{defaultValue:null,description:"Vertical alignment of elements inside Inline",name:"align",required:!1,type:{name:"AlignItems"}},justify:{defaultValue:null,description:"Horizontal alignment of elements inside Inline",name:"justify",required:!1,type:{name:"JustifyContent"}},stretch:{defaultValue:null,description:"Child or children to fill available space",name:"stretch",required:!1,type:{name:"number | Stretch"}},gap:{defaultValue:{value:"none"},description:"Whitespace between each child of the Inline",name:"gap",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"mdPlus"'},{value:'"lg"'},{value:'"lgPlus"'},{value:'"xl"'},{value:'"xlPlus"'},{value:'"xxl"'},{value:'"half-x"'},{value:'"1x"'},{value:'"2x"'},{value:'"3x"'},{value:'"4x"'},{value:'"6x"'},{value:'"8x"'},{value:'"12x"'},{value:'"16x"'},{value:'"24x"'},{value:'"32x"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}export{S as I,p as S};
