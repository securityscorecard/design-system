import{D as l}from"./Datatable-kA5bJlUu.js";import"./jsx-runtime-CfatFE5O.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-DUeFF7SW.js";import"./index-D5D9nAa6.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./styled-components.browser.esm-C8HMneKs.js";import"./DSProvider-_CMlen06.js";import"./index-Dw8zQ6WV.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-CjRByw3L.js";import"./SelectionToolbar-CBcglnkU.js";import"./index-BV_a_HQq.js";import"./Icon-D5TBsI6x.js";import"./index-DRm3KUNF.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-Dg7OEBei.js";import"./index-CT2OIHT-.js";import"./Padbox-CTuFGL01.js";import"./index-BXECzo_T.js";import"./prop-gA1VFyoz.js";import"./Inline-ErbB6jzf.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-D835thia.js";import"./index-DFY1Tdgr.js";import"./Button-ZXXHu2Zy.js";import"./components-C4-LvCWm.js";import"./index-VHVnCIxC.js";import"./Spinner-PSPqNyRK.js";import"./useSafeTranslation-C25o8IhV.js";import"./en-US-CvthOZgl.js";import"./pluck-B5Qa9yNi.js";import"./IconButton-DxUJpeDG.js";import"./useContainerQuery-DIj571oY.js";import"./Skeleton-CP354bxR.js";import"./useLocalStorageState-UxkHlwiN.js";import"./Paragraph-KsOPkqiG.js";import"./index-BI_Tj3uZ.js";import"./Tooltip-BXm6ehC_.js";import"./FloatingContext-f-xOTKfR.js";import"./index-B79z5W8X.js";import"./ControlledDropdown-DploOwaN.js";import"./index-slDD0MBU.js";import"./isFunction-B5WoXTNq.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./usePopper-DBEKEo6Z.js";import"./useOuterCallback--QVL0YIA.js";import"./noop-CGDyLuY9.js";import"./mergeRefs-C43w_hK8.js";import"./Dropdown-D7wPq1N3.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./sortable.esm-Dp2JVDVv.js";import"./modifiers.esm-ByjRBgE8.js";const yr={title:"DatatableV2/HorizontalScrollbar",component:l,parameters:{docs:{description:{component:"Demonstrates the keyboard-accessible horizontal scrollbar functionality."}}},argTypes:{id:{control:"text"},enableRowSelection:{control:"boolean"},enableSorting:{control:"boolean"}}},m=[{accessorKey:"name",header:"Name",size:300},{accessorKey:"surname",header:"Surname",size:300},{accessorKey:"color",header:"Color",size:300},{accessorKey:"extra1",header:"Extra Column 1",size:300},{accessorKey:"extra2",header:"Extra Column 2",size:300},{accessorKey:"extra3",header:"Extra Column 3",size:300},{accessorKey:"extra4",header:"Extra Column 4",size:300},{accessorKey:"extra5",header:"Extra Column 5",size:300}],c=[{name:"John",surname:"Doe",color:"red",extra1:"data1",extra2:"data2",extra3:"data3",extra4:"data4",extra5:"data5"},{name:"Jane",surname:"Smith",color:"blue",extra1:"data6",extra2:"data7",extra3:"data8",extra4:"data9",extra5:"data10"},{name:"Bob",surname:"Johnson",color:"green",extra1:"data11",extra2:"data12",extra3:"data13",extra4:"data14",extra5:"data15"},{name:"Alice",surname:"Brown",color:"yellow",extra1:"data16",extra2:"data17",extra3:"data18",extra4:"data19",extra5:"data20"},{name:"Charlie",surname:"Wilson",color:"purple",extra1:"data21",extra2:"data22",extra3:"data23",extra4:"data24",extra5:"data25"}],r={args:{id:"horizontal-scrollbar-demo",data:c,columns:m,enableRowSelection:!1,enableSorting:!0},parameters:{docs:{description:{story:"This table has wide columns that require horizontal scrolling. Use Tab to navigate to the horizontal scrollbar, then use arrow keys to scroll left/right, Home to scroll to start, End to scroll to end, and Page Up/Down for larger scroll increments."}}}},o={args:{id:"no-horizontal-scrollbar-demo",data:[{name:"John",surname:"Doe",color:"red"},{name:"Jane",surname:"Smith",color:"blue"},{name:"Bob",surname:"Johnson",color:"green"}],columns:[{accessorKey:"name",header:"Name"},{accessorKey:"surname",header:"Surname"},{accessorKey:"color",header:"Color"}],enableRowSelection:!1,enableSorting:!0},parameters:{docs:{description:{story:"This table has narrow columns that fit within the viewport, so no horizontal scrollbar is needed."}}}};var e,a,t;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    id: 'horizontal-scrollbar-demo',
    data: wideData,
    columns: wideColumns,
    enableRowSelection: false,
    enableSorting: true
  },
  parameters: {
    docs: {
      description: {
        story: 'This table has wide columns that require horizontal scrolling. Use Tab to navigate to the horizontal scrollbar, then use arrow keys to scroll left/right, Home to scroll to start, End to scroll to end, and Page Up/Down for larger scroll increments.'
      }
    }
  }
}`,...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var n,s,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: 'no-horizontal-scrollbar-demo',
    data: [{
      name: 'John',
      surname: 'Doe',
      color: 'red'
    }, {
      name: 'Jane',
      surname: 'Smith',
      color: 'blue'
    }, {
      name: 'Bob',
      surname: 'Johnson',
      color: 'green'
    }],
    columns: [{
      accessorKey: 'name',
      header: 'Name'
    }, {
      accessorKey: 'surname',
      header: 'Surname'
    }, {
      accessorKey: 'color',
      header: 'Color'
    }],
    enableRowSelection: false,
    enableSorting: true
  },
  parameters: {
    docs: {
      description: {
        story: 'This table has narrow columns that fit within the viewport, so no horizontal scrollbar is needed.'
      }
    }
  }
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const zr=["WithHorizontalScrollbar","WithoutHorizontalScrollbar"];export{r as WithHorizontalScrollbar,o as WithoutHorizontalScrollbar,zr as __namedExportsOrder,yr as default};
//# sourceMappingURL=HorizontalScrollbar.stories-BehD67eK.js.map
