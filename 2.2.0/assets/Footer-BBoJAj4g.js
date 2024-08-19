import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{P as o}from"./index-BRV0Se7Z.js";import{_ as N,s as m,h as l,S as P,q as V,k as p,A as k,j as v,P as R}from"./space-1LtLrmuu.js";import"./Surface-DpLLkhSd.js";import{P as I}from"./Padbox-DKEfmyAv.js";import"./Stack-D3Wl5zWT.js";import{I as S}from"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import{S as F}from"./Spinner-CJrCb2wC.js";import{r as w}from"./index-CTjT7uj6.js";import"./Checkbox-DtOI_Iry.js";import{I as T}from"./Input-CflEDIf9.js";import"./Label-Bgxc31x7.js";import"./Message-6KzRW5US.js";import"./MultiValueInput-D_NZt4Q-.js";import"./Password-DMckXrPE.js";import"./Radio-DvXQpNUS.js";import"./Select-D2oYJWhQ.js";import"./CreatableSelect-DuZZJGpq.js";import"./Range-BxXBtghR.js";import"./Switch-BouC_1R9.js";import"./TextArea-dzhcLn8B.js";import"./SearchBar-CgCaR-wq.js";import"./SegmentedToggleItem-CNyXGxSM.js";import"./InputGroup-pSAtlOG3.js";import"./DSProvider-IYcK3cWD.js";import"./DSThemeOverride-BduN1ykm.js";import"./index-DFvsTZbx.js";import"./theme-Cr_I21Pv.js";import{T as D}from"./Text-DTP2ysh1.js";import{I as q,S as x}from"./Icon-4JNizDXH.js";var E=N(function(n,i){for(var a=n(i),r=[];a&&a.length;)r[r.length]=a[0],a=n(a[1]);return r});const O=m(T).withConfig({displayName:"GoToPage__SmallInput",componentId:"sc-1xcwlq-0"})(["padding:",";width:",";height:",";appearance:textfield;&::-webkit-outer-spin-button,&::-webkit-inner-spin-button{appearance:none;margin:0;}&:focus{padding:",";}"],l(8,16),l(72),l(32),l(7,15)),h=({pageCount:e,onPageChange:n})=>{const i=w.useRef(null),a=r=>{const{target:d,key:u}=r,{value:c}=d,s=parseInt(c,10);u==="Enter"&&(s<=0?(n(1),i.current.value="1"):s>e?(n(e),i.current.value=e.toString()):n(s))};return t.jsxs(S,{align:"center",gap:P.md,children:[t.jsx(D,{as:"label",htmlFor:"goToPageInput",variant:"subtle",children:"Go to page:"}),t.jsx(O,{ref:i,id:"goToPageInput",placeholder:"#",type:"number",onKeyDown:a})]})};h.propTypes={pageCount:o.number.isRequired,onPageChange:o.func.isRequired};try{h.displayName="GoToPage",h.__docgenInfo={description:"",displayName:"GoToPage",props:{pageCount:{defaultValue:null,description:"",name:"pageCount",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!0,type:{name:"OnPageChangeFn"}}}}}catch{}const z=m.button.withConfig({displayName:"PaginationItem__StyledPaginationComponent",componentId:"sc-8lakhu-0"})(["display:flex;flex-shrink:0;align-items:center;justify-content:center;min-width:",";height:",";padding:",";margin:",";background:none;border:1px solid transparent;border-radius:",";font-size:var(--sscds-font-size-elementlabel-sm);line-height:var(--sscds-font-lineheight-elementlabel);color:",";cursor:pointer;&:first-of-type{margin-left:0;}&:last-of-type{margin-right:0;}&:disabled{color:",";cursor:default;}",";",";"],l(40),l(32),l(5,6),l(0,4),V("default"),p("neutral.900"),p("neutral.600"),({$isShrinked:e})=>e&&k(["min-width:",";"],l(32)),({$isCurrent:e})=>e?k(["border-color:",";background-color:",";font-size:var(--sscds-font-size-elementlabel-md);font-weight:var(--sscds-font-weight-elementlabel-strong);cursor:default;"],p("neutral.400"),p("neutral.300")):k(["&:hover{border-color:",";background-color:",";}"],p("neutral.400"),p("neutral.0"))),g=({children:e,isDisabled:n,isCurrent:i,isShrinked:a,onClick:r,...d})=>{const u=()=>{i||r()};return t.jsx(z,{$isCurrent:i,$isShrinked:a,"data-testid":"pagination-item",disabled:n,type:"button",onClick:u,...d,children:e})};g.propTypes={onClick:o.func.isRequired,isDisabled:o.bool,isCurrent:o.bool,isShrinked:o.bool};const y=m(I).attrs(()=>({children:"..."})).withConfig({displayName:"PaginationItem__PaginationItemElipsis",componentId:"sc-8lakhu-1"})(["display:flex;align-items:center;justify-content:center;width:",";height:",";font-size:var(--sscds-font-size-elementlabel-sm);line-height:var(--sscds-font-lineheight-elementlabel);color:",";margin:",";"],l(40),l(32),p("neutral.600"),l(0,4));try{g.displayName="PaginationItem",g.__docgenInfo={description:"",displayName:"PaginationItem",props:{isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isCurrent:{defaultValue:null,description:"",name:"isCurrent",required:!1,type:{name:"boolean"}},isShrinked:{defaultValue:null,description:"",name:"isShrinked",required:!1,type:{name:"boolean"}},page:{defaultValue:null,description:"",name:"page",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}try{y.displayName="PaginationItemElipsis",y.__docgenInfo={description:"",displayName:"PaginationItemElipsis",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const j=(e,n)=>E(i=>i>n?!1:[i,i+1],e),L=(e,n,i)=>{const a=i-3,r=e<a?2:e>n-a?n-a:e-Math.ceil((i-4-1)/2),d=e<a?i-2:e>n-a?n-1:e+Math.floor((i-4-1)/2),u=j(r,d);return{showLeftEllipsis:r>2,showRightEllipsis:d<n-1,pages:u}},f=e=>new Intl.NumberFormat("en-US").format(e),b=({currentPage:e,pageCount:n,onChange:i,positions:a,renderItem:r=g})=>{const{pages:d,showLeftEllipsis:u,showRightEllipsis:c}=w.useMemo(()=>L(e,n,a),[e,n,a]);return n<=a?t.jsx(t.Fragment,{children:j(1,n).map(s=>r({key:`page-${s}`,page:s,isCurrent:s===e,onClick:()=>i(s),children:f(s)}))}):a!==1?t.jsxs(t.Fragment,{children:[r({page:1,isCurrent:e===1,onClick:()=>i(1),children:t.jsx(t.Fragment,{children:"1"})}),u&&t.jsx(y,{}),d.map(s=>r({key:s,page:s,isCurrent:e===s,onClick:()=>i(s),children:f(s)})),c&&t.jsx(y,{}),r({page:n,isCurrent:e===n,onClick:()=>i(n),children:f(n)})]}):t.jsx(t.Fragment,{children:r({key:e,page:e,isCurrent:!0,onClick:()=>i(e),children:f(e)})})};b.propTypes={currentPage:o.number.isRequired,pageCount:o.number.isRequired,positions:o.number.isRequired,onChange:o.func.isRequired};try{b.displayName="PageButtons",b.__docgenInfo={description:"",displayName:"PageButtons",props:{currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},pageCount:{defaultValue:null,description:"",name:"pageCount",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(page: number) => void"}},positions:{defaultValue:null,description:"",name:"positions",required:!0,type:{name:"number"}},renderItem:{defaultValue:{value:`({
  children,
  isDisabled,
  isCurrent,
  isShrinked,
  onClick,
  ...props
}: PaginationItemProps) => {
  const handleOnClick = () => {
    if (isCurrent) {
      return;
    }

    onClick();
  };
  return (
    <StyledPaginationComponent
      $isCurrent={isCurrent}
      $isShrinked={isShrinked}
      data-testid="pagination-item"
      disabled={isDisabled}
      type="button"
      onClick={handleOnClick}
      {...props}
    >
      {children}
    </StyledPaginationComponent>
  );
}`},description:"",name:"renderItem",required:!1,type:{name:"customRenderItem"}}}}}catch{}const C=({pageCount:e,currentPage:n,onPageChange:i,pageButtonsCount:a=8,renderItem:r=g})=>t.jsxs(S,{className:v,gap:P.sm,justify:"center",children:[r&&r({"aria-label":"Previous page",page:n-1,isDisabled:n-1===0,isShrinked:!0,onClick:()=>i(n-1),children:t.jsx(q,{name:x.longArrowLeft})}),a!==0&&t.jsx(b,{currentPage:n,pageCount:e,positions:a,renderItem:r,onChange:i}),r&&r({"aria-label":"Next page",page:n+1,isDisabled:n+1>e,isShrinked:!0,onClick:()=>i(n+1),children:t.jsx(q,{name:x.longArrowRight})})]});C.propTypes={pageCount:o.number.isRequired,currentPage:o.number.isRequired,onPageChange:o.func.isRequired,pageButtonsCount:o.number,renderItem:o.func};const $=C;try{C.displayName="Pagination",C.__docgenInfo={description:"",displayName:"Pagination",props:{pageCount:{defaultValue:null,description:"Total number of pages.",name:"pageCount",required:!0,type:{name:"number"}},currentPage:{defaultValue:null,description:"Number of current page. Starts with 1.",name:"currentPage",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"Callback called when pagination button is clicked.",name:"onPageChange",required:!0,type:{name:"OnPageChangeFn"}},pageButtonsCount:{defaultValue:{value:"8"},description:"Number of page positions. This also includes ellipsis positions if visible.",name:"pageButtonsCount",required:!1,type:{name:"number"}},renderItem:{defaultValue:{value:`({
  children,
  isDisabled,
  isCurrent,
  isShrinked,
  onClick,
  ...props
}: PaginationItemProps) => {
  const handleOnClick = () => {
    if (isCurrent) {
      return;
    }

    onClick();
  };
  return (
    <StyledPaginationComponent
      $isCurrent={isCurrent}
      $isShrinked={isShrinked}
      data-testid="pagination-item"
      disabled={isDisabled}
      type="button"
      onClick={handleOnClick}
      {...props}
    >
      {children}
    </StyledPaginationComponent>
  );
}`},description:"Custom pagination item render function",name:"renderItem",required:!1,type:{name:"customRenderItem"}}}}}catch{}const B=m(I).withConfig({displayName:"Footer__StyledFooter",componentId:"sc-ctnhuf-0"})(["display:flex;align-items:center;border-top:1px solid ",";"],p("neutral.300")),G=m.div.withConfig({displayName:"Footer__LoadingContainer",componentId:"sc-ctnhuf-1"})(["padding:",";"],l(8,24,8,8)),A=m.div.withConfig({displayName:"Footer__PaginationContainer",componentId:"sc-ctnhuf-2"})(["flex:1 0 auto;"]),_=({pageCount:e,pageButtonsCount:n,pageIndex:i,onGotoPage:a,isDataLoading:r=!1,hasPagination:d=!0})=>{const u=c=>a(c-1);return t.jsxs(B,{as:"footer","data-testid":"footer",flexDirection:"row",paddingSize:P.md,paddingType:R.squish,children:[t.jsx(G,{children:r&&t.jsx(F,{borderWidth:2,height:16,horizontalMargin:0,verticalMargin:0,width:16,dark:!0})}),d&&t.jsxs(t.Fragment,{children:[t.jsx(A,{children:t.jsx($,{currentPage:i+1,pageButtonsCount:n,pageCount:e,onPageChange:u})}),t.jsx(h,{pageCount:e,onPageChange:u})]})]})};_.propTypes={pageCount:o.number.isRequired,pageIndex:o.number.isRequired,onGotoPage:o.func.isRequired,pageButtonsCount:o.number,hasPagination:o.bool,isDataLoading:o.bool};const ke=_;try{_.displayName="Footer",_.__docgenInfo={description:"",displayName:"Footer",props:{pageCount:{defaultValue:null,description:"",name:"pageCount",required:!0,type:{name:"number"}},pageButtonsCount:{defaultValue:null,description:"",name:"pageButtonsCount",required:!1,type:{name:"number"}},pageIndex:{defaultValue:null,description:"",name:"pageIndex",required:!0,type:{name:"number"}},isDataLoading:{defaultValue:{value:"false"},description:"",name:"isDataLoading",required:!1,type:{name:"boolean"}},onGotoPage:{defaultValue:null,description:"",name:"onGotoPage",required:!0,type:{name:"OnPageChangeFn"}},hasPagination:{defaultValue:{value:"true"},description:"",name:"hasPagination",required:!1,type:{name:"boolean"}}}}}catch{}export{ke as F,$ as P};
