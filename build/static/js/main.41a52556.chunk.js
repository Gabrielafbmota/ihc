(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,n){e.exports=n(46)},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),l=n.n(c),u=n(50),E=n(8),o=n(3),O=n(4),i=n(49),R={PRIMARY:"#024F59",SECONDARY:"#327B8A",TERNARY:"#7BACB0",QUARTENARY:"#86B4C2",QUINARY:"#C7D4CF"},A={OFGREY_ONE:"#ffffff",OFGREY_TWO:"#dddddd",OFGREY_THREE:"#c6c6c6",OFGREY_FOUR:"#888888",OFGREY_FIVE:"#282828",OFGREY_SIX:"#000000",OFGREY_SEVEN:"#edeaea"},m={SUCCESS:"#28a745",WARNING:"#ffc107",INFO:"#17a2b8",DANGER:"#dc3545"},f={RAINBOWDASH_ONE:"#524aaa",RAINBOWDASH_TWO:"#4bbcb5",RAINBOWDASH_THREE:"#ed6a6a",RAINBOWDASH_FOUR:"#121f28",RAINBOWDASH_FIVE:"#f21313",RAINBOWDASH_SIX:"#42e5bf"},N={PRIMARY:R.PRIMARY,SECONDARY:R.SECONDARY,TERNARY:R.TERNARY,QUARTENARY:R.QUARTENARY,QUINARY:R.QUINARY,OFGREY_ONE:A.OFGREY_ONE,OFGREY_TWO:A.OFGREY_TWO,OFGREY_THREE:A.OFGREY_THREE,OFGREY_FOUR:A.OFGREY_FOUR,OFGREY_FIVE:A.OFGREY_FIVE,OFGREY_SIX:A.OFGREY_SIX,OFGREY_SEVEN:A.OFGREY_SEVEN,SUCCESS:m.SUCCESS,WARNING:m.WARNING,INFO:m.INFO,DANGER:m.DANGER,RAINBOWDASH_ONE:f.RAINBOWDASH_ONE,RAINBOWDASH_TWO:f.RAINBOWDASH_TWO,RAINBOWDASH_THREE:f.RAINBOWDASH_THREE,RAINBOWDASH_FOUR:f.RAINBOWDASH_FOUR,RAINBOWDASH_FIVE:f.RAINBOWDASH_FIVE,RAINBOWDASH_SIX:f.RAINBOWDASH_SIX};function S(){var e=Object(o.a)(["\n  color: ",";\n  font-weight: bold;\n  font-size: 18px;\n"]);return S=function(){return e},e}function v(){var e=Object(o.a)([""]);return v=function(){return e},e}function I(){var e=Object(o.a)([""]);return I=function(){return e},e}function b(){var e=Object(o.a)([""]);return b=function(){return e},e}var d=O.a.div(b()),s=Object(O.a)(i.a)(I()),_=Object(O.a)(i.a.Item)(v()),F=Object(O.a)(i.a.Link)(S(),N.PRIMARY);function Y(){var e=Object(o.a)(["\n  padding-top: 15px;\n  color: ",";\n"]);return Y=function(){return e},e}function j(){var e=Object(o.a)(["\n  padding: 10px;\n  padding-top: 20px; \n  flex-direction: center;\n  justify-content: center;\n"]);return j=function(){return e},e}var D=O.a.h3(j()),G=O.a.h3(Y(),N.SECONDARY),W=n(47),H=n(48);var B=function(e){var t=e.title,n=e.number;return r.a.createElement(D,null,r.a.createElement(W.a,{className:"justify-content-md-center"},r.a.createElement(H.a,{md:"auto"},1===n?r.a.createElement(G,{className:"justify-content-md-center"},t):r.a.createElement(G,{className:"justify-content-md-center"},"T\xe9cnica de Observa\xe7\xe3o do Usu\xe1rio: ",t))))};function T(){var e=Object(o.a)(["\n  \n"]);return T=function(){return e},e}var p=O.a.div(T());var h=function(){return r.a.createElement(p,null,r.a.createElement(B,{title:"T\xe9cnicas de Observa\xe7\xe3o de Usu\xe1rio",number:1}))};function U(){var e=Object(o.a)(["\n  \n"]);return U=function(){return e},e}var y=O.a.div(U());var C=function(){return r.a.createElement(y,null,r.a.createElement(B,{title:"Observa\xe7\xe3o Direta"}))};function V(){var e=Object(o.a)(["\n  \n"]);return V=function(){return e},e}var g=O.a.div(V());var w=function(){return r.a.createElement(g,null,r.a.createElement(B,{title:"Observa\xe7\xe3o Indireta"}))};function x(){var e=Object(o.a)(["\n  \n"]);return x=function(){return e},e}var M=O.a.div(x());var K=function(){return r.a.createElement(M,null,r.a.createElement(B,{title:"R\xe1pida e Suja"}))};function Q(){var e=Object(o.a)(["\n  \n"]);return Q=function(){return e},e}var X=O.a.div(Q());var P=function(){return r.a.createElement(X,null,r.a.createElement(B,{title:"Em Voz Alta"}))};var k=function(){var e=Object(a.useState)(!0),t=Object(E.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),u=Object(E.a)(l,2),o=u[0],O=u[1],i=Object(a.useState)(!1),R=Object(E.a)(i,2),A=R[0],m=R[1],f=Object(a.useState)(!1),N=Object(E.a)(f,2),S=N[0],v=N[1],I=Object(a.useState)(!1),b=Object(E.a)(I,2),Y=b[0],j=b[1],D=function(e){c(!1),O(!1),m(!1),v(!1),j(!1),"home"===e?c(!0):"flyonthewall"===e?O(!0):"monitoramento"===e?m(!0):"shadowing"===e?v(!0):"heuristica"===e?j(!0):(c(!1),O(!1),m(!1),v(!1),j(!1))};return r.a.createElement(d,null,r.a.createElement(s,{justify:!0,variant:"tabs",defaultActiveKey:"home"},r.a.createElement(_,null,r.a.createElement(F,{eventKey:"home",onSelect:D},"Home")),r.a.createElement(_,null,r.a.createElement(F,{eventKey:"flyonthewall",onSelect:D},"Mosca na parede")),r.a.createElement(_,null,r.a.createElement(F,{eventKey:"monitoramento",onSelect:D},"Monitoramento online")),r.a.createElement(_,null,r.a.createElement(F,{eventKey:"shadowing",onSelect:D},"Sombra")),r.a.createElement(_,null,r.a.createElement(F,{eventKey:"heuristica",onSelect:D},"Avalia\xe7\xe3o heur\xedstica"," "))),!0===n?r.a.createElement(h,null):null,!0===o?r.a.createElement(C,null):null,!0===A?r.a.createElement(w,null):null,!0===S?r.a.createElement(K,null):null,!0===Y?r.a.createElement(P,null):null)};function z(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:k}))}var J=n(25),L=Object(J.a)();n(44),n(45);var q=function(){return r.a.createElement(u.b,{history:L},r.a.createElement(z,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.41a52556.chunk.js.map