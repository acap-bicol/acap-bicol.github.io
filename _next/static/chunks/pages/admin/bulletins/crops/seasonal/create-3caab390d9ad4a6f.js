(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7970],{40108:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/bulletins/crops/seasonal/create",function(){return t(39772)}])},39772:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return he}});var r=t(34051),o=t.n(r),i=t(85893),l=t(67294),a=t(9473),s=t(16327),c=t(30560),u=t(87006),p=t(87682),d=t(53063),f=t(12671),m=t(61690),v=t(59111),g=t(87784),h=t(52955),b=t(59390),x=t(23766),y=t(38885),j=t(22856),_=t(27941);function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e){var n=(0,l.useState)([]),t=n[0],r=n[1],o=(0,l.useState)(""),i=o[0],a=o[1];(0,l.useEffect)((function(){if(a(""),e.length>0)try{var n=e.map((function(e){return{impact:e.impact_outlook_english,impact_tagalog:e.impact_outlook_tagalog}})).filter((function(e){return""!==e.impact_outlook_english&&""!==e.impact_outlook_tagalog}));return n=c(n),void r([{impact:s(n.impact),impact_tagalog:s(n.impact_tagalog)}])}catch(t){a(t)}else r([])}),[e]);var s=function(e){var n="-",t=e.reduce((function(e,t){return t.includes("<p>")?("list"===n&&(e+="</ul>"),e+=t,n="p"):(["-","p"].includes(n)&&(e+="<ul>"),e+=t,n="list"),e}),"");return"list"===n&&(t+="</ul>"),t},c=function(e){var n=[];return e.reduce((function(e,t){return Object.keys(e).forEach((function(r){var o=t[r].replace(/<ul>/g,"");(o=(o=o.replace(/<\/ul>/g,"")).replace(/<li>/g,"")).split("</li>").forEach((function(t){t.includes("<p>")?t.replace(/<p>/g,"").split("</p>").forEach((function(t){n.includes(t)||""===t||(n.push(t),e[r].push("<p>".concat(t,"</p>")))})):n.includes(t)||""===t||(n.push(t),e[r].push("<li>".concat(t,"</li>")))}))})),function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){S(e,n,t[n])}))}return e}({},e)}),{impact:[],impact_tagalog:[]})};return{group:t,error:i}}var w=t(47426),Z={forecast:"",label:"",value:0};var k=t(15497),E=t(901),P=t(27392),C=t(95243),T=t(11163),I=t(45697),R=t.n(I),A=t(21023),L=t(93946),B=t(41664),F=t(76295),z=t(87357),M=t(98456),N=t(11057),D=t(56863),U=t(87918),W=t(67720),G=t(86886),H=t(61903),V=t(15861),q=t(88409),X=t(40044),$=t(11829),J=t(19227),K=t(22094),Q=t(37634);function Y(e){var n=e.recommendations,t=void 0===n?[]:n,r=e.title,o=void 0===r?"":r,a=e.subtitle,s=void 0===a?"":a,c=e.titleFontSize,u=void 0===c?"h5":c,p=e.recommendationsEng,d=void 0===p?"management_recommendations_english":p,f=e.recommendationsTag,m=void 0===f?"management_recommendations_tagalog":f,v=e.impactOutlookEng,g=void 0===v?"impact_outlook_english":v,h=e.impactOutlookTag,b=void 0===h?"impact_outlook_tagalog":h,x=e.isTagalog,y=void 0===x?null:x,j=e.isShowTitle,_=void 0===j||j,S=(0,l.useState)(!0),O=S[0],w=S[1];return(0,l.useEffect)((function(){null!==y&&w(!y)}),[y]),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[_&&(0,i.jsxs)("div",{style:{flexGrow:1},children:[(0,i.jsxs)(V.Z,{variant:u,children:[o," Recommendations"]}),(0,i.jsx)("h2",{children:s})]}),null===y&&(0,i.jsx)(U.Z,{variant:"outlined",size:"small",label:O?"Tagalog":"English",onClick:function(){return w((function(e){return!e}))},className:"toggleButton"})]}),t.length>0?(0,i.jsxs)("div",{children:["impact"!==g&&(0,i.jsx)(V.Z,{variant:"subtitle1",children:"Impact Outlooks"}),t.map((function(e,n){return(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:O?e[g]||"No Impact Outlook":e[b]||"Walang makitang impak awtluk"}},n)})),(0,i.jsx)("br",{}),"impact"!==g&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(V.Z,{variant:"subtitle1",children:"Recommendations"}),t.map((function(e,n){return(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:O?e[d]||"No Recommendations":e[m]||"Walang makitang rekomendasyon"}},n)}))]})]}):(0,i.jsx)(Q.Z,{message:"We cannot find recommendations for your selected options."})]})}Y.propTypes={recommendations:R().array,title:R().string,subtitle:R().string,titleFontSize:R().string,recommendationsEng:R().string,recommendationsTag:R().string,isTagalog:R().bool,isShowTitle:R().bool};var ee=Y,ne=t(79316),te=t(22757);function re(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function oe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){re(e,n,t[n])}))}return e}function ie(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function le(e){var n,t=function(e){var n=e.children,t=e.value,r=e.index,o=ie(e,["children","value","index"]);return(0,i.jsx)("div",oe({role:"tabpanel",hidden:t!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},o,{children:t===r&&(0,i.jsx)(z.Z,{sx:{p:3},children:n})}))},r=function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}},o=(0,l.useState)(!1),s=o[0],c=o[1],u=(0,l.useRef)(!0),p=(0,T.useRouter)(),d=(0,a.I0)(),m=(0,l.useState)(0),v=m[0],g=m[1],h=e.sel_options,b=e.recommendations,x=e.recommendationsImpacts,y=e.climateRisk,j=e.optsprovinces,_=e.optsmunicipalities,S=e.optsactivities,O=e.optscrops,Z=e.optscropstages,k=e.monthForecast,E=e.open,P=e.isTagalog,C=e.loading,I=e.isloadingreport,Q=e.message,Y=e.smstext,re=e.pdfPreview,le=e.handleSave,ae=e.handlePreview,se=e.togglePrompt,ce=e.toggleViewerOpen,ue=e.toggleGlobalLanguage,pe=e.onSelectItemChange,de=e.resetSelections;(0,l.useEffect)((function(){return u.current=!0,function(){u.current=!1}}),[]),(0,l.useEffect)((function(){null===h.sel_month&&!0===s&&c(!1)}),[h.sel_month,s]);var fe=function(){d((0,f.s_)()),p.push("/admin/bulletins/crops/report/view/?docId=".concat(Q.docId))},me=function(){var e="Loading...";return j.length>0&&(e=null===h.sel_province?"Select a province":"Province"),e};return t.propTypes={children:R().node,index:R().number.isRequired,value:R().number.isRequired},(0,i.jsxs)("div",{children:[(0,i.jsx)(J.Z,{isOpen:Q.isOpen,maxWidth:"xs",openButtonText:null,title:Q.title,contentText:Q.msg,loading:Q.loading,modalCancelHandlerCB:function(){Q.savesuccess?fe():se()},modalConfirmHandlerCB:function(){Q.savesuccess?fe():le()}}),(0,i.jsx)(K.Z,{open:E,pdfPreview:re,error:h.error,loading:h.loading,toggleViewerOpen:ce}),(0,i.jsxs)(G.ZP,{container:!0,sx:te.Z.container,children:[(0,i.jsxs)(z.Z,{sx:te.Z.headerText,children:[(0,i.jsxs)(z.Z,{children:[(0,i.jsx)(V.Z,{variant:"h5",children:"Regional Seasonal Climate Outlook and Advisory Crop Recommendations Bulletin"}),(0,i.jsxs)("p",{children:["Create ",(0,i.jsx)("strong",{children:"Seasonal"})," crop recommendations bulletins. Finalized bulletins will be automatically uploaded to the site for public download."]})]}),(0,i.jsx)(z.Z,{children:(0,i.jsx)(L.Z,{"aria-label":"exit",size:"medium",children:(0,i.jsx)(B.default,{href:"/admin/bulletins/crops",passHref:!0,children:(0,i.jsx)(A.Z,{fontSize:"inherit"})})})})]}),(0,i.jsxs)(G.ZP,{item:!0,sx:te.Z.item,xs:12,lg:4,children:[(0,i.jsx)(V.Z,{variant:"h6",children:"Selection Options"}),(0,i.jsx)(F.Z,{disablePortal:!0,id:"province",size:"small",value:h.sel_province,disabled:0===j.length||C,options:j,sx:te.Z.autocomplete,PaperComponent:$.Z,renderInput:function(e){return(0,i.jsx)(H.Z,oe({},e,{label:me()}))},isOptionEqualToValue:function(e,n){return e.label===n},onChange:function(e,n){return pe(e,oe({},n,{from:"province"}))}}),(0,i.jsx)(F.Z,{disablePortal:!0,id:"municipality",size:"small",value:h.sel_municipality,disabled:0===_.length||C,options:_,sx:te.Z.autocomplete,PaperComponent:$.Z,renderInput:function(e){return(0,i.jsx)(H.Z,oe({},e,{label:null===h.sel_municipality?"Select a municipality":"Municipality"}))},getOptionDisabled:function(e){return e.disabled||void 0!==e.iscalendar},isOptionEqualToValue:function(e,n){return e.label===n},onChange:function(e,n){return pe(e,oe({},n,{from:"municipality"}))}}),(0,i.jsx)(F.Z,{disablePortal:!0,id:"crop",size:"small",value:h.sel_crop,disabled:0===O.length||null===h.sel_municipality||C,options:O,sx:te.Z.autocomplete,PaperComponent:$.Z,renderInput:function(e){return(0,i.jsx)(H.Z,oe({},e,{label:null===h.sel_crop?"Select a crop type":"Crop"}))},isOptionEqualToValue:function(e,n){return e.label===n},getOptionDisabled:function(e){return e.disabled},onChange:function(e,n){return pe(e,oe({},n,{from:"crop"}))}}),(0,i.jsxs)(D.Z,{disableElevation:!0,size:"small","aria-label":"outlined button controls group",disabled:I||null===h.sel_municipality||null===h.sel_crop||null===h.sel_month,sx:{marginTop:"16px",float:"right"},children:[(0,i.jsx)(N.Z,{variant:"outlined",disabled:C||I,onClick:de,children:"Reset"}),(0,i.jsx)(N.Z,{variant:"contained",onClick:function(){return c((function(e){return!e}))},disabled:C||null===h.sel_month||s,children:"Generate"})]})]}),(0,i.jsx)(G.ZP,{item:!0,sx:te.Z.item,xs:12,lg:8,children:(0,i.jsx)(ne.Z,{climateRisk:y,selecteditems:h,cropstages:null===Z||void 0===Z?void 0:Z.map((function(e){return e.label})).toString().split(",").join(", "),farmoperations:S.map((function(e){return e.label})).toString().split(",").join(", "),loading:C})})]}),(0,i.jsxs)(G.ZP,{container:!0,sx:te.Z.container,gap:3,style:{marginTop:"24px"},children:[(0,i.jsxs)(G.ZP,{item:!0,sx:te.Z.item,xs:12,lg:12,children:[(0,i.jsxs)(z.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsx)(V.Z,{variant:"h6",children:"Crop Recommendations"}),(0,i.jsx)(M.Z,{size:24,color:"primary",sx:{display:C?"block":"none"}})]}),null!==h.sel_crop&&null!==h.sel_month&&s&&(0,i.jsxs)(z.Z,{children:[(0,i.jsx)(z.Z,{sx:{display:{md:"block",lg:"flex"}},children:(0,i.jsxs)(V.Z,{variant:"h5",sx:{display:"block",flexGrow:{xs:12,sm:3}},children:[h.sel_crop," Recommendations"]})}),k.forecast!==w.DD&&(0,i.jsxs)(z.Z,{sx:{width:"100%",marginTop:{xs:"85px",lg:"0px"},"& hr":{marginBottom:"32px"}},children:[(0,i.jsx)(z.Z,{sx:{borderBottom:1,borderColor:"divider","& hr":{color:"red"}},children:(0,i.jsxs)(q.Z,{value:v,onChange:function(e,n){g(n)},"aria-label":"basic tabs example",children:[(0,i.jsx)(X.Z,oe({label:"PDF FORM"},r(0))),(0,i.jsx)(X.Z,oe({label:"SMS FORM"},r(1)))]})}),(0,i.jsxs)(t,{value:v,index:0,children:[(0,i.jsxs)(z.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px"},children:[(0,i.jsx)(V.Z,{variant:"h4",children:"Impact Outlooks"}),(0,i.jsx)(U.Z,{size:"medium",variant:"outlined",label:P?"English":"Tagalog",onClick:function(){return ue()},sx:{width:"90px"}})]}),(0,i.jsx)(z.Z,{sx:te.Z.recSeasonal,children:(0,i.jsx)(ee,{recommendations:x,title:"",subtitle:"",titleFontSize:"h6",isTagalog:P,isShowTitle:!1,impactOutlookEng:"impact",impactOutlookTag:"impact_tagalog"})}),(0,i.jsx)("hr",{}),(0,i.jsx)(V.Z,{variant:"h4",children:"Practices"}),b&&(null===(n=Object.keys(b))||void 0===n?void 0:n.map((function(e){return Object.keys(b[e]).map((function(n,t){return(0,i.jsxs)(z.Z,{sx:te.Z.recSeasonal,children:[(0,i.jsxs)(V.Z,{variant:"h6",children:[e," - ",n]}),(0,i.jsx)(ee,{recommendations:b[e][n],title:"",subtitle:"",titleFontSize:"h6",isTagalog:P})]},"rec-".concat(t))}))})))]}),(0,i.jsx)(t,{value:v,index:1,children:Y})]})]})]}),(0,i.jsxs)(z.Z,{sx:{marginBottom:"16px",width:"100%",display:s?"block":"none"},children:[(0,i.jsx)("br",{}),(0,i.jsx)(W.Z,{}),(0,i.jsx)("br",{}),""!==h.error&&(0,i.jsxs)(V.Z,{variant:"caption",sx:{color:"red"},children:["Error: ",h.error]}),(0,i.jsxs)(D.Z,{size:"large","aria-label":"large button group",disabled:I||k.forecast===w.DD,sx:{display:"flex",justifyContent:"flex-end",marginTop:"8px"},children:[(0,i.jsx)(B.default,{href:"/admin/bulletins/crops",passHref:!0,children:(0,i.jsx)(N.Z,{disabled:h.loading,children:"Cancel"})}),(0,i.jsxs)(N.Z,{disabled:h.loading,onClick:ae,children:[(0,i.jsx)("span",{style:{display:I?"none":"block"},children:"Preview"})," ","\xa0",(0,i.jsx)(M.Z,{size:24,color:"secondary",sx:{display:I?"block":"none"}})]}),(0,i.jsx)(N.Z,{variant:"contained",onClick:se,disableElevation:!0,disabled:h.loading,children:"Save"})]})]})]})]})}le.propTypes={optsprovinces:R().array,optsmunicipalities:R().array,optscrops:R().array,optsmonths:R().array,optsactivities:R().array,sel_options:R().object,monthForecast:R().object,recommendations:R().object,recommendationsImpacts:R().array,loading:R().bool,isloadingreport:R().bool,open:R().bool,isTagalog:R().bool,message:R().object,smstext:R().string,pdfPreview:R().object,onSelectItemChange:R().func,handlePreview:R().func,handleSave:R().func,toggleViewerOpen:R().func,toggleGlobalLanguage:R().func,resetSelections:R().func,togglePrompt:R().func};var ae=le,se=t(66383);function ce(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ue(e,n,t,r,o,i,l){try{var a=e[i](l),s=a.value}catch(c){return void t(c)}a.done?n(s):Promise.resolve(s).then(r,o)}function pe(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function l(e){ue(i,r,o,l,a,"next",e)}function a(e){ue(i,r,o,l,a,"throw",e)}l(void 0)}))}}function de(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function fe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){de(e,n,t[n])}))}return e}function me(e){return function(e){if(Array.isArray(e))return ce(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return ce(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ce(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ve={sel_province:null,sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:[],sel_month:null,sel_condition:{id:0,from:"weather_condition",label:w.MW.WAY_BELOW_NORMAL.label},loading:!1,error:"",success:""},ge={url:"",filename:""};var he=(0,C.Z)((function(e){var n=e.user,t=e.onBtnLogoutClick,r=e.loading,S=(0,l.useState)(ve),C=S[0],T=S[1],I=(0,l.useState)({}),R=I[0],A=I[1],L=(0,l.useState)({}),B=L[0],F=L[1],z=(0,l.useState)([]),M=z[0],N=z[1],D=(0,l.useState)([]),U=D[0],W=D[1],G=(0,l.useState)([]),H=G[0],V=G[1],q=(0,l.useState)([]),X=q[0],$=q[1],J=(0,l.useState)(null),K=J[0],Q=J[1],Y=(0,l.useState)(!0),ee=Y[0],ne=Y[1],te=(0,l.useState)(!1),re=te[0],oe=te[1],ie=(0,l.useRef)(!1),le=(0,x.Z)(C.sel_province,X),ce=(0,p.m$)(c.M.WEATHER_FORECASTS,"bicol",c.M.SUB_SEASONAL,"name"),ue=ce.documents,de=ce.loading,he=function(e,n){var t=(0,l.useState)(Z),r=t[0],o=t[1];return(0,l.useEffect)((function(){if(void 0!==e.months&&n){var t,r,i,l,a,s=e.months.find((function(e){return e.mo===n.id})),c=Object.values(w.MW).find((function(e){return null!==(t=e.label===(null===s||void 0===s?void 0:s.con))&&void 0!==t?t:""}));o({forecast:null!==(r=null===s||void 0===s?void 0:s.con)&&void 0!==r?r:"",value:null!==(i=null===s||void 0===s?void 0:s.val)&&void 0!==i?i:0,label:null!==(l=null===c||void 0===c?void 0:c.sync)&&void 0!==l?l:"-",code:null!==(a=null===c||void 0===c?void 0:c.label)&&void 0!==a?a:"-"})}}),[e,n]),{forecast:r}}(B,C.sel_month),be=he.forecast,xe=(0,b.Z)(C.sel_province,C.sel_crop),ye=xe.cropcalendar,je=xe.cropStages,_e=xe.loading,Se=(0,_.Z)(C.sel_crop,R.code,"seasonal_sms"),Oe=Se.recommendationsSMS,we=Se.loading;(0,l.useEffect)((function(){var e;0!==(null===Oe||void 0===Oe?void 0:Oe.length)&&Ge(Oe[0].sms.replace("{{seasonal_range_identifier}}",null===C||void 0===C||null===(e=C.sel_month)||void 0===e?void 0:e.label))}),[Oe,C.sel_month]),(0,l.useEffect)((function(){if(0!==ye.length&&!ee&&0!==M.length&&null!==C.sel_municipality){var e=ye.data1.find((function(e){return e.municipality===C.sel_municipality&&e.crop===C.sel_crop})),n=ye.data2.find((function(e){return e.municipality===C.sel_municipality&&e.crop===C.sel_crop})),t=[];M.forEach((function(r){var o,i;if(e){var l=null===(o=e[r.id])||void 0===o?void 0:o.split(",");l&&2===(null===l||void 0===l?void 0:l.length)&&("none"===l[0]||t.includes(l[0])||t.push(l[0]),"none"===l[1]||t.includes(l[1])||t.push(l[1]));var a=null===(i=n[r.id])||void 0===i?void 0:i.split(",");a&&2===(null===a||void 0===a?void 0:a.length)&&("none"===a[0]||t.includes(a[0])||t.push(a[0]),"none"===a[1]||t.includes(a[1])||t.push(a[1]))}}));var r=t.map((function(e,n){return{id:n,label:je[e].label,code:e}}));Q(r)}}),[ye,ee,C.sel_crop,C.sel_municipality,M,je]);var Ze=(0,y.Z)().cropList.map((function(e,n){return{disabled:!1,label:e,id:n}})),ke=(0,j.Z)(R.code,K,C.sel_crop,"seasonal",!0),Ee=ke.recommendations,Pe=ke.farmoperations,Ce=ke.loading,Te=(0,k.Z)(Ee,je,K).group,Ie=O(Ee).group,Re=(0,l.useState)(ge),Ae=Re[0],Le=Re[1],Be=(0,l.useState)(!1),Fe=Be[0],ze=Be[1],Me=(0,l.useState)(P.BF),Ne=Me[0],De=Me[1],Ue=(0,l.useState)(""),We=Ue[0],Ge=Ue[1],He=(0,a.v9)((function(e){return e.dashboard.reportType})),Ve=(0,a.I0)(),qe=(0,a.v9)((function(e){return e.reports})),Xe=qe.report,$e=qe.status;(0,l.useEffect)((function(){var e;if((null===B||void 0===B||null===(e=B.months)||void 0===e?void 0:e.length)>0&&null!==C.sel_crop){A((0,h.Z)(B.months,"seasonal"));var n="".concat(w.re[B.mos[0].toUpperCase()].format," - ").concat(w.re[B.mos[5].toUpperCase()].format);T((function(e){return fe({},e,{sel_month:{label:n}})}))}}),[B,C.sel_crop]),(0,l.useEffect)((function(){ie.current=!0;var e=function(){var e=pe(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.$m)();case 3:n=e.sent,ie&&$(n.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){ie.current=!1}}),[]),(0,l.useEffect)((function(){Ve((0,f.s_)())}),[Ve]),(0,l.useEffect)((function(){X.length>0&&!de&&!r&&(V((0,v.m)(X)),N(ue[0].mos.reduce((function(e,n){return me(e).concat([{id:w.re[n.toUpperCase()].code,label:w.re[n.toUpperCase()].format,disabled:!1}])}),[])))}),[X,ue,de,r]),(0,l.useEffect)((function(){ne(r||de||Ce||_e||we)}),[r,de,Ce,_e,we]),(0,l.useEffect)((function(){$e===E.G.FULLFILLED&&null!==Xe&&ie.current&&De((function(e){return fe({},e,{msg:"Success! Bulletin report created.",loading:!1,savesuccess:!0,docId:Xe.id})}))}),[$e,Xe]);var Je=function(){var e=pe(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:De(fe({},Ne,{loading:!0,msg:"Saving report..."}));try{t={region:"bicol",province:C.sel_province,municipality:C.sel_municipality,crop:C.sel_crop,operation:"create",language:re?"tag":"en",isFull:!0},Ve((0,m.Br)(t)).unwrap().then((function(){He!==P.Ry.SEASONAL&&(Ve((0,d.uq)(P.Ry.SEASONAL)),Ve((0,m.RC)({uid:n.uid,type:P.Ry.SEASONAL})))})).catch((function(e){ie.current&&De((function(n){return fe({},n,{msg:e.message,loading:!1,savesuccess:!1,docId:null})}))}))}catch(i){r="",void 0!==i.response&&(r=void 0!==i.response.data&&"[object Blob]"===((o=i.response.data)&&"undefined"!==typeof Symbol&&o.constructor===Symbol?"symbol":typeof o)?i.response.data:""),""===r&&(r=i.message)}case 2:case"end":return e.stop()}var o}),e)})));return function(){return e.apply(this,arguments)}}(),Ke=function(){var e=pe(o().mark((function e(){var n,t,r,i,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===Ae.url){e.next=3;break}return ze(!0),e.abrupt("return");case 3:return T((function(e){return fe({},e,{loading:!0,error:"",success:""})})),e.prev=4,n={region:"bicol",province:C.sel_province,municipality:C.sel_municipality,crop:C.sel_crop,operation:"preview",language:re?"tag":"en",isFull:!0},ze(!0),T((function(e){return fe({},e,{loading:!0,error:""})})),e.next=10,(0,u.pl)(n);case 10:t=e.sent,r=new Blob([t],{type:"application/pdf"}),(i={}).href=URL.createObjectURL(r),i.download="".concat(C.sel_province,"_").concat(C.sel_municipality,"-").concat(C.sel_crop,".pdf"),Le((function(e){return fe({},e,{url:i.href,filename:i.download})})),T((function(e){return fe({},e,{loading:!1,success:"Bulletin preview created."})})),e.next=25;break;case 19:return e.prev=19,e.t0=e.catch(4),e.next=23,(0,g.fu)(e.t0);case 23:l=e.sent,T((function(e){return fe({},e,{loading:!1,error:l})}));case 25:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(){return e.apply(this,arguments)}}();return(0,i.jsx)(se.Z,{loading:r,user:n,onBtnLogoutClick:t,accLevel:w.DW.ADMIN,children:(0,i.jsx)(ae,{climateRisk:R.label,optsprovinces:H,optsmunicipalities:le,optscrops:Ze,optsmonths:M,optscropstages:K,optsactivities:Pe,sel_options:C,monthForecast:be,recommendations:Te,recommendationsImpacts:Ie,loading:ee,isloadingreport:$e===E.G.PENDING,open:Fe,isTagalog:re,message:Ne,smstext:We,pdfPreview:Ae,onSelectItemChange:function(e,n){var t=n.from,r=n.label;if(Le(ge),U.length>0&&W([]),Object.keys(n).includes("id"))switch(t){case"province":Q(null),F(ue.find((function(e){return e.name===r}))),T(fe({},ve,{sel_province:r}));break;case"municipality":Q(null),T(fe({},C,{sel_municipality:r,sel_crop:null,sel_month:null,sel_stage:null,sel_activity:null}));break;case"crop":T(fe({},C,{sel_crop:r,sel_month:null,sel_stage:null,sel_activity:null}))}else"province"===t?(T(ve),Q(null)):"municipality"===t?(T(fe({},C,{sel_municipality:null,sel_crop:null,sel_month:null,sel_stage:null,sel_activity:null})),Q(null)):"crop"===t?(T(fe({},C,{sel_crop:null,sel_month:null,sel_stage:null,sel_activity:null})),Q(null)):"month"===t&&(T(fe({},C,{sel_month:null,sel_stage:null,sel_activity:null})),Q(null))},handlePreview:Ke,handleSave:Je,toggleViewerOpen:function(){ze((function(e){return!e}))},toggleGlobalLanguage:function(){oe((function(e){return!e})),Le(ge)},resetSelections:function(){T(ve),Q(null),W([])},togglePrompt:function(){De((function(e){return fe({},P.BF,{isOpen:!e.isOpen})}))}})})}))},15497:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(67294);function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n,t){var o=(0,r.useState)(null),l=o[0],a=o[1],s=(0,r.useState)(""),c=s[0],u=s[1];return(0,r.useEffect)((function(){if(u(""),(null===e||void 0===e?void 0:e.length)>0&&(null===t||void 0===t?void 0:t.length)>0){var r=e.map((function(e){return e.farming_activity})).filter((function(e,n,t){return t.indexOf(e)===n})),o=null===t||void 0===t?void 0:t.map((function(e){return e.code}));try{a(o.reduce((function(t,o){return r.forEach((function(r){var l=n[o].label,a=e.filter((function(e){return e.crop_stage===o&&e.farming_activity===r}));a.length>0&&l&&(void 0===t[l]&&(t[l]={}),void 0===t[l][r]&&(t[l][r]=[]),t[l][r]=i(t[l][r]).concat(i(a)))})),t}),{}))}catch(l){a(null),u(l)}}else a(null)}),[e,n,t]),{group:l,error:c}}},27941:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(34051),o=t.n(r),i=t(67294),l=t(1096);function a(e,n,t,r,o,i,l){try{var a=e[i](l),s=a.value}catch(c){return void t(c)}a.done?n(s):Promise.resolve(s).then(r,o)}function s(e,n,t){var r=(0,i.useState)([]),s=r[0],c=r[1],u=(0,i.useState)(!1),p=u[0],d=u[1],f=(0,i.useState)(""),m=f[0],v=f[1];return(0,i.useEffect)((function(){var r=function(){var r,i=(r=o().mark((function r(){var i,a,s,u;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,i=[],d(!1),v(""),r.next=6,(0,l.iR)({crop:e,climateRisk:n,type:t});case 6:i=r.sent,d(!1),c(i||[]),r.next=18;break;case 11:r.prev=11,r.t0=r.catch(0),u=null!==(s=null===r.t0||void 0===r.t0||null===(a=r.t0.response)||void 0===a?void 0:a.data)&&void 0!==s?s:r.t0.message,v(u),d(!1);case 18:case"end":return r.stop()}}),r,null,[[0,11]])})),function(){var e=this,n=arguments;return new Promise((function(t,o){var i=r.apply(e,n);function l(e){a(i,t,o,l,s,"next",e)}function s(e){a(i,t,o,l,s,"throw",e)}l(void 0)}))});return function(){return i.apply(this,arguments)}}();e&&t?r():c([])}),[e,n,t]),{recommendationsSMS:s,loading:p,error:m}}},87682:function(e,n,t){"use strict";t.d(n,{ky:function(){return d},Kx:function(){return f},m$:function(){return m},tl:function(){return v}});var r=t(34051),o=t.n(r),i=t(67294),l=t(25321),a=t(96772);function s(e,n,t,r,o,i,l){try{var a=e[i](l),s=a.value}catch(c){return void t(c)}a.done?n(s):Promise.resolve(s).then(r,o)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function l(e){s(i,r,o,l,a,"next",e)}function a(e){s(i,r,o,l,a,"throw",e)}l(void 0)}))}}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}function d(e,n){var t=(0,i.useState)(null),r=t[0],s=t[1],u=(0,i.useState)(!0),p=u[0],d=u[1],f=(0,i.useState)(""),m=f[0],v=f[1],g=(0,i.useRef)(!0);return(0,i.useEffect)((function(){var t=function(){var t=c(o().mark((function t(){var r,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=(0,l.JU)(a.db,e,n),t.next=4,(0,l.QT)(r);case 4:(i=t.sent).exists()&&g.current&&(s(i.data()),d(!1)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),v(t.t0.message),d(!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){return g.current=!1}}),[e,n]),[r,p,m]}function f(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=(0,i.useState)([]),s=r[0],u=r[1],d=(0,i.useState)(!0),f=d[0],m=d[1],v=(0,i.useState)(""),g=v[0],h=v[1],b=(0,i.useRef)(!0);return(0,i.useEffect)((function(){var r=function(){var r=c(o().mark((function r(){var i,s,c;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,i=(0,l.hJ)(a.db,e),s=t||(0,l.IO)(i,(0,l.Xo)(n,"asc")),r.next=5,(0,l.PL)(s);case 5:c=r.sent,b.current&&(u(c.docs.map((function(e){return p({},e.data())}))),m(!1)),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(0),h(r.t0.message),m(!1);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(){return r.apply(this,arguments)}}();return r(),function(){return b.current=!1}}),[e,n,t]),{documents:s,loading:f,error:g}}function m(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=(0,i.useState)([]),u=s[0],d=s[1],f=(0,i.useState)(!0),m=f[0],v=f[1],g=(0,i.useState)(""),h=g[0],b=g[1],x=(0,i.useRef)(!0);return(0,i.useEffect)((function(){var i=function(){var i=c(o().mark((function i(){var s,c;return o().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,s=(0,l.IO)((0,l.hJ)(a.db,e,n,t),(0,l.Xo)(r)),o.next=4,(0,l.PL)(s);case 4:c=o.sent,x.current&&(d(c.docs.map((function(e){return p({},e.data())}))),v(!1)),o.next=12;break;case 8:o.prev=8,o.t0=o.catch(0),b(o.t0.message),v(!1);case 12:case"end":return o.stop()}}),i,null,[[0,8]])})));return function(){return i.apply(this,arguments)}}();return i(),function(){return x.current=!1}}),[e,n,t,r]),{documents:u,loading:m,error:h}}function v(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=arguments.length>4?arguments[4]:void 0,u=(0,i.useState)([]),d=u[0],f=u[1],m=(0,i.useState)(!0),v=m[0],g=m[1],h=(0,i.useState)(""),b=h[0],x=h[1],y=(0,i.useRef)(!0);return(0,i.useEffect)((function(){var i=function(){var i=c(o().mark((function i(){var c,u;return o().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,c=(0,l.hJ)(a.db,e,n,t),""!==r&&(c=(0,l.IO)(c,(0,l.Xo)(r))),s&&(c=(0,l.IO)(c,(0,l.b9)(s))),o.next=6,(0,l.PL)(c);case 6:u=o.sent,y.current&&(f(u.docs.map((function(e){return p({},e.data())}))),g(!1)),o.next=14;break;case 10:o.prev=10,o.t0=o.catch(0),x(o.t0.message),g(!1);case 14:case"end":return o.stop()}}),i,null,[[0,10]])})));return function(){return i.apply(this,arguments)}}();return i(),function(){return y.current=!1}}),[e,n,t,r,s]),{documents:d,loading:v,error:b}}}},function(e){e.O(0,[5778,9564,9964,9522,1903,6279,542,7944,6295,6572,1050,7655,9385,9774,2888,179],(function(){return n=40108,e(e.s=n);var n}));var n=e.O();_N_E=n}]);