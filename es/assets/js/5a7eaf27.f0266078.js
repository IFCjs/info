(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[785],{983:function(e,a,r){"use strict";r.d(a,{M:function(){return s}});var n=r(7294),t=r(9205),i="titleOffset_2I3u",o="iconContainer_1xRA",s=function(e){var a=e.title?n.createElement("div",{className:"card__header"},n.createElement("span",{className:o},e.icon&&n.createElement(t.A,{icon:e.icon,active:"true"})),n.createElement("h3",{className:e.icon&&i},e.title)):"";return n.createElement("div",{className:"card-demo",style:{margin:"2rem"}},n.createElement("div",{className:"card"},a,n.createElement("div",{className:"card__body"},n.createElement("p",null," ",e.children," "))))}},9205:function(e,a,r){"use strict";r.d(a,{A:function(){return l}});var n=r(7294),t="hidden_2JtY",i="iconContainer_2Rnc",o="visible_2147",s="link_Lh4h",c="clickable_3vcc",l=function(e){var a=" "+(e.active?o:t),r=s+" "+(e.link&&c);return n.createElement("div",{className:i+a},n.createElement("a",{href:e.link,target:"_blank",className:r},e.icon||"\ud83d\ude80"))}},8552:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return y},frontMatter:function(){return I},metadata:function(){return C},toc:function(){return g}});var n=r(2122),t=r(9756),i=r(7294),o=r(3905),s=r(983),c="icon_1PGw",l=r(9205),d=function(e){return i.createElement("div",{className:"alert alert--primary",role:"alert",style:{margin:"2rem"}},i.createElement("div",{className:c},i.createElement(l.A,{icon:"\ud83d\udca1",active:"true"})),e.children)},u=function(){return i.createElement("iframe",{width:"100%",height:"300",key:Math.random(),src:"https://ifcjs.github.io/hello-world/introduction/",frameBorder:"0"})},p="ifcTabItem_3jhz",m="ifcTabContent_2OBh",f="linkContainer_2bzd",b="iconSpacing_2WTy",h=function(e){var a,r=0,n=(0,i.useState)(e.items.map((function(e){return{name:e.name,selected:0===r,content:e.content,key:r++,icon:e.icon,link:e.link}}))),t=n[0],o=n[1],s=(0,i.useState)(!1),c=s[0],d=s[1];function u(e){return e.selected?" tabs__item--active ":""}function h(){return t.find((function(e){return e.selected}))}return i.createElement("div",null,i.createElement("ul",{className:"tabs ifc-tab"},t.map((function(e){return i.createElement("li",{onClick:function(){return a=e.key,(r=[].concat(t)).forEach((function(e){return e.selected=!1})),r.find((function(e){return e.key===a})).selected=!0,void o(r);var a,r},className:"tabs__item "+p+u(e),key:e.key},function(e){return e.icon?i.createElement("div",{className:b},i.createElement(l.A,{icon:e.icon,active:"true"})):e.name}(e))}))),i.createElement("div",{className:m,onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)}},h().content,(a=h()).link?i.createElement("div",{className:f},i.createElement(l.A,{link:a.link,active:a.link&&c})):null))},k=["components"],I={title:"Introducci\xf3n",sidebar_position:1},C={unversionedId:"Introduction",id:"Introduction",isDocsHomePage:!1,title:"Introducci\xf3n",description:"\ud83c\udfae",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/Introduction.mdx",sourceDirName:".",slug:"/Introduction",permalink:"/info/es/docs/Introduction",version:"current",sidebarPosition:1,frontMatter:{title:"Introducci\xf3n",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Hola mundo",permalink:"/info/es/docs/Hello world"}},g=[{value:"\xbfQu\xe9 es esta librer\xeda?",id:"\xbfqu\xe9-es-esta-librer\xeda",children:[{value:"\xbfQu\xe9 es IFC?",id:"\xbfqu\xe9-es-ifc",children:[]},{value:"El problema de IFC",id:"el-problema-de-ifc",children:[]},{value:"IFC.js al rescate",id:"ifcjs-al-rescate",children:[]}]},{value:"IFC.js en pocas palabras",id:"ifcjs-en-pocas-palabras",children:[]},{value:"Para qui\xe9n es esta librer\xeda",id:"para-qui\xe9n-es-esta-librer\xeda",children:[]},{value:"\xbfPor qu\xe9 es diferente IFC.js?",id:"\xbfpor-qu\xe9-es-diferente-ifcjs",children:[{value:"Multiplataforma",id:"multiplataforma",children:[]},{value:"Velocidad",id:"velocidad",children:[]}]},{value:"Contribuir",id:"contribuir",children:[]}],v={toc:g};function y(e){var a=e.components,r=(0,t.Z)(e,k);return(0,o.kt)("wrapper",(0,n.Z)({},v,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"  \ud83c\udfae\nIFC.js es una librer\xeda de JavaScript para cargar, visualizar y editar modelos IFC en el navegador. Prueba uno de los ",(0,o.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/web-ifc-viewer/examples/simple-html/"},"ejemplos")," con tu modelo IFC y descubre la potencia de IFC.js."),(0,o.kt)("h2",{id:"\xbfqu\xe9-es-esta-librer\xeda"},"\xbfQu\xe9 es esta librer\xeda?"),(0,o.kt)("h3",{id:"\xbfqu\xe9-es-ifc"},"\xbfQu\xe9 es IFC?"),(0,o.kt)("p",null,"  \ud83c\udfe0\nLos arquitectos ya no dibujan los planos de los edificios uno a uno, sino que crean modelos en 3D de los mismos, como las casas modeladas en ",(0,o.kt)("a",{parentName:"p",href:"https://www.ea.com/es-es/games/the-sims"},"Los SIMS"),". Esta forma de trabajar se llama BIM (Building Information Model), porque los modelos creados contienen tanto geometr\xeda como informaci\xf3n."),(0,o.kt)("p",null,"  \ud83d\udd25\nSin embargo, un edificio es tan complejo que no hay ninguna aplicaci\xf3n que pueda crear estos modelos en su totalidad. Cada aplicaci\xf3n tiene una misi\xf3n espec\xedfica: modelar la geometr\xeda, calcular las estructuras, hacer simulaciones energ\xe9ticas, crear documentos de proyecto, etc."),(0,o.kt)("p",null,"  \ud83d\udc40\nEstas herramientas proceden de m\xfaltiples desarrolladores de todo el mundo y cada una trabaja en su propio formato. En otras palabras, el modelo estructural creado por una aplicaci\xf3n de c\xe1lculo estructural no puede ser le\xeddo por un software de simulaci\xf3n energ\xe9tica, y viceversa. Entonces, \xbfc\xf3mo es posible crear un modelo de un edificio a partir de m\xfaltiples herramientas?"),(0,o.kt)("p",null,"  \ud83c\udf89\nLa respuesta es ",(0,o.kt)("a",{parentName:"p",href:"https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/"},(0,o.kt)("strong",{parentName:"a"},"IFC")),", un formato creado por BuildingSMART para contener estos modelos 3D de edificios. Es abierto, por lo que cualquiera puede leerlo y escribirlo. S\xed, es un formato abierto, por lo que cualquiera puede leerlo y escribirlo."),(0,o.kt)(d,{mdxType:"IfcAlert"},"Gracias a IFC cualquier desarrollador puede crear libremente aplicaciones BIM que se comuniquen con las aplicaciones del gran desarrollo companies in the construction sector."),(0,o.kt)("h3",{id:"el-problema-de-ifc"},"El problema de IFC"),(0,o.kt)("p",null,"Cualquiera que quiera hacer una aplicaci\xf3n BIM ",(0,o.kt)("strong",{parentName:"p"},"necesita leer y escribir archivos IFC")," para poder importar y exportar informaci\xf3n desde otras herramientas. Por desgracia, IFC es un formato dif\xedcil de leer y escribir. Hay miles de p\xe1ginas de documentaci\xf3n y crear y mantener un parser IFC hecho por uno mismo es una tarea enorme."),(0,o.kt)(s.M,{title:"\n\xbfPuedes permitirte usar IFC?",mdxType:"IfcCard"},"\ud83d\udcb8 Esto es algo que s\xf3lo pueden permitirse empresas con varios desarrolladores trabajando a tiempo completo en esto. No parece tan abierto, \xbfverdad?"),(0,o.kt)("p",null,"Por si tienes curiosidad por saber c\xf3mo es un IFC por dentro, aqu\xed tienes un ejemplo. Imagina analizar cientos de miles de l\xedneas como estas:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"#6699= IFCCARTESIANPOINT((0.,-1.7053025E-13));\n#6701= IFCAXIS2PLACEMENT2D(#6699,#23);\n#6703= IFCCARTESIANPOINT((892.,-253.399999,150.));\n#6705= IFCAXIS2PLACEMENT3D(#6703,#15,#19);\n#6706= IFCEXTRUDEDAREASOLID(#6702,#6705,#19,506.8);\n#6707= IFCCOLOURRGB($,0.50196,0.501913,0.501960);\n")),(0,o.kt)("p",null,"  \ud83d\udc80\nIncluso si est\xe1s dispuesto a crear un analizador sint\xe1ctico desde cero y mantenerlo con cada cambio en el esquema IFC, hay varias cuestiones no triviales para abordar este problema. \xbfC\xf3mo gestionar la memoria en archivos muy grandes? \xbfC\xf3mo implementar la generaci\xf3n geom\xe9trica de forma eficiente? \xbfQu\xe9 hacer cuando un IFC no se ha definido correctamente?"),(0,o.kt)("h3",{id:"ifcjs-al-rescate"},"IFC.js al rescate"),(0,o.kt)("p",null,"No tendr\xeda sentido que todos los desarrolladores tuvieran que implementar su propio lector y escritor de archivos IFC para sus aplicaciones . Especialmente cuando todos hacemos lo mismo: ",(0,o.kt)("strong",{parentName:"p"},"importar y exportar geometr\xeda y datos"),"."),(0,o.kt)(s.M,{mdxType:"IfcCard"},"IFC.js es una librer\xeda de JavaScript que hace que sea s\xfaper f\xe1cil ",(0,o.kt)("b",null,"leer y escribir archivos IFC"),"."),(0,o.kt)("p",null,"Esto permite a los desarrolladores de aplicaciones de arquitectura y construcci\xf3n trabajar en IFC sin esfuerzo y centrarse en las funcionalidades que realmente a\xf1aden valor a su negocio."),(0,o.kt)("h2",{id:"ifcjs-en-pocas-palabras"},"IFC.js en pocas palabras"),(0,o.kt)("p",null,"IFC.js tiene dos enfoques:"),(0,o.kt)(s.M,{icon:"\ud83d\udc8e",title:"Geometr\xeda",mdxType:"IfcCard"}," IFC.js es capaz de generar escenas 3D porque es compatible con librer\xedas 3D como Three.js o Babylon.js. Esto significa que puedes crear herramientas BIM 3D sin esfuerzo."),(0,o.kt)(s.M,{icon:"\ud83d\udd17",title:"Datos",mdxType:"IfcCard"}," Acceso de alto nivel a todas las propiedades asociadas a esa geometr\xeda. Esto significa un f\xe1cil acceso a los datos de los elementos constructivos, sus materiales, caracter\xedsticas t\xe9rmicas, resistencia estructural, etc."),(0,o.kt)("p",null,"Crear una aplicaci\xf3n BIM con IFC.js es tan f\xe1cil como crear una p\xe1gina web con JavaScript, HTML y CSS. Si no tienes ning\xfan archivo IFC disponible, prueba a cargar cualquiera de ",(0,o.kt)("a",{parentName:"p",href:"https://drive.google.com/drive/folders/1MwRsL3ZnlyhWEVUko9wAnklaMne3pp3h?usp=sharing"},"estos"),"."),(0,o.kt)(u,{mdxType:"IfcScene"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { IfcLoader } from 'web-ifc-three';\nimport { Scene } from 'three';\n\n//Crea la escena THREE.js\nconst scene = new Scene();\n\n//...\n\n//Carga el IFC y lo a\xf1ade a la escena\nconst ifcLoader = new IfcLoader();\nifcLoader.load(ifcURL, (geometry) => scene.add(geometry));\n")),(0,o.kt)("h2",{id:"para-qui\xe9n-es-esta-librer\xeda"},"Para qui\xe9n es esta librer\xeda"),(0,o.kt)("p",null,"Esta librer\xeda est\xe1 dirigida a cualquier persona que quiera desarrollar aplicaciones BIM. Esto incluye tanto a los desarrolladores que crean aplicaciones para el sector de la construcci\xf3n como a los arquitectos y otros profesionales que quieren aprovechar los datos de sus archivos IFC."),(0,o.kt)("p",null,"Para utilizar esta librer\xeda es necesario tener un conocimiento b\xe1sico de JavaScript, HTML y CSS. Estos conocimientos est\xe1n fuera del alcance de esta documentaci\xf3n. Tambi\xe9n necesitar\xe1s utilizar alguna librer\xeda 3D para mostrar la geometr\xeda del IFC (Three.js o Babylon.js)."),(0,o.kt)("p",null,"  \ud83d\ude0a\nSi no sabes por d\xf3nde empezar, te sugerimos que eches un vistazo ",(0,o.kt)("a",{parentName:"p",href:"https://threejsfundamentals.org/"},"aqu\xed")," o que te unas al ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/g7Uzn2KSwB"},"Canal de Discord")," y nos saludes."),(0,o.kt)("h2",{id:"\xbfpor-qu\xe9-es-diferente-ifcjs"},"\xbfPor qu\xe9 es diferente IFC.js?"),(0,o.kt)("p",null,"IFC.js es una librer\xeda escrita por y para JavaScript, posiblemente uno de los lenguajes m\xe1s ubicuos. Esto significa que es compatible con los navegadores web y las aplicaciones de escritorio y m\xf3viles. Adem\xe1s, JavaScript es uno de los lenguajes m\xe1s f\xe1ciles de aprender y permite construir interfaces de usuario con HTML y CSS. En otras palabras, crear aplicaciones BIM con IFC.js es tan f\xe1cil como crear una p\xe1gina web."),(0,o.kt)("h3",{id:"multiplataforma"},"Multiplataforma"),(0,o.kt)("p",null,"Puedes utilizar IFC.js para crear aplicaciones BIM abiertas para cualquier plataforma:"),(0,o.kt)(h,{items:[{icon:"\ud83c\udf0f",content:(0,o.kt)("p",null,(0,o.kt)("b",null,"Se pueden crear aplicaciones web frontend")," que lean y escriban archivos IFC y muestren 3D sin depender de la comunicaci\xf3n con el servidor utilizando ",(0,o.kt)("b",null,"Vanilla JavaScript")," u otras herramientas como ",(0,o.kt)("b",null,"React, Vue, Angular, Svelte, etc"),". Es decir, ",(0,o.kt)("i",null,"con IFC.js podemos convertir cualquier navegador web en una app BIM abierta."))},{icon:"\ud83c\udfe2",content:(0,o.kt)("p",null,"Hay casos en los que el archivo IFC no puede ser procesado en el cliente. Por ejemplo, un dispositivo m\xf3vil puede no tener la potencia necesaria para mostrar varios IFC de tama\xf1o medio o grande. En este caso es posible ",(0,o.kt)("b",null,"utilizar IFC.js en el servidor")," a trav\xe9s de ",(0,o.kt)("a",{href:"https://nodejs.org/en/"},"Node.js")," y enviar la escena Three.js ya preparada al cliente.")},{icon:"\ud83d\udcbb",content:(0,o.kt)("p",null,"A veces no queremos crear aplicaciones web, sino ",(0,o.kt)("b",null,"aplicaciones nativas de escritorio que se ejecuten en Windows, iOS y Linux"),". Esto es posible gracias a tecnolog\xedas como ",(0,o.kt)("a",{href:"https://www.electronjs.org/"},"Electron"),". Estas aplicaciones nativas se programar\xe1n de la misma manera que las aplicaciones web; HTML, CSS, JavaScript, React, Vue, etc.")},{icon:"\ud83d\udcf1",content:(0,o.kt)("p",null,"IFC.js tambi\xe9n soporta ",(0,o.kt)("a",{href:"https://reactnative.dev/"},"React Native"),", que mapea el c\xf3digo WebGL a OpenGL nativo. Esto significa que puedes crear ",(0,o.kt)("b",null,"aplicaciones BIM abiertas compatibles con IFC que se ejecuten en Android e iOS")," f\xe1cilmente.")}],mdxType:"IfcTab"}),(0,o.kt)("h3",{id:"velocidad"},"Velocidad"),(0,o.kt)("p",null,"  \u26a1\ufe0f\nSi tienes experiencia con aplicaciones web, podr\xeda pensar que el punto d\xe9bil de una librer\xeda IFC basada en JavaScript es el rendimiento. Sin embargo, el n\xfacleo de la librer\xeda est\xe1 desarrollado en C combinado con WebAssembly y ",(0,o.kt)("a",{parentName:"p",href:"https://emscripten.org/"},"Emscripten"),". Est\xe1 dise\xf1ado espec\xedficamente para obtener el ",(0,o.kt)("strong",{parentName:"p"},"m\xe1ximo rendimiento"),", lo que permite que IFC.js se acerque a la velocidad y el rendimiento de las aplicaciones de escritorio mientras se ejecuta directamente en el navegador."),(0,o.kt)("p",null,"Caracter\xedsticas"),(0,o.kt)(s.M,{mdxType:"IfcCard"},"\ud83d\udc53 IFC.js puede ",(0,o.kt)("b",null,"leer")," archivos IFC sin problemas."),(0,o.kt)(s.M,{mdxType:"IfcCard"},"\ud83c\udfd0 Genera ",(0,o.kt)("b",null,"geometr\xeda 3D")," que se ejecuta a 60 fps en un navegador."),(0,o.kt)(s.M,{mdxType:"IfcCard"},"\ud83d\udc84 Edita f\xe1cilmente la ",(0,o.kt)("b",null,"apariencia")," de la geometr\xeda con el poder de Three.js."),(0,o.kt)(s.M,{mdxType:"IfcCard"},"\ud83c\udfe0\ud83c\udfe0\ud83c\udfe0 Cargar ",(0,o.kt)("b",null,"m\xfaltiples")," modelos IFC federados."),(0,o.kt)(s.M,{mdxType:"IfcCard"},"\ud83d\udcc3 Recuperar ",(0,o.kt)("b",null,"propiedades IFC")," para informes y bases de datos."),(0,o.kt)(s.M,{mdxType:"IfcCard"},"\u270d IFC.js tambi\xe9n puede ",(0,o.kt)("b",null,"editar y escribir")," archivos IFC desde cero."),(0,o.kt)("p",null,"C\xf3digo de la fuente"),(0,o.kt)("p",null,"IFC.js es una librer\xeda grande y multiling\xfce (C , TypeScript JavaScript, etc). Tenerla en un \xfanico repositorio ser\xeda dif\xedcil y poco manejable. Por esa raz\xf3n, la librer\xeda existe en m\xfaltiples repositorios; cada uno con un \xfanico prop\xf3sito. Puedes encontrarlos ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IFCjs"},"aqu\xed"),"."),(0,o.kt)(h,{items:[{name:"web-ifc",link:"https://github.com/tomvandig/web-ifc",content:(0,o.kt)("p",null,"El n\xfacleo de la librer\xeda: un ",(0,o.kt)("b",null,"parser de IFC y generador de geometr\xeda")," escrito desde cero en C y compilado mediante Emscripten a WebAssembly. Este repositorio encapsula la complejidad de la lectura de archivos IFC y la carga de sus datos en la memoria.")},{name:"web-ifc-three",link:"https://github.com/IFCjs/web-ifc-three",content:(0,o.kt)("p",null,"La librer\xeda que adapta web-ifc a Three.js, generando una ",(0,o.kt)("b",null,"escena 3D optimizada donde los usuarios pueden interactuar directamente con el IFC"),". Esta librer\xeda es ",(0,o.kt)("a",{href:"https://threejs.org/examples/webgl_loader_ifc.html"},"el IFC Loader oficial de Three.js"),". Gracias a este adaptador se pueden crear aplicaciones BIM abiertas con Three.js en tan solo dos l\xedneas de c\xf3digo.")},{name:"web-ifc-viewer",link:"https://github.com/IFCjs/web-ifc-viewer",content:(0,o.kt)("p",null,"Se trata de un visor ",(0,o.kt)("a",{href:"https://ifcjs.github.io/web-ifc-viewer/examples/simple-html/"},"IFC basado en el navegador")," con ",(0,o.kt)("b",null,"muchos ejemplos de lo que se puede hacer con IFC.js"),". Navegaci\xf3n por la escena, cambios de material, selecci\xf3n de elementos pulsando sobre ellos, planos de secci\xf3n, etc. Hay un ejemplo de todas estas funcionalidades en este repositorio, por lo que se puede reutilizar en aplicaciones BIM abiertas desde el primer momento.")}],mdxType:"IfcTab"}),(0,o.kt)("h2",{id:"contribuir"},"Contribuir"),(0,o.kt)("p",null,"\xbfQuieres ayudarnos a seguir mejorando el mundo del desarrollo de Open BIM con IFC.js? La librer\xeda es grande, as\xed que tendr\xe1s que elegir d\xf3nde quieres participar."),(0,o.kt)(s.M,{icon:"\ud83e\udd1d",title:"No s\xe9 codificar, pero quiero entrar",mdxType:"IfcCard"},"\xa1Estupendo! Hay toneladas de cosas que puedes hacer aparte de codificar. Entra en la ",(0,o.kt)("a",{href:"https://discord.com/invite/g7Uzn2KSwB"},"Discord channel")," to find out how."),(0,o.kt)(s.M,{icon:"\ud83e\udde0",title:"Parsing, geometry and C++",mdxType:"IfcCard"},"Si te apasiona el C , WebAssembly, el parsing o los entresijos del IFC, puedes ayudarnos con el parser BIM de c\xf3digo abierto m\xe1s r\xe1pido del sector: ",(0,o.kt)("a",{href:"https://github.com/tomvandig/web-ifc"},"web-ifc"),"."),(0,o.kt)(s.M,{icon:"\u2728",title:"Three.js, geometr\xeda y Typescript",mdxType:"IfcCard"},"Si eres un desarrollador de Three.js, puedes ayudarnos con ",(0,o.kt)("a",{href:"https://github.com/IFCjs/web-ifc-three"},"web-ifc-three"),",which is ",(0,o.kt)("a",{href:"https://threejs.org/examples/webgl_loader_ifc.html"},"el IFC Loader oficial de Three.js"),"."),(0,o.kt)(s.M,{icon:"\ud83c\udf08",title:"Herramientas BIM, brainstorming y UX",mdxType:"IfcCard"},"Si est\xe1s interesado en crear aplicaciones BIM abiertas y tienes grandes ideas para herramientas BIM o interfaces de usuario, ay\xfadanos a hacer ",(0,o.kt)("a",{href:"https://github.com/IFCjs/web-ifc-viewer"},"web-ifc-viewer")," el mejor visor IFC del mercado."),(0,o.kt)("p",null,"En cualquier caso, te animamos a que te pases por el ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/g7Uzn2KSwB"},"canal de Discord"),", nos saludes y nos cuentes lo que te preocupa, para que podamos orientarte."))}y.isMDXComponent=!0}}]);