import{j as r}from"./jsx-runtime-CfatFE5O.js";import{a as E}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as u}from"./columns-D-uvBgzk.js";import{C as s,a as or,S as lr,b as V}from"./BaseTable.styles-nOE83pnJ.js";import{n as y}from"./index-CUb24YOv.js";import{M as tr}from"./react-router-dom-Cqtu-Xon.js";import{F as ir}from"./F-CZa6y4u_.js";import{e as cr}from"./space.enums-FzolKu9U.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-DE2R3_3L.js";import"./index-CpAvg4Hc.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-DxcpycWO.js";import"./constants-C4Oh6sKJ.js";import"./index-D2rWxbnI.js";import"./Tooltip-DUvzNTog.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./_isObject-BZZHHNGj.js";import"./index-C0tcqiOb.js";import"./index-BaexK_kB.js";import"./Padbox-DmYWNoOJ.js";import"./index-DocoHESx.js";import"./prop-C6y-wj7q.js";import"./Inline.enums-CFrWSfFs.js";import"./Cluster-BKESMogL.js";import"./useLogger-CGEbE2mZ.js";import"./FloatingContext-f-xOTKfR.js";import"./toPairs-3reRMBbj.js";import"./noop-BL97hhQA.js";import"./index-DFFyPjew.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";const Qr={title:"tests/Datatable/Table/renderers",component:s,decorators:[e=>r.jsx(tr,{children:r.jsx("div",{style:{width:"400px",margin:"0 auto"},children:r.jsx(or,{tabIndex:0,children:r.jsx(lr,{children:r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx("td",{className:"ds-table-cell",children:e()})})})})})})})],parameters:{viewMode:"story",docs:{disable:!0},previewTabs:{"storybook/docs/panel":{hidden:!0}}}},N=({to:e,children:a,className:ar})=>r.jsx("a",{className:ar,href:e,children:a}),o=e=>r.jsx(s,{...e});o.args={value:"value",column:{cellType:V.text,nullCondition:ir},row:{original:{column1:"value",column2:["value1","value2"]}}};const c=e=>r.jsx(s,{...e});c.args={...o.args,value:"unknown",column:{...o.args.column,nullCondition:cr("unknown")}};const n=e=>r.jsx(s,{...e});n.args={...c.args,column:{...c.args.column,nullConditionValue:"NaN"}};const p=e=>r.jsx(s,{...e});p.args={...n.args,column:{...n.args.column,cellTooltipPopupComposer:(e,a)=>r.jsxs("div",{children:["Value: ",e,r.jsx("br",{}),"Row data: ",r.jsx("br",{}),r.jsx("pre",{children:JSON.stringify(a,null,2)})]})}};const m=e=>r.jsx(s,{...e});m.args={...o.args,column:{...o.args.column,cellTooltipPopupComposer:(e,a)=>r.jsxs("div",{children:["Value: ",e,r.jsx("br",{}),"Row data: ",r.jsx("br",{}),r.jsx("pre",{children:JSON.stringify(a,null,2)})]})}};const d=e=>r.jsx(s,{...e});d.args={...o.args,value:123456789,column:{...o.args.column,cellFormatter:e=>y(e)}};const l=e=>r.jsx(s,{...e});l.args={...o.args,value:["value1","value2","value3","value4","value5"],column:{...o.args.column,cellType:V.multiValue}};const g=e=>r.jsx(s,{...e});g.args={...l.args,column:{...l.args.column,cellOnClick:E("onCellValueClick")}};const C=e=>r.jsx(s,{...e});C.args={...l.args,column:{...l.args.column,cellHrefComposer:(e,a)=>`?value=${e}&${u(a)}`}};const R=e=>r.jsx(s,{...e});R.args={...l.args,column:{...l.args.column,cellToComposer:(e,a)=>`?value=${e}&${u(a)}`,cellLinkComponent:N}};const h=e=>r.jsx(s,{...e});h.args={...l.args,column:{...l.args.column,cellTooltipPopupComposer:(e,a)=>r.jsxs("div",{children:["Pill value: ",e,r.jsx("br",{}),"Row data: ",r.jsx("br",{}),r.jsx("pre",{children:JSON.stringify(a,null,2)})]})}};const x=e=>r.jsx(s,{...e});x.args={...l.args,column:{...l.args.column,multiValueDisplayLimit:0}};const j=e=>r.jsx(s,{...e});j.args={...l.args,value:[1235678,987654,654213],column:{...l.args.column,cellFormatter:e=>y(e)}};const t=e=>r.jsx(s,{...e});t.args={...o.args,column:{...o.args.column,cellType:V.link,cellOnClick:E("onCellValueClick")}};const k=e=>r.jsx(s,{...e});k.args={...t.args,column:{...t.args.column,cellHrefComposer:(e,a)=>`?value=${e}&${u(a)}`}};const D=e=>r.jsx(s,{...e});D.args={...t.args,column:{...t.args.column,cellToComposer:(e,a)=>`?value=${e}&${u(a)}`,cellLinkComponent:N}};const L=e=>r.jsx(s,{...e});L.args={...t.args,column:{...t.args.column,cellTooltipPopupComposer:(e,a)=>r.jsxs("div",{children:["Value: ",e,r.jsx("br",{}),"Row data: ",r.jsx("br",{}),r.jsx("pre",{children:JSON.stringify(a,null,2)})]})}};const W=e=>r.jsx(s,{...e});W.args={...t.args,value:123456789,column:{...t.args.column,cellFormatter:e=>y(e)}};const i=e=>r.jsx(s,{...e});i.args={...o.args,column:{...o.args.column,cellType:V.discreteLink,cellOnClick:E("onCellValueClick")}};const v=e=>r.jsx(s,{...e});v.args={...i.args,column:{...i.args.column,cellHrefComposer:(e,a)=>`?value=${e}&${u(a)}`}};const T=e=>r.jsx(s,{...e});T.args={...i.args,column:{...i.args.column,cellToComposer:(e,a)=>`?value=${e}&${u(a)}`,cellLinkComponent:N}};const b=e=>r.jsx(s,{...e});b.args={...i.args,column:{...i.args.column,cellTooltipPopupComposer:(e,a)=>r.jsxs("div",{children:["Value: ",e,r.jsx("br",{}),"Row data: ",r.jsx("br",{}),r.jsx("pre",{children:JSON.stringify(a,null,2)})]})}};const S=e=>r.jsx(s,{...e});S.args={...i.args,value:123456789,column:{...i.args.column,cellFormatter:e=>y(e)}};var f,M,O,F,$;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(O=(M=o.parameters)==null?void 0:M.docs)==null?void 0:O.source},description:{story:"DEFAULT RENDERER",...($=(F=o.parameters)==null?void 0:F.docs)==null?void 0:$.description}}};var w,A,P;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(P=(A=c.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var I,J,H;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(H=(J=n.parameters)==null?void 0:J.docs)==null?void 0:H.source}}};var U,_,B;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(B=(_=p.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var K,q,Q,X,z;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(Q=(q=m.parameters)==null?void 0:q.docs)==null?void 0:Q.source},description:{story:"TEXT RENDERER",...(z=(X=m.parameters)==null?void 0:X.docs)==null?void 0:z.description}}};var G,Y,Z;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,se,ae,oe;l.parameters={...l.parameters,docs:{...(ee=l.parameters)==null?void 0:ee.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(se=(re=l.parameters)==null?void 0:re.docs)==null?void 0:se.source},description:{story:"MULTIVALUE RENDERER",...(oe=(ae=l.parameters)==null?void 0:ae.docs)==null?void 0:oe.description}}};var le,te,ie;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(ie=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ce,ne,me;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(me=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:me.source}}};var ue,pe,de;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(de=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ge,Ce,Re;h.parameters={...h.parameters,docs:{...(ge=h.parameters)==null?void 0:ge.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(Re=(Ce=h.parameters)==null?void 0:Ce.docs)==null?void 0:Re.source}}};var he,xe,je;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(je=(xe=x.parameters)==null?void 0:xe.docs)==null?void 0:je.source}}};var ke,De,Le;j.parameters={...j.parameters,docs:{...(ke=j.parameters)==null?void 0:ke.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(Le=(De=j.parameters)==null?void 0:De.docs)==null?void 0:Le.source}}};var We,ve,Te,be,Se;t.parameters={...t.parameters,docs:{...(We=t.parameters)==null?void 0:We.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(Te=(ve=t.parameters)==null?void 0:ve.docs)==null?void 0:Te.source},description:{story:"LINK RENDERER",...(Se=(be=t.parameters)==null?void 0:be.docs)==null?void 0:Se.description}}};var Ve,ye,Ee;k.parameters={...k.parameters,docs:{...(Ve=k.parameters)==null?void 0:Ve.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(Ee=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:Ee.source}}};var Ne,fe,Me;D.parameters={...D.parameters,docs:{...(Ne=D.parameters)==null?void 0:Ne.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(Me=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:Me.source}}};var Oe,Fe,$e;L.parameters={...L.parameters,docs:{...(Oe=L.parameters)==null?void 0:Oe.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...($e=(Fe=L.parameters)==null?void 0:Fe.docs)==null?void 0:$e.source}}};var we,Ae,Pe;W.parameters={...W.parameters,docs:{...(we=W.parameters)==null?void 0:we.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(Pe=(Ae=W.parameters)==null?void 0:Ae.docs)==null?void 0:Pe.source}}};var Ie,Je,He,Ue,_e;i.parameters={...i.parameters,docs:{...(Ie=i.parameters)==null?void 0:Ie.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(He=(Je=i.parameters)==null?void 0:Je.docs)==null?void 0:He.source},description:{story:"DISCRETE LINK RENDERER",...(_e=(Ue=i.parameters)==null?void 0:Ue.docs)==null?void 0:_e.description}}};var Be,Ke,qe;v.parameters={...v.parameters,docs:{...(Be=v.parameters)==null?void 0:Be.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(qe=(Ke=v.parameters)==null?void 0:Ke.docs)==null?void 0:qe.source}}};var Qe,Xe,ze;T.parameters={...T.parameters,docs:{...(Qe=T.parameters)==null?void 0:Qe.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(ze=(Xe=T.parameters)==null?void 0:Xe.docs)==null?void 0:ze.source}}};var Ge,Ye,Ze;b.parameters={...b.parameters,docs:{...(Ge=b.parameters)==null?void 0:Ge.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(Ze=(Ye=b.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var er,rr,sr;S.parameters={...S.parameters,docs:{...(er=S.parameters)==null?void 0:er.docs,source:{originalSource:"args => <CellRenderer<CellRendererData> {...args} />",...(sr=(rr=S.parameters)==null?void 0:rr.docs)==null?void 0:sr.source}}};const Xr=["Default","WithNullValue","WithCustomNullValue","NullValueWithTooltip","TextWithTooltip","TextWithCustomFormatter","MultiValue","MultiValueWithOnClick","MultiValueWithAbsoluteLink","MultiValueWithRelativeLink","MultiValueWithTooltip","MultiValueWithDisabledDisplayLimit","MultiValueWithCustomFormatter","LinkWithOnClick","LinkWithAbsoluteLink","LinkWithRelativeLink","LinkWithTooltip","LinkWithCustomFormatter","DiscreteLinkWithOnClick","DiscreteLinkWithAbsoluteLink","DiscreteLinkWithRelativeLink","DiscreteLinkWithTooltip","DiscreteLinkWithCustomFormatter"];export{o as Default,v as DiscreteLinkWithAbsoluteLink,S as DiscreteLinkWithCustomFormatter,i as DiscreteLinkWithOnClick,T as DiscreteLinkWithRelativeLink,b as DiscreteLinkWithTooltip,k as LinkWithAbsoluteLink,W as LinkWithCustomFormatter,t as LinkWithOnClick,D as LinkWithRelativeLink,L as LinkWithTooltip,l as MultiValue,C as MultiValueWithAbsoluteLink,j as MultiValueWithCustomFormatter,x as MultiValueWithDisabledDisplayLimit,g as MultiValueWithOnClick,R as MultiValueWithRelativeLink,h as MultiValueWithTooltip,p as NullValueWithTooltip,d as TextWithCustomFormatter,m as TextWithTooltip,n as WithCustomNullValue,c as WithNullValue,Xr as __namedExportsOrder,Qr as default};
//# sourceMappingURL=renderers.stories-BjitvPAD.js.map
