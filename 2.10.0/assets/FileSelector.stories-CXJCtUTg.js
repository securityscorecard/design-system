import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as g}from"./index-BwDkhjyp.js";import{F as i}from"./FileSelector-6g2ESzyF.js";import"./index-0COcc321.js";import{T as u,b as _}from"./index-B9rA5P-U.js";import{S as f}from"./index-iY2rO5S8.js";import{i as C}from"./isNonEmptyArray-71Asn3IU.js";import{S as q}from"./index-CKrVqi-N.js";import{P as G}from"./Padbox-DzmU9-lr.js";import{I as H}from"./Inline.enums-6YASdLRa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-wZhUVDj8.js";import"./index-Dk74W0Oi.js";import"./index-CVyJwDg7.js";import"./Button-Y7NUWBaW.js";import"./components-B6h-HAd3.js";import"./index-CA8igt89.js";import"./Icon-OPJ4_-kw.js";import"./index-BsP7FXMl.js";import"./index-BQWFrAEB.js";import"./constants-CHqWh-7J.js";import"./isNotUndefined-DxARNfZG.js";import"./_isObject-BZZHHNGj.js";import"./slice-DUYrgxkR.js";import"./useLogger-DZJuabeR.js";import"./DSProvider-BQ8JssCJ.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./index-B2Sxccu3.js";import"./Spinner-h6IgF5Nn.js";import"./prop-qecTCRZr.js";import"./index-Ce98GNY9.js";import"./IconWrapper-CLx_qJau.js";import"./index-C5vu570j.js";import"./index-CHeNQ-B2.js";import"./require-router-link--hD0WpN8.js";import"./react-router-dom-DwuZB8Qo.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./tiny-invariant-CopsF_GD.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./isNull-C-cY_r9w.js";import"./isNotNull-C1OvDTe-.js";import"./omit-EE5F1hue.js";import"./Cluster-CjJ089XP.js";import"./isNotEmpty-BCifqKF6.js";import"./isFunction-CImlSIc3.js";import"./pluck-D_zsPq3H.js";const qe={component:i,argTypes:{size:{control:"select",options:["fill","comapct","area"],description:"Size variant of the FileSelector",table:{type:{summary:"'fill' | 'comapct' | 'area'"}}},hasError:{control:"boolean",description:"Sets file selector into errorous state",table:{type:{summary:"boolean"}}},isDisabled:{control:"boolean",description:"Disables the FileSelector",table:{type:{summary:"boolean"}}},instructionsText:{description:"Text with file requirements. Availabel for `fill` and `area` sizes.",table:{type:{summary:"string"}}},multiple:{control:"boolean",description:"Allows to select multiple files",table:{type:{summary:"boolean"}}},accept:{control:"object",description:"Accepted file types, in form of object where keys are file mime types and value is a array with supported file extensions. If an empty array is provided as a value all extensions are accepted.Examples: `{ 'image/png': [ '.png' ] }` will accept only PNG images, `{ 'image/*': [] }` will accept any image with any extension.",table:{type:{summary:"Record<string, Array<string>>"}}},maxFiles:{control:"number",description:"The maximum number of dropped files",table:{type:{summary:"number"}}},onFilesDrop:{control:{disable:!0},table:{type:{summary:"<T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void"}}},onFilesAccepted:{control:{disable:!0},table:{type:{summary:"<T extends File>(files: T[], event: DropEvent) => void"}}},onFilesRejected:{control:{disable:!0},table:{type:{summary:"(fileRejections: FileRejection[], event: DropEvent) => void"}}},onFileDialogCancel:{control:{disable:!0},description:"Callback fired when file dialog is closed with no selection",table:{type:{summary:"() => void"}}},onFileDialogOpen:{control:{disable:!0},description:"Callback fired when dialog is opened",table:{type:{summary:"() => void"}}},validator:{control:{disable:!0},description:"Custom validation function. It must return null if there are no errors.",table:{type:{summary:"<T extends File>(file: T) => FileError | readonly FileError[] | null"}}},width:{control:"number",description:"Width of the droping zone, takes Number in pixels or any other valid value as String. Available only for `area` size.",table:{type:{summary:"number | string"}}},height:{control:"number",description:"Height of the droping zone, takes Number in pixels or any other valid value as String. Available only for `area` size.",table:{type:{summary:"number | string"}}}},args:{instructionsText:"Pass instructions for uploaded files here",accept:{"image/*":[]}},parameters:{docs:{description:{component:"```jsx\nimport { FileSelector } from '@securityscorecard/design-system';\n```"}}}},n={parameters:{screenshot:{skip:!0}}},s={render:t=>e.jsxs(f,{gap:"4x",children:[e.jsx(i,{size:"compact",...t}),e.jsx(i,{size:"fill",...t}),e.jsx(i,{height:300,size:"area",width:400,...t})]})},l={render:s.render,args:{hasError:!0}},p={render:s.render,args:{isDisabled:!0}},m={render:s.render,parameters:{themes:{themeOverride:"Dark"}}},y=({file:t,errors:a=[]})=>e.jsx(q,{style:{borderColor:C(a)?"var(--sscds-color-border-input-error)":void 0},hasBorder:!0,children:e.jsxs(G,{paddingSize:"2x",children:[e.jsxs(H,{gap:"2x",justify:"space-between",children:[e.jsx(u,{isBold:!0,children:t.name}),e.jsxs(u,{children:[Math.floor(t.size/1024)," kB"]})]}),e.jsx(f,{children:a.map(o=>e.jsx(u,{size:"sm",variant:_.danger,children:o.message},o.code))})]})}),c={render:function(a){const[o,N]=g.useState([]),[I,$]=g.useState([]),M=(r,W)=>{N(d=>[...d,...W]),$(d=>[...d,...r])};return e.jsxs(f,{gap:"4x",children:[e.jsx(i,{hasError:C(o),onFilesDrop:M,...a}),I.map(r=>e.jsx(y,{file:r},`${r.name}-accepted`)),o.map(r=>e.jsx(y,{errors:r.errors,file:r.file},`${r.file.name}-rejected`))]})},args:{accept:{"image/png":[".png"]},instructionsText:".png only, file size between 100kB and 400kB, up to 2 files",maxFiles:2,maxFileSize:400*1024,minFileSize:100*1024,multiple:!0},parameters:{screenshot:{skip:!0}}};var b,h,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var F,S,v;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <Stack gap="4x">
      <FileSelector size="compact" {...args} />
      <FileSelector size="fill" {...args} />
      <FileSelector height={300} size="area" width={400} {...args} />
    </Stack>
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var j,z,k;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: Sizes.render,
  args: {
    hasError: true
  }
}`,...(k=(z=l.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var E,D,w;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: Sizes.render,
  args: {
    isDisabled: true
  }
}`,...(w=(D=p.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var T,A,R;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: Sizes.render,
  parameters: {
    themes: {
      themeOverride: 'Dark'
    }
  }
}`,...(R=(A=m.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var B,O,P;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: function Render(args) {
    const [errors, setErrors] = useState([]);
    const [files, setFiles] = useState([]);
    const handleOnDrop = (acceptedFiles, rejectedFiles) => {
      setErrors(prev => [...prev, ...rejectedFiles]);
      setFiles(prev => [...prev, ...acceptedFiles]);
    };
    return <Stack gap="4x">
        <FileSelector hasError={isNonEmptyArray(errors)} onFilesDrop={handleOnDrop} {...args} />
        {files.map(file => <File key={\`\${file.name}-accepted\`} file={file} />)}
        {errors.map(error => <File key={\`\${error.file.name}-rejected\`} errors={error.errors} file={error.file} />)}
      </Stack>;
  },
  args: {
    accept: {
      'image/png': ['.png']
    },
    instructionsText: '.png only, file size between 100kB and 400kB, up to 2 files',
    maxFiles: 2,
    maxFileSize: 400 * 1024,
    minFileSize: 100 * 1024,
    multiple: true
  },
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const Ge=["Playground","Sizes","WithError","Disabled","DarkMode","Example"];export{m as DarkMode,p as Disabled,c as Example,n as Playground,s as Sizes,l as WithError,Ge as __namedExportsOrder,qe as default};
//# sourceMappingURL=FileSelector.stories-CXJCtUTg.js.map
