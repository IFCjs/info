(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8243],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4973:function(e,t,n){"use strict";n.d(t,{Z:function(){return s},I:function(){return p}});var r=n(7294),o=/{\w+}/g,i="{}";function a(e,t){var n=[],a=e.replace(o,(function(e){var o=e.substr(1,e.length-2),a=null==t?void 0:t[o];if(void 0!==a){var c=r.isValidElement(a)?a:String(a);return n.push(c),i}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?a.split(i).reduce((function(e,t,r){var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):a.split(i).reduce((function(e,t,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},t,n[o])])}),[])}function c(e){return a(e.children,e.values)}var u=n(4644);function l(e){var t,n=e.id,r=e.message;return null!==(t=u[null!=n?n:r])&&void 0!==t?t:r}function p(e,t){var n,r=e.message;return a(null!==(n=l({message:r,id:e.id}))&&void 0!==n?n:r,t)}function s(e){var t,n=e.children,o=e.id,i=e.values,a=null!==(t=l({message:n,id:o}))&&void 0!==t?t:n;return r.createElement(c,{values:i},a)}},5308:function(e,t,n){"use strict";n.d(t,{Q:function(){return i}});var r=n(7294),o=n(4973),i=function(e){return r.createElement("div",null,e.image,r.createElement("a",{target:"_blank",href:e.ifcLink}," ",r.createElement("i",null,function(e){return e.hideSource?null:r.createElement(o.Z,{description:"The source of an image of the blog"},"Source")}(e))," "))}},7306:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r,o=n(2122),i=n(9756),a=(n(7294),n(3905)),c=n(5308),u=["components"],l={title:"\u5f00\u59cb\u5de5\u4f5c",sidebar_position:0},p={unversionedId:"Courses/Getting-started",id:"Courses/Getting-started",isDocsHomePage:!1,title:"\u5f00\u59cb\u5de5\u4f5c",description:"\u4e0e\u6211\u4eec\u4e00\u8d77\u5b66\u4e60 BIM \u5f00\u53d1",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/Courses/Getting-started.mdx",sourceDirName:"Courses",slug:"/Courses/Getting-started",permalink:"/info/zh/docs/Courses/Getting-started",version:"current",sidebarPosition:0,frontMatter:{title:"\u5f00\u59cb\u5de5\u4f5c",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u8d5e\u52a9\u4eba",permalink:"/info/zh/docs/Patreon"},next:{title:"IFC.js\u901f\u6210\u73ed",permalink:"/info/zh/docs/Courses/Crash-course"}},s=[{value:"\u4e0e\u6211\u4eec\u4e00\u8d77\u5b66\u4e60 BIM \u5f00\u53d1",id:"\u4e0e\u6211\u4eec\u4e00\u8d77\u5b66\u4e60-bim-\u5f00\u53d1",children:[]},{value:"\u4e3a\u4ec0\u4e48\u8fd9\u4e9b\u8bfe\u7a0b\u4e0d\u662f\u514d\u8d39\u7684\uff1f",id:"\u4e3a\u4ec0\u4e48\u8fd9\u4e9b\u8bfe\u7a0b\u4e0d\u662f\u514d\u8d39\u7684\uff1f",children:[]},{value:"\u5b83\u4eec\u7684\u6210\u672c\u662f\u591a\u5c11\uff1f",id:"\u5b83\u4eec\u7684\u6210\u672c\u662f\u591a\u5c11\uff1f",children:[{value:"\u5bf9\u4e8e\u975e\u5267\u9662",id:"\u5bf9\u4e8e\u975e\u5267\u9662",children:[]},{value:"\u5bf9\u4e8e\u8d5e\u52a9\u4eba",id:"\u5bf9\u4e8e\u8d5e\u52a9\u4eba",children:[]},{value:"\u5bf9\u4e8e\u4f01\u4e1a\u8d5e\u52a9\u8005",id:"\u5bf9\u4e8e\u4f01\u4e1a\u8d5e\u52a9\u8005",children:[]},{value:"\u9002\u5e94\u6027\u6298\u6263",id:"\u9002\u5e94\u6027\u6298\u6263",children:[]}]},{value:"\u6211\u600e\u4e48\u77e5\u9053\u5b83\u4eec\u662f\u597d\u7684\u5462\uff1f",id:"\u6211\u600e\u4e48\u77e5\u9053\u5b83\u4eec\u662f\u597d\u7684\u5462\uff1f",children:[]},{value:"\u6211\u5982\u4f55\u6ce8\u518c\uff1f",id:"\u6211\u5982\u4f55\u6ce8\u518c\uff1f",children:[]}],d=(r="IfcCard",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),f={toc:s};function m(e){var t=e.components,r=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e0e\u6211\u4eec\u4e00\u8d77\u5b66\u4e60-bim-\u5f00\u53d1"},"\u4e0e\u6211\u4eec\u4e00\u8d77\u5b66\u4e60 BIM \u5f00\u53d1"),(0,a.kt)("p",null,"\ud83c\udf31 \u65e0\u8bba\u4f60\u5bf9\u7f16\u7a0b\u4e00\u65e0\u6240\u77e5\uff0c\u4f46\u4f60\u60f3\u5f00\u59cb\u5b66\u4e60\uff0c\u8fd8\u662f\u4f60\u662f\u4e00\u4e2a\u6709\u7ecf\u9a8c\u7684\u5f00\u53d1\u8005\uff0c\u4f46\u60f3\u628a\u4f60\u7684 BIM \u5e94\u7528\u63d0\u9ad8\u5230\u4e00\u4e2a\u65b0\u7684\u6c34\u5e73\uff0c\u6211\u4eec\u90fd\u80fd\u6ee1\u8db3\u4f60\u7684\u8981\u6c42\u3002"),(0,a.kt)(c.Q,{hideSource:!0,image:(0,a.kt)("img",{src:n(1632).Z,alt:"PC image"}),alt:"PC image",mdxType:"IfcImage"}),(0,a.kt)("p",null,"\ud83d\ude80 \u6211\u4eec\u63d0\u4f9b",(0,a.kt)("strong",{parentName:"p"},"\u6240\u6709\u7ea7\u522b\u7684 BIM \u8bfe\u7a0b"),"\u3002\u8fd9\u4e9b\u8bfe\u7a0b\u5305\u62ec\u3002"),(0,a.kt)(d,{mdxType:"IfcCard"},"\ud83d\udcfa \u6df1\u5165\u7684\u82f1\u8bed\u89c6\u9891\u8bfe\u7a0b\u3002"),(0,a.kt)(d,{mdxType:"IfcCard"},"\ud83d\udc69\u200d\ud83d\udcbb \u6240\u6709\u7406\u8bba\u7684\u811a\u672c\u3002"),(0,a.kt)(d,{mdxType:"IfcCard"},"\ud83d\udccb \u6240\u6709\u7684\u6ce8\u91ca\u4ee3\u7801\u3002"),(0,a.kt)(d,{mdxType:"IfcCard"},"\ud83d\udc69\u200d\ud83c\udfeb \u6559\u5e08\u7684\u56de\u7b54\u3002"),(0,a.kt)(d,{mdxType:"IfcCard"},"\ud83c\udfc6 \u53c2\u52a0\u72ec\u5bb6\u9ed1\u5ba2\u6d3b\u52a8\u3002"),(0,a.kt)(d,{mdxType:"IfcCard"},"\ud83c\udf81 \u72ec\u5bb6IFC.js\u5546\u54c1\u9500\u552e\u3002"),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8fd9\u4e9b\u8bfe\u7a0b\u4e0d\u662f\u514d\u8d39\u7684\uff1f"},"\u4e3a\u4ec0\u4e48\u8fd9\u4e9b\u8bfe\u7a0b\u4e0d\u662f\u514d\u8d39\u7684\uff1f"),(0,a.kt)("p",null,"\ud83e\udd1d ",(0,a.kt)("strong",{parentName:"p"},"IFC.js \u5bf9\u6bcf\u4e2a\u4eba\u90fd\u662f\u514d\u8d39\u7684\uff0c\u800c\u4e14\u6c38\u8fdc\u90fd\u662f\u3002"),"\u4f46\u662f\uff0c\u4e3a\u4e86\u7ee7\u7eed\u53d1\u5c55\u8fd9\u4e2a\u9879\u76ee\uff0c\u6211\u4eec\u9700\u8981\u8d44\u91d1\u6765\u7ec4\u7ec7\u6d3b\u52a8\uff0c\u652f\u4ed8\u9879\u76ee\u8d39\u7528\uff0c\u5956\u52b1\u6d3b\u8dc3\u7684\u793e\u533a\u7b49\u7b49\u3002\u8fd9\u4e9b\u8bfe\u7a0b\u662f\u83b7\u5f97\u8fd9\u4e9b\u8d44\u91d1\u7684\u4e00\u79cd\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"\ud83c\udf08 ",(0,a.kt)("strong",{parentName:"p"},"\u6765\u81ea\u8bfe\u7a0b\u7684\u8d44\u91d1\u5b8c\u5168\u518d\u6295\u8d44\u4e8e\u8be5\u9879\u76ee\u3002"),"\u4f60\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://opencollective.com/ifcjs"},"\u5f00\u653e\u96c6\u4f53"),"\u770b\u5230\u6211\u4eec\u5982\u4f55\u4ee5\u5b8c\u5168\u900f\u660e\u7684\u65b9\u5f0f\u7ba1\u7406\u8d44\u91d1\u3002"),(0,a.kt)("p",null,"\ud83d\udc68\u200d\ud83d\udcbb ",(0,a.kt)("strong",{parentName:"p"},"\u4f60\u5e0c\u671b\u6211\u4eec\u628a\u8fd9\u4e9b\u94b1\u82b1\u5728\u522b\u7684\u5730\u65b9\u5417\uff1f"),"\u4f60\u53ef\u4ee5\u4f5c\u4e3a",(0,a.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/info/zh/docs/Contribute"},"\u8d5e\u52a9\u5546"),"\u6216",(0,a.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/info/zh/docs/Contribute"},"\u8d5e\u52a9\u4eba"),"\u52a0\u5165\u9879\u76ee\uff0c\u5bf9\u6211\u4eec\u628a\u8fd9\u4e9b\u8d44\u91d1\u7528\u5728\u54ea\u91cc\u6709\u53d1\u8a00\u6743\u3002"),(0,a.kt)("h2",{id:"\u5b83\u4eec\u7684\u6210\u672c\u662f\u591a\u5c11\uff1f"},"\u5b83\u4eec\u7684\u6210\u672c\u662f\u591a\u5c11\uff1f"),(0,a.kt)("h3",{id:"\u5bf9\u4e8e\u975e\u5267\u9662"},"\u5bf9\u4e8e\u975e\u5267\u9662"),(0,a.kt)("p",null,"\ud83e\uddd1 \u6bcf\u95e8\u8bfe\u7a0b\u7684\u8d39\u7528\u4e3a",(0,a.kt)("strong",{parentName:"p"},"$100"),"\uff0c\u975e\u5267\u9662\u3002\u4f46\u8fd9\u4e9b\u94b1\u5e76\u4e0d\u5f52\u6211\u4eec\u6240\u6709\uff0c\u800c\u662f\u5f52\u9879\u76ee\u6240\u6709\u3002\u56e0\u6b64\uff0c\u8981\u8d2d\u4e70\u4e00\u95e8\u8bfe\u7a0b\uff0c\u4f60\u53ea\u9700\u8981",(0,a.kt)("a",{parentName:"p",href:"https://opencollective.com/ifcjs"},"\u516c\u5f00\u96c6\u4f53\u6350\u6b3e 100 \u7f8e\u5143"),"\uff0c\u5e76\u628a\u51ed\u8bc1\u4ee5\u53ca\u4f60\u60f3\u83b7\u5f97\u7684\u8bfe\u7a0b\uff08\u6216\u8bfe\u7a0b\uff09\u5bc4\u7ed9\u6211\u4eec\u3002"),(0,a.kt)("h3",{id:"\u5bf9\u4e8e\u8d5e\u52a9\u4eba"},"\u5bf9\u4e8e\u8d5e\u52a9\u4eba"),(0,a.kt)("p",null,"\ud83e\uddd1\ud83d\udd25 \u8d5e\u52a9\u4eba\u53ef\u4ee5\u6839\u636e\u4ed6\u4eec\u7684\u8d5e\u52a9\u4eba\u8d44\u683c\uff0c\u4ee5\u5f88\u5927\u7684\u6298\u6263\u8d2d\u4e70\u8bfe\u7a0b\u3002\u6bcf\u4e0d\u95f4\u65ad\u5730\u5728 patreon \u4e2d\u505c\u7559\u4e00\u4e2a\u6708\uff0c\u6240\u6709\u7684\u8bfe\u7a0b\u90fd\u4f1a\u6253\u6298 15 \u7f8e\u5143\uff0c\u6700\u9ad8\u53ef\u8fbe 25 \u7f8e\u5143\u3002"),(0,a.kt)("p",null,"\ud83c\udf89 \u6362\u53e5\u8bdd\u8bf4\uff0c\u627f\u8bfa\u5728 patreon \u5446 6 \u4e2a\u6708\u7684\u793e\u533a\u6210\u5458\u53ef\u4ee5\u7528",(0,a.kt)("strong",{parentName:"p"},"25 \u7f8e\u5143\u8d2d\u4e70"),"\u4efb\u4f55\u8bfe\u7a0b\u3002"),(0,a.kt)("p",null,"\ud83c\udfc6 \u6b64\u5916\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u4ed6\u4eec\u5c06\u62e5\u6709\u666e\u901a\u7528\u6237\u65e0\u6cd5\u63a5\u89e6\u5230\u7684"),"\u72ec\u5bb6\u5185\u5bb9\uff0c\u5e76\u6709\u6743\u51b3\u5b9a\u4e0b\u4e00\u4e2a\u8bfe\u7a0b\u7684\u4e3b\u9898\u3002"),(0,a.kt)("p",null,"\ud83d\udc9b \u5f53\u7136\uff0c\u8d5e\u52a9\u4eba\u4e5f\u6709",(0,a.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/info/zh/docs/Patreon"},"\u5305\u542b\u5728\u8d5e\u52a9\u4eba\u7ea7\u522b\u4e2d\u7684\u6240\u6709\u5176\u4ed6\u4f18\u52bf"),"\u3002"),(0,a.kt)("h3",{id:"\u5bf9\u4e8e\u4f01\u4e1a\u8d5e\u52a9\u8005"},"\u5bf9\u4e8e\u4f01\u4e1a\u8d5e\u52a9\u8005"),(0,a.kt)("p",null,"\ud83d\udc68\u200d\ud83d\udcbc\ud83d\udcbc \u4f01\u4e1a\u8d5e\u52a9\u4eba\u6709",(0,a.kt)("strong",{parentName:"p"},"\u514d\u8d39\u4f7f\u7528\u6240\u6709\u8bfe\u7a0b\u7684\u6743\u5229\uff0c\u6700\u591a\u53ef\u5bb9\u7eb3 50 \u540d\u5458\u5de5"),"\uff0c\u4ee5\u53ca\u6765\u81ea\u56fe\u4e66\u9986\u521b\u5efa\u8005\u5bf9\u5176\u5f00\u53d1\u56e2\u961f\u7684\u73b0\u573a\u7f51\u7edc\u7814\u8ba8\u4f1a\uff0c\u4e3b\u8981\u652f\u6301\u548c\u6240\u6709\u5176\u4ed6\u7531",(0,a.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/info/zh/docs/Patreon"},"\u4f01\u4e1a\u8d5e\u52a9\u4eba\u6388\u4e88\u7684\u597d\u5904"),"\u3002"),(0,a.kt)("h3",{id:"\u9002\u5e94\u6027\u6298\u6263"},"\u9002\u5e94\u6027\u6298\u6263"),(0,a.kt)("p",null,"\ud83e\udd1d \u6211\u4eec\u77e5\u9053\uff0c\u4e16\u754c\u662f\u591a\u5143\u5316\u7684\uff0c\u5e76\u975e\u6240\u6709\u56fd\u5bb6\u90fd\u6709\u76f8\u540c\u7684\u8d2d\u4e70\u529b\u3002\u7136\u800c\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u6211\u4eec\u4e0d\u5e0c\u671b\u56e0\u4e3a\u5168\u7403\u7ecf\u6d4e\u539f\u56e0\u800c\u9057\u6f0f\u4e86\u4e00\u4e9b\u4eba"),"\u3002\u5982\u679c\u4f60\u6240\u5728\u56fd\u5bb6\u7684\u5e73\u5747\u5de5\u8d44\u4f4e\u4e8e 1000 \u7f8e\u5143\uff0c\u4f60\u53ef\u4ee5\u9002\u7528",(0,a.kt)("strong",{parentName:"p"},"\u9002\u5e94\u6027\u6298\u6263"),"\u3002"),(0,a.kt)("p",null,"\ud83d\ude0a \u8fd9\u79cd\u6298\u6263\u4f7f\u4eba\u4eec\u80fd\u591f\u4ee5\u76f8\u5f53\u4e8e\u4f60\u6240\u5728\u56fd\u5bb6\u7684\u5e73\u5747\u5de5\u8d44\u4e0e",(0,a.kt)("strong",{parentName:"p"},"1000 \u7f8e\u5143\u4e4b\u95f4\u7684"),"\u6bd4\u4f8b\u7684\u4ef7\u683c\u83b7\u5f97\u8bfe\u7a0b\u548c\u8d5e\u52a9\u5c42\u7ea7\u3002\u4f8b\u5982\uff0c\u5982\u679c\u5e73\u5747\u5de5\u8d44\u662f 800 \u7f8e\u5143\uff0c\u4f60\u53ef\u4ee5\u5f97\u5230 20%\u7684\u6298\u6263\u3002\u5982\u679c\u5e73\u5747\u5de5\u8d44\u662f 400 \u7f8e\u5143\uff0c\u6298\u6263\u5c06\u662f 60%\u3002"),(0,a.kt)("h2",{id:"\u6211\u600e\u4e48\u77e5\u9053\u5b83\u4eec\u662f\u597d\u7684\u5462\uff1f"},"\u6211\u600e\u4e48\u77e5\u9053\u5b83\u4eec\u662f\u597d\u7684\u5462\uff1f"),(0,a.kt)("p",null,"\ud83d\ude80 \u4e0d\u7528\u62c5\u5fc3! \u7b2c\u4e00\u6279\u8bfe\u7a0b\u548c\u7b14\u8bb0\u662f",(0,a.kt)("strong",{parentName:"p"},"\u514d\u8d39\u7684\uff0c\u5e76\u5bf9\u4efb\u4f55\u4eba\u5f00\u653e"),"\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u5728\u652f\u4ed8\u4efb\u4f55\u8d39\u7528\u4e4b\u524d\u5c1d\u8bd5\u5176\u4f59\u6750\u6599\u7684\u8d28\u91cf\u3002"),(0,a.kt)("h2",{id:"\u6211\u5982\u4f55\u6ce8\u518c\uff1f"},"\u6211\u5982\u4f55\u6ce8\u518c\uff1f"),(0,a.kt)("p",null,"\ud83d\udea7 \u8fd9\u4e9b\u8bfe\u7a0b\u8fd8\u6ca1\u6709\u51c6\u5907\u597d! \u6211\u4eec\u6b63\u5728\u975e\u5e38\u52aa\u529b\u5730\u5de5\u4f5c\uff0c\u4ee5\u4f7f\u5b83\u4eec\u5c3d\u5feb\u5b9e\u73b0\u3002\u5728\u6b64\u671f\u95f4\uff0c\u4f60\u53ef\u4ee5",(0,a.kt)("a",{parentName:"p",href:"https://opencollective.com/ifcjs"},"\u6210\u4e3a\u8d5e\u52a9\u4eba"),"\uff0c\u5e76\u5728\u5b83\u4eec\u51fa\u6765\u65f6\u5f97\u5230\u4e00\u4e2a\u5f88\u5927\u7684\u6298\u6263\uff08\u5982\u4e0a\u6240\u8ff0\uff09\u3002\u6211\u4eec\u4f30\u8ba1\u5b83\u4eec\u5c06\u5728","*","*","\u4e09\u6708/\u56db\u6708\u53d1\u5e03\u3002"),(0,a.kt)("p",null,"\ud83d\udc4c \u4e00\u65e6\u5b83\u4eec\u88ab\u91ca\u653e\uff0c\u8bf7\u5411\u6211\u4eec\u7684",(0,a.kt)("a",{parentName:"p",href:"https://opencollective.com/ifcjs"},"\u5f00\u653e\u5f0f\u96c6\u4f53\u8d26\u6237"),"\u6350\u6b3e\uff0c\u6211\u4eec\u5c06\u8ba9\u4f60\u83b7\u5f97\u4e00\u5207\u3002"))}m.isMDXComponent=!0},1632:function(e,t,n){"use strict";t.Z=n.p+"assets/images/lesson-2b16f54cf0d25be8426670f0f3c79e9a.png"}}]);