import{j as c}from"./jsx-runtime-Nms4Y4qS.js";import{R as p}from"./index-BwDkhjyp.js";import{P as e}from"./index-Dk74W0Oi.js";import"./Surface-Cs7tekjF.js";import"./Padbox-BrtZqAZY.js";import"./Stack-B_iJg7G-.js";import{I as q}from"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import{j as _,S as n,e as x,P as h}from"./space-B9R18Mwn.js";import{a as w,B as P,b as E}from"./BaseTabLabel-CtrAa1KX.js";import{r as S}from"./require-router-link-m162i5rV.js";const t=w,b=({selectedValue:m,selectedPatternMatcher:i=x,children:a,onSelectTab:l,variant:r=t.underline,isExpanded:u=!1})=>c.jsx(P,{$isExpanded:u,$variant:r,className:_,paddingSize:r===t.segmented?n.xs:n.none,children:c.jsx(q,{gap:r===t.segmented?n.sm:r===t.underline?n.none:n.lg,role:"tablist",stretch:u?"all":0,children:p.Children.map(a,s=>p.isValidElement(s)?p.cloneElement(s,{key:s.props.value,__variant:r,__isExpanded:u,__isSelected:i(s.props.value,m),__onSelectTab:l}):null)})});b.propTypes={selectedValue:e.oneOfType([e.string,e.number]).isRequired,children:e.arrayOf(e.node).isRequired,variant:e.oneOf(Object.values(t)),selectedPatternMatcher:e.func,isExpanded:e.bool,onSelectTab:e.func};const M=b;b.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{margin:{required:!1,tsType:{name:"union",raw:`| 'none'
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

@deprecated use layout primitives instead`},variant:{required:!1,tsType:{name:"TabProps['__variant']",raw:"TabProps['__variant']"},description:"",defaultValue:{value:"'underline'",computed:!1},type:{name:"enum",value:[{value:'"text"',computed:!1},{value:'"underline"',computed:!1},{value:'"segmented"',computed:!1}]}},selectedValue:{required:!0,tsType:{name:"ReactReactText",raw:"React.ReactText"},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]}},selectedPatternMatcher:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: React.ReactText,
  selectedValue: React.ReactText,
) => boolean`,signature:{arguments:[{type:{name:"ReactReactText",raw:"React.ReactText"},name:"value"},{type:{name:"ReactReactText",raw:"React.ReactText"},name:"selectedValue"}],return:{name:"boolean"}}},description:"",defaultValue:{value:"equals",computed:!0},type:{name:"func"}},onSelectTab:{required:!1,tsType:{name:"TabProps['__onSelectTab']",raw:"TabProps['__onSelectTab']"},description:"",type:{name:"func"}},children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:"",type:{name:"arrayOf",value:{name:"node"}}},isExpanded:{required:!1,tsType:{name:"TabProps['__isExpanded']",raw:"TabProps['__isExpanded']"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}};const T=({children:m,onClick:i,value:a,__variant:l,__isExpanded:r,__isSelected:u,__onSelectTab:s})=>{var y;const d=(y=a==null?void 0:a.toString())==null?void 0:y.startsWith("/"),R=o=>{(o.key==="Enter"||o.key===" ")&&s(a)},v=d?{to:a,onClick:i}:{onClick:o=>{s(a),i==null||i(o)},onKeyDown:o=>{R(o)}};let f=null;d&&(f=S());const g=l===t.segmented?n.sm:l===t.underline?n.md:n.none;return c.jsx(E,{$isExpanded:r,$isSelected:u,$variant:l,"aria-selected":u,as:d?f:"a",paddingSize:g,paddingType:h.squish,role:"tab",tabIndex:0,...v,children:m})};T.propTypes={children:e.node.isRequired,value:e.string.isRequired,__variant:e.oneOf(Object.values(t)),__isSelected:e.bool,__isExpanded:e.bool,__onSelectTab:e.func,onClick:e.func};T.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},value:{required:!0,tsType:{name:"ReactReactText",raw:"React.ReactText"},description:"",type:{name:"string"}},onClick:{required:!1,tsType:{name:"MouseEventHandler"},description:"",type:{name:"func"}},__isSelected:{required:!1,tsType:{name:"LabelProps['$isSelected']",raw:"LabelProps['$isSelected']"},description:"Internal properties",type:{name:"bool"}},__isExpanded:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},__onSelectTab:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedValue: React.ReactText) => void",signature:{arguments:[{type:{name:"ReactReactText",raw:"React.ReactText"},name:"selectedValue"}],return:{name:"void"}}},description:"",type:{name:"func"}},__variant:{required:!1,tsType:{name:"LabelProps['$variant']",raw:"LabelProps['$variant']"},description:"",type:{name:"enum",value:[{value:'"text"',computed:!1},{value:'"underline"',computed:!1},{value:'"segmented"',computed:!1}]}}}};export{M as T,t as a,T as b};
