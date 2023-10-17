"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[147],{147:function(A,E,n){n.r(E),n.d(E,{default:function(){return h}});var t,e=n(861),s=n(439),C=n(757),B=n.n(C),I=n(791),g=n(689),a=n(243),r=n(168),c=n(867).ZP.ul(t||(t=(0,r.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),Q=n(14),i=n(184),h=function(){var A=(0,I.useState)([]),E=(0,s.Z)(A,2),n=E[0],t=E[1],C=(0,g.UO)().movieId;return(0,I.useEffect)((function(){if(C){var A=new AbortController,E=function(){var E=(0,e.Z)(B().mark((function E(){var n,e;return B().wrap((function(E){for(;;)switch(E.prev=E.next){case 0:return E.prev=0,E.next=3,(0,a.X)("/movie/".concat(C,"/credits"),A);case 3:n=E.sent,e=n.cast,t(e),E.next=11;break;case 8:E.prev=8,E.t0=E.catch(0),"ERR_CANCELED"!==E.t0.code&&Q.ZP.error("Ooops... Something went wrong.");case 11:case"end":return E.stop()}}),E,null,[[0,8]])})));return function(){return E.apply(this,arguments)}}();return E(),function(){return A.abort()}}}),[C]),n.length>0?(0,i.jsx)(c,{children:n.map((function(A){var E=A.name,n=A.id,t=A.profile_path;return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w200".concat(t):"data:image/jpeg;base64,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",alt:"actor",width:200,height:300}),(0,i.jsx)("p",{children:E})]},n)}))}):(0,i.jsx)("p",{children:"There is no cast information for this movie."})}},243:function(A,E,n){n.d(E,{X:function(){return B}});var t=n(861),e=n(757),s=n.n(e),C=n(924);C.Z.defaults.baseURL="https://api.themoviedb.org/3",C.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWE2YjI4NDE4NjQ2MzJjM2IxNWU2ZDRlODMyMDY0ZCIsInN1YiI6IjY1MjdhMWUxY2I2ZGI1MDBhZGJlYjZlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Y4zTyHAohqZ-iIa2fc9-B-O64-kHEDM1rctk5tnotg";var B=function(){var A=(0,t.Z)(s().mark((function A(E,n){var t;return s().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,C.Z.get(E,{signal:n.signal});case 2:return t=A.sent,A.abrupt("return",t.data);case 4:case"end":return A.stop()}}),A)})));return function(E,n){return A.apply(this,arguments)}}()}}]);
//# sourceMappingURL=147.a377c5d1.chunk.js.map