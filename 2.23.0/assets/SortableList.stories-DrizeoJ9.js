import{j as b}from"./jsx-runtime-CfatFE5O.js";import{r as O}from"./index-ClcD9ViR.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as d}from"./SortableList-CUeumFbZ.js";import{z as h}from"./zipObj-BkK7rA3s.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./sortable.esm-Dp2JVDVv.js";import"./index-Dw8zQ6WV.js";import"./modifiers.esm-ByjRBgE8.js";import"./styled-components.browser.esm-C8HMneKs.js";import"./index-Dg7OEBei.js";import"./index-D5D9nAa6.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./index-CT2OIHT-.js";import"./Padbox-CTuFGL01.js";import"./index-DxcpycWO.js";import"./index-BXECzo_T.js";import"./prop-gA1VFyoz.js";import"./Inline-ErbB6jzf.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-D835thia.js";import"./useLogger-DUeFF7SW.js";import"./DSProvider-_CMlen06.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./index-slDD0MBU.js";import"./index-DRm3KUNF.js";import"./isFunction-B5WoXTNq.js";import"./pluck-B5Qa9yNi.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-DFY1Tdgr.js";const et={title:"components/SortableList",component:d},c=["item1","item2","item3","item4","item5","item6"],L=h(c,["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"]),g=({items:l,...u})=>{const[S,I]=O.useState(l);return b.jsx(d,{...u,items:S,onOrderChange:o=>{r("onOrderChange")(o),I(o)}})},t=g.bind({});t.args={items:c,labels:L,onDragStart:r("onDragStart"),onDragOver:r("onDragOver"),onDragEnd:r("onDragEnd"),onDragCancel:r("onDragCancel")};t.parameters={screenshot:{skip:!0}};const e=g.bind({});e.args={...t.args,labels:void 0};var s,m,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const ot=["Playground","WithoutLabels"];export{t as Playground,e as WithoutLabels,ot as __namedExportsOrder,et as default};
//# sourceMappingURL=SortableList.stories-DrizeoJ9.js.map
