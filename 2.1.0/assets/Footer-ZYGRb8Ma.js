import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{P as a}from"./index-BRV0Se7Z.js";import{_,s as u,h as p,G as f,D as I,k as l,S as b,r as N,H as R,A as y,j as M,P as E}from"./space-BY85GhUc.js";import"./Surface-CvF-S7pg.js";import{P as S}from"./Padbox-CsIyVOa3.js";import"./Stack-vWwwEz_d.js";import{I as j}from"./Inline-CNottUT6.js";import"./Cluster-BOKWm1iB.js";import{S as F}from"./Spinner-b5BYo8Sk.js";import{r as v}from"./index-CTjT7uj6.js";import"./Checkbox-CKFjIkBH.js";import{I as H}from"./Input-BtOZIwxI.js";import"./Label-BXbsNi4R.js";import"./Message-DUxshZZl.js";import"./MultiValueInput-D7lNkhxc.js";import"./Password-65KzSUZy.js";import"./Radio-YCSNiGxy.js";import"./Select-COyzZzGC.js";import"./CreatableSelect-D23fXLUV.js";import"./Range-cNWnBLi8.js";import"./Switch-0dtb0Z-n.js";import"./TextArea-DbKusWUV.js";import"./SearchBar-Dg-JDwAb.js";import"./SegmentedToggleItem-B_FdIjKO.js";import"./InputGroup-C72p4Af2.js";import"./DSProvider-eD554_K8.js";import"./theme-DztFT9GZ.js";import"./index-DFvsTZbx.js";import{I as w,S as x}from"./Icon-DSPfH_8v.js";var B=_(function(n,t){for(var r=n(t),o=[];r&&r.length;)o[o.length]=r[0],r=n(r[1]);return o});const D=u(H).withConfig({displayName:"GoToPage__SmallInput",componentId:"sc-1xcwlq-0"})(["padding:",";width:",";height:",";appearance:textfield;&::-webkit-outer-spin-button,&::-webkit-inner-spin-button{appearance:none;margin:0;}&:focus{padding:",";}"],p(8,16),p(72),p(32),p(7,15)),G=u.label.withConfig({displayName:"GoToPage__GoToPageLabel",componentId:"sc-1xcwlq-1"})(["margin-bottom:0;margin-right:",";font-size:",";font-weight:",";color:",";"],p(16),f("lg"),I("medium"),l("neutral.700")),T=({pageCount:e,onPageChange:n})=>{const t=v.useRef(null),r=o=>{const{target:m,key:d}=o,{value:c}=m,s=parseInt(c,10);d==="Enter"&&(s<=0?(n(1),t.current.value="1"):s>e?(n(e),t.current.value=e.toString()):n(s))};return i.jsxs(j,{align:"center",gap:b.md,children:[i.jsx(G,{htmlFor:"goToPageInput",children:"Go to page:"}),i.jsx(D,{ref:t,id:"goToPageInput",placeholder:"#",type:"number",onKeyDown:r})]})};T.propTypes={pageCount:a.number.isRequired,onPageChange:a.func.isRequired};T.__docgenInfo={description:"",methods:[],displayName:"GoToPage",props:{pageCount:{required:!0,tsType:{name:"number"},description:"",type:{name:"number"}},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"",type:{name:"func"}}}};const $=u.button.withConfig({displayName:"PaginationItem__StyledPaginationComponent",componentId:"sc-8lakhu-0"})(["display:flex;flex-shrink:0;align-items:center;justify-content:center;min-width:",";height:",";padding:",";margin:",";background:none;border:1px solid transparent;border-radius:",";font-size:",";line-height:",";color:",";cursor:pointer;&:first-of-type{margin-left:0;}&:last-of-type{margin-right:0;}&:disabled{color:",";cursor:default;}",";",";"],p(40),p(32),p(5,6),p(0,4),N("default"),f("md"),R("lg"),l("neutral.900"),l("neutral.600"),({$isShrinked:e})=>e&&y(["min-width:",";"],p(32)),({$isCurrent:e})=>e?y(["border-color:",";background-color:",";font-size:",";font-weight:",";cursor:default;"],l("neutral.400"),l("neutral.300"),f("lg"),I("bold")):y(["&:hover{border-color:",";background-color:",";}"],l("neutral.400"),l("neutral.0"))),h=({children:e,isDisabled:n,isCurrent:t,isShrinked:r,onClick:o,...m})=>{const d=()=>{t||o()};return i.jsx($,{$isCurrent:t,$isShrinked:r,"data-testid":"pagination-item",disabled:n,type:"button",onClick:d,...m,children:e})};h.propTypes={onClick:a.func.isRequired,isDisabled:a.bool,isCurrent:a.bool,isShrinked:a.bool};const q=u(S).attrs(()=>({children:"..."})).withConfig({displayName:"PaginationItem__PaginationItemElipsis",componentId:"sc-8lakhu-1"})(["display:flex;align-items:center;justify-content:center;width:",";height:",";font-size:",";line-height:",";color:",";margin:",";"],p(40),p(32),f("md"),R("lg"),l("neutral.600"),p(0,4));h.__docgenInfo={description:"",methods:[],displayName:"PaginationItem",props:{isDisabled:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},isCurrent:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},isShrinked:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},page:{required:!1,tsType:{name:"number"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",type:{name:"func"}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const L=(e,n)=>B(t=>t>n?!1:[t,t+1],e),z=(e,n,t)=>{const r=t-3,o=e<r?2:e>n-r?n-r:e-Math.ceil((t-4-1)/2),m=e<r?t-2:e>n-r?n-1:e+Math.floor((t-4-1)/2),d=L(o,m);return{showLeftEllipsis:o>2,showRightEllipsis:m<n-1,pages:d}},g=e=>new Intl.NumberFormat("en-US").format(e),P=({currentPage:e,pageCount:n,onChange:t,positions:r,renderItem:o=h})=>{const{pages:m,showLeftEllipsis:d,showRightEllipsis:c}=v.useMemo(()=>z(e,n,r),[e,n,r]);return n<=r?i.jsx(i.Fragment,{children:L(1,n).map(s=>o({key:`page-${s}`,page:s,isCurrent:s===e,onClick:()=>t(s),children:g(s)}))}):r!==1?i.jsxs(i.Fragment,{children:[o({page:1,isCurrent:e===1,onClick:()=>t(1),children:i.jsx(i.Fragment,{children:"1"})}),d&&i.jsx(q,{}),m.map(s=>o({key:s,page:s,isCurrent:e===s,onClick:()=>t(s),children:g(s)})),c&&i.jsx(q,{}),o({page:n,isCurrent:e===n,onClick:()=>t(n),children:g(n)})]}):i.jsx(i.Fragment,{children:o({key:e,page:e,isCurrent:!0,onClick:()=>t(e),children:g(e)})})};P.propTypes={currentPage:a.number.isRequired,pageCount:a.number.isRequired,positions:a.number.isRequired,onChange:a.func.isRequired};P.__docgenInfo={description:"",methods:[],displayName:"PageButtons",props:{currentPage:{required:!0,tsType:{name:"number"},description:"",type:{name:"number"}},pageCount:{required:!0,tsType:{name:"number"},description:"",type:{name:"number"}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"",type:{name:"func"}},positions:{required:!0,tsType:{name:"number"},description:"",type:{name:"number"}},renderItem:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  props: PaginationItemProps & React.HTMLProps<HTMLButtonElement>,
) => ReactNode`,signature:{arguments:[{type:{name:"intersection",raw:"PaginationItemProps & React.HTMLProps<HTMLButtonElement>",elements:[{name:"PaginationItemProps"},{name:"ReactHTMLProps",raw:"React.HTMLProps<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]}]},name:"props"}],return:{name:"ReactNode"}}},description:"",defaultValue:{value:`({
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
}`,computed:!1}}}};const C=({pageCount:e,currentPage:n,onPageChange:t,pageButtonsCount:r=8,renderItem:o=h})=>i.jsxs(j,{className:M,gap:b.sm,justify:"center",children:[o&&o({"aria-label":"Previous page",page:n-1,isDisabled:n-1===0,isShrinked:!0,onClick:()=>t(n-1),children:i.jsx(w,{name:x.longArrowLeft})}),r!==0&&i.jsx(P,{currentPage:n,pageCount:e,positions:r,renderItem:o,onChange:t}),o&&o({"aria-label":"Next page",page:n+1,isDisabled:n+1>e,isShrinked:!0,onClick:()=>t(n+1),children:i.jsx(w,{name:x.longArrowRight})})]});C.propTypes={pageCount:a.number.isRequired,currentPage:a.number.isRequired,onPageChange:a.func.isRequired,pageButtonsCount:a.number,renderItem:a.func};const O=C;C.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{pageCount:{required:!0,tsType:{name:"number"},description:"Total number of pages.",type:{name:"number"}},currentPage:{required:!0,tsType:{name:"number"},description:"Number of current page. Starts with 1.",type:{name:"number"}},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"Callback called when pagination button is clicked.",type:{name:"func"}},pageButtonsCount:{required:!1,tsType:{name:"number"},description:"Number of page positions. This also includes ellipsis positions if visible.",defaultValue:{value:"8",computed:!1},type:{name:"number"}},renderItem:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  props: PaginationItemProps & React.HTMLProps<HTMLButtonElement>,
) => ReactNode`,signature:{arguments:[{type:{name:"intersection",raw:"PaginationItemProps & React.HTMLProps<HTMLButtonElement>",elements:[{name:"PaginationItemProps"},{name:"ReactHTMLProps",raw:"React.HTMLProps<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]}]},name:"props"}],return:{name:"ReactNode"}}},description:"Custom pagination item render function",defaultValue:{value:`({
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
}`,computed:!1},type:{name:"func"}}}};const V=u(S).withConfig({displayName:"Footer__StyledFooter",componentId:"sc-ctnhuf-0"})(["display:flex;align-items:center;border-top:1px solid ",";"],l("neutral.300")),A=u.div.withConfig({displayName:"Footer__LoadingContainer",componentId:"sc-ctnhuf-1"})(["padding:",";"],p(8,24,8,8)),W=u.div.withConfig({displayName:"Footer__PaginationContainer",componentId:"sc-ctnhuf-2"})(["flex:1 0 auto;"]),k=({pageCount:e,pageButtonsCount:n,pageIndex:t,onGotoPage:r,isDataLoading:o=!1,hasPagination:m=!0})=>{const d=c=>r(c-1);return i.jsxs(V,{as:"footer","data-testid":"footer",flexDirection:"row",paddingSize:b.md,paddingType:E.squish,children:[i.jsx(A,{children:o&&i.jsx(F,{borderWidth:2,height:16,horizontalMargin:0,verticalMargin:0,width:16,dark:!0})}),m&&i.jsxs(i.Fragment,{children:[i.jsx(W,{children:i.jsx(O,{currentPage:t+1,pageButtonsCount:n,pageCount:e,onPageChange:d})}),i.jsx(T,{pageCount:e,onPageChange:d})]})]})};k.propTypes={pageCount:a.number.isRequired,pageIndex:a.number.isRequired,onGotoPage:a.func.isRequired,pageButtonsCount:a.number,hasPagination:a.bool,isDataLoading:a.bool};const ke=k;k.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{pageCount:{required:!0,tsType:{name:"number"},description:"",type:{name:"number"}},pageButtonsCount:{required:!1,tsType:{name:"number"},description:"",type:{name:"number"}},pageIndex:{required:!0,tsType:{name:"number"},description:"",type:{name:"number"}},isDataLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},onGotoPage:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"",type:{name:"func"}},hasPagination:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1},type:{name:"bool"}}}};export{ke as F,O as P};
