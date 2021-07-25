(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[587],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return u}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=i,m=p["".concat(s,".").concat(u)]||p[u]||h[u]||r;return t?o.createElement(m,a(a({ref:n},d),{},{components:t})):o.createElement(m,a({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9034:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return h}});var o=t(2122),i=t(9756),r=(t(7294),t(3905)),a=["components"],l={title:"Hello world",sidebar_position:2},s={unversionedId:"Hello world",id:"Hello world",isDocsHomePage:!1,title:"Hello world",description:"Introduction",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/Hello world.mdx",sourceDirName:".",slug:"/Hello world",permalink:"/info/ja/docs/Hello world",version:"current",sidebarPosition:2,frontMatter:{title:"Hello world",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u306f\u3058\u3081\u306b",permalink:"/info/ja/docs/Introduction"},next:{title:"Getting started",permalink:"/info/ja/docs/Guide/Getting started"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Setting up the project",id:"setting-up-the-project",children:[]},{value:"Setting up a 3D scene",id:"setting-up-a-3d-scene",children:[]},{value:"Loading IFC files",id:"loading-ifc-files",children:[]}],d={toc:c};function h(e){var n=e.components,t=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Creating a BIM application with IFC.js is very easy.\nHowever, this requires a basic knowledge of web development (HTML, CSS, JavaScript), as well as the 3d library to be used to represent the geometry.\nIn this case Three.js will be used.\nIf you have no previous experience with Three.js and don't know where to start, you should probably look ",(0,r.kt)("a",{parentName:"p",href:"https://threejsfundamentals.org/"},"here"),".\nIn addition, you need to have Node.js and any IDE installed in order to follow the steps below."),(0,r.kt)("p",null,"This tutorial will be done with Vanilla JavaScript, without using frameworks like React, Vue, Angular, etc.\nHowever, the same steps can be adapted and applied to any of these use cases.\nYou can find the complete project of the guide ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/hello-world/tree/main/introduction"},"here")," and the deployed application ",(0,r.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/hello-world/introduction/"},"here"),"."),(0,r.kt)("h2",{id:"setting-up-the-project"},"Setting up the project"),(0,r.kt)("p",null,"The first thing to do is to create an empty folder that will contain our project.\nWe have to start a project with the npm init command.\nThis will create a package.json file containing some data such as the project name, version, commands and dependencies.\nIn addition, the following dependencies must be installed with npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"//Install a 3D library: in this case three.js will be used\nnpm i three\n\n//Install a bundler: we will use rollup.js for this guide\nnpm i rollup --save-dev\nnpm i @rollup/plugin-node-resolve --save-dev\n\n//Install a transpiler: we choose Babel\nnpm i @rollup/plugin-babel --save-dev\nnpm i @babel/core --save-dev\nnpm i @babel/preset-env --save-dev\n")),(0,r.kt)("p",null,'The next step is to create an HTML file (index.html) as the entry point of the application.\nThe HTML will have a canvas element that will be used to render the Three.js scene, as well as an input element, which will be the one we use to open IFC files from our computer to the application.\nIt will also have a reference to a file called "Bundle.js" which will be the file we are going to create with rollup and which will contain all the code for our application.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <link rel="stylesheet" href="styles.css" />\n    <title>Document</title>\n  </head>\n  <body>\n    <input type="file" name="load" id="file-input" />\n    <canvas id="three-canvas"></canvas>\n    <script src="bundle.js"><\/script>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"In order for the canvas to be full screen we are going to create the following CSS file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  overflow: hidden;\n}\n\n#three-canvas {\n  position: fixed;\n  top: 0;\n  left: 0;\n  outline: none;\n}\n\n#file-input {\n  z-index: 1;\n  position: absolute;\n}\n")),(0,r.kt)("p",null,'Next, the rollup configuration file must be created.\nThis file has to be called rollup.config.js and includes the reference to the plugins we have previously installed, and assumes that the JavaScript file we are going to work with is called "app.js".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import resolve from "@rollup/plugin-node-resolve";\nimport babel from "@rollup/plugin-babel";\n\nexport default {\n  input: "app.js",\n  output: [\n    {\n      format: "cjs",\n      file: "bundle.js",\n    },\n  ],\n  plugins: [\n    resolve(),\n    babel({\n      exclude: "node_modules/**",\n    }),\n  ],\n};\n')),(0,r.kt)("p",null,"In addition, we need to create the babel configuration file, called .babelrc (no name, just extension)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "presets": ["@babel/env"]\n}\n')),(0,r.kt)("p",null,"Also, the package.json file needs to be modified to contain the commands to control rollup.\nIf we have installed everything correctly, we should see the same dependencies in this file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "lcdlv",\n  "version": "1.0.0",\n  "description": "-",\n  "main": "app.js",\n  "scripts": {\n    "build": "rollup -c",\n    "watch": "rollup -c -w"\n  },\n  "author": "",\n  "license": "ISC",\n  "devDependencies": {\n    "@babel/core": "^7.13.15",\n    "@babel/preset-env": "^7.13.15",\n    "@rollup/plugin-babel": "^5.3.0",\n    "@rollup/plugin-node-resolve": "^11.2.1",\n    "rollup": "^2.45.2"\n  },\n  "dependencies": {\n    "three": "^0.127.0"\n  }\n}\n')),(0,r.kt)("p",null,"The next thing to do is to copy the web-ifc.wasm file to a directory in your project.\nThis file is necessary because it contains the core of web-ifc, which is the library with all the logic to read and write IFC files with near native speed.\nThis file can be found in node_modules\\three\\examples\\jsm\\loaders\\ifc.\nWe can copy it wherever we want;\nin this example it will be copied to a folder called wasm in the root directory of the project."),(0,r.kt)("p",null,'Finally, we are going to create the JavaScript file to write the code for our application.\nThis file has to be located in the root directory of the project and has to be called "app.js";\notherwise, we\'ll have to modify the rollup.config.js accordingly.\nIf we have done everything correctly, we should be able to use the command "npm run build", so that a file called bundle.js appears in the root directory of the project.\nAlso, if we run the command "npm run watch" we will see how that file is updated every time we make changes to the code and save.'),(0,r.kt)("p",null,"To run the application locally we will need a local server.\nThe easiest way is to install the VS Code Live Server extension, which allows us to open an instance of Google Chrome and to run our web application and see the changes we make to the code in real time.\nAlthough there are other libraries that do the same, in this guide we will use Live Server.\nIf you don't know how to use Live Server or are using another IDE, check the documentation or other tutorials to see how to use Live Server or another similar solution in your IDE."),(0,r.kt)("p",null,"If you have any problems following these steps, you can review the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/hello-world"},"completed project"),"."),(0,r.kt)("h2",{id:"setting-up-a-3d-scene"},"Setting up a 3D scene"),(0,r.kt)("p",null,"Next we are going to create a basic 3D scene using Three.js.\nNote that this is not a Three.js tutorial;\nif you have no previous experience with the library, we recommend that you ",(0,r.kt)("a",{parentName:"p",href:"https://threejsfundamentals.org/"},"learn the basics")," before attempting to make an open BIM application with IFC.js."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import {\n  AmbientLight,\n  AxesHelper,\n  Color,\n  DirectionalLight,\n  GridHelper,\n  PerspectiveCamera,\n  Scene,\n  WebGLRenderer,\n} from "three";\nimport { OrbitControls } from "three/examples/jsm/controls/OrbitControls";\n\n//Creates the Three.js scene\nconst scene = new Scene();\nscene.background = new Color(0xaaaaaa);\n\n//Object to store the size of the viewport\nconst size = {\n  width: window.innerWidth,\n  height: window.innerHeight,\n};\n\n//Creates the camera (point of view of the user)\nconst camera = new PerspectiveCamera(75, size.width / size.height);\ncamera.position.z = 3;\ncamera.position.y = 3;\ncamera.position.x = 3;\n\n//Creates the lights of the scene\nconst lightColor = 0xffffff;\n\nconst ambientLight = new AmbientLight(lightColor, 0.5);\nscene.add(ambientLight);\n\nconst directionalLight = new DirectionalLight(lightColor, 1);\ndirectionalLight.position.set(0, 10, 0);\ndirectionalLight.target.position.set(-5, 0, 0);\nscene.add(directionalLight);\nscene.add(directionalLight.target);\n\n//Sets up the renderer, fetching the canvas of the HTML\nconst threeCanvas = document.getElementById("three-canvas");\nconst renderer = new WebGLRenderer({ canvas: threeCanvas });\nrenderer.setSize(size.width, size.height);\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));\n\n//Creates grids and axes in the scene\nconst grid = new GridHelper(50, 30);\nscene.add(grid);\n\nconst axes = new AxesHelper();\naxes.material.depthTest = false;\naxes.renderOrder = 1;\nscene.add(axes);\n\n//Creates the orbit controls (to navigate the scene)\nconst controls = new OrbitControls(camera, threeCanvas);\ncontrols.enableDamping = true;\n\n//Animation loop\nconst animate = () => {\n  controls.update();\n  renderer.render(scene, camera);\n  requestAnimationFrame(animate);\n};\n\nanimate();\n\n//Adjust the viewport to the size of the browser\nwindow.addEventListener("resize", () => {\n  (size.width = window.innerWidth), (size.height = window.innerHeight);\n  camera.aspect = size.width / size.height;\n  camera.updateProjectionMatrix();\n  renderer.setSize(size.width, size.height);\n});\n')),(0,r.kt)("h2",{id:"loading-ifc-files"},"Loading IFC files"),(0,r.kt)("p",null,"Finally, we need something to load IFCs;\nthat something is IFC.js, which is integrated with Three.js as its official IFC Loader.\nThis can be done by instantiating the loader and creating an event for when the user uploads an IFC file to the HTML input element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { IFCLoader } from "three/examples/jsm/loaders/IFCLoader";\n\n//Sets up the IFC loading\nconst ifcLoader = new IFCLoader();\nifcLoader.setWasmPath("wasm/");\n\nconst input = document.getElementById("file-input");\ninput.addEventListener(\n  "change",\n  (changed) => {\n    var ifcURL = URL.createObjectURL(changed.target.files[0]);\n    console.log(ifcURL);\n    ifcLoader.load(ifcURL, (geometry) => scene.add(geometry));\n  },\n  false\n);\n')),(0,r.kt)("p",null,"Congratulations!\nYou have just created your first IFC viewer.\nIf you have done everything correctly, you should be able to see something similar to ",(0,r.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/hello-world/introduction/"},"this")," in your local server.\nFrom here, the possibilities are endless.\nYou can take a look at web-ifc-viewer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/web-ifc-viewer"},"web-ifc-viewer")," to see the IFC viewer we are building,\nwhich includes tools for object selection, changing geometry appearance, section planes and much more.\nYou can try it ",(0,r.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/web-ifc-viewer/examples/simple-html/"},"here"),"."))}h.isMDXComponent=!0}}]);