import{j as b}from"./jsx-runtime-Cw0GR0a5.js";import{r as O}from"./index-CTjT7uj6.js";import{a as r}from"./chunk-454WOBUV-DWuJqIWT.js";import{S as d}from"./SortableList-BTa-BuoI.js";import{z as h}from"./zipObj-D_Us9sqw.js";import"./v4-D8aEg3BZ.js";import"./index-BRV0Se7Z.js";import"./sortable.esm-Bgh6Enlk.js";import"./index-DIVhMF2i.js";import"./modifiers.esm-D9Gd6yO_.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./index-BfLWfhlY.js";import"./index-DzAsfYvZ.js";import"./index-BawZj8GX.js";import"./Padbox-ugjOsLS7.js";import"./index-C7IrpltL.js";import"./index-BcSnSfQB.js";import"./flex.types-BrkCVx66.js";import"./prop-CePbk9wh.js";import"./Inline-Cg9jPAAE.js";import"./Cluster-HoiIP47J.js";import"./useLogger-IjsioYUQ.js";import"./DSProvider-DXXID37Q.js";import"./extends-CF3RwP-h.js";import"./theme-rODdEdpT.js";import"./colors-BJBAFLAc.js";import"./index-4aEyDaIq.js";import"./index-uyLpYamY.js";import"./isFunction-BtTpAfvx.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-BiHv5IcS.js";const Z={title:"components/SortableList",component:d},c=["item1","item2","item3","item4","item5","item6"],L=h(c,["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"]),g=({items:l,...u})=>{const[S,I]=O.useState(l);return b.jsx(d,{...u,items:S,onOrderChange:o=>{r("onOrderChange")(o),I(o)}})},t=g.bind({});t.args={items:c,labels:L,onDragStart:r("onDragStart"),onDragOver:r("onDragOver"),onDragEnd:r("onDragEnd"),onDragCancel:r("onDragCancel")};t.parameters={screenshot:{skip:!0}};const e=g.bind({});e.args={...t.args,labels:void 0};var s,m,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
  items,
  ...args
}) => {
  const [sortedItems, setSortedItems] = useState(items);
  return <SortableList {...args} items={sortedItems} onOrderChange={keys => {
    action('onOrderChange')(keys);
    setSortedItems(keys);
  }} />;
}`,...(a=(m=t.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};var n,i,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  items,
  ...args
}) => {
  const [sortedItems, setSortedItems] = useState(items);
  return <SortableList {...args} items={sortedItems} onOrderChange={keys => {
    action('onOrderChange')(keys);
    setSortedItems(keys);
  }} />;
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const $=["Playground","WithoutLabels"];export{t as Playground,e as WithoutLabels,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=SortableList.stories-CblOzoZ8.js.map
