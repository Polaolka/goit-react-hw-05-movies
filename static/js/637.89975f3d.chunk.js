"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[637],{637:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(3433),a=n(5861),c=n(9439),o=n(7757),s=n.n(o),i=n(2791),u=n(2639),l=n(1087),p="FilmGalleryItem_galleryItem__RuyWm",d="FilmGalleryItem_galleryImage__tuGbO",f="FilmGalleryItem_galleryInfo__WFg7t",v=n(184),g=function(e){var t=e.backdrop_path,n=e.original_title,r=e.id,a=e.popularity,c=e.release_date;return(0,v.jsxs)(l.rU,{to:"/movies/".concat(r),className:p,id:r,children:[(0,v.jsx)("img",{className:d,src:"https://image.tmdb.org/t/p/w500".concat(t),alt:n,"data-modal":t,"data-tags":n}),(0,v.jsxs)("div",{className:f,children:[(0,v.jsx)("h3",{children:n}),(0,v.jsxs)("div",{children:["release date: ",c]}),(0,v.jsxs)("div",{children:["Popularity: ",a]})]})]})},h="Gallery_container__W9wzU",m="Gallery_gallery__RNraJ",_=function(e){var t=e.movies;return(0,v.jsx)("div",{className:h,children:(0,v.jsx)("div",{className:m,children:t&&t.map((function(e){var t=e.id,n=e.backdrop_path,r=e.original_title,a=e.popularity,c=e.release_date;return(0,v.jsx)(g,{release_date:c,id:t,backdrop_path:n,target:"_blank",rel:"noreferrer noopener",original_title:r,popularity:a},"".concat(t))}))})})},y=n(1819),x=n(7596),w="LoadMoreBtn_loadMoreBtn__EJd7v",b=function(e){var t=e.onloadMore;return(0,v.jsx)("button",{className:w,type:"button",onClick:t,children:"Load more"})},k=function(){var e=(0,i.useState)(!1),t=(0,c.Z)(e,2),n=t[0],o=t[1],l=(0,i.useState)(1),p=(0,c.Z)(l,2),d=p[0],f=p[1],g=(0,i.useState)(0),h=(0,c.Z)(g,2),m=h[0],w=h[1],k=(0,i.useState)([]),Z=(0,c.Z)(k,2),j=Z[0],N=Z[1];(0,i.useEffect)((function(){function e(){return(e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.wr)(d);case 2:t=e.sent,console.log(t),N(1===d?function(e){return(0,r.Z)(t.movies)}:function(e){return[].concat((0,r.Z)(e),(0,r.Z)(t.movies))}),w(t.totalPage),o(!1),w(t.totalPage),d===t.totalPage&&t.totalPage>1&&(0,x.Am)("this is the last page");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o(!0),function(){e.apply(this,arguments)}()}),[d]);return(0,v.jsxs)("div",{children:[m>0&&(0,v.jsx)(_,{movies:j}),n&&(0,v.jsx)(u.a,{}),m>0&&d<m&&(0,v.jsx)(b,{onloadMore:function(){f((function(e){return e+1}))}})]})}},1819:function(e,t,n){n.d(t,{BG:function(){return g},Hx:function(){return m},Kd:function(){return y},Pv:function(){return f},wr:function(){return p}});var r=n(5861),a=n(7757),c=n.n(a),o=n(1243),s="f907ec6f235cb6bab9021d7ee76a1e81",i="https://api.themoviedb.org/3/trending/movie/week",u="https://api.themoviedb.org/3/movie/",l="https://api.themoviedb.org/3/search/movie";function p(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n,r,a,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"?api_key=").concat(s,"&page=").concat(t),e.prev=1,e.next=4,o.Z.get("".concat(n));case 4:return r=e.sent,a=r.data.results,u=r.data.total_pages,e.abrupt("return",{movies:a,totalPage:u});case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(l,"?api_key=").concat(s,"&query=").concat(t,"&language=en-US"),e.prev=1,e.next=4,o.Z.get("".concat(n));case 4:return r=e.sent,a=r.data.results,e.abrupt("return",{movies:a});case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function g(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(u).concat(t,"?api_key=").concat(s,"&language=en-US"),e.prev=1,e.next=4,o.Z.get("".concat(n));case 4:return r=e.sent,a=r.data,e.abrupt("return",{movie:a});case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function m(e){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(u).concat(t,"/reviews?api_key=").concat(s,"&language=en-US"),e.prev=1,e.next=4,o.Z.get("".concat(n));case 4:return r=e.sent,a=r.data.results,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function y(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(u).concat(t,"/credits?api_key=").concat(s,"&language=en-US"),e.prev=1,e.next=4,o.Z.get("".concat(n));case 4:return r=e.sent,a=r.data.cast,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}},2639:function(e,t,n){n.d(t,{a:function(){return o}});n(2791);var r=n(8402),a="Loader_loaderWrapper__6ypwD",c=n(184),o=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(r.NB,{margin:"0 auto",visible:!0,height:"100",width:"100",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#b8c480","#B2A3B5","#F4442E","#51E5FF","#429EA6"]})})}}}]);
//# sourceMappingURL=637.89975f3d.chunk.js.map