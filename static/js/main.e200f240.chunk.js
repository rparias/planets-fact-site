(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{18:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var r,i,o,c=t(1),a=t.n(c),l=t(8),s=t.n(l),x=(t(18),t(2)),b=t(3),j=t.p+"static/media/background-stars.f6233a6a.svg",u="#FFFFFF",d="#070724",p="#419EBB",h="#EDA249",f="#6F2ED6",O="#D14C32",g="#D83A34",v="#CD5120",m="#1EC2A4",y="#2D68F0",w="#38384F",C="#838391",S=Object(b.a)(r||(r=Object(x.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    color: ",";\n  }\n  \n  body {\n    background: ",";\n    background-image: url('","');\n    font-family: 'Spartan', sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 25px;\n  }\n\n  main {\n    padding: 36px 40px;\n\n    @media (max-width: 768px) {\n      padding: 48px 24px;\n    } \n  }\n\n  h1, h2, h3, h4, button {\n    text-transform: uppercase;\n  }\n\n  h1 {\n    font-family: 'Antonio', sans-serif;\n    font-size: 80px;\n    line-height: 103px;\n  }\n\n  h2 {\n    font-family: 'Antonio', sans-serif;\n    font-size: 40px;\n    line-height: 52px;\n    letter-spacing: -1.5px;\n  }\n\n  h3, button {\n    font-family: 'Spartan', sans-serif;\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 25px;\n    letter-spacing: 2.6px;\n  }\n\n  h4 {\n    font-family: 'Spartan', sans-serif;\n    font-size: 11px;\n    font-weight: 700;\n    line-height: 25px;\n    letter-spacing: 1px;\n  }\n"])),u,d,j),k=b.b.nav(i||(i=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid ",";\n\n  h2 {\n    font-size: 28px;\n    margin: 22px 32px;\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n    margin-right: 24px;\n  }\n\n  svg {\n    display: none;\n  }\n\n  @media only screen and (max-width: 1023px) {\n    flex-direction: column;\n    align-items: center;\n\n    h2 {\n      margin-bottom: 0;\n    }\n\n    ul {\n      margin-right: 0;\n    }\n  }\n\n  @media only screen and (max-width: 767px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 0 24px;\n\n    ul {\n      display: none;\n      flex-direction: column;\n      flex-basis: 100%;\n    }\n\n    .active {\n      display: block;\n      height: 100vh;\n      z-index: 1;\n    }\n\n    h2 {\n      margin: 16px 0;\n    }\n\n    svg {\n      display: block;\n    }\n  }\n"])),C),F=t(12);function E(){var n=window;return{width:n.innerWidth,height:n.innerHeight}}function z(){var n=Object(c.useState)(E()),e=Object(F.a)(n,2),t=e[0],r=e[1];return Object(c.useEffect)((function(){function n(){r(E())}return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),t}var M=["title","titleId"];function I(){return I=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},I.apply(this,arguments)}function P(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function A(n,e){var t=n.title,r=n.titleId,i=P(n,M);return c.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",width:24,height:17,ref:e,"aria-labelledby":r},i),t?c.createElement("title",{id:r},t):null,o||(o=c.createElement("g",{fill:"#FFF",fillRule:"evenodd"},c.createElement("path",{d:"M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"}))))}var D,B,L,H,N=c.forwardRef(A),T=(t.p,b.b.button(D||(D=Object(x.a)(["\n  background: none;\n  border: none;\n  font-size: 11px;\n  color: ",";\n  padding: 33px 0;\n  margin: 0 16px;\n\n  &:hover {\n    color: ",";\n    cursor: pointer;\n    border-top: 4px solid ",";\n    padding-top: 29px;\n  }\n"])),C,u,(function(n){return n.activeColor||p}))),J=t(0),R=function(n){var e=n.text,t=n.activeColor;return Object(J.jsx)(T,{activeColor:t,children:e})},U=function(){return Object(J.jsxs)("ul",{children:[Object(J.jsx)("li",{children:Object(J.jsx)(R,{text:"Mercury",activeColor:p})}),Object(J.jsx)("li",{children:Object(J.jsx)(R,{text:"Venus",activeColor:h})}),Object(J.jsx)("li",{children:Object(J.jsx)(R,{text:"Earth",activeColor:f})}),Object(J.jsx)("li",{children:Object(J.jsx)(R,{text:"Mars",activeColor:O})}),Object(J.jsx)("li",{children:Object(J.jsx)(R,{text:"Jupiter",activeColor:g})}),Object(J.jsx)("li",{children:Object(J.jsx)(R,{text:"Saturn",activeColor:v})}),Object(J.jsx)("li",{children:Object(J.jsx)(R,{text:"Uranus",activeColor:m})}),Object(J.jsx)("li",{children:Object(J.jsx)(R,{text:"Neptune",activeColor:y})})]})},V=b.b.button(B||(B=Object(x.a)(["\n  width: 100%;\n  padding: 20px 50px;\n  background-color: ",";\n  border: none;\n  border-top: 1px solid ",";\n  text-align: left;\n  position: relative;\n\n  &::before {\n    position: absolute;\n    left: 0;\n    content: '';\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: ",";\n    margin-right: 25px;\n  }\n\n  &::after {\n    position: absolute;\n    right: 10px;\n    content: '>';\n    color: ",";\n  }\n"])),d,w,(function(n){return n.color||p}),w),W=function(n){var e=n.text,t=n.color;return Object(J.jsx)(V,{color:t,children:e})},_=function(){return Object(J.jsxs)("ul",{className:"menu",children:[Object(J.jsx)("li",{children:Object(J.jsx)(W,{text:"Mercury",color:p})}),Object(J.jsx)("li",{children:Object(J.jsx)(W,{text:"Venus",color:h})}),Object(J.jsx)("li",{children:Object(J.jsx)(W,{text:"Earth",color:f})}),Object(J.jsx)("li",{children:Object(J.jsx)(W,{text:"Mars",color:O})}),Object(J.jsx)("li",{children:Object(J.jsx)(W,{text:"Jupiter",color:g})}),Object(J.jsx)("li",{children:Object(J.jsx)(W,{text:"Saturn",color:v})}),Object(J.jsx)("li",{children:Object(J.jsx)(W,{text:"Uranus",color:m})}),Object(J.jsx)("li",{children:Object(J.jsx)(W,{text:"Neptune",color:y})})]})},q=function(){var n=z().width;return Object(J.jsxs)(k,{children:[Object(J.jsx)("h2",{children:"The planets"}),Object(J.jsx)(N,{onClick:function(){document.querySelector(".menu").classList.toggle("active")}}),n>=768?Object(J.jsx)(U,{}):Object(J.jsx)(_,{})]})},G=function(n){var e=n.source,t=n.altText;return Object(J.jsx)("img",{src:"/planets-fact-site"+e,alt:t||"Planet"})},K=t(13),Q=b.b.article(L||(L=Object(x.a)(["\n  p {\n    margin: 24px 0;\n  }\n\n  span {\n    color: ",";\n  }\n\n  a {\n    font-weight: bold;\n    color: ",";\n    margin-right: 8px;\n  }\n"])),w,C),X=["title","titleId"];function Y(){return Y=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Y.apply(this,arguments)}function Z(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function $(n,e){var t=n.title,r=n.titleId,i=Z(n,X);return c.createElement("svg",Y({xmlns:"http://www.w3.org/2000/svg",width:12,height:12,ref:e,"aria-labelledby":r},i),t?c.createElement("title",{id:r},t):null,H||(H=c.createElement("path",{fill:"#FFF",d:"M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z",opacity:.5})))}var nn,en,tn,rn,on=c.forwardRef($),cn=(t.p,function(n){var e=n.name,t=n.overview,r=t.content,i=t.source;return Object(J.jsxs)(Q,{children:[Object(J.jsx)("h1",{children:e}),Object(J.jsx)("p",{children:r}),Object(J.jsx)("span",{children:"Source: "}),Object(J.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:"Wikipedia"}),Object(J.jsx)(on,{})]})}),an=b.b.button(nn||(nn=Object(x.a)(["\n  background-color: ",";\n  width: 350px;\n  height: 48px;\n  border: 0.5px solid ",";\n  text-align: start;\n  margin: 8px 0;\n\n  &.active-color {\n    background-color: ",";\n    border: none;\n  }\n\n  &:hover {\n    background-color: ",";\n    cursor: pointer;\n    border: none;\n  }\n\n  span {\n    color: ",";\n    margin: 12px 28px;\n  }\n"])),d,w,(function(n){return n.activeColor||p}),w,C),ln=function(n){var e=n.text,t=n.activeColor,r=n.number;return Object(J.jsxs)(an,{className:t&&"active-color",activeColor:t,children:[Object(J.jsx)("span",{children:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String(n).padStart(2,"0")}(r)}),e||"Button"]})},sn=b.b.button(en||(en=Object(x.a)(["\n  background-color: transparent;\n  border: none;\n  font-size: 9px;\n  color: ",";\n  margin: 0 24px;\n  padding: 20px 0;\n\n  &.active-color {\n    color: ",";\n    background-color: transparent;\n    padding-bottom: 16px;\n    border-bottom: 4px solid ",";\n  }\n"])),C,u,(function(n){return n.activeColor||p})),xn=function(n){var e=n.text,t=n.activeColor;return Object(J.jsx)(sn,{className:t&&"active-color",activeColor:t,children:e||"Button"})},bn=function(){var n=z().width;return Object(J.jsx)(jn,{children:n>=768?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(ln,{number:1,text:"Overview",activeColor:p}),Object(J.jsx)(ln,{number:2,text:"Internal Structure"}),Object(J.jsx)(ln,{number:3,text:"Surface geology"})]}):Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(xn,{text:"Overview",activeColor:p}),Object(J.jsx)(xn,{text:"Structure"}),Object(J.jsx)(xn,{text:"Surface"})]})})},jn=b.b.article(tn||(tn=Object(x.a)(["\n  margin-top: 32px;\n\n  @media only screen and (max-width: 767px) {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    width: 100%;\n    position: absolute;\n    top: 84px;\n    left: 0;\n    border-bottom: 1px solid ",";\n  }\n"])),C),un=b.b.article(rn||(rn=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  max-width: 350px;\n\n  @media only screen and (max-width: 1023px) {\n    flex-direction: row;\n    max-width: 100%;\n    gap: 60px;\n  }\n"]))),dn=function(n){var e=n.planet;return Object(J.jsxs)(un,{children:[Object(J.jsx)(cn,Object(K.a)({},e)),Object(J.jsx)(bn,{})]})};var pn=function(){var n={name:"Mercury",overview:{content:"Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",source:"https://en.wikipedia.org/wiki/Mercury_(planet)"},images:{planet:"/assets/planet-mercury.svg"}},e=n.name,t=n.images.planet;return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(S,{}),Object(J.jsx)(q,{}),Object(J.jsxs)("main",{children:[Object(J.jsx)(G,{altText:e,source:t}),Object(J.jsx)(dn,{planet:n})]})]})},hn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,o=e.getLCP,c=e.getTTFB;t(n),r(n),i(n),o(n),c(n)}))};s.a.render(Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)(pn,{})}),document.getElementById("root")),hn()}},[[24,1,2]]]);
//# sourceMappingURL=main.e200f240.chunk.js.map