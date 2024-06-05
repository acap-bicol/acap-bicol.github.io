"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1050],{95243:function(n,e,r){var t=r(34051),i=r.n(t),o=r(85893),a=r(67294),s=r(11163),l=r(63835),c=r(47426);function u(n,e,r,t,i,o,a){try{var s=n[o](a),l=s.value}catch(c){return void r(c)}s.done?e(l):Promise.resolve(l).then(t,i)}function d(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}e.Z=function(n){var e=function(e){var r=(0,l.aC)(),t=(0,s.useRouter)();(0,a.useEffect)((function(){if(!r.loading&&!r.user){var n=t.pathname.includes("/superadmin")?"/superadmin/login":"/admin/login";t.push(n)}r.user&&(r.user.accountlevel===c.DW.ADMIN&&t.pathname.includes("/superadmin")&&t.push("/unauthorized"),r.user.accountlevel===c.DW.SUPERADMIN&&t.pathname.includes("/admin")&&t.push("/unauthorized"))}),[r.user,r.loading,t]);var p=function(){var n,e=(n=i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.logOut();case 3:n.next=7;break;case 5:n.prev=5,n.t0=n.catch(0);case 7:case"end":return n.stop()}}),n,null,[[0,5]])})),function(){var e=this,r=arguments;return new Promise((function(t,i){var o=n.apply(e,r);function a(n){u(o,t,i,a,s,"next",n)}function s(n){u(o,t,i,a,s,"throw",n)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();return(0,o.jsx)(n,function(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){d(n,e,r[e])}))}return n}({},e,{loading:r.loading,user:r.user,onBtnLogoutClick:p}))};return e.customLayout=!0,e.adminPage=!0,e}},66383:function(n,e,r){r.d(e,{Z:function(){return J}});var t=r(85893),i=r(87357),o=r(67294),a=r(42293),s=r(66720),l=r(27948),c=r(67720),u=r(77533),d=r(93946),p=r(78462),x=r(48885),f=r(59334),m=r(98619),h=r(10155),g=r(15861),y=r(41664),b=r(11163),j=r(47426),v=r(97520),Z=r(9662),k=r(326),w=r(93384),S=r(79903),C=r(11898),A=r(94229),P=r(7427),M=r(24617),I=r(4602),D=[{text:"Get Started",link:"/admin",icon:(0,t.jsx)(w.Z,{})},{text:"Crop Recommendations",link:"/admin/bulletins/crops",icon:(0,t.jsx)(C.Z,{})},{text:"SMS Management",link:"/admin/sms",icon:(0,t.jsx)(S.Z,{})},{text:"Cropping Calendars",link:"/admin/cropping-calendars",icon:(0,t.jsx)(M.Z,{})},{text:"Manage Recommendations",link:"/admin/manage-recommendations",icon:(0,t.jsx)(I.Z,{})},{text:"ACAP Settings",link:"/admin/weather",icon:(0,t.jsx)(A.Z,{})}],O=[{text:"Profile",link:"/admin/profile",icon:(0,t.jsx)(P.Z,{})}],W={admin:0,crops:1,weather:3,sms:2,profile:4,create:1,view:1,viewSMS:2},L=r(16851),N=[{text:"Get Started",link:"/superadmin",icon:(0,t.jsx)(w.Z,{})},{text:"Users",link:"/superadmin/users",icon:(0,t.jsx)(L.Z,{})}],z=[{text:"Profile",link:"/superadmin/profile",icon:(0,t.jsx)(P.Z,{})}],T={users:1,profile:2},E=r(41796),R={profileToolbar:{fontSize:"14px"},toolbar:{display:"flex",justifyContent:"space-between"},logout:{cursor:"pointer"},list:{padding:function(n){return n.spacing(1)},"& a":{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)"},"& .MuiListItemButton-root:hover":{backgroundColor:function(n){return n.palette.primary.light}},"& .Mui-selected":{backgroundColor:function(n){return"".concat((0,E.Fq)(n.palette.primary.light,.3)," !important")}},"& .listitembutton-styled":{py:0,minHeight:48,color:function(n){return n.palette.primary.dark},borderRadius:function(n){return n.spacing(1)},margin:function(n){return n.spacing(1)},"&:hover, &:focus":{"& .MuiTypography-root":{color:function(n){return n.palette.primary.main}}},"& a":{color:function(n){return n.palette.primary.dark}}},"& .MuiListItemIcon-root":{marginRight:"-8px"}},listitem:{"& a":{textDecoration:"none"}}};function B(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function H(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,i,o=[],a=!0,s=!1;try{for(r=r.call(n);!(a=(t=r.next()).done)&&(o.push(t.value),!e||o.length!==e);a=!0);}catch(l){s=!0,i=l}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}}(n,e)||G(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(n){return function(n){if(Array.isArray(n))return B(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||G(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(n,e){if(n){if("string"===typeof n)return B(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(n,e):void 0}}var U=280,q=[{text:"ACAP Website",link:"/",icon:(0,t.jsx)(v.Z,{})},{text:"Logout",link:"#",icon:(0,t.jsx)(Z.Z,{})}];function F(n){var e=n.window,r=H(o.useState(!1),2),v=r[0],Z=r[1],w=H(o.useState(null),2),S=w[0],C=w[1],A=(0,b.useRouter)(),P=n.user,M=n.onBtnLogoutClick,I=n.user.accountlevel===j.DW.ADMIN?D:N,L=_(n.user.accountlevel===j.DW.ADMIN?O:z).concat(_(q)),E=I.length||0;o.useEffect((function(){var e=A.route.substring(A.route.lastIndexOf("/")+1,A.route.length),r=n.user.accountlevel===j.DW.ADMIN?W:T;C(r[e]?r[e]:0)}),[n.user.accountlevel,A.route]);var B=function(){Z(!v)},G=(0,t.jsxs)("div",{children:[(0,t.jsx)(h.Z,{}),(0,t.jsx)(c.Z,{}),(0,t.jsx)(p.Z,{sx:R.list,disablePadding:!0,children:I.map((function(n,e){return(0,t.jsx)(y.default,{href:n.link,passHref:!0,children:(0,t.jsxs)(m.Z,{className:"listitembutton-styled",selected:S===e,children:[(0,t.jsx)(x.Z,{sx:{color:"inherit"},children:n.icon}),(0,t.jsx)(f.Z,{primaryTypographyProps:{fontSize:14,fontWeight:"medium"},children:(0,t.jsx)("a",{href:n.link,children:n.text})})]},n.label)},e)}))}),(0,t.jsx)(c.Z,{}),(0,t.jsx)(p.Z,{sx:R.list,children:L.map((function(n,e){return"Logout"===n.text?(0,t.jsx)(y.default,{href:n.link,passHref:!0,children:(0,t.jsxs)(m.Z,{className:"listitembutton-styled",selected:S===e+E,onClick:M,children:[(0,t.jsx)(x.Z,{sx:{color:"inherit"},children:n.icon}),(0,t.jsx)(f.Z,{primary:n.text,primaryTypographyProps:{fontSize:14,fontWeight:"medium"}})]})},e):(0,t.jsx)(y.default,{href:n.link,passHref:!0,children:(0,t.jsxs)(m.Z,{className:"listitembutton-styled",selected:S===e+E,children:[(0,t.jsx)(x.Z,{sx:{color:"inherit"},children:n.icon}),(0,t.jsx)(f.Z,{primaryTypographyProps:{fontSize:14,fontWeight:"medium"},children:(0,t.jsx)("a",{href:n.link,children:n.text})})]})},e)}))})]}),F=void 0!==e?function(){return e().document.body}:void 0;return(0,t.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,t.jsx)(s.ZP,{}),(0,t.jsx)(a.Z,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(U,"px)")},ml:{sm:"".concat(U,"px")}},children:(0,t.jsxs)(h.Z,{sx:R.toolbar,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(d.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:B,sx:{mr:2,display:{sm:"none"}},children:(0,t.jsx)(k.Z,{})}),(0,t.jsx)(g.Z,{variant:"h6",noWrap:!0,component:"div",children:"ACAP Admin"})]}),(0,t.jsxs)(i.Z,{sx:R.profileToolbar,children:["Welcome, ",P.email,"!"]})]})}),(0,t.jsxs)(i.Z,{component:"nav",sx:{width:{sm:U},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[(0,t.jsx)(u.ZP,{container:F,variant:"temporary",open:v,onClose:B,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:U}},children:G}),(0,t.jsx)(u.ZP,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:U,boxShadow:"0px 0px 20px rgb(1 41 112 / 10%)",color:"#444444",border:"none",backgroundColor:"#fff"}},open:!0,children:G})]}),(0,t.jsxs)(i.Z,{component:"main",sx:{flexGrow:1,padding:{xs:"16px 0 0 0",sm:"24px 24px 24px 24px"},width:{sm:"calc(100% - ".concat(U,"px)")}},children:[(0,t.jsx)(h.Z,{}),(0,t.jsx)(l.Z,{maxWidth:"lg",children:n.children})]})]})}var $=r(20719);var J=function(n){return(0,t.jsxs)(i.Z,{sx:{marginTop:function(n){return n.spacing(4)}},children:[n.loading&&(0,t.jsx)($.Z,{}),!n.loading&&n.user&&n.user.accountlevel===n.accLevel&&(0,t.jsx)(F,{user:n.user,onBtnLogoutClick:n.onBtnLogoutClick,children:n.children})]})}},20719:function(n,e,r){r.d(e,{Z:function(){return l}});var t=r(85893),i=r(87357),o=r(98456),a=r(15861),s={container:{width:"100%",backgroundColor:"#fff",minHeight:"50vh",display:"grid",placeItems:"center"},loading:{display:"flex",justifyContent:"center",alignItems:"center"}};var l=function(){return(0,t.jsx)(i.Z,{sx:s.container,children:(0,t.jsxs)(i.Z,{sx:s.loading,children:[(0,t.jsx)(a.Z,{variant:"subtitle1",children:"Loading..."}),(0,t.jsx)(o.Z,{size:"32px"})]})})}}}]);