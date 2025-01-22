import{j as b}from"./jsx-runtime-CfatFE5O.js";import{r as O}from"./index-ClcD9ViR.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as d}from"./SortableList-CfWmy_NL.js";import{z as h}from"./zipObj-C0uoDeoJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./sortable.esm-C-iNasD-.js";import"./index-_KdZNTQd.js";import"./modifiers.esm-ByjRBgE8.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-UOk5nvl2.js";import"./index-CUb24YOv.js";import"./constants-C4Oh6sKJ.js";import"./space.enums-FzolKu9U.js";import"./_isObject-BZZHHNGj.js";import"./index-BaexK_kB.js";import"./Padbox-DmYWNoOJ.js";import"./index-DxcpycWO.js";import"./index-CLVl6jk_.js";import"./prop-C6y-wj7q.js";import"./Inline.enums-BdnhnZ8J.js";import"./Cluster-CGQQQZ4I.js";import"./useLogger-CGEbE2mZ.js";import"./DSProvider-Cqa5do1Y.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./index-Ccg6HrRD.js";import"./index-CeOnF3dB.js";import"./isFunction-DJDWul57.js";import"./pluck-DtgIh6Gb.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-CpAvg4Hc.js";const rt={title:"components/SortableList",component:d},c=["item1","item2","item3","item4","item5","item6"],L=h(c,["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"]),g=({items:l,...u})=>{const[S,I]=O.useState(l);return b.jsx(d,{...u,items:S,onOrderChange:o=>{r("onOrderChange")(o),I(o)}})},t=g.bind({});t.args={items:c,labels:L,onDragStart:r("onDragStart"),onDragOver:r("onDragOver"),onDragEnd:r("onDragEnd"),onDragCancel:r("onDragCancel")};t.parameters={screenshot:{skip:!0}};const e=g.bind({});e.args={...t.args,labels:void 0};var s,m,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const et=["Playground","WithoutLabels"];export{t as Playground,e as WithoutLabels,et as __namedExportsOrder,rt as default};
//# sourceMappingURL=SortableList.stories-DWpZYaq3.js.map
