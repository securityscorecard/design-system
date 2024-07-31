import{j as b}from"./jsx-runtime-Nms4Y4qS.js";import{r as O}from"./index-BwDkhjyp.js";import{a as e}from"./chunk-454WOBUV-DWuJqIWT.js";import{S as d}from"./SortableList-cioTTupr.js";import{z as h}from"./zipObj-D5WCOpKt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-D8aEg3BZ.js";import"./index-Dk74W0Oi.js";import"./sortable.esm-DD_xGjRI.js";import"./index-DhoXBIRq.js";import"./modifiers.esm-CDknwSvc.js";import"./space-B9R18Mwn.js";import"./Surface-Cs7tekjF.js";import"./index-CVyJwDg7.js";import"./flex.types-q2tZp175.js";import"./useLogger-D4I9buOf.js";import"./DSProvider-DzIDhM_J.js";import"./extends-CF3RwP-h.js";import"./theme-BW2FcxSF.js";import"./colors-DAn332pn.js";import"./prop-3Huj0iT1.js";import"./Padbox-BrtZqAZY.js";import"./Stack-B_iJg7G-.js";import"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import"./index-DFvsTZbx.js";import"./Text-C1sA-5dj.js";const U={title:"components/SortableList",component:d},c=["item1","item2","item3","item4","item5","item6"],L=h(c,["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"]),g=({items:l,...u})=>{const[S,I]=O.useState(l);return b.jsx(d,{...u,items:S,onOrderChange:o=>{e("onOrderChange")(o),I(o)}})},t=g.bind({});t.args={items:c,labels:L,onDragStart:e("onDragStart"),onDragOver:e("onDragOver"),onDragEnd:e("onDragEnd"),onDragCancel:e("onDragCancel")};t.parameters={screenshot:{skip:!0}};const r=g.bind({});r.args={...t.args,labels:void 0};var s,m,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
  items,
  ...args
}) => {
  const [sortedItems, setSortedItems] = useState(items);
  return <SortableList {...args} items={sortedItems} onOrderChange={keys => {
    action('onOrderChange')(keys);
    setSortedItems(keys);
  }} />;
}`,...(a=(m=t.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};var n,i,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`({
  items,
  ...args
}) => {
  const [sortedItems, setSortedItems] = useState(items);
  return <SortableList {...args} items={sortedItems} onOrderChange={keys => {
    action('onOrderChange')(keys);
    setSortedItems(keys);
  }} />;
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const V=["Playground","WithoutLabels"];export{t as Playground,r as WithoutLabels,V as __namedExportsOrder,U as default};
