import{j as s}from"./jsx-runtime-CfatFE5O.js";import{u as h}from"./index-DZXJ-YQi.js";import{c as x}from"./index-DxcpycWO.js";import{B as E}from"./Button-BfyVdgm0.js";import{a as B}from"./constants-C4Oh6sKJ.js";function e(){var l="/home/runner/work/design-system/design-system/src/components/FileSelectorButton/FileSelectorButton.tsx",a="28ea44dc4c512586f70a0f1fc90c47228ae0a1b0",t=window,i="__coverage__",r={path:"/home/runner/work/design-system/design-system/src/components/FileSelectorButton/FileSelectorButton.tsx",statementMap:{0:{start:{line:30,column:6},end:{line:47,column:4}},1:{start:{line:48,column:2},end:{line:59,column:7}},2:{start:{line:61,column:0},end:{line:61,column:54}},3:{start:{line:63,column:0},end:{line:69,column:50}},4:{start:{line:65,column:4},end:{line:65,column:58}},5:{start:{line:67,column:4},end:{line:67,column:2745}}},fnMap:{0:{name:"FileSelectorButton",decl:{start:{line:6,column:9},end:{line:6,column:27}},loc:{start:{line:26,column:3},end:{line:60,column:1}},line:26}},branchMap:{0:{loc:{start:{line:7,column:2},end:{line:7,column:18}},type:"default-arg",locations:[{start:{line:7,column:10},end:{line:7,column:18}}],line:7},1:{loc:{start:{line:8,column:2},end:{line:8,column:20}},type:"default-arg",locations:[{start:{line:8,column:15},end:{line:8,column:20}}],line:8},2:{loc:{start:{line:9,column:2},end:{line:9,column:20}},type:"default-arg",locations:[{start:{line:9,column:15},end:{line:9,column:20}}],line:9},3:{loc:{start:{line:10,column:2},end:{line:10,column:18}},type:"default-arg",locations:[{start:{line:10,column:13},end:{line:10,column:18}}],line:10}},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0},b:{0:[0],1:[0],2:[0],3:[0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/design-system/design-system/src/components/FileSelectorButton/FileSelectorButton.tsx"],names:["accept","minFileSize","maxFileSize","maxFiles","onFilesDrop","onFilesAccepted","onFilesRejected","onFileDialogCancel","onFileDialogOpen","onDragEnter","onDragOver","onDragLeave","validator","className","getRootProps","getInputProps","isDisabled","multiple","props","isExpanded","FileSelectorButton"],mappings:"AAkFI;AAjFJ;AACA;AAEA;AACA;AAoCA;AAA4B;AAClB;AACK;AACA;AACF;AACXA;AACAC;AACAC;AACAC;AACAC;AACAC;AACAC;AACAC;AACAC;AACAC;AACAC;AACAC;AACAC;AACAC;AAE4D;AAC5D;AAAM;AAAEC;AAAcC;AAA8B;AACxCC;AACF;AACRC;AACAjB;AACSC;AACAC;AACTC;AACQC;AACQC;AACAC;AAChBC;AACAC;AACAC;AACAC;AACAC;AACAC;AAGF;AAEI;AAAgE;AAE7C;AACZM;AACQ;AAAQ;AAAS;AAC5BF;AACS;AACTG;AAIJ;AAGN;AAEAC;AAEA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"28ea44dc4c512586f70a0f1fc90c47228ae0a1b0"},n=t[i]||(t[i]={});(!n[l]||n[l].hash!==a)&&(n[l]=r);var o=n[l];return e=function(){return o},o}e();function A({label:l=(e().b[0][0]++,"Upload"),isDisabled:a=(e().b[1][0]++,!1),isExpanded:t=(e().b[2][0]++,!1),multiple:i=(e().b[3][0]++,!1),accept:r,minFileSize:n,maxFileSize:o,maxFiles:c,onFilesDrop:u,onFilesAccepted:d,onFilesRejected:m,onFileDialogCancel:p,onFileDialogOpen:C,onDragEnter:f,onDragOver:F,onDragLeave:v,validator:g,className:b,...y}){e().f[0]++;const{getRootProps:S,getInputProps:D}=(e().s[0]++,h({disabled:a,noDrag:!0,multiple:i,accept:r,minSize:n,maxSize:o,maxFiles:c,onDrop:u,onDropAccepted:d,onDropRejected:m,onFileDialogCancel:p,onFileDialogOpen:C,onDragEnter:f,onDragOver:F,onDragLeave:v,validator:g}));return e().s[1]++,s.jsxs("div",{className:x(B,b),children:[s.jsx("input",{"aria-label":"upload file","aria-hidden":!0,...D()}),s.jsx(E,{...S({...y,iconStart:{name:"upload"},isDisabled:a,variant:"subtle",isExpanded:t}),children:l})]})}e().s[2]++;A.displayName="FileSelectorButton";e().s[3]++;try{e().s[4]++,A.displayName="FileSelectorButton",e().s[5]++,A.__docgenInfo={description:"",displayName:"FileSelectorButton",props:{onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"((err: Error) => void) & ReactEventHandler<HTMLButtonElement>"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},accept:{defaultValue:null,description:"",name:"accept",required:!1,type:{name:"Accept"}},maxFiles:{defaultValue:null,description:"",name:"maxFiles",required:!1,type:{name:"number"}},onFileDialogCancel:{defaultValue:null,description:"",name:"onFileDialogCancel",required:!1,type:{name:"() => void"}},onFileDialogOpen:{defaultValue:null,description:"",name:"onFileDialogOpen",required:!1,type:{name:"() => void"}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"<T extends File>(file: T) => FileError | readonly FileError[]"}},label:{defaultValue:{value:"Upload"},description:"File selector button label",name:"label",required:!1,type:{name:"string"}},isExpanded:{defaultValue:{value:"false"},description:"Expands button to full width of the parrent component",name:"isExpanded",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"Disables the FileSelector",name:"isDisabled",required:!1,type:{name:"boolean"}},minFileSize:{defaultValue:null,description:"Minimal file size in bytes",name:"minFileSize",required:!1,type:{name:"number"}},maxFileSize:{defaultValue:null,description:"Maximal file size in bytes",name:"maxFileSize",required:!1,type:{name:"number"}},onFilesDrop:{defaultValue:null,description:"Callback fired on file drop or select through native dialog",name:"onFilesDrop",required:!1,type:{name:"<T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void"}},onFilesAccepted:{defaultValue:null,description:"Callback fired when selected files are accepted",name:"onFilesAccepted",required:!1,type:{name:"<T extends File>(files: T[], event: DropEvent) => void"}},onFilesRejected:{defaultValue:null,description:"Callback fired when selected files are rejected",name:"onFilesRejected",required:!1,type:{name:"(fileRejections: FileRejection[], event: DropEvent) => void"}}}}}catch{}export{A as F};
//# sourceMappingURL=FileSelectorButton-B5V3Q15_.js.map
