(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14],{4395:function(e,t,a){"use strict";a.r(t),a.d(t,{Highlight:function(){return f},default:function(){return b},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return m}});var i=a(2122),n=a(9756),r=a(7294),o=a(3905),s=function(e){var t=e.title?r.createElement("div",{className:"card__header"},r.createElement("h3",null,e.title)):"";return r.createElement("div",{className:"card-demo",style:{margin:"2rem"}},r.createElement("div",{className:"card"},t,r.createElement("div",{className:"card__body"},r.createElement("p",null," ",e.children," "))))},l=a(639),p=function(e){return r.createElement("span",{style:{position:"absolute",margin:"0 0.5rem 0 0.5rem"}},r.createElement(l.Z,null,e.children))},c=function(e){return r.createElement("div",{className:"alert alert--primary",role:"alert",style:{margin:"2rem"}},r.createElement("div",{style:{marginBottom:"2rem"}},r.createElement(p,null,"lightbulb")),e.children)},h=["components"],d={sidebar_position:1},u={unversionedId:"Introduction",id:"Introduction",isDocsHomePage:!1,title:"Introduction",description:"IFC.js is a JavaScript library to load, display and edit IFC models in the browser.",source:"@site/docs/Introduction.mdx",sourceDirName:".",slug:"/Introduction",permalink:"/info/docs/Introduction",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting started",permalink:"/info/docs/Guide"}},m=[{value:"What is this library?",id:"what-is-this-library",children:[{value:"What is IFC?",id:"what-is-ifc",children:[]},{value:"The problem of IFC",id:"the-problem-of-ifc",children:[]},{value:"IFC.js to the rescue",id:"ifcjs-to-the-rescue",children:[]}]},{value:"IFC.js in a nutshell",id:"ifcjs-in-a-nutshell",children:[]},{value:"Who is this library for",id:"who-is-this-library-for",children:[]},{value:"Why is IFC.js different?",id:"why-is-ifcjs-different",children:[{value:"Multiplatform",id:"multiplatform",children:[]},{value:"Speed \u23f1\ufe0f",id:"speed-\ufe0f",children:[]},{value:"Features",id:"features",children:[]}]},{value:"Source code",id:"source-code",children:[]},{value:"Contribute",id:"contribute",children:[]}],f=function(){return(0,o.kt)("iframe",{width:"100%",height:"300",key:Math.random(),src:"https://ifcjs.github.io/hello-world/introduction/",frameBorder:"0"})},y={toc:m,Highlight:f};function b(e){var t=e.components,a=(0,n.Z)(e,h);return(0,o.kt)("wrapper",(0,i.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"IFC.js is a JavaScript library to load, display and edit IFC models in the browser."),(0,o.kt)("p",null,"\ud83c\udfae Try the ",(0,o.kt)("a",{parentName:"p",href:"https://agviegas.github.io/web-ifc-viewer/examples/simple-html/"},"live\ndemo")," with your\nIFC model."),(0,o.kt)("p",null,"\ud83d\udd0d Let's discover ",(0,o.kt)("strong",{parentName:"p"},"IFC.js in less than 5 minutes"),". "),(0,o.kt)("h2",{id:"what-is-this-library"},"What is this library?"),(0,o.kt)("h3",{id:"what-is-ifc"},"What is IFC?"),(0,o.kt)("p",null,"\ud83c\udfda Architects no longer draw building plans one by one, but create 3D models of\nbuildings, much like the houses modelled in ",(0,o.kt)("a",{parentName:"p",href:"https://www.ea.com/es-es/games/the-sims"},"The\nSIMS"),". This way of working is called\nBIM (Building Information Model), because the models created contain both\ngeometry and information."),(0,o.kt)("p",null,"\ud83d\udd87 However, a building is so complex that there is no single application that can\ncreate these models in their entirety. Each application has a specific mission:\nmodelling geometry, calculating structures, making energy simulations, creating\nproject documents, and so on. "),(0,o.kt)("p",null,"\u26a0 These tools come from multiple developers around\nthe world and each one works in its own format. In other words, the structural\nmodel created by a structural calculation application cannot be read by the\nenergy simulation software, and vice versa. So how is it possible to create a\nmodel of a building from multiple tools?"),(0,o.kt)("p",null,"\ud83c\udf89  The answer is\n",(0,o.kt)("a",{parentName:"p",href:"https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/"},(0,o.kt)("strong",{parentName:"a"},"IFC")),",\na format created by BuildingSMART to contain these 3D models of buildings.\nIt is open, so anyone can read and write it. Yay! "),(0,o.kt)(c,{mdxType:"IfcjsAlert"},"Thanks to IFC any developer can freely create BIM apps that can communicate with the apps of the big development companies in the construction sector."),(0,o.kt)("h3",{id:"the-problem-of-ifc"},"The problem of IFC"),(0,o.kt)("p",null,"Anyone who wants to make a BIM application needs to read and write IFC files to\nbe able to import and export information from other tools. Unfortunately, IFC is\na format that is difficult to read and write. There are thousands of pages of\ndocumentation and creating and maintaining an self-made IFC parser is a huge\ntask."),(0,o.kt)(s,{title:"\ud83d\udcb8   Can you afford IFC?",mdxType:"IfcjsCard"},"This is something only companies with several developers working full time on this could afford. It doesn't sound that open anymore, does it?"),(0,o.kt)("p",null,"In case you are curious about how an IFC looks like inside, here you have an example.\nImagine parsing hundreds of thousands of lines like these:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\n#6699= IFCCARTESIANPOINT((0.,-1.70530256582424E-13));\n#6701= IFCAXIS2PLACEMENT2D(#6699,#23);\n#6702= IFCRECTANGLEPROFILEDEF(.AREA.,'Curtain wall',#6701,5700.,1380.);\n#6703= IFCCARTESIANPOINT((892.,-253.399999999998,150.));\n#6705= IFCAXIS2PLACEMENT3D(#6703,#15,#19);\n#6706= IFCEXTRUDEDAREASOLID(#6702,#6705,#19,506.8);\n#6707= IFCCOLOURRGB($,0.501960784313,0.501960784313,0.501960784313);\n\n")),(0,o.kt)("p",null,"\ud83d\udc80 Even if you are willing to create a parser from scratch and maintain it with\nevery change in the IFC schema, there are several non-trivial questions to\ntackle this problem. How to manage memory in very large files? How to implement\ngeometric generation efficiently? What to do when an IFC has not been defined\ncorrectly? "),(0,o.kt)("h3",{id:"ifcjs-to-the-rescue"},"IFC.js to the rescue"),(0,o.kt)("p",null,"It wouldn't make sense for all developers to have to implement their own IFC\nfile reader and writer for their applications when we all what the same thing:\n",(0,o.kt)("strong",{parentName:"p"},"importing and exporting geometry and the data"),"."),(0,o.kt)(s,{mdxType:"IfcjsCard"},"IFC.js is a JavaScript library that makes it super easy to read and write IFC files."),(0,o.kt)("p",null,"This allows developers of architecture and construction applications\nto work in IFC effortlessly and focus on the functionalities that really add\nvalue to their business."),(0,o.kt)("h2",{id:"ifcjs-in-a-nutshell"},"IFC.js in a nutshell"),(0,o.kt)("p",null,"IFC.js reads IFC files and generates two things:"),(0,o.kt)(s,{title:"\ud83e\uddca   Geometry",mdxType:"IfcjsCard"},"IFC.js is able to generate 3D scenes because it is compatible with 3D libraries such as Three.js or Babylon.js. This means that you can create 3D BIM tools right away."),(0,o.kt)(s,{title:"\ud83d\udd17   Data",mdxType:"IfcjsCard"},"High-level access to all the properties associated with that geometry. This means easy access to data on the building components, their materials, thermal characteristics, structural strength, etc."),(0,o.kt)("p",null,"Creating a BIM applications with IFC.js is as easy as creating a webpage with JavaScript, HTML and CSS:"),(0,o.kt)(f,{mdxType:"Highlight"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"      import { IfcLoader } from 'web-ifc-three';\n      import { Scene } from 'three';\n\n      //Creates THREE.js scene\n      const scene = new Scene();\n\n      ...\n\n      //Loads IFC and adds it to the scene\n      const ifcLoader = new IfcLoader();\n      ifcLoader.load(ifcURL, (geometry) => scene.add(geometry));\n")),(0,o.kt)("h2",{id:"who-is-this-library-for"},"Who is this library for"),(0,o.kt)("p",null,"This library is for anyone who wants to develop BIM applications: both developers creating applications for the construction industry and architects and other professionals who want to take advantage of the data contained in their IFC files."),(0,o.kt)("p",null,"To use this library it is necessary to have a basic knowledge of JavaScript, HTML and CSS. This knowledge is beyond the scope of this documentation. You'll also need to use some 3D library to display the geometry of the IFC (Three.js or Babylon.js). If you don't know where to start, we suggest you to take a look ",(0,o.kt)("a",{parentName:"p",href:"https://threejsfundamentals.org/"},"here")," or just join the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/g7Uzn2KSwB"},"Discord Channel")," and say hi."),(0,o.kt)("h2",{id:"why-is-ifcjs-different"},"Why is IFC.js different?"),(0,o.kt)("p",null,"IFC.js is a library written by and for JavaScript, arguably one of the most ubiquitous languages. This means that it is compatible with web browsers, desktop and mobile applications. JavaScript is also one of the easiest languages to learn, and allows you to build user interfaces with HTML and CSS. In other words, creating BIM applications with IFC.js is as easy as creating a web page."),(0,o.kt)("h3",{id:"multiplatform"},"Multiplatform"),(0,o.kt)("p",null,"You can use IFC.js to create open BIM applications for any platform:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Web"),": frontend web applications that read and write IFC files and display 3D without relying on server communication can be created using vanilla JavaScript or other tools such as React, Vue, Angular, Svelte, etc. That is, with IFC.js we can turn any web browser into an open BIM application. Do you think a browser is not powerful enough to process an IFC and display the 3d as a native application? You can see for yourself in the ",(0,o.kt)("a",{parentName:"p",href:"https://threejs.org/examples/webgl_loader_ifc.html"},"official Three.js example"),", which uses IFC.js.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Server"),": There are cases where the IFC file cannot be processed at the client. For example, a mobile device may not have the power to display several medium or large IFCs. In this case it is possible to use IFC.js on the server via ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," and send the Three.js scene already prepared to the client.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Desktop"),": Sometimes we don't want to create web applications, but native desktop applications that run on Windows or iOS. This is possible thanks to technologies like ",(0,o.kt)("a",{parentName:"p",href:"https://www.electronjs.org/"},"Electron"),". These native applications will be programmed in the same way as web applications; HTML, CSS, JavaScript, React, Vue, etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Mobile"),": IFC.js also supports ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/"},"React Native"),", which maps WebGL code to native OpenGL. This means that you can create IFC-compatible Open BIM apps that run on Android and iOS without any additional effort."))),(0,o.kt)("h3",{id:"speed-\ufe0f"},"Speed \u23f1\ufe0f"),(0,o.kt)("p",null,"If you have experience with web applications, you might be thinking that the\nweak point of a JavaScript-based IFC library is performance. However, the core\nof the library is developed in C++ combined with WebAssembly and\n",(0,o.kt)("a",{parentName:"p",href:"https://emscripten.org/"},"Emscripten"),". It is designed specifically for maximum\nperformance, allowing IFC.js to approach the speed and performance of desktop\napplications while running directly in the browser."),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)("p",null,"Currently IFC.js can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Read IFC files")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Generate 3D geometry")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Edit geometry display")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Load multiple models")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Retrieve IFC properties")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Write IFC files"))),(0,o.kt)("p",null,"We are currently working to be able to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Load any type of geometry")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Handle multiple big files at 60 fps"))),(0,o.kt)("h2",{id:"source-code"},"Source code"),(0,o.kt)("p",null,"IFC.js is a large, multi-language library (C++, TypeScript, JavaScript, etc). Having it in a single repository would be difficult and unwieldy. For that reason, the library exists in multiple repositories, where each one has its own purpose:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/tomvandig/web-ifc"},"web-ifc")," is the repository containing the core of the library: a parser and geometry generator written from scratch in C++ and compiled via Emscripten to WebAssembly. This repository encapsulates the complexity of reading IFC files and loading their data into memory.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/agviegas/web-ifc-three"},"web-ifc-three")," is the library that adapts web-ifc to Three.js geometric entities. This library is theofficial IFC Loader of Three.js.Thanks to this adapter, open BIM applications can be created with Three.js in just two lines of code.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/anders-lundgren/web-ifc-babylon"},"web-ifc-babylon")," is the adaptation of this library for babylon.js.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/agviegas/web-ifc-viewer"},"web-ifc-viewer")," is a browser-based IFC viewer and a boilerplate library with many examples of what can be done with IFC.js and three.js. All BIM applications have common functionalities: scene navigation, material changes, element selection by clicking on them, section plans, etc. There is an example of all these functionalities in this repository, so it can be reused in open BIM applications out of the box. ",(0,o.kt)("a",{parentName:"p",href:"https://agviegas.github.io/web-ifc-viewer/examples/simple-html/"},"You can try it here"),"."))),(0,o.kt)("h2",{id:"contribute"},"Contribute"),(0,o.kt)("p",null,"Do you want to help us keep improving the world of Open BIM development with\nIFC.js? The library is big, so you will have to choose where you want to\nparticipate."),(0,o.kt)(s,{title:"Parsing, geometry and C++",mdxType:"IfcjsCard"},"If you are passionate about C++, WebAssembly, parsing or the low-level implementation of the IFC standard, you can help us with web-ifc. This is the largest and most complex library of all."),(0,o.kt)(s,{title:"Three.js, geometry and Typescript",mdxType:"IfcjsCard"},"On the other hand, if you are a Three.js developer and would like to contribute to the library, you can help us with web-ifc-three, which is the official Three.js IFC Loader (geometry optimisation, building the IFC Loader API, etc)."),(0,o.kt)(s,{title:"BIM tools, brainstorming and UX",mdxType:"IfcjsCard"},"Finally, if you are only interested in building Open BIM applications and you have great ideas for BIM tools or user interfaces, the best thing to do is to help us make web-ifc-viewer the best IFC viewer on the market."),(0,o.kt)("p",null,"In any case, we encourage you to stop by the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/g7Uzn2KSwB"},"Discord\nchannel"),", say hello and tell us what's on\nyour mind so we can give you some guidance."))}b.isMDXComponent=!0}}]);