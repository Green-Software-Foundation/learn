"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[32],{4137:(e,a,o)=>{o.d(a,{Zo:()=>c,kt:()=>p});var r=o(7294);function s(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function t(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?t(Object(o),!0).forEach((function(a){s(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function n(e,a){if(null==e)return{};var o,r,s=function(e,a){if(null==e)return{};var o,r,s={},t=Object.keys(e);for(r=0;r<t.length;r++)o=t[r],a.indexOf(o)>=0||(s[o]=e[o]);return s}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)o=t[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var m=r.createContext({}),d=function(e){var a=r.useContext(m),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},c=function(e){var a=d(e.components);return r.createElement(m.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var o=e.components,s=e.mdxType,t=e.originalType,m=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),u=d(o),p=s,v=u["".concat(m,".").concat(p)]||u[p]||l[p]||t;return o?r.createElement(v,i(i({ref:a},c),{},{components:o})):r.createElement(v,i({ref:a},c))}));function p(e,a){var o=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var t=o.length,i=new Array(t);i[0]=u;var n={};for(var m in a)hasOwnProperty.call(a,m)&&(n[m]=a[m]);n.originalType=e,n.mdxType="string"==typeof e?e:s,i[1]=n;for(var d=2;d<t;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9530:(e,a,o)=>{o.d(a,{Z:()=>i});var r=o(7294);const s={form:"form_Q4RU",radio_btn__wrapper:"radio_btn__wrapper_K0Ab",radio_btn:"radio_btn_d1cY"};function t(e){let{question:a,answers:o,chosenAnswer:t}=e;const[i,n]=r.useState();return r.createElement("div",null,r.createElement("div",null,r.createElement("h3",null,a),r.createElement("div",{className:"radio"},o.map(((e,o)=>{const m=t===o;let d="#e5e5e5";return i===o&&(d="var(--ifm-color-content)"),m&&e.isCorrect?d="var(--ifm-color-success)":m&&!e.isCorrect&&(d="var(--ifm-color-danger)"),e.isCorrect&&void 0!==t&&(d="var(--ifm-color-success)"),r.createElement("label",{className:s.radio_btn__wrapper,style:{borderColor:d},key:o},r.createElement("input",{className:s.radio_btn,type:"radio",name:a,value:e.text,onChange:()=>n(o),required:!0}),e.text,m&&e.isCorrect&&r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"var(--ifm-color-success)",width:24,height:24},r.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"})),m&&!e.isCorrect&&r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"var(--ifm-color-danger)",width:24,height:24},r.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",clipRule:"evenodd"})))})))))}function i(e){let{QuizList:a}=e;console.log(a);const[o,i]=r.useState([]);return r.createElement("section",{className:s.quizs},r.createElement("div",null,r.createElement("form",{className:s.form,onSubmit:e=>{e.preventDefault();const o=new FormData(e.currentTarget);a.forEach((e=>{const a=e.answers.findIndex((a=>a.text===o.get(e.question)));i((e=>[...e,a]))}))}},a.map(((e,a)=>r.createElement(t,{key:e.question,question:e.question,answers:e.answers,chosenAnswer:o[a]}))),r.createElement("button",{style:{alignSelf:"center"},className:"button button--primary button--lg",type:"submit"},"Check your answers"))))}},7385:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var r=o(7462),s=(o(7294),o(4137)),t=o(9530);const i={sidebar_position:8,title:"Compromissos clim\xe1ticos"},n=void 0,m={unversionedId:"climate-commitments",id:"climate-commitments",title:"Compromissos clim\xe1ticos",description:"Esta \xe9 uma tradu\xe7\xe3o feita pela comunidade. Ela tem suporte limitado e pode n\xe3o corresponder \xe0 vers\xe3o mais recente do curso em ingl\xeas.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/climate-commitments.mdx",sourceDirName:".",slug:"/climate-commitments",permalink:"/pt-BR/climate-commitments",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/training/tree/main/docs/climate-commitments.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Compromissos clim\xe1ticos"},sidebar:"sidebar",previous:{title:"Medi\xe7\xe3o",permalink:"/pt-BR/measurement"},next:{title:"Glossary",permalink:"/pt-BR/glossary"}},d={},c=[{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",level:2},{value:"Metodologias de redu\xe7\xe3o de carbono",id:"metodologias-de-redu\xe7\xe3o-de-carbono",level:2},{value:"Abatimento/Elimina\xe7\xe3o de Carbono",id:"abatimentoelimina\xe7\xe3o-de-carbono",level:3},{value:"Compensa\xe7\xf5es",id:"compensa\xe7\xf5es",level:3},{value:"SCI e compensa\xe7\xf5es",id:"sci-e-compensa\xe7\xf5es",level:4},{value:"Compensa\xe7\xe3o / Evita\xe7\xe3o de Carbono",id:"compensa\xe7\xe3o--evita\xe7\xe3o-de-carbono",level:3},{value:"Neutraliza\xe7\xe3o/Remo\xe7\xe3o de Carbono",id:"neutraliza\xe7\xe3oremo\xe7\xe3o-de-carbono",level:3},{value:"Compromissos clim\xe1ticos",id:"compromissos-clim\xe1ticos",level:2},{value:"Carbono Neutro",id:"carbono-neutro",level:3},{value:"Net Zero",id:"net-zero",level:3},{value:"SCI como parte de uma estrat\xe9gia Net-Zero",id:"sci-como-parte-de-uma-estrat\xe9gia-net-zero",level:4},{value:"100% renov\xe1vel",id:"100-renov\xe1vel",level:3},{value:"Certificados de Energia Renov\xe1vel (REC)",id:"certificados-de-energia-renov\xe1vel-rec",level:4},{value:"PPAs",id:"ppas",level:4},{value:"Correspond\xeancia hor\xe1ria 24/7",id:"correspond\xeancia-hor\xe1ria-247",level:3},{value:"Correspond\xeancia di\xe1ria vs hor\xe1ria",id:"correspond\xeancia-di\xe1ria-vs-hor\xe1ria",level:4},{value:"Energia sem carbono",id:"energia-sem-carbono",level:4},{value:"Conscientiza\xe7\xe3o sobre carbono como parte de uma estrat\xe9gia de correspond\xeancia 24/7 por hora",id:"conscientiza\xe7\xe3o-sobre-carbono-como-parte-de-uma-estrat\xe9gia-de-correspond\xeancia-247-por-hora",level:4},{value:"Resumo",id:"resumo",level:2},{value:"Quiz",id:"quiz",level:2}],l={toc:c};function u(e){let{components:a,...i}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,i,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Esta \xe9 uma tradu\xe7\xe3o feita pela comunidade. Ela tem suporte limitado e pode n\xe3o corresponder \xe0 vers\xe3o mais recente do curso em ingl\xeas.")),(0,s.kt)("admonition",{title:"Principle",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("em",{parentName:"p"},"Entenda o mecanismo exato da redu\xe7\xe3o de carbono."))),(0,s.kt)("h2",{id:"introdu\xe7\xe3o"},"Introdu\xe7\xe3o"),(0,s.kt)("p",null,"Nos \xfaltimos anos, muitos atores econ\xf4micos buscaram atingir diferentes metas clim\xe1ticas ao assumir v\xe1rios compromissos."),(0,s.kt)("p",null,'Os termos "net zero", "carbono neutro", "carbono negativo" e "clima neutro" t\xeam sido usados \u200b\u200bde forma intercambi\xe1vel com o objetivo principal de remover, reduzir e prevenir emiss\xf5es de carbono. \xc0 medida que o interesse nessas metas cresce, \xe9 essencial ter um entendimento comum do que elas significam e como alcan\xe7\xe1-las por meio das estrat\xe9gias e procedimentos de medi\xe7\xe3o que aprendemos.'),(0,s.kt)("h2",{id:"metodologias-de-redu\xe7\xe3o-de-carbono"},"Metodologias de redu\xe7\xe3o de carbono"),(0,s.kt)("p",null,"Existem muitas maneiras de reduzir emiss\xf5es, mas \xe9 importante entender o mecanismo exato da redu\xe7\xe3o ao pensar em metas de redu\xe7\xe3o."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:o(9391).Z,title:"image_tooltip",width:"1920",height:"1080"})),(0,s.kt)("h3",{id:"abatimentoelimina\xe7\xe3o-de-carbono"},"Abatimento/Elimina\xe7\xe3o de Carbono"),(0,s.kt)("p",null,"A ",(0,s.kt)("a",{parentName:"p",href:"https://sciencebasedtargets.org/"},"Science Based Targets Initiative")," se refere a um mecanismo chamado ",(0,s.kt)("a",{parentName:"p",href:"https://sciencebasedtargets.org/resources/legacy/2020/09/foundations-for-net-zero-executive-summary.pdf"},"abatimento"),", que significa eliminar fontes de emiss\xf5es de CO2 associadas \xe0s opera\xe7\xf5es e ",(0,s.kt)("a",{parentName:"p",href:"https://www.cisl.cam.ac.uk/education/graduate-study/pgcerts/value-chain-defs"},"cadeia de valor")," de uma empresa para que elas n\xe3o entrem na atmosfera. A cadeia de valor descreve toda a gama de atividades necess\xe1rias para criar um produto ou servi\xe7o, desde a concep\xe7\xe3o at\xe9 a distribui\xe7\xe3o. Isso inclui aumentar a efici\xeancia energ\xe9tica para eliminar algumas das emiss\xf5es associadas \xe0 gera\xe7\xe3o de energia."),(0,s.kt)("p",null,"A redu\xe7\xe3o n\xe3o \xe9 suficiente por si s\xf3, pois sempre haver\xe1 algumas emiss\xf5es que n\xe3o podem ser eliminadas devido a restri\xe7\xf5es tecnol\xf3gicas ou econ\xf4micas, mas deve formar o cerne da estrat\xe9gia de cada organiza\xe7\xe3o, pois \xe9 uma \xe1rea em que quase todas as empresas podem melhorar."),(0,s.kt)("p",null,"Para equilibrar essas emiss\xf5es residuais, precisamos olhar para outros mecanismos, como compensa\xe7\xf5es ou neutraliza\xe7\xf5es."),(0,s.kt)("h3",{id:"compensa\xe7\xf5es"},"Compensa\xe7\xf5es"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.offsetguide.org/understanding-carbon-offsets/what-is-a-carbon-offset/"},"Compensa\xe7\xf5es")," s\xe3o investimentos diretos em projetos de redu\xe7\xe3o de emiss\xf5es por meio da compra de cr\xe9ditos de carbono no mercado volunt\xe1rio de carbono (VCM). O VCM \xe9 um mercado descentralizado onde atores privados compram e vendem voluntariamente cr\xe9ditos de carbono que representam remo\xe7\xf5es ou redu\xe7\xf5es certificadas de GEEs da atmosfera."),(0,s.kt)("p",null,"Para compensar emiss\xf5es, voc\xea precisa comprar o volume equivalente de cr\xe9ditos de carbono para compensar os emitidos, onde 1 cr\xe9dito de carbono corresponde a 1 tonelada de CO2 absorvido ou reduzido."),(0,s.kt)("p",null,"V\xe1rios benef\xedcios positivos podem advir desses projetos, desde a prote\xe7\xe3o do ecossistema at\xe9 o empoderamento de comunidades locais. No entanto, para garantir que esses programas sejam implementados corretamente e tenham o efeito desejado no meio ambiente e o objetivo de atingir o zero l\xedquido mundial, existem padr\xf5es globais que eles devem atender, como o Verified Carbon Standard (VCS) e o Gold Standard (GS)."),(0,s.kt)("h4",{id:"sci-e-compensa\xe7\xf5es"},"SCI e compensa\xe7\xf5es"),(0,s.kt)("p",null,"Existem algumas limita\xe7\xf5es para compensa\xe7\xf5es de carbono e \xe9 por isso que elas n\xe3o s\xe3o consideradas na pontua\xe7\xe3o SCI de uma organiza\xe7\xe3o. Por exemplo, imagine dois aplicativos, ambos em execu\xe7\xe3o em uma plataforma de nuvem que \xe9 100% compensada em carbono e 100% correspondida por energia renov\xe1vel. O aplicativo A investiu tempo e recursos significativos para garantir que est\xe1 usando os recursos de forma eficiente, enquanto o aplicativo B usa os recursos de forma muito ineficiente. Para que o SCI seja uma m\xe9trica \xfatil, o aplicativo A precisa pontuar melhor do que o aplicativo B."),(0,s.kt)("p",null,"Se o SCI considerasse compensa\xe7\xf5es, ambos os aplicativos pontuariam 0. Isso n\xe3o nos diria nada sobre a efici\xeancia com que est\xe3o usando os recursos. Embora o aplicativo B esteja emitindo mais mol\xe9culas de carbono na atmosfera, j\xe1 que sua pontua\xe7\xe3o \xe9 0 e a pontua\xe7\xe3o mais baixa \xe9 0, por que ele faria mais investimentos para melhorar sua efici\xeancia de carbono?"),(0,s.kt)("p",null,"As organiza\xe7\xf5es precisam ter planos sobre como eliminar e neutralizar as emiss\xf5es e o SCI as ajuda a impulsionar a elimina\xe7\xe3o de emiss\xf5es devido ao software. Isso torna o SCI um componente essencial de qualquer estrat\xe9gia de net-zero."),(0,s.kt)("h3",{id:"compensa\xe7\xe3o--evita\xe7\xe3o-de-carbono"},"Compensa\xe7\xe3o / Evita\xe7\xe3o de Carbono"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.abatable.com/blog/carbon-removal-vs-carbon-avoidance-projects"},"Compensa\xe7\xf5es")," s\xe3o a\xe7\xf5es que as empresas tomam para ajudar a sociedade a evitar ou reduzir emiss\xf5es fora de sua cadeia de valor. Isso \xe9 essencialmente investir em projetos de redu\xe7\xe3o de outras organiza\xe7\xf5es."),(0,s.kt)("p",null,"Isso inclui a\xe7\xf5es como:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Conserva\xe7\xe3o")," - Cr\xe9ditos s\xe3o criados com base no carbono n\xe3o liberado pela prote\xe7\xe3o de \xe1rvores velhas."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Projetos Comunit\xe1rios")," - Esses projetos ajudam comunidades em todo o mundo, principalmente as n\xe3o desenvolvidas, introduzindo m\xe9todos de vida sustent\xe1veis."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Res\xedduos para energia")," - Esses projetos capturam metano/g\xe1s de aterro em vilas menores, res\xedduos humanos ou agr\xedcolas e os convertem em eletricidade.")),(0,s.kt)("h3",{id:"neutraliza\xe7\xe3oremo\xe7\xe3o-de-carbono"},"Neutraliza\xe7\xe3o/Remo\xe7\xe3o de Carbono"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.abatable.com/blog/carbon-removal-vs-carbon-avoidance-projects"},"Neutraliza\xe7\xf5es")," s\xe3o a\xe7\xf5es que as empresas tomam para remover carbono da atmosfera dentro ou al\xe9m de sua cadeia de valor. Neutraliza\xe7\xf5es referem-se \xe0 remo\xe7\xe3o e armazenamento permanente de carbono atmosf\xe9rico para contrabalan\xe7ar o efeito da libera\xe7\xe3o de CO2 na atmosfera. Isso inclui a\xe7\xf5es como:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Aprimorar sumidouros naturais de carbono")," que removem CO2 da atmosfera. Por exemplo, restaura\xe7\xe3o florestal, j\xe1 que a fotoss\xedntese remove CO2 naturalmente. A expans\xe3o florestal traz desafios, pois \xe9 essencial n\xe3o impactar a din\xe2mica das terras agr\xedcolas e o suprimento de alimentos em outros lugares. Os m\xe9todos agr\xedcolas modernos tamb\xe9m podem prolongar o tempo que o carbono permanece armazenado no solo."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Captura direta de ar")," \xe9 o processo de capturar CO2 do ar e armazen\xe1-lo permanentemente, seja no subsolo ou em produtos de longa dura\xe7\xe3o, como concreto.")),(0,s.kt)("p",null,"A efic\xe1cia desses m\xe9todos \xe9 normalmente medida com base em se eles podem fornecer remo\xe7\xe3o de carbono na escala e velocidade necess\xe1rias."),(0,s.kt)("p",null,"Quando se trata de projetos de remo\xe7\xe3o de carbono, a durabilidade \xe9 uma considera\xe7\xe3o cr\xedtica. A durabilidade de um projeto descreve por quanto tempo o di\xf3xido de carbono ser\xe1 mantido longe da atmosfera."),(0,s.kt)("p",null,"A durabilidade de curto prazo \xe9 de at\xe9 100 anos, a de m\xe9dio prazo \xe9 de 100 a 1.000 anos e a de longo prazo \xe9 de mais de 1.000 anos."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Solu\xe7\xf5es que dependem do ciclo natural do carbono da Terra t\xeam durabilidade de curto prazo medida em d\xe9cadas. Por exemplo, projetos florestais t\xeam durabilidade de 40 a 100 anos."),(0,s.kt)("li",{parentName:"ul"},"Solu\xe7\xf5es de engenharia, como captura direta de ar, geralmente t\xeam durabilidade de longo prazo medida em mil\xeanios. Por exemplo, a captura direta de ar tem durabilidade de 10.000 anos."),(0,s.kt)("li",{parentName:"ul"},"Projetos de longo prazo s\xe3o normalmente ordens de magnitude mais caros do que projetos de curto prazo. Uma vez emitido, o carbono permanece na atmosfera por 5.000 anos. Para ser considerado l\xedquido zero, o carbono que foi emitido precisa ser removido permanentemente.")),(0,s.kt)("p",null,"Um projeto de remo\xe7\xe3o de carbono de curto prazo remover\xe1 carbono somente por 100 anos, ap\xf3s os quais ele estar\xe1 de volta \xe0 atmosfera, aquecendo nosso planeta. Esta \xe9 uma das raz\xf5es pelas quais a redu\xe7\xe3o \xe9 prefer\xedvel \xe0 neutraliza\xe7\xe3o. Nunca liberar carbono \xe9 muito melhor do que liberar carbono e ent\xe3o tentar mant\xea-lo fora da atmosfera por 5.000 anos."),(0,s.kt)("h2",{id:"compromissos-clim\xe1ticos"},"Compromissos clim\xe1ticos"),(0,s.kt)("p",null,"Existem muitas estrat\xe9gias diferentes de redu\xe7\xe3o clim\xe1tica com as quais uma organiza\xe7\xe3o pode se comprometer, de carbono neutro a l\xedquido zero. Entender os diferentes significados e implica\xe7\xf5es de cada uma pode ajudar voc\xea a decidir sobre a estrat\xe9gia certa para sua organiza\xe7\xe3o."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:o(9039).Z,title:"image_tooltip",width:"1920",height:"1080"})),(0,s.kt)("h3",{id:"carbono-neutro"},"Carbono Neutro"),(0,s.kt)("p",null,"Para atingir a neutralidade de carbono, uma organiza\xe7\xe3o deve medir suas emiss\xf5es e, em seguida, corresponder o total \xe0s suas compensa\xe7\xf5es de emiss\xf5es por meio de projetos de redu\xe7\xe3o de carbono. Isso pode incluir projetos de remo\xe7\xe3o de carbono (neutraliza\xe7\xf5es) e projetos de preven\xe7\xe3o de carbono (compensa\xe7\xf5es)."),(0,s.kt)("p",null,"A neutralidade de carbono \xe9 definida por um padr\xe3o reconhecido internacionalmente: ",(0,s.kt)("a",{parentName:"p",href:"https://info.eco-act.com/hubfs/0%20-%20Downloads/PAS%202060/PAS%202060%20factsheet%20EN.pdf"},"PAS 2060"),". Embora isso recomende que uma organiza\xe7\xe3o estabele\xe7a metas de redu\xe7\xe3o, n\xe3o exige que ela reduza suas emiss\xf5es. Portanto, para ser considerada neutra em carbono, uma organiza\xe7\xe3o pode apenas medir e compensar sem investir recursos na elimina\xe7\xe3o de suas emiss\xf5es de carbono."),(0,s.kt)("p",null,"Para ser neutra em carbono, voc\xea deve cobrir emiss\xf5es diretas (escopo 1 e 2). A expectativa geral \xe9 que as organiza\xe7\xf5es me\xe7am e compensem seus escopos 1 e 2 e viagens de neg\xf3cios do escopo 3. No entanto, n\xe3o h\xe1 um requisito espec\xedfico para incluir isso."),(0,s.kt)("p",null,"Carbono neutro \xe9 um primeiro passo significativo para qualquer organiza\xe7\xe3o, pois incentiva a medi\xe7\xe3o. No entanto, n\xe3o h\xe1 compensa\xe7\xf5es de carbono suficientes no mundo para compensar as emiss\xf5es de todas as organiza\xe7\xf5es. Portanto, qualquer estrat\xe9gia que n\xe3o inclua redu\xe7\xe3o n\xe3o escalar\xe1 ou ajudar\xe1 o mundo a atingir a meta de 1,5 grau definida pelo Acordo Clim\xe1tico de Paris. \xc9 aqui que o net zero entra em jogo."),(0,s.kt)("h3",{id:"net-zero"},"Net Zero"),(0,s.kt)("p",null,"Net zero significa reduzir as emiss\xf5es de acordo com a ci\xeancia clim\xe1tica mais recente e equilibrar as emiss\xf5es residuais restantes por meio de remo\xe7\xf5es de carbono (neutraliza\xe7\xf5es). Net zero, por defini\xe7\xe3o, requer redu\xe7\xf5es de emiss\xf5es alinhadas a um caminho de 1,5 \xb0C. Todas as empresas devem fazer isso para atingir emiss\xf5es globais l\xedquidas zero at\xe9 2050."),(0,s.kt)("p",null,"O diferenciador cr\xedtico entre net zero e carbono neutro \xe9 o foco do net zero na redu\xe7\xe3o em vez de neutraliza\xe7\xf5es e compensa\xe7\xf5es. Uma meta net zero visa eliminar emiss\xf5es e usar apenas a compensa\xe7\xe3o para as emiss\xf5es residuais que voc\xea n\xe3o pode eliminar"),(0,s.kt)("p",null,"O ",(0,s.kt)("a",{parentName:"p",href:"https://sciencebasedtargets.org/resources/files/foundations-for-net-zero-full-paper.pdf"},"padr\xe3o para net zero")," est\xe1 sendo desenvolvido pela ",(0,s.kt)("a",{parentName:"p",href:"https://sciencebasedtargets.org/"},"iniciativa Science Based Targets")," (SBTi). Eles calculam que h\xe1 uma probabilidade de 66% de limitar o aquecimento global a 1,5 \xb0C se atingirmos um n\xedvel de redu\xe7\xe3o de cerca de 90% de todas as emiss\xf5es de GEE at\xe9 meados do s\xe9culo. Portanto, para atingir uma meta l\xedquida zero, uma organiza\xe7\xe3o precisa eliminar 90% de suas emiss\xf5es at\xe9 2050. As emiss\xf5es restantes s\xf3 podem ser compensadas usando neutraliza\xe7\xf5es e remo\xe7\xf5es permanentes de carbono."),(0,s.kt)("p",null,"Uma estrat\xe9gia l\xedquida zero significaria que a quantidade real de carbono na atmosfera permanece constante."),(0,s.kt)("p",null,"Al\xe9m disso, para ser uma meta l\xedquida zero, voc\xea deve cobrir emiss\xf5es diretas e indiretas, ou seja, emiss\xf5es da cadeia de suprimentos (escopos 1, 2 e 3). Portanto, toda a sua cadeia de valor precisa ser inclu\xedda no escopo da sua meta l\xedquida zero. Isso \xe9 significativo, pois o escopo 3 geralmente representa a maioria das emiss\xf5es."),(0,s.kt)("h4",{id:"sci-como-parte-de-uma-estrat\xe9gia-net-zero"},"SCI como parte de uma estrat\xe9gia Net-Zero"),(0,s.kt)("p",null,"O SCI \xe9 uma m\xe9trica projetada especificamente para impulsionar a elimina\xe7\xe3o de emiss\xf5es. A \xfanica maneira de reduzir sua pontua\xe7\xe3o \xe9 investir tempo e recursos em a\xe7\xf5es que eliminem emiss\xf5es. As \xfanicas atividades que o SCI reconhece como a\xe7\xf5es de elimina\xe7\xe3o s\xe3o tornar seu aplicativo mais eficiente em termos de energia, mais eficiente em hardware ou consumir fontes de energia de baixo carbono. As compensa\xe7\xf5es s\xe3o um componente essencial de qualquer estrat\xe9gia clim\xe1tica; no entanto, as compensa\xe7\xf5es n\xe3o s\xe3o elimina\xe7\xf5es e, portanto, n\xe3o est\xe3o inclu\xeddas na m\xe9trica SCI."),(0,s.kt)("p",null,"Qualquer estrat\xe9gia net-zero precisa ter planos de como eliminar e neutralizar as emiss\xf5es. O SCI ajuda as organiza\xe7\xf5es a impulsionar a elimina\xe7\xe3o de emiss\xf5es devido ao software. Isso torna o SCI um componente essencial de qualquer estrat\xe9gia net-zero."),(0,s.kt)("h3",{id:"100-renov\xe1vel"},"100% renov\xe1vel"),(0,s.kt)("p",null,"Quando as organiza\xe7\xf5es definem uma meta de 100% de energia renov\xe1vel, elas podem distinguir entre ser ",(0,s.kt)("strong",{parentName:"p"},"combinado por")," vs. ",(0,s.kt)("strong",{parentName:"p"},"alimentado por")," renov\xe1veis."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Alimentado por")," significa que voc\xea \xe9 alimentado diretamente por uma fonte de energia renov\xe1vel, digamos, uma represa hidrel\xe9trica. Nesse cen\xe1rio, os el\xe9trons que fluem para o seu dispositivo s\xf3 podem vir dessa fonte, ent\xe3o voc\xea pode dizer com seguran\xe7a que \xe9 100% alimentado por renov\xe1veis."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:o(6085).Z,title:"image_tooltip",width:"1920",height:"1080"})),(0,s.kt)("p",null,"Para a maioria das pessoas, vivemos em uma rede interconectada, com muitos produtores injetando eletricidade e muitos consumidores retirando eletricidade. Isso significa que os el\xe9trons que entram no seu dispositivo s\xe3o uma mistura de todos os el\xe9trons que entram na rede. Por exemplo, suponha que a rede tenha apenas 5% de fornecimento e\xf3lico. Voc\xea est\xe1 recebendo 5% de el\xe9trons gerados pelo vento e 95% de el\xe9trons gerados por combust\xedveis f\xf3sseis."),(0,s.kt)("p",null,"Voc\xea n\xe3o pode rastrear el\xe9trons individuais. Uma vez que os el\xe9trons de um parque e\xf3lico est\xe3o em uma rede, todos eles se misturam com os el\xe9trons de uma usina de combust\xedvel f\xf3ssil. Portanto, n\xe3o h\xe1 como um consumidor insistir que os el\xe9trons que ele usa venham apenas de fontes renov\xe1veis."),(0,s.kt)("h4",{id:"certificados-de-energia-renov\xe1vel-rec"},"Certificados de Energia Renov\xe1vel (REC)"),(0,s.kt)("p",null,"Para resolver esse problema, uma usina renov\xe1vel vende duas coisas. A primeira \xe9 sua eletricidade, que ela vende para uma rede. A segunda \xe9 um REC, um ",(0,s.kt)("a",{parentName:"p",href:"https://www.epa.gov/green-power-markets/renewable-energy-certificates-recs"},"Certificado de Energia Renov\xe1vel"),". 1 REC \xe9 igual a 1 kWh de energia."),(0,s.kt)("p",null,"Se voc\xea quer ser 100% correspondido por energia renov\xe1vel e est\xe1 na rede, a solu\xe7\xe3o \xe9 comprar RECs suficientes para cobrir a quantidade de eletricidade que voc\xea consome. Por exemplo, se voc\xea consome 100 kWh de eletricidade todos os dias, ent\xe3o para ser 100% correspondido por renov\xe1veis, voc\xea compra 100 RECs."),(0,s.kt)("p",null,"Quando as organiza\xe7\xf5es definem metas de 100% renov\xe1veis, comprar RECs no mercado \xe9 a solu\xe7\xe3o que elas geralmente empregam para cumprir seus compromissos."),(0,s.kt)("h4",{id:"ppas"},"PPAs"),(0,s.kt)("p",null,"Voc\xea tamb\xe9m pode ouvir o termo PPA usado junto com RECs. Um PPA \xe9 um ",(0,s.kt)("a",{parentName:"p",href:"https://ppp.worldbank.org/public-private-partnership/sector/energy/energy-power-agreements/power-purchase-agreements"},"Contrato de Compra de Energia"),", que \xe9 outra maneira de comprar RECs. Se voc\xea estima que precisa de 500 MWh de eletricidade por ano para um determinado data center, voc\xea pode assinar um PPA para comprar 500 MWh por ano de uma usina renov\xe1vel. Voc\xea ent\xe3o obteria todos os RECs associados a esta usina de energia."),(0,s.kt)("p",null,"Os PPAs s\xe3o tipicamente contratos de muito longo prazo. Uma usina renov\xe1vel pode encontrar financiamento com um desses acordos, pois j\xe1 tem um comprador para sua eletricidade h\xe1 muitos anos."),(0,s.kt)("p",null,"Os PPAs incentivam algo chamado ",(0,s.kt)("strong",{parentName:"p"},"adicionalidade"),". A compra de um PPA impulsiona a cria\xe7\xe3o de novas usinas renov\xe1veis. Os PPAs s\xe3o uma solu\xe7\xe3o que nos leva a um futuro onde todos t\xeam acesso a energia 100% renov\xe1vel."),(0,s.kt)("h3",{id:"correspond\xeancia-hor\xe1ria-247"},"Correspond\xeancia hor\xe1ria 24/7"),(0,s.kt)("p",null,"Quando se trata de reivindica\xe7\xf5es 100% renov\xe1veis, a quest\xe3o cr\xedtica \xe9: qual \xe9 a granularidade da correspond\xeancia? Voc\xea soma e liquida anualmente, mensalmente, semanalmente, diariamente ou por hora? Essa quest\xe3o \xe9 essencial porque, para realmente fazer a transi\xe7\xe3o para a energia renov\xe1vel, precisamos que 100% da energia venha de fontes de energia de baixo carbono, como renov\xe1veis, 100% do tempo. Essa correspond\xeancia granular fina \xe9 frequentemente chamada de ",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("a",{parentName:"em",href:"https://www.epa.gov/green-power-markets/247-hourly-matching-electricity"},"correspond\xeancia hor\xe1ria 24/7")),"."),(0,s.kt)("p",null,"A correspond\xeancia hor\xe1ria 24/7 \xe9 uma das muitas estrat\xe9gias que precisamos empregar para ajudar a acelerar a transi\xe7\xe3o para uma rede 100% renov\xe1vel. Por exemplo, ",(0,s.kt)("a",{parentName:"p",href:"https://sustainability.google/progress/energy/"},"Google")," e ",(0,s.kt)("a",{parentName:"p",href:"https://blogs.microsoft.com/blog/2021/07/14/made-to-measure-sustainability-commitment-progress-and-updates/"},"Microsoft")," se comprometeram a fazer correspond\xeancias hor\xe1rias 24 horas por dia, 7 dias por semana, at\xe9 2030."),(0,s.kt)("h4",{id:"correspond\xeancia-di\xe1ria-vs-hor\xe1ria"},"Correspond\xeancia di\xe1ria vs hor\xe1ria"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:o(6415).Z,title:"image_tooltip",width:"1920",height:"1081"})),(0,s.kt)("p",null,"Imagine que uma organiza\xe7\xe3o tenha uma curva de demanda como esta, cada quadrado azul representa 1 kWh:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:o(3747).Z,title:"image_tooltip",width:"1920",height:"1080"})),(0,s.kt)("p",null,"Eles compraram RECs de um parque e\xf3lico que gerou eletricidade com uma curva, ent\xe3o cada quadrado verde representa 1 REC. Correspond\xeancia por dia significa que a organiza\xe7\xe3o consumiu 18 kWh e comprou 18 RECs. Como resultado, eles chegaram a zero. Ent\xe3o eles podem dizer que est\xe3o ",(0,s.kt)("strong",{parentName:"p"},"100% correspondidos por energia renov\xe1vel diariamente.")),(0,s.kt)("p",null,"No entanto, se olharmos para isso em intervalos de hora em hora (cada quadrado aqui tem 2 horas de dura\xe7\xe3o), ent\xe3o parece um pouco diferente:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:o(1336).Z,title:"image_tooltip",width:"1920",height:"1080"})),(0,s.kt)("p",null,"A quantidade total de energia consumida ainda \xe9 de 18 kWh. No entanto, h\xe1 apenas algumas horas no dia em que somos 100% correspondidos por energia renov\xe1vel para aquela hora. Ent\xe3o, por algumas horas, temos muito mais energia renov\xe1vel do que precisamos. Por outro lado, temos muito menos energia renov\xe1vel do que precisamos para a maioria das horas."),(0,s.kt)("p",null,"No exemplo acima, eles s\xe3o ",(0,s.kt)("strong",{parentName:"p"},"100% correspondidos por energia renov\xe1vel em uma base hor\xe1ria por apenas 6 horas do dia"),"."),(0,s.kt)("h4",{id:"energia-sem-carbono"},"Energia sem carbono"),(0,s.kt)("p",null,"O n\xfamero que usamos para descrever o qu\xe3o bem-sucedidos somos na correspond\xeancia 24/7 por hora \xe9 a porcentagem de energia sem carbono."),(0,s.kt)("p",null,"Energia sem carbono \xe9 definida como ",(0,s.kt)("a",{parentName:"p",href:"https://cloud.google.com/sustainability/region-carbon#understanding"},"a porcentagem m\xe9dia de energia sem carbono consumida em um local espec\xedfico por hora"),"."),(0,s.kt)("p",null,"Ent\xe3o, para o exemplo anterior, se medido usando correspond\xeancia di\xe1ria, estamos 100% correspondidos com energia renov\xe1vel. No entanto, estamos apenas 33,1% correspondidos se medidos usando correspond\xeancia por hora. ",(0,s.kt)("strong",{parentName:"p"},"A porcentagem de CFE \xe9, portanto, 33,1%"),"."),(0,s.kt)("h4",{id:"conscientiza\xe7\xe3o-sobre-carbono-como-parte-de-uma-estrat\xe9gia-de-correspond\xeancia-247-por-hora"},"Conscientiza\xe7\xe3o sobre carbono como parte de uma estrat\xe9gia de correspond\xeancia 24/7 por hora"),(0,s.kt)("p",null,"A computa\xe7\xe3o com consci\xeancia de carbono envolve responder a sinais de intensidade de carbono el\xe9trico e mudar o ",(0,s.kt)("strong",{parentName:"p"},"comportamento")," do software, para que ele emita menos carbono. A conscientiza\xe7\xe3o sobre carbono tamb\xe9m ajuda uma organiza\xe7\xe3o a atingir sua meta de correspond\xeancia 24/7 por hora e aumentar sua porcentagem de CFE."),(0,s.kt)("p",null,"Um exemplo de mudan\xe7a de comportamento \xe9 deslocar a computa\xe7\xe3o para um momento em que mais energia renov\xe1vel esteja dispon\xedvel. Por exemplo, atrasar o in\xedcio de uma execu\xe7\xe3o de treinamento de um modelo de aprendizado de m\xe1quina, ou mesmo atrasar o carregamento de um laptop, para quando a intensidade de carbono da eletricidade for menor e o fornecimento de energia renov\xe1vel for maior."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:o(6252).Z,title:"image_tooltip",width:"1920",height:"1081"})),(0,s.kt)("admonition",{title:"Dica",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"A computa\xe7\xe3o com consci\xeancia de carbono ajuda as organiza\xe7\xf5es a aumentar sua porcentagem de CFE.")),(0,s.kt)("h2",{id:"resumo"},"Resumo"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'H\xe1 uma s\xe9rie de metodologias comumente aplicadas para ajudar na luta geral contra as mudan\xe7as clim\xe1ticas. Elas se enquadram nas categorias gerais de elimina\xe7\xe3o de carbono (tamb\xe9m conhecida como "abatimento"), preven\xe7\xe3o de carbono (tamb\xe9m conhecida como "compensa\xe7\xe3o") ou remo\xe7\xe3o de carbono (tamb\xe9m conhecida como "neutraliza\xe7\xe3o").'),(0,s.kt)("li",{parentName:"ul"},"A redu\xe7\xe3o inclui o aumento da efici\xeancia energ\xe9tica para eliminar algumas das emiss\xf5es associadas \xe0 gera\xe7\xe3o de energia. A redu\xe7\xe3o \xe9 a maneira mais eficaz de combater as mudan\xe7as clim\xe1ticas, embora a elimina\xe7\xe3o completa do carbono n\xe3o seja poss\xedvel."),(0,s.kt)("li",{parentName:"ul"},"A compensa\xe7\xe3o inclui a ado\xe7\xe3o de fontes de energia renov\xe1veis, pr\xe1ticas de vida sustent\xe1veis, reciclagem, plantio de \xe1rvores etc."),(0,s.kt)("li",{parentName:"ul"},"As neutraliza\xe7\xf5es referem-se \xe0 remo\xe7\xe3o e armazenamento permanente de carbono atmosf\xe9rico para contrabalan\xe7ar o efeito da libera\xe7\xe3o de CO2 na atmosfera. As neutraliza\xe7\xf5es tendem a remover o carbono da atmosfera no curto e m\xe9dio prazo."),(0,s.kt)("li",{parentName:"ul"},"Uma organiza\xe7\xe3o pode se autodenominar Carbon Neutral quando suas emiss\xf5es totais s\xe3o equiparadas ao total de suas compensa\xe7\xf5es de emiss\xf5es por meio de projetos de redu\xe7\xe3o de carbono"),(0,s.kt)("li",{parentName:"ul"},"O Net Zero visa eliminar emiss\xf5es e compensar apenas as emiss\xf5es residuais que voc\xea n\xe3o pode eliminar para atingir a meta de 1,5 \xb0C definida pelo Acordo Clim\xe1tico de Paris."),(0,s.kt)("li",{parentName:"ul"},"O SCI \xe9 cuidadosamente projetado para que a elimina\xe7\xe3o de emiss\xf5es, por meio da efici\xeancia energ\xe9tica, efici\xeancia de hardware e conscientiza\xe7\xe3o sobre carbono, seja a \xfanica maneira de reduzir a pontua\xe7\xe3o. Junto com uma estrat\xe9gia de neutraliza\xe7\xe3o separada, pode formar a base de uma estrat\xe9gia net-zero para uma organiza\xe7\xe3o."),(0,s.kt)("li",{parentName:"ul"},'Quando as organiza\xe7\xf5es definem uma meta de 100% de energia renov\xe1vel, elas podem ser "equiparadas por" ou "alimentadas por" renov\xe1veis, onde "alimentadas por" significa que os el\xe9trons que fluem para seu dispositivo s\xf3 podem vir de fontes renov\xe1veis. Isso pode ser alcan\xe7ado comprando RECs como parte de um PPA.'),(0,s.kt)("li",{parentName:"ul"},"A correspond\xeancia 24 horas por dia, 7 dias por semana, \xe9 uma das muitas estrat\xe9gias que precisamos empregar para ajudar a acelerar a transi\xe7\xe3o para uma rede 100% alimentada por energia renov\xe1vel.")),(0,s.kt)("h2",{id:"quiz"},"Quiz"),(0,s.kt)(t.Z,{QuizList:[{question:"What are neutralisations?",answers:[{text:"Actions that remove carbon from the atmosphere",isCorrect:!0},{text:"Actions that reduce carbon emissions",isCorrect:!1},{text:"Actions that support climate initiatives",isCorrect:!1}]},{question:"What is a critical consideration for neutralizations?",answers:[{text:"Volume of neutralization",isCorrect:!1},{text:"Durability of neutralization",isCorrect:!0},{text:"Cost of neutralization",isCorrect:!1}]},{question:"What approach can you take to neutralize carbon emissions from energy consumption?",answers:[{text:"Enhance natural carbon sinks",isCorrect:!1},{text:"Direct air capture",isCorrect:!1},{text:"Both of the above",isCorrect:!0}]},{question:"What is responsible for setting the standard for net zero?",answers:[{text:"SBTi",isCorrect:!0},{text:"STBi",isCorrect:!1},{text:"STIB",isCorrect:!1}]},{question:"What is the net-zero global target?",answers:[{text:"Eliminate 100% of emissions by 2050",isCorrect:!1},{text:"Eliminate 90% of emissions by 2050",isCorrect:!0},{text:"Eliminate 80% of emissions by 2050",isCorrect:!1}]},{question:"What is the primary goal with abatement/elimination?",answers:[{text:"Offset your carbon emissions using a financial contract",isCorrect:!1},{text:"Not emitting carbon into the atmosphere in the first place",isCorrect:!0},{text:"Reduce emissions related to a company\u2019s operations by improving energy efficiency",isCorrect:!1}]},{question:"Which measurement protocol or method incorporates offsets?",answers:[{text:"GHG protocol",isCorrect:!0},{text:"SCI",isCorrect:!1}]},{question:"What is the minimum criteria for being carbon neutral?",answers:[{text:"Emissions from scopes 1-3 must be offset by neutralizations or compensations",isCorrect:!1},{text:"Emissions from scopes 1 and 2 must be offset by neutralizations or compensations",isCorrect:!0},{text:"Emissions from scopes 1-2 and business travel from scope 3 must be offset by neutralizations or compensations",isCorrect:!1}]}],mdxType:"Quiz"}))}u.isMDXComponent=!0},9391:(e,a,o)=>{o.d(a,{Z:()=>r});const r=o.p+"assets/images/24_carbon_reduction-9a23d16a3165e9d15680465f8c2976eb.png"},9039:(e,a,o)=>{o.d(a,{Z:()=>r});const r=o.p+"assets/images/25_climate_commitments-b51ae83710ee31b815d3e43bc659ee7d.png"},6085:(e,a,o)=>{o.d(a,{Z:()=>r});const r=o.p+"assets/images/26-27_100_renewable-b1f74b6e154564da6b925046f4a5dfe8.png"},6415:(e,a,o)=>{o.d(a,{Z:()=>r});const r=o.p+"assets/images/28_daily_vs_hourly-cdbd8a6bef217249d0f4c74748016b80.png"},3747:(e,a,o)=>{o.d(a,{Z:()=>r});const r=o.p+"assets/images/29_daily_consumption-3636932b5faa26f6d6cdafbb51593ad6.png"},1336:(e,a,o)=>{o.d(a,{Z:()=>r});const r=o.p+"assets/images/30_hourly_match-83a67bbaa9ba09709dd1912c4a374892.png"},6252:(e,a,o)=>{o.d(a,{Z:()=>r});const r=o.p+"assets/images/31_carbon_awareness-2ed724bfeef43267d337c4c8ffab48a7.png"}}]);