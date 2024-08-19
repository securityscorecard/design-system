import{j as b}from"./jsx-runtime-Cw0GR0a5.js";import{r as O}from"./index-CTjT7uj6.js";import{a as e}from"./chunk-454WOBUV-DWuJqIWT.js";import{S as d}from"./SortableList-DoUudND8.js";import{z as h}from"./zipObj-DVsQulIT.js";import"./v4-D8aEg3BZ.js";import"./index-BRV0Se7Z.js";import"./sortable.esm-CWiKwvcN.js";import"./index-DIVhMF2i.js";import"./modifiers.esm-D9Gd6yO_.js";import"./space-1LtLrmuu.js";import"./Surface-DpLLkhSd.js";import"./index-C7IrpltL.js";import"./flex.types-BrkCVx66.js";import"./useLogger-Cd66DVRc.js";import"./DSProvider-IYcK3cWD.js";import"./extends-CF3RwP-h.js";import"./theme-Cr_I21Pv.js";import"./colors-CyEChGtp.js";import"./prop-DG2n0FAQ.js";import"./Padbox-DKEfmyAv.js";import"./Stack-D3Wl5zWT.js";import"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import"./DSThemeOverride-BduN1ykm.js";import"./index-DFvsTZbx.js";import"./Text-DTP2ysh1.js";const U={title:"components/SortableList",component:d},c=["item1","item2","item3","item4","item5","item6"],L=h(c,["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"]),g=({items:l,...u})=>{const[S,I]=O.useState(l);return b.jsx(d,{...u,items:S,onOrderChange:o=>{e("onOrderChange")(o),I(o)}})},t=g.bind({});t.args={items:c,labels:L,onDragStart:e("onDragStart"),onDragOver:e("onDragOver"),onDragEnd:e("onDragEnd"),onDragCancel:e("onDragCancel")};t.parameters={screenshot:{skip:!0}};const r=g.bind({});r.args={...t.args,labels:void 0};var s,m,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
