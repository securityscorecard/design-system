import{j as b}from"./jsx-runtime-CfatFE5O.js";import{r as O}from"./index-ClcD9ViR.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as d}from"./SortableList-BK_UVqhE.js";import{z as h}from"./zipObj-C0uoDeoJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./sortable.esm-C-iNasD-.js";import"./index-_KdZNTQd.js";import"./modifiers.esm-ByjRBgE8.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-C6QYDNqb.js";import"./index-Bb-be-4U.js";import"./constants-CHqWh-7J.js";import"./space.enums-BgYGmFKv.js";import"./_isObject-BZZHHNGj.js";import"./index-BavDiaxs.js";import"./Padbox-DtjBCBeh.js";import"./index-DxcpycWO.js";import"./index-CE0KGU9S.js";import"./prop-Cr6L5s4M.js";import"./Inline-9kw33TPP.js";import"./Inline.enums-L64S19IZ.js";import"./Cluster-CHwR_-vL.js";import"./useLogger-CCAiqPwH.js";import"./DSProvider-mgEeOsVG.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./index-DUaCKjdz.js";import"./index-BLQl-HhB.js";import"./isFunction-CPOop_5p.js";import"./pluck-CtHNMFGn.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./index-UmBe9P8-.js";const et={title:"components/SortableList",component:d},c=["item1","item2","item3","item4","item5","item6"],L=h(c,["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"]),g=({items:l,...u})=>{const[S,I]=O.useState(l);return b.jsx(d,{...u,items:S,onOrderChange:o=>{r("onOrderChange")(o),I(o)}})},t=g.bind({});t.args={items:c,labels:L,onDragStart:r("onDragStart"),onDragOver:r("onDragOver"),onDragEnd:r("onDragEnd"),onDragCancel:r("onDragCancel")};t.parameters={screenshot:{skip:!0}};const e=g.bind({});e.args={...t.args,labels:void 0};var s,m,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
//# sourceMappingURL=SortableList.stories-DsAd6Ed-.js.map
