import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{a as ve}from"./chunk-454WOBUV-CM0pFb8Z.js";import{B as t}from"./Button-BJCD1Rvj.js";import"./index-DozTNYRt.js";import{S as fe}from"./index-NWhnjyl5.js";import"./index-CTjT7uj6.js";import"./v4-CQkTLCs1.js";import"./index-C7IrpltL.js";import"./components-9007xTyM.js";import"./styled-components.browser.esm-CkXiwQaI.js";import"./index-DUHcbkNP.js";import"./Icon-Cs9KcX0_.js";import"./index-CMxDd3Da.js";import"./index-BRV0Se7Z.js";import"./index-CbknQUej.js";import"./useLogger-XTihx-r2.js";import"./DSProvider-B7ofGRk-.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-DY1VOCqR.js";import"./colors-BJBAFLAc.js";import"./index-BIl9TMb8.js";import"./Spinner-S-AlkdOj.js";import"./prop-CqBAad6K.js";import"./index-B0Us5nPq.js";import"./Padbox-Suafv-Ni.js";import"./Inline.enums-DlaUPeKw.js";import"./Cluster-CO02VLRh.js";const Je={title:"components/ButtonV2/ButtonV2",component:t,args:{onClick:ve("button click"),className:"button"},argTypes:{children:{control:{type:"object"},name:"children",description:"Button label",type:{name:"string | string[]",required:!0}},size:{control:{type:"radio"},options:["sm","md","lg"],name:"size",description:"Sizing variant",table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"'md'"}}},variant:{control:{type:"select"},options:["base","highlight","danger","subtle","ghost","highlight-ghost","danger-ghost"],name:"variant",description:"Visual variant of the button",table:{type:{summary:"'base' | 'highlight' | 'danger' | 'subtle' | 'ghost' | 'highlight-ghost' | 'danger-ghost'"},defaultValue:{summary:"'base'"}}},iconStart:{control:{type:"object"},name:"iconStart",description:"Definition of icon that appears before button label",table:{type:{summary:"{ name: IconNames; type?: RegularIconTypes; rotation?: 90 | 180 | 270; }"}}},iconEnd:{control:{type:"object"},name:"iconEnd",description:"Definition of icon that appears after button label",table:{type:{summary:"{ name: IconNames; type?: RegularIconTypes; rotation?: 90 | 180 | 270; }"}}},minWidth:{control:{type:"number"},name:"minWidth",description:"Button minimal width in px. This property is not set by default",table:{type:{summary:"number"}}},isDisabled:{control:{type:"boolean"},name:"isDisabled",description:"Disable the button to prevent clicking",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},name:"isLoading",description:"Display loading spinner and disable button to prevent clicking",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loadingText:{control:{type:"text"},name:"loadingText",description:"Text displayed next to spinner in loading state",table:{type:{summary:"string"},defaultValue:{summary:"'Loading'"}}},isExpanded:{control:{type:"boolean"},name:"isExpanded",description:"Expands button to full width of the parrent component",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},as:{control:{type:"object"},name:"as",description:"Used to type-safe property inference. By default `button` element is used, other common options will be `a` or `Link` from react-router",table:{type:{summary:"Element"}}}},parameters:{docs:{description:{component:"A Button is a fundamental interactive element in user interfaces,\nallowing users to trigger actions or navigate through an application. It serves\nas a clear call-to-action, prompting user engagement and facilitating task\ncompletion.\n\n```js\nimport { ButtonV2 } from '@securityscorecard/design-system';\n```\n## Using as links and with external routers\n\nIn `ButtonV2`, you must now explicitly define the element to be rendered using the `as` prop. The default value for `as` is `button`, but you can now pass in `a` or a custom React component (like `Link` from react-router-dom) to render the appropriate element.\nThis increases type-safety, as the component can correctly infer the available props based on the `as` value.\n\n## Coming from original Button component?\nWe prepared a comprehensive [migration guide](?path=/docs/guides-buttonv2-migration-guide--documentation) that should cover all main differences and help you with this transition."}}}},s={args:{children:"Button",size:"md",variant:"base"},parameters:{screenshot:{skip:!0}}},e={args:{children:"Button",size:"md",variant:"base"},parameters:{screenshot:{variants:{hovered:{hover:"button.button"},focused:{focus:"button.button"}}}}},r={args:{...e.args,variant:"subtle"},parameters:{screenshot:{variants:{hovered:{hover:"button.button"},focused:{focus:"button.button"}}}}},o={args:{...e.args,variant:"ghost"},parameters:{screenshot:{variants:{hovered:{hover:"button.button"},focused:{focus:"button.button"}}}}},i={args:{...e.args,variant:"highlight"},parameters:{screenshot:{variants:{hovered:{hover:"button.button"},focused:{focus:"button.button"}}}}},c={args:{...e.args,variant:"danger"},parameters:{screenshot:{variants:{hovered:{hover:"button.button"},focused:{focus:"button.button"}}}}},u={args:{...e.args,variant:"danger-ghost"},parameters:{screenshot:{variants:{hovered:{hover:"button.button"},focused:{focus:"button.button"}}}}},m={args:{...e.args,size:"sm"}},d={args:{...e.args,size:"md"}},p={args:{...e.args,size:"lg"}},l={args:{...e.args,isExpanded:!0}},g={args:{...e.args,isDisabled:!0}},b={args:{...e.args,isLoading:!0}},h={args:{...e.args,minWidth:200}},v={args:{...e.args,iconStart:{name:"cog"}}},f={args:{...e.args,iconEnd:{name:"angle-down"}}},y={args:{children:"Button",iconStart:{name:"cog"},iconEnd:{name:"angle-down"}},render:n=>a.jsxs(fe,{gap:"md",children:[a.jsx(t,{className:"button",size:"sm",variant:"base",isDisabled:!0,...n}),a.jsx(t,{className:"button",size:"sm",variant:"highlight",isDisabled:!0,...n}),a.jsx(t,{className:"button",size:"sm",variant:"danger",isDisabled:!0,...n}),a.jsx(t,{className:"button",size:"sm",variant:"subtle",isDisabled:!0,...n}),a.jsx(t,{className:"button",size:"sm",variant:"ghost",isDisabled:!0,...n}),a.jsx(t,{className:"button",size:"sm",variant:"danger-ghost",isDisabled:!0,...n}),a.jsx(t,{className:"button",size:"sm",variant:"highlight-ghost",isDisabled:!0,...n})]}),tags:["!dev","!autodocs"]};var V,B,S;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    size: 'md',
    variant: 'base'
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(S=(B=s.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var z,D,x;e.parameters={...e.parameters,docs:{...(z=e.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    size: 'md',
    variant: 'base'
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.button'
        },
        focused: {
          focus: 'button.button'
        }
      }
    }
  }
}`,...(x=(D=e.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var E,N,I;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    variant: 'subtle'
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.button'
        },
        focused: {
          focus: 'button.button'
        }
      }
    }
  }
}`,...(I=(N=r.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var j,k,w;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    variant: 'ghost'
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.button'
        },
        focused: {
          focus: 'button.button'
        }
      }
    }
  }
}`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var L,T,H;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    variant: 'highlight'
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.button'
        },
        focused: {
          focus: 'button.button'
        }
      }
    }
  }
}`,...(H=(T=i.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var W,G,M;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    variant: 'danger'
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.button'
        },
        focused: {
          focus: 'button.button'
        }
      }
    }
  }
}`,...(M=(G=c.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var R,C,P;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    variant: 'danger-ghost'
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'button.button'
        },
        focused: {
          focus: 'button.button'
        }
      }
    }
  }
}`,...(P=(C=u.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var U,_,q;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    size: 'sm'
  }
}`,...(q=(_=m.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var A,O,F;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    size: 'md'
  }
}`,...(F=(O=d.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    size: 'lg'
  }
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    isExpanded: true
  }
}`,...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    isDisabled: true
  }
}`,...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,se;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    isLoading: true
  }
}`,...(se=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,oe,ie;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    minWidth: 200
  }
}`,...(ie=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,ue,me;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    iconStart: {
      name: 'cog'
    }
  }
}`,...(me=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var de,pe,le;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    iconEnd: {
      name: 'angle-down'
    }
  }
}`,...(le=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};var ge,be,he;y.parameters={...y.parameters,docs:{...(ge=y.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    iconStart: {
      name: 'cog'
    },
    iconEnd: {
      name: 'angle-down'
    }
  },
  render: args => <Stack gap="md">
      <ButtonV2 className="button" size="sm" variant="base" isDisabled {...args} />
      <ButtonV2 className="button" size="sm" variant="highlight" isDisabled {...args} />
      <ButtonV2 className="button" size="sm" variant="danger" isDisabled {...args} />
      <ButtonV2 className="button" size="sm" variant="subtle" isDisabled {...args} />
      <ButtonV2 className="button" size="sm" variant="ghost" isDisabled {...args} />
      <ButtonV2 className="button" size="sm" variant="danger-ghost" isDisabled {...args} />
      <ButtonV2 className="button" size="sm" variant="highlight-ghost" isDisabled {...args} />
    </Stack>,
  tags: ['!dev', '!autodocs']
}`,...(he=(be=y.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};const Ke=["Playground","VariantBase","VariantSubtle","VariantGhost","VariantHighlight","VariantDanger","VariantDangerGhost","SizeSmall","SizeMedium","SizeLarge","IsExpanded","IsDisabled","IsLoading","HasMinWidth","HasIconStart","HasIconEnd","VisualTestsDisabled"];export{f as HasIconEnd,v as HasIconStart,h as HasMinWidth,g as IsDisabled,l as IsExpanded,b as IsLoading,s as Playground,p as SizeLarge,d as SizeMedium,m as SizeSmall,e as VariantBase,c as VariantDanger,u as VariantDangerGhost,o as VariantGhost,i as VariantHighlight,r as VariantSubtle,y as VisualTestsDisabled,Ke as __namedExportsOrder,Je as default};
//# sourceMappingURL=Button.stories-BuonpDn6.js.map
