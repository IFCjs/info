(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2052],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||c;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,a=new Array(c);a[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<c;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3878:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});var r=n(7294),i="icon_1PGw",c=n(9205),a=function(e){return r.createElement("div",{className:"alert alert--primary",role:"alert",style:{margin:"2rem"}},r.createElement("div",{className:i},r.createElement(c.A,{icon:"\ud83d\udca1",active:"true"})),e.children)}},983:function(e,t,n){"use strict";n.d(t,{M:function(){return l}});var r=n(7294),i=n(9205),c="titleOffset_2I3u",a="iconContainer_1xRA",l=function(e){var t=e.title?r.createElement("div",{className:"card__header"},r.createElement("span",{className:a},e.icon&&r.createElement(i.A,{icon:e.icon,link:e.link,active:"true"})),r.createElement("h3",{className:e.icon&&c},e.title)):"";return r.createElement("div",{className:"card-demo",style:{margin:"2rem"}},r.createElement("div",{className:"card"},t,r.createElement("div",{className:"card__body"},r.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return s}});var r=n(7294),i="hidden_2JtY",c="iconContainer_2Rnc",a="visible_2147",l="link_Lh4h",o="clickable_3vcc",s=function(e){var t=" "+(e.active?a:i),n=l+" "+(e.link&&o);return r.createElement("div",{className:c+t},r.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},6649:function(e,t,n){"use strict";n.d(t,{x:function(){return c}});var r=n(7294),i="threeScene_3QXR",c=function(e){return r.createElement("iframe",{className:i,width:"100%",height:"600px",key:Math.random(),src:e.link,frameBorder:"0"})}},1661:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y},frontMatter:function(){return I},metadata:function(){return C},toc:function(){return b}});var r=n(2122),i=n(9756),c=n(7294),a=n(3905),l=n(983),o=n(3878),s=n(6649),u="ifcTabItem_3jhz",d="ifcTabContent_2OBh",p="linkContainer_2bzd",f="iconSpacing_2WTy",m=n(9205),k=function(e){var t,n=0,r=(0,c.useState)(e.items.map((function(e){return{name:e.name,selected:0===n,content:e.content,key:n++,icon:e.icon,link:e.link}}))),i=r[0],a=r[1],l=(0,c.useState)(!1),o=l[0],s=l[1];function k(e){return e.selected?" tabs__item--active ":""}function h(){return i.find((function(e){return e.selected}))}return c.createElement("div",null,c.createElement("ul",{className:"tabs ifc-tab"},i.map((function(e){return c.createElement("li",{onClick:function(){return t=e.key,(n=[].concat(i)).forEach((function(e){return e.selected=!1})),n.find((function(e){return e.key===t})).selected=!0,void a(n);var t,n},className:"tabs__item "+u+k(e),key:e.key},function(e){return e.icon?c.createElement("div",{className:f},c.createElement(m.A,{icon:e.icon,active:"true"})):e.name}(e))}))),c.createElement("div",{className:d,onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)}},h().content,(t=h()).link?c.createElement("div",{className:p},c.createElement(m.A,{link:t.link,active:t.link&&o})):null))},h=["components"],I={title:"\u7b80\u4ecb",sidebar_position:1},C={unversionedId:"Introduction",id:"Introduction",isDocsHomePage:!1,title:"\u7b80\u4ecb",description:"\ud83c\udfae",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/Introduction.mdx",sourceDirName:".",slug:"/Introduction",permalink:"/info/zh/docs/Introduction",version:"current",sidebarPosition:1,frontMatter:{title:"\u7b80\u4ecb",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Patreon",permalink:"/info/zh/docs/Patreon"}},b=[{value:"\u8fd9\u4e2a\u5e93\u662f\u4ec0\u4e48\uff1f",id:"\u8fd9\u4e2a\u5e93\u662f\u4ec0\u4e48\uff1f",children:[{value:"\u4ec0\u4e48\u662fIFC\uff1f",id:"\u4ec0\u4e48\u662fifc\uff1f",children:[]},{value:"IFC\u683c\u5f0f\u7684\u95ee\u9898",id:"ifc\u683c\u5f0f\u7684\u95ee\u9898",children:[]},{value:"IFC.js\u7684\u6551\u63f4",id:"ifcjs\u7684\u6551\u63f4",children:[]}]},{value:"IFC.js \u7b80\u800c\u8a00\u4e4b",id:"ifcjs-\u7b80\u800c\u8a00\u4e4b",children:[]},{value:"\u8fd9\u4e2a\u56fe\u4e66\u9986\u662f\u4e3a\u8c01\u51c6\u5907\u7684",id:"\u8fd9\u4e2a\u56fe\u4e66\u9986\u662f\u4e3a\u8c01\u51c6\u5907\u7684",children:[]},{value:"\u4e3a\u4ec0\u4e48IFC.js\u4e0e\u4f17\u4e0d\u540c\uff1f",id:"\u4e3a\u4ec0\u4e48ifcjs\u4e0e\u4f17\u4e0d\u540c\uff1f",children:[{value:"\u591a\u5e73\u53f0",id:"\u591a\u5e73\u53f0",children:[]},{value:"\u901f\u5ea6",id:"\u901f\u5ea6",children:[]},{value:"\u7279\u70b9",id:"\u7279\u70b9",children:[]}]},{value:"\u6e90\u4ee3\u7801",id:"\u6e90\u4ee3\u7801",children:[]},{value:"\u8d21\u732e",id:"\u8d21\u732e",children:[]}],v={toc:b};function y(e){var t=e.components,n=(0,i.Z)(e,h);return(0,a.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"  \ud83c\udfae\nIFC.js\u662f\u4e00\u4e2aJavaScript\u5e93\uff0c\u7528\u4e8e\u5728\u6d4f\u89c8\u5668\u4e2d\u52a0\u8f7d\u3001\u663e\u793a\u548c\u7f16\u8f91IFC\u6a21\u578b\u3002\u7528\u4f60\u7684IFC\u6a21\u578b\u8bd5\u8bd5",(0,a.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/web-ifc-viewer/example/index"},"\u73b0\u573a\u6f14\u793a"),"\uff0c\u53d1\u73b0IFC.js\u7684\u529b\u91cf\u3002"),(0,a.kt)("h2",{id:"\u8fd9\u4e2a\u5e93\u662f\u4ec0\u4e48\uff1f"},"\u8fd9\u4e2a\u5e93\u662f\u4ec0\u4e48\uff1f"),(0,a.kt)("h3",{id:"\u4ec0\u4e48\u662fifc\uff1f"},"\u4ec0\u4e48\u662fIFC\uff1f"),(0,a.kt)("p",null,"\ud83c\udfe0\n\u5efa\u7b51\u5e08\u4e0d\u518d\u9010\u4e00\u7ed8\u5236\u5efa\u7b51\u56fe\u7eb8\uff0c\u800c\u662f\u521b\u5efa\u5efa\u7b51\u7684\u4e09\u7ef4\u6a21\u578b\uff0c\u5c31\u50cf",(0,a.kt)("a",{parentName:"p",href:"https://www.ea.com/es-es/games/the-sims"},"The SIMS"),"\u4e2d\u5efa\u6a21\u7684\u623f\u5c4b\u4e00\u6837\u3002\u8fd9\u79cd\u5de5\u4f5c\u65b9\u5f0f\u88ab\u79f0\u4e3aBIM\uff08\u5efa\u7b51\u4fe1\u606f\u6a21\u578b\uff09\uff0c\u56e0\u4e3a\u521b\u5efa\u7684\u6a21\u578b\u540c\u65f6\u5305\u542b\u4e86\u51e0\u4f55\u56fe\u5f62\u548c\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\ud83d\udd25\n\u7136\u800c\uff0c\u5efa\u7b51\u662f\u5982\u6b64\u7684\u590d\u6742\uff0c\u4ee5\u81f3\u4e8e\u6ca1\u6709\u4e00\u4e2a\u5355\u4e00\u7684\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u5b8c\u6574\u5730\u521b\u5efa\u8fd9\u4e9b\u6a21\u578b\u3002\u6bcf\u4e2a\u5e94\u7528\u7a0b\u5e8f\u90fd\u6709\u4e00\u4e2a\u7279\u5b9a\u7684\u4efb\u52a1\uff1a\u5efa\u7acb\u51e0\u4f55\u6a21\u578b\uff0c\u8ba1\u7b97\u7ed3\u6784\uff0c\u8fdb\u884c\u80fd\u6e90\u6a21\u62df\uff0c\u521b\u5efa\u9879\u76ee\u6587\u4ef6\uff0c\u7b49\u7b49\u3002"),(0,a.kt)("p",null,"\ud83d\udc40\n\u8fd9\u4e9b\u5de5\u5177\u6765\u81ea\u4e16\u754c\u5404\u5730\u7684\u591a\u4e2a\u5f00\u53d1\u5546\uff0c\u6bcf\u4e00\u4e2a\u90fd\u6309\u5176\u683c\u5f0f\u5de5\u4f5c\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u7531\u7ed3\u6784\u8ba1\u7b97\u5e94\u7528\u7a0b\u5e8f\u521b\u5efa\u7684\u7ed3\u6784\u6a21\u578b\u4e0d\u80fd\u88ab\u80fd\u6e90\u6a21\u62df\u8f6f\u4ef6\u8bfb\u53d6\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002\u90a3\u4e48\uff0c\u5982\u4f55\u80fd\u4ece\u591a\u4e2a\u5de5\u5177\u4e2d\u521b\u5efa\u4e00\u4e2a\u5efa\u7b51\u6a21\u578b\u5462\uff1f"),(0,a.kt)("p",null,"\ud83c\udf89\n\u7b54\u6848\u662f",(0,a.kt)("a",{parentName:"p",href:"https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/"},(0,a.kt)("strong",{parentName:"a"},"IFC")),"\uff0c\u8fd9\u662fBuildingSMART\u521b\u5efa\u7684\u4e00\u79cd\u683c\u5f0f\uff0c\u7528\u4e8e\u5305\u542b\u8fd9\u4e9b\u5efa\u7b51\u7684\u4e09\u7ef4\u6a21\u578b\u3002\u5b83\u662f\u5f00\u653e\u7684\uff0c\u6240\u4ee5\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u8bfb\u548c\u5199\u5b83\u3002\u8036!"),(0,a.kt)(o.r,{mdxType:"IfcAlert"},"\u7531\u4e8eIFC\u7684\u5b58\u5728\uff0c\u4efb\u4f55\u5f00\u53d1\u8005\u90fd\u53ef\u4ee5\u81ea\u7531\u5730\u521b\u5efaBIM\u5e94\u7528\u7a0b\u5e8f\uff0c\u53ef\u4ee5\u4e0e\u5efa\u7b51\u9886\u57df\u7684\u5927\u578b\u5f00\u53d1\u516c\u53f8\u7684\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u4ea4\u6d41\u3002"),(0,a.kt)("h3",{id:"ifc\u683c\u5f0f\u7684\u95ee\u9898"},"IFC\u683c\u5f0f\u7684\u95ee\u9898"),(0,a.kt)("p",null,"\u4efb\u4f55\u60f3\u505aBIM\u5e94\u7528\u7684\u4eba\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u9700\u8981\u8bfb\u5199IFC\u6587\u4ef6\uff0c"),"\u80fd\u591f\u4ece\u5176\u4ed6\u5de5\u5177\u4e2d\u5bfc\u5165\u548c\u5bfc\u51fa\u4fe1\u606f\u3002\u4e0d\u5e78\u7684\u662f\uff0cIFC\u662f\u4e00\u79cd\u5f88\u96be\u8bfb\u548c\u5199\u7684\u683c\u5f0f\u3002\u6709\u51e0\u5343\u9875\u7684\u6587\u6863\uff0c\u521b\u5efa\u548c\u7ef4\u62a4\u4e00\u4e2a\u81ea\u5236\u7684IFC\u89e3\u6790\u5668\u662f\u4e00\u9879\u5de8\u5927\u7684\u4efb\u52a1\u3002"),(0,a.kt)(l.M,{title:"\n\u4f60\u80fd\u8d1f\u62c5\u5f97\u8d77IFC\u5417\uff1f",mdxType:"IfcCard"},"\ud83d\udcb8 \u8fd9\u662f\u53ea\u6709\u62e5\u6709\u51e0\u4e2a\u5f00\u53d1\u4eba\u5458\u5168\u804c\u5de5\u4f5c\u7684\u516c\u53f8\u624d\u80fd\u8d1f\u62c5\u5f97\u8d77\u7684\u4e8b\u60c5\u3002\u8fd9\u542c\u8d77\u6765\u4e0d\u518d\u90a3\u4e48\u5f00\u653e\u4e86\uff0c\u4e0d\u662f\u5417\uff1f"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5bf9IFC\u5185\u90e8\u7684\u6837\u5b50\u611f\u5230\u597d\u5947\uff0c\u8fd9\u91cc\u6709\u4e00\u4e2a\u4f8b\u5b50\u3002\u60f3\u8c61\u4e00\u4e0b\uff0c\u8981\u89e3\u6790\u6210\u767e\u4e0a\u5343\u884c\u8fd9\u6837\u7684\u5185\u5bb9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"#6699= IFCCARTESIANPOINT((0.,-1.7053025E-13));\n#6701= IFCAXIS2PLACEMENT2D(#6699,#23);\n#6703= IFCCARTESIANPOINT((892.,-253.399999,150.));\n#6705= IFCAXIS2PLACEMENT3D(#6703,#15,#19);\n#6706= IFCEXTRUDEDAREASOLID(#6702,#6705,#19,506.8);\n#6707= IFCCOLOURRGB($,0.50196,0.501913,0.501960);\n")),(0,a.kt)("p",null,"  \ud83d\udc80\n\u5373\u4f7f\u4f60\u613f\u610f\u4ece\u5934\u5f00\u59cb\u521b\u5efa\u4e00\u4e2a\u89e3\u6790\u5668\uff0c\u5e76\u968f\u7740IFC\u6a21\u5f0f\u7684\u6bcf\u4e00\u6b21\u6539\u53d8\u800c\u7ef4\u62a4\u5b83\uff0c\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u4e5f\u6709\u51e0\u4e2a\u975e\u7b80\u5355\u7684\u95ee\u9898\u3002\u5982\u4f55\u5728\u975e\u5e38\u5927\u7684\u6587\u4ef6\u4e2d\u7ba1\u7406\u5185\u5b58\uff1f\u5982\u4f55\u6709\u6548\u5730\u5b9e\u73b0\u51e0\u4f55\u56fe\u5f62\u7684\u751f\u6210\uff1f\u5f53\u4e00\u4e2aIFC\u6ca1\u6709\u88ab\u6b63\u786e\u5b9a\u4e49\u65f6\uff0c\u8be5\u600e\u4e48\u529e\uff1f"),(0,a.kt)("h3",{id:"ifcjs\u7684\u6551\u63f4"},"IFC.js\u7684\u6551\u63f4"),(0,a.kt)("p",null,"\u5982\u679c\u6240\u6709\u7684\u5f00\u53d1\u8005\u90fd\u5fc5\u987b\u4e3a\u4ed6\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u5b9e\u73b0\u81ea\u5df1\u7684IFC\u6587\u4ef6\u8bfb\u5199\u5668\uff0c\u90a3\u5c31\u6ca1\u6709\u610f\u4e49\u4e86\u3002\u7279\u522b\u662f\u5f53\u6211\u4eec\u90fd\u60f3\u8981\u540c\u6837\u7684\u4e1c\u897f\u65f6\u3002",(0,a.kt)("strong",{parentName:"p"},"\u5bfc\u5165\u548c\u5bfc\u51fa\u51e0\u4f55\u56fe\u5f62\u548c\u6570\u636e"),"\u3002"),(0,a.kt)(l.M,{mdxType:"IfcCard"},"IFC.js\u662f\u4e00\u4e2aJavaScript\u5e93\uff0c\u5b83\u4f7f",(0,a.kt)("b",null,"\u8bfb\u548c\u5199IFC\u6587\u4ef6"),"\u53d8\u5f97\u8d85\u7ea7\u7b80\u5355\u3002"),(0,a.kt)("p",null,"\u8fd9\u4f7f\u5efa\u7b51\u548c\u65bd\u5de5\u5e94\u7528\u7a0b\u5e8f\u7684\u5f00\u53d1\u8005\u80fd\u591f\u6beb\u4e0d\u8d39\u529b\u5730\u5728IFC\u4e2d\u5de5\u4f5c\uff0c\u5e76\u4e13\u6ce8\u4e8e\u4e3a\u5176\u4e1a\u52a1\u589e\u52a0\u4ef7\u503c\u7684\u529f\u80fd\u3002"),(0,a.kt)("h2",{id:"ifcjs-\u7b80\u800c\u8a00\u4e4b"},"IFC.js \u7b80\u800c\u8a00\u4e4b"),(0,a.kt)("p",null,"IFC.js\u6709\u4e24\u4e2a\u91cd\u70b9\u3002"),(0,a.kt)(l.M,{icon:"\ud83d\udc8e",title:"\u51e0\u4f55\u5b66",mdxType:"IfcCard"}," IFC.js\u53ef\u4ee5\u751f\u62103D\u573a\u666f\uff0c\u56e0\u4e3a\u5b83\u4e0eThree.js\u6216Babylon.js\u7b493D\u5e93\u517c\u5bb9\u3002\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u7acb\u5373\u521b\u5efa3D BIM\u5de5\u5177\u3002"),(0,a.kt)(l.M,{icon:"\ud83d\udd17",title:"\u6570\u636e",mdxType:"IfcCard"}," \u5bf9\u4e0e\u8be5\u51e0\u4f55\u4f53\u76f8\u5173\u7684\u6240\u6709\u5c5e\u6027\u7684\u9ad8\u5c42\u6b21\u8bbf\u95ee\u3002\u8fd9\u610f\u5473\u7740\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u83b7\u53d6\u5efa\u7b51\u90e8\u4ef6\u3001\u5176\u6750\u6599\u3001\u70ed\u7279\u6027\u3001\u7ed3\u6784\u5f3a\u5ea6\u7b49\u65b9\u9762\u7684\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u7528IFC.js\u521b\u5efaBIM\u5e94\u7528\u7a0b\u5e8f\u5c31\u50cf\u7528JavaScript\u3001HTML\u548cCSS\u521b\u5efa\u7f51\u9875\u4e00\u6837\u7b80\u5355\u3002"),(0,a.kt)(s.x,{link:"https://ifcjs.github.io/hello-world/examples/web-ifc-three/introduction/",mdxType:"Scene"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { IfcLoader } from 'web-ifc-three';\nimport { Scene } from 'three';\n\n// \u521b\u5efaTHREE.js\u573a\u666f\nconst scene = new Scene();\n\n//...\n\n// \u52a0\u8f7dIFC\u5e76\u5c06\u5176\u6dfb\u52a0\u5230\u573a\u666f\u4e2d\u3002\nconst ifcLoader = new IfcLoader();\nifcLoader.load(ifcURL, (geometry) => scene.add(geometry));\n")),(0,a.kt)("h2",{id:"\u8fd9\u4e2a\u56fe\u4e66\u9986\u662f\u4e3a\u8c01\u51c6\u5907\u7684"},"\u8fd9\u4e2a\u56fe\u4e66\u9986\u662f\u4e3a\u8c01\u51c6\u5907\u7684"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u5e93\u662f\u4e3a\u4efb\u4f55\u60f3\u5f00\u53d1BIM\u5e94\u7528\u7684\u4eba\u51c6\u5907\u7684\u3002\u8fd9\u65e2\u5305\u62ec\u4e3a\u5efa\u7b51\u884c\u4e1a\u521b\u5efa\u5e94\u7528\u7a0b\u5e8f\u7684\u5f00\u53d1\u8005\uff0c\u4e5f\u5305\u62ec\u5efa\u7b51\u5e08\u548c\u5176\u4ed6\u60f3\u8981\u5229\u7528IFC\u6587\u4ef6\u4e2d\u7684\u6570\u636e\u7684\u4e13\u4e1a\u4eba\u58eb\u3002"),(0,a.kt)("p",null,"\u8981\u4f7f\u7528\u8fd9\u4e2a\u5e93\uff0c\u6709\u5fc5\u8981\u638c\u63e1JavaScript\u3001HTML\u548cCSS\u7684\u57fa\u672c\u77e5\u8bc6\u3002\u8fd9\u4e9b\u77e5\u8bc6\u5df2\u7ecf\u8d85\u51fa\u4e86\u672c\u6587\u6863\u7684\u8303\u56f4\u3002\u4f60\u8fd8\u9700\u8981\u4f7f\u7528\u4e00\u4e9b3D\u5e93\u6765\u663e\u793aIFC\u7684\u51e0\u4f55\u56fe\u5f62\uff08Three.js\u6216Babylon.js\uff09\u3002"),(0,a.kt)("p",null,"\ud83d\ude0a\n\u5982\u679c\u4f60\u4e0d\u77e5\u9053\u4ece\u54ea\u91cc\u5f00\u59cb\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u770b\u4e00\u4e0b",(0,a.kt)("a",{parentName:"p",href:"https://threejsfundamentals.org/"},"\u8fd9\u91cc"),"\uff0c\u6216\u8005\u76f4\u63a5\u52a0\u5165",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/FXfyR4XrKT"},"Discord\u9891\u9053"),"\u5e76\u6253\u62db\u547c\u3002"),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48ifcjs\u4e0e\u4f17\u4e0d\u540c\uff1f"},"\u4e3a\u4ec0\u4e48IFC.js\u4e0e\u4f17\u4e0d\u540c\uff1f"),(0,a.kt)("p",null,"IFC.js\u662f\u4e00\u4e2a\u7531JavaScript\u7f16\u5199\u7684\u5e93\uff0c\u53ef\u4ee5\u8bf4\u662f\u6700\u666e\u904d\u7684\u8bed\u8a00\u4e4b\u4e00\u3002\u8fd9\u610f\u5473\u7740\u5b83\u4e0e\u7f51\u7edc\u6d4f\u89c8\u5668\u3001\u684c\u9762\u548c\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\u517c\u5bb9\u3002JavaScript\u4e5f\u662f\u6700\u5bb9\u6613\u5b66\u4e60\u7684\u8bed\u8a00\u4e4b\u4e00\uff0c\u5b83\u5141\u8bb8\u4f60\u7528HTML\u548cCSS\u6784\u5efa\u7528\u6237\u754c\u9762\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u7528IFC.js\u521b\u5efaBIM\u5e94\u7528\u7a0b\u5e8f\u5c31\u50cf\u521b\u5efa\u4e00\u4e2a\u7f51\u9875\u4e00\u6837\u5bb9\u6613\u3002"),(0,a.kt)("h3",{id:"\u591a\u5e73\u53f0"},"\u591a\u5e73\u53f0"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528IFC.js\u6765\u4e3a\u4efb\u4f55\u5e73\u53f0\u521b\u5efa\u5f00\u653e\u7684BIM\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.kt)(k,{items:[{icon:"\ud83c\udf0f",content:(0,a.kt)("p",null,(0,a.kt)("b",null,"\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("b",null,"vanilla JavaScript"),"\u6216\u5176\u4ed6\u5de5\u5177\uff08\u5982",(0,a.kt)("b",null,"React\u3001Vue\u3001Angular\u3001Svelte\u7b49"),"\uff09\u521b\u5efa\u8bfb\u5199IFC\u6587\u4ef6\u548c\u663e\u793a3D\u7684\u524d\u7aef\u7f51\u7edc\u5e94\u7528"),"\uff0c\u800c\u65e0\u9700\u4f9d\u8d56\u670d\u52a1\u5668\u901a\u4fe1\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c",(0,a.kt)("i",null,"\u4f7f\u7528IFC.js\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u4efb\u4f55\u7f51\u7edc\u6d4f\u89c8\u5668\u53d8\u6210\u4e00\u4e2a\u5f00\u653e\u7684BIM\u5e94\u7528\u3002"))},{icon:"\ud83c\udfe2",content:(0,a.kt)("p",null,"\u6709\u4e9b\u60c5\u51b5\u4e0b\uff0cIFC\u6587\u4ef6\u4e0d\u80fd\u88ab\u5ba2\u6237\u7aef\u5904\u7406\u3002\u4f8b\u5982\uff0c\u79fb\u52a8\u8bbe\u5907\u53ef\u80fd\u6ca1\u6709\u80fd\u529b\u663e\u793a\u51e0\u4e2a\u4e2d\u578b\u6216\u5927\u578bIFC\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("a",{href:"https://nodejs.org/en/"},"Node.js"),"\u5728\u670d\u52a1\u5668\u4e0a\u4f7f\u7528IFC.js\uff0c\u5e76\u5c06\u5df2\u7ecf\u51c6\u5907\u597d\u7684Three.js\u573a\u666f\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\u3002")},{icon:"\ud83d\udcbb",content:(0,a.kt)("p",null,"\u6709\u65f6\u6211\u4eec\u5e76\u4e0d\u60f3\u521b\u5efa Web \u5e94\u7528\u7a0b\u5e8f\uff0c\u800c\u662f\u60f3\u521b\u5efa\u53ef\u5728 Windows\u3001iOS \u548c Linux \u4e0a\u8fd0\u884c\u7684 ",(0,a.kt)("b",null,"\u539f\u751f\u684c\u9762\u5e94\u7528\u7a0b\u5e8f"),"\u3002\u8fd9\u8981\u611f\u8c22",(0,a.kt)("a",{href:"https://www.electronjs.org/"},"Electron"),"\u7b49\u6280\u672f\u3002\u8fd9\u4e9b\u672c\u5730\u5e94\u7528\u7a0b\u5e8f\u7684\u7f16\u7a0b\u65b9\u5f0f\u5c06\u4e0e Web \u5e94\u7528\u7a0b\u5e8f\u76f8\u540c\uff1bHTML\u3001CSS\u3001JavaScript\u3001React\u3001Vue \u7b49\u3002")},{icon:"\ud83d\udcf1",content:(0,a.kt)("p",null,"IFC.js\u8fd8\u652f\u6301",(0,a.kt)("a",{href:"https://reactnative.dev/"},"React Native"),"\uff0c\u5b83\u5c06WebGL\u4ee3\u7801\u6620\u5c04\u5230\u672c\u5730OpenGL\u3002\u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u8f7b\u677e\u521b\u5efa\u4e0eIFC\u517c\u5bb9\u7684",(0,a.kt)("b",null,"Open BIM\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u5728Android\u548ciOS\u4e0a\u8fd0\u884c"),"\u3002")}],mdxType:"IfcTab"}),(0,a.kt)("h3",{id:"\u901f\u5ea6"},"\u901f\u5ea6"),(0,a.kt)("p",null,"  \u26a1\ufe0f\n\u5982\u679c\u4f60\u6709\u7f51\u7edc\u5e94\u7528\u7684\u7ecf\u9a8c\uff0c\u4f60\u53ef\u80fd\u4f1a\u60f3\uff0c\u57fa\u4e8eJavaScript\u7684IFC\u5e93\u7684\u5f31\u70b9\u662f\u6027\u80fd\u3002\u7136\u800c\uff0c\u8be5\u5e93\u7684\u6838\u5fc3\u662f\u7528C++\u7ed3\u5408WebAssembly\u548c",(0,a.kt)("a",{parentName:"p",href:"https://emscripten.org/"},"Emscripten"),"\u5f00\u53d1\u7684\u3002\u5b83\u662f\u4e13\u95e8\u4e3a**\u6700\u9ad8\u6027\u80fd\u800c\u8bbe\u8ba1\u7684\uff0c\u5141\u8bb8IFC.js\u5728\u76f4\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u65f6\u63a5\u8fd1\u4e8e\u684c\u9762\u5e94\u7528\u7a0b\u5e8f\u7684\u901f\u5ea6\u548c\u6027\u80fd\u3002"),(0,a.kt)("h3",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,a.kt)(l.M,{mdxType:"IfcCard"},"\ud83d\udc53 IFC.js\u53ef\u4ee5",(0,a.kt)("b",null,"\u8bfb"),"IFC\u6587\u4ef6\uff0c\u65e0\u7f1d\u8fde\u63a5\u3002"),(0,a.kt)(l.M,{mdxType:"IfcCard"},"\ud83c\udfd0 \u751f\u6210",(0,a.kt)("b",null,"3D\u51e0\u4f55\u56fe\u5f62"),"\uff0c\u5728\u6d4f\u89c8\u5668\u4e2d\u4ee560 fps\u8fd0\u884c\u3002"),(0,a.kt)(l.M,{mdxType:"IfcCard"},"\ud83c\udfa8 \u5229\u7528Three.js\u7684\u529b\u91cf\uff0c\u8f7b\u677e\u5730\u7f16\u8f91\u51e0\u4f55\u56fe\u5f62",(0,a.kt)("b",null,"\u5916\u89c2"),"\u3002"),(0,a.kt)(l.M,{mdxType:"IfcCard"},"\ud83c\udfe0\ud83c\udfe0\ud83c\udfe0 \u52a0\u8f7d",(0,a.kt)("b",null,"\u591a\u4e2a"),"\u8054\u5408\u7684IFC\u6a21\u578b\u3002"),(0,a.kt)(l.M,{mdxType:"IfcCard"},"\ud83d\udcc3 \u68c0\u7d22\u62a5\u544a\u548c\u6570\u636e\u5e93\u7684",(0,a.kt)("b",null,"IFC\u5c5e\u6027"),"\u3002"),(0,a.kt)(l.M,{mdxType:"IfcCard"},"\u270d IFC.js\u8fd8\u53ef\u4ee5",(0,a.kt)("b",null,"\u7f16\u8f91\u548c\u7f16\u5199"),"IFC\u6587\u4ef6\uff0c\u4ece\u5934\u5f00\u59cb\u3002"),(0,a.kt)("h2",{id:"\u6e90\u4ee3\u7801"},"\u6e90\u4ee3\u7801"),(0,a.kt)("p",null,"IFC.js\u662f\u4e00\u4e2a\u5927\u578b\u7684\u3001\u591a\u8bed\u8a00\u7684\u5e93\uff08C++\u3001TypeScript JavaScript\u7b49\uff09\u3002\u628a\u5b83\u653e\u5728\u4e00\u4e2a\u5355\u4e00\u7684\u8d44\u6e90\u5e93\u4e2d\u4f1a\u5f88\u56f0\u96be\uff0c\u800c\u4e14\u4e0d\u65b9\u4fbf\u3002\u51fa\u4e8e\u8fd9\u4e2a\u539f\u56e0\uff0c\u8be5\u5e93\u5b58\u5728\u4e8e\u591a\u4e2a\u4ed3\u5e93\u4e2d\uff0c\u6bcf\u4e2a\u4ed3\u5e93\u90fd\u6709\u5176\u7528\u9014\u3002\u4f60\u53ef\u4ee5\u627e\u5230\u5b83\u4eec",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IFCjs"},"\u8fd9\u91cc"),"\u3002"),(0,a.kt)(k,{items:[{name:"web-ifc",link:"https://ifcjs.github.io/info/docs/Guide/web-ifc/Introduction",content:(0,a.kt)("p",null,"\u8be5\u5e93\u7684\u6838\u5fc3\u662f\uff1a\u7528C++\u4ece\u5934\u5f00\u59cb\u7f16\u5199\u7684IFC",(0,a.kt)("b",null,"\u89e3\u6790\u5668\u548c\u51e0\u4f55\u751f\u6210\u5668"),"\uff0c\u5e76\u901a\u8fc7Emscripten\u7f16\u8bd1\u4e3aWebAssembly\u3002\u8be5\u5e93\u5c01\u88c5\u4e86\u8bfb\u53d6IFC\u6587\u4ef6\u5e76\u5c06\u5176\u6570\u636e\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\u7684\u590d\u6742\u6027\u3002")},{name:"web-ifc-three",link:"https://ifcjs.github.io/info/docs/Guide/web-ifc-three/Introduction",content:(0,a.kt)("p",null,"\u8fd9\u4e2a\u5e93\u5c06web-ifc\u6539\u7f16\u6210Three.js\uff0c\u751f\u6210\u4e00\u4e2a",(0,a.kt)("b",null,"\u4f18\u5316\u76843D\u573a\u666f\uff0c\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u4e0eIFC\u4e92\u52a8"),"\u3002\u8be5\u5e93\u662f",(0,a.kt)("a",{href:"https://threejs.org/examples/webgl_loader_ifc.html"},"\u5b98\u65b9Three.js IFC Loader"),"\u3002\u7531\u4e8e\u6709\u4e86\u8fd9\u4e2a\u9002\u914d\u5668\uff0c\u53ea\u9700\u4e24\u884c\u4ee3\u7801\u5c31\u53ef\u4ee5\u7528Three.js\u521b\u5efa\u5f00\u653e\u5f0fBIM\u5e94\u7528\u7a0b\u5e8f\u3002")},{name:"web-ifc-viewer",link:"https://ifcjs.github.io/info/docs/Guide/web-ifc-viewer/Introduction",content:(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u57fa\u4e8e\u6d4f\u89c8\u5668\u7684",(0,a.kt)("a",{href:"https://ifcjs.github.io/web-ifc-viewer/example/index"},"IFC\u6d4f\u89c8\u5668"),"\uff0c\u6709",(0,a.kt)("b",null,"\u8bb8\u591a\u53ef\u4ee5\u7528IFC.js\u5b8c\u6210\u7684\u4f8b\u5b50"),"\u3002\u573a\u666f\u5bfc\u822a\u3001\u6750\u6599\u53d8\u5316\u3001\u901a\u8fc7\u70b9\u51fb\u9009\u62e9\u5143\u7d20\u3001\u5256\u9762\u56fe\u7b49\u7b49\u3002\u5728\u8fd9\u4e2a\u8d44\u6e90\u5e93\u4e2d\uff0c\u6709\u6240\u6709\u8fd9\u4e9b\u529f\u80fd\u7684\u4f8b\u5b50\uff0c\u6240\u4ee5\u5b83\u53ef\u4ee5\u5728\u5f00\u653e\u7684BIM\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5f00\u7bb1\u5373\u7528\u3002")}],mdxType:"IfcTab"}),(0,a.kt)("h2",{id:"\u8d21\u732e"},"\u8d21\u732e"),(0,a.kt)("p",null,"\u4f60\u60f3\u5e2e\u52a9\u6211\u4eec\u4e0d\u65ad\u5b8c\u5584IFC.js\u7684\u5f00\u653eBIM\u5f00\u53d1\u4e16\u754c\u5417\uff1f\u8fd9\u4e2a\u5e93\u5f88\u5927\uff0c\u6240\u4ee5\u4f60\u5fc5\u987b\u9009\u62e9\u4f60\u60f3\u53c2\u4e0e\u7684\u5730\u65b9\u3002"),(0,a.kt)(l.M,{icon:"\ud83e\udd1d",title:"\u6211\u4e0d\u4f1a\u7f16\u7801\uff0c\u4f46\u6211\u60f3\u8fdb\u5165",mdxType:"IfcCard"},"\u8fd9\u5f88\u597d! \u9664\u4e86\u7f16\u7801\u4e4b\u5916\uff0c\u4f60\u8fd8\u6709\u5f88\u591a\u4e8b\u60c5\u53ef\u4ee5\u505a\u3002\u8fdb\u5165",(0,a.kt)("a",{href:"https://discord.gg/FXfyR4XrKT"},"Discord\u9891\u9053"),"\uff0c\u4e86\u89e3\u5982\u4f55\u505a\u3002"),(0,a.kt)(l.M,{icon:"\ud83e\udde0",title:"\u89e3\u6790\u3001\u51e0\u4f55\u5b66\u548cC++",mdxType:"IfcCard"},"\u5982\u679c\u4f60\u5bf9C++\u3001WebAssembly\u3001\u89e3\u6790\u6216IFC\u7684\u7ec6\u679d\u672b\u8282\u6709\u70ed\u60c5\uff0c\u4f60\u53ef\u4ee5\u7528\u4e1a\u5185\u6700\u5feb\u7684\u5f00\u6e90BIM\u89e3\u6790\u5668\u5e2e\u52a9\u6211\u4eec\u3002",(0,a.kt)("a",{href:"https://github.com/tomvandig/web-ifc"},"web-ifc"),"\u3002"),(0,a.kt)(l.M,{icon:"\u2728",title:"Three.js\u3001\u51e0\u4f55\u5b66\u548cTypescript",mdxType:"IfcCard"},"\u5982\u679c\u4f60\u662f\u4e00\u540dThree.js\u5f00\u53d1\u4eba\u5458\uff0c\u4f60\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec",(0,a.kt)("a",{href:"https://github.com/IFCjs/web-ifc-three"},"web-ifc-three"),"\uff0c\u8fd9\u5c31\u662f",(0,a.kt)("a",{href:"https://threejs.org/examples/webgl_loader_ifc.html"}," \u5b98\u65b9\u7684 Three.js IFC Loader"),"\u3002"),(0,a.kt)(l.M,{icon:"\ud83c\udf08",title:"BIM\u5de5\u5177\u3001\u5934\u8111\u98ce\u66b4\u548c\u7528\u6237\u4f53\u9a8c",mdxType:"IfcCard"},"\u5982\u679c\u60a8\u5bf9\u521b\u5efa\u5f88\u9177\u7684\u5f00\u653e\u5f0fBIM\u5e94\u7528\u7a0b\u5e8f\u611f\u5174\u8da3\uff0c\u5e76\u4e14\u60a8\u5bf9BIM\u5de5\u5177\u6216\u7528\u6237\u754c\u9762\u6709\u5f88\u597d\u7684\u60f3\u6cd5\uff0c\u8bf7\u5e2e\u52a9\u6211\u4eec\u4f7f",(0,a.kt)("a",{href:"https://github.com/IFCjs/web-ifc-viewer"},"web-ifc-viewer"),"\u6210\u4e3a\u5e02\u573a\u4e0a\u6700\u597d\u7684IFC\u6d4f\u89c8\u5668\u3002"),(0,a.kt)("p",null,"\u5728\u4efb\u4f55\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u9f13\u52b1\u4f60\u5230",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/FXfyR4XrKT"},"Discord\u9891\u9053"),"\uff0c\u6253\u4e2a\u62db\u547c\uff0c\u544a\u8bc9\u6211\u4eec\u4f60\u7684\u60f3\u6cd5\uff0c\u8fd9\u6837\u6211\u4eec\u53ef\u4ee5\u7ed9\u4f60\u4e00\u4e9b\u6307\u5bfc\u3002"))}y.isMDXComponent=!0}}]);