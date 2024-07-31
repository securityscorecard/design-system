import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{R as N,r as c}from"./index-BwDkhjyp.js";import{P as n}from"./index-Dk74W0Oi.js";import{s as v,g as h,S as s,h as C,k as S,j as q,i,P as E}from"./space-B9R18Mwn.js";import{c as j}from"./index-CVyJwDg7.js";import{A as L}from"./action.types-BWYzzYyM.js";import{r as _}from"./require-router-link-m162i5rV.js";import{D as K}from"./Dropdown-1JeK-t7e.js";import"./ControlledDropdown-Dz2bix8N.js";import{T as I,a as M}from"./Text-C1sA-5dj.js";import"./Surface-Cs7tekjF.js";import{P as W}from"./Padbox-BrtZqAZY.js";import"./Stack-B_iJg7G-.js";import"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import{n as f}from"./noop-Bk6XfTLC.js";import{i as z}from"./isFunction-Wst0ouRg.js";import{i as F}from"./isNotNull-C0-yEnlk.js";const U=v.ul.withConfig({displayName:"DropdownMenu__List",componentId:"sc-udpw0m-0"})(["list-style:none;margin:0;padding:0;padding-top:",";padding-bottom:",";"],h(s.sm),h(s.sm)),V=["paddingSize","paddingType"],X=v(W).withConfig({shouldForwardProp:d=>!V.includes(String(d))}).withConfig({displayName:"DropdownMenu__DropdownLink",componentId:"sc-udpw0m-1"})(["width:100%;min-width:",";display:block;cursor:pointer;background:transparent;border:0 none;text-align:left;&:hover,&:focus-visible{background:",";}"],C(140),S("primary.50")),B=()=>Array.from(document.querySelectorAll("[data-dropdown-item]")),y=({actions:d,defaultIsOpen:b=!1,paneWidth:O="auto",children:m,className:P,placement:R="bottom"})=>{const[T,w]=c.useState(!1),p=c.useRef({togglePane:f,hidePane:f,showPane:f}),g=c.useRef(null),k=a.jsx("span",{className:j(q,P),children:z(m)?m(T):m}),A=e=>{const o=(l="DOWN")=>{const r=B(),x=r.indexOf(document.activeElement),u=r[x+(l==="DOWN"?1:-1)];u==null||u.focus()},t={ArrowDown:()=>o("DOWN"),ArrowUp:()=>o("UP")}[e.key];t==null||t()},D=()=>{setTimeout(()=>{var o,t;((o=g.current)==null?void 0:o.contains(document.activeElement))||(t=p.current)==null||t.hidePane()})};return a.jsx(K,{ref:p,defaultIsOpen:b,innerPaddingSize:s.none,maxPaneWidth:O,placement:R,trigger:k,onClose:()=>w(!1),onOpen:()=>w(!0),children:a.jsx(U,{ref:g,onBlur:D,onKeyDown:A,children:d.map(e=>{let o=null;i(e.to)&&(o=_());const t=i(e.href)?"a":i(e.to)?o:"button";return F(o)&&i(e.to)?null:a.jsx("li",{"data-interactive":"true",style:{overflow:"hidden"},children:a.jsx(X,{as:t,"data-dropdown-item":"true","data-interactive":"true",href:e.href,name:e.name,paddingSize:s.md,paddingType:E.squish,to:e.to,onClick:l=>{var r;e.onClick(l),(r=p.current)==null||r.hidePane()},children:a.jsx(I,{"data-interactive":"true",size:M.md,children:e.label})})},e.name)})})})};y.propTypes={actions:n.arrayOf(L).isRequired,children:n.oneOfType([n.func,n.node]).isRequired,defaultIsOpen:n.bool,paneWidth:n.oneOfType([n.number,n.oneOf(["auto"])]),className:n.string,placement:n.oneOf(["bottom","bottom-start","bottom-end"])};const le=N.memo(y);y.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{actions:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| (HandlerActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps)
| (AbsoluteLinkActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps)
| (RelativeLinkActionKind<OnClickArgs, OnClickReturnType> & AdditionalProps)`,elements:[{name:"unknown"},{name:"unknown"},{name:"unknown"}]}],raw:"ActionKinds<React.MouseEvent[]>[]"},description:"",type:{name:"arrayOf",value:{name:"custom",raw:"ActionKindsPropType"}}},children:{required:!0,tsType:{name:"union",raw:"React.ReactNode | ((isActive: boolean) => JSX.Element)",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:"",type:{name:"union",value:[{name:"func"},{name:"node"}]}},defaultIsOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},paneWidth:{required:!1,tsType:{name:"union",raw:"'auto' | number",elements:[{name:"literal",value:"'auto'"},{name:"number"}]},description:"",defaultValue:{value:"'auto'",computed:!1},type:{name:"union",value:[{name:"number"},{name:"enum",value:[{value:"'auto'",computed:!1}]}]}},className:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},placement:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof DropdownPlacements)[keyof typeof DropdownPlacements]"},description:"",defaultValue:{value:"'bottom'",computed:!1},type:{name:"enum",value:[{value:"'bottom'",computed:!1},{value:"'bottom-start'",computed:!1},{value:"'bottom-end'",computed:!1}]}}}};export{le as D};
