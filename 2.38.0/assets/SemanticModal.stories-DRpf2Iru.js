import{j as r}from"./jsx-runtime-CfatFE5O.js";import{a as e}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{L as V,M as W}from"./react-router-dom-BXW3jNOE.js";import{r as z}from"./index-ClcD9ViR.js";import{S as E,a}from"./SemanticModal-BpcDFKYy.js";import"./index-DSixxlEM.js";import"./index-C_Y47jjd.js";import"./index-DuBGvjtd.js";import{P as O}from"./Padbox-D0nj4Q3C.js";import{S as T}from"./space.enums-DGrZwzIk.js";import{I as D}from"./Inline-CzyJe68E.js";import{B as F}from"./Button-4dSCwUul.js";import{S as Y}from"./index-BeSa3Tgc.js";import"./v4-CQkTLCs1.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbwGX_n3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./DSProvider-DyLdaVGt.js";import"./index-_KdZNTQd.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./_isObject-dmcfxmtS.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./index-CEIBBt4n.js";import"./Modal-kNeWb6Vy.js";import"./useOuterCallback-BFSBiNPT.js";import"./index-DxcpycWO.js";import"./index-DdFEn1u_.js";import"./index-BBJ1g9mG.js";import"./Heading-Wkmas1ro.js";import"./index-_M9_Hem9.js";import"./constants-l-41uwkI.js";import"./mergeRefs-C43w_hK8.js";import"./index-BObVLW-5.js";import"./CloseButton-DUH4teTg.js";import"./IconButton-P8KcAbIR.js";import"./components-tj5nOmNW.js";import"./index-BeCDKFyL.js";import"./Icon-BUtjSb1P.js";import"./index-DRm3KUNF.js";import"./useLogger-Duem4C0W.js";import"./index-DGqv0G-5.js";import"./Spinner-CK2vC9iP.js";import"./Inline.enums-KPT5jvjq.js";import"./FloatingContext-f-xOTKfR.js";import"./index-Bi90Y8Ou.js";import"./index-CEsunubm.js";import"./Button-CdECnUEw.js";import"./Cluster-B_3C_5JL.js";import"./prop-gA1VFyoz.js";import"./index-CQLyLGe8.js";import"./require-router-link-C5R51hr_.js";import"./isNull-C_3YYFwP.js";import"./isNotNull-CploqAht.js";import"./noop-CGDyLuY9.js";import"./isFunction-B5WoXTNq.js";import"./pluck-B5Qa9yNi.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";const Xr={title:"components/modals/SemanticModal",component:E,parameters:{docs:{story:{inline:!1,height:500}}},args:{actions:[{label:"Secondary",name:"Secondary",onClick:e("click-action-secondary")},{label:"Primary",name:"Primary",onClick:e("click-action-primary")}],message:"You can replace this with a local component. You can also just override the text, but keep in mind that you might lose content that way.",title:"This is a placeholder",onClose:e("close-modal")},argTypes:{variant:{description:"Semantic type of modal",control:{type:"select"},options:Object.values(a)},message:{description:"Main message text field"},onClose:{description:"Action executed on CloseButton click"},title:{description:"Message heading"},isPrimaryButtonLoading:{description:'When certain process is still running, you can set the primary button to "loading" state'},loadingText:{description:"Loading state text"},actions:{description:"An array of action items that are rendered as buttons",control:{disable:!0}},primaryButtonColor:{description:"Changes the colour of the primary button so the priamry action can match the message",control:{type:"select"},options:["primary","danger"]}}},t={render:p=>{const[l,u]=z.useState(!1);return r.jsxs(O,{paddingSize:T.xxl,children:[r.jsx(D,{justify:"center",children:r.jsx(F,{onClick:()=>u(!l),children:"Open semantic modal"})}),l&&r.jsx(E,{...p,onClose:()=>u(!1)})]})},parameters:{screenshot:{skip:!0},docs:{source:{type:"code"}}}},o={args:{variant:a.success}},s={args:{variant:a.warn}},i={args:{variant:a.error}},n={args:{variant:a.ban,primaryButtonColor:"danger"}},m={args:{message:r.jsxs(Y,{gap:"md",children:[r.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in dignissim enim. Interdum et malesuada fames ac ante ipsum primis in faucibus."}),r.jsx("p",{children:"Duis sem eros, ultrices eu mi eget, blandit vestibulum mauris. Pellentesque at hendrerit orci. Aliquam vel ligula lectus. Curabitur varius sed mauris ut aliquam. Integer sed iaculis quam, eget dignissim nulla."})]})}},c={args:{actions:[{label:'"A" tag with href',name:"Secondary",onClick:e("click-action-secondary"),as:"a",href:"https://google.com"},{label:"React Router Link",name:"Primary",onClick:e("click-action-primary"),as:V,to:"/abc"}]},decorators:[p=>r.jsx(W,{children:p()})],parameters:{screenshot:{skip:!0}}};var d,g,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [isShown, setIsShown] = useState(false);
    return <Padbox paddingSize={SpaceSizes.xxl}>
        <Inline justify="center">
          <Button onClick={() => setIsShown(!isShown)}>
            Open semantic modal
          </Button>
        </Inline>
        {isShown && <SemanticModal {...args} onClose={() => setIsShown(false)} />}
      </Padbox>;
  },
  parameters: {
    screenshot: {
      skip: true
    },
    docs: {
      source: {
        type: 'code'
      }
    }
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,y,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: SemanticModalVariants.success
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,k,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: SemanticModalVariants.warn
  }
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var M,C,v;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: SemanticModalVariants.error
  }
}`,...(v=(C=i.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var P,j,w;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: SemanticModalVariants.ban,
    primaryButtonColor: 'danger'
  }
}`,...(w=(j=n.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var I,B,R;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    message: <Stack gap="md">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
          dignissim enim. Interdum et malesuada fames ac ante ipsum primis in
          faucibus.
        </p>
        <p>
          Duis sem eros, ultrices eu mi eget, blandit vestibulum mauris.
          Pellentesque at hendrerit orci. Aliquam vel ligula lectus. Curabitur
          varius sed mauris ut aliquam. Integer sed iaculis quam, eget dignissim
          nulla.
        </p>
      </Stack>
  }
}`,...(R=(B=m.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var L,q,A;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    actions: [{
      label: '"A" tag with href',
      name: 'Secondary',
      onClick: action('click-action-secondary'),
      as: 'a',
      href: 'https://google.com'
    }, {
      label: 'React Router Link',
      name: 'Primary',
      onClick: action('click-action-primary'),
      as: Link,
      to: '/abc'
    }]
  },
  decorators: [storyFn => <MemoryRouter>{storyFn()}</MemoryRouter>],
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(A=(q=c.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const Zr=["Playground","Success","Warn","Error","Ban","MultiParagraphMessage","WithRouting"];export{n as Ban,i as Error,m as MultiParagraphMessage,t as Playground,o as Success,s as Warn,c as WithRouting,Zr as __namedExportsOrder,Xr as default};
//# sourceMappingURL=SemanticModal.stories-DRpf2Iru.js.map
