(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[246],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,p=f["".concat(l,".").concat(m)]||f[m]||d[m]||c;return n?r.createElement(p,o(o({ref:t},s),{},{components:n})):r.createElement(p,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,o=new Array(c);o[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<c;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},983:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r=n(7294),i=n(9205),c="titleOffset_2I3u",o="iconContainer_1xRA",a=function(e){var t=e.title?r.createElement("div",{className:"card__header"},r.createElement("span",{className:o},e.icon&&r.createElement(i.A,{icon:e.icon,link:e.link,active:"true"})),r.createElement("h3",{className:e.icon&&c},e.title)):"";return r.createElement("div",{className:"card-demo",style:{margin:"2rem"}},r.createElement("div",{className:"card"},t,r.createElement("div",{className:"card__body"},r.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var r=n(7294),i="hidden_2JtY",c="iconContainer_2Rnc",o="visible_2147",a="link_Lh4h",l="clickable_3vcc",u=function(e){var t=" "+(e.active?o:i),n=a+" "+(e.link&&l);return r.createElement("div",{className:c+t},r.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},9791:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(2122),i=n(9756),c=(n(7294),n(3905)),o=n(983),a=["components"],l={title:"\u306f\u3058\u3081\u306b",sidebar_position:0},u={unversionedId:"Guide/Getting started",id:"Guide/Getting started",isDocsHomePage:!1,title:"\u306f\u3058\u3081\u306b",description:"IFC.js \u3092\u7406\u89e3\u3059\u308b",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/Guide/Getting started.mdx",sourceDirName:"Guide",slug:"/Guide/Getting started",permalink:"/info/ja/docs/Guide/Getting started",version:"current",sidebarPosition:0,frontMatter:{title:"\u306f\u3058\u3081\u306b",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u30cf\u30ed\u30fc\u30ef\u30fc\u30eb\u30c9",permalink:"/info/ja/docs/Hello world"},next:{title:"\u306f\u3058\u3081\u306b",permalink:"/info/ja/docs/Guide/web-ifc/Introduction"}},s=[{value:"IFC.js \u3092\u7406\u89e3\u3059\u308b",id:"ifcjs-\u3092\u7406\u89e3\u3059\u308b",children:[]}],d={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"ifcjs-\u3092\u7406\u89e3\u3059\u308b"},"IFC.js \u3092\u7406\u89e3\u3059\u308b"),(0,c.kt)("p",null,"\ud83d\udc1f\ud83d\udc20\ud83d\udc21\nIFC.js \u306f\u5358\u306a\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u306f\u306a\u304f\u3001BIM \u30c4\u30fc\u30eb\u306e\u4f5c\u6210\u3092\u5bb9\u6613\u306b\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u3067\u3059\u3002\u3053\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u5316\u306b\u306f 2 \u3064\u306e\u7406\u7531\u304c\u3042\u308a\u307e\u3059\u3002"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u5fc5\u8981\u306a\u3082\u306e\u3060\u3051\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6027\u3092\u9ad8\u3081\u308b\u305f\u3081\u3002")),(0,c.kt)("p",null,"\u305d\u308c\u305e\u308c\u306e\u30b1\u30fc\u30b9\u3067\u4f55\u3092\u4f7f\u3046\u3079\u304d\u304b\u3092\u77e5\u308b\u305f\u3081\u306b\u306f\u3001\u3069\u306e\u90e8\u5206\u3067\u69cb\u6210\u3055\u308c\u3066\u3044\u308b\u304b\u3092\u7406\u89e3\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002IFC.js \u306f\u57fa\u672c\u7684\u306b 3 \u3064\u306e\u30ec\u30a4\u30e4\u30fc\u3067\u69cb\u6210\u3055\u308c\u3066\u304a\u308a\u3001\u305d\u308c\u305e\u308c\u304c\u72ec\u81ea\u306e\u8cac\u4efb\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002"),(0,c.kt)(o.M,{icon:"\ud83e\udde9",title:"web-ifc",link:"https://ifcjs.github.io/info/docs/Guide/web-ifc/Introduction",mdxType:"IfcCard"},(0,c.kt)("div",{style:{margin:"1rem 0"}},"IFC\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30fc\u30b5\u30fc\u3067\u3059\u3002IFC\u304b\u3089\u3059\u3079\u3066\u306e\u60c5\u5831\u3092\u8aad\u307f\u53d6\u308a\u3001\u7de8\u96c6\u3057\u3001\u65b0\u3057\u3044\u30d5\u30a1\u30a4\u30eb\u3092\u66f8\u304d\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u30023D\u30d3\u30e5\u30fc\u30a2\u306f\u306a\u304f\u3001\u30c7\u30fc\u30bf\u306e\u307f\u3067\u52d5\u4f5c\u3057\u307e\u3059\u3002"),(0,c.kt)("div",{style:{margin:"1rem 0"}}),(0,c.kt)("div",null,(0,c.kt)("b",null,"\u4f7f\u3046\u3068\u304d\u306f")),(0,c.kt)("div",{style:{margin:"1rem 0"}},"\u30d3\u30e5\u30fc\u30a2\u3092\u4f7f\u308f\u305a\u306bIFC\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u66f8\u304d\u3057\u305f\u3044\u3068\u304d\u3002\u3053\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u3001\u30c7\u30fc\u30bf\u306b\u5bfe\u3057\u3066\u30d5\u30eb\u30d1\u30ef\u30fc\u3092\u767a\u63ee\u3057\u307e\u3059\u304c\u3001\u4f7f\u7528\u3059\u308b\u306b\u306fIFC\u30b9\u30ad\u30fc\u30de\u306e\u7406\u89e3\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,c.kt)("div",null,(0,c.kt)("b",null,"\u306b\u3088\u308b\u3002"),"-")),(0,c.kt)(o.M,{icon:"\ud83e\udde9",title:"web-ifc-three",link:"https://ifcjs.github.io/info/docs/Guide/web-ifc-three/Introduction",mdxType:"IfcCard"},(0,c.kt)("div",{style:{margin:"1rem 0"}},"3D BIM\u30d3\u30e5\u30fc\u30a2\u30023D\u30e2\u30c7\u30eb\u309260fps\u3067\u8868\u793a\u3057\u3066\u30ca\u30d3\u30b2\u30fc\u30c8\u3057\u305f\u308a\u3001\u8981\u7d20\u3092\u9078\u629e\u3057\u305f\u308a\u3001\u3059\u3079\u3066\u306eIFC\u30c7\u30fc\u30bf\u3092\u7c21\u5358\u306b\u8aad\u307f\u8fbc\u3093\u3067\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u306b\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002three.js\u306e\u516c\u5f0fIFC\u30ed\u30fc\u30c0\u3067\u3059\u3002"),(0,c.kt)("div",null,(0,c.kt)("b",null,"\u4f7f\u3046\u3068\u304d\u306f")),(0,c.kt)("div",{style:{margin:"1rem 0"}},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u7528\u306eBIM\u30d3\u30e5\u30fc\u30a2\u3092\u4f5c\u6210\u3057\u3001\u5b9f\u88c5\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u6a5f\u80fd\u3092\u5b8c\u5168\u306b\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3057\u305f\u3044\u5834\u5408\u3002"),(0,c.kt)("div",null,(0,c.kt)("b",null,"\u306b\u3088\u308b\u3002"),"web-ifc")),(0,c.kt)(o.M,{icon:"\ud83e\udde9",title:"web-ifc-viewer",link:"https://ifcjs.github.io/info/docs/Guide/web-ifc-viewer/Introduction",mdxType:"IfcCard"},(0,c.kt)("div",{style:{margin:"1rem 0"}},"\u591a\u304f\u306e\u30c4\u30fc\u30eb\u3068\u6a5f\u80fd\uff08\u65ad\u9762\u56f3\u3001\u5bf8\u6cd5\u306a\u3069\uff09\u304c\u3059\u3067\u306b\u5b9f\u88c5\u3055\u308c\u3066\u3044\u308b3D BIM\u30d3\u30e5\u30fc\u30a2\u3067\u3001\u307b\u3068\u3093\u3069\u624b\u9593\u3092\u304b\u3051\u305a\u306bBIM\u30c4\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,c.kt)("div",null,(0,c.kt)("b",null,"\u4f7f\u3046\u3068\u304d\u306f")),(0,c.kt)("div",{style:{margin:"1rem 0"}},"BIM\u30d3\u30e5\u30fc\u30ef\u3092\u4f5c\u308a\u305f\u3044\u304c\u3001\u6b32\u3057\u3044\u30e2\u30c7\u30eb\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30c4\u30fc\u30eb\u3092\u3059\u3079\u3066\u5b9f\u88c5\u3059\u308b\u306e\u306b\u306f\u6642\u9593\u3092\u304b\u3051\u305f\u304f\u306a\u3044\u3068\u3044\u3046\u5834\u5408\u3002"),(0,c.kt)("div",null,(0,c.kt)("b",null,"\u306b\u3088\u308b\u3002"),"web-ifc-three")))}f.isMDXComponent=!0}}]);