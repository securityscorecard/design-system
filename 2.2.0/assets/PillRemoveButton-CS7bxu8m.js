import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{s as t,A as a,S as c,P as g}from"./space-1LtLrmuu.js";import{P as l}from"./index-BRV0Se7Z.js";import"./DSProvider-IYcK3cWD.js";import"./DSThemeOverride-BduN1ykm.js";import"./index-DFvsTZbx.js";import"./theme-Cr_I21Pv.js";import"./Surface-DpLLkhSd.js";import{P as m}from"./Padbox-DKEfmyAv.js";import"./Stack-D3Wl5zWT.js";import{I as y}from"./Inline-BUcOfxrg.js";import"./Cluster-DAeUfwZi.js";import{I as h,S as v}from"./Icon-4JNizDXH.js";const p={gray:"gray",blue:"blue",turquoise:"turquoise",teal:"teal",green:"green",yellow:"yellow",orange:"orange",red:"red",pink:"pink",purple:"purple",brown:"brown"},d={gray:["--sscds-color-background-pill-gray-default","--sscds-color-background-pill-gray-hover"],blue:["--sscds-color-background-pill-blue-default","--sscds-color-background-pill-blue-hover"],turquoise:["--sscds-color-background-pill-turquoise-default","--sscds-color-background-pill-turquoise-hover"],teal:["--sscds-color-background-pill-teal-default","--sscds-color-background-pill-teal-hover"],green:["--sscds-color-background-pill-green-default","--sscds-color-background-pill-green-hover"],yellow:["--sscds-color-background-pill-yellow-default","--sscds-color-background-pill-yellow-hover"],orange:["--sscds-color-background-pill-orange-default","--sscds-color-background-pill-orange-hover"],red:["--sscds-color-background-pill-red-default","--sscds-color-background-pill-red-hover"],pink:["--sscds-color-background-pill-pink-default","--sscds-color-background-pill-pink-hover"],purple:["--sscds-color-background-pill-purple-default","--sscds-color-background-pill-purple-hover"],brown:["--sscds-color-background-pill-brown-default","--sscds-color-background-pill-brown-hover"]},n={gray:["--sscds-color-border-pill-gray-default","--sscds-color-border-pill-gray-hover"],blue:["--sscds-color-border-pill-blue-default","--sscds-color-border-pill-blue-hover"],turquoise:["--sscds-color-border-pill-turquoise-default","--sscds-color-border-pill-turquoise-hover"],teal:["--sscds-color-border-pill-teal-default","--sscds-color-border-pill-teal-hover"],green:["--sscds-color-border-pill-green-default","--sscds-color-border-pill-green-hover"],yellow:["--sscds-color-border-pill-yellow-default","--sscds-color-border-pill-yellow-hover"],orange:["--sscds-color-border-pill-orange-default","--sscds-color-border-pill-orange-hover"],red:["--sscds-color-border-pill-red-default","--sscds-color-border-pill-red-hover"],pink:["--sscds-color-border-pill-pink-default","--sscds-color-border-pill-pink-hover"],purple:["--sscds-color-border-pill-purple-default","--sscds-color-border-pill-purple-hover"],brown:["--sscds-color-border-pill-brown-default","--sscds-color-border-pill-brown-hover"]},f=t(m).withConfig({displayName:"PillWrapper__StyledPillWrapper",componentId:"sc-1cck2m6-0"})(["display:inline-block;min-width:0;border-radius:var(--sscds-radii-pill);"," ",""],({$color:e})=>a(["background-color:var(",");"],d[e][0]),({$isClickable:e,$color:r})=>e&&a(["cursor:pointer;box-shadow:inset 0 0 0 1px var(",");&:hover{background-color:var(",");box-shadow:inset 0 0 0 1px var(",");}"],n[r][0],d[r][1],n[r][1])),s=({children:e,isClickable:r,color:u,...b})=>o.jsx(f,{$color:u||p.gray,$isClickable:r,...b,paddingSize:c.sm,paddingType:g.squish,children:o.jsx(y,{align:"center",gap:c.xs,children:e})});s.propTypes={isClickable:l.bool.isRequired,color:l.oneOf(Object.values(p)).isRequired};try{s.displayName="PillWrapper",s.__docgenInfo={description:"",displayName:"PillWrapper",props:{isClickable:{defaultValue:null,description:"Flag that enabled hover functionality on the pill. This should be used only when\npassing custom element (e.g. `a` tag) throught the `as` property without passing\n`onClick` property.",name:"isClickable",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Callback called when the pill is clicked. Hover functionality is enabled when this\nproperty is passed in, this can be overriden by `isClickable` property when using\ncustom element such as `a` tag without `onClick` property.",name:"onClick",required:!1,type:{name:"(event: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>) => void"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}}}catch{}const k=t.button.withConfig({displayName:"PillRemoveButton__PillRemoveButtonWrapper",componentId:"sc-fs3lsz-0"})(["display:flex;align-items:center;justify-content:center;appearance:none;border:0 none;background:transparent;width:1rem;height:1rem;font-size:var(--sscds-font-size-body-sm);color:var(--sscds-color-icon-subtle);cursor:pointer;border-radius:var(--sscds-radii-circle);margin-inline-end:calc(var(--sscds-space-1x) * -1) !important;&:hover,&:focus-visible{color:var(--sscds-color-neutral-1);background-color:var(--sscds-color-icon-danger);}"]),i=({pillLabel:e,...r})=>o.jsx(k,{"aria-label":`Remove ${e}`,type:"button",...r,children:o.jsx(h,{name:v.times})});i.propTypes={pillLabel:l.string.isRequired};try{i.displayName="PillRemoveButton",i.__docgenInfo={description:"",displayName:"PillRemoveButton",props:{pillLabel:{defaultValue:null,description:"",name:"pillLabel",required:!0,type:{name:"string"}}}}}catch{}export{s as P,i as a,p as b,d as c};
