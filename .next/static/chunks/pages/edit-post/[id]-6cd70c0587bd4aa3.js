(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[243],{29537:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/edit-post/[id]",function(){return t(40124)}])},40124:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return M}});var r=t(34051),o=t.n(r),i=t(85893),a=t(67294),c=t(11163),u=t(67665),s=t(20294),f=t(5152),p=t(58156),l=t(77294),d=t(241),h=t(14400),v=t(31838),x=t(73326),b=t(48764).Buffer;function g(n,e,t,r,o,i,a){try{var c=n[i](a),u=c.value}catch(s){return void t(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function m(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function a(n){g(i,r,o,a,c,"next",n)}function c(n){g(i,r,o,a,c,"throw",n)}a(void 0)}))}}function w(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function j(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){w(n,e,t[e])}))}return n}function y(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function k(){var n=y(["\n  background-color: #fafafa;\n  outline: none;\n  border: none;\n  border-radius: 15px;\n  cursor: pointer;\n  margin-right: 10px;\n  margin-top: 15px;\n  font-size: 18px;\n  padding: 16px 70px;\n  box-shadow: 7px 7px rgba(0, 0, 0, 0.1);\n"]);return k=function(){return n},n}function P(){var n=y(["\n  margin-top: 40px;\n  border: none;\n  outline: none;\n  background-color: inherit;\n  font-size: 44px;\n  font-weight: 600;\n  &::placeholder {\n    color: #999999;\n  }\n"]);return P=function(){return n},n}function N(){var n=y(["\n  margin-top: 40px;\n"]);return N=function(){return n},n}function O(){var n=y(["\n  width: 900px;\n"]);return O=function(){return n},n}function _(){var n=y(["\n  width: 900px;\n  margin: 0 auto;\n"]);return _=function(){return n},n}function C(){var n=y(["\n  margin-top: 60px;\n  padding: 0px 40px;\n  border-left: 1px solid #e7e7e7;\n  border-right: 1px solid #e7e7e7;\n  & img {\n    max-width: 900px;\n  }\n"]);return C=function(){return n},n}var E="https://ipfs.io/ipfs/",S="Basic "+b.from("2DMP9vVNMG9xupjSCgd7kkKLg7s:a09c7a10a4c767fd502df5bae335ae33").toString("base64"),z=(0,h.Ue)({host:"ipfs.infura.io",port:5001,protocol:"https",headers:{authorization:S}}),I=(0,f.default)((function(){return Promise.all([t.e(126),t.e(634),t.e(562)]).then(t.bind(t,81634))}),{loadableGenerated:{webpack:function(){return[81634]}},ssr:!1});function M(){var n=(0,a.useState)(null),e=n[0],t=n[1],r=(0,a.useState)(!0),s=r[0],f=r[1],h=(0,c.useRouter)(),b=h.query.id;function g(){return(g=m(o().mark((function n(){var e,r,i,a,c,u,s,f;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(b){n.next=2;break}return n.abrupt("return");case 2:return e=new p.r("https://rinkeby.infura.io/v3/".concat("55ed44eac9054342affffcd192c1df86")),r=new l.CH(v.i,x.Mt,e),n.next=7,r.fetchPost(b);case 7:return i=n.sent,a=i[0].toNumber(),c="".concat(E,"/").concat(b),n.next=12,fetch(c);case 12:return u=n.sent,n.next=15,u.json();case 15:(s=n.sent).coverImage&&(f="".concat(E,"/").concat(s.coverImage),s.coverImagePath=f),s.id=a,t(s);case 19:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(){return y.apply(this,arguments)}function y(){return(y=m(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,z.add(JSON.stringify(e));case 3:return t=n.sent,n.abrupt("return",t.path);case 7:n.prev=7,n.t0=n.catch(0),console.log("error: ",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function k(){return(k=m(o().mark((function n(){var t,r,i,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w();case 2:return t=n.sent,r=new d.Q(window.ethereum),i=r.getSigner(),a=new l.CH(v.i,x.Mt,i),n.next=8,a.updatePost(e.id,e.title,t,!0);case 8:h.push("/");case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,a.useEffect)((function(){!function(){g.apply(this,arguments)}()}),[b]),e?(0,i.jsxs)("div",{className:T,children:[s&&(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{onChange:function(n){return t(j({},e,{title:n.target.value}))},name:"title",placeholder:"Give it a title ...",value:e.title,className:G}),(0,i.jsx)(I,{className:B,placeholder:"What's on your mind?",value:e.content,onChange:function(n){return t(j({},e,{content:n}))}}),(0,i.jsx)("button",{className:D,onClick:function(){return k.apply(this,arguments)},children:"Update post"})]}),!s&&(0,i.jsxs)("div",{children:[e.coverImagePath&&(0,i.jsx)("img",{src:e.coverImagePath,className:H}),(0,i.jsx)("h1",{children:e.title}),(0,i.jsx)("div",{className:U,children:(0,i.jsx)(u.D,{children:e.content})})]}),(0,i.jsx)("button",{className:D,onClick:function(){return f(!s)},children:s?"View post":"Edit post"})]}):null}var D=(0,s.iv)(k()),G=(0,s.iv)(P()),B=(0,s.iv)(N()),H=(0,s.iv)(O()),T=(0,s.iv)(_()),U=(0,s.iv)(C())}},function(n){n.O(0,[622,665,983,774,888,179],(function(){return e=29537,n(n.s=e);var e}));var e=n.O();_N_E=e}]);