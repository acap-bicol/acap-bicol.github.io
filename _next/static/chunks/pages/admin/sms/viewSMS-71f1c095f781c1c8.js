(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8226],{94054:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var r=t(63366),o=t(87462),i=t(67294),a=t(86010),c=t(27192),s=t(33616),l=t(11496),u=t(5108),d=t(98216),f=t(71579),p=t(47167),m=t(28979);function h(e){return(0,m.Z)("MuiFormControl",e)}(0,t(76087).Z)("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);var v=t(85893);const x=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],b=(0,l.ZP)("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},n)=>(0,o.Z)({},n.root,n[`margin${(0,d.Z)(e.margin)}`],e.fullWidth&&n.fullWidth)})((({ownerState:e})=>(0,o.Z)({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},"normal"===e.margin&&{marginTop:16,marginBottom:8},"dense"===e.margin&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})));var y=i.forwardRef((function(e,n){const t=(0,s.Z)({props:e,name:"MuiFormControl"}),{children:l,className:m,color:y="primary",component:g="div",disabled:j=!1,error:S=!1,focused:w,fullWidth:Z=!1,hiddenLabel:O=!1,margin:C="none",required:T=!1,size:k="medium",variant:E="outlined"}=t,P=(0,r.Z)(t,x),R=(0,o.Z)({},t,{color:y,component:g,disabled:j,error:S,fullWidth:Z,hiddenLabel:O,margin:C,required:T,size:k,variant:E}),B=(e=>{const{classes:n,margin:t,fullWidth:r}=e,o={root:["root","none"!==t&&`margin${(0,d.Z)(t)}`,r&&"fullWidth"]};return(0,c.Z)(o,h,n)})(R),[_,F]=i.useState((()=>{let e=!1;return l&&i.Children.forEach(l,(n=>{if(!(0,f.Z)(n,["Input","Select"]))return;const t=(0,f.Z)(n,["Select"])?n.props.input:n;t&&(0,u.B7)(t.props)&&(e=!0)})),e})),[A,N]=i.useState((()=>{let e=!1;return l&&i.Children.forEach(l,(n=>{(0,f.Z)(n,["Input","Select"])&&(0,u.vd)(n.props,!0)&&(e=!0)})),e})),[W,L]=i.useState(!1);j&&W&&L(!1);const D=void 0===w||j?W:w;const M=i.useCallback((()=>{N(!0)}),[]),q={adornedStart:_,setAdornedStart:F,color:y,disabled:j,error:S,filled:A,focused:D,fullWidth:Z,hiddenLabel:O,size:k,onBlur:()=>{L(!1)},onEmpty:i.useCallback((()=>{N(!1)}),[]),onFilled:M,onFocus:()=>{L(!0)},registerEffect:undefined,required:T,variant:E};return(0,v.jsx)(p.Z.Provider,{value:q,children:(0,v.jsx)(b,(0,o.Z)({as:g,ownerState:R,className:(0,a.Z)(B.root,m),ref:n},P,{children:l}))})}))},47167:function(e,n,t){"use strict";const r=t(67294).createContext();n.Z=r},15704:function(e,n,t){"use strict";function r({props:e,states:n,muiFormControl:t}){return n.reduce(((n,r)=>(n[r]=e[r],t&&"undefined"===typeof e[r]&&(n[r]=t[r]),n)),{})}t.d(n,{Z:function(){return r}})},74423:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(67294),o=t(47167);function i(){return r.useContext(o.Z)}},40476:function(e,n,t){"use strict";var r=t(63366),o=t(87462),i=t(67294),a=t(86010),c=t(27192),s=t(15704),l=t(74423),u=t(98216),d=t(33616),f=t(11496),p=t(64748),m=t(85893);const h=["children","className","color","component","disabled","error","filled","focused","required"],v=(0,f.ZP)("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},n)=>(0,o.Z)({},n.root,"secondary"===e.color&&n.colorSecondary,e.filled&&n.filled)})((({theme:e,ownerState:n})=>(0,o.Z)({color:e.palette.text.secondary},e.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${p.Z.focused}`]:{color:e.palette[n.color].main},[`&.${p.Z.disabled}`]:{color:e.palette.text.disabled},[`&.${p.Z.error}`]:{color:e.palette.error.main}}))),x=(0,f.ZP)("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,n)=>n.asterisk})((({theme:e})=>({[`&.${p.Z.error}`]:{color:e.palette.error.main}}))),b=i.forwardRef((function(e,n){const t=(0,d.Z)({props:e,name:"MuiFormLabel"}),{children:i,className:f,component:b="label"}=t,y=(0,r.Z)(t,h),g=(0,l.Z)(),j=(0,s.Z)({props:t,muiFormControl:g,states:["color","required","focused","disabled","error","filled"]}),S=(0,o.Z)({},t,{color:j.color||"primary",component:b,disabled:j.disabled,error:j.error,filled:j.filled,focused:j.focused,required:j.required}),w=(e=>{const{classes:n,color:t,focused:r,disabled:o,error:i,filled:a,required:s}=e,l={root:["root",`color${(0,u.Z)(t)}`,o&&"disabled",i&&"error",a&&"filled",r&&"focused",s&&"required"],asterisk:["asterisk",i&&"error"]};return(0,c.Z)(l,p.M,n)})(S);return(0,m.jsxs)(v,(0,o.Z)({as:b,ownerState:S,className:(0,a.Z)(w.root,f),ref:n},y,{children:[i,j.required&&(0,m.jsxs)(x,{ownerState:S,"aria-hidden":!0,className:w.asterisk,children:["\u2009","*"]})]}))}));n.Z=b},64748:function(e,n,t){"use strict";t.d(n,{M:function(){return o}});var r=t(28979);function o(e){return(0,r.Z)("MuiFormLabel",e)}const i=(0,t(76087).Z)("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]);n.Z=i},5108:function(e,n,t){"use strict";function r(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function o(e,n=!1){return e&&(r(e.value)&&""!==e.value||n&&r(e.defaultValue)&&""!==e.defaultValue)}function i(e){return e.startAdornment}t.d(n,{vd:function(){return o},B7:function(){return i}})},5835:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/sms/viewSMS",function(){return t(64114)}])},38554:function(e,n){"use strict";n.Z={button:{color:"#FFFFFF",textTransform:"capitalize",fontSize:"14px",fontStyle:"normal",fontWeight:"normal",width:"80px",height:{xs:"40px",sm:"48px"}},container:{padding:"24px",width:"100%",position:"relative",minWidth:"0px",overflowWrap:"break-word",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"16px",margin:"auto",borderColor:"#E2E8F0"},tabsContainer:{marginTop:function(e){return e.spacing(8)},border:function(e){return"1px solid ".concat(e.palette.bacap.border)},minHeight:"800px",borderRadius:"8px",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},customizedButtonLink:{cursor:"pointer",color:"#8BC24A",textDecoration:"underline",fontWeight:600}}},37634:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(85893),o=t(25675),i=t(87357),a=t(15861),c=t(26660),s={container:{textAlign:"center",minHeight:"200px",width:"100%",border:"4px solid rgba(0, 0, 0, 0.11)",borderRadius:function(e){return e.spacing(2)},color:function(e){return e.palette.text.secondary},borderStyle:"dashed",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(4)}}};var l=function(e){var n=e.message,t=void 0===n?"Failed to load data":n,l=e.style,u=void 0===l?{}:l;return(0,r.jsxs)(i.Z,{sx:s.container,style:u,children:[(0,r.jsx)(o.default,{unoptimized:!0,src:(0,c.assetPrefixer)("images/icons/empty-state-light.svg"),height:120,width:120,loader:c.imageLoader,alt:"Empty data"}),(0,r.jsx)(a.Z,{variant:"subtitle1",children:t})]})}},16759:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(85893),o=t(87357),i=t(67720),a=t(88078),c={container:{padding:"24px",width:"100%",position:"relative",minWidth:"0px",overflowWrap:"break-word",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"16px",margin:"auto",borderColor:"#E2E8F0"},divider:{marginTop:"32px",marginBottom:"32px"},text:{marginTop:"16px",marginBottom:"16px"}};var s=function(){return(0,r.jsxs)(o.Z,{sx:c.container,children:[(0,r.jsx)(o.Z,{sx:{width:"300px"},children:[1,2,3,4,5,6,7,8].map((function(e){return(0,r.jsx)(a.Z,{variant:"text"},"up-".concat(e))}))}),(0,r.jsx)(i.Z,{sx:c.divider}),(0,r.jsx)(o.Z,{children:[1,2,3,4,5,6,7,8].map((function(e){return(0,r.jsx)(a.Z,{variant:"rectangular",sx:c.text},"down-".concat(e))}))})]})}},19227:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var r=t(85893),o=t(67294),i=t(45697),a=t.n(i),c=t(11057),s=t(19536),l=t(98456),u=t(50657),d=t(31425),f=t(37645),p=t(6514),m=t(93946),h={button:{color:"#FFFFFF",textTransform:"capitalize",fontSize:"14px",fontStyle:"normal",fontWeight:"normal",height:{xs:"40px",sm:"48px"},"& .text":{display:{xs:"block",sm:"none"}},"& .shortText":{display:{xs:"inline-block",sm:"none"},fontSize:"24px"}},icon:{display:{xs:"block",sm:"none"}},dialogContent:{"& .error":{fontSize:"12px",color:"red"}},dialogActions:{"& button":{minWidth:"100px"}},closeButton:{position:"absolute",right:"8px",top:"8px",color:function(e){return e.palette.grey[500]}}};function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){x(e,n,t[n])}))}return e}function y(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(s){c=!0,o=s}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return v(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e){var n=y(o.useState({open:null}),2),t=n[0],i=n[1],a=e.loading,v=void 0!==a&&a,x=e.isOpen,g=void 0!==x&&x,j=e.showButtons,S=void 0===j||j,w=e.maxWidth,Z=void 0===w?"sm":w,O=e.IconSVG,C=void 0===O?null:O,T=e.modalButtonStyles,k=void 0===T?{}:T,E=e.modalExtraHandlerCB,P=void 0===E?null:E,R=e.modalCancelHandlerCB,B=void 0===R?null:R,_=e.modalConfirmHandlerCB,F=void 0===_?null:_,A=e.modalOpenHandlerCB,N=void 0===A?null:A,W=e.isDisabled,L=void 0!==W&&W,D=e.openButtonText,M=void 0===D?"Click":D,q=e.title,z=void 0===q?"Window Title":q,I=e.extraBtnText,H=void 0===I?"":I,$=e.cancelBtnText,G=void 0===$?"Cancel":$,K=e.confirmBtnText,U=void 0===K?"Ok":K,V=e.contentText,X=void 0===V?"":V,Y=e.error,Q=void 0===Y?"":Y,J=e.colorTheme,ee=void 0===J?"primary":J;(0,o.useEffect)((function(){i((function(e){return b({},e,{open:g})}))}),[g]);var ne=function(){i(b({},t,{open:!1})),B&&B()};return(0,r.jsxs)("div",{children:[M&&(0,r.jsxs)(c.Z,{disabled:L,disableElevation:!0,variant:"contained",color:ee,onClick:function(){i(b({},t,{open:!0})),N&&N()},sx:b({},h.button,k),children:[C&&(0,r.jsx)(C,{sx:h.icon}),M]}),(0,r.jsxs)(u.Z,{maxWidth:Z,fullWidth:!0,open:t.open||!1,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,r.jsxs)(f.Z,{children:[(0,r.jsx)("span",{children:z}),(0,r.jsx)(m.Z,{"aria-label":"close",sx:h.closeButton,onClick:ne,disabled:v,children:(0,r.jsx)(s.Z,{})})]}),(0,r.jsxs)(p.Z,{sx:h.dialogContent,children:[""!==X&&(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:X}),(0,r.jsx)("div",{className:"error",children:Q})]}),e.children]}),S&&(0,r.jsxs)(d.Z,{sx:h.dialogActions,children:[""!==H&&(0,r.jsx)(c.Z,{onClick:P||ne,disabled:v,children:H}),(0,r.jsx)(c.Z,{onClick:B||ne,disabled:v,children:G}),(0,r.jsxs)(c.Z,{variant:"contained",disabled:v,onClick:F||ne,children:[(0,r.jsx)("span",{style:{display:v?"none":"block"},children:U}),(0,r.jsx)(l.Z,{size:24,color:"secondary",sx:{display:v?"block":"none"}})]})]})]})]})}g.propTypes={loading:a().bool,isOpen:a().bool,showButtons:a().bool,maxWidth:a().string,IconSVG:a().elementType,modalButtonStyles:a().object,modalCancelHandlerCB:a().func,modalConfirmHandlerCB:a().func,modalOpenHandlerCB:a().func,modalExtraHandlerCB:a().func,openButtonText:a().string,cancelBtnText:a().string,confirmBtnText:a().string,extraBtnText:a().string,title:a().string,contentText:a().string,children:a().node,error:a().string,isDisabled:a().bool,colorTheme:a().string};var j=g},64114:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ce}});var r=t(34051),o=t.n(r),i=t(85893),a=t(67294),c=t(11163),s=t(95243),l=t(87006),u=t(40558),d=t(66383),f=t(47426),p=t(77715),m=t(87357),h=t(15861),v=t(56863),x=t(11057),b=t(67720),y=t(86886),g=t(27948),j=t(36872),S=t(72890),w=t(50480),Z=t(94054),O=t(40476),C=t(98396),T=t(9669),k=t.n(T),E=t(99431);function P(e,n,t,r,o,i,a){try{var c=e[i](a),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,o)}function R(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function B(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){_(e,n,t[n])}))}return e}function N(e,n){return!n||"object"!==L(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function W(e,n){return W=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},W(e,n)}var L=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function D(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=F(e);if(n){var o=F(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return N(this,t)}}var M={BASE_API_URL:"https://amia-cis-63yo.onrender.com/api",SEND_SMS_RECOMMENDATIONS:"".concat("https://amia-cis-63yo.onrender.com/api","/send")},q=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&W(e,n)}(a,e);var n,t,r,i=D(a);function a(){return R(this,a),i.apply(this,arguments)}return n=a,t=[{key:"sendSMS",value:function(e){var n,t=this;return(n=o().mark((function n(){var r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.createRequestObject({body:e});case 2:return r=n.sent,n.next=5,k()(A({},r,{url:M.SEND_SMS_RECOMMENDATIONS,method:"POST"}));case 5:return i=n.sent,n.abrupt("return",i.data);case 7:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function a(e){P(i,r,o,a,c,"next",e)}function c(e){P(i,r,o,a,c,"throw",e)}a(void 0)}))})()}}],t&&B(n.prototype,t),r&&B(n,r),a}(E.Z),z=new q,I=z.sendSMS.bind(z),H=t(16759),$=t(37634),G=t(19227),K=t(27392),U=t(38554),V=t(15799),X=t(71927);function Y(e,n,t,r,o,i,a){try{var c=e[i](a),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,o)}function Q(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function J(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Q(e,n,t[n])}))}return e}var ee=(0,V.Z)();ee.typography.h5=Q({fontSize:"1.2rem","@media (min-width:600px)":{fontSize:"1.5rem"}},ee.breakpoints.up("md"),{fontSize:"2rem"});var ne=function(e){var n,t,r,s,l=e.contacts,u=e.contactsState,d=e.onBackBtnClick,p=e.report,T=e.setReport,k=e.loading,E=(0,a.useState)(null),P=E[0],R=E[1],B=(0,a.useState)(null),_=B[0],F=B[1],A=(0,a.useState)([]),N=A[0],W=A[1],L=(0,c.useRouter)();(0,a.useEffect)((function(){0!==l.length&&q(l)}),[l]);var D,M,q=function(e){var n=e.reduce((function(e,n){return void 0===e[n.municipality]&&(e[n.municipality]={contacts:[],province:n.province}),e[n.municipality].contacts.push(n),J({},e)}),{});R(n)},z=(0,C.Z)(ee.breakpoints.between("xs","md")),V=function(){var e,n=(e=o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==p.info){e.next=17;break}return T(J({},p,{sending:!0})),n=[],t=[],N.map((function(e){var r=l.find((function(n){return n.id===e}));r?(n.push(r.cellnumber),t.push(""===r.name?r.cellnumber:r.name)):n.push(e)})),e.prev=5,e.next=8,I({docId:p.id,recipientsNumber:n.toString(),message:p.smsRecommendations,currentSmsLogs:(null===p||void 0===p?void 0:p.logs)?p.logs:[],recipientsWithName:t.toString()});case 8:T((function(e){return J({},e,{sending:!1,info:"Crop Recommendation sent."})})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(5),L.push({pathname:"/admin/sms/",query:{isSent:!1}},"/admin/sms/"),console.error(e.t0.message);case 15:e.next=18;break;case 17:L.push({pathname:"/admin/sms/"});case 18:case"end":return e.stop()}}),e,null,[[5,11]])})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){Y(i,r,o,a,c,"next",e)}function c(e){Y(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(){return n.apply(this,arguments)}}(),Q=function(){L.push({pathname:"/admin/sms/",query:{toAddContact:!0}},"/admin/sms/")};return(0,i.jsx)("div",{children:k||p.loading?(0,i.jsx)(H.Z,{}):void 0!==p.stages?(0,i.jsxs)(m.Z,{container:!0,sx:U.Z.container,children:[(0,i.jsxs)(m.Z,{sx:{marginBottom:"32px",display:"flex",justifyContent:"space-between"},children:[(0,i.jsx)(X.Z,{theme:ee,children:(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(h.Z,{variant:"h5",children:"Send Text-Form Crop Recommendation"}),(0,i.jsx)(h.Z,{variant:"h6",children:K.eT[p.type]})]})}),(0,i.jsxs)(v.Z,{orientation:z?"vertical":"horizontal",children:[(0,i.jsx)(x.Z,{disableElevation:!0,variant:"outlined",color:"primary",sx:J({},U.Z.button,{color:function(e){return e.palette.primary.main},borderTopRightRadius:0,borderBottomRightRadius:0}),onClick:d,children:"Back"}),(0,i.jsx)(G.Z,{isDisabled:0===N.length||void 0===(null===p||void 0===p?void 0:p.smsRecommendations),isOpen:!1,maxWidth:"sm",openButtonText:"Send",title:"Send Crop Recommendation",contentText:""!==p.info?p.info:"Sending this allows your contacts to receive the Text-Form Crop Recommendation on their cellphone numbers as text.",confirmBtnText:""!==p.info?"Ok":"Send",modalConfirmHandlerCB:V,loading:p.sending,modalButtonStyles:{borderTopLeftRadius:0,borderBottomLeftRadius:0,width:"80px"}})]})]}),(0,i.jsxs)(m.Z,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Province:"})," ",p.province]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Municipality:"})," ",p.municipality]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Crop:"})," ",p.crop]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Report type:"})," ",p.type||"-"]}),p.type===K.Ry.TEN_DAY&&(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Weather data validity:"})," ",p.date_range]}),p.type===K.Ry.SEASONAL&&(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Month:"})," \xa0",null!==(D=null===(n=Object.values(f.re).find((function(e){return e.code===p.month})))||void 0===n?void 0:n.format)&&void 0!==D?D:p.month]}),(null===p||void 0===p?void 0:p.risk)&&(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Climate Risk:"})," \xa0",(0,i.jsx)("span",{children:p.risk})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Weather Condition:"})," \xa0",null===p||void 0===p||null===(t=p.conditions)||void 0===t?void 0:t.map((function(e,n){var t;return(0,i.jsxs)("span",{children:[f.re[e.mo.toUpperCase()].format,":\xa0",null!==(M=null===(t=Object.values(f.MW).find((function(n){return n.label===e.con})))||void 0===t?void 0:t.sync)&&void 0!==M?M:"n/a",n<p.conditions.length-1&&(0,i.jsx)("span",{children:",\xa0"})]},e.mo)})),"n/a"!==(null===p||void 0===p?void 0:p.condition)&&(0,i.jsx)("span",{children:(null===(r=Object.values(f.MW).find((function(e){return e.label===p.condition})))||void 0===r?void 0:r.sync)||"-"}),[K.Ry.TEN_DAY,K.Ry.SPECIAL_WEATHER].includes(p.type)&&(0,i.jsxs)("span",{children:[" (",p.rainfall,")"]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Crop Stage(s):"})," ",p.stages.toString().split(",").join(", ")]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Activities:"})," ",p.activities.toString().split(",").join(", ")]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Created by:"})," ",p.updated_by]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Date created:"})," ",p.date_created]}),(0,i.jsxs)(h.Z,{variant:"caption",children:[(0,i.jsx)("strong",{children:"ID:"})," ",p.id]}),(0,i.jsx)(b.Z,{sx:{marginTop:"32px"}})]}),(0,i.jsxs)(y.ZP,{container:!0,style:{paddingTop:"10px"},children:[(0,i.jsxs)(y.ZP,{item:!0,xs:12,md:5,children:[(0,i.jsx)(h.Z,{variant:"h6",children:"Text-Form Crop Recommendation"}),(0,i.jsx)(g.Z,{children:(null===p||void 0===p?void 0:p.smsRecommendations)||(0,i.jsx)("span",{style:{color:"#ff1744"},children:"No SMS Recommendations available."})})]}),(0,i.jsxs)(y.ZP,{item:!0,xs:12,md:7,children:[(0,i.jsx)(h.Z,{variant:"h6",children:"List of Contacts"}),u.loading?(0,i.jsx)("div",{children:"Loading phonebook..."}):""!==u.error?(0,i.jsx)("div",{children:u.error}):l.length>0?(0,i.jsxs)("div",{children:[(0,i.jsx)(m.Z,{children:(0,i.jsxs)(h.Z,{variant:"body2",children:["These are your contacts that you can send the recommendation thru SMS.",(0,i.jsx)("br",{}),"Need to change some of your contacts? Click"," ",(0,i.jsx)("span",{onClick:Q,style:U.Z.customizedButtonLink,children:"here"}),"."]})}),(0,i.jsx)("div",{style:{height:"400px",width:"100%",paddingTop:"50px"},children:(0,i.jsxs)(Z.Z,{children:[(0,i.jsx)(O.Z,{id:"demo-controlled-radio-buttons-group",children:"Select Province for Text Blasting"}),(0,i.jsx)(S.Z,{"aria-labelledby":"demo-controlled-radio-buttons-group",name:"controlled-radio-buttons-group",value:_,onChange:function(e){F(e.target.value);var n=P[e.target.value].contacts.map((function(e){return e.cellnumber}));W(n)},children:(null===(s=Object.keys(P))||void 0===s?void 0:s.length)>0?(0,i.jsx)("div",{children:Object.keys(P).sort().map((function(e){return(0,i.jsx)(w.Z,{value:e,control:(0,i.jsx)(j.Z,{}),label:"".concat(e,", ").concat(P[e].province)},e)}))}):null})]})})]}):(0,i.jsx)("div",{children:(0,i.jsxs)(h.Z,{variant:"subtitle1",children:["No contacts yet. Please add contacts first in your Phonebook\xa0",(0,i.jsx)("span",{onClick:Q,style:U.Z.customizedButtonLink,children:"here"}),"."]})})]})]})]}):(0,i.jsx)($.Z,{})})};function te(e,n,t,r,o,i,a){try{var c=e[i](a),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,o)}function re(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){te(i,r,o,a,c,"next",e)}function c(e){te(i,r,o,a,c,"throw",e)}a(void 0)}))}}function oe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ie(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){oe(e,n,t[n])}))}return e}var ae={loading:!0,error:"",info:"",sending:!1};var ce=(0,s.Z)((function(e){var n=(0,a.useState)(ae),t=n[0],r=n[1],s=(0,a.useState)(ae),m=s[0],h=s[1],v=(0,a.useState)([]),x=v[0],b=v[1],y=(0,c.useRouter)();return(0,a.useEffect)((function(){if(t.loading&&Object.keys(y.query).length>0&&null!==e.user){var n=function(){var e=re(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.QL)(y.query.docId);case 3:n=e.sent,t=n.date_created.toDate(),n.date_created="".concat(t.toDateString()," ").concat(t.toLocaleTimeString("it-IT",p.W6)),r((function(e){return ie({},e,{loading:!1},n)})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),r(ie({},ae,{loading:!1,error:e.t0.message}));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=re(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(ie({},ae,{loading:!0})),e.next=4,(0,u.K2)();case 4:n=e.sent,b((function(e){return n})),h((function(e){return ie({},e,{loading:!1})})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),r((function(n){return ie({},ae,{loading:!1,error:e.t0.message})})),h((function(n){return ie({},ae,{loading:!1,error:e.t0.message})}));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();n(),i()}}),[y,t.loading,e.user]),(0,i.jsx)(d.Z,{loading:e.loading,user:e.user,onBtnLogoutClick:e.onBtnLogoutClick,accLevel:f.DW.ADMIN,children:(0,i.jsx)(ne,{setReport:r,report:t,loading:e.loading,contacts:x,contactsState:m,onBackBtnClick:function(){y.push("/admin/sms/")}})})}))},40558:function(e,n,t){"use strict";t.d(n,{rE:function(){return S},GK:function(){return w},mP:function(){return Z},K2:function(){return O}});var r=t(34051),o=t.n(r),i=t(9669),a=t.n(i),c=t(99431);function s(e,n,t,r,o,i,a){try{var c=e[i](a),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,o)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){s(i,r,o,a,c,"next",e)}function c(e){s(i,r,o,a,c,"throw",e)}a(void 0)}))}}function u(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){f(e,n,t[n])}))}return e}function h(e,n){return!n||"object"!==x(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function v(e,n){return v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},v(e,n)}var x=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function b(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=p(e);if(n){var o=p(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return h(this,t)}}var y={BASE_API_URL:"https://amia-cis-63yo.onrender.com/api",CREATE_CONTACT:"".concat("https://amia-cis-63yo.onrender.com/api","/contact"),DELETE_CONTACT:"".concat("https://amia-cis-63yo.onrender.com/api","/contact"),EDIT_CONTACT:"".concat("https://amia-cis-63yo.onrender.com/api","/contact"),GET_CONTACTS:"".concat("https://amia-cis-63yo.onrender.com/api","/contacts"),PHONEBOOK:"phonebook"},g=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&v(e,n)}(c,e);var n,t,r,i=b(c);function c(){return u(this,c),i.apply(this,arguments)}return n=c,(t=[{key:"createContact",value:function(e){var n=this;return l(o().mark((function t(){var r,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,a()(m({},r,{url:y.CREATE_CONTACT,method:"POST"}));case 5:return i=t.sent,t.abrupt("return",i.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"deleteContact",value:function(e){var n=this;return l(o().mark((function t(){var r,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,a()(m({},r,{url:y.DELETE_CONTACT,method:"DELETE"}));case 5:return i=t.sent,t.abrupt("return",i.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"editContact",value:function(e){var n=this;return l(o().mark((function t(){var r,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,a()(m({},r,{url:y.EDIT_CONTACT,method:"PATCH"}));case 5:return i=t.sent,t.abrupt("return",i.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"getContacts",value:function(){var e=this;return l(o().mark((function n(){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.createRequestObject({});case 2:return t=n.sent,n.next=5,a()(m({},t,{url:y.GET_CONTACTS,method:"GET"}));case 5:return r=n.sent,n.abrupt("return",r.data.contacts);case 7:case"end":return n.stop()}}),n)})))()}}])&&d(n.prototype,t),r&&d(n,r),c}(c.Z),j=new g,S=j.createContact.bind(j),w=j.deleteContact.bind(j),Z=j.editContact.bind(j),O=j.getContacts.bind(j)}},function(e){e.O(0,[5778,9564,9964,9522,6279,542,7944,6580,986,1050,9774,2888,179],(function(){return n=5835,e(e.s=n);var n}));var n=e.O();_N_E=n}]);