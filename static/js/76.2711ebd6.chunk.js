"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{1819:function(e,t,n){n.d(t,{BG:function(){return v},Hx:function(){return m},Kd:function(){return w},Pv:function(){return h},wr:function(){return l}});var r=n(5861),a=n(7757),c=n.n(a),s=n(1243),o="f907ec6f235cb6bab9021d7ee76a1e81",u="https://api.themoviedb.org/3/trending/movie/week",i="https://api.themoviedb.org/3/movie/",p="https://api.themoviedb.org/3/search/movie";function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n,r,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(u,"?api_key=").concat(o,"&page=").concat(t),e.prev=1,e.next=4,s.Z.get("".concat(n));case 4:return r=e.sent,a=r.data.results,i=r.data.total_pages,e.abrupt("return",{movies:a,totalPage:i});case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"?api_key=").concat(o,"&query=").concat(t,"&language=en-US"),e.prev=1,e.next=4,s.Z.get("".concat(n));case 4:return r=e.sent,a=r.data.results,e.abrupt("return",{movies:a});case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i).concat(t,"?api_key=").concat(o,"&language=en-US"),e.prev=1,e.next=4,s.Z.get("".concat(n));case 4:return r=e.sent,a=r.data,e.abrupt("return",{movie:a});case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function m(e){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i).concat(t,"/reviews?api_key=").concat(o,"&language=en-US"),e.prev=1,e.next=4,s.Z.get("".concat(n));case 4:return r=e.sent,a=r.data.results,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function w(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i).concat(t,"/credits?api_key=").concat(o,"&language=en-US"),e.prev=1,e.next=4,s.Z.get("".concat(n));case 4:return r=e.sent,a=r.data.cast,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}},8076:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(5861),a=n(9439),c=n(7757),s=n.n(c),o=n(2791),u=n(7689),i=n(2639),p=n(1819),l=n(5700),f="Cast_galleryItem__W8lgK",h="Cast_actorName__XabVA",d="Cast_galleryImage__CUn-1",v="Cast_galleryInfo__uBcpY",g="Cast_galleryWrapper__kFLv3",m=n(4379),_=n(184),w=function(){var e=(0,u.UO)().movieId,t=(0,o.useState)(!0),n=(0,a.Z)(t,2),c=n[0],w=n[1],x=(0,o.useState)(null),y=(0,a.Z)(x,2),b=y[0],k=y[1];return(0,o.useEffect)((function(){function t(){return(t=(0,r.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.Kd)(e);case 2:n=t.sent,k(n),w(!1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),c?(0,_.jsx)(i.a,{}):(0,_.jsx)(l.W,{children:(0,_.jsx)("ul",{className:g,children:b.map((function(e){return console.log(e.profile_path),(0,_.jsxs)("li",{className:f,children:[(0,_.jsx)("img",{className:d,src:null!==e.profile_path?"https://image.tmdb.org/t/p/w200".concat(e.profile_path):m,alt:e.original_name}),(0,_.jsxs)("div",{className:v,children:[(0,_.jsx)("div",{className:h,children:e.original_name}),(0,_.jsx)("div",{children:e.character})]})]},"".concat(e.credit_id))}))})})}},5700:function(e,t,n){n.d(t,{W:function(){return c}});n(2791);var r="Container_container__VVOCq",a=n(184),c=function(e){var t=e.children;return(0,a.jsx)("div",{className:r,children:t})}},2639:function(e,t,n){n.d(t,{a:function(){return s}});n(2791);var r=n(8402),a="Loader_loaderWrapper__6ypwD",c=n(184),s=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(r.NB,{margin:"0 auto",visible:!0,height:"100",width:"100",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#b8c480","#B2A3B5","#F4442E","#51E5FF","#429EA6"]})})}},4379:function(e,t,n){e.exports=n.p+"static/media/UserSymbol.0fede5a569a03d19b275.png"}}]);
//# sourceMappingURL=76.2711ebd6.chunk.js.map