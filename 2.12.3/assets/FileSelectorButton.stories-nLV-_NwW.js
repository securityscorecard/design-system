import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as p}from"./index-ClcD9ViR.js";import{F as g}from"./FileSelectorButton-BHJL7U17.js";import"./index-83j-rV9N.js";import{S as E}from"./space.enums-FzolKu9U.js";import{T as l,b as k}from"./index-SvgRUxZC.js";import{S as F}from"./index-CqL4JSrw.js";import{S as D}from"./index-N2e0qnpI.js";import{i as T}from"./isNonEmptyArray-MQllCXeo.js";import{P as w}from"./Padbox-CBhO8TxM.js";import{I as z}from"./Inline.enums-BoodrCNm.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DZXJ-YQi.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./Button-D1_vamon.js";import"./components-BlntQQgH.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./index-C8h7t8oK.js";import"./Icon-Dys2AeEE.js";import"./index-CajKmcpa.js";import"./index-D7OXBHVI.js";import"./constants-C4Oh6sKJ.js";import"./_isObject-BZZHHNGj.js";import"./useLogger-CA2WAjqk.js";import"./DSProvider-Cqa5do1Y.js";import"./index-_KdZNTQd.js";import"./theme-B4UkYPRv.js";import"./colors-BJBAFLAc.js";import"./index-BsiwOcqW.js";import"./Spinner-DA8xU7I2.js";import"./prop-C6y-wj7q.js";import"./Cluster-wkODOmrt.js";import"./isNotEmpty-De95qR8d.js";import"./isFunction-DJDWul57.js";import"./pluck-DtgIh6Gb.js";const de={component:g,argTypes:{multiple:{control:"boolean",description:"Allows to select multiple files",table:{type:{summary:"boolean"}}},accept:{control:"object",description:"Accepted file types, in form of object where keys are file mime types and value is a array with supported file extensions. If an empty array is provided as a value all extensions are accepted.Examples: `{ 'image/png': [ '.png' ] }` will accept only PNG images, `{ 'image/*': [] }` will accept any image with any extension.",table:{type:{summary:"Record<string, Array<string>>"}}},maxFiles:{control:"number",description:"The maximum number of dropped files",table:{type:{summary:"number"}}},onFilesDrop:{control:{disable:!0},table:{type:{summary:"<T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void"}}},onFilesAccepted:{control:{disable:!0},table:{type:{summary:"<T extends File>(files: T[], event: DropEvent) => void"}}},onFilesRejected:{control:{disable:!0},table:{type:{summary:"(fileRejections: FileRejection[], event: DropEvent) => void"}}},onFileDialogCancel:{control:{disable:!0},description:"Callback fired when file dialog is closed with no selection",table:{type:{summary:"() => void"}}},onFileDialogOpen:{control:{disable:!0},description:"Callback fired when dialog is opened",table:{type:{summary:"() => void"}}},validator:{control:{disable:!0},description:"Custom validation function. It must return null if there are no errors.",table:{type:{summary:"<T extends File>(file: T) => FileError | readonly FileError[] | null"}}}},args:{accept:{"image/*":[]}},parameters:{docs:{description:{component:"```jsx\nimport { FileSelectorButton } from '@securityscorecard/design-system';\n```"}}}},i={parameters:{screenshot:{skip:!0}}},m=({file:n,errors:t=[]})=>e.jsx(D,{style:{borderColor:T(t)?"var(--sscds-color-border-input-error)":void 0},hasBorder:!0,children:e.jsxs(w,{paddingSize:"2x",children:[e.jsxs(z,{gap:"2x",justify:"space-between",children:[e.jsx(l,{isBold:!0,children:n.name}),e.jsxs(l,{children:[Math.floor(n.size/1024)," kB"]})]}),e.jsx(F,{children:t.map(o=>e.jsx(l,{size:"sm",variant:k.danger,children:o.message},o.code))})]})}),s={render:function(t){const[o,b]=p.useState([]),[j,h]=p.useState([]),S=(r,v)=>{b(a=>[...a,...v]),h(a=>[...a,...r])};return e.jsxs(F,{gap:E.md,children:[e.jsx(g,{onFilesDrop:S,...t}),j.map(r=>e.jsx(m,{file:r},`${r.name}-accepted`)),o.map(r=>e.jsx(m,{errors:r.errors,file:r.file},`${r.file.name}-rejected`))]})},args:{accept:{"image/png":[".png"]},maxFiles:2,maxFileSize:400*1024,minFileSize:100*1024,multiple:!0},parameters:{screenshot:{skip:!0}}};var c,d,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const ue=["Playground","Example"];export{s as Example,i as Playground,ue as __namedExportsOrder,de as default};
//# sourceMappingURL=FileSelectorButton.stories-nLV-_NwW.js.map
