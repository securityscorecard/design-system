import{_ as s}from"./_isObject-dmcfxmtS.js";import{g as n,h as a,j as o}from"./space.enums-DGrZwzIk.js";import{r as u}from"./index-CwwveOyd.js";var c=function(){function e(t,r){this.xf=r,this.n=t,this.i=0}return e.prototype["@@transducer/init"]=n.init,e.prototype["@@transducer/result"]=n.result,e.prototype["@@transducer/step"]=function(t,r){this.i+=1;var i=this.n===0?t:this.xf["@@transducer/step"](t,r);return this.n>=0&&this.i>=this.n?u(i):i},e}(),p=s(function(t,r){return new c(t,r)}),k=s(a(["take"],p,function(t,r){return o(0,t<0?1/0:t,r)}));export{k as t};
//# sourceMappingURL=take-CUYYw2Vq.js.map
