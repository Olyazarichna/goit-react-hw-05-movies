"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[163],{163:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var i=n(885),s=n(791),r="MoviesForm_form__UV2JT",a="MoviesForm_formInput__VJLtu",o="MoviesForm_btnForm__uANOi",c=n(184),l=function(e){var t=e.onSubmit,n=(0,s.useState)(""),l=(0,i.Z)(n,2),m=l[0],u=l[1];return(0,c.jsx)("div",{children:(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==m.trim()?(t(m),u("")):alert("Please, enter movie you want to find.")},className:r,children:[(0,c.jsx)("input",{type:"text",placeholder:"Search movie",name:"search",value:m,onChange:function(e){u(e.target.value)},className:a}),(0,c.jsx)("button",{type:"submit",className:o,children:(0,c.jsx)("span",{children:"Search"})})]})})},m=n(501),u=n(969),_=n(871),h={listItem:"MovieList_listItem__vOVoz",movieTitle:"MovieList_movieTitle__RhENm",link:"MovieList_link__+cn-g"},v=function(e){var t=e.search,n=(0,_.TH)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{className:h.list,children:t.map((function(e){var t=e.id,i=e.title;return(0,c.jsx)("li",{className:h.listItem,children:(0,c.jsx)(m.rU,{to:"".concat(t),state:{from:n},className:h.link,children:(0,c.jsx)("p",{className:h.movieTitle,children:i})})},t)}))})})},f=function(){var e=(0,m.lr)(),t=(0,i.Z)(e,2),n=t[0],r=t[1],a=n.get("name"),o=(0,s.useState)([]),_=(0,i.Z)(o,2),h=_[0],f=_[1];return(0,s.useEffect)((function(){a&&u.t_(a).then(f)}),[a]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l,{onSubmit:function(e){r({name:e})}}),(0,c.jsx)(v,{search:h})]})}}}]);
//# sourceMappingURL=163.38334c04.chunk.js.map