import{j as b}from"./jsx-runtime-Cw0GR0a5.js";import{r as O}from"./index-CTjT7uj6.js";import{a as e}from"./chunk-454WOBUV-DWuJqIWT.js";import{S as d}from"./SortableList-fiyi2166.js";import{z as h}from"./zipObj-Cc13prBD.js";import"./v4-D8aEg3BZ.js";import"./sortable.esm-Bgh6Enlk.js";import"./index-DIVhMF2i.js";import"./modifiers.esm-D9Gd6yO_.js";import"./styled-components.browser.esm-xOyuSOjK.js";import"./index-DR5XHNKF.js";import"./index-DT7C7tog.js";import"./index-BbaO5Nb4.js";import"./Padbox-DcClumXL.js";import"./index-C7IrpltL.js";import"./index-nwGNxYyI.js";import"./prop-BK8rocxd.js";import"./Inline.enums-DB1XHHNB.js";import"./Cluster-C2ONgLd-.js";import"./useLogger-BRbW6gx4.js";import"./DSProvider-OItu1eMI.js";import"./extends-CF3RwP-h.js";import"./theme-D0PvF__4.js";import"./colors-BJBAFLAc.js";import"./index-CECIl5yl.js";import"./index-uyLpYamY.js";import"./isFunction-CoLsl8nV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-BIxA6EUN.js";const X={title:"components/SortableList",component:d},c=["item1","item2","item3","item4","item5","item6"],L=h(c,["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"]),g=({items:l,...u})=>{const[S,I]=O.useState(l);return b.jsx(d,{...u,items:S,onOrderChange:o=>{e("onOrderChange")(o),I(o)}})},t=g.bind({});t.args={items:c,labels:L,onDragStart:e("onDragStart"),onDragOver:e("onDragOver"),onDragEnd:e("onDragEnd"),onDragCancel:e("onDragCancel")};t.parameters={screenshot:{skip:!0}};const r=g.bind({});r.args={...t.args,labels:void 0};var s,m,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const Y=["Playground","WithoutLabels"];export{t as Playground,r as WithoutLabels,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=SortableList.stories-B3G0wt8J.js.map
