import{j as b}from"./jsx-runtime-Nms4Y4qS.js";import{r as O}from"./index-BwDkhjyp.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as d}from"./SortableList-CPOfkAHG.js";import{z as h}from"./zipObj-C0uoDeoJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./sortable.esm-CHKde6Px.js";import"./index-DhoXBIRq.js";import"./modifiers.esm-CDknwSvc.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-Dii5kbWS.js";import"./index-DIvwzgjZ.js";import"./constants-C4Oh6sKJ.js";import"./isNotUndefined-BKMziht-.js";import"./_isObject-BZZHHNGj.js";import"./index-8M-BrxK9.js";import"./Padbox-YpISqXAr.js";import"./index-CVyJwDg7.js";import"./index-D5s2qWpv.js";import"./prop-BraK_cHP.js";import"./Inline.enums-Dg90oR_c.js";import"./Cluster-hENBaGjg.js";import"./useLogger-DBrb0845.js";import"./DSProvider-DOa9IzhU.js";import"./extends-CF3RwP-h.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./index-D97QikPo.js";import"./index-CajKmcpa.js";import"./isFunction-DHFK1UxZ.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./index-iel8gM5l.js";const rt={title:"components/SortableList",component:d},c=["item1","item2","item3","item4","item5","item6"],L=h(c,["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"]),g=({items:l,...u})=>{const[S,I]=O.useState(l);return b.jsx(d,{...u,items:S,onOrderChange:o=>{r("onOrderChange")(o),I(o)}})},t=g.bind({});t.args={items:c,labels:L,onDragStart:r("onDragStart"),onDragOver:r("onDragOver"),onDragEnd:r("onDragEnd"),onDragCancel:r("onDragCancel")};t.parameters={screenshot:{skip:!0}};const e=g.bind({});e.args={...t.args,labels:void 0};var s,m,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
//# sourceMappingURL=SortableList.stories-CVD5oijp.js.map
