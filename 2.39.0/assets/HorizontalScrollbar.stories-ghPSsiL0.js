import{D as l}from"./Datatable-OyjbHefh.js";import"./jsx-runtime-CfatFE5O.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLogger-DYa21xyy.js";import"./index-_M9_Hem9.js";import"./constants-l-41uwkI.js";import"./space.enums-DGrZwzIk.js";import"./_isObject-dmcfxmtS.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./DSProvider-BUAvDvgH.js";import"./index-_KdZNTQd.js";import"./theme-Dt5JqxPR.js";import"./colors-BJBAFLAc.js";import"./PaginationToolbar-BpCqr4bU.js";import"./SelectionToolbar-CxtcSWxD.js";import"./index-r_6u7u1O.js";import"./Icon-B8hMgZcW.js";import"./index-DRm3KUNF.js";import"./index-DbwGX_n3.js";import"./index-DxcpycWO.js";import"./index-BWSvOZ1Q.js";import"./index-Bi90Y8Ou.js";import"./Padbox-D0nj4Q3C.js";import"./index-BeSa3Tgc.js";import"./prop-gA1VFyoz.js";import"./Inline-CzyJe68E.js";import"./Inline.enums-KPT5jvjq.js";import"./Cluster-B_3C_5JL.js";import"./index-CEsunubm.js";import"./Button-DyEaxRsN.js";import"./components-C1DtTrEw.js";import"./index-DGqv0G-5.js";import"./Spinner-CK2vC9iP.js";import"./useSafeTranslation-Bti168uf.js";import"./en-US-DPMKfmiD.js";import"./pluck-B5Qa9yNi.js";import"./IconButton-Dj6dqzV1.js";import"./useContainerQuery-uyIEPHxz.js";import"./Skeleton-DKQ_hNXZ.js";import"./useLocalStorageState-UxkHlwiN.js";import"./Paragraph-DWKg1gwn.js";import"./index-4b3OjfhP.js";import"./Tooltip-BzYJ0pc5.js";import"./FloatingContext-f-xOTKfR.js";import"./ElementLabel-Kzoagp5M.js";import"./index-D9uDVJcd.js";import"./ControlledDropdown-DLp8JOYI.js";import"./index-DDlzge9C.js";import"./isFunction-B5WoXTNq.js";import"./minus-C2f59QhV.js";import"./checkCircleSolid-CXNAtMl8.js";import"./usePopper-m9aO9_-k.js";import"./useOuterCallback-BFSBiNPT.js";import"./noop-CGDyLuY9.js";import"./mergeRefs-C43w_hK8.js";import"./Dropdown-DQCgdoUE.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";const zr={title:"components/DatatableV2/HorizontalScrollbar",component:l,parameters:{docs:{description:{component:"Demonstrates the keyboard-accessible horizontal scrollbar functionality."}}},argTypes:{id:{control:"text"},enableRowSelection:{control:"boolean"},enableSorting:{control:"boolean"}}},m=[{accessorKey:"name",header:"Name",size:300},{accessorKey:"surname",header:"Surname",size:300},{accessorKey:"color",header:"Color",size:300},{accessorKey:"extra1",header:"Extra Column 1",size:300},{accessorKey:"extra2",header:"Extra Column 2",size:300},{accessorKey:"extra3",header:"Extra Column 3",size:300},{accessorKey:"extra4",header:"Extra Column 4",size:300},{accessorKey:"extra5",header:"Extra Column 5",size:300}],c=[{name:"John",surname:"Doe",color:"red",extra1:"data1",extra2:"data2",extra3:"data3",extra4:"data4",extra5:"data5"},{name:"Jane",surname:"Smith",color:"blue",extra1:"data6",extra2:"data7",extra3:"data8",extra4:"data9",extra5:"data10"},{name:"Bob",surname:"Johnson",color:"green",extra1:"data11",extra2:"data12",extra3:"data13",extra4:"data14",extra5:"data15"},{name:"Alice",surname:"Brown",color:"yellow",extra1:"data16",extra2:"data17",extra3:"data18",extra4:"data19",extra5:"data20"},{name:"Charlie",surname:"Wilson",color:"purple",extra1:"data21",extra2:"data22",extra3:"data23",extra4:"data24",extra5:"data25"}],r={args:{id:"horizontal-scrollbar-demo",data:c,columns:m,enableRowSelection:!1,enableSorting:!0},parameters:{docs:{description:{story:"This table has wide columns that require horizontal scrolling. Use Tab to navigate to the horizontal scrollbar, then use arrow keys to scroll left/right, Home to scroll to start, End to scroll to end, and Page Up/Down for larger scroll increments."}}}},o={args:{id:"no-horizontal-scrollbar-demo",data:[{name:"John",surname:"Doe",color:"red"},{name:"Jane",surname:"Smith",color:"blue"},{name:"Bob",surname:"Johnson",color:"green"}],columns:[{accessorKey:"name",header:"Name"},{accessorKey:"surname",header:"Surname"},{accessorKey:"color",header:"Color"}],enableRowSelection:!1,enableSorting:!0},parameters:{docs:{description:{story:"This table has narrow columns that fit within the viewport, so no horizontal scrollbar is needed."}}}};var e,a,t;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const wr=["WithHorizontalScrollbar","WithoutHorizontalScrollbar"];export{r as WithHorizontalScrollbar,o as WithoutHorizontalScrollbar,wr as __namedExportsOrder,zr as default};
//# sourceMappingURL=HorizontalScrollbar.stories-ghPSsiL0.js.map
