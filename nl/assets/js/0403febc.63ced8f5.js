(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[241],{983:function(e,n,t){"use strict";t.d(n,{M:function(){return l}});var i=t(7294),a=t(9205),r="titleOffset_2I3u",o="iconContainer_1xRA",l=function(e){var n=e.title?i.createElement("div",{className:"card__header"},i.createElement("span",{className:o},e.icon&&i.createElement(a.A,{icon:e.icon,active:"true"})),i.createElement("h3",{className:e.icon&&r},e.title)):"";return i.createElement("div",{className:"card-demo",style:{margin:"2rem"}},i.createElement("div",{className:"card"},n,i.createElement("div",{className:"card__body"},i.createElement("p",null," ",e.children," "))))}},9205:function(e,n,t){"use strict";t.d(n,{A:function(){return d}});var i=t(7294),a="hidden_2JtY",r="iconContainer_2Rnc",o="visible_2147",l="link_Lh4h",s="clickable_3vcc",d=function(e){var n=" "+(e.active?o:a),t=l+" "+(e.link&&s);return i.createElement("div",{className:r+n},i.createElement("a",{href:e.link,target:"_blank",className:t},e.icon||"\ud83d\ude80"))}},9781:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return C},frontMatter:function(){return v},metadata:function(){return f},toc:function(){return w}});var i=t(2122),a=t(9756),r=t(7294),o=t(3905),l=t(983),s="icon_1PGw",d=t(9205),c=function(e){return r.createElement("div",{className:"alert alert--primary",role:"alert",style:{margin:"2rem"}},r.createElement("div",{className:s},r.createElement(d.A,{icon:"\ud83d\udca1",active:"true"})),e.children)},m=function(){return r.createElement("iframe",{width:"100%",height:"300",key:Math.random(),src:"https://ifcjs.github.io/hello-world/introduction/",frameBorder:"0"})},k="ifcTabItem_3jhz",p="ifcTabContent_2OBh",u="linkContainer_2bzd",h="iconSpacing_2WTy",b=function(e){var n,t=0,i=(0,r.useState)(e.items.map((function(e){return{name:e.name,selected:0===t,content:e.content,key:t++,icon:e.icon,link:e.link}}))),a=i[0],o=i[1],l=(0,r.useState)(!1),s=l[0],c=l[1];function m(e){return e.selected?" tabs__item--active ":""}function b(){return a.find((function(e){return e.selected}))}return r.createElement("div",null,r.createElement("ul",{className:"tabs ifc-tab"},a.map((function(e){return r.createElement("li",{onClick:function(){return n=e.key,(t=[].concat(a)).forEach((function(e){return e.selected=!1})),t.find((function(e){return e.key===n})).selected=!0,void o(t);var n,t},className:"tabs__item "+k+m(e),key:e.key},function(e){return e.icon?r.createElement("div",{className:h},r.createElement(d.A,{icon:e.icon,active:"true"})):e.name}(e))}))),r.createElement("div",{className:p,onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)}},b().content,(n=b()).link?r.createElement("div",{className:u},r.createElement(d.A,{link:n.link,active:n.link&&s})):null))},g=["components"],v={title:"Introduction",sidebar_position:1},f={unversionedId:"Introduction",id:"Introduction",isDocsHomePage:!1,title:"Introduction",description:"\ud83c\udfae",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/Introduction.mdx",sourceDirName:".",slug:"/Introduction",permalink:"/info/nl/docs/Introduction",version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Hello world",permalink:"/info/nl/docs/Hello world"}},w=[{value:"Wat is IFC?",id:"wat-is-ifc",children:[]},{value:"Het probleem van IFC",id:"het-probleem-van-ifc",children:[]},{value:"IFC.js aan de redding",id:"ifcjs-aan-de-redding",children:[]},{value:"IFC.js in een notendop",id:"ifcjs-in-een-notendop",children:[{value:"Multiplatform",id:"multiplatform",children:[]},{value:"Snelheid",id:"snelheid",children:[]},{value:"Features",id:"features",children:[]}]},{value:"Broncode",id:"broncode",children:[]},{value:"Contribute",id:"contribute",children:[]}],I={toc:w};function C(e){var n=e.components,t=(0,a.Z)(e,g);return(0,o.kt)("wrapper",(0,i.Z)({},I,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"  \ud83c\udfae\nIFC.js is een JavaScript bibliotheek om IFC modellen te laden, weer te geven en te bewerken in de browser. Probeer de ",(0,o.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/web-ifc-viewer/examples/simple-html/"},"live demo")," met uw IFC-model en ontdek de kracht van IFC.js."),(0,o.kt)("p",null,"Wat is deze bibliotheek?"),(0,o.kt)("h3",{id:"wat-is-ifc"},"Wat is IFC?"),(0,o.kt)("p",null,"  \ud83c\udfe0\nArchitecten tekenen niet langer bouwplannen \xe9\xe9n voor \xe9\xe9n, maar maken 3D-modellen van gebouwen, zoals de huizen die in ",(0,o.kt)("a",{parentName:"p",href:"https://www.ea.com/es-es/games/the-sims"},"De SIMS")," worden gemodelleerd. Deze manier van werken wordt BIM (Building Information Model) genoemd, omdat de gecre\xeberde modellen zowel geometrie als informatie bevatten."),(0,o.kt)("p",null,"  \ud83d\udd25\nEen gebouw is echter zo complex dat er niet \xe9\xe9n enkele toepassing bestaat die deze modellen in hun geheel kan maken. Elke toepassing heeft een specifieke opdracht: het modelleren van de geometrie, het berekenen van structuren, het maken van energiesimulaties, het maken van projectdocumenten, enzovoort."),(0,o.kt)("p",null,"  \ud83d\udc40\nDeze hulpmiddelen zijn afkomstig van verschillende ontwikkelaars over de hele wereld en elk werkt in zijn eigen formaat. Met andere woorden, het constructiemodel dat door een constructieberekeningstoepassing wordt gemaakt, kan niet worden gelezen door energiesimulatiesoftware, en omgekeerd. Hoe is het dan mogelijk om een model van een gebouw te maken met behulp van meerdere programma's?"),(0,o.kt)("p",null,"  \ud83c\udf89\nHet antwoord is ",(0,o.kt)("a",{parentName:"p",href:"https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/"},(0,o.kt)("strong",{parentName:"a"},"IFC")),", een formaat dat door BuildingSMART is gecre\xeberd om deze 3D-modellen van gebouwen te bevatten. Het is open, dus iedereen kan het lezen en schrijven. Joepie!"),(0,o.kt)(c,{mdxType:"IfcAlert"},"Dankzij IFC kan elke ontwikkelaar vrijelijk BIM-apps maken die kunnen communiceren met de apps van de grote ontwikkelaars. companies in the construction sector."),(0,o.kt)("h3",{id:"het-probleem-van-ifc"},"Het probleem van IFC"),(0,o.kt)("p",null,"Iedereen die een BIM toepassing wil maken ",(0,o.kt)("strong",{parentName:"p"},"moet IFC bestanden lezen en schrijven")," om informatie te kunnen importeren en exporteren uit andere gereedschappen. Helaas is IFC een formaat dat moeilijk te lezen en te schrijven is. Er zijn duizenden pagina's documentatie en het maken en onderhouden van een zelfgemaakte IFC parser is een enorme taak."),(0,o.kt)(l.M,{title:"\nKunt u zich IFC veroorloven?",mdxType:"IfcCard"},"\ud83d\udcb8 Dit is iets wat alleen bedrijven met meerdere ontwikkelaars die hier fulltime aan werken zich kunnen veroorloven. Het klinkt niet meer zo open, of wel?"),(0,o.kt)("p",null,"Voor het geval u nieuwsgierig bent naar hoe een IFC er van binnen uitziet, hier een voorbeeld. Stel je voor dat je honderdduizenden regels als deze moet parsen:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"#6699= IFCCARTESIANPOINT((0.,-1.7053025E-13));\n#6701= IFCAXIS2PLACEMENT2D(#6699,#23);\n#6703= IFCCARTESIANPOINT((892.,-253.399999,150.));\n#6705= IFCAXIS2PLACEMENT3D(#6703,#15,#19);\n#6706= IFCEXTRUDEDAREASOLID(#6702,#6705,#19,506.8);\n#6707= IFCCOLOURRGB($,0.50196,0.501913,0.501960);\n")),(0,o.kt)("p",null,"  \ud83d\udc80\nZelfs als u bereid bent om een parser vanaf nul te maken en te onderhouden bij elke wijziging in het IFC schema, zijn er verschillende niet-triviale vragen om dit probleem aan te pakken. Hoe geheugen te beheren in zeer grote bestanden? Hoe geometrische generatie effici\xebnt te implementeren? Wat te doen wanneer een IFC niet correct gedefinieerd is?"),(0,o.kt)("h3",{id:"ifcjs-aan-de-redding"},"IFC.js aan de redding"),(0,o.kt)("p",null,"Het zou niet logisch zijn dat alle ontwikkelaars hun eigen IFC bestand lezer en schrijver moeten implementeren voor hun applicaties . Vooral als we allemaal hetzelfde doen: ",(0,o.kt)("strong",{parentName:"p"},"het importeren en exporteren van geometrie en data"),"."),(0,o.kt)(l.M,{mdxType:"IfcCard"},"IFC.js is een JavaScript bibliotheek die het super eenvoudig maakt om ",(0,o.kt)("b",null,"IFC bestanden te lezen en te schrijven"),"."),(0,o.kt)("p",null,"Hierdoor kunnen ontwikkelaars van architectuur- en bouwtoepassingen moeiteloos in IFC werken en zich concentreren op de functionaliteiten die echt waarde toevoegen aan hun bedrijf."),(0,o.kt)("h2",{id:"ifcjs-in-een-notendop"},"IFC.js in een notendop"),(0,o.kt)("p",null,"IFC.js heeft twee zwaartepunten:"),(0,o.kt)(l.M,{icon:"\ud83d\udc8e",title:"Geometrie",mdxType:"IfcCard"}," IFC.js is in staat 3D sc\xe8nes te genereren omdat het compatibel is met 3D bibliotheken zoals Three.js of Babylon.js. Dit betekent dat u meteen 3D BIM-tools kunt maken."),(0,o.kt)(l.M,{icon:"\ud83d\udd17",title:"Gegevens",mdxType:"IfcCard"}," Toegang op hoog niveau tot alle eigenschappen die met die geometrie verband houden. Dit betekent eenvoudige toegang tot gegevens over de bouwcomponenten, hun materialen, thermische kenmerken, structurele sterkte, enz."),(0,o.kt)("p",null,"Het maken van een BIM applicatie met IFC.js is net zo eenvoudig als het maken van een webpagina met JavaScript, HTML en CSS. Als u geen IFC-bestand beschikbaar heeft, probeer dan een van ",(0,o.kt)("a",{parentName:"p",href:"https://drive.google.com/drive/folders/1MwRsL3ZnlyhWEVUko9wAnklaMne3pp3h?usp=sharing"},"deze")," te laden."),(0,o.kt)(m,{mdxType:"IfcScene"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { IfcLoader } from 'web-ifc-three';\nimport { Scene } from 'three';\n\n//Cre\xebert de sc\xe8ne THREE.js\nconst scene = new Scene();\n\n//...\n\n/Laadt IFC en voegt het toe aan de sc\xe8ne\nconst ifcLoader = new IfcLoader();\nifcLoader.load(ifcURL, (geometry) => scene.add(geometry));\n")),(0,o.kt)("p",null,"Voor wie is deze bibliotheek?"),(0,o.kt)("p",null,"Deze bibliotheek is voor iedereen die BIM toepassingen wil ontwikkelen. Dit omvat zowel ontwikkelaars die toepassingen maken voor de bouwindustrie als architecten en andere professionals die voordeel willen halen uit de gegevens in hun IFC-bestanden."),(0,o.kt)("p",null,"Om deze bibliotheek te gebruiken is een basiskennis van JavaScript, HTML en CSS nodig. Deze kennis valt buiten het bestek van deze documentatie. U zult ook een 3D bibliotheek moeten gebruiken om de geometrie van de IFC weer te geven (Three.js of Babylon.js)."),(0,o.kt)("p",null,"  \ud83d\ude0a\nAls je niet weet waar je moet beginnen, raden we je aan om een kijkje te nemen ",(0,o.kt)("a",{parentName:"p",href:"https://threejsfundamentals.org/"},"hier")," of word gewoon lid van het ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/g7Uzn2KSwB"},"Discord Channel")," en zeg hallo."),(0,o.kt)("p",null,"Waarom is IFC.js anders?"),(0,o.kt)("p",null,"IFC.js is een bibliotheek geschreven door en voor JavaScript, aantoonbaar een van de meest alomtegenwoordige talen. Dit betekent dat het compatibel is met webbrowsers, desktop- en mobiele toepassingen. JavaScript is ook een van de gemakkelijkste talen om te leren, en maakt het mogelijk om gebruikersinterfaces te bouwen met HTML en CSS. Met andere woorden, het maken van BIM toepassingen met IFC.js is net zo eenvoudig als het maken van een webpagina."),(0,o.kt)("h3",{id:"multiplatform"},"Multiplatform"),(0,o.kt)("p",null,"U kunt IFC.js gebruiken om open BIM toepassingen te maken voor elk platform:"),(0,o.kt)(b,{items:[{icon:"\ud83c\udf0f",content:(0,o.kt)("p",null,(0,o.kt)("b",null,"Frontend webapplicaties")," die IFC-bestanden lezen en schrijven en 3D weergeven zonder afhankelijk te zijn van servercommunicatie kunnen worden gemaakt met ",(0,o.kt)("b",null,"vanilla JavaScript")," of andere tools zoals ",(0,o.kt)("b",null,"React, Vue, Angular, Svelte, etc"),". Dat wil zeggen, ",(0,o.kt)("i",null,"met IFC.js kunnen we van elke webbrowser een open BIM-app maken."))},{icon:"\ud83c\udfe2",content:(0,o.kt)("p",null,"Er zijn gevallen waarin het IFC-bestand niet op de client kan worden verwerkt. Een mobiel apparaat heeft bijvoorbeeld misschien niet de kracht om meerdere middelgrote of grote IFC's weer te geven. In dat geval is het mogelijk om ",(0,o.kt)("b",null,"IFC.js op de server")," te gebruiken via ",(0,o.kt)("a",{href:"https://nodejs.org/en/"},"Node.js")," en de reeds voorbereide Three.js sc\xe8ne naar de client te sturen.")},{icon:"\ud83d\udcbb",content:(0,o.kt)("p",null,"Soms willen we geen webapplicaties maken, maar ",(0,o.kt)("b",null,"native desktop applicaties die draaien op Windows, iOS en Linux"),". Dit is mogelijk dankzij technologie\xebn zoals ",(0,o.kt)("a",{href:"https://www.electronjs.org/"},"Electron"),". Deze native applicaties zullen op dezelfde manier worden geprogrammeerd als webapplicaties; HTML, CSS, JavaScript, React, Vue, etc.")},{icon:"\ud83d\udcf1",content:(0,o.kt)("p",null,"IFC.js ondersteunt ook ",(0,o.kt)("a",{href:"https://reactnative.dev/"},"React Native"),", die WebGL code mapt naar native OpenGL. Dit betekent dat u gemakkelijk IFC-compatibele ",(0,o.kt)("b",null,"Open BIM-apps kunt maken die draaien op Android en iOS"),".")}],mdxType:"IfcTab"}),(0,o.kt)("h3",{id:"snelheid"},"Snelheid"),(0,o.kt)("p",null,"  \u26a1\ufe0f\nAls u ervaring heeft met web applicaties, denkt u misschien dat het zwakke punt van een op JavaScript gebaseerde IFC bibliotheek de performance is. De kern van de bibliotheek is echter ontwikkeld in C gecombineerd met WebAssembly en ",(0,o.kt)("a",{parentName:"p",href:"https://emscripten.org/"},"Emscripten"),". Het is speciaal ontworpen voor ",(0,o.kt)("strong",{parentName:"p"},"maximale prestaties"),", waardoor IFC.js de snelheid en prestaties van desktop applicaties benadert terwijl het direct in de browser draait."),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)(l.M,{mdxType:"IfcCard"},"\ud83d\udc53 IFC.js kan IFC-bestanden naadloos ",(0,o.kt)("b",null,"lezen"),"."),(0,o.kt)(l.M,{mdxType:"IfcCard"},"\ud83c\udfd0 Genereer ",(0,o.kt)("b",null,"3D geometrie")," die draait op 60 fps in een browser."),(0,o.kt)(l.M,{mdxType:"IfcCard"},"\ud83d\udc84 Bewerk eenvoudig geometrie ",(0,o.kt)("b",null,"uiterlijk")," met de kracht van Three.js."),(0,o.kt)(l.M,{mdxType:"IfcCard"},"\ud83c\udfe0\ud83c\udfe0\ud83c\udfe0 Laad ",(0,o.kt)("b",null,"meerdere")," gefedereerde IFC-modellen."),(0,o.kt)(l.M,{mdxType:"IfcCard"},"\ud83d\udcc3",(0,o.kt)("b",null,"IFC eigenschappen")," ophalen voor rapporten en databases."),(0,o.kt)(l.M,{mdxType:"IfcCard"},"\u270d IFC.js kan ook ",(0,o.kt)("b",null,"IFC-bestanden vanuit het niets bewerken en schrijven"),"."),(0,o.kt)("h2",{id:"broncode"},"Broncode"),(0,o.kt)("p",null,"IFC.js is een grote, meertalige bibliotheek (C , TypeScript JavaScript, enz.). Het zou moeilijk en onhandelbaar zijn om het in een enkele repository te hebben. Om die reden bestaat de bibliotheek in meerdere repositories, die elk hun eigen doel hebben. U kunt ze ","[hier]"," vinden (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IFCjs"},"https://github.com/IFCjs"),")."),(0,o.kt)(b,{items:[{name:"web-ifc",link:"https://github.com/tomvandig/web-ifc",content:(0,o.kt)("p",null,"De kern van de bibliotheek: een IFC ",(0,o.kt)("b",null,"parser en geometrie generator")," van de grond af geschreven in C en gecompileerd via Emscripten naar WebAssembly. Deze repository kapselt de complexiteit van het lezen van IFC-bestanden en het laden van hun gegevens in het geheugen in.")},{name:"web-ifc-three",link:"https://github.com/IFCjs/web-ifc-three",content:(0,o.kt)("p",null,"De bibliotheek die web-ifc aanpast aan Three.js, waardoor een ",(0,o.kt)("b",null,"geoptimaliseerde 3D sc\xe8ne wordt gegenereerd waarin gebruikers direct kunnen interageren met de IFC"),". Deze bibliotheek is ",(0,o.kt)("a",{href:"https://threejs.org/examples/webgl_loader_ifc.html"},"de offici\xeble Three.js IFC Loader"),". Dankzij deze adapter kunnen open BIM-toepassingen worden gemaakt met Three.js in slechts twee regels code.")},{name:"web-ifc-viewer",link:"https://github.com/IFCjs/web-ifc-viewer",content:(0,o.kt)("p",null,"Dit is een browser-gebaseerde ",(0,o.kt)("a",{href:"https://ifcjs.github.io/web-ifc-viewer/examples/simple-html/"},"IFC viewer")," met ",(0,o.kt)("b",null,"vele voorbeelden van wat gedaan kan worden met IFC.js"),". Scene navigatie, materiaal veranderingen, element selectie door er op te klikken, sectie plannen, etc. Er is een voorbeeld van al deze functionaliteiten in deze repository, zodat het kan worden hergebruikt in open BIM toepassingen out of the box.")}],mdxType:"IfcTab"}),(0,o.kt)("h2",{id:"contribute"},"Contribute"),(0,o.kt)("p",null,"Wilt u ons helpen de wereld van Open BIM ontwikkeling met IFC.js te blijven verbeteren? De bibliotheek is groot, dus u zult moeten kiezen waar u aan mee wilt doen."),(0,o.kt)(l.M,{icon:"\ud83e\udd1d",title:"Ik kan niet coderen, maar ik wil erin",mdxType:"IfcCard"},"Dat is geweldig! Er zijn veel dingen die je kunt doen naast coderen. Ga naar het ",(0,o.kt)("a",{href:"https://discord.com/invite/g7Uzn2KSwB"},"Discord kanaal")," om uit te vinden hoe."),(0,o.kt)(l.M,{icon:"\ud83e\udde0",title:"Parsing, geometry and C++",mdxType:"IfcCard"},"Als u gepassioneerd bent over C, WebAssembly, parsing of de nitty-gritty van IFC, kunt u ons helpen met de snelste open source BIM parser in de industrie: ",(0,o.kt)("a",{href:"https://github.com/tomvandig/web-ifc"},"web-ifc"),"."),(0,o.kt)(l.M,{icon:"\u2728",title:"Three.js, geometrie en Typescript",mdxType:"IfcCard"},"Als je een Three.js ontwikkelaar bent, kun je ons helpen met ",(0,o.kt)("a",{href:"https://github.com/IFCjs/web-ifc-three"},"web-ifc-three"),",which is ",(0,o.kt)("a",{href:"https://threejs.org/examples/webgl_loader_ifc.html"},"de offici\xeble Three.js IFC Loader"),"."),(0,o.kt)(l.M,{icon:"\ud83c\udf08",title:"BIM-tools, brainstormen en UX",mdxType:"IfcCard"},"Als u ge\xefnteresseerd bent in het maken van coole open BIM-toepassingen en u hebt goede idee\xebn voor BIM-tools of gebruikersinterfaces, help ons dan ",(0,o.kt)("a",{href:"https://github.com/IFCjs/web-ifc-viewer"}," web-ifc-viewer")," de beste IFC-viewer op de markt te maken."),(0,o.kt)("p",null,"In ieder geval moedigen we je aan om langs te komen op het ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/g7Uzn2KSwB"},"Discord kanaal"),", hallo te zeggen en ons te vertellen wat je bezighoudt, zodat we je wat begeleiding kunnen geven."))}C.isMDXComponent=!0}}]);