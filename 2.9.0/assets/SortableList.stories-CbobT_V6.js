import{j as b}from"./jsx-runtime-Cw0GR0a5.js";import{r as O}from"./index-CTjT7uj6.js";import{a as r}from"./chunk-454WOBUV-CM0pFb8Z.js";import{S as d}from"./SortableList-Ct1eg1qc.js";import{z as h}from"./zipObj-C0uoDeoJ.js";import"./v4-CQkTLCs1.js";import"./sortable.esm-Bi71s_q_.js";import"./index-DIVhMF2i.js";import"./modifiers.esm-D9Gd6yO_.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-UyBh8dRE.js";import"./index-CrKmLWnD.js";import"./constants-l-41uwkI.js";import"./space.enums-Dn0LioXL.js";import"./_isObject-BZZHHNGj.js";import"./index-dJwzZQsw.js";import"./Padbox-C9-4IgMJ.js";import"./index-C7IrpltL.js";import"./index-BFpmPCJD.js";import"./prop-DthtuCpe.js";import"./Inline.enums-B2crYYgS.js";import"./Cluster-_Y3KuvTf.js";import"./useLogger-BUVDCBjf.js";import"./DSProvider-BD6Crr4Z.js";import"./extends-CF3RwP-h.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./index-CbtSpW2v.js";import"./index-CajKmcpa.js";import"./isFunction-ueona4bl.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-BILJD4ib.js";const tt={title:"components/SortableList",component:d},c=["item1","item2","item3","item4","item5","item6"],L=h(c,["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"]),g=({items:l,...u})=>{const[S,I]=O.useState(l);return b.jsx(d,{...u,items:S,onOrderChange:o=>{r("onOrderChange")(o),I(o)}})},t=g.bind({});t.args={items:c,labels:L,onDragStart:r("onDragStart"),onDragOver:r("onDragOver"),onDragEnd:r("onDragEnd"),onDragCancel:r("onDragCancel")};t.parameters={screenshot:{skip:!0}};const e=g.bind({});e.args={...t.args,labels:void 0};var s,m,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
  items,
  ...args
}) => {
  const [sortedItems, setSortedItems] = useState(items);
  return <SortableList {...args} items={sortedItems} onOrderChange={keys => {
    action('onOrderChange')(keys);
    setSortedItems(keys);
  }} />;
}`,...(a=(m=t.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};var i,n,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
  items,
  ...args
}) => {
  const [sortedItems, setSortedItems] = useState(items);
  return <SortableList {...args} items={sortedItems} onOrderChange={keys => {
    action('onOrderChange')(keys);
    setSortedItems(keys);
  }} />;
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const rt=["Playground","WithoutLabels"];export{t as Playground,e as WithoutLabels,rt as __namedExportsOrder,tt as default};
//# sourceMappingURL=SortableList.stories-CbobT_V6.js.map
