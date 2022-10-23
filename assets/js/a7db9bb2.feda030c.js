"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8365],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1153:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={},i="Tune - Lexicographic Objectives",c={unversionedId:"Examples/Tune-Lexicographic-objectives",id:"Examples/Tune-Lexicographic-objectives",isDocsHomePage:!1,title:"Tune - Lexicographic Objectives",description:"Requirements",source:"@site/docs/Examples/Tune-Lexicographic-objectives.md",sourceDirName:"Examples",slug:"/Examples/Tune-Lexicographic-objectives",permalink:"/FLAML/docs/Examples/Tune-Lexicographic-objectives",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/Examples/Tune-Lexicographic-objectives.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Tune - HuggingFace",permalink:"/FLAML/docs/Examples/Tune-HuggingFace"},next:{title:"Tune - PyTorch",permalink:"/FLAML/docs/Examples/Tune-PyTorch"}},l=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Tuning accurate and efficient neural networks with lexicographic preference",id:"tuning-accurate-and-efficient-neural-networks-with-lexicographic-preference",children:[{value:"Data",id:"data",children:[],level:3},{value:"Specific the model",id:"specific-the-model",children:[],level:3},{value:"Train",id:"train",children:[],level:3},{value:"Metrics",id:"metrics",children:[],level:3},{value:"Evaluation function",id:"evaluation-function",children:[],level:3},{value:"Search space",id:"search-space",children:[],level:3},{value:"Launch the tuning process",id:"launch-the-tuning-process",children:[],level:3}],level:2}],s={toc:l};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tune---lexicographic-objectives"},"Tune - Lexicographic Objectives"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"pip install flaml thop torchvision torch\n")),(0,a.kt)("h2",{id:"tuning-accurate-and-efficient-neural-networks-with-lexicographic-preference"},"Tuning accurate and efficient neural networks with lexicographic preference"),(0,a.kt)("h3",{id:"data"},"Data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import torch\nimport thop\nimport torch.nn as nn\nfrom flaml import tune\nimport torch.nn.functional as F\nimport torchvision\nimport numpy as np\nimport os\n\nDEVICE = torch.device("cpu")\nBATCHSIZE = 128\nN_TRAIN_EXAMPLES = BATCHSIZE * 30\nN_VALID_EXAMPLES = BATCHSIZE * 10\ndata_dir = os.path.abspath("data")\n\ntrain_dataset = torchvision.datasets.FashionMNIST(\n    data_dir,\n    train=True,\n    download=True,\n    transform=torchvision.transforms.ToTensor(),\n)\n\ntrain_loader = torch.utils.data.DataLoader(\n    torch.utils.data.Subset(train_dataset, list(range(N_TRAIN_EXAMPLES))),\n    batch_size=BATCHSIZE,\n    shuffle=True,\n)\n\nval_dataset = torchvision.datasets.FashionMNIST(\n    data_dir, train=False, transform=torchvision.transforms.ToTensor()\n)\n\nval_loader = torch.utils.data.DataLoader(\n    torch.utils.data.Subset(val_dataset, list(range(N_VALID_EXAMPLES))),\n    batch_size=BATCHSIZE,\n    shuffle=True,\n')),(0,a.kt)("h3",{id:"specific-the-model"},"Specific the model"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def define_model(configuration):\n    n_layers = configuration["n_layers"]\n    layers = []\n    in_features = 28 * 28\n    for i in range(n_layers):\n        out_features = configuration["n_units_l{}".format(i)]\n        layers.append(nn.Linear(in_features, out_features))\n        layers.append(nn.ReLU())\n        p = configuration["dropout_{}".format(i)]\n        layers.append(nn.Dropout(p))\n        in_features = out_features\n    layers.append(nn.Linear(in_features, 10))\n    layers.append(nn.LogSoftmax(dim=1))\n    return nn.Sequential(*layers)\n')),(0,a.kt)("h3",{id:"train"},"Train"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def train_model(model, optimizer, train_loader):\n    model.train()\n    for batch_idx, (data, target) in enumerate(train_loader):\n        data, target = data.view(-1, 28 * 28).to(DEVICE), target.to(DEVICE)\n        optimizer.zero_grad()\n        F.nll_loss(model(data), target).backward()\n        optimizer.step()\n")),(0,a.kt)("h3",{id:"metrics"},"Metrics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def eval_model(model, valid_loader):\n    model.eval()\n    correct = 0\n    with torch.no_grad():\n        for batch_idx, (data, target) in enumerate(valid_loader):\n            data, target = data.view(-1, 28 * 28).to(DEVICE), target.to(DEVICE)\n            pred = model(data).argmax(dim=1, keepdim=True)\n            correct += pred.eq(target.view_as(pred)).sum().item()\n\n    accuracy = correct / N_VALID_EXAMPLES\n    flops, params = thop.profile(\n        model, inputs=(torch.randn(1, 28 * 28).to(DEVICE),), verbose=False\n    )\n    return np.log2(flops), 1 - accuracy, params\n")),(0,a.kt)("h3",{id:"evaluation-function"},"Evaluation function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def evaluate_function(configuration):\n    model = define_model(configuration).to(DEVICE)\n    optimizer = torch.optim.Adam(model.parameters(), configuration["lr"])\n    n_epoch = configuration["n_epoch"]\n    for epoch in range(n_epoch):\n        train_model(model, optimizer, train_loader)\n    flops, error_rate, params = eval_model(model, val_loader)\n    return {"error_rate": error_rate, "flops": flops, "params": params}\n')),(0,a.kt)("h3",{id:"search-space"},"Search space"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'search_space = {\n    "n_layers": tune.randint(lower=1, upper=3),\n    "n_units_l0": tune.randint(lower=4, upper=128),\n    "n_units_l1": tune.randint(lower=4, upper=128),\n    "n_units_l2": tune.randint(lower=4, upper=128),\n    "dropout_0": tune.uniform(lower=0.2, upper=0.5),\n    "dropout_1": tune.uniform(lower=0.2, upper=0.5),\n    "dropout_2": tune.uniform(lower=0.2, upper=0.5),\n    "lr": tune.loguniform(lower=1e-5, upper=1e-1),\n    "n_epoch": tune.randint(lower=1, upper=20),\n}\n')),(0,a.kt)("h3",{id:"launch-the-tuning-process"},"Launch the tuning process"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\n# Low cost initial point\nlow_cost_partial_config = {\n    "n_layers": 1,\n    "n_units_l0": 4,\n    "n_units_l1": 4,\n    "n_units_l2": 4,\n    "n_epoch": 1,\n}\n\n# Specific lexicographic preference\nlexico_objectives = {}\nlexico_objectives["metrics"] = ["error_rate", "flops"]\nlexico_objectives["tolerances"] = {"error_rate": 0.02, "flops": 0.0}\nlexico_objectives["targets"] = {"error_rate": 0.0, "flops": 0.0}\nlexico_objectives["modes"] = ["min", "min"]\n\n# launch the tuning process\nanalysis = tune.run(\n    evaluate_function,\n    num_samples=-1,\n    time_budget_s=100,\n    config=search_space, # search space of NN\n    use_ray=False,\n    lexico_objectives=lexico_objectives,\n    low_cost_partial_config=low_cost_partial_config, # low cost initial point\n)\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/FLAML/blob/main/notebook/tune_lexicographic.ipynb"},"Link to notebook")," | ",(0,a.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/microsoft/FLAML/blob/main/notebook/tune_lexicographic.ipynb"},"Open in colab")))}p.isMDXComponent=!0}}]);