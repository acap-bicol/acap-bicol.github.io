(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5740],{28359:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/sms",function(){return t(39314)}])},38554:function(e,n){"use strict";n.Z={button:{color:"#FFFFFF",textTransform:"capitalize",fontSize:"14px",fontStyle:"normal",fontWeight:"normal",width:"80px",height:{xs:"40px",sm:"48px"}},container:{padding:"24px",width:"100%",position:"relative",minWidth:"0px",overflowWrap:"break-word",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"16px",margin:"auto",borderColor:"#E2E8F0"},tabsContainer:{marginTop:function(e){return e.spacing(8)},border:function(e){return"1px solid ".concat(e.palette.bacap.border)},minHeight:"800px",borderRadius:"8px",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},customizedButtonLink:{cursor:"pointer",color:"#8BC24A",textDecoration:"underline",fontWeight:600}}},55688:function(e,n,t){"use strict";var r=t(85893),i=t(67294),a=t(45697),o=t.n(a),c=t(14866),s=t(46901);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var u=i.forwardRef((function(e,n){return(0,r.jsx)(s.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){l(e,n,t[n])}))}return e}({elevation:6,ref:n,variant:"filled"},e))}));function d(e){var n=e.openSnackbar,t=e.message,a=e.severity,o=e.closeHandlerCB,s=void 0===o?function(){}:o,l=(0,i.useState)(n),d=l[0],p=l[1];(0,i.useEffect)((function(){p(n)}),[n]);var f=function(){p(!1),s()};return(0,r.jsx)(c.Z,{open:d,autoHideDuration:3e3,onClose:f,children:(0,r.jsx)(u,{onClose:f,severity:a,sx:{width:"100%"},children:t})})}d.propTypes={openSnackbar:o().bool,message:o().string,severity:o().string},n.Z=d},31338:function(e,n,t){"use strict";t.d(n,{x:function(){return c},P:function(){return s}});var r=t(85893),i=t(87357);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=function(e){var n=e.children,t=e.value,c=e.index,s=o(e,["children","value","index"]);return(0,r.jsx)("div",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({role:"tabpanel",hidden:t!==c,id:"custom-tabpanel-".concat(c),"aria-labelledby":"custom-tab-".concat(c)},s,{children:t===c&&(0,r.jsx)(i.Z,{sx:{p:3},children:n})}))};var s=function(e){return{id:"custom-tab-".concat(e),"aria-controls":"custom-tabpanel-".concat(e)}}},39314:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return xe}});var r=t(34051),i=t.n(r),a=t(85893),o=t(95243),c=t(67294),s=t(15861),l=t(87357),u=t(88409),d=t(40044),p=t(86886),f=t(31338),h=t(11057),m=t(61903),x=t(78462),v=t(97212),b=t(98619),y=t(59334),j=t(27948),g={phonebookContainer:{border:function(e){return"1px solid ".concat(e.palette.bacap.border)},minHeight:"500px",maxHeight:"500px",borderRadius:"8px",background:"#fafafa",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",overflow:"auto"},searchPhonebookTextField:{width:"170px",margin:1,background:"#FFFFFF",position:"absolute",zIndex:1},contactInformationItem:{display:"flex",alignItems:"baseline"}},C=t(96486),S=t.n(C),Z=t(50657),E=t(37645),O=t(6514),w=t(58951),k=t(31425),R=t(98456),T=t(47312),_=t(18972),P=t(94054),A=t(18360),N=/^09[0-9]{9}$/g,I="Cell number is required.";function D(e,n){var t=e.find((function(e){return e.cellnumber===n}));return Boolean(t)}var M=function(e,n,t,r){if(null!==t){if(""===t)return"ERROR_MISSING_CELLNUMBER";if(function(e){return!e.match(N)}(t))return"ERROR_INVALID_FORMAT_CELLNUMBER";if("EDIT"===e){if(r&&t!==r)return D(n,t)?"ERROR_CONTACT_ALREADY_EXIST":""}else{if("ADD"!==e)return"";if(D(n,t))return"ERROR_CONTACT_ALREADY_EXIST"}}},L=function(e){switch(e){case"ERROR_MISSING_CELLNUMBER":case"ERROR_MISSING_CELLNUMBER":return I;case"ERROR_INVALID_FORMAT_CELLNUMBER":return"Invalid cell number format.";case"ERROR_CONTACT_ALREADY_EXIST":return"Cell number already exists in the conact list.";default:return""}};var B=function(e){var n,t,r=e.contacts,i=e.open,o=e.handleClose,s=e.handleAddContact,u=e.loadingButton,d=e.regions,p=e.province,f=e.setProvince,x=e.municipality,v=e.setMunicipality,b=(0,c.useState)(""),y=b[0],j=b[1],C=(0,c.useState)(null),S=C[0],N=C[1],I=(0,c.useState)(""),D=I[0],B=I[1],F=(0,c.useState)([]),z=F[0],W=F[1],q=(0,c.useState)(u),H=q[0],U=q[1],G=Object.keys(d);return(0,c.useEffect)((function(){U(u)}),[u]),(0,c.useEffect)((function(){Boolean(p)&&W(d[p])}),[p,d]),(0,a.jsxs)(Z.Z,{fullWidth:!0,maxWidth:"xs",open:i,onClose:o,children:[(0,a.jsx)(E.Z,{children:"Add Contact"}),(0,a.jsxs)(O.Z,{children:[(0,a.jsxs)(l.Z,{sx:g.contactInformationItem,children:[(0,a.jsx)(l.Z,{sx:{mr:9},children:(0,a.jsx)(w.Z,{children:"Name:"})}),(0,a.jsx)(m.Z,{id:"outlined-basic",variant:"standard",size:"small",onChange:function(e){j(e.target.value)}})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(l.Z,{sx:g.contactInformationItem,children:[(0,a.jsx)(l.Z,{sx:{mr:3},children:(0,a.jsx)(w.Z,{children:"Cell Number:"})}),(0,a.jsx)(m.Z,{error:(null===(n=M("ADD",r,S,null))||void 0===n?void 0:n.length)>0,helperText:L(M("ADD",r,S)),id:"outlined-basic",variant:"standard",size:"small",onChange:function(e){N(e.target.value)},type:"tel"})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(l.Z,{sx:g.contactInformationItem,children:[(0,a.jsx)(l.Z,{sx:{mr:5},children:(0,a.jsx)(w.Z,{children:"Nickname:"})}),(0,a.jsx)(m.Z,{id:"outlined-basic",variant:"standard",size:"small",onChange:function(e){B(e.target.value)}})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(P.Z,{variant:"standard",fullWidth:!0,children:[(0,a.jsx)(T.Z,{id:"demo-simple-select-label",children:"Select Province"}),(0,a.jsx)(A.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:p,label:"Province",onChange:function(e){f(e.target.value),v("")},children:G.map((function(e){return(0,a.jsx)(_.Z,{value:e,children:e},e)}))})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsxs)(P.Z,{variant:"standard",fullWidth:!0,children:[(0,a.jsx)(T.Z,{id:"demo-simple-select-label",children:"Select Municipality"}),(0,a.jsx)(A.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:x,label:"Municipality",onChange:function(e){v(e.target.value)},disabled:!Boolean(p),children:z.map((function(e){return(0,a.jsx)(_.Z,{value:e,children:e},e)}))})]})]}),(0,a.jsxs)(k.Z,{children:[(0,a.jsx)(h.Z,{disabled:H,size:"small",onClick:o,children:"CANCEL"}),(0,a.jsxs)(h.Z,{disabled:(null===(t=M("ADD",r,S))||void 0===t?void 0:t.length)>0||null===S||""===p.length||""===x.length||!(D.length>0&&D.length<=5)||H,size:"small",variant:"contained",onClick:function(){s({name:y,cellnumber:S,nickname:D,province:p,municipality:x}),j(""),N(null),f(""),v(""),o()},children:[(0,a.jsx)("span",{style:{display:H?"none":"block"},children:"SAVE"}),(0,a.jsx)(R.Z,{size:24,color:"secondary",sx:{display:H?"block":"none"}})]})]})]})};var F=function(e){var n,t,r=e.loadingButton,i=e.open,o=e.contact,s=e.contacts,u=e.handleClose,d=e.handleDeleteContact,p=e.handleEditContact,f=e.regions,x=(0,c.useState)(!1),v=x[0],b=x[1],y=(0,c.useState)(o.name),j=y[0],C=y[1],S=(0,c.useState)(o.cellnumber),N=S[0],I=S[1],D=(0,c.useState)(o.nickname),B=D[0],F=D[1],z=(0,c.useState)(o.province),W=z[0],q=z[1],H=(0,c.useState)(o.municipality),U=H[0],G=H[1],Y=(0,c.useState)([]),K=Y[0],V=Y[1],X=(0,c.useState)(r),J=X[0],$=X[1],Q=Object.keys(f);return(0,c.useEffect)((function(){V(f[W])}),[W,f]),(0,c.useEffect)((function(){C(o.name),I(o.cellnumber),F(o.nickname),q(o.province),G(o.municipality)}),[o]),(0,c.useEffect)((function(){$(r)}),[r]),(0,a.jsxs)(Z.Z,{fullWidth:!0,maxWidth:"xs",open:i,onClose:u,children:[(0,a.jsx)(E.Z,{children:"Contact Details"}),(0,a.jsxs)(O.Z,{children:[(0,a.jsxs)(l.Z,{sx:g.contactInformationItem,children:[(0,a.jsx)(l.Z,{sx:{mr:9},children:(0,a.jsx)(w.Z,{children:"Name:"})}),(0,a.jsx)(m.Z,{disabled:!v,id:"outlined-basic",onChange:function(e){C(e.target.value)},value:j,variant:"standard",size:"small"})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(l.Z,{sx:g.contactInformationItem,children:[(0,a.jsx)(l.Z,{sx:{mr:3},children:(0,a.jsx)(w.Z,{children:"Cell Number:"})}),(0,a.jsx)(m.Z,{error:(null===(n=M("EDIT",s,N,o.cellnumber))||void 0===n?void 0:n.length)>0,helperText:L(M("EDIT",s,N,o.cellnumber)),onChange:function(e){I(e.target.value)},disabled:!v,id:"outlined-basic",value:N,variant:"standard",size:"small",type:"tel"})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(l.Z,{sx:g.contactInformationItem,children:[(0,a.jsx)(l.Z,{sx:{mr:5},children:(0,a.jsx)(w.Z,{children:"Nickname:"})}),(0,a.jsx)(m.Z,{disabled:!v,id:"outlined-basic",onChange:function(e){F(e.target.value)},value:B,variant:"standard",size:"small"})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(P.Z,{variant:"standard",fullWidth:!0,children:[(0,a.jsx)(T.Z,{id:"demo-simple-select-label",children:"Select Province"}),(0,a.jsx)(A.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:W,label:"Province",onChange:function(e){q(e.target.value),G("")},disabled:!v,children:Q.map((function(e){return(0,a.jsx)(_.Z,{value:e,children:e},e)}))})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsxs)(P.Z,{variant:"standard",fullWidth:!0,children:[(0,a.jsx)(T.Z,{id:"demo-simple-select-label",children:"Select Municipality"}),(0,a.jsx)(A.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:U,label:"Municipality",onChange:function(e){G(e.target.value)},disabled:!v||!Boolean(W),children:K.map((function(e){return(0,a.jsx)(_.Z,{value:e,children:e},e)}))})]})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(k.Z,{children:[v?(0,a.jsxs)(h.Z,{disabled:(null===(t=M("EDIT",s,N,o.cellnumber))||void 0===t?void 0:t.length)>0||J,size:"small",variant:"outlined",onClick:function(){return p({id:o.id,name:j,cellnumber:N,nickname:B,province:W,municipality:U})},children:[(0,a.jsx)("span",{style:{display:J?"none":"block"},children:"SAVE"}),(0,a.jsx)(R.Z,{size:24,color:"secondary",sx:{display:J?"block":"none"}})]}):(0,a.jsx)(h.Z,{disabled:J,size:"small",variant:"outlined",onClick:function(){b(!0),I(o.cellnumber)},children:"EDIT"}),v?(0,a.jsx)(h.Z,{disabled:J,size:"small",variant:"outlined",onClick:function(){C(o.name),I(o.cellnumber),q(o.province),G(o.municipality),b(!1)},children:"CANCEL"}):(0,a.jsxs)(h.Z,{disabled:J,size:"small",color:"error",variant:"outlined",onClick:function(){return d(o)},children:[(0,a.jsx)("span",{style:{display:J?"none":"block"},children:"DELETE"}),(0,a.jsx)(R.Z,{size:24,color:"secondary",sx:{display:J?"block":"none"}})]}),(0,a.jsx)(h.Z,{disabled:J,size:"small",onClick:u,children:"CLOSE"})]})]})},z=t(55688);var W=function(e){var n=e.handleAddContact,t=e.handleDeleteContact,r=e.handleEditContact,i=e.loading,o=e.loadingButton,s=e.open,u=e.originalContacts,d=e.setOpen,p=e.regions,f=e.province,C=e.setProvince,Z=e.municipality,E=e.setMunicipality,O=(0,c.useState)(null),w=O[0],k=O[1],R=(0,c.useState)(u),T=R[0],_=R[1],P=(0,c.useState)(!1),A=P[0],N=P[1],I=(0,c.useState)(""),D=I[0],M=I[1],L=(0,c.useState)(!1),W=L[0],q=L[1],H=(0,c.useState)(!1),U=H[0],G=H[1],Y=(0,c.useState)({}),K=Y[0],V=Y[1];return(0,c.useEffect)((function(){_(u)}),[u]),(0,a.jsxs)("div",{children:[U&&Object.entries(K).length>0&&(0,a.jsx)(z.Z,{openSnackbar:!0,message:K.message,severity:K.severity}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.Z,{variant:"contained",color:"primary",onClick:function(){q(!0),C(""),E("")},children:"ADD CONTACT"}),(0,a.jsx)(B,{contacts:u,open:W,handleClose:function(){q(!1)},handleAddContact:n,loadingButton:o,regions:p,province:f,setProvince:C,municipality:Z,setMunicipality:E})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{children:i?"Updating List...":(0,a.jsxs)(l.Z,{sx:g.phonebookContainer,children:[(0,a.jsx)(l.Z,{sx:g.searchPhonebookTextField,children:(0,a.jsx)(m.Z,{id:"outlined-basic",label:"Search...",onChange:function(e){var n=e.target.value;M(n);var t,r,i=isNaN(n);if(N(i),""===e.target.value)_(u);else{var a=(t=T,r=n,S().filter(t,S().flow(S().identity,S().values,S().join,S().toLower,S().partialRight(S().includes,r))));_(a)}},variant:"outlined",size:"small",style:{width:"100%"}})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(x.Z,{children:(null===T||void 0===T?void 0:T.length)>0?T.map((function(e){var n="checkbox-list-label-".concat(e.cellnumber);return(0,a.jsx)(v.ZP,{disablePadding:!0,children:(0,a.jsx)(b.Z,{role:void 0,dense:!0,onClick:function(){return function(e){G(!1),V({}),d(!0),k(e)}(e)},children:(0,a.jsx)(y.Z,{id:n,primary:""===e.name?e.cellnumber:e.name,secondary:""!==D&&!A&&""!==e.name&&e.cellnumber})})},e.cellnumber)})):(0,a.jsx)(j.Z,{children:(0,a.jsx)("p",{children:"No Results"})})}),w&&(0,a.jsx)(F,{contact:w,contacts:T,handleClose:function(){d(!1),k(null)},handleDeleteContact:t,handleEditContact:r,loadingButton:o,open:s,regions:p})]})})]})},q=t(9473),H=t(24343),U=t(27392);var G=function(e){var n=e.columns,t=e.loadingReports,r=e.rows,i=e.handleReportTypeChange,o=(0,c.useState)(U.Ry.SEASONAL),s=o[0],l=o[1],u=(0,q.v9)((function(e){return e.dashboard.reportType}));return(0,c.useEffect)((function(){l(u)}),[u]),(0,a.jsxs)("div",{children:[n.length>0&&(0,a.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:"10px"},children:(0,a.jsxs)(P.Z,{sx:{m:1,width:{xs:"100%",sm:"100%",md:300}},size:"small",children:[(0,a.jsx)(T.Z,{id:"report-type",children:"Bulletin Type"}),(0,a.jsxs)(A.Z,{labelId:"report-type",id:"report-type",value:s,label:"Bulletin Type",onChange:i,children:[(0,a.jsx)(_.Z,{value:U.Ry.SEASONAL,children:"Seasonal Crop Recommendations"}),(0,a.jsx)(_.Z,{value:U.Ry.TEN_DAY,children:"10-Day Crop Recommendations"}),(0,a.jsx)(_.Z,{value:U.Ry.SPECIAL_WEATHER,children:"Special Weather Recommendations"})]})]})}),(0,a.jsx)("div",{style:{height:400,width:"100%"},children:(0,a.jsx)(H._,{rows:r,columns:n,loading:t,pageSize:5,rowsPerPageOptions:[5]})})]})},Y=t(38554);function K(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){K(e,n,t[n])}))}return e}var X=function(e){var n=e.columns,t=e.contacts,r=e.getContacts,i=e.handleAddContact,o=e.handleDeleteContact,h=e.handleEditContact,m=e.handleOpenAddContact,x=e.handleReportTypeChange,v=e.loading,b=e.loadingButton,y=e.loadingReports,j=e.open,g=e.rows,C=e.setOpen,S=e.toAddContact,Z=e.regions,E=e.province,O=e.setProvince,w=e.municipality,k=e.setMunicipality,R=(0,c.useState)(S?1:0),T=R[0],_=R[1];return(0,a.jsxs)("div",{children:[(0,a.jsx)(s.Z,{variant:"h5",children:"SMS Management"}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"View Text (SMS) versions"})," of generated Crop Recommendations and send them to different individuals via SMS."]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Manage your own phonebook"})," for ease of sending texts to individuals."]}),(0,a.jsxs)(l.Z,{sx:Y.Z.tabsContainer,children:[(0,a.jsxs)(u.Z,{value:T,onChange:function(e,n){_(n)},"aria-label":"basic tabs example",children:[(0,a.jsx)(d.Z,V({label:"SMS"},(0,f.P)(0))),(0,a.jsx)(d.Z,V({label:"PHONEBOOK"},(0,f.P)(1)))]}),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(f.x,{value:T,index:0,children:(0,a.jsx)(G,{columns:n,handleReportTypeChange:x,loadingReports:y,rows:g})}),(0,a.jsx)(f.x,{value:T,index:1,children:(0,a.jsx)(p.ZP,{container:!0,children:(0,a.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(W,{getContacts:r,handleAddContact:i,handleDeleteContact:o,handleEditContact:h,handleOpenAddContact:m,loading:v,loadingButton:b,open:j,originalContacts:t,setOpen:C,regions:Z,province:E,setProvince:O,municipality:w,setMunicipality:k})})})})]})]})]})},J=t(66383),$=t(53063),Q=t(47426),ee=t(77715),ne=t(63835),te=t(16327),re=t(40558),ie=t(11163),ae=t(87006),oe=t(72882),ce=t(55113),se=t(7906),le=t(53184),ue=t(53816),de=t(53252),pe=t(295);function fe(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,i)}function he(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){fe(a,r,i,o,c,"next",e)}function c(e){fe(a,r,i,o,c,"throw",e)}o(void 0)}))}}function me(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var xe=(0,o.Z)((function(e){var n=e.loading,t=e.user,r=e.onBtnLogoutClick,o=(0,ne.aC)(),u=(0,ie.useRouter)(),d=(0,q.I0)(),p=(0,c.useState)([]),f=p[0],m=p[1],x=(0,c.useState)([]),v=x[0],b=x[1],y=(0,c.useState)([]),j=y[0],g=y[1],C=(0,c.useState)([]),S=C[0],w=C[1],R=(0,c.useState)(!1),T=R[0],_=R[1],P=(0,c.useState)(!1),A=P[0],N=P[1],I=(0,c.useState)({}),D=I[0],M=I[1],L=(0,c.useState)(!1),B=L[0],F=L[1],W=(0,c.useState)(!1),H=W[0],U=W[1],G=(0,c.useState)([]),Y=G[0],K=G[1],V=(0,c.useState)(!1),fe=V[0],xe=V[1],ve=(0,q.v9)((function(e){return e.dashboard.reportType})),be=(0,c.useState)([]),ye=be[0],je=be[1],ge=(0,c.useState)(""),Ce=ge[0],Se=ge[1],Ze=(0,c.useState)(""),Ee=Ze[0],Oe=Ze[1],we=function(){var e=he(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,F(!0),e.next=4,(0,re.K2)();case 4:n=e.sent,w(n),F(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),ke=function(e){var n=e.logs;return(0,a.jsx)(oe.Z,{component:ce.Z,children:(0,a.jsxs)(se.Z,{sx:{minWidth:650},"arial-label":"simple-table",children:[(0,a.jsx)(le.Z,{children:(0,a.jsxs)(ue.Z,{children:[(0,a.jsx)(de.Z,{children:"Number"}),(0,a.jsxs)(de.Z,{children:["Date\xa0",(0,a.jsx)("span",{style:{fontSize:"10px"},children:"(MM/DD/YYYY)"})]}),(0,a.jsx)(de.Z,{children:"Message"}),(0,a.jsx)(de.Z,{children:"Recipients"})]})}),(0,a.jsx)(pe.Z,{children:n.map((function(e,n){var t=JSON.parse(e),r=new Date(t.dateSent).toLocaleString();return(0,a.jsxs)(ue.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,a.jsx)(de.Z,{component:"th",scope:"row",children:n+1}),(0,a.jsx)(de.Z,{children:r}),(0,a.jsx)(de.Z,{children:t.sentMessage}),(0,a.jsx)(de.Z,{children:t.recipientsWithName||t.recipientsNumber})]},t.dateSent)}))})]})})},Re=function(e){var n=e.report;return(0,a.jsxs)(Z.Z,{fullWidth:!0,maxWidth:"md",open:H,onClose:Ie,children:[(0,a.jsx)(E.Z,{children:"SMS Recommendation Logs"}),(0,a.jsxs)(O.Z,{dividers:!0,children:[(0,a.jsx)(s.Z,{variant:"body2",children:"This is where you can check where you send your texts message."}),(0,a.jsx)("br",{}),(0,a.jsx)(ke,{logs:null===n||void 0===n?void 0:n.logs})]}),(0,a.jsx)(k.Z,{children:(0,a.jsx)(h.Z,{variant:"outlined",onClick:Ie,children:"Close"})})]})};(0,c.useEffect)((function(){if(null!==o.user&&!o.loading){var e=function(){var e=he(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,ae._8)(o.user.uid);case 3:n=e.sent,g(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e(),we()}}),[o]),(0,c.useEffect)((function(){if(j.length>0){var e=j.filter((function(e){return e.type===ve}));Te(e)}}),[j]),(0,c.useEffect)((function(){var e=function(){var e=he(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,te.ur)();case 3:n=e.sent,je(null!==(t=null===n||void 0===n?void 0:n.data)&&void 0!==t?t:[]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var Te=function(e){var n={action:"Action",logs:"Logs",crop:"Crop",text_recommendation:"Text-Form Recommendation",region:"Region",province:"Province",municipality:"Municipality",month:"Month",type:"Type",updated_by:"Updated by",date_created:"Date Created"},t=[];["action","logs","crop","text_recommendation","region","province","municipality","month","type","updated_by","date_created"].forEach((function(e){"action"===e?t.push({field:e,headerName:n[e],width:100,editable:!1,sortable:!1,disableColumnMenu:!0,renderCell:function(e){return(0,a.jsx)(h.Z,{variant:"outlined",size:"small",onClick:function(n){n.stopPropagation(),u.push({pathname:"/admin/sms/viewSMS/",query:{docId:e.row.docId}})},children:"SEND"})}}):"logs"===e?t.push({field:e,headerName:n[e],width:100,editable:!1,sortable:!1,disableColumnMenu:!0,renderCell:function(e){var n;return(null===(n=e.row.logs)||void 0===n?void 0:n.length)>0?(0,a.jsx)(h.Z,{variant:"outlined",size:"small",onClick:function(){U(!0),K(e.row)},children:"VIEW LOGS"}):(0,a.jsx)(l.Z,{sx:{fontWeight:"bold"},children:"UNSENT"})}}):t.push({field:e,headerName:n[e],width:150,editable:!1,sortable:!1,disableColumnMenu:!0})}));var r=e.map((function(e,n){var t;return me(t={id:n,docId:e.id,logs:e.logs,crop:e.crop,text_recommendation:e.smsRecommendations||"No SMS Recommendations available"},"logs",e.logs),me(t,"region",e.region),me(t,"province",e.province),me(t,"municipality",e.municipality),me(t,"month",e.month),me(t,"type",e.type),me(t,"updated_by",e.updated_by),me(t,"date_created","".concat(e.date_created.toDate().toDateString(),"\n          ").concat(e.date_created.toDate().toLocaleTimeString("it-IT",ee.W6))),t}));m(r),b(t)};(0,c.useEffect)((function(){void 0===Object.keys(u.query)[0]&&(_(!1),M({})),"isSent"===Object.keys(u.query)[0]&&(F(!1),_(!0),_e({message:"true"===u.query.isSent?"Successfully sent Crop Recommendation via text!":"Unsuccessful in sending Crop Recommendation via text.",severity:"true"===u.query.isSent?"success":"error"}))}),[u]),(0,c.useEffect)((function(){o.loading||o.user||u.push("/admin/login")}),[o.user,o.loading,u]);var _e=function(e){M(e)},Pe=function(){var e=he(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,xe(!0),e.next=4,(0,re.rE)(n);case 4:if(!e.sent){e.next=8;break}return e.next=8,we();case 8:xe(!1),_(!0),M({message:"Successfully added a New Contact!",severity:"success"}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}(),Ae=function(){var e=he(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,xe(!0),e.next=4,(0,re.GK)({docId:n.id});case 4:if(t=e.sent,N(!1),!t){e.next=9;break}return e.next=9,we();case 9:xe(!1),_(!0),M({openSnackbar:!0,message:"Successfully deleted contact: ".concat(""===n.name?n.cellnumber:n.name,"!"),severity:"success"}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),Ne=function(){var e=he(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,xe(!0),e.next=4,(0,re.mP)({docId:n.id,name:n.name,cellnumber:n.cellnumber,nickname:n.nickname,province:n.province,municipality:n.municipality});case 4:if(t=e.sent,xe(!1),N(!1),!t){e.next=10;break}return e.next=10,we();case 10:_(!0),M({openSnackbar:!0,message:"Successfully edit contact: ".concat(""===n.name?n.cellnumber:n.name,"!"),severity:"success"}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),Ie=function(){U(!1)};return(0,a.jsxs)(J.Z,{loading:n,user:t,onBtnLogoutClick:r,accLevel:Q.DW.ADMIN,children:[(0,a.jsx)(Re,{report:Y}),(0,a.jsx)(X,{columns:v,contacts:S,getContacts:we,handleAddContact:Pe,handleDeleteContact:Ae,handleEditContact:Ne,handleReportTypeChange:function(e){var n=e.target.value,t=j.filter((function(e){return e.type===n}));K(Te(t)),d((0,$.uq)(n))},loading:B,loadingReports:n,onBtnClick:r,open:A,rows:f,setOpen:N,toAddContact:u.query.toAddContact,user:o.user,loadingButton:fe,regions:ye,province:Ce,setProvince:Se,municipality:Ee,setMunicipality:Oe}),!B&&T&&(0,a.jsx)(z.Z,{openSnackbar:!0,message:D.message,severity:D.severity,closeHandler:function(){_(!1)}})]})}))},40558:function(e,n,t){"use strict";t.d(n,{rE:function(){return C},GK:function(){return S},mP:function(){return Z},K2:function(){return E}});var r=t(34051),i=t.n(r),a=t(9669),o=t.n(a),c=t(99431);function s(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,i)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){s(a,r,i,o,c,"next",e)}function c(e){s(a,r,i,o,c,"throw",e)}o(void 0)}))}}function u(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}function m(e,n){return!n||"object"!==v(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function x(e,n){return x=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},x(e,n)}var v=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function b(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=f(e);if(n){var i=f(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return m(this,t)}}var y={BASE_API_URL:"https://amia-cis-63yo.onrender.com/api",CREATE_CONTACT:"".concat("https://amia-cis-63yo.onrender.com/api","/contact"),DELETE_CONTACT:"".concat("https://amia-cis-63yo.onrender.com/api","/contact"),EDIT_CONTACT:"".concat("https://amia-cis-63yo.onrender.com/api","/contact"),GET_CONTACTS:"".concat("https://amia-cis-63yo.onrender.com/api","/contacts"),PHONEBOOK:"phonebook"},j=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&x(e,n)}(c,e);var n,t,r,a=b(c);function c(){return u(this,c),a.apply(this,arguments)}return n=c,(t=[{key:"createContact",value:function(e){var n=this;return l(i().mark((function t(){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,o()(h({},r,{url:y.CREATE_CONTACT,method:"POST"}));case 5:return a=t.sent,t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"deleteContact",value:function(e){var n=this;return l(i().mark((function t(){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,o()(h({},r,{url:y.DELETE_CONTACT,method:"DELETE"}));case 5:return a=t.sent,t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"editContact",value:function(e){var n=this;return l(i().mark((function t(){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,o()(h({},r,{url:y.EDIT_CONTACT,method:"PATCH"}));case 5:return a=t.sent,t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"getContacts",value:function(){var e=this;return l(i().mark((function n(){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.createRequestObject({});case 2:return t=n.sent,n.next=5,o()(h({},t,{url:y.GET_CONTACTS,method:"GET"}));case 5:return r=n.sent,n.abrupt("return",r.data.contacts);case 7:case"end":return n.stop()}}),n)})))()}}])&&d(n.prototype,t),r&&d(n,r),c}(c.Z),g=new j,C=g.createContact.bind(g),S=g.deleteContact.bind(g),Z=g.editContact.bind(g),E=g.getContacts.bind(g)}},function(e){e.O(0,[3662,5778,3593,9964,8858,1903,6279,542,7944,6295,1433,6572,9821,4343,1998,1050,9774,2888,179],(function(){return n=28359,e(e.s=n);var n}));var n=e.O();_N_E=n}]);