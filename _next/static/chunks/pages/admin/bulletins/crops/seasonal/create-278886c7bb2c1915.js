(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7970],{40108:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/bulletins/crops/seasonal/create",function(){return t(60261)}])},60261:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return me}});var r=t(34051),o=t.n(r),i=t(85893),l=t(67294),a=t(9473),c=t(16327),u=t(30560),s=t(87006),p=t(87682),f=t(53063),d=t(12671),m=t(61690),v=t(59111),g=t(87784),h=t(52955),b=t(59390),y=t(23766),x=t(38885),j=t(22856),_=t(27941),S=t(22228),O=t(47426),w={forecast:"",label:"",value:0};var Z=t(15497),k=t(901),E=t(27392),P=t(95243),C=t(11163),A=t(45697),I=t.n(A),R=t(21023),T=t(93946),L=t(41664),B=t(76295),D=t(87357),M=t(98456),F=t(11057),N=t(56863),U=t(87918),z=t(67720),G=t(86886),V=t(61903),W=t(15861),q=t(88409),$=t(40044),H=t(11829),X=t(19227),J=t(22094),K=t(24478),Q=t(79316),Y=t(22757);function ee(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ne(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ee(e,n,t[n])}))}return e}function te(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function re(e){var n,t=function(e){var n=e.children,t=e.value,r=e.index,o=te(e,["children","value","index"]);return(0,i.jsx)("div",ne({role:"tabpanel",hidden:t!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},o,{children:t===r&&(0,i.jsx)(D.Z,{sx:{p:3},children:n})}))},r=function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}},o=(0,l.useState)(!1),c=o[0],u=o[1],s=(0,l.useRef)(!0),p=(0,C.useRouter)(),f=(0,a.I0)(),m=(0,l.useState)(0),v=m[0],g=m[1],h=e.sel_options,b=e.recommendations,y=e.recommendationsImpacts,x=e.climateRisk,j=e.optsprovinces,_=e.optsmunicipalities,S=e.optsactivities,w=e.optscrops,Z=e.optscropstages,k=e.monthForecast,E=e.open,P=e.isTagalog,A=e.loading,ee=e.isloadingreport,re=e.message,oe=e.smstext,ie=e.pdfPreview,le=e.handleSave,ae=e.handlePreview,ce=e.togglePrompt,ue=e.toggleViewerOpen,se=e.toggleGlobalLanguage,pe=e.onSelectItemChange,fe=e.resetSelections;(0,l.useEffect)((function(){return s.current=!0,function(){s.current=!1}}),[]),(0,l.useEffect)((function(){null===h.sel_month&&!0===c&&u(!1)}),[h.sel_month,c]);var de=function(){f((0,d.s_)()),p.push("/admin/bulletins/crops/report/view/?docId=".concat(re.docId))},me=function(){var e="Loading...";return j.length>0&&(e=null===h.sel_province?"Select a province":"Province"),e};return t.propTypes={children:I().node,index:I().number.isRequired,value:I().number.isRequired},(0,i.jsxs)("div",{children:[(0,i.jsx)(X.Z,{isOpen:re.isOpen,maxWidth:"xs",openButtonText:null,title:re.title,contentText:re.msg,loading:re.loading,modalCancelHandlerCB:function(){re.savesuccess?de():ce()},modalConfirmHandlerCB:function(){re.savesuccess?de():le()}}),(0,i.jsx)(J.Z,{open:E,pdfPreview:ie,error:h.error,loading:h.loading,toggleViewerOpen:ue}),(0,i.jsxs)(G.ZP,{container:!0,sx:Y.Z.container,children:[(0,i.jsxs)(D.Z,{sx:Y.Z.headerText,children:[(0,i.jsxs)(D.Z,{children:[(0,i.jsx)(W.Z,{variant:"h5",children:"Regional Seasonal Climate Outlook and Advisory Crop Recommendations Bulletin"}),(0,i.jsxs)("p",{children:["Create ",(0,i.jsx)("strong",{children:"Seasonal"})," crop recommendations bulletins. Finalized bulletins will be automatically uploaded to the site for public download."]})]}),(0,i.jsx)(D.Z,{children:(0,i.jsx)(T.Z,{"aria-label":"exit",size:"medium",children:(0,i.jsx)(L.default,{href:"/admin/bulletins/crops",passHref:!0,children:(0,i.jsx)(R.Z,{fontSize:"inherit"})})})})]}),(0,i.jsxs)(G.ZP,{item:!0,sx:Y.Z.item,xs:12,lg:4,children:[(0,i.jsx)(W.Z,{variant:"h6",children:"Selection Options"}),(0,i.jsx)(B.Z,{disablePortal:!0,id:"province",size:"small",value:h.sel_province,disabled:0===j.length||A,options:j,sx:Y.Z.autocomplete,PaperComponent:H.Z,renderInput:function(e){return(0,i.jsx)(V.Z,ne({},e,{label:me()}))},isOptionEqualToValue:function(e,n){return e.label===n},onChange:function(e,n){return pe(e,ne({},n,{from:"province"}))}}),(0,i.jsx)(B.Z,{disablePortal:!0,id:"municipality",size:"small",value:h.sel_municipality,disabled:0===_.length||A,options:_,sx:Y.Z.autocomplete,PaperComponent:H.Z,renderInput:function(e){return(0,i.jsx)(V.Z,ne({},e,{label:null===h.sel_municipality?"Select a municipality":"Municipality"}))},getOptionDisabled:function(e){return e.disabled||void 0!==e.iscalendar},isOptionEqualToValue:function(e,n){return e.label===n},onChange:function(e,n){return pe(e,ne({},n,{from:"municipality"}))}}),(0,i.jsx)(B.Z,{disablePortal:!0,id:"crop",size:"small",value:h.sel_crop,disabled:0===w.length||null===h.sel_municipality||A,options:w,sx:Y.Z.autocomplete,PaperComponent:H.Z,renderInput:function(e){return(0,i.jsx)(V.Z,ne({},e,{label:null===h.sel_crop?"Select a crop type":"Crop"}))},isOptionEqualToValue:function(e,n){return e.label===n},getOptionDisabled:function(e){return e.disabled},onChange:function(e,n){return pe(e,ne({},n,{from:"crop"}))}}),null!==h.sel_crop&&(0,i.jsxs)("div",{style:{marginTop:"16px",float:"left",textAlign:"center",border:"1px solid #DCEDC8",padding:"5px 10px",borderRadius:"5px"},children:[(0,i.jsx)(W.Z,{variant:"subtitle1",children:(0,i.jsx)("strong",{children:"Climate Risk:"})}),x]}),(0,i.jsxs)(N.Z,{disableElevation:!0,size:"small","aria-label":"outlined button controls group",disabled:ee||null===h.sel_municipality||null===h.sel_crop||null===h.sel_month,sx:{marginTop:"16px",float:"right"},children:[(0,i.jsx)(F.Z,{variant:"outlined",disabled:A||ee,onClick:fe,children:"Reset"}),(0,i.jsx)(F.Z,{variant:"contained",onClick:function(){return u((function(e){return!e}))},disabled:A||null===h.sel_month||c||null===b,children:"Generate"})]})]}),(0,i.jsx)(G.ZP,{item:!0,sx:Y.Z.item,xs:12,lg:8,children:(0,i.jsx)(Q.Z,{climateRisk:x,selecteditems:h,cropstages:null===Z||void 0===Z?void 0:Z.map((function(e){return e.label})).toString().split(",").join(", "),farmoperations:S.map((function(e){return e.label})).toString().split(",").join(", "),loading:A})})]}),(0,i.jsxs)(G.ZP,{container:!0,sx:Y.Z.container,gap:3,style:{marginTop:"24px",padding:A?"16px":"24px"},children:[(0,i.jsxs)(G.ZP,{item:!0,sx:Y.Z.item,xs:12,lg:12,children:[(0,i.jsx)(D.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,i.jsx)(M.Z,{size:16,color:"primary",sx:{display:A?"block":"none"}})}),null!==h.sel_crop&&null!==h.sel_month&&c&&(0,i.jsx)(D.Z,{children:k.forecast!==O.DD&&(0,i.jsxs)(D.Z,{sx:{width:"100%",marginTop:{xs:"85px",lg:"0px"},"& hr":{marginBottom:"32px"}},children:[(0,i.jsx)(D.Z,{sx:{borderBottom:1,borderColor:"divider","& hr":{color:"red"}},children:(0,i.jsxs)(q.Z,{value:v,onChange:function(e,n){g(n)},"aria-label":"basic tabs example",children:[(0,i.jsx)($.Z,ne({label:"PDF FORM"},r(0))),(0,i.jsx)($.Z,ne({label:"SMS FORM"},r(1)))]})}),(0,i.jsxs)(t,{value:v,index:0,children:[(0,i.jsxs)(D.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px"},children:[(0,i.jsx)(W.Z,{variant:"h4",children:"Impact Outlooks"}),(0,i.jsx)(U.Z,{size:"medium",variant:"outlined",label:P?"English":"Tagalog",onClick:function(){return se()},sx:{width:"90px"}})]}),(0,i.jsx)(D.Z,{sx:Y.Z.recSeasonal,children:(0,i.jsx)(K.Z,{impactOutlookOnly:!0,isShowImpactOutlookSubtitle:!1,recommendations:y,impactOutlookEng:"impact",impactOutlookTag:"impact_tagalog",title:h.sel_crop,isTagalog:P,isShowTitle:!1})}),(0,i.jsx)("hr",{}),(0,i.jsx)(W.Z,{variant:"h4",children:"Recommendations"}),b&&(null===(n=Object.keys(b))||void 0===n?void 0:n.map((function(e){return Object.keys(b[e]).map((function(n,t){return(0,i.jsxs)(D.Z,{sx:Y.Z.recSeasonal,children:[(0,i.jsxs)(W.Z,{variant:"h6",children:[e," - ",n]}),(0,i.jsx)(K.Z,{recommendations:b[e][n],isTagalog:P,isShowTitle:!1})]},"rec-".concat(t))}))})))]}),(0,i.jsx)(t,{value:v,index:1,children:oe})]})})]}),(0,i.jsxs)(D.Z,{sx:{marginBottom:"16px",width:"100%",display:c?"block":"none"},children:[(0,i.jsx)("br",{}),(0,i.jsx)(z.Z,{}),(0,i.jsx)("br",{}),""!==h.error&&(0,i.jsxs)(W.Z,{variant:"caption",sx:{color:"red"},children:["Error: ",h.error]}),(0,i.jsxs)(N.Z,{size:"large","aria-label":"large button group",disabled:ee||k.forecast===O.DD,sx:{display:"flex",justifyContent:"flex-end",marginTop:"8px"},children:[(0,i.jsx)(L.default,{href:"/admin/bulletins/crops",passHref:!0,children:(0,i.jsx)(F.Z,{disabled:h.loading,children:"Cancel"})}),(0,i.jsxs)(F.Z,{disabled:h.loading,onClick:ae,children:[(0,i.jsx)("span",{style:{display:ee?"none":"block"},children:"Preview"})," ","\xa0",(0,i.jsx)(M.Z,{size:24,color:"secondary",sx:{display:ee?"block":"none"}})]}),(0,i.jsx)(F.Z,{variant:"contained",onClick:ce,disableElevation:!0,disabled:h.loading,children:"Save"})]})]})]})]})}re.propTypes={optsprovinces:I().array,optsmunicipalities:I().array,optscrops:I().array,optsmonths:I().array,optsactivities:I().array,sel_options:I().object,monthForecast:I().object,recommendations:I().object,recommendationsImpacts:I().array,loading:I().bool,isloadingreport:I().bool,open:I().bool,isTagalog:I().bool,message:I().object,smstext:I().string,pdfPreview:I().object,onSelectItemChange:I().func,handlePreview:I().func,handleSave:I().func,toggleViewerOpen:I().func,toggleGlobalLanguage:I().func,resetSelections:I().func,togglePrompt:I().func};var oe=re,ie=t(66383);function le(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ae(e,n,t,r,o,i,l){try{var a=e[i](l),c=a.value}catch(u){return void t(u)}a.done?n(c):Promise.resolve(c).then(r,o)}function ce(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function l(e){ae(i,r,o,l,a,"next",e)}function a(e){ae(i,r,o,l,a,"throw",e)}l(void 0)}))}}function ue(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function se(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ue(e,n,t[n])}))}return e}function pe(e){return function(e){if(Array.isArray(e))return le(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return le(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return le(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var fe={sel_province:null,sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:[],sel_month:null,sel_condition:{id:0,from:"weather_condition",label:O.MW.WAY_BELOW_NORMAL.label},loading:!1,error:"",success:""},de={url:"",filename:""};var me=(0,P.Z)((function(e){var n=e.user,t=e.onBtnLogoutClick,r=e.loading,P=(0,l.useState)(fe),C=P[0],A=P[1],I=(0,l.useState)({}),R=I[0],T=I[1],L=(0,l.useState)({}),B=L[0],D=L[1],M=(0,l.useState)([]),F=M[0],N=M[1],U=(0,l.useState)([]),z=U[0],G=U[1],V=(0,l.useState)([]),W=V[0],q=V[1],$=(0,l.useState)([]),H=$[0],X=$[1],J=(0,l.useState)(null),K=J[0],Q=J[1],Y=(0,l.useState)(!0),ee=Y[0],ne=Y[1],te=(0,l.useState)(!1),re=te[0],le=te[1],ae=(0,l.useRef)(!1),ue=(0,y.Z)(C.sel_province,H),me=(0,p.m$)(u.M.WEATHER_FORECASTS,"bicol",u.M.SUB_SEASONAL,"name"),ve=me.documents,ge=me.loading,he=function(e,n){var t=(0,l.useState)(w),r=t[0],o=t[1];return(0,l.useEffect)((function(){if(void 0!==e.months&&n){var t,r,i,l,a,c=e.months.find((function(e){return e.mo===n.id})),u=Object.values(O.MW).find((function(e){return null!==(t=e.label===(null===c||void 0===c?void 0:c.con))&&void 0!==t?t:""}));o({forecast:null!==(r=null===c||void 0===c?void 0:c.con)&&void 0!==r?r:"",value:null!==(i=null===c||void 0===c?void 0:c.val)&&void 0!==i?i:0,label:null!==(l=null===u||void 0===u?void 0:u.sync)&&void 0!==l?l:"-",code:null!==(a=null===u||void 0===u?void 0:u.label)&&void 0!==a?a:"-"})}}),[e,n]),{forecast:r}}(B,C.sel_month),be=he.forecast,ye=(0,b.Z)(C.sel_province,C.sel_crop),xe=ye.cropcalendar,je=ye.cropStages,_e=ye.loading,Se=(0,_.Z)(C.sel_crop,R.code,"seasonal_sms"),Oe=Se.recommendationsSMS,we=Se.loading;(0,l.useEffect)((function(){var e;0!==(null===Oe||void 0===Oe?void 0:Oe.length)&&Ve(Oe[0].sms.replace("{{seasonal_range_identifier}}",null===C||void 0===C||null===(e=C.sel_month)||void 0===e?void 0:e.label))}),[Oe,C.sel_month]),(0,l.useEffect)((function(){if(0!==xe.length&&!ee&&0!==F.length&&null!==C.sel_municipality){var e=xe.data1.find((function(e){return e.municipality===C.sel_municipality&&e.crop===C.sel_crop})),n=xe.data2.find((function(e){return e.municipality===C.sel_municipality&&e.crop===C.sel_crop})),t=[];F.forEach((function(r){var o,i;if(e){var l=null===(o=e[r.id])||void 0===o?void 0:o.split(",");l&&2===(null===l||void 0===l?void 0:l.length)&&("none"===l[0]||t.includes(l[0])||t.push(l[0]),"none"===l[1]||t.includes(l[1])||t.push(l[1]));var a=null===(i=n[r.id])||void 0===i?void 0:i.split(",");a&&2===(null===a||void 0===a?void 0:a.length)&&("none"===a[0]||t.includes(a[0])||t.push(a[0]),"none"===a[1]||t.includes(a[1])||t.push(a[1]))}}));var r=t.map((function(e,n){return{id:n,label:je[e].label,code:e}}));Q(r)}}),[xe,ee,C.sel_crop,C.sel_municipality,F,je]);var Ze=(0,x.Z)().cropList.map((function(e,n){return{disabled:!1,label:e,id:n}})),ke=(0,j.Z)(R.code,K,C.sel_crop,"seasonal",!0),Ee=ke.recommendations,Pe=ke.farmoperations,Ce=ke.loading,Ae=(0,Z.Z)(Ee,je,K).group,Ie=(0,S.Z)(Ee,Pe).group,Re=(0,l.useState)(de),Te=Re[0],Le=Re[1],Be=(0,l.useState)(!1),De=Be[0],Me=Be[1],Fe=(0,l.useState)(E.BF),Ne=Fe[0],Ue=Fe[1],ze=(0,l.useState)(""),Ge=ze[0],Ve=ze[1],We=(0,a.v9)((function(e){return e.dashboard.reportType})),qe=(0,a.I0)(),$e=(0,a.v9)((function(e){return e.reports})),He=$e.report,Xe=$e.status;(0,l.useEffect)((function(){var e;if((null===B||void 0===B||null===(e=B.months)||void 0===e?void 0:e.length)>0&&null!==C.sel_crop){T((0,h.Z)(B.months,"seasonal"));var n="".concat(O.re[B.mos[0].toUpperCase()].format," - ").concat(O.re[B.mos[5].toUpperCase()].format);A((function(e){return se({},e,{sel_month:{label:n}})}))}}),[B,C.sel_crop]),(0,l.useEffect)((function(){ae.current=!0;var e=function(){var e=ce(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.$m)();case 3:n=e.sent,ae&&X(n.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){ae.current=!1}}),[]),(0,l.useEffect)((function(){qe((0,d.s_)())}),[qe]),(0,l.useEffect)((function(){H.length>0&&!ge&&!r&&(q((0,v.m)(H)),N(ve[0].mos.reduce((function(e,n){return pe(e).concat([{id:O.re[n.toUpperCase()].code,label:O.re[n.toUpperCase()].format,disabled:!1}])}),[])))}),[H,ve,ge,r]),(0,l.useEffect)((function(){ne(r||ge||Ce||_e||we)}),[r,ge,Ce,_e,we]),(0,l.useEffect)((function(){Xe===k.G.FULLFILLED&&null!==He&&ae.current&&Ue((function(e){return se({},e,{msg:"Success! Bulletin report created.",loading:!1,savesuccess:!0,docId:He.id})}))}),[Xe,He]);var Je=function(){var e=ce(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ue(se({},Ne,{loading:!0,msg:"Saving report..."}));try{t={region:"bicol",province:C.sel_province,municipality:C.sel_municipality,crop:C.sel_crop,operation:"create",language:re?"tag":"en",isFull:!0},qe((0,m.Br)(t)).unwrap().then((function(){We!==E.Ry.SEASONAL&&(qe((0,f.uq)(E.Ry.SEASONAL)),qe((0,m.RC)({uid:n.uid,type:E.Ry.SEASONAL})))})).catch((function(e){ae.current&&Ue((function(n){return se({},n,{msg:e.message,loading:!1,savesuccess:!1,docId:null})}))}))}catch(i){r="",void 0!==i.response&&(r=void 0!==i.response.data&&"[object Blob]"===((o=i.response.data)&&"undefined"!==typeof Symbol&&o.constructor===Symbol?"symbol":typeof o)?i.response.data:""),""===r&&(r=i.message)}case 2:case"end":return e.stop()}var o}),e)})));return function(){return e.apply(this,arguments)}}(),Ke=function(){var e=ce(o().mark((function e(){var n,t,r,i,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===Te.url){e.next=3;break}return Me(!0),e.abrupt("return");case 3:return A((function(e){return se({},e,{loading:!0,error:"",success:""})})),e.prev=4,n={region:"bicol",province:C.sel_province,municipality:C.sel_municipality,crop:C.sel_crop,operation:"preview",language:re?"tag":"en",isFull:!0},Me(!0),A((function(e){return se({},e,{loading:!0,error:""})})),e.next=10,(0,s.pl)(n);case 10:t=e.sent,r=new Blob([t],{type:"application/pdf"}),(i={}).href=URL.createObjectURL(r),i.download="".concat(C.sel_province,"_").concat(C.sel_municipality,"-").concat(C.sel_crop,".pdf"),Le((function(e){return se({},e,{url:i.href,filename:i.download})})),A((function(e){return se({},e,{loading:!1,success:"Bulletin preview created."})})),e.next=25;break;case 19:return e.prev=19,e.t0=e.catch(4),e.next=23,(0,g.fu)(e.t0);case 23:l=e.sent,A((function(e){return se({},e,{loading:!1,error:l})}));case 25:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(){return e.apply(this,arguments)}}();return(0,i.jsx)(ie.Z,{loading:r,user:n,onBtnLogoutClick:t,accLevel:O.DW.ADMIN,children:(0,i.jsx)(oe,{climateRisk:R.label,optsprovinces:W,optsmunicipalities:ue,optscrops:Ze,optsmonths:F,optscropstages:K,optsactivities:Pe,sel_options:C,monthForecast:be,recommendations:Ae,recommendationsImpacts:Ie,loading:ee,isloadingreport:Xe===k.G.PENDING,open:De,isTagalog:re,message:Ne,smstext:Ge,pdfPreview:Te,onSelectItemChange:function(e,n){var t=n.from,r=n.label;if(Le(de),z.length>0&&G([]),Object.keys(n).includes("id"))switch(t){case"province":Q(null),D(ve.find((function(e){return e.name===r}))),A(se({},fe,{sel_province:r}));break;case"municipality":Q(null),A(se({},C,{sel_municipality:r,sel_crop:null,sel_month:null,sel_stage:null,sel_activity:null}));break;case"crop":A(se({},C,{sel_crop:r,sel_month:null,sel_stage:null,sel_activity:null}))}else"province"===t?(A(fe),Q(null)):"municipality"===t?(A(se({},C,{sel_municipality:null,sel_crop:null,sel_month:null,sel_stage:null,sel_activity:null})),Q(null)):"crop"===t?(A(se({},C,{sel_crop:null,sel_month:null,sel_stage:null,sel_activity:null})),Q(null)):"month"===t&&(A(se({},C,{sel_month:null,sel_stage:null,sel_activity:null})),Q(null))},handlePreview:Ke,handleSave:Je,toggleViewerOpen:function(){Me((function(e){return!e}))},toggleGlobalLanguage:function(){le((function(e){return!e})),Le(de)},resetSelections:function(){A(fe),Q(null),G([])},togglePrompt:function(){Ue((function(e){return se({},E.BF,{isOpen:!e.isOpen})}))}})})}))},22228:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){var n=(0,r.useState)([]),t=n[0],i=n[1],l=(0,r.useState)(""),a=l[0],c=l[1];(0,r.useEffect)((function(){if(c(""),(null===e||void 0===e?void 0:e.length)>0)try{var n=e.map((function(e){return{impact:e.impact_outlook_english,impact_tagalog:e.impact_outlook_tagalog}})).filter((function(e){return""!==e.impact_outlook_english&&""!==e.impact_outlook_tagalog}));return n=s(n),void i([{impact:u(n.impact),impact_tagalog:u(n.impact_tagalog)}])}catch(t){c(t)}else i([])}),[e]);var u=function(e){var n="-",t=e.reduce((function(e,t){return t.includes("<p>")?("list"===n&&(e+="</ul>"),e+=t,n="p"):(["-","p"].includes(n)&&(e+="<ul>"),e+=t,n="list"),e}),"");return"list"===n&&(t+="</ul>"),t},s=function(e){var n={impact:[],impact_tagalog:[]};return e.reduce((function(e,t){return Object.keys(e).forEach((function(r){var o=t[r].replace(/<ul>/g,"");(o=(o=o.replace(/<\/ul>/g,"")).replace(/<li>/g,"")).split("</li>").forEach((function(t){t.includes("<p>")?t.replace(/<p>/g,"").split("</p>").forEach((function(t){n[r].includes(t)||""===t||(n[r].push(t),e[r].push("<p>".concat(t,"</p>")))})):n[r].includes(t)||""===t||(n[r].push(t),e[r].push("<li>".concat(t,"</li>")))}))})),function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},e)}),{impact:[],impact_tagalog:[]})};return{group:t,error:a}}},15497:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(67294);function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n,t){var o=(0,r.useState)(null),l=o[0],a=o[1],c=(0,r.useState)(""),u=c[0],s=c[1];return(0,r.useEffect)((function(){if(s(""),(null===e||void 0===e?void 0:e.length)>0&&(null===t||void 0===t?void 0:t.length)>0&&n){var r=e.map((function(e){return e.farming_activity})).filter((function(e,n,t){return t.indexOf(e)===n})),o=null===t||void 0===t?void 0:t.map((function(e){return e.code}));try{a(o.reduce((function(t,o){return null===r||void 0===r||r.forEach((function(r){var l=n[o].label,a=e.filter((function(e){return e.crop_stage===o&&e.farming_activity===r}));a.length>0&&l&&(void 0===t[l]&&(t[l]={}),void 0===t[l][r]&&(t[l][r]=[]),t[l][r]=i(t[l][r]).concat(i(a)))})),t}),{}))}catch(l){a(null),s(l)}}else a(null)}),[e,n,t]),{group:l,error:u}}},27941:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(34051),o=t.n(r),i=t(67294),l=t(1096);function a(e,n,t,r,o,i,l){try{var a=e[i](l),c=a.value}catch(u){return void t(u)}a.done?n(c):Promise.resolve(c).then(r,o)}function c(e,n,t){var r=(0,i.useState)([]),c=r[0],u=r[1],s=(0,i.useState)(!1),p=s[0],f=s[1],d=(0,i.useState)(""),m=d[0],v=d[1];return(0,i.useEffect)((function(){var r=function(){var r,i=(r=o().mark((function r(){var i,a,c,s;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,i=[],f(!1),v(""),r.next=6,(0,l.iR)({crop:e,climateRisk:n,type:t});case 6:i=r.sent,f(!1),u(i||[]),r.next=18;break;case 11:r.prev=11,r.t0=r.catch(0),s=null!==(c=null===r.t0||void 0===r.t0||null===(a=r.t0.response)||void 0===a?void 0:a.data)&&void 0!==c?c:r.t0.message,v(s),f(!1);case 18:case"end":return r.stop()}}),r,null,[[0,11]])})),function(){var e=this,n=arguments;return new Promise((function(t,o){var i=r.apply(e,n);function l(e){a(i,t,o,l,c,"next",e)}function c(e){a(i,t,o,l,c,"throw",e)}l(void 0)}))});return function(){return i.apply(this,arguments)}}();e&&t?r():u([])}),[e,n,t]),{recommendationsSMS:c,loading:p,error:m}}},87682:function(e,n,t){"use strict";t.d(n,{ky:function(){return m},Kx:function(){return v},m$:function(){return g},tl:function(){return h}});var r=t(34051),o=t.n(r),i=t(67294),l=t(25321),a=t(96772);function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function u(e,n,t,r,o,i,l){try{var a=e[i](l),c=a.value}catch(u){return void t(u)}a.done?n(c):Promise.resolve(c).then(r,o)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function l(e){u(i,r,o,l,a,"next",e)}function a(e){u(i,r,o,l,a,"throw",e)}l(void 0)}))}}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}function d(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,n){var t=(0,i.useState)(null),r=t[0],c=t[1],u=(0,i.useState)(!0),p=u[0],f=u[1],d=(0,i.useState)(""),m=d[0],v=d[1],g=(0,i.useRef)(!0);return(0,i.useEffect)((function(){var t=function(){var t=s(o().mark((function t(){var r,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=(0,l.JU)(a.db,e,n),t.next=4,(0,l.QT)(r);case 4:i=t.sent,g.current&&(i.exists()&&c(i.data()),f(!1)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),v(t.t0.message),f(!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){return g.current=!1}}),[e,n]),[r,p,m]}function v(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,c=(0,i.useState)([]),u=c[0],p=c[1],m=(0,i.useState)(!0),v=m[0],g=m[1],h=(0,i.useState)(""),b=h[0],y=h[1],x=(0,i.useRef)(!0);return(0,i.useEffect)((function(){var i=function(){var i=s(o().mark((function i(){var c,u,s,m;return o().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,c=[(0,l.Xo)(n,"asc")],r>0&&c.push((0,l.b9)(r)),u=(0,l.hJ)(a.db,e),s=t||l.IO.apply(void 0,[u].concat(d(c))),o.next=7,(0,l.PL)(s);case 7:m=o.sent,x.current&&(p(m.docs.map((function(e){return f({},e.data())}))),g(!1)),o.next=15;break;case 11:o.prev=11,o.t0=o.catch(0),y(o.t0.message),g(!1);case 15:case"end":return o.stop()}}),i,null,[[0,11]])})));return function(){return i.apply(this,arguments)}}();return i(),function(){return x.current=!1}}),[e,n,t,r]),{documents:u,loading:v,error:b}}function g(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=(0,i.useState)([]),u=c[0],p=c[1],d=(0,i.useState)(!0),m=d[0],v=d[1],g=(0,i.useState)(""),h=g[0],b=g[1],y=(0,i.useRef)(!0);return(0,i.useEffect)((function(){var i=function(){var i=s(o().mark((function i(){var c,u;return o().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,c=(0,l.IO)((0,l.hJ)(a.db,e,n,t),(0,l.Xo)(r)),o.next=4,(0,l.PL)(c);case 4:u=o.sent,y.current&&(p(u.docs.map((function(e){return f({},e.data())}))),v(!1)),o.next=12;break;case 8:o.prev=8,o.t0=o.catch(0),b(o.t0.message),v(!1);case 12:case"end":return o.stop()}}),i,null,[[0,8]])})));return function(){return i.apply(this,arguments)}}();return i(),function(){return y.current=!1}}),[e,n,t,r]),{documents:u,loading:m,error:h}}function h(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=arguments.length>4?arguments[4]:void 0,u=(0,i.useState)([]),p=u[0],d=u[1],m=(0,i.useState)(!0),v=m[0],g=m[1],h=(0,i.useState)(""),b=h[0],y=h[1],x=(0,i.useRef)(!0);return(0,i.useEffect)((function(){var i=function(){var i=s(o().mark((function i(){var u,s;return o().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,u=(0,l.hJ)(a.db,e,n,t),""!==r&&(u=(0,l.IO)(u,(0,l.Xo)(r))),c&&(u=(0,l.IO)(u,(0,l.b9)(c))),o.next=6,(0,l.PL)(u);case 6:s=o.sent,x.current&&(d(s.docs.map((function(e){return f({},e.data())}))),g(!1)),o.next=14;break;case 10:o.prev=10,o.t0=o.catch(0),y(o.t0.message),g(!1);case 14:case"end":return o.stop()}}),i,null,[[0,10]])})));return function(){return i.apply(this,arguments)}}();return i(),function(){return x.current=!1}}),[e,n,t,r,c]),{documents:p,loading:v,error:b}}}},function(e){e.O(0,[5778,3593,9964,8858,1903,6279,542,7944,6295,6572,1050,1096,9501,1855,9774,2888,179],(function(){return n=40108,e(e.s=n);var n}));var n=e.O();_N_E=n}]);