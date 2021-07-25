(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[463],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,p=d["".concat(l,".").concat(m)]||d[m]||h[m]||a;return n?i.createElement(p,o(o({ref:t},u),{},{components:n})):i.createElement(p,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3878:function(e,t,n){"use strict";n.d(t,{r:function(){return o}});var i=n(7294),r="icon_1PGw",a=n(9205),o=function(e){return i.createElement("div",{className:"alert alert--primary",role:"alert",style:{margin:"2rem"}},i.createElement("div",{className:r},i.createElement(a.A,{icon:"\ud83d\udca1",active:"true"})),e.children)}},983:function(e,t,n){"use strict";n.d(t,{M:function(){return s}});var i=n(7294),r=n(9205),a="titleOffset_2I3u",o="iconContainer_1xRA",s=function(e){var t=e.title?i.createElement("div",{className:"card__header"},i.createElement("span",{className:o},e.icon&&i.createElement(r.A,{icon:e.icon,link:e.link,active:"true"})),i.createElement("h3",{className:e.icon&&a},e.title)):"";return i.createElement("div",{className:"card-demo",style:{margin:"2rem"}},i.createElement("div",{className:"card"},t,i.createElement("div",{className:"card__body"},i.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return c}});var i=n(7294),r="hidden_2JtY",a="iconContainer_2Rnc",o="visible_2147",s="link_Lh4h",l="clickable_3vcc",c=function(e){var t=" "+(e.active?o:r),n=s+" "+(e.link&&l);return i.createElement("div",{className:a+t},i.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},6649:function(e,t,n){"use strict";n.d(t,{x:function(){return a}});var i=n(7294),r="threeScene_3QXR",a=function(e){return i.createElement("iframe",{className:r,width:"100%",height:"300",key:Math.random(),src:e.link,frameBorder:"0"})}},8830:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return h},toc:function(){return d},default:function(){return p}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o=n(983),s=n(3878),l=n(6649),c=["components"],u={title:"\u2728 Subsets",sidebar_position:2},h={unversionedId:"Guide/web-ifc-three/Tutorials/Highlighting",id:"Guide/web-ifc-three/Tutorials/Highlighting",isDocsHomePage:!1,title:"\u2728 Subsets",description:"Introduction",source:"@site/docs/Guide/web-ifc-three/Tutorials/Highlighting.mdx",sourceDirName:"Guide/web-ifc-three/Tutorials",slug:"/Guide/web-ifc-three/Tutorials/Highlighting",permalink:"/info/ja/docs/Guide/web-ifc-three/Tutorials/Highlighting",version:"current",sidebarPosition:2,frontMatter:{title:"\u2728 Subsets",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd0f Picking",permalink:"/info/ja/docs/Guide/web-ifc-three/Tutorials/Picking"},next:{title:"\ud83d\udcc3 Properties",permalink:"/info/ja/docs/Guide/web-ifc-three/Tutorials/Properties"}},d=[{value:"Introduction",id:"introduction",children:[{value:"Import dependencies",id:"import-dependencies",children:[]}]},{value:"How to do it",id:"how-to-do-it",children:[{value:"Highlight material",id:"highlight-material",children:[]},{value:"Single subset",id:"single-subset",children:[]},{value:"Multiple subsets",id:"multiple-subsets",children:[]},{value:"Extracting geometry",id:"extracting-geometry",children:[]}]}],m={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"  \ud83c\udfa9\nIn almost all BIM applications, user-selected elements are highlighted when the user moves the mouse over them or selects them. IFC.js is no exception, and in this tutorial we will see how to achieve this."),(0,a.kt)("a",{href:"https://ifcjs.github.io/info/docs/Guide/web-ifc-three/Tutorials/Picking/",target:"_self"},"\ud83d\udc69\u200d\ud83c\udfeb Previously ")," we have seen how to obtain the ID of an object on which we cast a ray with the ",(0,a.kt)("a",{href:"https://threejs.org/docs/#api/en/core/Raycaster"},"Raycaster"),". Now that we have those IDs, it's possible to highlight those elements using ",(0,a.kt)("b",null,"geometric subsets"),".",(0,a.kt)(o.M,{icon:"\ud83e\uddf1",title:"Geometric subsets?",mdxType:"IfcCard"},(0,a.kt)("b",null,"Geometric subsets")," are any group of items in the model. For example: all doors, all ground floor elements or all elements fulfilling a given condition."),(0,a.kt)("h3",{id:"import-dependencies"},"Import dependencies"),(0,a.kt)("p",null,"  \u26bd\nWe'll need a ",(0,a.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/materials/Material"},"material")," to highlight the items. You can choose any material you like; in this example we'll use a ",(0,a.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/materials/MeshLambertMaterial"},"MeshLambertmaterial"),", which we'll import from Three's core library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import {\n  MeshLambertMaterial\n} from "three";\n')),(0,a.kt)("p",null,"We'll also use the Raycaster, so you'll also need ",(0,a.kt)("a",{href:"https://ifcjs.github.io/info/docs/Guide/web-ifc-three/Tutorials/Picking/#import-threejs-dependencies",target:"_self"},"those dependencies"),", as well as ",(0,a.kt)("a",{href:"https://ifcjs.github.io/info/docs/Guide/web-ifc-three/Tutorials/Picking/#import-three-mesh-bvh-optional",target:"_self"},"three-mesh-bvh")," if we want optimal performance."),(0,a.kt)("h2",{id:"how-to-do-it"},"How to do it"),(0,a.kt)("h3",{id:"highlight-material"},"Highlight material"),(0,a.kt)("p",null,"  \ud83c\udf00\nThe first thing is to create the highlight material. You can do this however you like, although we like to use ",(0,a.kt)("inlineCode",{parentName:"p"},"depthTest=false")," so that the object is visible from any viewpoint."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  // Creates subset material\n  const prepicked = new MeshLambertMaterial({\n      transparent: true,\n      opacity: 0.6,\n      color: 0xff88ff,\n      depthTest: false\n  })\n")),(0,a.kt)("p",null,"  \u261d\nNote that geometric subsets are identified by their material."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you create a subset with a wall using a material A, and then try to create a subset of another wall with the same material A, the second wall will be added to the subset of the first one.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you create a subset with a wall using material A, and then try to create another subset of the same wall using material B, you will have created two independent subsets."))),(0,a.kt)(s.r,{mdxType:"IfcAlert"},"You can have two separate subsets with the same appearance creating two instances of the same material."),(0,a.kt)("h3",{id:"single-subset"},"Single subset"),(0,a.kt)("p",null,"It is very common that when the user hovers the mouse over an element, the element is softly illuminated. We can achieve this effect using ",(0,a.kt)("inlineCode",{parentName:"p"},"createSubset"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\n  const ifc = ifcLoader.ifcManager;\n\n  // Reference to the previous selection\n  let model = { id: - 1};\n\n  function highlight(event, material, model) {\n     const found = cast(event)[0];\n     if (found) {\n\n         // Gets model ID\n         model.id = found.object.modelID;\n\n         // Gets Express ID\n         const index = found.faceIndex;\n         const geometry = found.object.geometry;\n         const ifc = ifcLoader.ifcManager;\n         const id = ifc.getExpressId(geometry, index);\n\n         // Creates subset\n         ifcLoader.ifcManager.createSubset({\n             modelID: model.id,\n             ids: [id],\n             material: material,\n             scene: scene,\n             removePrevious: true\n         })\n     } else {\n         // Removes previous highlight\n         ifc.removeSubset(model.id, scene, material);\n     }\n  }\n\n  window.onmousemove = (event) => highlight(event, prepicked, model);\n")),(0,a.kt)(l.x,{link:"https://ifcjs.github.io/hello-world/scenes/highlighting-single/",mdxType:"Scene"}),(0,a.kt)("p",null,"There are several interesting things to look out for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"cast()")," was shown ",(0,a.kt)("a",{href:"https://ifcjs.github.io/info/docs/Guide/web-ifc-three/Tutorials/Picking/#how-to-do-it",target:"_self"},"previously"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The variable ",(0,a.kt)("inlineCode",{parentName:"p"},"currentModel")," is used to store a reference of the selected model; this way, when the user is not hovering an object, we are able to remove the previous subset with ",(0,a.kt)("inlineCode",{parentName:"p"},"removeSubset()"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The IDs of the items whose subset to create has to be given as an array (even if it's a single ID)."))),(0,a.kt)("h3",{id:"multiple-subsets"},"Multiple subsets"),(0,a.kt)("p",null,"WIP"),(0,a.kt)("h3",{id:"extracting-geometry"},"Extracting geometry"),(0,a.kt)("p",null,"WIP"))}p.isMDXComponent=!0}}]);