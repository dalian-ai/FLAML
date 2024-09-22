"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4519],{5680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>d});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),_=m(a),d=r,c=_["".concat(i,".").concat(d)]||_[d]||p[d]||o;return a?n.createElement(c,l(l({ref:t},u),{},{components:a})):n.createElement(c,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=_;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}_.displayName="MDXCreateElement"},223:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=a(8168),r=(a(6540),a(5680));const o={},l="AutoML - NLP",s={unversionedId:"Examples/AutoML-NLP",id:"Examples/AutoML-NLP",isDocsHomePage:!1,title:"AutoML - NLP",description:"Requirements",source:"@site/docs/Examples/AutoML-NLP.md",sourceDirName:"Examples",slug:"/Examples/AutoML-NLP",permalink:"/FLAML/docs/Examples/AutoML-NLP",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/Examples/AutoML-NLP.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"AutoML - Classification",permalink:"/FLAML/docs/Examples/AutoML-Classification"},next:{title:"AutoML - Rank",permalink:"/FLAML/docs/Examples/AutoML-Rank"}},i=[{value:"Requirements",id:"requirements",children:[],level:3},{value:"A simple sequence classification example",id:"a-simple-sequence-classification-example",children:[{value:"Sample output",id:"sample-output",children:[],level:4}],level:3},{value:"A simple sequence regression example",id:"a-simple-sequence-regression-example",children:[{value:"Sample output",id:"sample-output-1",children:[],level:4}],level:3},{value:"A simple summarization example",id:"a-simple-summarization-example",children:[{value:"Sample Output",id:"sample-output-2",children:[],level:4}],level:3},{value:"A simple token classification example",id:"a-simple-token-classification-example",children:[{value:"Sample Output",id:"sample-output-3",children:[],level:4}],level:3},{value:"Link to Jupyter notebook",id:"link-to-jupyter-notebook",children:[],level:3}],m={toc:i};function u(e){let{components:t,...a}=e;return(0,r.yg)("wrapper",(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"automl---nlp"},"AutoML - NLP"),(0,r.yg)("h3",{id:"requirements"},"Requirements"),(0,r.yg)("p",null,"This example requires GPU. Install the ","[","automl,hf","]"," option:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'pip install "flaml[automl,hf]"\n')),(0,r.yg)("h3",{id:"a-simple-sequence-classification-example"},"A simple sequence classification example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'from flaml import AutoML\nfrom datasets import load_dataset\n\ntrain_dataset = load_dataset("glue", "mrpc", split="train").to_pandas()\ndev_dataset = load_dataset("glue", "mrpc", split="validation").to_pandas()\ntest_dataset = load_dataset("glue", "mrpc", split="test").to_pandas()\ncustom_sent_keys = ["sentence1", "sentence2"]\nlabel_key = "label"\nX_train, y_train = train_dataset[custom_sent_keys], train_dataset[label_key]\nX_val, y_val = dev_dataset[custom_sent_keys], dev_dataset[label_key]\nX_test = test_dataset[custom_sent_keys]\n\nautoml = AutoML()\nautoml_settings = {\n    "time_budget": 100,\n    "task": "seq-classification",\n    "fit_kwargs_by_estimator": {\n        "transformer": {\n            "output_dir": "data/output/"  # if model_path is not set, the default model is facebook/muppet-roberta-base: https://huggingface.co/facebook/muppet-roberta-base\n        }\n    },  # setting the huggingface arguments: output directory\n    "gpu_per_trial": 1,  # set to 0 if no GPU is available\n}\nautoml.fit(\n    X_train=X_train, y_train=y_train, X_val=X_val, y_val=y_val, **automl_settings\n)\nautoml.predict(X_test)\n')),(0,r.yg)("p",null,"Notice that after you run ",(0,r.yg)("inlineCode",{parentName:"p"},"automl.fit"),", the intermediate checkpoints are saved under the specified output_dir ",(0,r.yg)("inlineCode",{parentName:"p"},"data/output"),". You can use the following code to clean these outputs if they consume a large storage space:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'if os.path.exists("data/output/"):\n    shutil.rmtree("data/output/")\n')),(0,r.yg)("h4",{id:"sample-output"},"Sample output"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"[flaml.automl: 12-06 08:21:39] {1943} INFO - task = seq-classification\n[flaml.automl: 12-06 08:21:39] {1945} INFO - Data split method: stratified\n[flaml.automl: 12-06 08:21:39] {1949} INFO - Evaluation method: holdout\n[flaml.automl: 12-06 08:21:39] {2019} INFO - Minimizing error metric: 1-accuracy\n[flaml.automl: 12-06 08:21:39] {2071} INFO - List of ML learners in AutoML Run: ['transformer']\n[flaml.automl: 12-06 08:21:39] {2311} INFO - iteration 0, current learner transformer\n{'data/output/train_2021-12-06_08-21-53/train_8947b1b2_1_n=1e-06,s=9223372036854775807,e=1e-05,s=-1,s=0.45765,e=32,d=42,o=0.0,y=0.0_2021-12-06_08-21-53/checkpoint-53': 53}\n[flaml.automl: 12-06 08:22:56] {2424} INFO - Estimated sufficient time budget=766860s. Estimated necessary time budget=767s.\n[flaml.automl: 12-06 08:22:56] {2499} INFO -  at 76.7s, estimator transformer's best error=0.1740,      best estimator transformer's best error=0.1740\n[flaml.automl: 12-06 08:22:56] {2606} INFO - selected model: <flaml.nlp.huggingface.trainer.TrainerForAuto object at 0x7f49ea8414f0>\n[flaml.automl: 12-06 08:22:56] {2100} INFO - fit succeeded\n[flaml.automl: 12-06 08:22:56] {2101} INFO - Time taken to find the best model: 76.69802761077881\n[flaml.automl: 12-06 08:22:56] {2112} WARNING - Time taken to find the best model is 77% of the provided time budget and not all estimators' hyperparameter search converged. Consider increasing the time budget.\n")),(0,r.yg)("h3",{id:"a-simple-sequence-regression-example"},"A simple sequence regression example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'from flaml import AutoML\nfrom datasets import load_dataset\n\ntrain_dataset = load_dataset("glue", "stsb", split="train").to_pandas()\ndev_dataset = load_dataset("glue", "stsb", split="train").to_pandas()\ncustom_sent_keys = ["sentence1", "sentence2"]\nlabel_key = "label"\nX_train = train_dataset[custom_sent_keys]\ny_train = train_dataset[label_key]\nX_val = dev_dataset[custom_sent_keys]\ny_val = dev_dataset[label_key]\n\nautoml = AutoML()\nautoml_settings = {\n    "gpu_per_trial": 0,\n    "time_budget": 20,\n    "task": "seq-regression",\n    "metric": "rmse",\n}\nautoml_settings["fit_kwargs_by_estimator"] = {  # setting the huggingface arguments\n    "transformer": {\n        "model_path": "google/electra-small-discriminator",  # if model_path is not set, the default model is facebook/muppet-roberta-base: https://huggingface.co/facebook/muppet-roberta-base\n        "output_dir": "data/output/",  # setting the output directory\n        "fp16": False,\n    }  # setting whether to use FP16\n}\nautoml.fit(\n    X_train=X_train, y_train=y_train, X_val=X_val, y_val=y_val, **automl_settings\n)\n')),(0,r.yg)("h4",{id:"sample-output-1"},"Sample output"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"[flaml.automl: 12-20 11:47:28] {1965} INFO - task = seq-regression\n[flaml.automl: 12-20 11:47:28] {1967} INFO - Data split method: uniform\n[flaml.automl: 12-20 11:47:28] {1971} INFO - Evaluation method: holdout\n[flaml.automl: 12-20 11:47:28] {2063} INFO - Minimizing error metric: rmse\n[flaml.automl: 12-20 11:47:28] {2115} INFO - List of ML learners in AutoML Run: ['transformer']\n[flaml.automl: 12-20 11:47:28] {2355} INFO - iteration 0, current learner transformer\n")),(0,r.yg)("h3",{id:"a-simple-summarization-example"},"A simple summarization example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'from flaml import AutoML\nfrom datasets import load_dataset\n\ntrain_dataset = load_dataset("xsum", split="train").to_pandas()\ndev_dataset = load_dataset("xsum", split="validation").to_pandas()\ncustom_sent_keys = ["document"]\nlabel_key = "summary"\n\nX_train = train_dataset[custom_sent_keys]\ny_train = train_dataset[label_key]\n\nX_val = dev_dataset[custom_sent_keys]\ny_val = dev_dataset[label_key]\n\nautoml = AutoML()\nautoml_settings = {\n    "gpu_per_trial": 1,\n    "time_budget": 20,\n    "task": "summarization",\n    "metric": "rouge1",\n}\nautoml_settings["fit_kwargs_by_estimator"] = {  # setting the huggingface arguments\n    "transformer": {\n        "model_path": "t5-small",  # if model_path is not set, the default model is t5-small: https://huggingface.co/t5-small\n        "output_dir": "data/output/",  # setting the output directory\n        "fp16": False,\n    }  # setting whether to use FP16\n}\nautoml.fit(\n    X_train=X_train, y_train=y_train, X_val=X_val, y_val=y_val, **automl_settings\n)\n')),(0,r.yg)("h4",{id:"sample-output-2"},"Sample Output"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'[flaml.automl: 12-20 11:44:03] {1965} INFO - task = summarization\n[flaml.automl: 12-20 11:44:03] {1967} INFO - Data split method: uniform\n[flaml.automl: 12-20 11:44:03] {1971} INFO - Evaluation method: holdout\n[flaml.automl: 12-20 11:44:03] {2063} INFO - Minimizing error metric: -rouge\n[flaml.automl: 12-20 11:44:03] {2115} INFO - List of ML learners in AutoML Run: [\'transformer\']\n[flaml.automl: 12-20 11:44:03] {2355} INFO - iteration 0, current learner transformer\nloading configuration file https://huggingface.co/t5-small/resolve/main/config.json from cache at /home/xliu127/.cache/huggingface/transformers/fe501e8fd6425b8ec93df37767fcce78ce626e34cc5edc859c662350cf712e41.406701565c0afd9899544c1cb8b93185a76f00b31e5ce7f6e18bbaef02241985\nModel config T5Config {\n  "_name_or_path": "t5-small",\n  "architectures": [\n    "T5WithLMHeadModel"\n  ],\n  "d_ff": 2048,\n  "d_kv": 64,\n  "d_model": 512,\n  "decoder_start_token_id": 0,\n  "dropout_rate": 0.1,\n  "eos_token_id": 1,\n  "feed_forward_proj": "relu",\n  "initializer_factor": 1.0,\n  "is_encoder_decoder": true,\n  "layer_norm_epsilon": 1e-06,\n  "model_type": "t5",\n  "n_positions": 512,\n  "num_decoder_layers": 6,\n  "num_heads": 8,\n  "num_layers": 6,\n  "output_past": true,\n  "pad_token_id": 0,\n  "relative_attention_num_buckets": 32,\n  "task_specific_params": {\n    "summarization": {\n      "early_stopping": true,\n      "length_penalty": 2.0,\n      "max_length": 200,\n      "min_length": 30,\n      "no_repeat_ngram_size": 3,\n      "num_beams": 4,\n      "prefix": "summarize: "\n    },\n    "translation_en_to_de": {\n      "early_stopping": true,\n      "max_length": 300,\n      "num_beams": 4,\n      "prefix": "translate English to German: "\n    },\n    "translation_en_to_fr": {\n      "early_stopping": true,\n      "max_length": 300,\n      "num_beams": 4,\n      "prefix": "translate English to French: "\n    },\n    "translation_en_to_ro": {\n      "early_stopping": true,\n      "max_length": 300,\n      "num_beams": 4,\n      "prefix": "translate English to Romanian: "\n    }\n  },\n  "transformers_version": "4.14.1",\n  "use_cache": true,\n  "vocab_size": 32128\n}\n')),(0,r.yg)("h3",{id:"a-simple-token-classification-example"},"A simple token classification example"),(0,r.yg)("p",null,"There are two ways to define the label for a token classification task. The first is to define the token labels:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'from flaml import AutoML\nimport pandas as pd\n\ntrain_dataset = {\n    "id": ["0", "1"],\n    "ner_tags": [\n        ["B-ORG", "O", "B-MISC", "O", "O", "O", "B-MISC", "O", "O"],\n        ["B-PER", "I-PER"],\n    ],\n    "tokens": [\n        [\n            "EU",\n            "rejects",\n            "German",\n            "call",\n            "to",\n            "boycott",\n            "British",\n            "lamb",\n            ".",\n        ],\n        ["Peter", "Blackburn"],\n    ],\n}\ndev_dataset = {\n    "id": ["0"],\n    "ner_tags": [\n        ["O"],\n    ],\n    "tokens": [["1996-08-22"]],\n}\ntest_dataset = {\n    "id": ["0"],\n    "ner_tags": [\n        ["O"],\n    ],\n    "tokens": [["."]],\n}\ncustom_sent_keys = ["tokens"]\nlabel_key = "ner_tags"\n\ntrain_dataset = pd.DataFrame(train_dataset)\ndev_dataset = pd.DataFrame(dev_dataset)\ntest_dataset = pd.DataFrame(test_dataset)\n\nX_train, y_train = train_dataset[custom_sent_keys], train_dataset[label_key]\nX_val, y_val = dev_dataset[custom_sent_keys], dev_dataset[label_key]\nX_test = test_dataset[custom_sent_keys]\n\nautoml = AutoML()\nautoml_settings = {\n    "time_budget": 10,\n    "task": "token-classification",\n    "fit_kwargs_by_estimator": {\n        "transformer": {\n            "output_dir": "data/output/"\n            # if model_path is not set, the default model is facebook/muppet-roberta-base: https://huggingface.co/facebook/muppet-roberta-base\n        }\n    },  # setting the huggingface arguments: output directory\n    "gpu_per_trial": 1,  # set to 0 if no GPU is available\n    "metric": "seqeval:overall_f1",\n}\n\nautoml.fit(\n    X_train=X_train, y_train=y_train, X_val=X_val, y_val=y_val, **automl_settings\n)\nautoml.predict(X_test)\n')),(0,r.yg)("p",null,"The second is to define the id labels + a token ",(0,r.yg)("a",{parentName:"p",href:"https://microsoft.github.io/FLAML/docs/reference/nlp/huggingface/training_args"},"label list"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'from flaml import AutoML\nimport pandas as pd\n\ntrain_dataset = {\n    "id": ["0", "1"],\n    "ner_tags": [\n        [3, 0, 7, 0, 0, 0, 7, 0, 0],\n        [1, 2],\n    ],\n    "tokens": [\n        [\n            "EU",\n            "rejects",\n            "German",\n            "call",\n            "to",\n            "boycott",\n            "British",\n            "lamb",\n            ".",\n        ],\n        ["Peter", "Blackburn"],\n    ],\n}\ndev_dataset = {\n    "id": ["0"],\n    "ner_tags": [\n        [0],\n    ],\n    "tokens": [["1996-08-22"]],\n}\ntest_dataset = {\n    "id": ["0"],\n    "ner_tags": [\n        [0],\n    ],\n    "tokens": [["."]],\n}\ncustom_sent_keys = ["tokens"]\nlabel_key = "ner_tags"\n\ntrain_dataset = pd.DataFrame(train_dataset)\ndev_dataset = pd.DataFrame(dev_dataset)\ntest_dataset = pd.DataFrame(test_dataset)\n\nX_train, y_train = train_dataset[custom_sent_keys], train_dataset[label_key]\nX_val, y_val = dev_dataset[custom_sent_keys], dev_dataset[label_key]\nX_test = test_dataset[custom_sent_keys]\n\nautoml = AutoML()\nautoml_settings = {\n    "time_budget": 10,\n    "task": "token-classification",\n    "fit_kwargs_by_estimator": {\n        "transformer": {\n            "output_dir": "data/output/",\n            # if model_path is not set, the default model is facebook/muppet-roberta-base: https://huggingface.co/facebook/muppet-roberta-base\n            "label_list": [\n                "O",\n                "B-PER",\n                "I-PER",\n                "B-ORG",\n                "I-ORG",\n                "B-LOC",\n                "I-LOC",\n                "B-MISC",\n                "I-MISC",\n            ],\n        }\n    },  # setting the huggingface arguments: output directory\n    "gpu_per_trial": 1,  # set to 0 if no GPU is available\n    "metric": "seqeval:overall_f1",\n}\n\nautoml.fit(\n    X_train=X_train, y_train=y_train, X_val=X_val, y_val=y_val, **automl_settings\n)\nautoml.predict(X_test)\n')),(0,r.yg)("h4",{id:"sample-output-3"},"Sample Output"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"[flaml.automl: 06-30 03:10:02] {2423} INFO - task = token-classification\n[flaml.automl: 06-30 03:10:02] {2425} INFO - Data split method: stratified\n[flaml.automl: 06-30 03:10:02] {2428} INFO - Evaluation method: holdout\n[flaml.automl: 06-30 03:10:02] {2497} INFO - Minimizing error metric: seqeval:overall_f1\n[flaml.automl: 06-30 03:10:02] {2637} INFO - List of ML learners in AutoML Run: ['transformer']\n[flaml.automl: 06-30 03:10:02] {2929} INFO - iteration 0, current learner transformer\n")),(0,r.yg)("p",null,"For tasks that are not currently supported, use ",(0,r.yg)("inlineCode",{parentName:"p"},"flaml.tune")," for ",(0,r.yg)("a",{parentName:"p",href:"Tune-HuggingFace"},"customized tuning"),"."),(0,r.yg)("h3",{id:"link-to-jupyter-notebook"},"Link to Jupyter notebook"),(0,r.yg)("p",null,"To run more examples, especially examples using Ray Tune, please go to:"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/microsoft/FLAML/blob/main/notebook/automl_nlp.ipynb"},"Link to notebook")," | ",(0,r.yg)("a",{parentName:"p",href:"https://colab.research.google.com/github/microsoft/FLAML/blob/main/notebook/automl_nlp.ipynb"},"Open in colab")))}u.isMDXComponent=!0}}]);