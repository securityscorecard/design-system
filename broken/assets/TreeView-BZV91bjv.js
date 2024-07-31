import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as j}from"./index-BwDkhjyp.js";import{d as F,u as pe,C as W,e as P,f as fe,g as we,a as ge,b as Z,K as ye,P as Te,M as De,D as Ie,c as be,S as ve,v as he,h as xe,i as ee}from"./sortable.esm-DD_xGjRI.js";import{s as U,h as ne}from"./space-B9R18Mwn.js";import{B as ke}from"./Badge-DyqwJJ00.js";import{S as Re}from"./Surface-Cs7tekjF.js";import{P as G}from"./Padbox-BrtZqAZY.js";import"./Stack-B_iJg7G-.js";import{I as H}from"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import{T as Ce}from"./Text-C1sA-5dj.js";import{B as z,$ as qe,a as Se,b as Ve,M as Ne,c as je,d as Pe}from"./menuElements-HsU9kfTS.js";const O=24,Be=/iPad|iPhone|iPod/.test(navigator.platform);function Ae(e,t){return Math.round(e/t)}function Ee({previousItem:e}){return e?e.depth+1:0}function $e({nextItem:e}){return e?e.depth:0}function Q(e,t,r,s){const n=e.findIndex(({id:b})=>b===r),a=e.findIndex(({id:b})=>b===t),f=e[a],m=F(e,a,n),d=m[n-1],T=m[n+1],y=Ae(s,O),w=f.depth+y,c=Ee({previousItem:d}),u=$e({nextItem:T});let p=w;w>=c?p=c:w<u&&(p=u);function k(){var v;return p===0||!d?null:p===d.depth?d.parentId:p>d.depth?d.id:((v=m.slice(0,n).reverse().find(I=>I.depth===p))==null?void 0:v.parentId)??null}return{depth:p,maxDepth:c,minDepth:u,parentId:k()}}function te(e,t=null,r=0){return e.reduce((s,n,a)=>[...s,{...n,parentId:t,depth:r,index:a},...te(n.subRows||[],n.id,r+1)],[])}function J(e){return te(e)}function Me(e,t){return e.find(({id:r})=>r===t)}function _e(e){const t={id:"root",subRows:[]},r={[t.id]:t},s=e.map(n=>({...n,subRows:[]}));return s.forEach(n=>{const{id:a,subRows:f}=n,m=n.parentId??t.id,d=r[m]??Me(s,m);r[a]={id:a,subRows:f},d.subRows.push(n)}),t.subRows}function re(e,t){for(const r of e){const{id:s,subRows:n}=r;if(s===t)return r;if(n!=null&&n.length){const a=re(n,t);if(a)return a}}}function se(e,t,r,s){var n;for(const a of e)a.id===t&&(a[r]=s(a[r])),(n=a.subRows)!=null&&n.length&&(a.subRows=se(a.subRows,t,r,s));return[...e]}function ae(e,t=0){return e.reduce((r,s)=>{var n;return(n=s.subRows)!=null&&n.length?ae(s.subRows,r+1):r+1},t)}function Oe(e,t){const r=re(e,t);return r?ae(r.subRows??[]):0}function Ue(e,t){const r=[...t];return e.filter(s=>{var n;return s.parentId&&r.includes(s.parentId)?((n=s.subRows)!=null&&n.length&&r.push(s.id),!1):!0})}const Le=U.div.withConfig({displayName:"CollapsibleHandle__IndentationPlaceholder",componentId:"sc-18jydtv-0"})(["width:1.5rem;height:1.5rem;"]);function X({collapsed:e,onCollapse:t}){return typeof t>"u"?o.jsx(Le,{}):o.jsx(z,{"aria-expanded":!e,iconProps:{name:"angle-right",rotation:e?void 0:90},label:`To ${e?"expand":"collapse"} nested rows, press the space bar.`,type:"button",onClick:r=>{r.stopPropagation(),t()}})}X.displayName="CollapsibleHandle";X.__docgenInfo={description:"",methods:[],displayName:"CollapsibleHandle",props:{collapsed:{required:!0,tsType:{name:"boolean"},description:""},onCollapse:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function ie({rowActions:e,row:t}){return e.length<=2?o.jsx(H,{children:e.map(r=>{if(r===null)return null;const{iconName:s,iconType:n,label:a,onClick:f,isDisabled:m,isDestructive:d}=r,T=typeof a=="function"?a({row:t}):a,y=typeof s=="function"?s({row:t}):s,w=typeof n=="function"?n({row:t}):n,c=typeof m=="function"?m({row:t}):m;return o.jsx(z,{iconProps:{name:y,type:w},isDestructive:d,isDisabled:c,onClick:u=>{u.stopPropagation(),f({row:t})(u)},children:T},`row-actions-${T}`)})}):o.jsxs(qe,{children:[o.jsx(Se,{asChild:!0,children:o.jsx(z,{iconProps:{name:"ellipsis-v"},label:"Row Actions"})}),o.jsx(Ve,{children:o.jsx(Ne,{align:"end",collisionPadding:10,sideOffset:5,children:e.map((r,s)=>{if(r===null)return o.jsx(je,{},`row-actions-separator-${s}`);const{iconName:n,iconType:a,label:f,onClick:m,isDisabled:d,isDestructive:T}=r,y=typeof f=="function"?f({row:t}):f,w=typeof n=="function"?n({row:t}):n,c=typeof a=="function"?a({row:t}):a,u=typeof d=="function"?d({row:t}):d;return o.jsx(Pe,{iconName:w,iconType:c,isDestructive:T,isDisabled:u,onClick:m({row:t}),children:y},`row-actions-${y}`)})})})]})}ie.__docgenInfo={description:"",methods:[],displayName:"RowActions",props:{rowActions:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`null | {
  label: RowActionCallbackUnion<D, string>;
  iconName: RowActionCallbackUnion<D, IconNames>;
  iconType?: RowActionCallbackUnion<D, RegularIconTypes>;
  onClick(props: { row: TreeViewRow<D> }): (event: Event) => void;
  isDisabled?: RowActionCallbackUnion<D, boolean>;
  isDestructive?: boolean;
}`,elements:[{name:"null"},{name:"signature",type:"object",raw:`{
  label: RowActionCallbackUnion<D, string>;
  iconName: RowActionCallbackUnion<D, IconNames>;
  iconType?: RowActionCallbackUnion<D, RegularIconTypes>;
  onClick(props: { row: TreeViewRow<D> }): (event: Event) => void;
  isDisabled?: RowActionCallbackUnion<D, boolean>;
  isDestructive?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"union",raw:`| Type
| ((props: { row: TreeViewRow<D> }) => Type)`,elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"iconName",value:{name:"union",raw:`| Type
| ((props: { row: TreeViewRow<D> }) => Type)`,elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"iconType",value:{name:"union",raw:`| Type
| ((props: { row: TreeViewRow<D> }) => Type)`,elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}},required:!0}},{key:"isDisabled",value:{name:"union",raw:`| Type
| ((props: { row: TreeViewRow<D> }) => Type)`,elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"isDestructive",value:{name:"boolean",required:!1}}]}}]}],raw:"RowAction<D>[]"},description:""},row:{required:!0,tsType:{name:"intersection",raw:"BaseTreeItem<D> & D",elements:[{name:"BaseTreeItem",elements:[{name:"D"}],raw:"BaseTreeItem<D>"},{name:"D"}]},description:""}}};const oe=U.li.withConfig({displayName:"TreeItem__TreeItemRoot",componentId:"sc-wfezu2-0"})(["list-style:none;box-sizing:border-box;padding-left:var(--sscds-treeitem-indent);&:first-child{border-radius:var(--sscds-radius) var(--sscds-radius) 0 0;}&:last-child{border-radius:0 0 var(--sscds-radius) var(--sscds-radius);}&:not(:last-child){border-bottom:1px solid var(--sscds-border-color);}&[data-active='true']{background-color:var(--sscds-color-background-surface-dynamic-default);}&[data-clone]{display:inline-block;pointer-events:none;padding:0;padding-left:10px;padding-top:5px;border-bottom:none;}&[data-interaction='false']{pointer-events:none;}&[data-selection='false']{user-select:none;-webkit-user-select:none;}&[tabIndex='0']{cursor:pointer;&[data-active='true']{background-color:var(--sscds-color-background-surface-dynamic-default);}&:hover{background-color:var(--sscds-color-primary-050);}}"]);oe.displayName="TreeItemRoot";const de=U.div.withConfig({displayName:"TreeItem__TreeItemContent",componentId:"sc-wfezu2-1"})(["position:relative;display:flex;align-items:center;box-sizing:border-box;height:var(--sscds-treeitem-height);[data-ghost='true'] &{opacity:0.5;& > *{box-shadow:none;background-color:transparent;}}[data-clone] &{border-radius:var(--sscds-radii-default);box-shadow:var(--sscds-elevation);background:var(--sscds-color-background-surface-default);border:1px solid var(--sscds-border-color);&[data-content]{user-select:none;-webkit-user-select:none;}}"]);de.displayName="TreeItemContent";const le=U.span.withConfig({displayName:"TreeItem__StartContainer",componentId:"sc-wfezu2-2"})(["flex-grow:1;overflow:hidden;[data-ghost='true'] &{user-select:none;-webkit-user-select:none;}"]);le.displayName="StartContainer";const ce=U.span.withConfig({displayName:"TreeItem__CountBox",componentId:"sc-wfezu2-3"})(["position:absolute;top:-0.75rem;right:-0.75rem;"]);ce.displayName="CountBox";function Y({childCount:e,collapsed:t,depth:r,disableInteraction:s,disableSelection:n,handleAttributes:a,handleListeners:f,isClone:m,isGhost:d,isSortable:T,isCollapsible:y,onCollapse:w,renderPrimaryContent:c,renderSecondaryContent:u,row:p,rowHeight:k,rowActions:b=[],style:v,id:I,wrapperRef:B,innerRef:C,activeRowId:A,onActiveRowIdChange:V,onRowClick:R,...E}){return o.jsx(oe,{ref:B,"data-active":A===I,"data-clone":m,"data-ghost":d,"data-interaction":!s,"data-selection":!n,role:typeof R=="function"?"button":"listitem",style:{"--sscds-treeitem-height":ne(k),"--sscds-treeitem-indent":ne(O*r)},tabIndex:typeof R=="function"?0:-1,"data-dnd-item":!0,onClick:()=>{R==null||R(p),V==null||V(I)},onKeyDown:_=>{_.target.dataset["dnd-item"]!==void 0&&(_.key==="Enter"||_.key===" ")&&(R==null||R(p),V==null||V(I))},...E,children:o.jsxs(de,{ref:C,style:v,children:[o.jsxs(H,{align:"center",stretch:2,style:{width:"100%"},children:[o.jsx(G,{paddingSize:"sm",children:o.jsxs(H,{align:"center",children:[T&&o.jsx(z,{...a,...f,iconProps:{name:"grip-dots-vertical"},style:{cursor:"grab"}}),y&&o.jsx(X,{collapsed:t,onCollapse:w})]})}),o.jsx(G,{paddingSize:"sm","data-content":!0,children:o.jsxs(H,{align:"center",gap:"md",children:[o.jsx(le,{children:(c==null?void 0:c(p))??o.jsx(Ce,{isBold:!0,children:I})}),(u==null?void 0:u(p))??null]})}),b.length!==0&&o.jsx(G,{paddingSize:"sm",children:o.jsx(ie,{row:p,rowActions:b})})]}),m&&e&&e>1&&o.jsx(ce,{children:o.jsx(ke,{count:e,variant:"info"})})]})})}Y.displayName="TreeItem";Y.__docgenInfo={description:"",methods:[],displayName:"TreeItem",props:{depth:{required:!0,tsType:{name:"number"},description:""},id:{required:!0,tsType:{name:"string"},description:""},row:{required:!0,tsType:{name:"intersection",raw:"BaseTreeItem<D> & D",elements:[{name:"BaseTreeItem",elements:[{name:"D"}],raw:"BaseTreeItem<D>"},{name:"D"}]},description:""},childCount:{required:!1,tsType:{name:"number"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""},disableInteraction:{required:!1,tsType:{name:"boolean"},description:""},disableSelection:{required:!1,tsType:{name:"boolean"},description:""},handleAttributes:{required:!0,tsType:{name:"DraggableAttributes"},description:""},handleListeners:{required:!0,tsType:{name:"SyntheticListenerMap"},description:""},innerRef:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: HTMLDivElement) => void",signature:{arguments:[{type:{name:"HTMLDivElement"},name:"node"}],return:{name:"void"}}},description:""},isClone:{required:!1,tsType:{name:"boolean"},description:""},isGhost:{required:!1,tsType:{name:"boolean"},description:""},onCollapse:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},wrapperRef:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: HTMLLIElement) => void",signature:{arguments:[{type:{name:"HTMLLIElement"},name:"node"}],return:{name:"void"}}},description:""},activeRowId:{required:!1,tsType:{name:"TreeViewProps['activeRowId']",raw:"TreeViewProps<D>['activeRowId']"},description:""},isCollapsible:{required:!1,tsType:{name:"TreeViewProps['isCollapsible']",raw:"TreeViewProps<D>['isCollapsible']"},description:""},isSortable:{required:!1,tsType:{name:"TreeViewProps['isSortable']",raw:"TreeViewProps<D>['isSortable']"},description:""},onActiveRowIdChange:{required:!1,tsType:{name:"TreeViewProps['onActiveRowIdChange']",raw:"TreeViewProps<D>['onActiveRowIdChange']"},description:""},onRowClick:{required:!1,tsType:{name:"TreeViewProps['onRowClick']",raw:"TreeViewProps<D>['onRowClick']"},description:""},renderPrimaryContent:{required:!1,tsType:{name:"TreeViewProps['renderPrimaryContent']",raw:"TreeViewProps<D>['renderPrimaryContent']"},description:""},renderSecondaryContent:{required:!1,tsType:{name:"TreeViewProps['renderSecondaryContent']",raw:"TreeViewProps<D>['renderSecondaryContent']"},description:""},rowActions:{required:!1,tsType:{name:"TreeViewProps['rowActions']",raw:"TreeViewProps<D>['rowActions']"},description:"",defaultValue:{value:"[]",computed:!1}},rowHeight:{required:!1,tsType:{name:"TreeViewProps['rowHeight']",raw:"TreeViewProps<D>['rowHeight']"},description:""}},composes:["Omit"]};function K({id:e,depth:t,...r}){const{attributes:s,isDragging:n,isSorting:a,listeners:f,transform:m,transition:d,setDraggableNodeRef:T,setDroppableNodeRef:y}=pe({id:e});return o.jsx(Y,{depth:t,disableInteraction:a,disableSelection:Be,handleAttributes:s,handleListeners:f,id:e,innerRef:T,isGhost:n,style:{transform:W.Translate.toString(m),transition:d},wrapperRef:y,...r})}K.displayName="SortableTreeItem";K.__docgenInfo={description:"",methods:[],displayName:"SortableTreeItem"};const He=[P.Down,P.Right,P.Up,P.Left],ze=[P.Left,P.Right],Ke=e=>(t,{currentCoordinates:r,context:{active:s,over:n,collisionRect:a,droppableRects:f,droppableContainers:m}})=>{if(!He.includes(t.code)||!s||!a)return;t.preventDefault();const{current:{items:d,offset:T}}=e;if(ze.includes(t.code)&&(n!=null&&n.id)){const{depth:u,maxDepth:p,minDepth:k}=Q(d,s.id,n.id,T);switch(t.code){case P.Left:if(u>k)return{...r,x:r.x-O};break;case P.Right:if(u<p)return{...r,x:r.x+O};break;default:return}}const y=[];m.forEach(u=>{if(u!=null&&u.disabled||u.id===(n==null?void 0:n.id))return;const p=f.get(u.id);if(p)switch(t.code){case P.Down:a.top<p.top&&y.push(u);break;case P.Up:a.top>p.top&&y.push(u);break}});const w=fe({active:s,collisionRect:a,pointerCoordinates:null,droppableRects:f,droppableContainers:y});let c=we(w,"id");if(c===(n==null?void 0:n.id)&&w.length>1&&(c=w[1].id),c&&(n!=null&&n.id)){const u=f.get(s.id),p=f.get(c),k=m.get(c);if(u&&p&&k){const b=d.findIndex(({id:C})=>C===c),v=d[b],I=d.findIndex(({id:C})=>C===s.id),B=d[I];if(v&&B){const{depth:C}=Q(d,s.id,c,(v.depth-B.depth)*O);return{x:p.left+C*O,y:p.top}}}}},Ge=({items:e,setItems:t,onDragEnd:r})=>{const[s,n]=j.useState(null),[a,f]=j.useState(null),[m,d]=j.useState(0),[T,y]=j.useState(null),w=j.useMemo(()=>{const l=J(e),i=l.reduce((h,{subRows:q,collapsed:g,id:D})=>g&&q.length?[...h,D]:h,[]);return Ue(l,s?[s,...i]:i)},[s,e]),c=s&&a?Q(w,s,a,m):null,u=j.useRef({items:w,offset:m}),[p]=j.useState(()=>Ke(u)),k=ge(Z(Te),Z(ye,{coordinateGetter:p})),b=j.useMemo(()=>w.map(({id:l})=>l),[w]),v=s?w.find(({id:l})=>l===s):null;j.useEffect(()=>{u.current={items:w,offset:m}},[w,m]);const I=()=>{f(null),n(null),d(0),y(null),document.body.style.setProperty("cursor","")},B=l=>{const{active:{id:i}}=l;n(i),f(i);const h=w.find(({id:q})=>q===i);h&&y({parentId:h.parentId,overId:i}),document.body.style.setProperty("cursor","grabbing")},C=l=>{const{delta:i}=l;d(i.x)},A=l=>{const{over:i}=l;f((i==null?void 0:i.id)??null)},V=l=>{const{active:i,over:h}=l;if(I(),c&&h){const{depth:q,parentId:g}=c,D=[...J(e)],x=D.findIndex(({id:S})=>S===h.id),N=D.findIndex(({id:S})=>S===i.id),$=D[N];D[N]={...$,depth:q,parentId:g};const L=F(D,N,x),M=_e(L);t(M),r==null||r($.id,{newItems:M,oldItems:e,flattenedNewItems:L,flattenedOldItems:D})}},R=()=>{I()},E=(l,i,h)=>{if(!h||!c||l!=="onDragEnd"&&T&&c.parentId===T.parentId&&h===T.overId)return;l!=="onDragEnd"&&y({parentId:c.parentId,overId:a});const q=JSON.parse(JSON.stringify(J(e))),g=q.findIndex(({id:S})=>S===h),D=q.findIndex(({id:S})=>S===i),x=F(q,D,g),N=x[g-1],$=l==="onDragEnd"?"dropped":"moved",L=l==="onDragEnd"?"dropped":"nested";if(!N){const S=x[g+1];return`${i} was ${$} before ${S.id}.`}if(c.depth>N.depth)return`${i} was ${L} under ${N.id}.`;let M=N;for(;c.depth<M.depth;){const{parentId:S}=M;M=x.find(({id:me})=>me===S)}return`${i} was ${$} after ${M.id}.`};return{activeId:s,activeItem:v,announcements:{onDragStart({active:l}){return`Picked up ${l.id}.`},onDragMove({active:l,over:i}){return E("onDragMove",l.id,i==null?void 0:i.id)},onDragOver({active:l,over:i}){return E("onDragOver",l.id,i==null?void 0:i.id)},onDragEnd({active:l,over:i}){return E("onDragEnd",l.id,i==null?void 0:i.id)},onDragCancel({active:l}){return`Moving was cancelled. ${l.id} was dropped in its original position.`}},flattenedItems:w,projected:c,sensors:k,sortedIds:b,handleDragCancel:R,handleDragEnd:V,handleDragMove:C,handleDragOver:A,handleDragStart:B}},Je={droppable:{strategy:De.Always}},Fe={keyframes({transform:e}){return[{opacity:1,transform:W.Transform.toString(e.initial)},{opacity:0,transform:W.Transform.toString({...e.final,x:e.final.x+5,y:e.final.y+5})}]},easing:"ease-out",sideEffects({active:e}){e.node.animate([{opacity:0},{opacity:1}],{duration:ee.duration,easing:ee.easing})}};function ue({data:e,rowHeight:t=56,isCollapsible:r=!0,isSortable:s=!0,renderPrimaryContent:n,renderSecondaryContent:a,onDragCancel:f,onDragEnd:m,onDragMove:d,onDragOver:T,onDragStart:y,onRowClick:w,activeRowId:c,onActiveRowIdChange:u,rowActions:p}){const[k,b]=j.useState(()=>e),{activeId:v,activeItem:I,announcements:B,flattenedItems:C,projected:A,sensors:V,sortedIds:R,handleDragCancel:E,handleDragEnd:_,handleDragMove:l,handleDragOver:i,handleDragStart:h}=Ge({items:k,setItems:b,onDragEnd:m}),q=g=>{b(D=>se(D,g,"collapsed",x=>!x))};return o.jsx(Re,{background:"white",elevation:2,radius:"md",hasBorder:!0,children:o.jsx(Ie,{accessibility:{announcements:B},collisionDetection:be,measuring:Je,sensors:V,onDragCancel:g=>{f==null||f(g),E()},onDragEnd:g=>{_(g)},onDragMove:g=>{d==null||d(g),l(g)},onDragOver:g=>{T==null||T(g),i(g)},onDragStart:g=>{y==null||y(g),h(g)},children:o.jsxs(ve,{items:R,strategy:he,children:[o.jsx("ul",{children:C.map(g=>{const{id:D,subRows:x,collapsed:N,depth:$}=g;return o.jsx(K,{activeRowId:c,collapsed:!!(N&&(x!=null&&x.length)),depth:D===v&&A?A.depth:$,id:D,isCollapsible:r,isSortable:s,renderPrimaryContent:n,renderSecondaryContent:a,row:g,rowActions:p,rowHeight:t,onActiveRowIdChange:u,onCollapse:r&&(x!=null&&x.length)?()=>q(D):void 0,onRowClick:w},D)})}),o.jsx(xe,{dropAnimation:Fe,children:v&&I?o.jsx(K,{childCount:Oe(k,v)+1,depth:I.depth,id:v,isSortable:s,renderPrimaryContent:n,row:I,rowHeight:t,value:I.id.toString(),isClone:!0}):null})]})})})}ue.displayName="TreeView";ue.__docgenInfo={description:"",methods:[],displayName:"TreeView",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"BaseTreeItem<D> & D",elements:[{name:"BaseTreeItem",elements:[{name:"D"}],raw:"BaseTreeItem<D>"},{name:"D"}]}],raw:"TreeViewRow<D>[]"},description:""},rowHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"56",computed:!1}},isCollapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isSortable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onDragCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: DragCancelEvent) => void",signature:{arguments:[{type:{name:"DragCancelEvent"},name:"event"}],return:{name:"void"}}},description:""},onDragEnd:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  movedId: string,
  rows: {
    newItems: TreeItems<D>;
    oldItems: TreeItems<D>;
    flattenedNewItems?: TreeItems<D>;
    flattenedOldItems?: TreeItems<D>;
  },
) => void`,signature:{arguments:[{type:{name:"string"},name:"movedId"},{type:{name:"signature",type:"object",raw:`{
  newItems: TreeItems<D>;
  oldItems: TreeItems<D>;
  flattenedNewItems?: TreeItems<D>;
  flattenedOldItems?: TreeItems<D>;
}`,signature:{properties:[{key:"newItems",value:{name:"Array",elements:[{name:"intersection",raw:"BaseTreeItem<D> & D",elements:[{name:"BaseTreeItem",elements:[{name:"D"}],raw:"BaseTreeItem<D>"},{name:"D"}]}],raw:"TreeViewRow<D>[]",required:!1}},{key:"oldItems",value:{name:"Array",elements:[{name:"intersection",raw:"BaseTreeItem<D> & D",elements:[{name:"BaseTreeItem",elements:[{name:"D"}],raw:"BaseTreeItem<D>"},{name:"D"}]}],raw:"TreeViewRow<D>[]",required:!1}},{key:"flattenedNewItems",value:{name:"Array",elements:[{name:"intersection",raw:"BaseTreeItem<D> & D",elements:[{name:"BaseTreeItem",elements:[{name:"D"}],raw:"BaseTreeItem<D>"},{name:"D"}]}],raw:"TreeViewRow<D>[]",required:!1}},{key:"flattenedOldItems",value:{name:"Array",elements:[{name:"intersection",raw:"BaseTreeItem<D> & D",elements:[{name:"BaseTreeItem",elements:[{name:"D"}],raw:"BaseTreeItem<D>"},{name:"D"}]}],raw:"TreeViewRow<D>[]",required:!1}}]}},name:"rows"}],return:{name:"void"}}},description:""},onDragMove:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: DragMoveEvent) => void",signature:{arguments:[{type:{name:"DragMoveEvent"},name:"event"}],return:{name:"void"}}},description:""},onDragOver:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: DragOverEvent) => void",signature:{arguments:[{type:{name:"DragOverEvent"},name:"event"}],return:{name:"void"}}},description:""},onDragStart:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: DragStartEvent) => void",signature:{arguments:[{type:{name:"DragStartEvent"},name:"event"}],return:{name:"void"}}},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TreeViewRow<D>) => void",signature:{arguments:[{type:{name:"intersection",raw:"BaseTreeItem<D> & D",elements:[{name:"BaseTreeItem",elements:[{name:"D"}],raw:"BaseTreeItem<D>"},{name:"D"}]},name:"row"}],return:{name:"void"}}},description:""},renderPrimaryContent:{required:!0,tsType:{name:"signature",type:"function",raw:"(row: TreeViewRow<D>) => ReactNode",signature:{arguments:[{type:{name:"intersection",raw:"BaseTreeItem<D> & D",elements:[{name:"BaseTreeItem",elements:[{name:"D"}],raw:"BaseTreeItem<D>"},{name:"D"}]},name:"row"}],return:{name:"ReactNode"}}},description:""},renderSecondaryContent:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: TreeViewRow<D>) => ReactNode",signature:{arguments:[{type:{name:"intersection",raw:"BaseTreeItem<D> & D",elements:[{name:"BaseTreeItem",elements:[{name:"D"}],raw:"BaseTreeItem<D>"},{name:"D"}]},name:"row"}],return:{name:"ReactNode"}}},description:""},activeRowId:{required:!1,tsType:{name:"string"},description:""},onActiveRowIdChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},rowActions:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`null | {
  label: RowActionCallbackUnion<D, string>;
  iconName: RowActionCallbackUnion<D, IconNames>;
  iconType?: RowActionCallbackUnion<D, RegularIconTypes>;
  onClick(props: { row: TreeViewRow<D> }): (event: Event) => void;
  isDisabled?: RowActionCallbackUnion<D, boolean>;
  isDestructive?: boolean;
}`,elements:[{name:"null"},{name:"signature",type:"object",raw:`{
  label: RowActionCallbackUnion<D, string>;
  iconName: RowActionCallbackUnion<D, IconNames>;
  iconType?: RowActionCallbackUnion<D, RegularIconTypes>;
  onClick(props: { row: TreeViewRow<D> }): (event: Event) => void;
  isDisabled?: RowActionCallbackUnion<D, boolean>;
  isDestructive?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"union",raw:`| Type
| ((props: { row: TreeViewRow<D> }) => Type)`,elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"iconName",value:{name:"union",raw:`| Type
| ((props: { row: TreeViewRow<D> }) => Type)`,elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"iconType",value:{name:"union",raw:`| Type
| ((props: { row: TreeViewRow<D> }) => Type)`,elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}},required:!0}},{key:"isDisabled",value:{name:"union",raw:`| Type
| ((props: { row: TreeViewRow<D> }) => Type)`,elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"isDestructive",value:{name:"boolean",required:!1}}]}}]}],raw:"RowAction<D>[]"},description:""}}};export{ue as T};
