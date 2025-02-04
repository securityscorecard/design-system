import{j as b}from"./jsx-runtime-CfatFE5O.js";import{r as O}from"./index-ClcD9ViR.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as d}from"./SortableList-DhlB7L71.js";import{z as h}from"./zipObj-C0uoDeoJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./sortable.esm-C-iNasD-.js";import"./index-_KdZNTQd.js";import"./modifiers.esm-ByjRBgE8.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-LR-EjM-6.js";import"./index-COP2hIVi.js";import"./constants-CHqWh-7J.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./slice-a4xO8Rfj.js";import"./index-Mn546iyH.js";import"./Padbox-D3nB_sul.js";import"./index-DxcpycWO.js";import"./index-1T5Tqafd.js";import"./prop-DM27i_5J.js";import"./Inline.enums-Cb7IYB12.js";import"./Cluster-Czc8yUGw.js";import"./useLogger-DJ74rrw8.js";import"./DSProvider-oeie4wyM.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./index-DAjbAeX4.js";import"./index-BLQl-HhB.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./index-fVh6sz_B.js";const tt={title:"components/SortableList",component:d},c=["item1","item2","item3","item4","item5","item6"],L=h(c,["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"]),g=({items:l,...u})=>{const[S,I]=O.useState(l);return b.jsx(d,{...u,items:S,onOrderChange:o=>{r("onOrderChange")(o),I(o)}})},t=g.bind({});t.args={items:c,labels:L,onDragStart:r("onDragStart"),onDragOver:r("onDragOver"),onDragEnd:r("onDragEnd"),onDragCancel:r("onDragCancel")};t.parameters={screenshot:{skip:!0}};const e=g.bind({});e.args={...t.args,labels:void 0};var s,m,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
//# sourceMappingURL=SortableList.stories-C5WQR7l9.js.map
