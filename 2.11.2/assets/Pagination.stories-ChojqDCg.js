import{j as n}from"./jsx-runtime-CfatFE5O.js";import{r as f}from"./index-ClcD9ViR.js";import{g as M,T as r,c as I}from"./Template-C7mirvQL.js";import{D as l}from"./Datatable-phT48B93.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-xJp9Kd2E.js";import"./index-C6jSWOeZ.js";import"./Pill-CJpEBFcq.js";import"./index-DxcpycWO.js";import"./styled-components.browser.esm-6IU7b-y2.js";import"./PillRemoveButton-ClKFZ-rf.js";import"./index-0K9MvtJv.js";import"./constants-CHqWh-7J.js";import"./index-BsP7FXMl.js";import"./space.enums-BIVz6JhH.js";import"./_isObject-BZZHHNGj.js";import"./DSProvider-oeie4wyM.js";import"./index-_KdZNTQd.js";import"./theme-VOBSdC0d.js";import"./colors-2yNNI7_i.js";import"./minus-rUvolOxF.js";import"./checkCircleSolid-D_DFWg_A.js";import"./index-BQsZAX6J.js";import"./index-CeGY6Ei3.js";import"./slice-a4xO8Rfj.js";import"./index-Ozu0POZL.js";import"./Padbox-DPWp-bzC.js";import"./index-BnuP2NC2.js";import"./prop-CVCEMdxf.js";import"./Inline.enums-Bs7GfXP0.js";import"./Cluster-DiauHNp4.js";import"./useLogger-BVsKAY55.js";import"./index-Ctu4WhxL.js";import"./Icon-DlnuB__l.js";import"./index-DbwGX_n3.js";import"./PaginationToolbar-DHqxXCOO.js";import"./menuElements-CccNpS3Y.js";import"./index-gVnCqFBT.js";import"./IconButton-C7WqqEmt.js";import"./components-D0pVc94e.js";import"./index-D0FOmvC8.js";import"./Spinner-BXcIOPtB.js";import"./useSafeTranslation-BoMGciE_.js";import"./en-US-DTEh3xIi.js";import"./Button-_T-PuNCu.js";import"./pluck-DBmb9H0q.js";import"./useContainerQuery-Cae4Sqz1.js";import"./Skeleton-RIrARYRh.js";import"./useLocalStorageState-D2NPfI6N.js";import"./index-BlLyJPr3.js";import"./index-BmLnN1YK.js";import"./Tooltip-jY7iBNOF.js";import"./FloatingContext-Iczo9egI.js";import"./index-Cal9QCFP.js";import"./CloseButton-CA3EgCdD.js";import"./sortable.esm-C-iNasD-.js";import"./modifiers.esm-ByjRBgE8.js";function o(){var a="/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/mocks/externalData.ts",t="4c7d2757bd31e272aca99df5afc881a499a64877",s=window,e="__coverage__",m={path:"/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/mocks/externalData.ts",statementMap:{0:{start:{line:2,column:13},end:{line:2,column:30}},1:{start:{line:3,column:25},end:{line:9,column:1}},2:{start:{line:4,column:2},end:{line:8,column:4}},3:{start:{line:10,column:24},end:{line:17,column:1}},4:{start:{line:13,column:17},end:{line:13,column:26}},5:{start:{line:14,column:2},end:{line:16,column:4}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:25},end:{line:3,column:26}},loc:{start:{line:3,column:38},end:{line:9,column:1}},line:3},1:{name:"(anonymous_1)",decl:{start:{line:10,column:24},end:{line:10,column:25}},loc:{start:{line:12,column:6},end:{line:17,column:1}},line:12}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0},b:{},inputSourceMap:{version:3,file:null,sources:["/Users/radekpodrazky/Projects/design-system/src/components/DatatableV2/mocks/externalData.ts"],names:["generateData","data","fetchData","options","entries","slice","pageIndex","pageSize","pageCount","Math","ceil","length","rowCount","useQuery","queryFn","result"],mappings:"AAAA,SAAqBA,oBAAoB;AAQzC,MAAMC,OAAOD,aAAa,GAAG;AACtB,aAAME,YAAYA,CAACC,YAGZ;AACZ,SAAO;AAAA,IACLC,SAASH,KAAKI,MACZF,QAAQG,YAAYH,QAAQI,WAC3BJ,QAAQG,YAAY,KAAKH,QAAQI,QACpC;AAAA,IACAC,WAAWC,KAAKC,KAAKT,KAAKU,SAASR,QAAQI,QAAQ;AAAA,IACnDK,UAAUX,KAAKU;AAAAA,EACjB;AACF;AAGO,aAAME,WAAWA,CAAC;AAAA,EACvBC;AAIF,MAAM;AACJ,QAAMC,SAASD,QAAQ;AACvB,SAAO;AAAA,IACLb,MAAMc;AAAAA,EACR;AACF;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"4c7d2757bd31e272aca99df5afc881a499a64877"},i=s[e]||(s[e]={});(!i[a]||i[a].hash!==t)&&(i[a]=m);var A=i[a];return o=function(){return A},A}o();const c=(o().s[0]++,M(100));o().s[1]++;const Q=a=>(o().f[0]++,o().s[2]++,{entries:c.slice(a.pageIndex*a.pageSize,(a.pageIndex+1)*a.pageSize),pageCount:Math.ceil(c.length/a.pageSize),rowCount:c.length});o().s[3]++;const k=({queryFn:a})=>{o().f[1]++;const t=(o().s[4]++,a());return o().s[5]++,{data:t}},_a={title:"components/DatatableV2/Pagination",component:l,parameters:{screenshot:{skip:!0}}},b=r.bind({});b.args=r.args;b.parameters={screenshot:{skip:!1}};const D=r.bind({});D.args={...r.args,enablePagination:!1};D.parameters={screenshot:{skip:!1}};const v=r.bind({});v.args={...r.args,enableRowsPerPage:!0};v.parameters={screenshot:{skip:!1}};const x=r.bind({});x.args={...r.args,rowsPerPageOptions:[5,10,15],enableRowsPerPage:!0};x.parameters={screenshot:{skip:!1}};const y=r.bind({});y.args={...r.args,initialState:{pagination:{pageSize:10,pageIndex:1}}};y.parameters={screenshot:{skip:!1}};const p=a=>{const[t,s]=f.useState({pageIndex:1,pageSize:10});return n.jsxs(n.Fragment,{children:[n.jsx(l,{state:{pagination:t},onPaginationChange:s,...a}),n.jsxs("div",{children:[n.jsx("strong",{children:"Debug:"}),n.jsx("pre",{children:JSON.stringify(t,null,2)})]})]})};p.args=r.args;const g=a=>{var m,i,A;const[t,s]=f.useState({pageIndex:0,pageSize:10}),e=k({queryKey:["data",t],queryFn:()=>Q(t),keepPreviousData:!0});return n.jsxs(n.Fragment,{children:[n.jsx(l,{...a,columns:I,data:((m=e==null?void 0:e.data)==null?void 0:m.entries)??[],pageCount:((i=e==null?void 0:e.data)==null?void 0:i.pageCount)??-1,rowCount:(A=e==null?void 0:e.data)==null?void 0:A.rowCount,state:{pagination:t},manualPagination:!0,onPaginationChange:s}),n.jsxs("div",{children:[n.jsx("strong",{children:"Debug:"}),n.jsx("pre",{children:JSON.stringify(t,null,2)})]})]})};p.__docgenInfo={description:"",methods:[],displayName:"PaginationManagedState"};g.__docgenInfo={description:"",methods:[],displayName:"ManualPagination"};var u,d,C;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10
  });
  return <>
      <Datatable state={{
      pagination
    }} onPaginationChange={setPagination} {...args} />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(pagination, null, 2)}</pre>
      </div>
    </>;
}`,...(C=(d=p.parameters)==null?void 0:d.docs)==null?void 0:C.source}}};var P,h,S;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  });
  const dataQuery = useQuery({
    queryKey: ['data', pagination],
    queryFn: () => fetchData(pagination),
    keepPreviousData: true
  });
  return <>
      <Datatable {...args} columns={columns} data={dataQuery?.data?.entries ?? []} pageCount={dataQuery?.data?.pageCount ?? -1} rowCount={dataQuery?.data?.rowCount} state={{
      pagination
    }} manualPagination onPaginationChange={setPagination} />
      <div>
        <strong>Debug:</strong>
        <pre>{JSON.stringify(pagination, null, 2)}</pre>
      </div>
    </>;
}`,...(S=(h=g.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const za=["PaginationEnabled","DisabledPagination","EnabledRowsPerPage","CustomRowsPerPageOptions","InitialPagination","PaginationManagedState","ManualPagination"];export{x as CustomRowsPerPageOptions,D as DisabledPagination,v as EnabledRowsPerPage,y as InitialPagination,g as ManualPagination,b as PaginationEnabled,p as PaginationManagedState,za as __namedExportsOrder,_a as default};
//# sourceMappingURL=Pagination.stories-ChojqDCg.js.map
