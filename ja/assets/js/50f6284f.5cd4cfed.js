(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[276],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,p=f["".concat(s,".").concat(m)]||f[m]||d[m]||i;return r?n.createElement(p,o(o({ref:t},l),{},{components:r})):n.createElement(p,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4973:function(e,t,r){"use strict";r.d(t,{Z:function(){return d},I:function(){return l}});var n=r(7294),a=/{\w+}/g,i="{}";function o(e,t){var r=[],o=e.replace(a,(function(e){var a=e.substr(1,e.length-2),o=null==t?void 0:t[a];if(void 0!==o){var c=n.isValidElement(o)?o:String(o);return r.push(c),i}return e}));return 0===r.length?e:r.every((function(e){return"string"==typeof e}))?o.split(i).reduce((function(e,t,n){var a;return e.concat(t).concat(null!==(a=r[n])&&void 0!==a?a:"")}),""):o.split(i).reduce((function(e,t,a){return[].concat(e,[n.createElement(n.Fragment,{key:a},t,r[a])])}),[])}function c(e){return o(e.children,e.values)}var s=r(4644);function u(e){var t,r=e.id,n=e.message;return null!==(t=s[null!=r?r:n])&&void 0!==t?t:n}function l(e,t){var r,n=e.message;return o(null!==(r=u({message:n,id:e.id}))&&void 0!==r?r:n,t)}function d(e){var t,r=e.children,a=e.id,i=e.values,o=null!==(t=u({message:r,id:a}))&&void 0!==t?t:r;return n.createElement(c,{values:i},o)}},983:function(e,t,r){"use strict";r.d(t,{M:function(){return c}});var n=r(7294),a=r(9205),i="titleOffset_2I3u",o="iconContainer_1xRA",c=function(e){var t=e.title?n.createElement("div",{className:"card__header"},n.createElement("span",{className:o},e.icon&&n.createElement(a.A,{icon:e.icon,link:e.link,active:"true"})),n.createElement("h3",{className:e.icon&&i},e.title)):"";return n.createElement("div",{className:"card-demo",style:{margin:"2rem"}},n.createElement("div",{className:"card"},t,n.createElement("div",{className:"card__body"},n.createElement("p",null," ",e.children," "))))}},9205:function(e,t,r){"use strict";r.d(t,{A:function(){return u}});var n=r(7294),a="hidden_2JtY",i="iconContainer_2Rnc",o="visible_2147",c="link_Lh4h",s="clickable_3vcc",u=function(e){var t=" "+(e.active?o:a),r=c+" "+(e.link&&s);return n.createElement("div",{className:i+t},n.createElement("a",{href:e.link,className:r},e.icon||"\ud83d\ude80"))}},5308:function(e,t,r){"use strict";r.d(t,{Q:function(){return i}});var n=r(7294),a=r(4973),i=function(e){return n.createElement("div",null,e.image,n.createElement("a",{target:"_blank",href:e.ifcLink}," ",n.createElement("i",null,function(e){return e.hideSource?null:n.createElement(a.Z,{description:"The source of an image of the blog"},"Source")}(e))," "))}},6649:function(e,t,r){"use strict";r.d(t,{x:function(){return i}});var n=r(7294),a="threeScene_3QXR",i=function(e){return n.createElement("iframe",{className:a,width:"100%",height:"600px",key:Math.random(),src:e.link,frameBorder:"0"})}},9130:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=(r(6649),r(983)),c=r(5308),s=["components"],u={title:"IFC.js crash course",sidebar_position:1},l={unversionedId:"Courses/Crash-course",id:"Courses/Crash-course",isDocsHomePage:!1,title:"IFC.js crash course",description:"What's this about?",source:"@site/docs/Courses/Crash-course.mdx",sourceDirName:"Courses",slug:"/Courses/Crash-course",permalink:"/info/ja/docs/Courses/Crash-course",version:"current",sidebarPosition:1,frontMatter:{title:"IFC.js crash course",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/info/ja/docs/Courses/Getting-started"},next:{title:"IFC for developers",permalink:"/info/ja/docs/Courses/Ifc-course"}},d=[{value:"What&#39;s this about?",id:"whats-this-about",children:[]},{value:"Course content",id:"course-content",children:[]},{value:"Requirements",id:"requirements",children:[]}],f={toc:d};function m(e){var t=e.components,u=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"whats-this-about"},"What's this about?"),(0,i.kt)("p",null,"\ud83d\udc69\u200d\ud83d\udcbb In the process of digitalization of our industry, ",(0,i.kt)("strong",{parentName:"p"},"programming is becoming increasingly important"),". Although it may seem an intimidating area, it is a lot of fun and offers a world of business possibilities."),(0,i.kt)("p",null,"\ud83d\udc69\u200d\ud83c\udfeb However, the world of programming is so vast that it is difficult to decide where to start. That is why we have created this course. Here ",(0,i.kt)("strong",{parentName:"p"},"you will learn how to program from scratch and the basics to create BIM applications with IFC.js"),"."),(0,i.kt)(o.M,{mdxType:"IfcCard"},"BIM programming will allow you to create your own tools, automate processes, create new businesses and qualify for better jobs."),(0,i.kt)(c.Q,{hideSource:!0,image:(0,i.kt)("img",{src:r(1244).Z,alt:"PC image"}),alt:"PC image",mdxType:"IfcImage"}),(0,i.kt)("h2",{id:"course-content"},"Course content"),(0,i.kt)(o.M,{mdxType:"IfcCard"},"\ud83d\udcbb IT fundamentals: internet and programming."),(0,i.kt)(o.M,{mdxType:"IfcCard"},"\ud83c\udf33 HTML from zero to hero."),(0,i.kt)(o.M,{mdxType:"IfcCard"},"\ud83d\udc85 CSS: what you need to know."),(0,i.kt)(o.M,{mdxType:"IfcCard"},"\ud83d\udc31 Git + npm crash course."),(0,i.kt)(o.M,{mdxType:"IfcCard"},"\ud83c\udfa5 Three.js foundation."),(0,i.kt)(o.M,{mdxType:"IfcCard"},"\ud83d\ude80 Create a basic BIM viewer with web-ifc-three."),(0,i.kt)(o.M,{mdxType:"IfcCard"},"\ud83d\udd25\ud83d\ude80 Create an advanced BIM app with web-ifc-viewer."),(0,i.kt)(o.M,{mdxType:"IfcCard"},"\ud83e\udde0 Advanced IFC internals with web-ifc."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"\ud83d\udc4c Nothing! We will teach you to code your own BIM applications from scratch."))}m.isMDXComponent=!0},1244:function(e,t,r){"use strict";t.Z=r.p+"assets/images/crash-course-ecf5f857638e10a932180173e4968a65.png"}}]);