import{j as r}from"./jsx-runtime-BbjHj44Y.js";import{a as e}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{L as V,M as W}from"./react-router-dom-DxT5PRwj.js";import{r as z}from"./index-C6mWTJJr.js";import{S as E,a}from"./SemanticModal-By1uor1m.js";import"./index-CbztWzgW.js";import"./index-C2LKKbZX.js";import"./index-BGhWSV4h.js";import{P as O}from"./Padbox-hEmkrqba.js";import{S as T}from"./space.enums-DGrZwzIk.js";import{I as D}from"./Inline-B7NzMb1T.js";import{B as F}from"./Button-BOsYjBY0.js";import{S as Y}from"./index-CcmHmzDo.js";import"./v4-CQkTLCs1.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-Dk74W0Oi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./DSProvider-CTEb0Eap.js";import"./index-CWFZYRor.js";import"./styled-components.browser.esm-DdpL0cfT.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./_isObject-dmcfxmtS.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./index-HdmSZXCr.js";import"./Modal-DZa5bvEg.js";import"./useOuterCallback-B34oUwCq.js";import"./index-CVyJwDg7.js";import"./index-u7CqcJ18.js";import"./index-hHKih82r.js";import"./Heading-zZHIYZQx.js";import"./index-BzkxN2vn.js";import"./constants-l-41uwkI.js";import"./mergeRefs-C43w_hK8.js";import"./index-DRUBFyPh.js";import"./CloseButton-D4Tk-gHy.js";import"./IconButton-D6uxzsW5.js";import"./components-DsRWzzQN.js";import"./index-CmE5poE7.js";import"./Icon-BGVJaxc5.js";import"./index-DRm3KUNF.js";import"./useLogger-O6XA1hQU.js";import"./index-DOkAu5-S.js";import"./Spinner-Frn9DgHt.js";import"./Inline.enums-KPT5jvjq.js";import"./FloatingContext-Bl8tl6Fh.js";import"./index-Bfs0wQhB.js";import"./index-CP_iG0Cq.js";import"./Button-DJ_7XBm0.js";import"./Cluster-C53_rRpf.js";import"./prop-gA1VFyoz.js";import"./index-BlcsDpij.js";import"./require-router-link-Dx6wPKPd.js";import"./isNull-C_3YYFwP.js";import"./isNotNull-CploqAht.js";import"./noop-CGDyLuY9.js";import"./isFunction-B5WoXTNq.js";import"./pluck-B5Qa9yNi.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";const Xr={title:"components/modals/SemanticModal",component:E,parameters:{docs:{story:{inline:!1,height:500}}},args:{actions:[{label:"Secondary",name:"Secondary",onClick:e("click-action-secondary")},{label:"Primary",name:"Primary",onClick:e("click-action-primary")}],message:"You can replace this with a local component. You can also just override the text, but keep in mind that you might lose content that way.",title:"This is a placeholder",onClose:e("close-modal")},argTypes:{variant:{description:"Semantic type of modal",control:{type:"select"},options:Object.values(a)},message:{description:"Main message text field"},onClose:{description:"Action executed on CloseButton click"},title:{description:"Message heading"},isPrimaryButtonLoading:{description:'When certain process is still running, you can set the primary button to "loading" state'},loadingText:{description:"Loading state text"},actions:{description:"An array of action items that are rendered as buttons",control:{disable:!0}},primaryButtonColor:{description:"Changes the colour of the primary button so the priamry action can match the message",control:{type:"select"},options:["primary","danger"]}}},t={render:p=>{const[l,u]=z.useState(!1);return r.jsxs(O,{paddingSize:T.xxl,children:[r.jsx(D,{justify:"center",children:r.jsx(F,{onClick:()=>u(!l),children:"Open semantic modal"})}),l&&r.jsx(E,{...p,onClose:()=>u(!1)})]})},parameters:{screenshot:{skip:!0},docs:{source:{type:"code"}}}},o={args:{variant:a.success}},s={args:{variant:a.warn}},i={args:{variant:a.error}},n={args:{variant:a.ban,primaryButtonColor:"danger"}},m={args:{message:r.jsxs(Y,{gap:"md",children:[r.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in dignissim enim. Interdum et malesuada fames ac ante ipsum primis in faucibus."}),r.jsx("p",{children:"Duis sem eros, ultrices eu mi eget, blandit vestibulum mauris. Pellentesque at hendrerit orci. Aliquam vel ligula lectus. Curabitur varius sed mauris ut aliquam. Integer sed iaculis quam, eget dignissim nulla."})]})}},c={args:{actions:[{label:'"A" tag with href',name:"Secondary",onClick:e("click-action-secondary"),as:"a",href:"https://google.com"},{label:"React Router Link",name:"Primary",onClick:e("click-action-primary"),as:V,to:"/abc"}]},decorators:[p=>r.jsx(W,{children:p()})],parameters:{screenshot:{skip:!0}}};var d,g,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
//# sourceMappingURL=SemanticModal.stories-CWas-2mv.js.map
