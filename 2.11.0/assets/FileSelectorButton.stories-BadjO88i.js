import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as p}from"./index-BwDkhjyp.js";import{F as g}from"./FileSelectorButton-FCMZiaX8.js";import"./index-BeaoyfpW.js";import{S as E}from"./space.enums-FzolKu9U.js";import{T as l,b as k}from"./index-iel8gM5l.js";import{S as F}from"./index-CHCeFjJF.js";import{S as D}from"./index-B9Ea3eoS.js";import{i as T}from"./isNonEmptyArray-CJggKFx3.js";import{P as w}from"./Padbox-D7p1agbO.js";import{I as z}from"./Inline.enums-Cxnp2INc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-wZhUVDj8.js";import"./index-Dk74W0Oi.js";import"./index-CVyJwDg7.js";import"./Button-CXTuE1Mx.js";import"./components-KPog_F_-.js";import"./styled-components.browser.esm-Dp0SDG1F.js";import"./index-nYlI4MS_.js";import"./Icon-BDYv1UkU.js";import"./index-CajKmcpa.js";import"./index-DseqSOhp.js";import"./constants-C4Oh6sKJ.js";import"./_isObject-BZZHHNGj.js";import"./useLogger-BV2AIPN5.js";import"./DSProvider-CJQA90er.js";import"./extends-CF3RwP-h.js";import"./index-DhoXBIRq.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./index-BZ_qC4EF.js";import"./Spinner-CMiMP2Eh.js";import"./prop-C6y-wj7q.js";import"./Cluster-x6SODxoc.js";import"./isNotEmpty-2CrqG7_E.js";import"./isFunction-DJDWul57.js";import"./pluck-DtgIh6Gb.js";const ue={component:g,argTypes:{multiple:{control:"boolean",description:"Allows to select multiple files",table:{type:{summary:"boolean"}}},accept:{control:"object",description:"Accepted file types, in form of object where keys are file mime types and value is a array with supported file extensions. If an empty array is provided as a value all extensions are accepted.Examples: `{ 'image/png': [ '.png' ] }` will accept only PNG images, `{ 'image/*': [] }` will accept any image with any extension.",table:{type:{summary:"Record<string, Array<string>>"}}},maxFiles:{control:"number",description:"The maximum number of dropped files",table:{type:{summary:"number"}}},onFilesDrop:{control:{disable:!0},table:{type:{summary:"<T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void"}}},onFilesAccepted:{control:{disable:!0},table:{type:{summary:"<T extends File>(files: T[], event: DropEvent) => void"}}},onFilesRejected:{control:{disable:!0},table:{type:{summary:"(fileRejections: FileRejection[], event: DropEvent) => void"}}},onFileDialogCancel:{control:{disable:!0},description:"Callback fired when file dialog is closed with no selection",table:{type:{summary:"() => void"}}},onFileDialogOpen:{control:{disable:!0},description:"Callback fired when dialog is opened",table:{type:{summary:"() => void"}}},validator:{control:{disable:!0},description:"Custom validation function. It must return null if there are no errors.",table:{type:{summary:"<T extends File>(file: T) => FileError | readonly FileError[] | null"}}}},args:{accept:{"image/*":[]}},parameters:{docs:{description:{component:"```jsx\nimport { FileSelectorButton } from '@securityscorecard/design-system';\n```"}}}},i={parameters:{screenshot:{skip:!0}}},m=({file:n,errors:t=[]})=>e.jsx(D,{style:{borderColor:T(t)?"var(--sscds-color-border-input-error)":void 0},hasBorder:!0,children:e.jsxs(w,{paddingSize:"2x",children:[e.jsxs(z,{gap:"2x",justify:"space-between",children:[e.jsx(l,{isBold:!0,children:n.name}),e.jsxs(l,{children:[Math.floor(n.size/1024)," kB"]})]}),e.jsx(F,{children:t.map(o=>e.jsx(l,{size:"sm",variant:k.danger,children:o.message},o.code))})]})}),s={render:function(t){const[o,b]=p.useState([]),[j,h]=p.useState([]),S=(r,v)=>{b(a=>[...a,...v]),h(a=>[...a,...r])};return e.jsxs(F,{gap:E.md,children:[e.jsx(g,{onFilesDrop:S,...t}),j.map(r=>e.jsx(m,{file:r},`${r.name}-accepted`)),o.map(r=>e.jsx(m,{errors:r.errors,file:r.file},`${r.file.name}-rejected`))]})},args:{accept:{"image/png":[".png"]},maxFiles:2,maxFileSize:400*1024,minFileSize:100*1024,multiple:!0},parameters:{screenshot:{skip:!0}}};var c,d,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  }
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var f,y,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: function Render(args) {
    const [errors, setErrors] = useState([]);
    const [files, setFiles] = useState([]);
    const handleOnDrop = (acceptedFiles, rejectedFiles) => {
      setErrors(prev => [...prev, ...rejectedFiles]);
      setFiles(prev => [...prev, ...acceptedFiles]);
    };
    return <Stack gap={SpaceSizes.md}>
        <FileSelectorButton onFilesDrop={handleOnDrop} {...args} />
        {files.map(file => <File key={\`\${file.name}-accepted\`} file={file} />)}
        {errors.map(error => <File key={\`\${error.file.name}-rejected\`} errors={error.errors} file={error.file} />)}
      </Stack>;
  },
  args: {
    accept: {
      'image/png': ['.png']
    },
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
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const fe=["Playground","Example"];export{s as Example,i as Playground,fe as __namedExportsOrder,ue as default};
//# sourceMappingURL=FileSelectorButton.stories-BadjO88i.js.map
