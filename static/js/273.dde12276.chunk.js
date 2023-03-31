"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[273],{4273:function(n,e,r){r.r(e),r.d(e,{default:function(){return H}});var t,a,c,o,s,i,A,p,u=r(5861),x=r(9439),l=r(7757),d=r.n(l),v=r(2791),f=r(7689),b=r(2639),h=r(1819),g=r(5700),m=r(168),j=r(6444),w=r(1087),P=(0,j.ZP)(w.rU)(t||(t=(0,m.Z)(["\ntext-decoration: none;\n  margin: 20px auto 20px;\n  display: inline-block;\n  background-color: #e30136;\n  color: white;\n  font-size: 20px;\n  padding: 8px 15px 8px;\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0px 2px 4px -1px rgba(237, 141, 141, 0.2),\n    0px 4px 5px 0px rgba(237, 141, 141, 0.14),\n    0px 1px 10px 0px rgba(237, 141, 141, 0.12);\n  transition: background-color 300ms ease-out, box-shadow 300ms ease-out,\n    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n    background-color: #b9062f;\n    cursor: zoom-in;\n    box-shadow: 0px 3px 5px -2px rgba(237, 141, 141, 0.4),\n      0px 5px 6px 0px rgba(237, 141, 141, 0.34),\n      0px 2px 12px 0px rgba(237, 141, 141, 0.32);\n  }\n"]))),Z=j.ZP.div(a||(a=(0,m.Z)(["\n    display: flex;\n    gap: 20px;\n    color: rgb(215, 190, 190);\n    margin: 20px auto 20px;\n    line-height: 1.5;\n    font-size: 18px;\n"]))),z=j.ZP.div(c||(c=(0,m.Z)(["\nwidth: 100%;\nheight: 1px;\nbackground-color: rgb(210, 190, 190);\n"]))),y=j.ZP.img(o||(o=(0,m.Z)(["\n  object-fit: cover;\n"]))),X=j.ZP.span(s||(s=(0,m.Z)(["\n  /* display: block; */\n font-weight: bold;\n margin: 5px 10px 0 10px ;\n"]))),k=j.ZP.ul(i||(i=(0,m.Z)(["\n display: flex;\n    gap: 20px;\n    color: rgb(210, 190, 190);\n \n margin: 10px;\n"]))),q=(0,j.ZP)(w.rU)(A||(A=(0,m.Z)(["\n  margin: 20px auto 20px;\n  display: inline-block;\n  border: 1px solid #e30136;\n  color: rgb(210, 190, 190);\n  font-size: 18px;\n  padding: 8px 15px 8px;\ntext-decoration:none;\n  border-radius: 4px;\n  box-shadow: 0px 2px 4px -1px rgba(237, 141, 141, 0.2),\n    0px 4px 5px 0px rgba(237, 141, 141, 0.14),\n    0px 1px 10px 0px rgba(237, 141, 141, 0.12);\n  transition: color 300ms ease-out, box-shadow 300ms ease-out,\n    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n    color: #b9062f;\n    cursor: zoom-in;\n    box-shadow: 0px 3px 5px -2px rgba(237, 141, 141, 0.4),\n      0px 5px 6px 0px rgba(237, 141, 141, 0.34),\n      0px 2px 12px 0px rgba(237, 141, 141, 0.32);}\n"]))),N=j.ZP.span(p||(p=(0,m.Z)(["\n  display: inline-block;\n margin: 5px 10px 0 10px ;\n"]))),O=r(3042),V=r(184),U=function(n){var e,r,t=n.movie,a=n.location,c=(0,v.useRef)(null!==(e=null===a||void 0===a||null===(r=a.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/"),o=t.original_title,s=t.overview,i=t.vote_average,A=t.release_date,p=t.tagline,u=t.backdrop_path,x=t.genres,l=t.runtime;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(P,{to:c.current,children:"\u2190 Go back"}),(0,V.jsxs)(Z,{children:[(0,V.jsx)(y,{src:null!==u?"https://image.tmdb.org/t/p/w500".concat(u):O,alt:o}),(0,V.jsxs)("div",{children:[(0,V.jsx)("h2",{children:o}),(0,V.jsxs)("div",{children:[(0,V.jsx)(X,{children:"Runtime:"})," ",l]}),(0,V.jsxs)("div",{children:[(0,V.jsx)(X,{children:"User score:"})," ",i]}),(0,V.jsxs)("div",{children:[(0,V.jsx)(X,{children:"Release date:"})," ",A]}),(0,V.jsxs)("div",{children:[(0,V.jsx)(X,{children:"Tagline:"})," ",p]}),(0,V.jsxs)("div",{children:[(0,V.jsx)(X,{children:"Genres:"}),x.map((function(n){return(0,V.jsx)(N,{children:n.name},"".concat(n.id))}))]}),(0,V.jsxs)("div",{children:[(0,V.jsx)(X,{children:"Overwiew:"}),s]})]})]}),(0,V.jsx)(z,{}),(0,V.jsxs)(k,{children:[(0,V.jsx)("li",{children:(0,V.jsx)(q,{to:"cast",children:"Actors"})}),(0,V.jsx)("li",{children:(0,V.jsx)(q,{to:"reviews",children:"Reviews"})})]}),(0,V.jsx)(z,{})]})},H=function(){var n=(0,v.useState)(!0),e=(0,x.Z)(n,2),r=e[0],t=e[1],a=(0,v.useState)(null),c=(0,x.Z)(a,2),o=c[0],s=c[1],i=(0,f.TH)(),A=(0,f.UO)().movieId;return(0,v.useEffect)((function(){function n(){return(n=(0,u.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,h.BG)(A);case 2:e=n.sent,s(e.movie),t(!1);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}window.scrollTo(0,0),function(){n.apply(this,arguments)}()}),[A]),r?(0,V.jsx)(b.a,{}):(0,V.jsx)(V.Fragment,{children:(0,V.jsxs)(g.W,{children:[(0,V.jsx)(U,{movie:o,location:i}),(0,V.jsx)(v.Suspense,{fallback:(0,V.jsx)(b.a,{}),children:(0,V.jsx)(f.j3,{})})]})})}},1819:function(n,e,r){r.d(e,{BG:function(){return h},Fj:function(){return x},Hx:function(){return m},Kd:function(){return w},Pv:function(){return f},gW:function(){return d}});var t=r(5861),a=r(7757),c=r.n(a),o=r(1243),s="f907ec6f235cb6bab9021d7ee76a1e81",i="https://api.themoviedb.org/3/trending/movie/week",A="https://api.themoviedb.org/3/trending/movie/day",p="https://api.themoviedb.org/3/movie/",u="https://api.themoviedb.org/3/search/movie";function x(n){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(c().mark((function n(e){var r,t,a,i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(A,"?api_key=").concat(s,"&page=").concat(e),n.prev=1,n.next=4,o.Z.get("".concat(r));case 4:return t=n.sent,a=t.data.results,i=t.data.total_pages,n.abrupt("return",{movies:a,totalPage:i});case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(c().mark((function n(e){var r,t,a,A;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(i,"?api_key=").concat(s,"&page=").concat(e),n.prev=1,n.next=4,o.Z.get("".concat(r));case 4:return t=n.sent,a=t.data.results,A=t.data.total_pages,n.abrupt("return",{movies:a,totalPage:A});case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})))).apply(this,arguments)}function f(n){return b.apply(this,arguments)}function b(){return(b=(0,t.Z)(c().mark((function n(e){var r,t,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u,"?api_key=").concat(s,"&query=").concat(e,"&language=en-US"),n.prev=1,n.next=4,o.Z.get("".concat(r));case 4:return t=n.sent,a=t.data.results,n.abrupt("return",{movies:a});case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(c().mark((function n(e){var r,t,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(p).concat(e,"?api_key=").concat(s,"&language=en-US"),n.prev=1,n.next=4,o.Z.get("".concat(r));case 4:return t=n.sent,a=t.data,n.abrupt("return",{movie:a});case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function m(n){return j.apply(this,arguments)}function j(){return(j=(0,t.Z)(c().mark((function n(e){var r,t,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(p).concat(e,"/reviews?api_key=").concat(s,"&language=en-US"),n.prev=1,n.next=4,o.Z.get("".concat(r));case 4:return t=n.sent,a=t.data.results,n.abrupt("return",a);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function w(n){return P.apply(this,arguments)}function P(){return(P=(0,t.Z)(c().mark((function n(e){var r,t,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(p).concat(e,"/credits?api_key=").concat(s,"&language=en-US"),n.prev=1,n.next=4,o.Z.get("".concat(r));case 4:return t=n.sent,a=t.data.cast,n.abrupt("return",a);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}},5700:function(n,e,r){r.d(e,{W:function(){return c}});r(2791);var t="Container_container__VVOCq",a=r(184),c=function(n){var e=n.children;return(0,a.jsx)("div",{className:t,children:e})}},2639:function(n,e,r){r.d(e,{a:function(){return o}});r(2791);var t=r(8402),a="Loader_loaderWrapper__6ypwD",c=r(184),o=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(t.NB,{margin:"0 auto",visible:!0,height:"100",width:"100",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#ff2045","#8a6a90","#b6000c","#ff93b7","#671332"]})})}},3042:function(n){n.exports="data:image/png;base64,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"},168:function(n,e,r){function t(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}r.d(e,{Z:function(){return t}})}}]);
//# sourceMappingURL=273.dde12276.chunk.js.map