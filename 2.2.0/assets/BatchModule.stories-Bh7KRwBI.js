import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as E}from"./index-CTjT7uj6.js";import{a as j}from"./actions-16IZvRih.js";import{B as i}from"./BatchModule-D8Rgyd2L.js";import{D as n}from"./Datatable.store-D58zn130.js";import{d as c}from"./defaultConfigs-DJfQTMcK.js";import{M as C}from"./react-router-dom-Dge5SpE2.js";import"./chunk-454WOBUV-DWuJqIWT.js";import"./v4-D8aEg3BZ.js";import"./Inline-BUcOfxrg.js";import"./space-1LtLrmuu.js";import"./index-BRV0Se7Z.js";import"./index-C7IrpltL.js";import"./flex.types-BrkCVx66.js";import"./prop-DG2n0FAQ.js";import"./Icon-4JNizDXH.js";import"./index-DFvsTZbx.js";import"./useLogger-Cd66DVRc.js";import"./DSProvider-IYcK3cWD.js";import"./extends-CF3RwP-h.js";import"./index-DIVhMF2i.js";import"./theme-Cr_I21Pv.js";import"./colors-CyEChGtp.js";import"./Tooltip-D-FMcIGF.js";import"./Surface-DpLLkhSd.js";import"./Padbox-DKEfmyAv.js";import"./Stack-D3Wl5zWT.js";import"./Cluster-DAeUfwZi.js";import"./FloatingContext-C7r7lnEb.js";import"./ColumnsControls-gjbtFimJ.js";import"./ControlDropdown-DaOWOnEl.js";import"./DSThemeOverride-BduN1ykm.js";import"./Button.enums-DxFt5drl.js";import"./BaseButton-D1TUSAxp.js";import"./require-router-link-DHB4GfDh.js";import"./spacing.types-C9Yu1wmA.js";import"./Spinner-CJrCb2wC.js";import"./isNotNull-B1xFkUZ3.js";import"./noop-CLoMDX4X.js";import"./Button-vDRI25at.js";import"./CloseButton-Ddazfl7Y.js";import"./Heading-C-vyOsFk.js";import"./ControlledDropdown-D7eVtMr8.js";import"./usePopper-B6Vq3Q19.js";import"./useOuterCallback-Mi4Xn43N.js";import"./mergeRefs-sWHjowoU.js";import"./pick-Dgh-9MLD.js";import"./SortableList-DoUudND8.js";import"./sortable.esm-CWiKwvcN.js";import"./modifiers.esm-D9Gd6yO_.js";import"./Text-DTP2ysh1.js";import"./lt-BJYS4bbv.js";import"./index-CJIF_j5S.js";import"./isEmptyArray-9kLVyzWX.js";import"./isArray-D_RvpTHQ.js";import"./both-peGKknMH.js";import"./Checkbox-DtOI_Iry.js";import"./check-DkA7BUy7.js";import"./minus-DR9WSvoQ.js";import"./Label-Bgxc31x7.js";import"./Input-CflEDIf9.js";import"./Message-6KzRW5US.js";import"./Paragraph-4LRW5eCl.js";import"./MultiValueInput-D_NZt4Q-.js";import"./Pill-3kaa-68-.js";import"./PillRemoveButton-CS7bxu8m.js";import"./PillLabel-CLRUhFaA.js";import"./gt-mgGmHlKl.js";import"./isNonEmptyArray-CGykYah7.js";import"./isNotEmpty-Dh9FcTil.js";import"./isNonEmptyString-zJHoJ8N4.js";import"./trim-C2DDSsAv.js";import"./take-Kg9EtPoO.js";import"./Password-DMckXrPE.js";import"./Radio-DvXQpNUS.js";import"./Select-D2oYJWhQ.js";import"./unsupportedIterableToArray-xuqNRLo1.js";import"./setPrototypeOf-DgZC2w_0.js";import"./action.types-CSW_hKjS.js";import"./isNotNilOrEmpty-cGK6as13.js";import"./isNilOrEmpty-MGEuPZ7r.js";import"./isNil-C1Q7XXIj.js";import"./sortBy-BCHo5fjk.js";import"./CreatableSelect-DuZZJGpq.js";import"./Range-BxXBtghR.js";import"./Switch-BouC_1R9.js";import"./subtract-BgQ2JsUW.js";import"./TextArea-dzhcLn8B.js";import"./SearchBar-CgCaR-wq.js";import"./SegmentedToggleItem-CNyXGxSM.js";import"./BaseTabLabel-QgyaGmc-.js";import"./InputGroup-pSAtlOG3.js";import"./ControlButton-Bah5uQC8.js";import"./Badge-BMh3jQcX.js";import"./BatchActions-DiRQPLmd.js";import"./DropdownMenu-0cqzWS2f.js";import"./Dropdown-Bz5N8_Wi.js";import"./inheritsLoose-B6jfs0L0.js";import"./DropdownMenu.types-BiMILHFG.js";import"./ElementCounter-DYqCrMI5.js";import"./all-iEGJVrnb.js";import"./BaseTable.types-Bwas8yEY.js";import"./BaseTable.styles-vsfZhh3j.js";import"./BaseLink-D20DZbIA.js";import"./ElementLabel-BFX3DrvP.js";import"./flip-CEUNNqfM.js";import"./ellipsisH-CxP8BjCT.js";import"./Footer-BBoJAj4g.js";import"./tiny-invariant-CopsF_GD.js";const Pr={title:"components/Datatable/internalComponents/BatchModule",component:i,decorators:[t=>e.jsx(C,{children:t()})],parameters:{viewMode:"story"},argTypes:{actions:{table:{defaultValue:{summary:"[]"},type:{summary:"Action[]",detail:`| {
    label: string;
    name: string;
    onClick: () => void;
  }
| {
    label: string;
    name: string;
    to: To;
    onClick?: () => void;
    href?: never;
    subActions?: never;
  }
| {
    label: string;
    name: string;
    href: string;
    onClick?: () => void;
    to?: never;
    subActions?: never;
  }
| {
    label: string;
    name: string;
    subActions: ActionKinds[];
    onClick?: () => void;
    href?: never;
    to?: never;
  }`}}},shouldShowSelectionDropdown:{control:{type:"boolean"},table:{defaultValue:{summary:c.hasSelection.toString()}}}}},r=t=>e.jsx(i,{...t});r.args={actions:[],dataSize:107e4,hasSelection:c.hasSelection,hasOnlyPerPageSelection:c.hasOnlyPerPageSelection,columns:{isButtonDisplayed:!1}};r.parameters={screenshot:{skip:!0}};const s=t=>(E.useEffect(()=>(n.update(o=>{o.selectedIds=["a","b","c","d","e","f"]}),()=>{n.update(o=>{o.selectedIds=[]})}),[]),e.jsx(i,{...t}));s.args=r.args;const a=t=>(E.useEffect(()=>(n.update(o=>{o.selectedIds=["a","b","c","d","e","f"]}),()=>{n.update(o=>{o.selectedIds=[]})}),[]),e.jsx(i,{...t}));a.args={...r.args,hasOnlyPerPageSelection:!1};const m=t=>e.jsx(i,{...t});m.args={...r.args,actions:j};const p=t=>e.jsx(i,{...t});p.args={...r.args,columns:{isButtonDisplayed:!0}};var l,d,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"args => <BatchModule {...args} />",...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,h,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  useEffect(() => {
    DatatableStore.update(s => {
      s.selectedIds = ['a', 'b', 'c', 'd', 'e', 'f'];
    });
    return () => {
      DatatableStore.update(s => {
        s.selectedIds = [];
      });
    };
  }, []);
  return <BatchModule {...args} />;
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,b,y;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  useEffect(() => {
    DatatableStore.update(s => {
      s.selectedIds = ['a', 'b', 'c', 'd', 'e', 'f'];
    });
    return () => {
      DatatableStore.update(s => {
        s.selectedIds = [];
      });
    };
  }, []);
  return <BatchModule {...args} />;
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,B,M;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:"args => <BatchModule {...args} />",...(M=(B=m.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var v,D,A;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:"args => <BatchModule {...args} />",...(A=(D=p.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const Wr=["Playground","WithSelectedRows","WithSelectedRowsAndExclusionLogic","WithBatchActions","WithColumns"];export{r as Playground,m as WithBatchActions,p as WithColumns,s as WithSelectedRows,a as WithSelectedRowsAndExclusionLogic,Wr as __namedExportsOrder,Pr as default};
