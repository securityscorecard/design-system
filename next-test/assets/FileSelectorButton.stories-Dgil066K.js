import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as p}from"./index-ClcD9ViR.js";import{F as g}from"./FileSelectorButton-wPr_LlmR.js";import"./index-D-VPAycD.js";import{S as E}from"./space.enums-BIVz6JhH.js";import{T as l,b as k}from"./index-fVh6sz_B.js";import{S as F}from"./index-CJqnHCRB.js";import{S as D}from"./index-D4bv78R3.js";import{i as T}from"./isNonEmptyArray-C4wLiQGd.js";import{P as w}from"./Padbox-QeDNAg-Y.js";import{I as z}from"./Inline-CJoeeTWo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DZXJ-YQi.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./Button-F6ZYDBEp.js";import"./components-C9ZynCTM.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-t408_oKr.js";import"./Icon-CwDBfXxP.js";import"./index-BLQl-HhB.js";import"./index-C2fNon3Z.js";import"./constants-CHqWh-7J.js";import"./_isObject-BZZHHNGj.js";import"./slice-a4xO8Rfj.js";import"./useLogger-BIFF4Ira.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./index-DKZQhKLO.js";import"./Spinner-C4Y4qwgQ.js";import"./Inline.enums-L64S19IZ.js";import"./Cluster-EcHytK4z.js";import"./prop-DxwKVRPv.js";import"./isNotEmpty-Cz0KqVUK.js";import"./isFunction-HfV2yBmy.js";import"./pluck-CostYriq.js";const fe={component:g,argTypes:{multiple:{control:"boolean",description:"Allows to select multiple files",table:{type:{summary:"boolean"}}},accept:{control:"object",description:"Accepted file types, in form of object where keys are file mime types and value is a array with supported file extensions. If an empty array is provided as a value all extensions are accepted.Examples: `{ 'image/png': [ '.png' ] }` will accept only PNG images, `{ 'image/*': [] }` will accept any image with any extension.",table:{type:{summary:"Record<string, Array<string>>"}}},maxFiles:{control:"number",description:"The maximum number of dropped files",table:{type:{summary:"number"}}},onFilesDrop:{control:{disable:!0},table:{type:{summary:"<T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void"}}},onFilesAccepted:{control:{disable:!0},table:{type:{summary:"<T extends File>(files: T[], event: DropEvent) => void"}}},onFilesRejected:{control:{disable:!0},table:{type:{summary:"(fileRejections: FileRejection[], event: DropEvent) => void"}}},onFileDialogCancel:{control:{disable:!0},description:"Callback fired when file dialog is closed with no selection",table:{type:{summary:"() => void"}}},onFileDialogOpen:{control:{disable:!0},description:"Callback fired when dialog is opened",table:{type:{summary:"() => void"}}},validator:{control:{disable:!0},description:"Custom validation function. It must return null if there are no errors.",table:{type:{summary:"<T extends File>(file: T) => FileError | readonly FileError[] | null"}}}},args:{accept:{"image/*":[]}},parameters:{docs:{description:{component:"```jsx\nimport { FileSelectorButton } from '@securityscorecard/design-system';\n```"}}}},i={parameters:{screenshot:{skip:!0}}},m=({file:n,errors:t=[]})=>e.jsx(D,{style:{borderColor:T(t)?"var(--sscds-color-border-input-error)":void 0},hasBorder:!0,children:e.jsxs(w,{paddingSize:"2x",children:[e.jsxs(z,{gap:"2x",justify:"space-between",children:[e.jsx(l,{isBold:!0,children:n.name}),e.jsxs(l,{children:[Math.floor(n.size/1024)," kB"]})]}),e.jsx(F,{children:t.map(o=>e.jsx(l,{size:"sm",variant:k.danger,children:o.message},o.code))})]})}),s={render:function(t){const[o,b]=p.useState([]),[j,h]=p.useState([]),S=(r,v)=>{b(a=>[...a,...v]),h(a=>[...a,...r])};return e.jsxs(F,{gap:E.md,children:[e.jsx(g,{onFilesDrop:S,...t}),j.map(r=>e.jsx(m,{file:r},`${r.name}-accepted`)),o.map(r=>e.jsx(m,{errors:r.errors,file:r.file},`${r.file.name}-rejected`))]})},args:{accept:{"image/png":[".png"]},maxFiles:2,maxFileSize:400*1024,minFileSize:100*1024,multiple:!0},parameters:{screenshot:{skip:!0}}};var c,d,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const ye=["Playground","Example"];export{s as Example,i as Playground,ye as __namedExportsOrder,fe as default};
//# sourceMappingURL=FileSelectorButton.stories-Dgil066K.js.map
