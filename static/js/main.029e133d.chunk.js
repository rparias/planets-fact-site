(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{18:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var r,i,o,c=t(1),a=t.n(c),l=t(9),s=t.n(l),x=(t(18),t(4)),d=t(2),p=t(3),u=t.p+"static/media/background-stars.f6233a6a.svg",b="#FFFFFF",j="#070724",h="#419EBB",f="#EDA249",g="#6F2ED6",O="#D14C32",m="#D83A34",v="#CD5120",y="#1EC2A4",w="#2D68F0",C="#38384F",S="#838391",k=Object(p.a)(r||(r=Object(d.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    color: ",";\n    box-sizing: border-box;\n  }\n  \n  body {\n    background: ",";\n    background-image: url('","');\n    font-family: 'Spartan', sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 25px;\n  }\n\n  main {\n    padding: 36px 40px;\n\n    @media (max-width: 768px) {\n      padding: 48px 24px;\n    } \n  }\n\n  h1, h2, h3, h4, button {\n    text-transform: uppercase;\n  }\n\n  h1 {\n    font-family: 'Antonio', sans-serif;\n    font-size: 80px;\n    line-height: 103px;\n  }\n\n  h2 {\n    font-family: 'Antonio', sans-serif;\n    font-size: 40px;\n    line-height: 52px;\n    letter-spacing: -1.5px;\n  }\n\n  h3, button {\n    font-family: 'Spartan', sans-serif;\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 25px;\n    letter-spacing: 2.6px;\n  }\n\n  h4 {\n    font-family: 'Spartan', sans-serif;\n    font-size: 11px;\n    font-weight: 700;\n    line-height: 25px;\n    letter-spacing: 1px;\n  }\n"])),b,j,u),F=p.b.nav(i||(i=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid ",";\n\n  h2 {\n    font-size: 28px;\n    margin: 22px 32px;\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n    margin-right: 24px;\n  }\n\n  svg {\n    display: none;\n  }\n\n  @media only screen and (max-width: 1023px) {\n    flex-direction: column;\n    align-items: center;\n\n    h2 {\n      margin-bottom: 0;\n    }\n\n    ul {\n      margin-right: 0;\n    }\n  }\n\n  @media only screen and (max-width: 767px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 0 24px;\n\n    ul {\n      display: none;\n      flex-direction: column;\n      flex-basis: 100%;\n    }\n\n    .active {\n      display: block;\n      height: 100vh;\n      z-index: 1;\n    }\n\n    h2 {\n      margin: 16px 0;\n    }\n\n    svg {\n      display: block;\n    }\n  }\n"])),S),E=t(13);function z(){var n=window;return{width:n.innerWidth,height:n.innerHeight}}function M(){var n=Object(c.useState)(z()),e=Object(E.a)(n,2),t=e[0],r=e[1];return Object(c.useEffect)((function(){function n(){r(z())}return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),t}var I=["title","titleId"];function P(){return P=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},P.apply(this,arguments)}function D(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function A(n,e){var t=n.title,r=n.titleId,i=D(n,I);return c.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",width:24,height:17,ref:e,"aria-labelledby":r},i),t?c.createElement("title",{id:r},t):null,o||(o=c.createElement("g",{fill:"#FFF",fillRule:"evenodd"},c.createElement("path",{d:"M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"}))))}var B,L,R,T,H,N=c.forwardRef(A),J=(t.p,p.b.button(B||(B=Object(d.a)(["\n  background: none;\n  border: none;\n  font-size: 11px;\n  color: ",";\n  padding: 33px 0;\n  margin: 0 16px;\n\n  &:hover {\n    color: ",";\n    cursor: pointer;\n    border-top: 4px solid ",";\n    padding-top: 29px;\n  }\n"])),S,b,(function(n){return n.activeColor||h}))),V=t(0),U=function(n){var e=n.text,t=n.activeColor;return Object(V.jsx)(J,{activeColor:t,children:e})},W=function(){return Object(V.jsxs)("ul",{children:[Object(V.jsx)("li",{children:Object(V.jsx)(U,{text:"Mercury",activeColor:h})}),Object(V.jsx)("li",{children:Object(V.jsx)(U,{text:"Venus",activeColor:f})}),Object(V.jsx)("li",{children:Object(V.jsx)(U,{text:"Earth",activeColor:g})}),Object(V.jsx)("li",{children:Object(V.jsx)(U,{text:"Mars",activeColor:O})}),Object(V.jsx)("li",{children:Object(V.jsx)(U,{text:"Jupiter",activeColor:m})}),Object(V.jsx)("li",{children:Object(V.jsx)(U,{text:"Saturn",activeColor:v})}),Object(V.jsx)("li",{children:Object(V.jsx)(U,{text:"Uranus",activeColor:y})}),Object(V.jsx)("li",{children:Object(V.jsx)(U,{text:"Neptune",activeColor:w})})]})},_=p.b.button(L||(L=Object(d.a)(["\n  width: 100%;\n  padding: 20px 50px;\n  background-color: ",";\n  border: none;\n  border-top: 1px solid ",";\n  text-align: left;\n  position: relative;\n\n  &::before {\n    position: absolute;\n    left: 0;\n    content: '';\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: ",";\n    margin-right: 25px;\n  }\n\n  &::after {\n    position: absolute;\n    right: 10px;\n    content: '>';\n    color: ",";\n  }\n"])),j,C,(function(n){return n.color||h}),C),q=function(n){var e=n.text,t=n.color;return Object(V.jsx)(_,{color:t,children:e})},K=function(){return Object(V.jsxs)("ul",{className:"menu",children:[Object(V.jsx)("li",{children:Object(V.jsx)(q,{text:"Mercury",color:h})}),Object(V.jsx)("li",{children:Object(V.jsx)(q,{text:"Venus",color:f})}),Object(V.jsx)("li",{children:Object(V.jsx)(q,{text:"Earth",color:g})}),Object(V.jsx)("li",{children:Object(V.jsx)(q,{text:"Mars",color:O})}),Object(V.jsx)("li",{children:Object(V.jsx)(q,{text:"Jupiter",color:m})}),Object(V.jsx)("li",{children:Object(V.jsx)(q,{text:"Saturn",color:v})}),Object(V.jsx)("li",{children:Object(V.jsx)(q,{text:"Uranus",color:y})}),Object(V.jsx)("li",{children:Object(V.jsx)(q,{text:"Neptune",color:w})})]})},G=function(){var n=M().width;return Object(V.jsxs)(F,{children:[Object(V.jsx)("h2",{children:"The planets"}),Object(V.jsx)(N,{onClick:function(){document.querySelector(".menu").classList.toggle("active")}}),n>=768?Object(V.jsx)(W,{}):Object(V.jsx)(K,{})]})},Q=p.b.picture(R||(R=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n\n  @media only screen and (min-width: 1024px) {\n    width: 50%;\n  }\n"]))),X=function(n){var e=n.source,t=n.altText;return Object(V.jsx)(Q,{children:Object(V.jsx)("img",{src:"/planets-fact-site"+e,alt:t||"Planet"})})},Y=p.b.article(T||(T=Object(d.a)(["\n  p {\n    margin: 24px 0;\n  }\n\n  span {\n    color: ",";\n  }\n\n  a {\n    font-weight: bold;\n    color: ",";\n    margin-right: 8px;\n  }\n\n  @media only screen and (max-width: 767px) {\n    text-align: center;\n  }\n"])),C,S),Z=["title","titleId"];function $(){return $=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},$.apply(this,arguments)}function nn(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function en(n,e){var t=n.title,r=n.titleId,i=nn(n,Z);return c.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",width:12,height:12,ref:e,"aria-labelledby":r},i),t?c.createElement("title",{id:r},t):null,H||(H=c.createElement("path",{fill:"#FFF",d:"M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z",opacity:.5})))}var tn,rn,on,cn,an,ln,sn,xn=c.forwardRef(en),dn=(t.p,function(n){var e=n.name,t=n.overview,r=t.content,i=t.source;return Object(V.jsxs)(Y,{children:[Object(V.jsx)("h1",{children:e}),Object(V.jsx)("p",{children:r}),Object(V.jsx)("span",{children:"Source: "}),Object(V.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:"Wikipedia"}),Object(V.jsx)(xn,{})]})}),pn=p.b.button(tn||(tn=Object(d.a)(["\n  background-color: ",";\n  width: 350px;\n  height: 48px;\n  border: 0.5px solid ",";\n  text-align: start;\n  margin: 8px 0;\n\n  &.active-color {\n    background-color: ",";\n    border: none;\n  }\n\n  &:hover {\n    background-color: ",";\n    cursor: pointer;\n    border: none;\n  }\n\n  span {\n    color: ",";\n    margin: 12px 28px;\n  }\n"])),j,C,(function(n){return n.activeColor||h}),C,S),un=function(n){var e=n.text,t=n.activeColor,r=n.number;return Object(V.jsxs)(pn,{className:t&&"active-color",activeColor:t,children:[Object(V.jsx)("span",{children:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String(n).padStart(2,"0")}(r)}),e||"Button"]})},bn=p.b.button(rn||(rn=Object(d.a)(["\n  background-color: transparent;\n  border: none;\n  font-size: 9px;\n  color: ",";\n  margin: 0 24px;\n  padding: 20px 0;\n\n  &.active-color {\n    color: ",";\n    background-color: transparent;\n    padding-bottom: 16px;\n    border-bottom: 4px solid ",";\n  }\n"])),S,b,(function(n){return n.activeColor||h})),jn=function(n){var e=n.text,t=n.activeColor;return Object(V.jsx)(bn,{className:t&&"active-color",activeColor:t,children:e||"Button"})},hn=function(){var n=M().width;return Object(V.jsx)(fn,{children:n>=768?Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(un,{number:1,text:"Overview",activeColor:h}),Object(V.jsx)(un,{number:2,text:"Internal Structure"}),Object(V.jsx)(un,{number:3,text:"Surface geology"})]}):Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(jn,{text:"Overview",activeColor:h}),Object(V.jsx)(jn,{text:"Structure"}),Object(V.jsx)(jn,{text:"Surface"})]})})},fn=p.b.article(on||(on=Object(d.a)(["\n  margin-top: 32px;\n\n  @media only screen and (max-width: 767px) {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    width: 100%;\n    position: absolute;\n    top: 84px;\n    left: 0;\n    border-bottom: 1px solid ",";\n  }\n"])),S),gn=p.b.article(cn||(cn=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  max-width: 350px;\n\n  @media only screen and (max-width: 1023px) {\n    flex-direction: row;\n    max-width: 100%;\n    gap: 60px;\n  }\n"]))),On=function(n){var e=n.planet;return Object(V.jsxs)(gn,{children:[Object(V.jsx)(dn,Object(x.a)({},e)),Object(V.jsx)(hn,{})]})},mn=p.b.article(an||(an=Object(d.a)(["\n  border: 1px solid ",";\n  padding: 20px;\n  margin-top: 80px;\n  width: 255px;\n\n  h4 {\n    color: ",";\n  }\n\n  @media only screen and (max-width: 1440px) {\n    width: 100%;\n  }\n"])),C,S),vn=function(n){var e=n.property,t=n.value;return Object(V.jsxs)(mn,{children:[Object(V.jsx)("h4",{children:e||"Property"}),Object(V.jsx)("h2",{children:t||"Value"})]})},yn=p.b.main(ln||(ln=Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5% 12%;\n\n  @media only screen and (max-width: 1023px) {\n    flex-direction: column;\n    padding-top: 0;\n\n    picture {\n      display: flex;\n      height: 460px;\n      align-items: center;\n      justify-content: center;\n\n      img {\n        width: 64%;\n      }\n    }\n  }\n\n  @media only screen and (max-width: 767px) {\n    picture {\n      height: 300px;\n      margin-top: 65px;\n\n      img {\n        width: 38%;\n      }\n    }\n  }\n"]))),wn=p.b.article(sn||(sn=Object(d.a)(["\n  display: flex;\n  flex: 0 0 100%;\n  justify-content: space-between;\n\n  @media only screen and (max-width: 767px) {\n    flex-direction: column;\n  }\n"])));var Cn=function(){var n={name:"Mercury",overview:{content:"Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",source:"https://en.wikipedia.org/wiki/Mercury_(planet)"},images:{planet:"/assets/planet-mercury.svg"},rotation:"0.99 Days",revolution:"365.26 Days",radius:"6,371 KM",temperature:"16\xb0c"},e=n.name,t=n.images.planet,r=[{property:"Rotation time",value:n.rotation},{property:"Revolution Time",value:n.revolution},{property:"Radius",value:n.radius},{property:"Average temp.",value:n.temperature}];return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(k,{}),Object(V.jsx)(G,{}),Object(V.jsxs)(yn,{children:[Object(V.jsx)(X,{altText:e,source:t}),Object(V.jsx)(On,{planet:n}),Object(V.jsx)(wn,{children:r.map((function(n,e){return Object(V.jsx)(vn,Object(x.a)({},n),e)}))})]})]})},Sn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,o=e.getLCP,c=e.getTTFB;t(n),r(n),i(n),o(n),c(n)}))};s.a.render(Object(V.jsx)(a.a.StrictMode,{children:Object(V.jsx)(Cn,{})}),document.getElementById("root")),Sn()}},[[24,1,2]]]);
//# sourceMappingURL=main.029e133d.chunk.js.map