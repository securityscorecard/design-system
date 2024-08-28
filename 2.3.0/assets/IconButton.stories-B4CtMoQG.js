import{a as Q}from"./chunk-454WOBUV-DWuJqIWT.js";import{I as W}from"./IconButton-C1FilO1y.js";import{S as X}from"./index-uyLpYamY.js";import{g as Y}from"./storybook-ka4L4-cf.js";import"./v4-D8aEg3BZ.js";import"./jsx-runtime-Cw0GR0a5.js";import"./index-CTjT7uj6.js";import"./components-Tmbw27rw.js";import"./index-C1FT5pTy.js";import"./index-Cvv1KPJl.js";import"./Icon-Ctrq9sYp.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./useLogger-_RKsn3HX.js";import"./DSProvider-O0hTpwSp.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-BL8xHceO.js";import"./colors-BJBAFLAc.js";import"./index-C95nPCzM.js";import"./Spinner-BvaTOgAJ.js";import"./prop-B-t2KTqT.js";import"./zipObj-BQKsoZL3.js";const va={component:W,argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"],name:"size",description:"Sizing variant",table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"'md'"}}},variant:{control:{type:"select"},options:["base","highlight","danger","subtle","ghost","highlight-ghost","danger-ghost"],name:"variant",description:"Visual variant of the button",table:{type:{summary:"'base' | 'highlight' | 'danger' | 'subtle' | 'ghost' | 'highlight-ghost' | 'danger-ghost'"},defaultValue:{summary:"'base'"}}},iconName:{name:"iconName",type:{required:!0},description:"Name of the used icon",table:{type:{summary:"SSCIcons | (string & {})"}},...Y("select",X)},label:{control:{type:"text"},name:"label",type:{name:"string",required:!0},description:"Human-readable label used for accessibility",table:{type:{summary:"string"}}},iconType:{control:{type:"object"},name:"iconType",description:"Icon family from where the icon is used",table:{type:{summary:"'ssc' | 'far'"},defaultValue:{summary:"'ssc'"}}},iconRotation:{control:{type:"radio"},options:[90,180,270],name:"iconRotation",description:"Icon rotation property",table:{type:{summary:"90 | 180 | 270"}}},isDisabled:{control:{type:"boolean"},name:"isDisabled",description:"Disable the button to prevent clicking",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},name:"isLoading",description:"Display loading spinner and disable button to prevent clicking",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},as:{control:{type:"object"},name:"as",description:"Used to type-safe property inference. By default `button` element is used, other common options will be `a` or `Link` from react-router",table:{type:{summary:"Element"}}}},args:{onClick:Q("button click")},parameters:{docs:{description:{component:`A Button is a fundamental interactive element in user interfaces,
allowing users to trigger actions or navigate through an application. It serves
as a clear call-to-action, prompting user engagement and facilitating task
completion.

\`\`\`js
import { IconButton } from '@securityscorecard/design-system';
\`\`\`
See [Migration Guide](?path=/docs/guides-buttonv2-migration-guide--documentation)`}}}},r={args:{size:"md",variant:"base",iconName:"cog",label:"Button"},parameters:{screenshot:{skip:!0}}},a={args:{size:"md",variant:"base",iconName:"cog",label:"Button"}},e={args:{...a.args,variant:"subtle"}},s={args:{...a.args,variant:"ghost"}},t={args:{...a.args,variant:"highlight"}},n={args:{...a.args,variant:"danger"}},o={args:{...a.args,variant:"danger-ghost"}},i={args:{...a.args,size:"sm"}},c={args:{...a.args,size:"md"}},m={args:{...a.args,size:"lg"}},g={args:{...a.args,isDisabled:!0}},p={args:{...a.args,isLoading:!0}};var l,u,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'base',
    iconName: 'cog',
    label: 'Button'
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var b,h,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'base',
    iconName: 'cog',
    label: 'Button'
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,V,f;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...VariantMain.args,
    variant: 'subtle'
  }
}`,...(f=(V=e.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};var v,z,M;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...VariantMain.args,
    variant: 'ghost'
  }
}`,...(M=(z=s.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var D,I,L;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...VariantMain.args,
    variant: 'highlight'
  }
}`,...(L=(I=t.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var k,B,N;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...VariantMain.args,
    variant: 'danger'
  }
}`,...(N=(B=n.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var G,C,j;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...VariantMain.args,
    variant: 'danger-ghost'
  }
}`,...(j=(C=o.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var w,x,H;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...VariantMain.args,
    size: 'sm'
  }
}`,...(H=(x=i.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var T,q,E;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...VariantMain.args,
    size: 'md'
  }
}`,...(E=(q=c.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var P,R,_;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...VariantMain.args,
    size: 'lg'
  }
}`,...(_=(R=m.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var A,O,U;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...VariantMain.args,
    isDisabled: true
  }
}`,...(U=(O=g.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var F,J,K;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...VariantMain.args,
    isLoading: true
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const za=["Playground","VariantMain","VariantSubtle","VariantGhost","VariantHighlight","VariantDanger","VariantDangerGhost","SizeSmall","SizeMedium","SizeLarge","IsDisabled","IsLoading"];export{g as IsDisabled,p as IsLoading,r as Playground,m as SizeLarge,c as SizeMedium,i as SizeSmall,n as VariantDanger,o as VariantDangerGhost,s as VariantGhost,t as VariantHighlight,a as VariantMain,e as VariantSubtle,za as __namedExportsOrder,va as default};
//# sourceMappingURL=IconButton.stories-B4CtMoQG.js.map
