"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{906:function(e,n,t){var r=t(87),a=t(184);n.Z=function(e){var n=e.movies;return(0,a.jsx)("main",{children:(0,a.jsx)("ul",{children:n.map((function(e){return(0,a.jsx)("div",{children:(0,a.jsx)(r.rU,{to:"/movies/".concat(e.id),children:(0,a.jsxs)("li",{children:[(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/"+e.poster_path,alt:e.title}),(0,a.jsx)("p",{children:e.title})]})})},e.id)}))})})}},770:function(e,n,t){t.d(n,{Eb:function(){return f},Hu:function(){return l},Pg:function(){return p},Ph:function(){return v},pH:function(){return o}});var r=t(861),a=t(757),c=t.n(a),u=t(243),s="https://api.themoviedb.org/3/",i="9000566cda5073c05dca2ec073eeeb0d",o=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"/trending/movie/week?api_key=").concat(i));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"movie/").concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(s,"search/movie?api_key=").concat(i,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},415:function(e,n,t){t.r(n);var r=t(861),a=t(439),c=t(757),u=t.n(c),s=t(791),i=t(770),o=t(906),p=t(184);n.default=function(){var e=(0,s.useState)(null),n=(0,a.Z)(e,2),t=n[0],c=n[1],f=(0,s.useState)(!1),l=(0,a.Z)(f,2),v=l[0],d=l[1],h=(0,s.useState)(null),m=(0,a.Z)(h,2),x=m[0],g=m[1];(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,(0,i.pH)();case 4:n=e.sent,c(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),g(e.t0.message);case 11:return e.prev=11,d(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var k=Array.isArray(t)&&t.length;return(0,p.jsxs)("main",{children:[(0,p.jsx)("ul",{children:k&&(0,p.jsx)(o.Z,{movies:t})}),v&&(0,p.jsx)("div",{children:"Loading.."}),x&&(0,p.jsx)("p",{children:x})]})}}}]);
//# sourceMappingURL=415.eb8d0ac2.chunk.js.map