"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8942],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return g}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),g=a,d=s["".concat(u,".").concat(g)]||s[g]||f[g]||i;return n?t.createElement(d,o(o({ref:r},p),{},{components:n})):t.createElement(d,o({ref:r},p))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4082:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var t=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={sidebar_label:"trainer",title:"nlp.huggingface.trainer"},u=void 0,l={unversionedId:"reference/nlp/huggingface/trainer",id:"reference/nlp/huggingface/trainer",isDocsHomePage:!1,title:"nlp.huggingface.trainer",description:"TrainerForAuto Objects",source:"@site/docs/reference/nlp/huggingface/trainer.md",sourceDirName:"reference/nlp/huggingface",slug:"/reference/nlp/huggingface/trainer",permalink:"/FLAML/docs/reference/nlp/huggingface/trainer",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/reference/nlp/huggingface/trainer.md",tags:[],version:"current",frontMatter:{sidebar_label:"trainer",title:"nlp.huggingface.trainer"},sidebar:"referenceSideBar",previous:{title:"switch_head_auto",permalink:"/FLAML/docs/reference/nlp/huggingface/switch_head_auto"},next:{title:"training_args",permalink:"/FLAML/docs/reference/nlp/huggingface/training_args"}},p=[{value:"TrainerForAuto Objects",id:"trainerforauto-objects",children:[{value:"evaluate",id:"evaluate",children:[],level:4}],level:2}],f={toc:p};function s(e){var r=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"trainerforauto-objects"},"TrainerForAuto Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class TrainerForAuto(Seq2SeqTrainer)\n")),(0,i.kt)("h4",{id:"evaluate"},"evaluate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def evaluate(eval_dataset=None, ignore_keys=None, metric_key_prefix="eval")\n')),(0,i.kt)("p",null,"Overriding transformers.Trainer.evaluate by saving metrics and checkpoint path."))}s.isMDXComponent=!0}}]);