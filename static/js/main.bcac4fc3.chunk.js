(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/hydrautronics.f81bdcbe.jpg"},function(e,t,n){e.exports=n.p+"static/media/ivdh.8de5445a.jpg"},function(e,t,n){e.exports=n.p+"static/media/mmi.58790308.jpg"},function(e,t,n){e.exports=n.p+"static/media/contact.02672899.jpg"},,,function(e,t,n){e.exports=n(30)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(10),o=n.n(r),c=(n(22),n(23),function(e){var t=e.project;return i.a.createElement("div",{className:"project-showcase-container"},i.a.createElement("div",{className:"project-showcase"},i.a.createElement("a",{href:t.url,target:"_blanc",className:"project-showcase__content"},i.a.createElement("p",null,t.year),i.a.createElement("h2",null,t.name),i.a.createElement("span",{className:"project-showcase__line"}),i.a.createElement("span",{className:"project-showcase__underline"})),i.a.createElement("a",{href:t.url,target:"_blanc",className:"project-showcase__image-container"},i.a.createElement("div",{className:"project-showcase__image",style:{backgroundImage:"url(".concat(t.image,")")}})),i.a.createElement("div",{className:"project-showcase__link"},i.a.createElement("a",{className:"button-1",target:"_blanc",href:t.url},"Bezoek pagina"))))}),s=function(e){var t=e.project;return i.a.createElement("div",{className:"github-project"},i.a.createElement("a",{href:t.url,target:"_blanc"},i.a.createElement("h3",null,t.name)),i.a.createElement("p",{className:"github-project__description"},t.description),i.a.createElement("div",{className:"github-project__subjects"},t.topics.map((function(e,t){return i.a.createElement("span",{key:t,className:"github-project__subject"},e)}))))},l=n(11),u=n.n(l),m=n(12),g=n.n(m),d=n(13),h=n.n(d),p=[{name:"Hydrautronics",year:2019,image:u.a,url:"https://hydrautronics.eu"},{name:"Ivdh Interieurontwerp",year:2020,image:g.a,url:"https://ivdhinterieurontwerp.nl"},{name:"MMI",year:2019,image:h.a,url:"https://wesselvanree.github.io/mmi"}],v=[{name:"smooth-scrolling",url:"https://github.com/wesselvanree/smooth-scrolling",description:"Smooth scrolling voor webpagina's",topics:["Typescript"]},{name:"vsc-xcode-theme",url:"https://github.com/wesselvanree/vsc-xcode-theme",description:"Een kleurenthema voor Visual Studio Code.",topics:["json"]}],f=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{id:"projects"},p.map((function(e,t){return i.a.createElement(c,{key:t,project:e})}))),i.a.createElement("section",{id:"other-projects"},i.a.createElement("div",{className:"other-projects__inner"},i.a.createElement("h2",null,"Other Projects"),i.a.createElement("div",{className:"github-projects"},v.map((function(e,t){return i.a.createElement(s,{key:t,project:e})}))),i.a.createElement("a",{href:"https://github.com/wesselvanree",target:"_blanc"},"View More on Github"))))},E=n(3),b=n(4),_=n(16),w=n(15),k=function(e){Object(_.a)(n,e);var t=Object(w.a)(n);function n(){return Object(E.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"toggleMenu",value:function(){var e=document.querySelector(".navigation__menu"),t=document.querySelector(".hamburger");window.innerWidth<600&&(e.classList.contains("visible")?(e.classList.add("is-closing"),e.classList.remove("visible"),t.classList.remove("active"),setTimeout((function(){e.classList.remove("is-closing")}),500)):(e.classList.add("visible"),t.classList.add("active")))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"navigation"},i.a.createElement("div",{className:"navigation__inner"},i.a.createElement("div",{className:"navigation__bar"},i.a.createElement("p",{className:"navigation__label"},"Wessel van Ree"),i.a.createElement("div",{className:"hamburger",onClick:function(t){e.toggleMenu()}},i.a.createElement("div",{className:"hamburger__line hamburger__line--top"}),i.a.createElement("div",{className:"hamburger__line hamburger__line--bottom"}))),i.a.createElement("ul",{className:"navigation__menu "},y.map((function(t,n){return i.a.createElement("li",{key:n},i.a.createElement("a",{href:t.url,onClick:function(t){e.toggleMenu()}},t.text),n<y.length-1?i.a.createElement("span",{className:"navigation__menu__line"}):null)})))))}}]),n}(i.a.Component),y=[{text:"Home",url:"#"},{text:"Projects",url:"#projects"},{text:"Other Projects",url:"#other-projects"},{text:"Contact",url:"#contact"}],j=k,N=(n(24),n(14)),F=n.n(N),T=n(2),O=n(8),D=n(5),M=function(){return i.a.createElement("section",{id:"contact"},i.a.createElement("div",{className:"contact__background"}),i.a.createElement("div",{className:"contact__inner"},i.a.createElement("div",{style:{backgroundImage:"url(".concat(F.a,")")},className:"contact__image"}),i.a.createElement("div",{className:"contact__content"},i.a.createElement("h2",null,"Contact"),i.a.createElement("div",{className:"contact__info"},i.a.createElement("div",{className:"contact__info__element"},i.a.createElement(T.a,{icon:D.b}),i.a.createElement("p",null,"Oude-Tonge, Nederland")),i.a.createElement("div",{className:"contact__info__element"},i.a.createElement(T.a,{icon:D.a}),i.a.createElement("p",null,"wesselvanree@chello.nl"))),i.a.createElement("div",{className:"contact__social"},i.a.createElement("a",{href:"https://www.linkedin.com/in/wesselvanree/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(T.a,{icon:O.b})),i.a.createElement("a",{href:"https://github.com/wesselvanree",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(T.a,{icon:O.a})),i.a.createElement("a",{href:"mailto:wesselvanree@chello.nl"},i.a.createElement(T.a,{icon:D.a}))))))};var A=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(j,null),i.a.createElement("main",null,i.a.createElement(f,null),i.a.createElement(M,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=function(){function e(t){Object(E.a)(this,e),this.isMobileDevice=!1,this.easings={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},this.settings={timingFunction:this.easings.easeOutQuint,animationDuration:600,changeUrl:!0,navigationBreakpoint:800,distanceFromTopDesktop:0,distanceFromTopMobile:0},this.currentEvent=null,this.checkForMobileDevice(),this.setEventListeners(),t&&(t.easing&&(this.settings.timingFunction=this.easings[t.easing]),t.animationDuration&&(this.settings.animationDuration=t.animationDuration),t.changeUrl&&(this.settings.changeUrl=t.changeUrl),t.navigationBreakpoint&&(this.settings.navigationBreakpoint=t.navigationBreakpoint),t.distanceFromTopDesktop&&(this.settings.distanceFromTopDesktop=t.distanceFromTopDesktop),t.distanceFromTopMobile&&(this.settings.distanceFromTopMobile=t.distanceFromTopMobile),t.customFunction&&(this.settings.customFunction=t.customFunction))}return Object(b.a)(e,[{key:"eventHandler",value:function(){null!=this.currentEvent&&(this.isMobileDevice?this.scrollMobile(this.currentEvent):this.scroll(this.currentEvent))}},{key:"checkForMobileDevice",value:function(){(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)||function(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}())&&(this.isMobileDevice=!0)}},{key:"setEventListeners",value:function(){var e=this;document.querySelectorAll("a[href*='#'], .js-scroll").forEach((function(t){t.addEventListener("click",(function(t){e.currentEvent=t,e.eventHandler()}))}))}},{key:"scroll",value:function(e){e.preventDefault();var t,n,a=e.currentTarget,i=this,r="#";"A"===a.tagName?(r=a.getAttribute("href"),i.settings.changeUrl&&window.history.replaceState(null,"",r)):a.classList.contains("js-scroll")&&a.dataset.target?r=a.dataset.target:console.error("ERROR: No valid element provided, make sure you are using data-target='targetQuerySelector' to set the target element."),t=(window.innerWidth||document.documentElement.clientWidth||document.getElementsByTagName("body")[0].clientWidth)>i.settings.navigationBreakpoint?i.settings.distanceFromTopDesktop:i.settings.distanceFromTopMobile,n="#"===r?0:document.querySelector(r).offsetTop-t;var o=window.pageYOffset,c=n-o,s=i.settings.animationDuration,l=null;window.requestAnimationFrame((function e(t){l||(l=t,u=window.pageYOffset);u&&parseInt(u.toString())!==window.pageYOffset&&(m=!0);if(!m){var n=t-l,a=n/i.settings.animationDuration,r=o+c*i.settings.timingFunction(a);window.scrollTo(0,r),n<s?(u=r,window.requestAnimationFrame(e)):u=null}}));var u=null,m=!1;i.settings.changeUrl&&"#"===r?window.history.replaceState(null,""," "):i.settings.changeUrl&&"string"===typeof r&&"#"===r[0]&&window.history.replaceState(null,"",r),i.settings.customFunction&&i.settings.customFunction()}},{key:"scrollMobile",value:function(e){e.preventDefault();var t,n,a=e.currentTarget,i=this,r="#";"A"===a.tagName?(r=a.getAttribute("href"),i.settings.changeUrl&&window.history.replaceState(null,"",r)):a.classList.contains("js-scroll")&&a.dataset.target?r=a.dataset.target:console.error("ERROR: No valid element provided, make sure you are using data-target='targetQuerySelector' to set the target element."),t=(window.innerWidth||document.documentElement.clientWidth||document.getElementsByTagName("body")[0].clientWidth)>i.settings.navigationBreakpoint?i.settings.distanceFromTopDesktop:i.settings.distanceFromTopMobile,n="#"===r?0:document.querySelector(r).offsetTop-t;var o=window.pageYOffset,c=n-o,s=i.settings.animationDuration,l=null;window.requestAnimationFrame((function e(t){l||(l=t);var n=t-l,a=n/i.settings.animationDuration,r=o+c*i.settings.timingFunction(a);window.scrollTo(0,r),n<s&&window.requestAnimationFrame(e)}))}}]),e}();o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}));var I,B=new S({navigationBreakpoint:600,distanceFromTopMobile:50,distanceFromTopDesktop:60});(console.log(B),B.isMobileDevice)||(null===(I=document.querySelector("body"))||void 0===I||I.classList.add("js-no-touch"))}],[[17,1,2]]]);
//# sourceMappingURL=main.bcac4fc3.chunk.js.map