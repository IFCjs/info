(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4102],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3878:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});var r=n(7294),i="icon_1PGw",o=n(9205),a=function(e){return r.createElement("div",{className:"alert alert--primary",role:"alert",style:{margin:"2rem"}},r.createElement("div",{className:i},r.createElement(o.A,{icon:"\ud83d\udca1",active:"true"})),e.children)}},983:function(e,t,n){"use strict";n.d(t,{M:function(){return c}});var r=n(7294),i=n(9205),o="titleOffset_2I3u",a="iconContainer_1xRA",c=function(e){var t=e.title?r.createElement("div",{className:"card__header"},r.createElement("span",{className:a},e.icon&&r.createElement(i.A,{icon:e.icon,link:e.link,active:"true"})),r.createElement("h3",{className:e.icon&&o},e.title)):"";return r.createElement("div",{className:"card-demo",style:{margin:"2rem"}},r.createElement("div",{className:"card"},t,r.createElement("div",{className:"card__body"},r.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return s}});var r=n(7294),i="hidden_2JtY",o="iconContainer_2Rnc",a="visible_2147",c="link_Lh4h",l="clickable_3vcc",s=function(e){var t=" "+(e.active?a:i),n=c+" "+(e.link&&l);return r.createElement("div",{className:o+t},r.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},6649:function(e,t,n){"use strict";n.d(t,{x:function(){return o}});var r=n(7294),i="threeScene_3QXR",o=function(e){return r.createElement("iframe",{className:i,width:"100%",height:"600px",key:Math.random(),src:e.link,frameBorder:"0"})}},9075:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=n(983),c=(n(3878),n(6649)),l=["components"],s={title:"\ud83e\udd0f Picking",sidebar_position:1},u={unversionedId:"Guide/web-ifc-viewer/Tutorials/Picking",id:"Guide/web-ifc-viewer/Tutorials/Picking",isDocsHomePage:!1,title:"\ud83e\udd0f Picking",description:"Introduction",source:"@site/docs/Guide/web-ifc-viewer/Tutorials/Picking.mdx",sourceDirName:"Guide/web-ifc-viewer/Tutorials",slug:"/Guide/web-ifc-viewer/Tutorials/Picking",permalink:"/info/zh/docs/Guide/web-ifc-viewer/Tutorials/Picking",version:"current",sidebarPosition:1,frontMatter:{title:"\ud83e\udd0f Picking",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/info/zh/docs/Guide/web-ifc-viewer/Introduction"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"How to do it",id:"how-to-do-it",children:[{value:"Easy pickings",id:"easy-pickings",children:[]},{value:"Preserve the pick",id:"preserve-the-pick",children:[]},{value:"Highlighting",id:"highlighting",children:[]},{value:"Clear it up",id:"clear-it-up",children:[]},{value:"Getting specific",id:"getting-specific",children:[]}]},{value:"The result",id:"the-result",children:[]},{value:"Next steps",id:"next-steps",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"\ud83d\udeb6\u200d\u2640\ufe0f Now that you're able to load models into your scene, we can jump into functionalities that make ",(0,o.kt)("inlineCode",{parentName:"p"},"web-ifc-viewer")," really shine \ud83c\udf1f. Here we'll learn to make our models a little more ",(0,o.kt)("strong",{parentName:"p"},"interactive"),", using ",(0,o.kt)("strong",{parentName:"p"},"picking functions")," from the IFC.js API. "),(0,o.kt)(a.M,{mdxType:"IfcCard"},"\u270c Dig into the code and check out all the details about the ",(0,o.kt)("a",{href:"https://github.com/IFCjs/web-ifc-viewer/tree/master/viewer/src/components/ifc/selection"},"selection")," component methods on Github."),(0,o.kt)("h2",{id:"how-to-do-it"},"How to do it"),(0,o.kt)("h3",{id:"easy-pickings"},"Easy pickings"),(0,o.kt)("p",null,"\ud83d\udc69\u200d\ud83c\udfeb Let's start out by using our \ud83d\uddb1\ufe0f mouse to highlight different parts of our model when ",(0,o.kt)("strong",{parentName:"p"},"hovered"),". Thankfully IFC.js makes it easy with the built in method ",(0,o.kt)("inlineCode",{parentName:"p"},"prePickIfcItem()"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"window.onmousemove = () => viewer.IFC.selector.prePickIfcItem()\n")),(0,o.kt)(a.M,{mdxType:"IfcCard"},"\ud83d\ude4c Under the hood web-ifc-viewer borrows the ",(0,o.kt)("a",{href:"https://threejs.org/docs/index.html?q=raycaster#api/en/core/Raycaster"},"Raycaster")," from Three.js. And since IFC.js created the official ",(0,o.kt)("a",{href:"https://threejs.org/examples/webgl_loader_ifc.html"},"IFCLoader")," for Three.js, it's a beautiful marriage!"),(0,o.kt)("h3",{id:"preserve-the-pick"},"Preserve the pick"),(0,o.kt)("p",null,"Now, let's use ",(0,o.kt)("inlineCode",{parentName:"p"},"pickIfcItem()")," to preserve our selection and then ",(0,o.kt)("strong",{parentName:"p"},"center our model")," in the camera's view.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"window.onclick = () => viewer.IFC.selector.pickIfcItem(true)\n")),(0,o.kt)(a.M,{mdxType:"IfcCard"},"\ud83e\uddd0 If you don't want to center the model, just leave the first argument of ",(0,o.kt)("i",null,"pickIfcItem()")," empty, which defaults to ",(0,o.kt)("i",null,"false"),"."),(0,o.kt)("p",null,"If we go a step further and ",(0,o.kt)("strong",{parentName:"p"},"destructure")," the selection, we return information very useful in other IFC.js methods, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"getProperties()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"window.onclick = async () => {\n  const {modelID, id} = await viewer.IFC.selector.pickIfcItem(true);\n    const props = await viewer.IFC.getProperties(modelID, id, true, false);\n    console.log(props);\n}\n")),(0,o.kt)("h3",{id:"highlighting"},"Highlighting"),(0,o.kt)("p",null,"What if we wanted to ",(0,o.kt)("strong",{parentName:"p"},"isolate")," a certain part of our model and \ud83d\udc7b hide the rest? This is where ",(0,o.kt)("inlineCode",{parentName:"p"},"highlightIfcItem()")," comes in handy. We'll just attach it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ondblclick")," event for now."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"window.ondblclick = viewer.IFC.selector.highlightIfcItem(true)\n")),(0,o.kt)("h3",{id:"clear-it-up"},"Clear it up"),(0,o.kt)("p",null,"\ud83d\udd19 Maybe we went a bit wild with our clicking and selecting. So let's call ",(0,o.kt)("inlineCode",{parentName:"p"},"unpickIfcItems()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"unHighlightIfcItems()")," to clear our doings with our ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," key \u2328\ufe0f."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"window.onkeydown = (event) => {\n    if(event.code === 'KeyC') {\n        viewer.IFC.selector.unpickIfcItems();\n        viewer.IFC.selector.unHighlightIfcItems();\n    }\n}\n")),(0,o.kt)("h3",{id:"getting-specific"},"Getting specific"),(0,o.kt)("p",null,"\ud83d\udd0d In some situations, we may want to use our ",(0,o.kt)("strong",{parentName:"p"},"Express ID's")," to interact with the model in a different way. In this tutorial we'll add a simple button to let the user highlight a part of the model that isn't so easily visible. "),(0,o.kt)("p",null,"Let's quickly ",(0,o.kt)("strong",{parentName:"p"},"add a button")," with some styling \ud83c\udfa8."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<button id="express_22492">Front Door</button>\n\x3c!-- style to your preference  --\x3e\n')),(0,o.kt)("p",null,"\ud83c\udff7\ufe0f And finally specify our ",(0,o.kt)("strong",{parentName:"p"},"Express ID")," in the event handler \ud83d\udd90\ufe0f with the ",(0,o.kt)("inlineCode",{parentName:"p"},"pickIfcItemsByID()")," method,  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"document.getElementById('express_22492')\n.addEventListener('click', () => {\n    viewer.IFC.selector.pickIfcItemsByID(0, [22492], true);\n})\n")),(0,o.kt)("h2",{id:"the-result"},"The result"),(0,o.kt)("p",null,"\ud83d\udda5\ufe0f Here is an example of everything we've learned today: \ud83d\udda5\ufe0f"),(0,o.kt)("a",{href:"https://github.com/IFCjs/hello-world/tree/main/examples/web-ifc-viewer/picking/"},"Github repo"),(0,o.kt)(c.x,{link:"https://ifcjs.github.io/hello-world/examples/web-ifc-three/mapbox/",mdxType:"Scene"}),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"\ud83c\udf89\ud83c\udf89\ud83c\udf89\nCongrats! You now know how to ",(0,o.kt)("strong",{parentName:"p"},"pick")," and ",(0,o.kt)("strong",{parentName:"p"},"highlight")," your model in a handful of different ways. Now it's up to you to use the tools creatively in your own project!"))}m.isMDXComponent=!0}}]);