import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{a as va}from"./chunk-454WOBUV-DWuJqIWT.js";import{B as t}from"./Button-B2HZICot.js";import"./index-B-CeicLq.js";import{S as fa}from"./index-DPJ-F9hp.js";import"./index-CTjT7uj6.js";import"./v4-D8aEg3BZ.js";import"./components-Tmbw27rw.js";import"./index-C1FT5pTy.js";import"./index-Cvv1KPJl.js";import"./Icon-Ctrq9sYp.js";import"./index-uyLpYamY.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./useLogger-_RKsn3HX.js";import"./DSProvider-O0hTpwSp.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-BL8xHceO.js";import"./colors-BJBAFLAc.js";import"./index-C95nPCzM.js";import"./Spinner-BvaTOgAJ.js";import"./prop-B-t2KTqT.js";import"./index--b1-fK-k.js";import"./Padbox-DLePQqEe.js";import"./Inline-CVToOADQ.js";import"./flex.types-BrkCVx66.js";import"./Cluster-DZ_NL6w4.js";const Ja={title:"components/ButtonV2/ButtonV2",component:t,args:{onClick:va("button click"),className:"button"},argTypes:{children:{control:{type:"object"},name:"children",description:"Button label",type:{name:"string | string[]",required:!0}},size:{control:{type:"radio"},options:["sm","md","lg"],name:"size",description:"Sizing variant",table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"'md'"}}},variant:{control:{type:"select"},options:["base","highlight","danger","subtle","ghost","highlight-ghost","danger-ghost"],name:"variant",description:"Visual variant of the button",table:{type:{summary:"'base' | 'highlight' | 'danger' | 'subtle' | 'ghost' | 'highlight-ghost' | 'danger-ghost'"},defaultValue:{summary:"'base'"}}},iconStart:{control:{type:"object"},name:"iconStart",description:"Definition of icon that appears before button label",table:{type:{summary:"{ name: IconNames; type?: RegularIconTypes; rotation?: 90 | 180 | 270; }"}}},iconEnd:{control:{type:"object"},name:"iconEnd",description:"Definition of icon that appears after button label",table:{type:{summary:"{ name: IconNames; type?: RegularIconTypes; rotation?: 90 | 180 | 270; }"}}},minWidth:{control:{type:"number"},name:"minWidth",description:"Button minimal width in px. This property is not set by default",table:{type:{summary:"number"}}},isDisabled:{control:{type:"boolean"},name:"isDisabled",description:"Disable the button to prevent clicking",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isLoading:{control:{type:"boolean"},name:"isLoading",description:"Display loading spinner and disable button to prevent clicking",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loadingText:{control:{type:"text"},name:"loadingText",description:"Text displayed next to spinner in loading state",table:{type:{summary:"string"},defaultValue:{summary:"'Loading'"}}},isExpanded:{control:{type:"boolean"},name:"isExpanded",description:"Expands button to full width of the parrent component",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},as:{control:{type:"object"},name:"as",description:"Used to type-safe property inference. By default `button` element is used, other common options will be `a` or `Link` from react-router",table:{type:{summary:"Element"}}}},parameters:{docs:{description:{component:`A Button is a fundamental interactive element in user interfaces,
allowing users to trigger actions or navigate through an application. It serves
as a clear call-to-action, prompting user engagement and facilitating task
completion.

\`\`\`js
import { ButtonV2 } from '@securityscorecard/design-system';
\`\`\`
See [Migration Guide](?path=/docs/guides-buttonv2-migration-guide--documentation)`}}}},n={args:{children:"Button",size:"md",variant:"base"},parameters:{screenshot:{skip:!0}}},a={args:{children:"Button",size:"md",variant:"base"},parameters:{screenshot:{variants:{hovered:{hover:"button.button"},focused:{focus:"button.button"}}}}},r={args:{...a.args,variant:"subtle"},parameters:{screenshot:{variants:{hovered:{hover:"button.button"},focused:{focus:"button.button"}}}}},o={args:{...a.args,variant:"ghost"},parameters:{screenshot:{variants:{hovered:{hover:"button.button"},focused:{focus:"button.button"}}}}},i={args:{...a.args,variant:"highlight"},parameters:{screenshot:{variants:{hovered:{hover:"button.button"},focused:{focus:"button.button"}}}}},c={args:{...a.args,variant:"danger"},parameters:{screenshot:{variants:{hovered:{hover:"button.button"},focused:{focus:"button.button"}}}}},u={args:{...a.args,variant:"danger-ghost"},parameters:{screenshot:{variants:{hovered:{hover:"button.button"},focused:{focus:"button.button"}}}}},m={args:{...a.args,size:"sm"}},d={args:{...a.args,size:"md"}},p={args:{...a.args,size:"lg"}},g={args:{...a.args,isExpanded:!0}},l={args:{...a.args,isDisabled:!0}},b={args:{...a.args,isLoading:!0}},h={args:{...a.args,minWidth:200}},v={args:{...a.args,iconStart:{name:"cog"}}},f={args:{...a.args,iconEnd:{name:"angle-down"}}},y={args:{children:"Button",iconStart:{name:"cog"},iconEnd:{name:"angle-down"}},render:s=>e.jsxs(fa,{gap:"md",children:[e.jsx(t,{className:"button",size:"sm",variant:"base",isDisabled:!0,...s}),e.jsx(t,{className:"button",size:"sm",variant:"highlight",isDisabled:!0,...s}),e.jsx(t,{className:"button",size:"sm",variant:"danger",isDisabled:!0,...s}),e.jsx(t,{className:"button",size:"sm",variant:"subtle",isDisabled:!0,...s}),e.jsx(t,{className:"button",size:"sm",variant:"ghost",isDisabled:!0,...s}),e.jsx(t,{className:"button",size:"sm",variant:"danger-ghost",isDisabled:!0,...s}),e.jsx(t,{className:"button",size:"sm",variant:"highlight-ghost",isDisabled:!0,...s})]}),tags:["!dev","!autodocs"]};var V,S,B;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(B=(S=n.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var z,D,x;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(x=(D=a.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var E,N,j;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(j=(N=r.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var I,k,L;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(L=(k=o.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var T,w,H;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(H=(w=i.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var W,G,M;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(M=(G=c.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var R,P,_;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(_=(P=u.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var q,A,C;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    size: 'sm'
  }
}`,...(C=(A=m.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var O,U,F;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    size: 'md'
  }
}`,...(F=(U=d.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    size: 'lg'
  }
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    isExpanded: true
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,aa,ea;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    isDisabled: true
  }
}`,...(ea=(aa=l.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};var ta,sa,na;b.parameters={...b.parameters,docs:{...(ta=b.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    isLoading: true
  }
}`,...(na=(sa=b.parameters)==null?void 0:sa.docs)==null?void 0:na.source}}};var ra,oa,ia;h.parameters={...h.parameters,docs:{...(ra=h.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    minWidth: 200
  }
}`,...(ia=(oa=h.parameters)==null?void 0:oa.docs)==null?void 0:ia.source}}};var ca,ua,ma;v.parameters={...v.parameters,docs:{...(ca=v.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    iconStart: {
      name: 'cog'
    }
  }
}`,...(ma=(ua=v.parameters)==null?void 0:ua.docs)==null?void 0:ma.source}}};var da,pa,ga;f.parameters={...f.parameters,docs:{...(da=f.parameters)==null?void 0:da.docs,source:{originalSource:`{
  args: {
    ...VariantBase.args,
    iconEnd: {
      name: 'angle-down'
    }
  }
}`,...(ga=(pa=f.parameters)==null?void 0:pa.docs)==null?void 0:ga.source}}};var la,ba,ha;y.parameters={...y.parameters,docs:{...(la=y.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(ha=(ba=y.parameters)==null?void 0:ba.docs)==null?void 0:ha.source}}};const Ka=["Playground","VariantBase","VariantSubtle","VariantGhost","VariantHighlight","VariantDanger","VariantDangerGhost","SizeSmall","SizeMedium","SizeLarge","IsExpanded","IsDisabled","IsLoading","HasMinWidth","HasIconStart","HasIconEnd","VisualTestsDisabled"];export{f as HasIconEnd,v as HasIconStart,h as HasMinWidth,l as IsDisabled,g as IsExpanded,b as IsLoading,n as Playground,p as SizeLarge,d as SizeMedium,m as SizeSmall,a as VariantBase,c as VariantDanger,u as VariantDangerGhost,o as VariantGhost,i as VariantHighlight,r as VariantSubtle,y as VisualTestsDisabled,Ka as __namedExportsOrder,Ja as default};
//# sourceMappingURL=Button.stories-DiyociBX.js.map
