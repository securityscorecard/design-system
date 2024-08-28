import{j as b}from"./jsx-runtime-Cw0GR0a5.js";import{r as O}from"./index-CTjT7uj6.js";import{a as e}from"./chunk-454WOBUV-DWuJqIWT.js";import{S as d}from"./SortableList-C2_36uv_.js";import{z as h}from"./zipObj-BQKsoZL3.js";import"./v4-D8aEg3BZ.js";import"./index-BRV0Se7Z.js";import"./sortable.esm-Bgh6Enlk.js";import"./index-DIVhMF2i.js";import"./modifiers.esm-D9Gd6yO_.js";import"./index-C1FT5pTy.js";import"./index-B-CeicLq.js";import"./index--b1-fK-k.js";import"./Padbox-DLePQqEe.js";import"./index-C7IrpltL.js";import"./index-DPJ-F9hp.js";import"./flex.types-BrkCVx66.js";import"./prop-B-t2KTqT.js";import"./Inline-CVToOADQ.js";import"./Cluster-DZ_NL6w4.js";import"./useLogger-_RKsn3HX.js";import"./DSProvider-O0hTpwSp.js";import"./extends-CF3RwP-h.js";import"./theme-BL8xHceO.js";import"./colors-BJBAFLAc.js";import"./index-Cp1GzN7Y.js";import"./index-uyLpYamY.js";import"./isFunction-C9e5dGMJ.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-DXjoAeTX.js";const Y={title:"components/SortableList",component:d},c=["item1","item2","item3","item4","item5","item6"],L=h(c,["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"]),g=({items:l,...u})=>{const[S,I]=O.useState(l);return b.jsx(d,{...u,items:S,onOrderChange:o=>{e("onOrderChange")(o),I(o)}})},t=g.bind({});t.args={items:c,labels:L,onDragStart:e("onDragStart"),onDragOver:e("onDragOver"),onDragEnd:e("onDragEnd"),onDragCancel:e("onDragCancel")};t.parameters={screenshot:{skip:!0}};const r=g.bind({});r.args={...t.args,labels:void 0};var s,m,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const Z=["Playground","WithoutLabels"];export{t as Playground,r as WithoutLabels,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=SortableList.stories-C_zFAe0T.js.map
