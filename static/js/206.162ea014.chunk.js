"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[206],{770:function(t,e,n){n.d(e,{Eb:function(){return l},Hu:function(){return f},Pg:function(){return p},Ph:function(){return d},pH:function(){return o}});var r=n(861),a=n(757),c=n.n(a),u=n(243),i="https://api.themoviedb.org/3/",s="9000566cda5073c05dca2ec073eeeb0d",o=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/trending/movie/week?api_key=").concat(s));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"search/movie?api_key=").concat(s,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},206:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(861),a=n(439),c=n(757),u=n.n(c),i=n(791),s=n(770),o=n(87),p=n(796),l=n(184),f=function(t){var e=t.movies;return(0,l.jsx)("div",{children:(0,l.jsx)("ul",{className:p.Z["card-list"],children:e.map((function(t){return(0,l.jsx)(o.rU,{className:p.Z["card-item"],to:"/movies/".concat(t.id),children:(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/"+t.poster_path,alt:t.title}),(0,l.jsx)("h3",{className:p.Z["card-title"],children:t.title})]})},t.id)}))})})},d="Home_home-title__hqB8s",v=function(){var t=(0,i.useState)(null),e=(0,a.Z)(t,2),n=e[0],c=e[1],o=(0,i.useState)(!1),p=(0,a.Z)(o,2),v=p[0],h=p[1],m=(0,i.useState)(null),x=(0,a.Z)(m,2),g=x[0],_=x[1];(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,h(!0),t.next=4,(0,s.pH)();case 4:e=t.sent,c(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),_(t.t0.message);case 11:return t.prev=11,h(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]);var k=Array.isArray(n)&&n.length;return(0,l.jsxs)("main",{children:[(0,l.jsx)("div",{className:d,children:(0,l.jsx)("h1",{children:"TRENDING TODAY"})}),k&&(0,l.jsx)(f,{movies:n}),v&&(0,l.jsx)("div",{children:"Loading.."}),g&&(0,l.jsx)("p",{children:g})]})}},796:function(t,e){e.Z={"card-list":"MovieList_card-list__f6TLz","card-item":"MovieList_card-item__b4RxG","card-title":"MovieList_card-title__ZHvv-"}}}]);
//# sourceMappingURL=206.162ea014.chunk.js.map