(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5507],{67947:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/bulletins/crops/tenday/create",function(){return t(8822)}])},55688:function(e,n,t){"use strict";var r=t(85893),i=t(67294),o=t(45697),a=t.n(o),l=t(14866),s=t(46901);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var u=i.forwardRef((function(e,n){return(0,r.jsx)(s.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){c(e,n,t[n])}))}return e}({elevation:6,ref:n,variant:"filled"},e))}));function d(e){var n=e.openSnackbar,t=e.message,o=e.severity,a=e.closeHandlerCB,s=void 0===a?function(){}:a,c=(0,i.useState)(n),d=c[0],p=c[1];(0,i.useEffect)((function(){p(n)}),[n]);var f=function(){p(!1),s()};return(0,r.jsx)(l.Z,{open:d,autoHideDuration:3e3,onClose:f,children:(0,r.jsx)(u,{onClose:f,severity:o,sx:{width:"100%"},children:t})})}d.propTypes={openSnackbar:a().bool,message:a().string,severity:a().string},n.Z=d},19247:function(e,n){"use strict";n.Z={container:{padding:"24px",width:"100%",position:"relative",minWidth:"0px",overflowWrap:"break-word",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"16px",borderColor:"#E2E8F0"},welcome:{border:"1px solid #DCEDC8",borderRadius:function(e){return e.spacing(1)},width:"100%",display:"grid",placeContent:"center",padding:"20px",marginTop:function(e){return e.spacing(1)},textAlign:"center","& h6":{lineHeight:"20px"}},summary:{border:"1px solid #DCEDC8",borderRadius:function(e){return e.spacing(1)},marginTop:function(e){return e.spacing(1)},padding:function(e){return e.spacing(3)}},selectionSummary:{minWidth:"100%",paddingLeft:{xs:0,lg:"16px"}},conditionLegend:{borderRadius:function(e){return e.spacing(1)},width:"100%",padding:function(e){return e.spacing(1)},border:"1px solid grey",textAlign:"center",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",float:"left"},autocomplete:{marginTop:function(e){return e.spacing(1)}},recSeasonal:{marginTop:function(e){return e.spacing(1)},"& p, ul, ol":{fontSize:"14px"}},button:{color:"#FFFFFF",textTransform:"capitalize",fontSize:"14px",fontStyle:"normal",fontWeight:"normal",width:"80px",height:{xs:"40px",sm:"50px"}},pdfcontent:{ul:{paddingLeft:3}},recSeasonalStage:{marginTop:function(e){return e.spacing(5)},marginBottom:function(e){return e.spacing(2)},textDecoration:"underline"}}},8822:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ye}});var r=t(34051),i=t.n(r),o=t(85893),a=t(67294),l=t(9473),s=t(11163),c=t(45697),u=t.n(c),d=t(41664),p=t(21023),f=t(76295),m=t(11057),g=t(56863),v=t(87357),b=t(86886),h=t(93946),y=t(61903),x=t(15861),j=t(11829),_=t(19227),w=t(22094),S=t(98456),Z=t(87918),O=t(67720),E=t(40044),k=t(88409),P=t(53063),C=t(901),D=t(24478),T=t(22228),F=t(19247);function I(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){I(e,n,t[n])}))}return e}function L(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function B(e){var n=function(e){var n=e.children,t=e.value,r=e.index,i=L(e,["children","value","index"]);return(0,o.jsx)("div",R({role:"tabpanel",hidden:t!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},i,{children:t===r&&(0,o.jsx)(v.Z,{sx:{p:3,whiteSpace:e.smsstyle},children:n})}))},t=function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}},r=e.options,i=e.smstext,s=e.sel_options,c=e.optsactivities,u=e.recommendationsData,p=e.loading,f=e.handleSave,h=e.handlePreview,y=e.show,j=void 0===y||y,_=e.isCreateDisabled,w=void 0!==_&&_,I=(0,l.I0)(),B=(0,l.v9)((function(e){return e.recommendations})),A=B.filtered_recommendations,N=B.recommendations,M=(0,T.Z)(null!==u&&void 0!==u?u:N,c).group,z=(0,l.v9)((function(e){return e.reports})),W=z.error,G=z.status,H=(0,l.v9)((function(e){return e.dashboard.isEnglish})),V=(0,a.useState)(0),Y=V[0],U=V[1],q=(0,a.useState)(!1),K=q[0],X=q[1];(0,a.useEffect)((function(){X(r.loading||G===C.G.PENDING)}),[r.loading,G]);return(0,o.jsxs)(b.ZP,{container:!0,sx:F.Z.container,gap:3,style:{marginTop:"24px",padding:p?"16px":"24px"},children:[null!==A&&j&&(0,o.jsx)(v.Z,{children:(0,o.jsxs)(v.Z,{sx:{width:"100%",marginTop:{xs:"85px",lg:"0px"}},children:[(0,o.jsx)(v.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,o.jsxs)(k.Z,{value:Y,onChange:function(e,n){U(n)},"aria-label":"basic tabs example",children:[(0,o.jsx)(E.Z,R({label:"PDF FORM"},t(0))),(0,o.jsx)(E.Z,R({label:"SMS FORM"},t(1)))]})}),(0,o.jsxs)(n,{value:Y,index:0,smsstyle:"normal",children:[(0,o.jsxs)(v.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px"},children:[(0,o.jsx)(x.Z,{variant:"h4",children:"Impact Outlooks"}),(0,o.jsx)(Z.Z,{size:"medium",variant:"outlined",label:H?"Tagalog":"English",onClick:function(){return I((0,P.cX)())},sx:{width:"90px"}})]}),(0,o.jsx)(v.Z,{sx:F.Z.recSeasonal,children:(0,o.jsx)(D.Z,{impactOutlookOnly:!0,isShowImpactOutlookSubtitle:!1,recommendations:M,impactOutlookEng:"impact",impactOutlookTag:"impact_tagalog",title:s.sel_crop,isTagalog:!H,isShowTitle:!1})}),(0,o.jsx)("hr",{}),(0,o.jsx)(x.Z,{variant:"h4",sx:{marginTop:"32px"},children:"Recommendations"}),Object.keys(A).map((function(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x.Z,{variant:"h5",sx:F.Z.recSeasonalStage,children:e}),Object.keys(A[e]).map((function(n,t){return(0,o.jsxs)(v.Z,{sx:R({},F.Z.recSeasonal,{marginBottom:"24px","& h6":{color:"rgba(0, 0, 0, 0.67)"}}),children:[(0,o.jsx)(x.Z,{variant:"h6",children:n}),(0,o.jsx)(D.Z,{recommendations:A[e][n],isTagalog:!H,isShowTitle:!1})]},"rec-".concat(t))}))]})}))]}),(0,o.jsx)(n,{value:Y,index:1,smsstyle:"pre-wrap",children:i})]})}),(0,o.jsx)(b.ZP,{item:!0,sx:F.Z.item,xs:12,lg:12,children:(0,o.jsx)(v.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,o.jsx)(S.Z,{size:16,color:"primary",sx:{display:p?"block":"none"}})})}),(0,o.jsxs)(v.Z,{sx:{marginBottom:"16px",width:"100%",display:null!==A&&j?"block":"none"},children:[(0,o.jsx)("br",{}),(0,o.jsx)(O.Z,{}),(0,o.jsx)("br",{}),""!==W&&(0,o.jsxs)(x.Z,{variant:"caption",sx:{color:"red"},children:["Error: ",W]}),(0,o.jsxs)(g.Z,{size:"large","aria-label":"large button group",sx:{display:"flex",justifyContent:"flex-end",marginTop:"8px"},children:[(0,o.jsx)(d.default,{href:"/admin/bulletins/crops",passHref:!0,children:(0,o.jsx)(m.Z,{disabled:K,children:"Cancel"})}),(0,o.jsxs)(m.Z,{onClick:h,disabled:K,children:[(0,o.jsx)("span",{style:{display:K?"none":"block"},children:"Preview"})," ","\xa0",(0,o.jsx)(S.Z,{size:20,color:"secondary",sx:{display:K?"block":"none"}})]}),(0,o.jsx)(m.Z,{variant:"contained",onClick:f,disableElevation:!0,disabled:K||w,children:"Save"})]})]})]})}B.propTypes={options:u().object,smstext:u().string,keyEng:u().string,keyTag:u().string,formTitle:u().string,isCreateDisabled:u().bool,show:u().bool,loading:u().bool,handleSave:u().func,handlePreview:u().func};var A=B,N=t(79316),M=t(55688),z=t(12671),W=t(22757);function G(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){G(e,n,t[n])}))}return e}function V(e){var n=(0,a.useState)(!1),t=n[0],r=n[1],i=(0,s.useRouter)(),c=(0,l.I0)(),u=e.open,S=e.loading,Z=e.isloadingreport,O=e.isdisabled,E=e.climateRisk,k=e.optsprovinces,P=e.optsmunicipalities,C=e.optscrops,D=e.optscropstages,T=e.optsactivities,F=e.recommendationsData,I=e.sel_options,R=e.message,L=e.smstext,B=e.pageTitle,G=void 0===B?"":B,V=e.pageDescription,Y=void 0===V?"":V,U=e.pdfPreview,q=e.handlePreview,K=e.handleSave,X=e.resetSelections,$=e.togglePrompt,J=e.toggleViewerOpen,Q=e.onSelectItemChange,ee=(0,l.v9)((function(e){return e.reports})).report,ne="Invalid year";(0,a.useEffect)((function(){null===I.sel_municipality&&!0===t&&r(!1)}),[I.sel_municipality,t]);var te=function(){ee&&(c((0,z.s_)()),i.push("/admin/bulletins/crops/report/view/?docId=".concat(ee.id)))},re=function(){var e="Loading...";return k.length>0&&(e=null===I.sel_province?"Select a province":"Province"),e};return(0,o.jsxs)("div",{children:[(0,o.jsx)(_.Z,{isOpen:R.isOpen,maxWidth:"xs",openButtonText:null,title:R.title,contentText:R.msg,loading:R.loading,modalCancelHandlerCB:function(){R.savesuccess?te():$()},modalConfirmHandlerCB:function(){R.savesuccess?te():K()}}),(0,o.jsx)(w.Z,{open:u,pdfPreview:U,error:I.error,loading:I.loading,toggleViewerOpen:J}),(0,o.jsx)(M.Z,{openSnackbar:""!==I.error,message:I.error,severity:"warning"}),(0,o.jsxs)(b.ZP,{container:!0,sx:W.Z.container,children:[(0,o.jsxs)(v.Z,{sx:W.Z.headerText,children:[(0,o.jsxs)(v.Z,{children:[(0,o.jsx)(x.Z,{variant:"h5",children:G}),(0,o.jsx)("p",{dangerouslySetInnerHTML:{__html:Y}})]}),(0,o.jsx)(v.Z,{children:(0,o.jsx)(h.Z,{"aria-label":"exit",size:"medium",children:(0,o.jsx)(d.default,{href:"/admin/bulletins/crops",passHref:!0,children:(0,o.jsx)(p.Z,{fontSize:"inherit"})})})})]}),(0,o.jsxs)(b.ZP,{item:!0,sx:W.Z.item,xs:12,lg:4,children:[(0,o.jsx)(x.Z,{variant:"h6",children:"Selection Options"}),(0,o.jsx)(f.Z,{disablePortal:!0,id:"province",size:"small",value:I.sel_province,disabled:0===k.length||I.error.includes(ne)||S,options:k,sx:W.Z.autocomplete,PaperComponent:j.Z,renderInput:function(e){return(0,o.jsx)(y.Z,H({},e,{label:re()}))},getOptionDisabled:function(e){return e.disabled},isOptionEqualToValue:function(e,n){return e.label===n},onChange:function(e,n){return Q(e,H({},n,{from:"province"}))}}),(0,o.jsx)(f.Z,{disablePortal:!0,id:"municipality",size:"small",value:I.sel_municipality,disabled:0===P.length||I.error.includes(ne)||S,options:P,sx:W.Z.autocomplete,PaperComponent:j.Z,renderInput:function(e){return(0,o.jsx)(y.Z,H({},e,{label:null===I.sel_municipality?"Select a municipality":"Municipality"}))},getOptionDisabled:function(e){return e.disabled||void 0!==e.iscalendar},isOptionEqualToValue:function(e,n){return e.label===n},onChange:function(e,n){Q(e,H({},n,{from:"municipality"})),r(!1)}}),(0,o.jsx)(f.Z,{disablePortal:!0,id:"crop",size:"small",value:I.sel_crop,disabled:0===C.length||S||!I.sel_municipality,options:C,sx:W.Z.autocomplete,PaperComponent:j.Z,renderInput:function(e){return(0,o.jsx)(y.Z,H({},e,{label:null===I.sel_crop?"Select a crop type":"Crop"}))},isOptionEqualToValue:function(e,n){return e.label===n},getOptionDisabled:function(e){return e.disabled},onChange:function(e,n){Q(e,H({},n,{from:"crop"})),r(!1)}}),null!==I.sel_municipality&&(0,o.jsxs)("div",{style:{marginTop:"16px",float:"left",textAlign:"center",border:"1px solid #DCEDC8",padding:"5px 10px",borderRadius:"5px"},children:[(0,o.jsx)(x.Z,{variant:"subtitle1",children:(0,o.jsx)("strong",{children:"Climate Risk:"})}),E]}),(0,o.jsxs)(g.Z,{disableElevation:!0,size:"small","aria-label":"outlined button controls group",disabled:Z||null===I.sel_municipality||"-"===I.sel_crop,sx:{marginTop:"16px",float:"right"},children:[(0,o.jsx)(m.Z,{variant:"outlined",disabled:S||Z,onClick:X,children:"Reset"}),(0,o.jsx)(m.Z,{variant:"contained",onClick:function(){return r((function(e){return!e}))},disabled:S||null===I.sel_month||0===D.length||""!==I.error||t,children:"Generate"})]})]}),(0,o.jsx)(b.ZP,{item:!0,sx:W.Z.item,xs:12,lg:8,children:(0,o.jsx)(N.Z,{climateRisk:E,selecteditems:I,cropstages:null===D||void 0===D?void 0:D.map((function(e){return e.label})).toString().split(",").join(", "),farmoperations:T.map((function(e){return e.label})).toString().split(",").join(", "),loading:S,reportType:"Special Weather Bulletin"===G?"special":"tenday"})})]}),(0,o.jsx)(A,{show:t,loading:S,keyEng:"practice",keyTag:"practice_tagalog",sel_options:I,recommendationsData:F,optsactivities:T,options:I,smstext:L,isCreateDisabled:O,handlePreview:q,toggleViewerOpen:J,pdfPreview:U,handleSave:$})]})}V.propTypes={climateRisk:u().string,optsprovinces:u().array,optsmunicipalities:u().array,optscrops:u().array,optscropstages:u().array,optsactivities:u().array,sel_options:u().object,loading:u().bool,isloadingreport:u().bool,isdisabled:u().bool,open:u().bool,message:u().object,smstext:u().string,pageTitle:u().string,pageDescription:u().string,pdfPreview:u().object,onSelectItemChange:u().func,handlePreview:u().func,handleSave:u().func,toggleViewerOpen:u().func,resetSelections:u().func,togglePrompt:u().func};var Y=V,U=t(66383),q=t(95243),K=t(16327),X=t(61690),$=t(87006),J=t(72216),Q=t(59390),ee=t(38885),ne=t(22856),te=t(27941),re=t(23766),ie=t(15497),oe=t(94640),ae=t(16449),le=t(27392),se=t(59111),ce=t(77715),ue=t(47426),de=t(87784),pe=t(52955);function fe(e,n,t,r,i,o,a){try{var l=e[o](a),s=l.value}catch(c){return void t(c)}l.done?n(s):Promise.resolve(s).then(r,i)}function me(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){fe(o,r,i,a,l,"next",e)}function l(e){fe(o,r,i,a,l,"throw",e)}a(void 0)}))}}function ge(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ve(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ge(e,n,t[n])}))}return e}var be={sel_province:null,sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:[],sel_month:null,processed:!1,loading:!1,error:"",success:"",sel_condition:{id:0,from:"weather_condition",label:ue.MW.WAY_BELOW_NORMAL.label}},he={url:"",filename:""};var ye=(0,q.Z)((function(e){var n=e.user,t=e.onBtnLogoutClick,r=e.loading,s=(0,a.useState)(be),c=s[0],u=s[1],d=(0,a.useState)({}),p=d[0],f=d[1],m=(0,a.useState)({}),g=m[0],v=m[1],b=(0,a.useState)([]),h=b[0],y=b[1],x=(0,a.useState)([]),j=x[0],_=x[1],w=(0,a.useState)([]),S=w[0],Z=w[1],O=(0,a.useState)([]),E=O[0],k=O[1],D=(0,re.Z)(c.sel_province,S),T=(0,oe.Z)(c.sel_province,c.sel_municipality),F=T.days,I=T.loading,R=T.summary;(0,a.useEffect)((function(){if(F.length>0){var e=(0,pe.Z)(F,"tenday"),n=ve({},e);["Flooding/Submergence 3M","Flooding/Submergence 2H"].includes(n.label)&&(e.label="Flooding/Submergence",e.code="flood_submergence"),f(e),v(n)}}),[F]);var L=(0,Q.Z)("10-day",c.sel_province,c.sel_crop),B=L.cropcalendar,A=L.cropStages,N=L.loading,M=(0,ee.Z)().cropList.map((function(e,n){return{disabled:!1,label:e,id:n}})),W=(0,ne.Z)(p.code,E,c.sel_crop,"tenday",!0),G=W.recommendations,H=W.farmoperations,V=W.loading,q=(0,te.Z)(c.sel_crop,g.code,"tenday_sms"),fe=q.recommendationsSMS,ge=q.loading,ye=(0,ie.Z)(G,A,E),xe=ye.group,je=ye.error,_e=(0,ae.Z)(void 0,void 0),we=_e.services,Se=_e.loading;(0,a.useEffect)((function(){if(F.length>0&&!N&&!V){var e=new Date(F[0].label_full),n=(0,ce.Mn)(e);if(0!==B.length){var t=B.data1.find((function(e){return e.municipality===c.sel_municipality&&e.crop===c.sel_crop})),r=B.data2.find((function(e){return e.municipality===c.sel_municipality&&e.crop===c.sel_crop})),i=[];if(t&&r&&Object.keys(A).length>0){Object.keys(n).forEach((function(e){var o=t[e].split(",");n[e].forEach((function(e){"1st_half"===e&&"none"!==o[0]?i.includes(o[0])||i.push(o[0]):"2nd_half"===e&&"none"!==o[1]&&(i.includes(o[1])||i.push(o[1]))}));var a=r[e].split(",");n[e].forEach((function(e){"1st_half"===e&&"none"!==a[0]?i.includes(a[0])||i.push(a[0]):"2nd_half"===e&&"none"!==a[1]&&(i.includes(a[1])||i.push(a[1]))}))}));var o=i.map((function(e,n){return{id:n,label:A[e].label,code:e}}));k(o)}}}}),[A,B.length,B.data1,B.data2,F,c.sel_municipality,c.sel_crop,N,V]);var Ze=(0,l.v9)((function(e){return e.reports})),Oe=Ze.status,Ee=Ze.report,ke=(0,l.v9)((function(e){return e.dashboard.reportType})),Pe=(0,l.v9)((function(e){return e.dashboard.isEnglish})),Ce=(0,a.useState)(!0),De=Ce[0],Te=Ce[1],Fe=(0,a.useState)(!1),Ie=Fe[0],Re=Fe[1],Le=(0,a.useRef)(!1),Be=(0,a.useState)(""),Ae=Be[0],Ne=Be[1],Me=(0,a.useState)(he),ze=Me[0],We=Me[1],Ge=(0,a.useState)(le.BF),He=Ge[0],Ve=Ge[1],Ye=(0,l.I0)();(0,a.useEffect)((function(){Le.current=!0;var e=function(){var e=me(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,K.$m)();case 3:n=e.sent,Le&&Z(n.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){Le.current=!1}}),[]),(0,a.useEffect)((function(){Ye((0,J.Km)([])),Ye((0,z.s_)())}),[Ye]),(0,a.useEffect)((function(){S.length>0&&_((0,se.m)(S))}),[S]),(0,a.useEffect)((function(){null!==R&&u((function(e){return ve({},e,{sel_month:{label:R.date_range}})}))}),[R]),(0,a.useEffect)((function(){Te(r||V||N||I||ge||Se)}),[r,V,N,I,ge,Se]),(0,a.useEffect)((function(){We(he)}),[Pe]),(0,a.useEffect)((function(){0!==fe.length&&Ne(fe[0].sms.replace("{{10_day_range_identifier}}",c.sel_month.label))}),[fe,c.sel_month]),(0,a.useEffect)((function(){Oe===C.G.FULLFILLED&&null!==Ee&&Le.current&&Ve((function(e){return ve({},e,{msg:"Success! Bulletin report created.",loading:!1,savesuccess:!0,docId:Ee.id})}))}),[Oe,Ee]),(0,a.useEffect)((function(){je||null===xe||Ye((0,J.Km)(xe))}),[xe,je,Ye]);var Ue=function(){var e=me(i().mark((function e(){var n,t,r,o,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===ze.url){e.next=3;break}return Re(!0),e.abrupt("return");case 3:return u((function(e){return ve({},e,{loading:!0,error:"",success:""})})),e.prev=4,n={region:"bicol",province:c.sel_province,municipality:c.sel_municipality,operation:"preview",language:Pe?"en":"tag",crop:null===c||void 0===c?void 0:c.sel_crop,services:we.map((function(e){return e.data}))},Re(!0),u((function(e){return ve({},e,{loading:!0,error:""})})),e.next=10,(0,$.bM)(n);case 10:t=e.sent,r=new Blob([t],{type:"application/pdf"}),(o={}).href=URL.createObjectURL(r),o.download="".concat(c.sel_province,"_").concat(c.sel_municipality,".pdf"),We((function(e){return ve({},e,{url:o.href,filename:o.download})})),u((function(e){return ve({},e,{loading:!1,success:"Bulletin preview created."})})),e.next=25;break;case 19:return e.prev=19,e.t0=e.catch(4),e.next=23,(0,de.fu)(e.t0);case 23:a=e.sent,u((function(e){return ve({},e,{loading:!1,error:a})}));case 25:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(){return e.apply(this,arguments)}}(),qe=function(){var e=me(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ve(ve({},He,{loading:!0,msg:"Saving report..."}));try{t={region:"bicol",province:c.sel_province,municipality:c.sel_municipality,operation:"create",language:Pe?"en":"tag",crop:c.sel_crop,services:we.map((function(e){return e.data}))},Ye((0,X.a0)(t)).unwrap().then((function(){ke!==le.Ry.TEN_DAY&&(Ye((0,P.uq)(le.Ry.TEN_DAY)),Ye((0,X.RC)({uid:n.uid,type:le.Ry.TEN_DAY})))})).catch((function(e){Le.current&&Ve((function(n){return ve({},n,{msg:e,loading:!1,savesuccess:!1,docId:null})}))}))}catch(o){r="",void 0!==o.response&&(r=void 0!==o.response.data&&"[object Blob]"===((i=o.response.data)&&"undefined"!==typeof Symbol&&i.constructor===Symbol?"symbol":typeof i)?o.response.data:""),""===r&&(r=o.message),u((function(e){return ve({},e,{loading:!1,error:r})}))}case 2:case"end":return e.stop()}var i}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.jsx)(U.Z,{loading:r,user:n,onBtnLogoutClick:t,accLevel:ue.DW.ADMIN,children:(0,o.jsx)(Y,{climateRisk:p.label,optsprovinces:j,optsmunicipalities:D,optscrops:M,optscropstages:E,optsactivities:H,sel_options:c,loading:De,recommendationsData:G,isloadingreport:Oe===C.G.PENDING,isdisabled:!1,open:Ie,message:He,smstext:Ae,pageTitle:"10-Day Farm Weather Outlook and Advisory Bulletin",pageDescription:"Create <strong>10-Day Farm Weather Outlook and Advisory</strong> crop recommendations bulletins. Finalized bulletins will be automatically uploaded to the site for public download.",pdfPreview:ze,onSelectItemChange:function(e,n){var t=n.from,r=n.label;if(We(he),h.length>0&&y([]),""!==c.error&&u((function(e){return ve({},e,{error:""})})),Object.keys(n).includes("id"))switch(t){case"province":k([]),u((function(e){return ve({},e,{sel_province:r,sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:null})}));break;case"municipality":k([]),u((function(e){return ve({},e,{sel_municipality:r,sel_crop:null,sel_stage:null,sel_activity:null})}));break;case"crop":u((function(e){return ve({},e,{sel_crop:r,sel_stage:null,sel_activity:null})})),k([])}else if("province"===t){var i=c.sel_month;u(ve({},be,{sel_month:i})),k([])}else"municipality"===t&&(u(ve({},c,{sel_municipality:null,sel_crop:null,sel_day:null,sel_stage:null,sel_activity:null})),k([]))},handlePreview:Ue,handleSave:qe,toggleViewerOpen:function(){Re((function(e){return!e}))},resetSelections:function(){var e=c.sel_month;u(ve({},be,{sel_month:e})),k([]),Ye((0,J.Km)([]))},togglePrompt:function(){Ve((function(e){return ve({},le.BF,{isOpen:!e.isOpen})}))}})})}))},23766:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(67294);function i(e,n){var t=(0,r.useState)([]),i=t[0],o=t[1];return(0,r.useEffect)((function(){var t,r;o(e&&n&&null!==(r=null===(t=n.find((function(n){return n.label===e})))||void 0===t?void 0:t.municipalities)&&void 0!==r?r:[])}),[e,n]),i}},94640:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(67294),i=t(9473),o=t(47426),a=t(56867),l=t(77715),s=t(901);function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function u(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,n){var t=(0,r.useState)([]),c=t[0],d=t[1],p=(0,r.useState)(null),f=p[0],m=p[1],g=(0,r.useState)(""),v=g[0],b=g[1],h=(0,r.useState)(""),y=h[0],x=h[1],j=(0,r.useState)(!1),_=j[0],w=j[1],S=(0,i.I0)(),Z=(0,i.v9)((function(e){return e.tendayweather})),O=Z.ids,E=Z.status,k=Z.entities,P=Z.error;return(0,r.useEffect)((function(){null!==e&&(b(""),x(""),S((0,a.R)(e)))}),[e,S]),(0,r.useEffect)((function(){b(P)}),[P]),(0,r.useEffect)((function(){w(E===s.G.PENDING)}),[E]),(0,r.useEffect)((function(){if(b(""),x(""),E===s.G.FULLFILLED&&O.length>0&&""===P&&null!==n){var e=Object.values(k).find((function(e){return e.municipality===n}));if(void 0!==e){var t,r,i=JSON.parse(e.data),a=Object.values(o.MW);d(i.reduce((function(e,n,o){var s,c,d;return u(e).concat([{id:o,label:n.day_format,label_full:null===(s=(0,l.Ay)(n.day_format,i[9].day_format))||void 0===s?void 0:s.toDateString(),rainfall:n.rainfall,forecast:null!==(t=null===(c=a.find((function(e){return e.tenday===n.rainfall})))||void 0===c?void 0:c.sync)&&void 0!==t?t:"-",code:null!==(r=null===(d=a.find((function(e){return e.tenday===n.rainfall})))||void 0===d?void 0:d.label)&&void 0!==r?r:"-"}])}),[]));var c=new Date(1e3*i[0].date_start.seconds),p=(0,l.Mn)(c);c.getFullYear()!==(new Date).getFullYear()&&b("Invalid year detected in the 10-day validity date range: ".concat(i[0].date_range)),m({months:p,date_start:c,date_range:i[0].date_range})}else{var f=P||"Weather data for the municipality is not available at the moment, however, you can continue viewing recommendations. Please verify that the municipality name is present in the 10-Day weather forecast.";P?(d([]),m(null),b(f)):x(f)}}}),[n,k,O,E,P]),{days:c,summary:f,loading:_,error:v,warning:y}}}},function(e){e.O(0,[5778,3593,9964,8858,1903,6279,542,7944,6295,1433,6572,1050,2044,6619,1855,3622,9774,2888,179],(function(){return n=67947,e(e.s=n);var n}));var n=e.O();_N_E=n}]);