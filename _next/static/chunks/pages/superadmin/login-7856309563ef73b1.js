(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8943],{17903:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/superadmin/login",function(){return t(28188)}])},84846:function(n,e,t){"use strict";t.d(e,{Z:function(){return b}});var r=t(34051),i=t.n(r),o=t(85893),a=t(67294),c=t(11163),u=t(63835),s=t(47426),l=t(11057),p=t(87357),g=t(61903),d=t(20719),f=t(15861),m=t(94229),v={container:{width:"100%",display:"grid",minHeight:"50vh",placeItems:"center"},loginContainer:{width:{xs:"100%",sm:"400px"},display:"flex",flexDirection:"column",textAlign:"center",padding:function(n){return n.spacing(1)},"& .MuiTextField-root, button":{marginTop:function(n){return n.spacing(2)}},"& h5":{marginBottom:function(n){return n.spacing(2)}},"& svg":{fontSize:"45px",margin:"auto",marginBottom:"8px"}},btnContainer:{display:"flex",gap:3,"& button":{flexGrow:1}}};var x=function(n){var e=n.loading,t=n.hasUser,r=n.state,i=n.loginTitle,a=n.onInputChange,c=n.onInputClick,u=n.onBtnClick;return(0,o.jsxs)("div",{children:[e&&(0,o.jsx)(d.Z,{}),!e&&!t&&(0,o.jsx)(p.Z,{sx:v.container,id:"bacap-login",children:(0,o.jsxs)(p.Z,{component:"form",noValidate:!0,autoComplete:"off",sx:v.loginContainer,children:["Superadmin"===i&&(0,o.jsx)(m.Z,{color:"primary",size:"large"}),(0,o.jsxs)(f.Z,{variant:"h5",children:["ACAP ",(0,o.jsx)("br",{}),i||"Admin"," Login"]}),(0,o.jsx)(g.Z,{error:""!==r.error,id:"email",label:"Enter email",variant:"outlined",value:r.email,onChange:a,onClick:c}),(0,o.jsx)(g.Z,{error:""!==r.error,id:"password",label:"Enter password",type:"password",variant:"outlined",value:r.password,onChange:a,onClick:c,helperText:r.error}),(0,o.jsx)(l.Z,{variant:"contained",size:"large",onClick:u,children:"Log in"})]})})]})};function h(n,e,t,r,i,o,a){try{var c=n[o](a),u=c.value}catch(s){return void t(s)}c.done?e(u):Promise.resolve(u).then(r,i)}function j(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function a(n){h(o,r,i,a,c,"next",n)}function c(n){h(o,r,i,a,c,"throw",n)}a(void 0)}))}}function w(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function y(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){w(n,e,t[e])}))}return n}var C={email:"",password:"",error:""};var b=function(n){var e=n.accLevel,t=void 0===e?2:e,r=n.loginTitle,l=void 0===r?"":r,p=(0,a.useState)(C),g=p[0],d=p[1],f=(0,u.aC)(),m=(0,c.useRouter)();(0,a.useEffect)((function(){if(f.user&&!f.loading&&""===f.error){var n=t===s.DW.ADMIN?"/admin":"/superadmin";f.user.accountlevel===t?m.push(n):(f.logOut(),d((function(n){return y({},n,{error:"Unauthorized account level."})})))}}),[f,t,m]),(0,a.useEffect)((function(){""!==f.error&&d((function(n){return y({},n,{error:f.error})}))}),[f.error]);var v=function(){var n=j(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.signIn({email:g.email,password:g.password});case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),d((function(e){return y({},e,{error:(0,u.Z)(n.t0.message)})}));case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=j(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.logOut();case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,o.jsx)(x,{loading:f.loading,hasUser:f.user,state:g,loginTitle:l,onInputChange:function(n){var e=n.target,t=e.id,r=e.value;d((function(n){return y({},n,w({},t,r))})),""!==g.error&&d(y({},g,{error:""}))},onInputClick:function(n){d((function(e){var t;return y({},e,(w(t={},n.target.id,""),w(t,"error",""),t))}))},onBtnClick:v,onBtnLogoutClick:h})}},43370:function(n,e,t){"use strict";var r=t(85893),i=t(9008);e.Z=function(n){var e=n.title,t=n.ogDescription,o=n.ogImageURL,a=n.ogImgAlt,c=void 0===a?"Picture":a,u=n.ogSiteName,s=void 0===u?"ACAP-BICOL":u,l=n.ogURL;return(0,r.jsxs)(i.default,{children:[(0,r.jsx)("meta",{name:"description",content:t}),(0,r.jsx)("meta",{name:"og:description",content:t}),(0,r.jsx)("meta",{property:"og:title",content:e}),(0,r.jsx)("meta",{property:"og:site_name",content:s}),(0,r.jsx)("meta",{property:"og:image",content:o}),(0,r.jsx)("meta",{property:"og:image:width",content:"600"}),(0,r.jsx)("meta",{property:"og:image:height",content:"315"}),(0,r.jsx)("meta",{property:"og:image:alt",content:c}),(0,r.jsx)("meta",{property:"og:url",content:l}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:e}),(0,r.jsx)("meta",{name:"twitter:image",content:o}),(0,r.jsx)("title",{children:e})]})}},20719:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var r=t(85893),i=t(87357),o=t(98456),a=t(15861),c={container:{width:"100%",backgroundColor:"#fff",minHeight:"50vh",display:"grid",placeItems:"center"},loading:{display:"flex",justifyContent:"center",alignItems:"center"}};var u=function(){return(0,r.jsx)(i.Z,{sx:c.container,children:(0,r.jsxs)(i.Z,{sx:c.loading,children:[(0,r.jsx)(a.Z,{variant:"subtitle1",children:"Loading..."}),(0,r.jsx)(o.Z,{size:"32px"})]})})}},28188:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return c}});var r=t(85893),i=t(47426),o=t(84846),a=t(43370);var c=!0;e.default=function(n){var e=n.media;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{title:"Agro-Climatic Advisory Portal - Bicol (ACAP-BICOL) Superadmin Login",ogDescription:e.description,ogImageURL:e.url,ogURL:e.path}),(0,r.jsx)(o.Z,{loginTitle:"Superadmin",accLevel:i.DW.SUPERADMIN})]})}}},function(n){n.O(0,[5778,9564,9964,9522,1903,9476,9774,2888,179],(function(){return e=17903,n(n.s=e);var e}));var e=n.O();_N_E=e}]);