import{_ as n,$ as i,a0 as s,a1 as l}from"./space-B9R18Mwn.js";var u=function(){function a(t,r){this.xf=r,this.f=t,this.all=!0}return a.prototype["@@transducer/init"]=i.init,a.prototype["@@transducer/result"]=function(t){return this.all&&(t=this.xf["@@transducer/step"](t,!0)),this.xf["@@transducer/result"](t)},a.prototype["@@transducer/step"]=function(t,r){return this.f(r)||(this.all=!1,t=s(this.xf["@@transducer/step"](t,!1))),t},a}(),f=n(function(t,r){return new u(t,r)}),o=n(l(["all"],f,function(t,r){for(var e=0;e<r.length;){if(!t(r[e]))return!1;e+=1}return!0}));export{o as a};
