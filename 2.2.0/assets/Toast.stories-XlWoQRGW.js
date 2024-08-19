import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{a as o}from"./chunk-454WOBUV-DWuJqIWT.js";import{B as e}from"./Button-vDRI25at.js";import"./Surface-DpLLkhSd.js";import"./Padbox-DKEfmyAv.js";import{S as n}from"./Stack-D3Wl5zWT.js";import{I as K}from"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import{S as a}from"./space-1LtLrmuu.js";import"./DSProvider-IYcK3cWD.js";import"./DSThemeOverride-BduN1ykm.js";import"./index-DFvsTZbx.js";import"./theme-Cr_I21Pv.js";import{T as s,a as i}from"./Toast-DXr-8eMe.js";import{g as Q}from"./storybook-BpZQCxPY.js";import{n as X}from"./noop-CLoMDX4X.js";import"./index-CTjT7uj6.js";import"./v4-D8aEg3BZ.js";import"./BaseButton-D1TUSAxp.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./Icon-4JNizDXH.js";import"./useLogger-Cd66DVRc.js";import"./require-router-link-DHB4GfDh.js";import"./react-router-dom-Dge5SpE2.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./extends-CF3RwP-h.js";import"./tiny-invariant-CopsF_GD.js";import"./spacing.types-C9Yu1wmA.js";import"./Spinner-CJrCb2wC.js";import"./prop-DG2n0FAQ.js";import"./isNotNull-B1xFkUZ3.js";import"./flex.types-BrkCVx66.js";import"./index-DIVhMF2i.js";import"./colors-CyEChGtp.js";import"./Paragraph-4LRW5eCl.js";import"./Text-DTP2ysh1.js";import"./BaseToastBanner-cuQzV4A6.js";import"./isNotNilOrEmpty-cGK6as13.js";import"./isNilOrEmpty-MGEuPZ7r.js";import"./isNil-C1Q7XXIj.js";import"./CloseButton-Ddazfl7Y.js";import"./zipObj-DVsQulIT.js";const Y={transform:"scale(1)",height:"200px"},Rt={title:"components/Toast",component:s,decorators:[j=>t.jsx("div",{style:Y,children:j()})],argTypes:{variant:{...Q("select",i)}}},r=j=>t.jsx(s,{...j,children:t.jsxs(n,{gap:a.sm,justify:"flex-start",children:[t.jsx("p",{children:"This is a notification."}),t.jsx(e,{variant:"text",children:"Action"})]})});r.args={onClose:X};r.parameters={screenshot:{skip:!0}};const c=()=>t.jsx(s,{onClose:o("close-toast"),children:t.jsxs(n,{gap:a.sm,justify:"flex-start",children:[t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere velit magna, id scelerisque neque tristique sit amet. Nam mollis odio enim, sit amet auctor arcu elementum ut. Ut eget iaculis tortor."}),t.jsx(e,{variant:"text",children:"Action"})]})}),m=()=>t.jsx(s,{onClose:o("close-toast"),children:t.jsxs(n,{gap:a.sm,justify:"flex-start",children:[t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere velit magna, id scelerisque neque tristique sit amet. Nam mollis odio enim, sit amet auctor arcu elementum ut. Ut eget iaculis tortor."}),t.jsxs(K,{gap:a.mdPlus,children:[t.jsx(e,{variant:"text",children:"Action A"}),t.jsx(e,{variant:"text",children:"Action B"})]})]})}),l=()=>t.jsx(s,{width:470,onClose:o("close-toast"),children:t.jsxs(n,{gap:a.sm,justify:"flex-start",children:[t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere velit magna, id scelerisque neque tristique sit amet. Nam mollis odio enim, sit amet auctor arcu elementum ut. Ut eget iaculis tortor."}),t.jsx(e,{variant:"text",children:"Action"})]})}),p=()=>t.jsx(s,{variant:i.info,onClose:o("close-toast"),children:t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a lacus posuere."})}),u=()=>t.jsx(s,{variant:i.success,onClose:o("close-toast"),children:t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a lacus posuere."})}),d=()=>t.jsx(s,{variant:i.warn,onClose:o("close-toast"),children:t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a lacus posuere."})}),g=()=>t.jsx(s,{variant:i.error,onClose:o("close-toast"),children:t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a lacus posuere."})}),x=()=>t.jsx(s,{variant:i.info,onClose:o("close-toast"),children:t.jsxs(n,{gap:a.sm,justify:"flex-start",children:[t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a lacus posuere."}),t.jsxs(K,{gap:a.mdPlus,children:[t.jsx(e,{variant:"text",children:"Action A"}),t.jsx(e,{variant:"text",children:"Action B"})]})]})}),T=()=>t.jsx(s,{variant:i.loading,onClose:o("close-toast"),children:t.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a lacus posuere."})});var h,f,S;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => <Toast {...args}>
    <Stack gap={SpaceSizes.sm} justify="flex-start">
      <p>This is a notification.</p>
      <Button variant="text">Action</Button>
    </Stack>
  </Toast>`,...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var v,A,C;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`() => <Toast onClose={action('close-toast')}>
    <Stack gap={SpaceSizes.sm} justify="flex-start">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere
        velit magna, id scelerisque neque tristique sit amet. Nam mollis odio
        enim, sit amet auctor arcu elementum ut. Ut eget iaculis tortor.
      </p>
      <Button variant="text">Action</Button>
    </Stack>
  </Toast>`,...(C=(A=c.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var L,B,N;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`() => <Toast onClose={action('close-toast')}>
    <Stack gap={SpaceSizes.sm} justify="flex-start">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere
        velit magna, id scelerisque neque tristique sit amet. Nam mollis odio
        enim, sit amet auctor arcu elementum ut. Ut eget iaculis tortor.
      </p>
      <Inline gap={SpaceSizes.mdPlus}>
        <Button variant="text">Action A</Button>
        <Button variant="text">Action B</Button>
      </Inline>
    </Stack>
  </Toast>`,...(N=(B=m.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var q,y,b;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`() => <Toast width={470} onClose={action('close-toast')}>
    <Stack gap={SpaceSizes.sm} justify="flex-start">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere
        velit magna, id scelerisque neque tristique sit amet. Nam mollis odio
        enim, sit amet auctor arcu elementum ut. Ut eget iaculis tortor.
      </p>
      <Button variant="text">Action</Button>
    </Stack>
  </Toast>`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var k,M,I;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Toast variant={ToastVariants.info} onClose={action('close-toast')}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a
      lacus posuere.
    </p>
  </Toast>`,...(I=(M=p.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var V,z,w;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`() => <Toast variant={ToastVariants.success} onClose={action('close-toast')}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a
      lacus posuere.
    </p>
  </Toast>`,...(w=(z=u.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var P,U,W;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`() => <Toast variant={ToastVariants.warn} onClose={action('close-toast')}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a
      lacus posuere.
    </p>
  </Toast>`,...(W=(U=d.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var E,_,O;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`() => <Toast variant={ToastVariants.error} onClose={action('close-toast')}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a
      lacus posuere.
    </p>
  </Toast>`,...(O=(_=g.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var R,D,F;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`() => <Toast variant={ToastVariants.info} onClose={action('close-toast')}>
    <Stack gap={SpaceSizes.sm} justify="flex-start">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa
        a lacus posuere.
      </p>
      <Inline gap={SpaceSizes.mdPlus}>
        <Button variant="text">Action A</Button>
        <Button variant="text">Action B</Button>
      </Inline>
    </Stack>
  </Toast>`,...(F=(D=x.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var G,H,J;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`() => <Toast variant={ToastVariants.loading} onClose={action('close-toast')}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a
      lacus posuere.
    </p>
  </Toast>`,...(J=(H=T.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const Dt=["Playground","LongToast","TwoActions","CustomWidthToast","InfoToastNoAction","SuccessToastNoAction","WarnToastNoAction","ErrorToastNoAction","InfoToastWithActions","LoadingToastVariant"];export{l as CustomWidthToast,g as ErrorToastNoAction,p as InfoToastNoAction,x as InfoToastWithActions,T as LoadingToastVariant,c as LongToast,r as Playground,u as SuccessToastNoAction,m as TwoActions,d as WarnToastNoAction,Dt as __namedExportsOrder,Rt as default};
