"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[269],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||s;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9530:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294);const a={form:"form_Q4RU",radio_btn__wrapper:"radio_btn__wrapper_K0Ab",radio_btn:"radio_btn_d1cY"};function s(e){let{question:t,answers:n,chosenAnswer:s}=e;const[i,o]=r.useState();return r.createElement("div",null,r.createElement("div",null,r.createElement("h3",null,t),r.createElement("div",{className:"radio"},n.map(((e,n)=>{const l=s===n;let u="#e5e5e5";return i===n&&(u="var(--ifm-color-content)"),l&&e.isCorrect?u="var(--ifm-color-success)":l&&!e.isCorrect&&(u="var(--ifm-color-danger)"),e.isCorrect&&void 0!==s&&(u="var(--ifm-color-success)"),r.createElement("label",{className:a.radio_btn__wrapper,style:{borderColor:u},key:n},r.createElement("input",{className:a.radio_btn,type:"radio",name:t,value:e.text,onChange:()=>o(n),required:!0}),e.text,l&&e.isCorrect&&r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"var(--ifm-color-success)",width:24,height:24},r.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"})),l&&!e.isCorrect&&r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"var(--ifm-color-danger)",width:24,height:24},r.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",clipRule:"evenodd"})))})))))}function i(e){let{QuizList:t}=e;console.log(t);const[n,i]=r.useState([]);return r.createElement("section",{className:a.quizs},r.createElement("div",null,r.createElement("form",{className:a.form,onSubmit:e=>{e.preventDefault();const n=new FormData(e.currentTarget);t.forEach((e=>{const t=e.answers.findIndex((t=>t.text===n.get(e.question)));i((e=>[...e,t]))}))}},t.map(((e,t)=>r.createElement(s,{key:e.question,question:e.question,answers:e.answers,chosenAnswer:n[t]}))),r.createElement("button",{style:{alignSelf:"center"},className:"button button--primary button--lg",type:"submit"},"Check your answers"))))}},7694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(4137)),s=n(9530);const i={sidebar_position:3,title:"Efficacit\xe9 en carbone"},o=void 0,l={unversionedId:"carbon-efficiency",id:"carbon-efficiency",title:"Efficacit\xe9 en carbone",description:"Il s\u2019agit d\u2019une traduction fournie par la communaut\xe9. Le support est limit\xe9 et pourrait ne pas correspondre \xe0 la toute derni\xe8re version en anglais.",source:"@site/i18n/fr-FR/docusaurus-plugin-content-docs/current/carbon-efficiency.mdx",sourceDirName:".",slug:"/carbon-efficiency",permalink:"/fr-FR/carbon-efficiency",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/training/tree/main/docs/carbon-efficiency.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Efficacit\xe9 en carbone"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/fr-FR/introduction"},next:{title:"Efficacit\xe9 \xe9nerg\xe9tique",permalink:"/fr-FR/energy-efficiency"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Concepts cl\xe9s",id:"concepts-cl\xe9s",level:2},{value:"R\xe9chauffement climatique vs changement climatique",id:"r\xe9chauffement-climatique-vs-changement-climatique",level:3},{value:"Climat vs m\xe9t\xe9o",id:"climat-vs-m\xe9t\xe9o",level:3},{value:"Gaz \xe0 effet de serre et effet de serre",id:"gaz-\xe0-effet-de-serre-et-effet-de-serre",level:3},{value:"Carbone et CO2eq",id:"carbone-et-co2eq",level:3},{value:"Suivi du changement climatique",id:"suivi-du-changement-climatique",level:2},{value:"Synth\xe8se",id:"synth\xe8se",level:2},{value:"Quiz",id:"quiz",level:2}],m={toc:c};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Il s\u2019agit d\u2019une traduction fournie par la communaut\xe9. Le support est limit\xe9 et pourrait ne pas correspondre \xe0 la toute derni\xe8re version en anglais.")),(0,a.kt)("admonition",{title:"Principe",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},"\xc9mettre le moins de carbone possible."))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Comprendre l\u2019impact des gaz \xe0 effet de serre sur notre environnement est essentiel pour comprendre l\u2019empreinte carbone des logiciels. Vous d\xe9couvrirez les diff\xe9rents types de gaz \xe0 effet de serre pr\xe9sents dans l\u2019environnement, comment ils sont \xe9mis et mesur\xe9s, et ce qui est fait par diff\xe9rentes organisations dans le monde pour contr\xf4ler et r\xe9duire ces \xe9missions."),(0,a.kt)("p",null,"Vous d\xe9couvrirez le protocole GES (GHG protocol en Anglais) et ce qu\u2019il signifie pour les professionnels du logiciel durable."),(0,a.kt)("h2",{id:"concepts-cl\xe9s"},"Concepts cl\xe9s"),(0,a.kt)("h3",{id:"r\xe9chauffement-climatique-vs-changement-climatique"},"R\xe9chauffement climatique vs changement climatique"),(0,a.kt)("p",null,"Le ",(0,a.kt)("a",{parentName:"p",href:"https://climate.nasa.gov/global-warming-vs-climate-change/"},"r\xe9chauffement climatique")," est le r\xe9chauffement \xe0 long terme du syst\xe8me climatique de la Terre observ\xe9 depuis la p\xe9riode pr\xe9industrielle (entre 1850 et 1900) en raison des activit\xe9s humaines, principalement la combustion de combustibles fossiles. Le ",(0,a.kt)("a",{parentName:"p",href:"https://climate.nasa.gov/global-warming-vs-climate-change/"},"changement climatique")," est un changement \xe0 long terme des temp\xe9ratures et des conditions m\xe9t\xe9orologiques. Ces changements peuvent \xeatre naturels, mais depuis les ann\xe9es 1800, les activit\xe9s humaines ont \xe9t\xe9 le principal moteur du changement climatique."),(0,a.kt)("h3",{id:"climat-vs-m\xe9t\xe9o"},"Climat vs m\xe9t\xe9o"),(0,a.kt)("p",null,"La m\xe9t\xe9o repr\xe9sente les conditions de l\u2019atmosph\xe8re dans un court laps de temps. Le climat repr\xe9sente les conditions de l\u2019atmosph\xe8re sur de longues p\xe9riodes de temps. Tout changement des conditions \xe0 long terme de l\u2019atmosph\xe8re entra\xeenera \xe9galement des changements des conditions \xe0 court terme. Une comparaison \xe9vidente est que, si la temp\xe9rature moyenne de l\u2019atmosph\xe8re augmente, la temp\xe9rature moyenne de la m\xe9t\xe9o pour n'importe saison donn\xe9e augmentera \xe9galement. Voici quelques exemples de changements mesurables des conditions m\xe9t\xe9orologiques attribuables au changement climatique:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Changements dans le cycle de l\u2019eau, y compris les pr\xe9cipitations"),(0,a.kt)("li",{parentName:"ul"},"Fonte des glaces"),(0,a.kt)("li",{parentName:"ul"},"R\xe9chauffement de la terre, de l\u2019air et des oc\xe9ans"),(0,a.kt)("li",{parentName:"ul"},"Changements dans les courants, l\u2019acidit\xe9 et la salinit\xe9 des oc\xe9ans")),(0,a.kt)("p",null,"Ces changements peuvent entra\xeener des inondations - tant dans les zones c\xf4ti\xe8res qu\u2019en raison de l\u2019augmentation des pr\xe9cipitations - des s\xe9cheresses, des feux de for\xeat et des conditions m\xe9t\xe9orologiques extr\xeames plus fr\xe9quentes."),(0,a.kt)("h3",{id:"gaz-\xe0-effet-de-serre-et-effet-de-serre"},"Gaz \xe0 effet de serre et effet de serre"),(0,a.kt)("p",null,"Les gaz \xe0 effet de serre sont un ensemble de gaz qui emprisonnent la chaleur du rayonnement solaire dans l\u2019atmosph\xe8re terrestre. Ces gaz agissent comme une couverture, augmentant la temp\xe9rature \xe0 la surface de la Terre. C\u2019est un ph\xe9nom\xe8ne naturel qui a \xe9t\xe9 acc\xe9l\xe9r\xe9 en raison des \xe9missions de carbone d\u2019origine humaine. Aujourd\u2019hui le climat mondial change \xe0 un rythme plus rapide que celui auquel les animaux et les plantes peuvent s\u2019adapter."),(0,a.kt)("p",null,"Les gaz \xe0 effet de serre et l\u2019effet de serre sont essentiels \xe0 toute vie sur Terre et proviennent souvent de sources naturelles comme les animaux, les volcans et d\u2019autres activit\xe9s g\xe9ologiques. L\u2019effet de serre permet \xe0 la Terre de maintenir une temp\xe9rature plus \xe9lev\xe9e qu\u2019elle ne le ferait sans eux en capturant plus de chaleur du rayonnement solaire. Comme beaucoup d\u2019autres processus naturels de la Terre, l\u2019effet de serre est un \xe9quilibre finement r\xe9gl\xe9 qui peut \xeatre perturb\xe9 par de multiples facteurs."),(0,a.kt)("h3",{id:"carbone-et-co2eq"},"Carbone et CO2eq"),(0,a.kt)("p",null,"Le carbone est souvent utilis\xe9 comme un terme g\xe9n\xe9ral pour d\xe9signer l\u2019impact de tous les types d\u2019\xe9missions et d\u2019activit\xe9s sur le r\xe9chauffement climatique. CO2eq/CO2-eq/CO2e, qui signifie l\u2019\xe9quivalence carbone, est un terme de mesure utilis\xe9 pour mesurer cet impact. Par exemple, une tonne de m\xe9thane a le m\xeame effet de r\xe9chauffement qu\u2019environ ",(0,a.kt)("a",{parentName:"p",href:"https://energy.ec.europa.eu/topics/oil-gas-and-coal/methane-emissions_fr"},"84 tonnes de CO2 sur 20 ans"),", donc nous le normalisons \xe0 84 tonnes de CO2eq. Nous pourrions m\xeame nous limiter au carbone, un terme souvent utilis\xe9 pour d\xe9signer tous les GES (Gaz \xe0 Effet de Serre)."),(0,a.kt)("h2",{id:"suivi-du-changement-climatique"},"Suivi du changement climatique"),(0,a.kt)("p",null,"En raison des effets du changement climatique et d\u2019un nombre croissant d\u2019\xe9v\xe9nements m\xe9t\xe9orologiques destructeurs, la communaut\xe9 internationale a d\xe9ploy\xe9 des efforts pour tenter de r\xe9soudre ces probl\xe8mes et prendre des mesures pour contr\xf4ler et limiter le r\xe9chauffement climatique afin d\u2019att\xe9nuer et inverser les effets du changement climatique."),(0,a.kt)("p",null,"L'",(0,a.kt)("a",{parentName:"p",href:"https://unfccc.int/fr/a-propos-des-ndcs/l-accord-de-paris"},(0,a.kt)("strong",{parentName:"a"},"Accord de Paris sur le Climat"))," est un trait\xe9 international conclu en 2015 par 196 parties et l\u2019ONU pour r\xe9duire l\u2019augmentation de la temp\xe9rature de la Terre. L\u2019accord vise \xe0 maintenir la hausse de la temp\xe9rature moyenne mondiale \xe0 2 \xb0C par rapport aux niveaux pr\xe9-industriels, avec une limite inf\xe9rieure pr\xe9f\xe9rable de 1,5\xb0C. L\u2019accord est r\xe9vis\xe9 tous les cinq ans et mobilise des fonds pour les pays en voie de d\xe9veloppement afin d\u2019att\xe9nuer les impacts du changement climatique mais aussi se pr\xe9parer et s\u2019adapter aux effets environnementaux caus\xe9s par le changement climatique. En outre, chaque partie doit mettre \xe0 jour ses progr\xe8s au moyen d\u2019une contribution d\xe9termin\xe9e au niveau national (Contribution D\xe9termin\xe9e Nationale). L\u2019accord est actuellement sign\xe9 par 193 parties."),(0,a.kt)("p",null,"La ",(0,a.kt)("a",{parentName:"p",href:"https://unfccc.int/fr/processus-et-reunions/qu-est-ce-que-la-ccnucc-la-convention-cadre-des-nations-unies-sur-les-changements-climatiques"},(0,a.kt)("strong",{parentName:"a"},"Convention-Cadre des Nations Unies sur les Changements Climatiques (CCNUCC)"))," est un groupe cr\xe9\xe9 pour stabiliser les concentrations de gaz \xe0 effet de serre dans l\u2019atmosph\xe8re \xe0 un niveau qui emp\xeacherait toute interf\xe9rence dangereuse avec le syst\xe8me climatique."),(0,a.kt)("p",null,"La ",(0,a.kt)("a",{parentName:"p",href:"https://unfccc.int/fr/process/bodies/supreme-bodies/conference-of-the-parties-cop"},(0,a.kt)("strong",{parentName:"a"},"COP (Conf\xe9rence des Parties)"))," est un \xe9v\xe9nement annuel auquel participent toutes les parties \xe0 la Convention-Cadre des Nations Unies sur les Changements Climatiques. Lors de la conf\xe9rence, les progr\xe8s de chaque partie sur la lutte contre le r\xe9chauffement climatique, tels qu\u2019ils ont \xe9t\xe9 convenus dans le cadre de l\u2019Accord de Paris sur le climat, sont examin\xe9s et \xe9valu\xe9s. La COP est \xe9galement une occasion pour les parties de se r\xe9unir et de prendre des d\xe9cisions qui r\xe9duiront les effets du r\xe9chauffement climatique. Les th\xe8mes r\xe9currents incluent les strat\xe9gies de r\xe9duction du carbone, le financement des strat\xe9gies \xe0 faible \xe9mission de carbone et la pr\xe9servation des habitats naturels."),(0,a.kt)("p",null,"Le ",(0,a.kt)("a",{parentName:"p",href:"https://www.ipcc.ch/languages-2/francais/"},(0,a.kt)("strong",{parentName:"a"},"GIEC (Groupe d'experts Intergouvernemental sur l'Evolution du Climat)")),", appel\xe9 ",(0,a.kt)("strong",{parentName:"p"},"IPCC (Intergovernemental Panel on Climate Change)")," en anglais, a \xe9t\xe9 cr\xe9\xe9 par l\u2019ONU en 1988, vise \xe0 fournir aux gouvernements \xe0 tous les niveaux des informations scientifiques qu\u2019ils peuvent utiliser pour \xe9laborer des politiques climatiques. Les rapports du GIEC sont \xe9galement un \xe9l\xe9ment cl\xe9 des n\xe9gociations internationales sur le changement climatique. Le GIEC est une organisation de gouvernements membres des Nations Unies ou de l\u2019Organisation M\xe9t\xe9orologique Mondiale (OMM). Le GIEC compte actuellement 195 membres."),(0,a.kt)("p",null,"Nous \xe9mettrons toujours du carbone \xe0 travers nos activit\xe9s, mais \xeatre \xe9conome en carbone signifie minimiser la quantit\xe9 de carbone \xe9mise par unit\xe9 de travail. Nous visons \xe0 nous assurer que pour chaque gramme de carbone que nous \xe9mettons dans l\u2019atmosph\xe8re, nous extrayons le plus de valeur possible."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt_text",src:n(8888).Z,title:"image_tooltip",width:"1921",height:"1081"})),(0,a.kt)("p",null,"Dans le domaine des logiciels, le r\xf4le que nous jouons dans la solution climatique est de ",(0,a.kt)("strong",{parentName:"p"},"cr\xe9er des applications efficace en carbone"),". \xcatre \xe9conome en carbone consiste \xe0 cr\xe9er des applications qui ajoutent la m\xeame valeur pour vous ou vos utilisateurs, mais qui \xe9mettent moins de carbone."),(0,a.kt)("h2",{id:"synth\xe8se"},"Synth\xe8se"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Les gaz \xe0 effet de serre sont un ensemble de gaz contribuant au r\xe9chauffement climatique. Le carbone est souvent utilis\xe9 comme un terme g\xe9n\xe9rique pour d\xe9signer l\u2019impact de tous les types d\u2019\xe9missions et d\u2019activit\xe9s sur le r\xe9chauffement climatique. CO2eq est un terme de mesure utilis\xe9 pour \xe9valuer cet impact."),(0,a.kt)("li",{parentName:"ul"},"La communaut\xe9 internationale, au sein de groupes tels que la CCNUCC, s\u2019est r\xe9unie pour limiter l\u2019impact du r\xe9chauffement climatique en r\xe9duisant les \xe9missions, en visant une limite inf\xe9rieure \xab\xa0pr\xe9f\xe9rable\xa0\xbb de 1,5 \xb0C. Cela a \xe9t\xe9 convenu par le GIEC des Nations Unies en 2015 dans l'",(0,a.kt)("a",{parentName:"li",href:"https://unfccc.int/fr/a-propos-des-ndcs/l-accord-de-paris"},"Accord de Paris sur le climat")," et fait l\u2019objet d\u2019une surveillance lors de l\u2019\xe9v\xe9nement r\xe9ccurent de la COP."),(0,a.kt)("li",{parentName:"ul"},"Tout ce que nous faisons \xe9met du carbone dans l\u2019atmosph\xe8re, et notre objectif est d\u2019\xe9mettre le moins de carbone possible. Cela constitue le premier principe du logiciel durable: l\u2019efficacit\xe9 en carbone, \xe9mettant le moins de carbone possible par unit\xe9 de travail.")),(0,a.kt)("h2",{id:"quiz"},"Quiz"),(0,a.kt)(s.Z,{QuizList:[{question:"Que veut dire GES?",answers:[{text:"Gaz \xe0 Effet de Serre",isCorrect:!0},{text:"Gaz Emettant du Souffre",isCorrect:!1},{text:"Gouvernance Et Souverainet\xe9",isCorrect:!1}]},{question:"Comment peut-on abr\xe9ger l\u2019\xe9quivalent carbone?",answers:[{text:"CO2eq ou CO2e",isCorrect:!1},{text:"Carbone ou CO2e",isCorrect:!1},{text:"CO2eq ou carbone",isCorrect:!1},{text:"CO2eq ou CO2e ou carbone",isCorrect:!0}]},{question:"Qu'est-ce que le GIEC?",answers:[{text:"Groupe d\u2019experts international sur les changements climatiques",isCorrect:!1},{text:"Groupe d'experts Intergouvernemental sur l'Evolution du Climat",isCorrect:!0},{text:"Proposition internationale sur les changements climatiques",isCorrect:!1}]},{question:"Qu'est-ce que la COP?",answers:[{text:"Projet de compensation carbone",isCorrect:!1},{text:"Conf\xe9rence sur la Pollution",isCorrect:!1},{text:"Conf\xe9rence des Parties",isCorrect:!0}]},{question:"Quelle \xe9tait la limite pr\xe9f\xe9r\xe9e convenue pour la hausse des temp\xe9ratures dans l\u2019Accord de Paris sur le climat?",answers:[{text:"1.5\xbaC",isCorrect:!0},{text:"2\xbaC",isCorrect:!1},{text:"2.5\xbaC",isCorrect:!1}]},{question:"Laquelle des propositions suivantes est vraie?",answers:[{text:"Les changements \xe0 court terme du temps indiquent des changements \xe0 long terme du climat",isCorrect:!1},{text:"Les changements climatiques \xe0 long terme affectent les conditions m\xe9t\xe9orologiques \xe0 court terme",isCorrect:!0}]},{question:"Quel a \xe9t\xe9 le principal moteur du changement climatique ces derni\xe8res ann\xe9es?",answers:[{text:"Les changements naturels",isCorrect:!1},{text:"L'activit\xe9 humaine",isCorrect:!0},{text:"Les deux r\xe9ponses pr\xe9c\xe9dentes",isCorrect:!1}]},{question:"\xc0 quoi servent les gaz \xe0 effet de serre?",answers:[{text:"Capter plus de chaleur du soleil pour maintenir la vie sur Terre",isCorrect:!0},{text:"R\xe9fl\xe9chir la chaleur loin de la Terre",isCorrect:!1},{text:"Rien, ils sont toujours dommageables",isCorrect:!1}]}],mdxType:"Quiz"}))}d.isMDXComponent=!0},8888:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/02_monitoring_climate_change-633d8ba08504f579fa2c777403f49422.png"}}]);