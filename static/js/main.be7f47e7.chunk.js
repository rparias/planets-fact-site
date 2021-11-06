(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{18:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var r,i,c,o=t(1),l=t.n(o),a=t(8),s=t.n(a),x=(t(18),t(2)),j=t(3),d="#FFFFFF",h="#070724",b="#419EBB",p="#EDA249",u="#6F2ED6",f="#D14C32",O="#D83A34",g="#CD5120",m="#1EC2A4",v="#2D68F0",y="#38384F",w="#838391",S=Object(j.a)(r||(r=Object(x.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    color: ",";\n  }\n  \n  body {\n    background: ",";\n    font-family: 'Spartan', sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 25px;\n  }\n\n  main {\n    padding: 36px 40px;\n\n    @media (max-width: 768px) {\n      padding: 48px 24px;\n    } \n  }\n\n  h1, h2, h3, h4, button {\n    text-transform: uppercase;\n  }\n\n  h1 {\n    font-family: 'Antonio', sans-serif;\n    font-size: 80px;\n    line-height: 103px;\n  }\n\n  h2 {\n    font-family: 'Antonio', sans-serif;\n    font-size: 40px;\n    line-height: 52px;\n    letter-spacing: -1.5px;\n  }\n\n  h3, button {\n    font-family: 'Spartan', sans-serif;\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 25px;\n    letter-spacing: 2.6px;\n  }\n\n  h4 {\n    font-family: 'Spartan', sans-serif;\n    font-size: 11px;\n    font-weight: 700;\n    line-height: 25px;\n    letter-spacing: 1px;\n  }\n"])),d,h),C=j.b.nav(i||(i=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid ",";\n\n  h2 {\n    font-size: 28px;\n    margin: 22px 32px;\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n    margin-right: 24px;\n  }\n\n  svg {\n    display: none;\n  }\n\n  @media only screen and (max-width: 1023px) {\n    flex-direction: column;\n    align-items: center;\n\n    h2 {\n      margin-bottom: 0;\n    }\n\n    ul {\n      margin-right: 0;\n    }\n  }\n\n  @media only screen and (max-width: 767px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 0 24px;\n\n    ul {\n      display: none;\n      flex-direction: column;\n      flex-basis: 100%;\n    }\n\n    .active {\n      display: block;\n      height: 100vh;\n    }\n\n    h2 {\n      margin: 16px 0;\n    }\n\n    svg {\n      display: block;\n    }\n  }\n"])),w),k=t(12);function E(){var n=window;return{width:n.innerWidth,height:n.innerHeight}}var F=["title","titleId"];function z(){return z=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},z.apply(this,arguments)}function M(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function D(n,e){var t=n.title,r=n.titleId,i=M(n,F);return o.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",width:24,height:17,ref:e,"aria-labelledby":r},i),t?o.createElement("title",{id:r},t):null,c||(c=o.createElement("g",{fill:"#FFF",fillRule:"evenodd"},o.createElement("path",{d:"M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"}))))}var I,A,L,P,B=o.forwardRef(D),H=(t.p,j.b.button(I||(I=Object(x.a)(["\n  background: none;\n  border: none;\n  font-size: 11px;\n  color: ",";\n  padding: 33px 0;\n  margin: 0 16px;\n\n  &:hover {\n    color: ",";\n    cursor: pointer;\n    border-top: 4px solid ",";\n    padding-top: 29px;\n  }\n"])),w,d,(function(n){return n.activeColor||b}))),J=t(0),N=function(n){var e=n.text,t=n.activeColor;return Object(J.jsx)(H,{activeColor:t,children:e})},T=function(){return Object(J.jsxs)("ul",{children:[Object(J.jsx)("li",{children:Object(J.jsx)(N,{text:"Mercury",activeColor:b})}),Object(J.jsx)("li",{children:Object(J.jsx)(N,{text:"Venus",activeColor:p})}),Object(J.jsx)("li",{children:Object(J.jsx)(N,{text:"Earth",activeColor:u})}),Object(J.jsx)("li",{children:Object(J.jsx)(N,{text:"Mars",activeColor:f})}),Object(J.jsx)("li",{children:Object(J.jsx)(N,{text:"Jupiter",activeColor:O})}),Object(J.jsx)("li",{children:Object(J.jsx)(N,{text:"Saturn",activeColor:g})}),Object(J.jsx)("li",{children:Object(J.jsx)(N,{text:"Uranus",activeColor:m})}),Object(J.jsx)("li",{children:Object(J.jsx)(N,{text:"Neptune",activeColor:v})})]})},R=j.b.button(A||(A=Object(x.a)(["\n  width: 100%;\n  padding: 20px 50px;\n  background-color: ",";\n  border: none;\n  border-top: 1px solid ",";\n  text-align: left;\n  position: relative;\n\n  &::before {\n    position: absolute;\n    left: 0;\n    content: '';\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: ",";\n    margin-right: 25px;\n  }\n\n  &::after {\n    position: absolute;\n    right: 10px;\n    content: '>';\n    color: ",";\n  }\n"])),h,y,(function(n){return n.color||b}),y),U=function(n){var e=n.text,t=n.color;return Object(J.jsx)(R,{color:t,children:e})},V=function(){return Object(J.jsxs)("ul",{className:"menu",children:[Object(J.jsx)("li",{children:Object(J.jsx)(U,{text:"Mercury",color:b})}),Object(J.jsx)("li",{children:Object(J.jsx)(U,{text:"Venus",color:p})}),Object(J.jsx)("li",{children:Object(J.jsx)(U,{text:"Earth",color:u})}),Object(J.jsx)("li",{children:Object(J.jsx)(U,{text:"Mars",color:f})}),Object(J.jsx)("li",{children:Object(J.jsx)(U,{text:"Jupiter",color:O})}),Object(J.jsx)("li",{children:Object(J.jsx)(U,{text:"Saturn",color:g})}),Object(J.jsx)("li",{children:Object(J.jsx)(U,{text:"Uranus",color:m})}),Object(J.jsx)("li",{children:Object(J.jsx)(U,{text:"Neptune",color:v})})]})},W=function(){var n=function(){var n=Object(o.useState)(E()),e=Object(k.a)(n,2),t=e[0],r=e[1];return Object(o.useEffect)((function(){function n(){r(E())}return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),t}().width;return Object(J.jsxs)(C,{children:[Object(J.jsx)("h2",{children:"The planets"}),Object(J.jsx)(B,{onClick:function(){document.querySelector(".menu").classList.toggle("active")}}),n>=768?Object(J.jsx)(T,{}):Object(J.jsx)(V,{})]})},_=t(13),q=j.b.article(L||(L=Object(x.a)(["\n  p {\n    margin: 24px 0;\n  }\n\n  span {\n    color: ",";\n  }\n\n  a {\n    font-weight: bold;\n    color: ",";\n  }\n"])),y,w),G=function(n){var e=n.name,t=n.overview,r=t.content,i=t.source;return Object(J.jsxs)(q,{children:[Object(J.jsx)("h1",{children:e}),Object(J.jsx)("p",{children:r}),Object(J.jsx)("span",{children:"Source: "}),Object(J.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:"Wikipedia"})]})},K=j.b.article(P||(P=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 350px;\n"]))),Q=function(n){var e=n.planet;return Object(J.jsx)(K,{children:Object(J.jsx)(G,Object(_.a)({},e))})};var X=function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(S,{}),Object(J.jsx)(W,{}),Object(J.jsx)("main",{children:Object(J.jsx)(Q,{planet:{name:"Mercury",overview:{content:"Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",source:"https://en.wikipedia.org/wiki/Mercury_(planet)"}}})})]})},Y=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),r(n),i(n),c(n),o(n)}))};s.a.render(Object(J.jsx)(l.a.StrictMode,{children:Object(J.jsx)(X,{})}),document.getElementById("root")),Y()}},[[24,1,2]]]);
//# sourceMappingURL=main.be7f47e7.chunk.js.map