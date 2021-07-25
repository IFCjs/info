(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[408],{3878:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});var o=n(7294),i="icon_1PGw",r=n(9205),a=function(e){return o.createElement("div",{className:"alert alert--primary",role:"alert",style:{margin:"2rem"}},o.createElement("div",{className:i},o.createElement(r.A,{icon:"\ud83d\udca1",active:"true"})),e.children)}},6649:function(e,t,n){"use strict";n.d(t,{x:function(){return r}});var o=n(7294),i="threeScene_3QXR",r=function(e){return o.createElement("iframe",{className:i,width:"100%",height:"300",key:Math.random(),src:e.link,frameBorder:"0"})}},1742:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return h},toc:function(){return d},default:function(){return p}});var o=n(2122),i=n(9756),r=(n(7294),n(3905)),a=(n(983),n(3878)),s=n(6649),c=["components"],l={title:"\ud83e\udd0f Picking",sidebar_position:1},h={unversionedId:"Guide/web-ifc-three/Tutorials/Picking",id:"Guide/web-ifc-three/Tutorials/Picking",isDocsHomePage:!1,title:"\ud83e\udd0f Picking",description:"Introduction",source:"@site/docs/Guide/web-ifc-three/Tutorials/Picking.mdx",sourceDirName:"Guide/web-ifc-three/Tutorials",slug:"/Guide/web-ifc-three/Tutorials/Picking",permalink:"/info/ja/docs/Guide/web-ifc-three/Tutorials/Picking",version:"current",sidebarPosition:1,frontMatter:{title:"\ud83e\udd0f Picking",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/info/ja/docs/Guide/web-ifc-three/api"},next:{title:"Introduction",permalink:"/info/ja/docs/Guide/web-ifc-viewer/Introduction"}},d=[{value:"Introduction",id:"introduction",children:[{value:"Import Three.js dependencies",id:"import-threejs-dependencies",children:[]},{value:"Import three-mesh-bvh (optional)",id:"import-three-mesh-bvh-optional",children:[]},{value:"Store reference of IFC models",id:"store-reference-of-ifc-models",children:[]}]},{value:"How to do it",id:"how-to-do-it",children:[]},{value:"Next steps",id:"next-steps",children:[]}],u={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"\ud83d\udeb6\u200d\u2640\ufe0f\nSo far we have only loaded IFC models into the scene. That's already great, but it would be even better to be able to interact with that model, and that's precisely what we're going to do."),(0,r.kt)("h3",{id:"import-threejs-dependencies"},"Import Three.js dependencies"),(0,r.kt)("p",null,"  \u26a1\u26a1\u26a1\nBefore you can do things with objects, you need to be able to select them. This can be easily achieved with the ",(0,r.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/core/Raycaster"},"Three.js Raycaster"),", which can be imported from ",(0,r.kt)("inlineCode",{parentName:"p"},"three"),"'s core library. In addition, we will import a ",(0,r.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/math/Vector2"},"Vector2")," object to store the mouse position in the scene."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import {\n  Raycaster,\n  Vector2\n} from "three";\n')),(0,r.kt)(a.r,{mdxType:"IfcAlert"},'The Raycaster allows you to shoot "beams" that hit objects in the scene and return their information.'),(0,r.kt)("h3",{id:"import-three-mesh-bvh-optional"},"Import three-mesh-bvh (optional)"),(0,r.kt)("p",null,"  \ud83d\udc69\u200d\ud83d\ude80\ud83d\ude80\nIn addition, we will import the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gkjohnson/three-mesh-bvh"},"three-mesh-bvh library")," to make the selection of objects much more optimal. This can be installed with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i three-mesh-bvh"),". Don't worry, you don't have to learn how to use that library. Just give us these library objects and IFC.js will take care of the rest."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {\n    acceleratedRaycast,\n    computeBoundsTree,\n    disposeBoundsTree\n} from 'three-mesh-bvh';\n\n// Sets up optimized picking\nifcLoader.ifcManager.setupThreeMeshBVH(\n                        computeBoundsTree,\n                        disposeBoundsTree,\n                        acceleratedRaycast);\n")),(0,r.kt)("h3",{id:"store-reference-of-ifc-models"},"Store reference of IFC models"),(0,r.kt)("p",null,"  \ud83c\udfe0\ud83c\udfe0\ud83c\udfe0\nBefore doing anything else, it is necessary to save a reference to the IFC models in the scene in order to select them. To do this, we just need to create an array where we store the models we load:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{2,6}","{2,6}":!0},'//Sets up the IFC loading\nconst ifcModels = [];\nconst ifcLoader = new IFCLoader();\nifcLoader.ifcManager.setWasmPath("../../");\nifcLoader.load("../../IFC/01.ifc", (ifcModel) => {\n  ifcModels.push(ifcModel.mesh);\n  scene.add(ifcModel.mesh)\n});\n')),(0,r.kt)("h2",{id:"how-to-do-it"},"How to do it"),(0,r.kt)("p",null,"  \ud83d\udc01\nNext we will create an instance of the Raycaster and the mouse position vector. To optimise the application, the Raycaster will only retrieve information from the first object it encounters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const raycaster = new Raycaster();\nraycaster.firstHitOnly = true;\nconst mouse = new Vector2();\n")),(0,r.kt)("p",null,"Now we need a function for the Raycaster to cast rays, calculating the position of the mouse on the screen. Note that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The threeCanvas object is the HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"<canvas>")," element where the Three.js scene is being rendered. A reference to it can be retrieved with ",(0,r.kt)("inlineCode",{parentName:"p"},"getElementByID()"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It is necessary to specify which objects the beam collides with. In this case, it will only collide with the loaded IFC models, i.e. if there are more objects in the scene, it will ignore them."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function cast(event) {\n\n  // Computes the position of the mouse on the screen\n  const bounds = threeCanvas.getBoundingClientRect();\n\n  const x1 = event.clientX - bounds.left;\n  const x2 = bounds.right - bounds.left;\n  mouse.x = (x1 / x2) * 2 - 1;\n\n  const y1 = event.clientY - bounds.top;\n  const y2 = bounds.bottom - bounds.top;\n  mouse.y = -(y1 / y2) * 2 + 1;\n\n  // Places it on the camera pointing to the mouse\n  raycaster.setFromCamera(mouse, camera);\n\n  // Casts a ray\n  return raycaster.intersectObjects(ifcModels);\n}\n")),(0,r.kt)("p",null,"  \ud83d\udc53\nWe have a function that fires a ray and returns the object it collides with, but we are not doing anything with that object. Let's create a second function that gets the index of the face the ray hit and logs in the console the Express ID of the object it belongs to."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function pick(event) {\n    const found = cast(event)[0];\n    if (found) {\n        const index = found.faceIndex;\n        const geometry = found.object.geometry;\n        const ifc = ifcLoader.ifcManager;\n        const id = ifc.getExpressId(geometry, index);\n        console.log(id);\n    }\n}\n")),(0,r.kt)("p",null,"Finally, all that remains is to associate that function with an event (in this case it's a double click)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  threeCanvas.ondblclick = pick;\n")),(0,r.kt)("p",null,"If you have done everything right and double click on an item, you will see its Express ID in the console (you can access the console by pressing F12 or by inspecting the page)."),(0,r.kt)(s.x,{link:"https://ifcjs.github.io/hello-world/scenes/picking/",mdxType:"Scene"}),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"  \ud83c\udf89\ud83c\udf89\ud83c\udf89\nCongratulations! You now know how to get the ID of an object by clicking on it. Now we can do many things using that ID."),(0,r.kt)("p",null,"  \u2728\nHowever, it would be nice if the user could see graphically that the object has been selected. For that, let's go to the next point, where we will learn how to highlight elements."))}p.isMDXComponent=!0}}]);