import{j as r}from"./jsx-runtime-CfatFE5O.js";import{a as V}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as T}from"./columns-CH7fk_T3.js";import{C as s,a as or,S as tr,b as f}from"./BaseTable.styles-DG2hueJk.js";import{r as E}from"./index-C2fNon3Z.js";import{M as lr}from"./react-router-dom-CPhVUpqL.js";import{F as ir}from"./F-CZa6y4u_.js";import{e as nr}from"./space.enums-BIVz6JhH.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-DE2R3_3L.js";import"./index-fVh6sz_B.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./constants-CHqWh-7J.js";import"./index-BlmJOztB.js";import"./Tooltip-CNTka1Rj.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./_isObject-BZZHHNGj.js";import"./index-D-VPAycD.js";import"./index-D4bv78R3.js";import"./Padbox-QeDNAg-Y.js";import"./index-CJqnHCRB.js";import"./prop-DxwKVRPv.js";import"./Inline-CJoeeTWo.js";import"./Inline.enums-L64S19IZ.js";import"./Cluster-EcHytK4z.js";import"./useLogger-BIFF4Ira.js";import"./FloatingContext-Iczo9egI.js";import"./toPairs-3reRMBbj.js";import"./noop-CdhuOQYG.js";import"./slice-a4xO8Rfj.js";import"./index-DIJ1KhzU.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";const zr={title:"tests/Datatable/Table/renderers",component:s,decorators:[e=>r.jsx(lr,{children:r.jsx("div",{style:{width:"400px",margin:"0 auto"},children:r.jsx(or,{tabIndex:0,children:r.jsx(tr,{children:r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx("td",{className:"ds-table-cell",children:e()})})})})})})})],parameters:{viewMode:"story",docs:{disable:!0},previewTabs:{"storybook/docs/panel":{hidden:!0}}}},v=({to:e,children:a,className:ar})=>r.jsx("a",{className:ar,href:e,children:a}),o=e=>r.jsx(s,{...e});o.args={value:"value",column:{cellType:f.text,nullCondition:ir},row:{original:{column1:"value",column2:["value1","value2"]}}};const n=e=>r.jsx(s,{...e});n.args={...o.args,value:"unknown",column:{...o.args.column,nullCondition:nr("unknown")}};const c=e=>r.jsx(s,{...e});c.args={...n.args,column:{...n.args.column,nullConditionValue:"NaN"}};const d=e=>r.jsx(s,{...e});d.args={...c.args,column:{...c.args.column,cellTooltipPopupComposer:(e,a)=>r.jsxs("div",{children:["Value: ",e,r.jsx("br",{}),"Row data: ",r.jsx("br",{}),r.jsx("pre",{children:JSON.stringify(a,null,2)})]})}};const m=e=>r.jsx(s,{...e});m.args={...o.args,column:{...o.args.column,cellTooltipPopupComposer:(e,a)=>r.jsxs("div",{children:["Value: ",e,r.jsx("br",{}),"Row data: ",r.jsx("br",{}),r.jsx("pre",{children:JSON.stringify(a,null,2)})]})}};const p=e=>r.jsx(s,{...e});p.args={...o.args,value:123456789,column:{...o.args.column,cellFormatter:e=>E(e)}};const t=e=>r.jsx(s,{...e});t.args={...o.args,value:["value1","value2","value3","value4","value5"],column:{...o.args.column,cellType:f.multiValue}};const u=e=>r.jsx(s,{...e});u.args={...t.args,column:{...t.args.column,cellOnClick:V("onCellValueClick")}};const g=e=>r.jsx(s,{...e});g.args={...t.args,column:{...t.args.column,cellHrefComposer:(e,a)=>`?value=${e}&${T(a)}`}};const h=e=>r.jsx(s,{...e});h.args={...t.args,column:{...t.args.column,cellToComposer:(e,a)=>`?value=${e}&${T(a)}`,cellLinkComponent:v}};const C=e=>r.jsx(s,{...e});C.args={...t.args,column:{...t.args.column,cellTooltipPopupComposer:(e,a)=>r.jsxs("div",{children:["Pill value: ",e,r.jsx("br",{}),"Row data: ",r.jsx("br",{}),r.jsx("pre",{children:JSON.stringify(a,null,2)})]})}};const R=e=>r.jsx(s,{...e});R.args={...t.args,column:{...t.args.column,multiValueDisplayLimit:0}};const k=e=>r.jsx(s,{...e});k.args={...t.args,value:[1235678,987654,654213],column:{...t.args.column,cellFormatter:e=>E(e)}};const l=e=>r.jsx(s,{...e});l.args={...o.args,column:{...o.args.column,cellType:f.link,cellOnClick:V("onCellValueClick")}};const L=e=>r.jsx(s,{...e});L.args={...l.args,column:{...l.args.column,cellHrefComposer:(e,a)=>`?value=${e}&${T(a)}`}};const x=e=>r.jsx(s,{...e});x.args={...l.args,column:{...l.args.column,cellToComposer:(e,a)=>`?value=${e}&${T(a)}`,cellLinkComponent:v}};const D=e=>r.jsx(s,{...e});D.args={...l.args,column:{...l.args.column,cellTooltipPopupComposer:(e,a)=>r.jsxs("div",{children:["Value: ",e,r.jsx("br",{}),"Row data: ",r.jsx("br",{}),r.jsx("pre",{children:JSON.stringify(a,null,2)})]})}};const W=e=>r.jsx(s,{...e});W.args={...l.args,value:123456789,column:{...l.args.column,cellFormatter:e=>E(e)}};const i=e=>r.jsx(s,{...e});i.args={...o.args,column:{...o.args.column,cellType:f.discreteLink,cellOnClick:V("onCellValueClick")}};const N=e=>r.jsx(s,{...e});N.args={...i.args,column:{...i.args.column,cellHrefComposer:(e,a)=>`?value=${e}&${T(a)}`}};const j=e=>r.jsx(s,{...e});j.args={...i.args,column:{...i.args.column,cellToComposer:(e,a)=>`?value=${e}&${T(a)}`,cellLinkComponent:v}};const y=e=>r.jsx(s,{...e});y.args={...i.args,column:{...i.args.column,cellTooltipPopupComposer:(e,a)=>r.jsxs("div",{children:["Value: ",e,r.jsx("br",{}),"Row data: ",r.jsx("br",{}),r.jsx("pre",{children:JSON.stringify(a,null,2)})]})}};const _=e=>r.jsx(s,{...e});_.args={...i.args,value:123456789,column:{...i.args.column,cellFormatter:e=>E(e)}};o.__docgenInfo={description:"DEFAULT RENDERER",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"WithNullValue"};c.__docgenInfo={description:"",methods:[],displayName:"WithCustomNullValue"};d.__docgenInfo={description:"",methods:[],displayName:"NullValueWithTooltip"};m.__docgenInfo={description:"TEXT RENDERER",methods:[],displayName:"TextWithTooltip"};p.__docgenInfo={description:"",methods:[],displayName:"TextWithCustomFormatter"};t.__docgenInfo={description:"MULTIVALUE RENDERER",methods:[],displayName:"MultiValue"};u.__docgenInfo={description:"",methods:[],displayName:"MultiValueWithOnClick"};g.__docgenInfo={description:"",methods:[],displayName:"MultiValueWithAbsoluteLink"};h.__docgenInfo={description:"",methods:[],displayName:"MultiValueWithRelativeLink"};C.__docgenInfo={description:"",methods:[],displayName:"MultiValueWithTooltip"};R.__docgenInfo={description:"",methods:[],displayName:"MultiValueWithDisabledDisplayLimit"};k.__docgenInfo={description:"",methods:[],displayName:"MultiValueWithCustomFormatter"};l.__docgenInfo={description:"LINK RENDERER",methods:[],displayName:"LinkWithOnClick"};L.__docgenInfo={description:"",methods:[],displayName:"LinkWithAbsoluteLink"};x.__docgenInfo={description:"",methods:[],displayName:"LinkWithRelativeLink"};D.__docgenInfo={description:"",methods:[],displayName:"LinkWithTooltip"};W.__docgenInfo={description:"",methods:[],displayName:"LinkWithCustomFormatter"};i.__docgenInfo={description:"DISCRETE LINK RENDERER",methods:[],displayName:"DiscreteLinkWithOnClick"};N.__docgenInfo={description:"",methods:[],displayName:"DiscreteLinkWithAbsoluteLink"};j.__docgenInfo={description:"",methods:[],displayName:"DiscreteLinkWithRelativeLink"};y.__docgenInfo={description:"",methods:[],displayName:"DiscreteLinkWithTooltip"};_.__docgenInfo={description:"",methods:[],displayName:"DiscreteLinkWithCustomFormatter"};var b,I,S,M,F;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(S=(I=o.parameters)==null?void 0:I.docs)==null?void 0:S.source},description:{story:"DEFAULT RENDERER",...(F=(M=o.parameters)==null?void 0:M.docs)==null?void 0:F.description}}};var O,A,$;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...($=(A=n.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var w,P,U;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(U=(P=c.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var J,K,H;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(H=(K=d.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var B,X,q,Q,z;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(q=(X=m.parameters)==null?void 0:X.docs)==null?void 0:q.source},description:{story:"TEXT RENDERER",...(z=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:z.description}}};var G,Y,Z;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,se,ae,oe;t.parameters={...t.parameters,docs:{...(ee=t.parameters)==null?void 0:ee.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(se=(re=t.parameters)==null?void 0:re.docs)==null?void 0:se.source},description:{story:"MULTIVALUE RENDERER",...(oe=(ae=t.parameters)==null?void 0:ae.docs)==null?void 0:oe.description}}};var te,le,ie;u.parameters={...u.parameters,docs:{...(te=u.parameters)==null?void 0:te.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(ie=(le=u.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ne,ce,me;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(me=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var de,pe,ue;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(ue=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ge,he,Ce;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(Ce=(he=C.parameters)==null?void 0:he.docs)==null?void 0:Ce.source}}};var Re,ke,Le;R.parameters={...R.parameters,docs:{...(Re=R.parameters)==null?void 0:Re.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(Le=(ke=R.parameters)==null?void 0:ke.docs)==null?void 0:Le.source}}};var xe,De,We;k.parameters={...k.parameters,docs:{...(xe=k.parameters)==null?void 0:xe.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(We=(De=k.parameters)==null?void 0:De.docs)==null?void 0:We.source}}};var Ne,je,ye,_e,Te;l.parameters={...l.parameters,docs:{...(Ne=l.parameters)==null?void 0:Ne.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(ye=(je=l.parameters)==null?void 0:je.docs)==null?void 0:ye.source},description:{story:"LINK RENDERER",...(Te=(_e=l.parameters)==null?void 0:_e.docs)==null?void 0:Te.description}}};var fe,Ee,Ve;L.parameters={...L.parameters,docs:{...(fe=L.parameters)==null?void 0:fe.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(Ve=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:Ve.source}}};var ve,be,Ie;x.parameters={...x.parameters,docs:{...(ve=x.parameters)==null?void 0:ve.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(Ie=(be=x.parameters)==null?void 0:be.docs)==null?void 0:Ie.source}}};var Se,Me,Fe;D.parameters={...D.parameters,docs:{...(Se=D.parameters)==null?void 0:Se.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(Fe=(Me=D.parameters)==null?void 0:Me.docs)==null?void 0:Fe.source}}};var Oe,Ae,$e;W.parameters={...W.parameters,docs:{...(Oe=W.parameters)==null?void 0:Oe.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...($e=(Ae=W.parameters)==null?void 0:Ae.docs)==null?void 0:$e.source}}};var we,Pe,Ue,Je,Ke;i.parameters={...i.parameters,docs:{...(we=i.parameters)==null?void 0:we.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(Ue=(Pe=i.parameters)==null?void 0:Pe.docs)==null?void 0:Ue.source},description:{story:"DISCRETE LINK RENDERER",...(Ke=(Je=i.parameters)==null?void 0:Je.docs)==null?void 0:Ke.description}}};var He,Be,Xe;N.parameters={...N.parameters,docs:{...(He=N.parameters)==null?void 0:He.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(Xe=(Be=N.parameters)==null?void 0:Be.docs)==null?void 0:Xe.source}}};var qe,Qe,ze;j.parameters={...j.parameters,docs:{...(qe=j.parameters)==null?void 0:qe.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(ze=(Qe=j.parameters)==null?void 0:Qe.docs)==null?void 0:ze.source}}};var Ge,Ye,Ze;y.parameters={...y.parameters,docs:{...(Ge=y.parameters)==null?void 0:Ge.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(Ze=(Ye=y.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var er,rr,sr;_.parameters={..._.parameters,docs:{...(er=_.parameters)==null?void 0:er.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(sr=(rr=_.parameters)==null?void 0:rr.docs)==null?void 0:sr.source}}};const Gr=["Default","WithNullValue","WithCustomNullValue","NullValueWithTooltip","TextWithTooltip","TextWithCustomFormatter","MultiValue","MultiValueWithOnClick","MultiValueWithAbsoluteLink","MultiValueWithRelativeLink","MultiValueWithTooltip","MultiValueWithDisabledDisplayLimit","MultiValueWithCustomFormatter","LinkWithOnClick","LinkWithAbsoluteLink","LinkWithRelativeLink","LinkWithTooltip","LinkWithCustomFormatter","DiscreteLinkWithOnClick","DiscreteLinkWithAbsoluteLink","DiscreteLinkWithRelativeLink","DiscreteLinkWithTooltip","DiscreteLinkWithCustomFormatter"];export{o as Default,N as DiscreteLinkWithAbsoluteLink,_ as DiscreteLinkWithCustomFormatter,i as DiscreteLinkWithOnClick,j as DiscreteLinkWithRelativeLink,y as DiscreteLinkWithTooltip,L as LinkWithAbsoluteLink,W as LinkWithCustomFormatter,l as LinkWithOnClick,x as LinkWithRelativeLink,D as LinkWithTooltip,t as MultiValue,g as MultiValueWithAbsoluteLink,k as MultiValueWithCustomFormatter,R as MultiValueWithDisabledDisplayLimit,u as MultiValueWithOnClick,h as MultiValueWithRelativeLink,C as MultiValueWithTooltip,d as NullValueWithTooltip,p as TextWithCustomFormatter,m as TextWithTooltip,c as WithCustomNullValue,n as WithNullValue,Gr as __namedExportsOrder,zr as default};
//# sourceMappingURL=renderers.stories-DwX55sNV.js.map
