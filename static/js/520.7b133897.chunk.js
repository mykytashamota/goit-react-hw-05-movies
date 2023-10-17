"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[520],{146:function(A,n,r){r.d(n,{Z:function(){return p}});var e,t,a,o=r(689),i=r(87),s=r(168),u=r(867),c=u.ZP.ul(e||(e=(0,s.Z)(["\n  margin-top: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n"]))),f=u.ZP.li(t||(t=(0,s.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n  &:hover {\n    color: #3d7bfb;\n  }\n"]))),j=u.ZP.p(a||(a=(0,s.Z)(["\n  max-width: 300px;\n"]))),b=r(28),h=r(184),p=function(A){var n=A.movies,r=(0,o.TH)();return(0,h.jsx)(c,{children:n.map((function(A){var n=A.id,e=A.title,t=A.poster_path;return(0,h.jsx)(f,{children:(0,h.jsxs)(i.rU,{to:r.pathname.includes("/movies")?"".concat(n):"/movies/".concat(n),state:{from:r},children:[(0,h.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w300".concat(t):b,alt:"poster",width:300,height:450}),(0,h.jsx)(j,{children:e})]})},n)}))})}},520:function(A,n,r){r.r(n),r.d(n,{default:function(){return I}});var e,t,a,o=r(861),i=r(439),s=r(757),u=r.n(s),c=r(791),f=r(87),j=r(243),b=r(146),h=r(168),p=r(867),d=p.ZP.form(e||(e=(0,h.Z)(["\n  display: flex;\n"]))),g=p.ZP.input(t||(t=(0,h.Z)(["\n  max-width: 190px;\n  padding: 7px;\n  border: none;\n  border-radius: 4px;\n  border: 1px solid #056bfa27;\n  outline: none;\n  color: dimgray;\n"]))),Q=p.ZP.button(a||(a=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px 10px 8px 10px;\n  gap: 8px;\n  margin-left: 10px;\n  height: 40px;\n  width: 100px;\n  border: none;\n  border-radius: 4px;\n  background: #056bfa27;\n  cursor: pointer;\n\n  &:hover {\n    background: #056bfa49;\n  }\n"]))),l=r(184),x=function(A){var n=A.onSearchSubmit,r=(0,c.useState)(""),e=(0,i.Z)(r,2),t=e[0],a=e[1];return(0,l.jsxs)(d,{onSubmit:function(A){A.preventDefault(),n(A),A.currentTarget.reset()},children:[(0,l.jsx)(g,{placeholder:"Type movie name",type:"text",value:t,name:"movieName",onChange:function(A){return a(A.target.value)},required:!0}),(0,l.jsx)(Q,{type:"submit",children:"Search"})]})},N=r(14),I=function(){var A,n=(0,c.useState)([]),r=(0,i.Z)(n,2),e=r[0],t=r[1],a=(0,f.lr)(),s=(0,i.Z)(a,2),h=s[0],p=s[1],d=null!==(A=h.get("query"))&&void 0!==A?A:"";(0,c.useEffect)((function(){if(""!==d){var A=new AbortController,n=function(){var n=(0,o.Z)(u().mark((function n(){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,j.X)("/search/movie?query=".concat(d),A);case 3:r=n.sent,e=r.results,t(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),"ERR_CANCELED"!==n.t0.code&&N.ZP.error("Ooops... Something went wrong.");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){return A.abort()}}}),[d]);return(0,l.jsxs)("div",{children:[(0,l.jsx)(x,{onSearchSubmit:function(A){var n=A.currentTarget;p({query:n.elements.movieName.value})}}),e.length>0&&(0,l.jsx)(b.Z,{movies:e})]})}},243:function(A,n,r){r.d(n,{X:function(){return i}});var e=r(861),t=r(757),a=r.n(t),o=r(924);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWE2YjI4NDE4NjQ2MzJjM2IxNWU2ZDRlODMyMDY0ZCIsInN1YiI6IjY1MjdhMWUxY2I2ZGI1MDBhZGJlYjZlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Y4zTyHAohqZ-iIa2fc9-B-O64-kHEDM1rctk5tnotg";var i=function(){var A=(0,e.Z)(a().mark((function A(n,r){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,o.Z.get(n,{signal:r.signal});case 2:return e=A.sent,A.abrupt("return",e.data);case 4:case"end":return A.stop()}}),A)})));return function(n,r){return A.apply(this,arguments)}}()},28:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=520.7b133897.chunk.js.map