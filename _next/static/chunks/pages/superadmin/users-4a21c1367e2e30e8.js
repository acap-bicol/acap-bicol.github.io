(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2254],{67070:function(e,n,t){"use strict";t(67294);var r=t(88169),a=t(85893);n.Z=(0,r.Z)((0,a.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},56686:function(e,n,t){"use strict";t(67294);var r=t(88169),a=t(85893);n.Z=(0,r.Z)((0,a.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},42176:function(e,n,t){"use strict";t.d(n,{D:function(){return m}});var r=t(87462),a=t(63366),i=t(67294),o=t(86010),l=t(11496),s=t(27192),c=t(73490),u=t(48836),d=t(85893);const p=["className","children"],f=(0,l.ZP)("div",{name:"MuiDataGrid",slot:"ToolbarContainer",overridesResolver:(e,n)=>n.toolbarContainer})((({theme:e})=>({display:"flex",alignItems:"center",padding:e.spacing(.5,.5,0)}))),m=i.forwardRef((function(e,n){const{className:t,children:i}=e,l=(0,a.Z)(e,p),m=(e=>{const{classes:n}=e;return(0,s.Z)({root:["toolbarContainer"]},c.d,n)})({classes:(0,u.B)().classes});return i?(0,d.jsx)(f,(0,r.Z)({ref:n,className:(0,o.Z)(t,m.root)},l,{children:i})):null}))},6132:function(e,n,t){"use strict";t.d(n,{S:function(){return f}});var r=t(87462),a=t(63366),i=t(67294),o=t(14696),l=t(10269),s=t(27476),c=t(49630),u=t(48836),d=t(85893);const p=["onClick"],f=i.forwardRef((function(e,n){var t;const{onClick:i}=e,f=(0,a.Z)(e,p),m=(0,c.l)(),v=(0,u.B)(),{open:b,openedPanelValue:h}=(0,o.P)(m,l.e);return v.disableColumnSelector?null:(0,d.jsx)(v.components.BaseButton,(0,r.Z)({ref:n,size:"small",color:"primary","aria-label":m.current.getLocaleText("toolbarColumnsLabel"),startIcon:(0,d.jsx)(v.components.ColumnSelectorIcon,{})},f,{onClick:e=>{b&&h===s.y.columns?m.current.hidePreferences():m.current.showPreferences(s.y.columns),null==i||i(e)}},null==(t=v.componentsProps)?void 0:t.baseButton,{children:m.current.getLocaleText("toolbarColumns")}))}))},50853:function(e,n,t){"use strict";t.d(n,{M:function(){return w}});var r=t(87462),a=t(63366),i=t(67294),o=t(11496),l=t(27192),s=t(88082),c=t(98216),u=t(90198),d=t(14696),p=t(61207),f=t(10269),m=t(27476),v=t(49630),b=t(48836),h=t(73490),g=t(85893);const x=["componentsProps"],y=(0,o.ZP)("ul",{name:"MuiDataGrid",slot:"ToolbarFilterList",overridesResolver:(e,n)=>n.toolbarFilterList})((({theme:e})=>({margin:e.spacing(1,1,.5),padding:e.spacing(0,1)}))),w=i.forwardRef((function(e,n){var t,o;const{componentsProps:w={}}=e,T=(0,a.Z)(e,x),E=w.button||{},C=(0,v.l)(),j=(0,b.B)(),k=(0,d.P)(C,p.DY),S=(0,d.P)(C,u.WH),Z=(0,d.P)(C,f.e),P=(e=>{const{classes:n}=e;return(0,l.Z)({root:["toolbarFilterList"]},h.d,n)})({classes:j.classes}),L=i.useMemo((()=>{if(Z.open)return C.current.getLocaleText("toolbarFiltersTooltipHide");if(0===k.length)return C.current.getLocaleText("toolbarFiltersTooltipShow");const e=e=>S[e.columnField].filterOperators.find((n=>n.value===e.operatorValue)).label||C.current.getLocaleText(`filterOperator${(0,c.Z)(e.operatorValue)}`).toString();return(0,g.jsxs)("div",{children:[C.current.getLocaleText("toolbarFiltersTooltipActive")(k.length),(0,g.jsx)(y,{className:P.root,children:k.map(((n,t)=>(0,r.Z)({},S[n.columnField]&&(0,g.jsx)("li",{children:`${S[n.columnField].headerName||n.columnField}\n                  ${e(n)}\n                  ${n.value}`},t))))})]})}),[C,Z.open,k,S,P]);return j.disableColumnFilter?null:(0,g.jsx)(j.components.BaseTooltip,(0,r.Z)({title:L,enterDelay:1e3},T,null==(t=j.componentsProps)?void 0:t.baseTooltip,{children:(0,g.jsx)(j.components.BaseButton,(0,r.Z)({ref:n,size:"small",color:"primary","aria-label":C.current.getLocaleText("toolbarFiltersLabel"),startIcon:(0,g.jsx)(s.Z,{badgeContent:k.length,color:"primary",children:(0,g.jsx)(j.components.OpenFilterButtonIcon,{})})},E,{onClick:e=>{var n;const{open:t,openedPanelValue:r}=Z;t&&r===m.y.filters?C.current.hideFilterPanel():C.current.showFilterPanel(),null==(n=E.onClick)||n.call(E,e)}},null==(o=j.componentsProps)?void 0:o.baseButton,{children:C.current.getLocaleText("toolbarFilters")}))}))}))},53052:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/superadmin/users",function(){return t(201)}])},201:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return se}});var r=t(34051),a=t.n(r),i=t(85893),o=t(45697),l=t.n(o),s=t(67294),c=t(47426),u=t(24633);function d(e,n,t,r,a,i,o){try{var l=e[i](o),s=l.value}catch(c){return void t(c)}l.done?n(s):Promise.resolve(s).then(r,a)}function p(){var e=(0,s.useState)(null),n=e[0],t=e[1],r=(0,s.useState)(!0),i=r[0],o=r[1],l=(0,s.useState)(""),c=l[0],p=l[1];return(0,s.useEffect)((function(){var e=function(){var e,n=(e=a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Rf)();case 3:n=e.sent,o(!1),t(n.data),e.next=14;break;case 8:e.prev=8,e.t0=e.catch(0),r="",void 0!==e.t0.response&&(r=void 0!==e.t0.response.data?e.t0.response.data:""),""===r&&(r=e.t0.message),p(r);case 14:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){d(i,r,a,o,l,"next",e)}function l(e){d(i,r,a,o,l,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();e()}),[]),{users:n,loading:i,error:c}}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,t=[{key:"isValidEmail",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return/^[a-z.A-Z.0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e)&&""!==e}},{key:"isValidName",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return/[a-zA-Z0-9. ]+$/.test(e.trim())&&""!==e}},{key:"isValidPassword",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length>0}}],t&&f(n.prototype,t),r&&f(n,r),e}(),v=new m,b=v.isValidEmail.bind(v),h=v.isValidName.bind(v),g=v.isValidPassword.bind(v),x=t(95243),y=t(66383),w=t(87357),T=t(15861),E=t(19227),C=t(55688),j=t(42176),k=t(6132),S=t(50853),Z=t(3539),P=t(50480),L=t(47312),D=t(18972),I=t(18360),V=t(72852),A=t(61903),O={container:{width:"parent",display:"flex",flexDirection:"column","& .MuiTextField-root, button":{marginTop:function(e){return e.spacing(2)}}},formlabel:{fontSize:"12px",marginTop:function(e){return e.spacing(3)},marginBottom:"4px"},selectBox:{marginBottom:function(e){return e.spacing(2)}}};function B(e){var n=e.state,t=e.loadstatus,r=e.onTextChange,a=e.type,o=void 0===a?"create":a,l=e.inputValidation,s=e.handleInputClick;return(0,i.jsxs)(w.Z,{component:"form",noValidate:!0,autoComplete:"off",sx:O.container,children:["create"!==o&&(0,i.jsx)(A.Z,{id:"uid",label:"Enter UID",variant:"standard",size:"small",disabled:!0,value:n.uid}),(0,i.jsx)(A.Z,{id:"email",label:"Enter email",variant:"standard",size:"small",error:""!==l.email,helperText:""!==l.email?l.email:"",disabled:t.isLoading,value:n.email,onChange:r,onClick:s}),(0,i.jsx)(A.Z,{id:"displayname",label:"Enter display name",variant:"standard",size:"small",error:""!==l.displayname,helperText:""!==l.displayname?l.displayname:"",disabled:t.isLoading,value:n.displayname,onChange:r,onClick:s}),(0,i.jsx)(A.Z,{id:"password",label:"Enter password",type:"password",placeholder:"create"===n.mode?"Enter password":"Password will not be updated if left blank",variant:"standard",size:"small",error:""!==l.password&&"create"===o,helperText:""!==l.password&&"create"===o?l.password:"",disabled:t.isLoading,value:n.password,onChange:r,onClick:s}),(0,i.jsx)(L.Z,{sx:O.formlabel,id:"accountlevel-label",children:"Account Type"}),(0,i.jsxs)(I.Z,{labelId:"accountlevel-label",id:"account_level",size:"small",sx:O.selectBox,disabled:t.isLoading,value:n.account_level,onChange:r,children:[(0,i.jsx)(D.Z,{value:1,size:"small",children:"Superadmin"}),(0,i.jsx)(D.Z,{value:2,size:"small",children:"Admin"})]}),(0,i.jsx)(P.Z,{control:(0,i.jsx)(V.Z,{checked:n.disabled,disabled:t.isLoading,id:"disabled",name:"disabled",onChange:r}),label:"Account Disabled"}),(0,i.jsx)(P.Z,{control:(0,i.jsx)(V.Z,{checked:n.emailverified,disabled:t.isLoading,id:"emailverified",name:"emailverified",onChange:r}),label:"Email Verified"})]})}B.propTypes={state:l().object,loadstatus:l().object,onTextChange:l().func,type:l().string,inputValidation:l().object,handleInputClick:l().func};var _=B,N={container:{width:"parent"},infoRow:{width:"parent",display:"flex",justifyContent:"space-between",fontSize:"14px",alignItems:"center",padding:"12px",borderBottom:"1px solid #f0f0f0","& div:first-child":{color:"#a0a0a0"},"& div:last-child":{color:"#000"}}},R={email:"Email",displayName:"Display Name",acclevel:"Acc. Type",emailVerified:"Email Verified",disabled:"Acc. Disabled",last_signin:"Last Signin"};function U(e){var n=e.userinfo;return(0,i.jsx)(w.Z,{children:Object.keys(R).map((function(e){return(0,i.jsxs)(w.Z,{sx:N.infoRow,children:[(0,i.jsx)("div",{children:R[e]}),(0,i.jsx)("div",{children:n[e].toString()})]},e)}))})}U.propTypes={userinfo:l().object};var F=U,z={gridContainer:{marginTop:"24px",minHeight:500}},M={datagrid:{background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"8px","& .MuiDataGrid-main":{borderRadius:2},"& .MuiDataGrid-virtualScrollerRenderZone":{"& .MuiDataGrid-row":{"&:nth-of-type(2n)":{backgroundColor:"rgba(235, 235, 235, .7)"}}},"& .MuiDataGrid-columnHeader:focus-within":{outline:"none !important"},"& .MuiDataGrid-columnHeaders":{color:function(e){return e.palette.primary.dark},fontSize:16}}};function H(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){H(e,n,t[n])}))}return e}function G(e){return(0,i.jsxs)(j.D,W({},e,{children:[(0,i.jsx)(k.S,{}),(0,i.jsx)(S.M,{})]}))}var $,K={CREATE:0,VIEW:1,EDIT:2,DELETE:3},X=(H($={},K.CREATE,{windowTitle:"Create a New User",buttonText:"Create User",yesBtnText:"Save"}),H($,K.VIEW,{windowTitle:"User Information",buttonText:"View",yesBtnText:"Edit"}),H($,K.EDIT,{windowTitle:"Update User Information",buttonText:"Edit",yesBtnText:"Update"}),H($,K.DELETE,{windowTitle:"User Information",buttonText:"Delete",yesBtnText:"Delete"}),$);function q(e){var n=e.state,t=e.loadstatus,r=e.loadingusers,a=e.rows,o=e.columns,l=e.onTextChange,c=e.onEditStart,u=e.handleCreateUser,d=e.handleDeleteUser,p=e.handleUpdateUser,f=e.handleInputClick,m=e.inputValidation,v=e.usersLoadingError,b=(0,s.useState)({}),h=b[0],g=b[1],x=(0,s.useState)(!1),y=x[0],j=x[1],k=(0,s.useState)(K.CREATE),S=k[0],P=k[1];return(0,i.jsxs)("div",{children:[(0,i.jsx)(T.Z,{variant:"h5",children:"Users Management"}),(0,i.jsx)("p",{children:"Manage admin user accounts"}),(0,i.jsx)("br",{}),(0,i.jsx)(E.Z,{isOpen:t.dialogOpen&&[K.CREATE,K.DELETE].includes(S)||y&&[K.VIEW,K.EDIT].includes(S),maxWidth:"xs",openButtonText:"Create User",title:X[S].windowTitle,confirmBtnText:X[S].yesBtnText,extraBtnText:S===K.VIEW?X[K.DELETE].buttonText:"",loading:t.isLoading,colorTheme:"secondary",modalConfirmHandlerCB:function(){switch(S){case K.CREATE:u();break;case K.VIEW:P(K.EDIT);break;case K.EDIT:p(),P(K.CREATE)}},modalCancelHandlerCB:function(){f(),j(!1)},modalOpenHandlerCB:function(){P(K.CREATE),j(!0)},modalExtraHandlerCB:function(){P(K.DELETE),d(h.uid,h.email)},children:S===K.CREATE||S===K.EDIT?(0,i.jsx)(_,{state:n,loadstatus:t,onTextChange:l,inputValidation:m,handleInputClick:f,type:"create"}):(0,i.jsx)(F,{userinfo:h})}),(0,i.jsx)(w.Z,{sx:z.gridContainer,style:{height:a.length<=4?"500px":"unset"},children:(0,i.jsx)(Z._,{rows:a,columns:o,sx:M.datagrid,rowHeight:48,autoHeight:a.length>=5,disableDensitySelector:!0,rowsPerPageOptions:[15,30,100],error:""!==v?v:null,components:{Toolbar:G},loading:r,initialState:{columns:{columnVisibilityModel:{rowId:!1}},pagination:{pageSize:12}},onRowClick:function(e){var n=W({},e.row);n.account_level="Admin"===n.acclevel?2:1,n.displayname=n.displayName,n.emailverified=n.emailVerified,c(n.uid,"edit"),g(n),P(K.VIEW),j(!0)}})}),(""!==t.error||""!==t.message)&&(0,i.jsx)(C.Z,{openSnackbar:!0,message:""!==t.error?t.error:t.message,severity:""!==t.error?"error":"success"})]})}q.propTypes={state:l().object,loadstatus:l().object,onTextChange:l().func,onEditStart:l().func,handleCreateUser:l().func,handleDeleteUser:l().func,handleUpdateUser:l().func,handleInputClick:l().func,inputValidation:l().object,usersLoadingError:l().string};var Y=q;function J(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Q(e,n,t,r,a,i,o){try{var l=e[i](o),s=l.value}catch(c){return void t(c)}l.done?n(s):Promise.resolve(s).then(r,a)}function ee(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){Q(i,r,a,o,l,"next",e)}function l(e){Q(i,r,a,o,l,"throw",e)}o(void 0)}))}}function ne(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function te(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ne(e,n,t[n])}))}return e}function re(e){return function(e){if(Array.isArray(e))return J(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return J(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return J(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ae={email:"",displayname:"",password:"",account_level:2,disabled:!1,emailverified:!0,mode:"create"},ie={isLoading:!1,dialogOpen:!1,error:"",message:""},oe={email:"",displayname:"",password:"",account_level:"",disabled:"",emailverified:""};function le(e){var n=(0,s.useState)(ae),t=n[0],r=n[1],o=(0,s.useState)(ie),l=o[0],d=o[1],f=(0,s.useState)(oe),m=f[0],v=f[1],x=(0,s.useState)([]),w=x[0],T=x[1],E=p(),C=E.users,j=E.loading,k=E.error,S=(0,s.useState)([]),Z=S[0],P=S[1],L=(0,s.useState)([]),D=L[0],I=L[1];(0,s.useEffect)((function(){null!==C&&T((function(e){return C.users}))}),[C]),(0,s.useEffect)((function(){if(w.length>0){var e={email:{label:"Email",width:280},displayName:{label:"Display Name",width:200},acclevel:{label:"Acc. Type",width:120},emailVerified:{label:"Email Verified",width:125},disabled:{label:"Acc. Disabled",width:120},last_signin:{label:"Last Signin",width:250}},n=["email","displayName","acclevel","emailVerified","disabled","last_signin"].reduce((function(n,t,r){return n.push({field:t,headerName:e[t].label,width:e[t].width,align:r>1?"center":"left",headerAlign:r>1?"center":"left",editable:!1,sortable:!1,disableColumnMenu:!0,renderCell:function(e){return(0,i.jsx)("div",{style:{fontSize:"last_signin"===t?"13px":"14px"},children:e.value.toString()})}}),n}),[]),t=w.filter((function(e){return void 0!==e.customClaims})).map((function(e,n){return{id:n,uid:e.uid,email:e.email,displayName:e.displayName,acclevel:1===e.customClaims.account_level?"Superadmin":"Admin",emailVerified:e.emailVerified,disabled:e.disabled,date_created:e.metadata.creationTime,last_signin:e.metadata.lastSignInTime?e.metadata.lastSignInTime:"-"}}));P(t),I(n)}}),[w]);var V=function(e){var n=Object.keys(ae).reduce((function(n,t){return n[t]=e[t],n}),{});if(null!==n)return n.uid=e.uid,n.account_level=e.customClaims.account_level,n.displayname=e.displayName,n.emailverified=e.emailVerified,n.password="",n},A=function(){d(te({},ie,{dialogOpen:!0,isLoading:!0}))},O=function(e){var n=e.message,t=void 0===n?"":n,a=e.error,i=void 0===a?"":a;d((function(e){return te({},ie,{message:t,error:i})})),r((function(e){return te({},ae)}))},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"create",n=0,r={};return b(t.email)||(r.email="Please check your email input.",n+=1),h(t.displayname)||(r.displayname="Please check your display name.",n+=1),"create"===e&&(g(t.password)||(r.password="Please check your password input.",n+=1)),v(te({},m,r)),0===n},_=function(){var e=ee(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B("create")){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,A(),e.next=6,(0,u.r4)(t);case 6:return e.next=8,(0,u.Rf)();case 8:n=e.sent.data,T(n.users),O({message:"User successfully ".concat(t.email," created!")}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),O({error:e.t0.response?e.t0.response.data:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=ee(a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A(),e.next=4,(0,u.h8)(n);case 4:return e.next=6,(0,u.Rf)();case 6:r=e.sent.data,T(r.users),O({message:"Successfully deleted user ".concat(t,"!")}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),O({error:e.t0.response?e.t0.response.data:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n,t){return e.apply(this,arguments)}}(),R=function(){var e=ee(a().mark((function e(){var n,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B("edit")){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,A(),e.next=6,(0,u.Nq)(t);case 6:return e.next=8,(0,u.PR)({uid:t.uid,email:t.email});case 8:n=e.sent,r=w.findIndex((function(e){return e.uid===n.uid})),r>=0&&((i=re(w))[r]=n,T(i)),O({message:"Successfully updated ".concat(t.email,"'s details!")}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),O({error:e.t0.response?e.t0.response.data:e.t0.message});case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}();return(0,i.jsx)(y.Z,{loading:e.loading,user:e.user,onBtnLogoutClick:e.onBtnLogoutClick,accLevel:c.DW.SUPERADMIN,children:(0,i.jsx)(Y,{state:t,loadstatus:l,loadingusers:j,rows:Z,columns:D,onTextChange:function(e){var n=e.target,a=n.id,i=n.value,o=n.checked,s=void 0!==a?a:"account_level";["emailverified","disabled"].includes(s)&&(i=o),r(te({},t,ne({},s,i))),(""!==l.error||""!==l.message||Object.keys(m).filter((function(e){return""!==m[e]})).length>0)&&(d(ie),v(oe))},onEditStart:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"create",t=w.find((function(n){return n.uid===e})),a=V(t);a=te({},a,{mode:n}),r(a)},handleCreateUser:_,handleDeleteUser:N,handleUpdateUser:R,handleInputClick:function(e){if(e){var n=e.target.id;r(te({},t,ne({},n,"")))}else r(ae),d(ie);v(oe)},inputValidation:m,usersLoadingError:k})})}le.propTypes={loading:l().bool,user:l().object,onBtnLogoutClick:l().func,accLevel:l().number};var se=(0,x.Z)(le)}},function(e){e.O(0,[5778,9564,9964,9522,1903,6279,542,7944,6295,1433,3539,1050,4730,9774,2888,179],(function(){return n=53052,e(e.s=n);var n}));var n=e.O();_N_E=n}]);