"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2380],{5680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>g});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(t),g=r,y=c["".concat(o,".").concat(g)]||c[g]||d[g]||i;return t?a.createElement(y,l(l({ref:n},m),{},{components:t})):a.createElement(y,l({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4305:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=t(8168),r=(t(6540),t(5680));const i={sidebar_label:"analysis",title:"tune.analysis"},l=void 0,s={unversionedId:"reference/tune/analysis",id:"reference/tune/analysis",isDocsHomePage:!1,title:"tune.analysis",description:"ExperimentAnalysis Objects",source:"@site/docs/reference/tune/analysis.md",sourceDirName:"reference/tune",slug:"/reference/tune/analysis",permalink:"/FLAML/docs/reference/tune/analysis",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/reference/tune/analysis.md",tags:[],version:"current",frontMatter:{sidebar_label:"analysis",title:"tune.analysis"},sidebar:"referenceSideBar",previous:{title:"utils",permalink:"/FLAML/docs/reference/tune/spark/utils"},next:{title:"sample",permalink:"/FLAML/docs/reference/tune/sample"}},o=[{value:"ExperimentAnalysis Objects",id:"experimentanalysis-objects",children:[{value:"best_trial",id:"best_trial",children:[],level:4},{value:"best_config",id:"best_config",children:[],level:4},{value:"results",id:"results",children:[],level:4},{value:"get_best_trial",id:"get_best_trial",children:[],level:4},{value:"get_best_config",id:"get_best_config",children:[],level:4},{value:"best_result",id:"best_result",children:[],level:4}],level:2}],p={toc:o};function m(e){let{components:n,...t}=e;return(0,r.yg)("wrapper",(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"experimentanalysis-objects"},"ExperimentAnalysis Objects"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"class ExperimentAnalysis()\n")),(0,r.yg)("p",null,"Analyze results from a Tune experiment."),(0,r.yg)("h4",{id:"best_trial"},"best","_","trial"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"@property\ndef best_trial() -> Trial\n")),(0,r.yg)("p",null,"Get the best trial of the experiment\nThe best trial is determined by comparing the last trial results\nusing the ",(0,r.yg)("inlineCode",{parentName:"p"},"metric")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"mode")," parameters passed to ",(0,r.yg)("inlineCode",{parentName:"p"},"tune.run()"),".\nIf you didn't pass these parameters, use\n",(0,r.yg)("inlineCode",{parentName:"p"},"get_best_trial(metric, mode, scope)")," instead."),(0,r.yg)("h4",{id:"best_config"},"best","_","config"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"@property\ndef best_config() -> Dict\n")),(0,r.yg)("p",null,"Get the config of the best trial of the experiment\nThe best trial is determined by comparing the last trial results\nusing the ",(0,r.yg)("inlineCode",{parentName:"p"},"metric")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"mode")," parameters passed to ",(0,r.yg)("inlineCode",{parentName:"p"},"tune.run()"),".\nIf you didn't pass these parameters, use\n",(0,r.yg)("inlineCode",{parentName:"p"},"get_best_config(metric, mode, scope)")," instead."),(0,r.yg)("h4",{id:"results"},"results"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"@property\ndef results() -> Dict[str, Dict]\n")),(0,r.yg)("p",null,"Get the last result of all the trials of the experiment"),(0,r.yg)("h4",{id:"get_best_trial"},"get","_","best","_","trial"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'def get_best_trial(metric: Optional[str] = None, mode: Optional[str] = None, scope: str = "last", filter_nan_and_inf: bool = True) -> Optional[Trial]\n')),(0,r.yg)("p",null,"Retrieve the best trial object.\nCompares all trials' scores on ",(0,r.yg)("inlineCode",{parentName:"p"},"metric"),".\nIf ",(0,r.yg)("inlineCode",{parentName:"p"},"metric")," is not specified, ",(0,r.yg)("inlineCode",{parentName:"p"},"self.default_metric")," will be used.\nIf ",(0,r.yg)("inlineCode",{parentName:"p"},"mode")," is not specified, ",(0,r.yg)("inlineCode",{parentName:"p"},"self.default_mode")," will be used.\nThese values are usually initialized by passing the ",(0,r.yg)("inlineCode",{parentName:"p"},"metric")," and\n",(0,r.yg)("inlineCode",{parentName:"p"},"mode")," parameters to ",(0,r.yg)("inlineCode",{parentName:"p"},"tune.run()"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Arguments"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"metric")," ",(0,r.yg)("em",{parentName:"li"},"str")," - Key for trial info to order on. Defaults to\n",(0,r.yg)("inlineCode",{parentName:"li"},"self.default_metric"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"mode")," ",(0,r.yg)("em",{parentName:"li"},"str")," - One of ","[min, max]",". Defaults to ",(0,r.yg)("inlineCode",{parentName:"li"},"self.default_mode"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"scope")," ",(0,r.yg)("em",{parentName:"li"},"str")," - One of ","[all, last, avg, last-5-avg, last-10-avg]",".\nIf ",(0,r.yg)("inlineCode",{parentName:"li"},"scope=last"),", only look at each trial's final step for\n",(0,r.yg)("inlineCode",{parentName:"li"},"metric"),", and compare across trials based on ",(0,r.yg)("inlineCode",{parentName:"li"},"mode=[min,max]"),".\nIf ",(0,r.yg)("inlineCode",{parentName:"li"},"scope=avg"),", consider the simple average over all steps\nfor ",(0,r.yg)("inlineCode",{parentName:"li"},"metric")," and compare across trials based on\n",(0,r.yg)("inlineCode",{parentName:"li"},"mode=[min,max]"),". If ",(0,r.yg)("inlineCode",{parentName:"li"},"scope=last-5-avg")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"scope=last-10-avg"),",\nconsider the simple average over the last 5 or 10 steps for\n",(0,r.yg)("inlineCode",{parentName:"li"},"metric")," and compare across trials based on ",(0,r.yg)("inlineCode",{parentName:"li"},"mode=[min,max]"),".\nIf ",(0,r.yg)("inlineCode",{parentName:"li"},"scope=all"),", find each trial's min/max score for ",(0,r.yg)("inlineCode",{parentName:"li"},"metric"),"\nbased on ",(0,r.yg)("inlineCode",{parentName:"li"},"mode"),", and compare trials based on ",(0,r.yg)("inlineCode",{parentName:"li"},"mode=[min,max]"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"filter_nan_and_inf")," ",(0,r.yg)("em",{parentName:"li"},"bool")," - If True (default), NaN or infinite\nvalues are disregarded and these trials are never selected as\nthe best trial.")),(0,r.yg)("h4",{id:"get_best_config"},"get","_","best","_","config"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'def get_best_config(metric: Optional[str] = None, mode: Optional[str] = None, scope: str = "last") -> Optional[Dict]\n')),(0,r.yg)("p",null,"Retrieve the best config corresponding to the trial.\nCompares all trials' scores on ",(0,r.yg)("inlineCode",{parentName:"p"},"metric"),".\nIf ",(0,r.yg)("inlineCode",{parentName:"p"},"metric")," is not specified, ",(0,r.yg)("inlineCode",{parentName:"p"},"self.default_metric")," will be used.\nIf ",(0,r.yg)("inlineCode",{parentName:"p"},"mode")," is not specified, ",(0,r.yg)("inlineCode",{parentName:"p"},"self.default_mode")," will be used.\nThese values are usually initialized by passing the ",(0,r.yg)("inlineCode",{parentName:"p"},"metric")," and\n",(0,r.yg)("inlineCode",{parentName:"p"},"mode")," parameters to ",(0,r.yg)("inlineCode",{parentName:"p"},"tune.run()"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Arguments"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"metric")," ",(0,r.yg)("em",{parentName:"li"},"str")," - Key for trial info to order on. Defaults to\n",(0,r.yg)("inlineCode",{parentName:"li"},"self.default_metric"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"mode")," ",(0,r.yg)("em",{parentName:"li"},"str")," - One of ","[min, max]",". Defaults to ",(0,r.yg)("inlineCode",{parentName:"li"},"self.default_mode"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"scope")," ",(0,r.yg)("em",{parentName:"li"},"str")," - One of ","[all, last, avg, last-5-avg, last-10-avg]",".\nIf ",(0,r.yg)("inlineCode",{parentName:"li"},"scope=last"),", only look at each trial's final step for\n",(0,r.yg)("inlineCode",{parentName:"li"},"metric"),", and compare across trials based on ",(0,r.yg)("inlineCode",{parentName:"li"},"mode=[min,max]"),".\nIf ",(0,r.yg)("inlineCode",{parentName:"li"},"scope=avg"),", consider the simple average over all steps\nfor ",(0,r.yg)("inlineCode",{parentName:"li"},"metric")," and compare across trials based on\n",(0,r.yg)("inlineCode",{parentName:"li"},"mode=[min,max]"),". If ",(0,r.yg)("inlineCode",{parentName:"li"},"scope=last-5-avg")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"scope=last-10-avg"),",\nconsider the simple average over the last 5 or 10 steps for\n",(0,r.yg)("inlineCode",{parentName:"li"},"metric")," and compare across trials based on ",(0,r.yg)("inlineCode",{parentName:"li"},"mode=[min,max]"),".\nIf ",(0,r.yg)("inlineCode",{parentName:"li"},"scope=all"),", find each trial's min/max score for ",(0,r.yg)("inlineCode",{parentName:"li"},"metric"),"\nbased on ",(0,r.yg)("inlineCode",{parentName:"li"},"mode"),", and compare trials based on ",(0,r.yg)("inlineCode",{parentName:"li"},"mode=[min,max]"),".")),(0,r.yg)("h4",{id:"best_result"},"best","_","result"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"@property\ndef best_result() -> Dict\n")),(0,r.yg)("p",null,"Get the last result of the best trial of the experiment\nThe best trial is determined by comparing the last trial results\nusing the ",(0,r.yg)("inlineCode",{parentName:"p"},"metric")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"mode")," parameters passed to ",(0,r.yg)("inlineCode",{parentName:"p"},"tune.run()"),".\nIf you didn't pass these parameters, use\n",(0,r.yg)("inlineCode",{parentName:"p"},"get_best_trial(metric, mode, scope).last_result")," instead."))}m.isMDXComponent=!0}}]);