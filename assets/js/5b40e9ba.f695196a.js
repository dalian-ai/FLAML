"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5675],{5680:(e,r,t)=>{t.d(r,{xA:()=>f,yg:()=>d});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},f=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=o,g=s["".concat(c,".").concat(d)]||s[d]||p[d]||a;return t?n.createElement(g,i(i({ref:r},f),{},{components:t})):n.createElement(g,i({ref:r},f))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9844:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(8168),o=(t(6540),t(5680));const a={sidebar_label:"greedy",title:"default.greedy"},i=void 0,l={unversionedId:"reference/default/greedy",id:"reference/default/greedy",isDocsHomePage:!1,title:"default.greedy",description:"construct\\_portfolio",source:"@site/docs/reference/default/greedy.md",sourceDirName:"reference/default",slug:"/reference/default/greedy",permalink:"/FLAML/docs/reference/default/greedy",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/reference/default/greedy.md",tags:[],version:"current",frontMatter:{sidebar_label:"greedy",title:"default.greedy"},sidebar:"referenceSideBar",previous:{title:"estimator",permalink:"/FLAML/docs/reference/default/estimator"},next:{title:"portfolio",permalink:"/FLAML/docs/reference/default/portfolio"}},c=[{value:"construct_portfolio",id:"construct_portfolio",children:[],level:4}],u={toc:c};function f(e){let{components:r,...t}=e;return(0,o.yg)("wrapper",(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h4",{id:"construct_portfolio"},"construct","_","portfolio"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},"def construct_portfolio(regret_matrix, meta_features, regret_bound)\n")),(0,o.yg)("p",null,"The portfolio construction algorithm."),(0,o.yg)("p",null,"Reference: ",(0,o.yg)("a",{parentName:"p",href:"https://arxiv.org/abs/2202.09927"},"Mining Robust Default Configurations for Resource-constrained AutoML"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Arguments"),":"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"regret_matrix")," - A dataframe of regret matrix."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"meta_features")," - None or a dataframe of metafeatures matrix.\nWhen set to None, the algorithm uses greedy strategy.\nOtherwise, the algorithm uses greedy strategy with feedback\nfrom the nearest neighbor predictor."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"regret_bound")," - A float of the regret bound.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Returns"),":"),(0,o.yg)("p",null,"  A list of configuration names."))}f.isMDXComponent=!0}}]);