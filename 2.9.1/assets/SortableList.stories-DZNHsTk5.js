import{j as b}from"./jsx-runtime-Cw0GR0a5.js";import{r as O}from"./index-CTjT7uj6.js";import{a as r}from"./chunk-454WOBUV-CM0pFb8Z.js";import{S as d}from"./SortableList-BHzaibZ6.js";import{z as h}from"./zipObj-C0uoDeoJ.js";import"./v4-CQkTLCs1.js";import"./sortable.esm-Bi71s_q_.js";import"./index-DIVhMF2i.js";import"./modifiers.esm-D9Gd6yO_.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-C1kpn3a9.js";import"./index-ndiHb6d5.js";import"./constants-CgU6e_L6.js";import"./space.enums-aJQ33HT_.js";import"./_isObject-BZZHHNGj.js";import"./slice-CaMqkvGm.js";import"./index-Dc3BNA-e.js";import"./Padbox-DpT_ILeC.js";import"./index-C7IrpltL.js";import"./index-FmXXYKzo.js";import"./prop-CgNUfcFy.js";import"./Inline.enums-CsgpNQwN.js";import"./Cluster-BnO1HbAj.js";import"./useLogger-BdR6T79l.js";import"./DSProvider-DZ2BDZS9.js";import"./extends-CF3RwP-h.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./index-BkLmc-fh.js";import"./index-BsP7FXMl.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./index-CUGQ8N4L.js";const tt={title:"components/SortableList",component:d},c=["item1","item2","item3","item4","item5","item6"],L=h(c,["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"]),g=({items:l,...u})=>{const[S,I]=O.useState(l);return b.jsx(d,{...u,items:S,onOrderChange:o=>{r("onOrderChange")(o),I(o)}})},t=g.bind({});t.args={items:c,labels:L,onDragStart:r("onDragStart"),onDragOver:r("onDragOver"),onDragEnd:r("onDragEnd"),onDragCancel:r("onDragCancel")};t.parameters={screenshot:{skip:!0}};const e=g.bind({});e.args={...t.args,labels:void 0};var s,m,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
//# sourceMappingURL=SortableList.stories-DZNHsTk5.js.map
