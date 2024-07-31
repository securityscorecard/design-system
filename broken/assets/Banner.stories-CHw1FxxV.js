import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{a as n}from"./chunk-454WOBUV-DWuJqIWT.js";import{B as o,a as e}from"./Banner-B5RSLB-5.js";import{g as z}from"./storybook-DyKsesZd.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-D8aEg3BZ.js";import"./index-Dk74W0Oi.js";import"./space-B9R18Mwn.js";import"./index-CVyJwDg7.js";import"./action.types-BWYzzYyM.js";import"./customPropTypes-D6zHlrRo.js";import"./isArray-C7-fa-V4.js";import"./isFunction-Wst0ouRg.js";import"./pluck-CCxX0LJC.js";import"./prop-3Huj0iT1.js";import"./isEmptyArray-B-_3gajU.js";import"./both-CuwR4I11.js";import"./gt-CQw4D1xu.js";import"./Button.enums-b_k9EAqq.js";import"./BaseButton-IeCCn510.js";import"./Icon-B7DxM8PH.js";import"./index-DFvsTZbx.js";import"./useLogger-D4I9buOf.js";import"./DSProvider-DzIDhM_J.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-BW2FcxSF.js";import"./colors-DAn332pn.js";import"./require-router-link-m162i5rV.js";import"./react-router-dom-gpQgZfeg.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./spacing.types-QRY9P8Qv.js";import"./Spinner-DLDOSOzx.js";import"./Surface-Cs7tekjF.js";import"./flex.types-q2tZp175.js";import"./Padbox-BrtZqAZY.js";import"./Stack-B_iJg7G-.js";import"./Inline-Cavohj9s.js";import"./Cluster-f2eLrBJy.js";import"./isNotNull-C0-yEnlk.js";import"./noop-Bk6XfTLC.js";import"./Button-CKE-X77u.js";import"./Text-C1sA-5dj.js";import"./CloseButton-CuyKiBXp.js";import"./BaseToastBanner-BQoWXByM.js";import"./isNotNilOrEmpty-Drr4-pBH.js";import"./isNilOrEmpty-CUDYV7wl.js";import"./isNil-Bk-kOnIJ.js";import"./useContainerQuery-BBpl-5uo.js";import"./isNonEmptyArray-WRg_f07P.js";import"./isNotEmpty-DVMo52u6.js";import"./zipObj-D5WCOpKt.js";const Hn={title:"components/Banner",component:o,decorators:[u=>r.jsx("div",{style:{padding:"25px",marginBottom:"25px"},children:u()})],argTypes:{variant:{...z("select",e)}}},a=[{label:"Action A",name:"Action A",onClick:n("click-action-a")},{label:"Action B",name:"Action B",onClick:n("click-action-b")}],s=u=>r.jsx(o,{actions:[...a],...u});s.parameters={screenshot:{skip:!0}};const i=()=>r.jsx(o,{actions:[...a],"data-custom-attr":"test",variant:e.info,onClose:n("close-banner"),children:"Info Banner"}),t=()=>r.jsx(o,{actions:[...a],variant:e.success,onClose:n("close-banner"),children:"Success Banner"}),c=()=>r.jsx(o,{actions:[...a],variant:e.info,onClose:n("close-banner"),children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),m=()=>r.jsx(o,{actions:[{label:"Action",name:"Action",onClick:n("click-action")}],variant:e.info,onClose:n("close-banner"),children:"Info Banner One Action"}),p=()=>r.jsx(o,{variant:e.info,onClose:n("close-banner"),children:"Info Banner No Action"}),d=()=>r.jsx(o,{actions:[...a],variant:e.warn,onClose:n("close-banner"),children:"Warn Banner"}),l=()=>r.jsx(o,{actions:[...a],variant:e.error,onClose:n("close-banner"),children:"Error Banner"}),B=()=>r.jsx(o,{actions:[...a],isDismissable:!1,variant:e.error,children:"Error Banner"});s.__docgenInfo={description:"",methods:[],displayName:"Playground"};i.__docgenInfo={description:"",methods:[],displayName:"InfoBanner"};t.__docgenInfo={description:"",methods:[],displayName:"SuccessBanner"};c.__docgenInfo={description:"",methods:[],displayName:"LongInfoBanner"};m.__docgenInfo={description:"",methods:[],displayName:"InfoBannerOneAction"};p.__docgenInfo={description:"",methods:[],displayName:"InfoBannerNoAction"};d.__docgenInfo={description:"",methods:[],displayName:"WarnBanner"};l.__docgenInfo={description:"",methods:[],displayName:"ErrorBanner"};B.__docgenInfo={description:"",methods:[],displayName:"NonDismissableBanner"};var f,g,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"args => <Banner actions={[...BannerActions]} {...args} />",...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var A,I,_;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`() => <Banner actions={[...BannerActions]} data-custom-attr="test" variant={BannerVariants.info} onClose={action('close-banner')}>
    Info Banner
  </Banner>`,...(_=(I=i.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var v,x,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`() => <Banner actions={[...BannerActions]} variant={BannerVariants.success} onClose={action('close-banner')}>
    Success Banner
  </Banner>`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var C,N,y;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`() => <Banner actions={[...BannerActions]} variant={BannerVariants.info} onClose={action('close-banner')}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  </Banner>`,...(y=(N=c.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var S,j,k;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`() => <Banner actions={[{
  label: 'Action',
  name: 'Action',
  onClick: action('click-action')
}]} variant={BannerVariants.info} onClose={action('close-banner')}>
    Info Banner One Action
  </Banner>`,...(k=(j=m.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var E,V,q;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`() => <Banner variant={BannerVariants.info} onClose={action('close-banner')}>
    Info Banner No Action
  </Banner>`,...(q=(V=p.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var O,D,L;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`() => <Banner actions={[...BannerActions]} variant={BannerVariants.warn} onClose={action('close-banner')}>
    Warn Banner
  </Banner>`,...(L=(D=d.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var W,P,w;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`() => <Banner actions={[...BannerActions]} variant={BannerVariants.error} onClose={action('close-banner')}>
    Error Banner
  </Banner>`,...(w=(P=l.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var U,R,T;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`() => <Banner actions={[...BannerActions]} isDismissable={false} variant={BannerVariants.error}>
    Error Banner
  </Banner>`,...(T=(R=B.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const Jn=["Playground","InfoBanner","SuccessBanner","LongInfoBanner","InfoBannerOneAction","InfoBannerNoAction","WarnBanner","ErrorBanner","NonDismissableBanner"];export{l as ErrorBanner,i as InfoBanner,p as InfoBannerNoAction,m as InfoBannerOneAction,c as LongInfoBanner,B as NonDismissableBanner,s as Playground,t as SuccessBanner,d as WarnBanner,Jn as __namedExportsOrder,Hn as default};
