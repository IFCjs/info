(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(r),d=i,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||c;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<c;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},983:function(e,t,r){"use strict";r.d(t,{M:function(){return a}});var n=r(7294),i=r(9205),c="titleOffset_2I3u",o="iconContainer_1xRA",a=function(e){var t=e.title?n.createElement("div",{className:"card__header"},n.createElement("span",{className:o},e.icon&&n.createElement(i.A,{icon:e.icon,link:e.link,active:"true"})),n.createElement("h3",{className:e.icon&&c},e.title)):"";return n.createElement("div",{className:"card-demo",style:{margin:"2rem"}},n.createElement("div",{className:"card"},t,n.createElement("div",{className:"card__body"},n.createElement("p",null," ",e.children," "))))}},9205:function(e,t,r){"use strict";r.d(t,{A:function(){return u}});var n=r(7294),i="hidden_2JtY",c="iconContainer_2Rnc",o="visible_2147",a="link_Lh4h",l="clickable_3vcc",u=function(e){var t=" "+(e.active?o:i),r=a+" "+(e.link&&l);return n.createElement("div",{className:c+t},n.createElement("a",{href:e.link,className:r},e.icon||"\ud83d\ude80"))}},9163:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var n=r(2122),i=r(9756),c=(r(7294),r(3905)),o=r(983),a=["components"],l={title:"\ud83c\udf33 \u7a7a\u95f4\u6811",sidebar_position:4},u={unversionedId:"Guide/web-ifc-three/Tutorials/Spatial tree",id:"Guide/web-ifc-three/Tutorials/Spatial tree",isDocsHomePage:!1,title:"\ud83c\udf33 \u7a7a\u95f4\u6811",description:"\ud83d\udea7\ud83d\udc77\u200d\u2640\ufe0f  \u5efa\u8bbe\u4e2d \ud83d\udc77\u200d\u2642\ufe0f\ud83d\udea7",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/Guide/web-ifc-three/Tutorials/Spatial tree.mdx",sourceDirName:"Guide/web-ifc-three/Tutorials",slug:"/Guide/web-ifc-three/Tutorials/Spatial tree",permalink:"/info/zh/docs/Guide/web-ifc-three/Tutorials/Spatial tree",version:"current",sidebarPosition:4,frontMatter:{title:"\ud83c\udf33 \u7a7a\u95f4\u6811",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcc3 \u8d22\u4ea7",permalink:"/info/zh/docs/Guide/web-ifc-three/Tutorials/Properties"},next:{title:"\ud83d\udc53 \u8eb2\u85cf",permalink:"/info/zh/docs/Guide/web-ifc-three/Tutorials/Hiding"}},s=[{value:"\ud83d\udea7\ud83d\udc77\u200d\u2640\ufe0f  \u5efa\u8bbe\u4e2d \ud83d\udc77\u200d\u2642\ufe0f\ud83d\udea7",id:"\u2640\ufe0f--\u5efa\u8bbe\u4e2d-\u2642\ufe0f",children:[]}],f={toc:s};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"\u2640\ufe0f--\u5efa\u8bbe\u4e2d-\u2642\ufe0f"},"\ud83d\udea7\ud83d\udc77\u200d\u2640\ufe0f  \u5efa\u8bbe\u4e2d \ud83d\udc77\u200d\u2642\ufe0f\ud83d\udea7"),(0,c.kt)(o.M,{icon:"\ud83d\udc99",title:"\u611f\u8c22\u4f60\u5bf9IFC.js\u7684\u5174\u8da3!",mdxType:"IfcCard"},"\u6211\u4eec\u73b0\u5728\u6b63\u5728\u5efa\u7acb\u8fd9\u4e00\u90e8\u5206\u7684\u6587\u6863\u3002\u540c\u65f6\uff0c\u60a8\u53ef\u4ee5\u52a0\u5165",(0,c.kt)("a",{href:"https://discord.com/invite/g7Uzn2KSwB"},"Discord\u9891\u9053"),"\uff0c\u5e76\u5411\u6211\u4eec\u63d0\u51fa\u4efb\u4f55\u5173\u4e8e\u5b9e\u65bdIFC.js\u6216\u52a0\u5165\u8be5\u9879\u76ee\u6240\u9700\u7684\u95ee\u9898\u3002"))}p.isMDXComponent=!0}}]);