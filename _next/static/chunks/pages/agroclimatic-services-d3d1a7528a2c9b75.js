(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6603],{67741:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/agroclimatic-services",function(){return t(78613)}])},43370:function(e,n,t){"use strict";var i=t(85893),r=t(9008);n.Z=function(e){var n=e.title,t=e.ogDescription,o=e.ogImageURL,a=e.ogImgAlt,l=void 0===a?"Picture":a,s=e.ogSiteName,c=void 0===s?"ACAP-BICOL":s,u=e.ogURL;return(0,i.jsxs)(r.default,{children:[(0,i.jsx)("meta",{name:"description",content:t}),(0,i.jsx)("meta",{name:"og:description",content:t}),(0,i.jsx)("meta",{property:"og:title",content:n}),(0,i.jsx)("meta",{property:"og:site_name",content:c}),(0,i.jsx)("meta",{property:"og:image",content:o}),(0,i.jsx)("meta",{property:"og:image:width",content:"600"}),(0,i.jsx)("meta",{property:"og:image:height",content:"315"}),(0,i.jsx)("meta",{property:"og:image:alt",content:l}),(0,i.jsx)("meta",{property:"og:url",content:u}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:title",content:n}),(0,i.jsx)("meta",{name:"twitter:image",content:o}),(0,i.jsx)("title",{children:n})]})}},11829:function(e,n,t){"use strict";var i=t(85893),r=t(55113);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.Z=function(e){return(0,i.jsx)(r.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){o(e,n,t[n])}))}return e}({},e,{elevation:15}))}},37634:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var i=t(85893),r=t(25675),o=t(87357),a=t(15861),l=t(26660),s={container:{textAlign:"center",minHeight:"200px",width:"100%",border:"4px solid rgba(0, 0, 0, 0.11)",borderRadius:function(e){return e.spacing(2)},color:function(e){return e.palette.text.secondary},borderStyle:"dashed",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(4)}}};var c=function(e){var n=e.message,t=void 0===n?"Failed to load data":n,c=e.style,u=void 0===c?{}:c;return(0,i.jsxs)(o.Z,{sx:s.container,style:u,children:[(0,i.jsx)(r.default,{unoptimized:!0,src:(0,l.assetPrefixer)("images/icons/empty-state-light.svg"),height:120,width:120,loader:l.imageLoader,alt:"Empty data"}),(0,i.jsx)(a.Z,{variant:"subtitle1",children:t})]})}},11427:function(e,n,t){"use strict";var i=t(85893),r=t(55113);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var a=(0,t(11496).ZP)((function(e){return(0,i.jsx)(r.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){o(e,n,t[n])}))}return e}({},e))}))((function(e){var n=e.theme;return{padding:n.spacing(3),borderRadius:n.spacing(1),boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"}}));n.Z=a},24478:function(e,n,t){"use strict";var i=t(85893),r=t(67294),o=t(45697),a=t.n(o),l=t(87918),s=t(15861),c=t(37634);function u(e){var n=e.impactOutlookOnly,t=e.recommendations,o=void 0===t?[]:t,a=e.title,u=void 0===a?"":a,d=e.titleFontSize,p=void 0===d?"h5":d,f=e.recommendationsEng,m=void 0===f?"management_recommendations_english":f,v=e.recommendationsTag,g=void 0===v?"management_recommendations_tagalog":v,h=e.impactOutlookEng,x=void 0===h?"impact_outlook_english":h,y=e.impactOutlookTag,b=void 0===y?"impact_outlook_tagalog":y,_=e.isTagalog,j=void 0===_?null:_,O=e.isShowTitle,Z=void 0===O||O,S=e.isShowImpactOutlookSubtitle,w=void 0===S||S,C=(0,r.useState)(!0),P=C[0],k=C[1];return(0,r.useEffect)((function(){null!==j&&k(!j)}),[j]),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{display:"flex",marginBottom:"20px"},children:[Z&&(0,i.jsx)("div",{style:{flexGrow:1},children:(0,i.jsxs)(s.Z,{variant:p,children:[u," Recommendations"]})}),null===j&&(0,i.jsx)(l.Z,{variant:"outlined",size:"small",label:P?"Tagalog":"English",onClick:function(){return k((function(e){return!e}))},className:"toggleButton"})]}),o.length>0?(0,i.jsxs)("div",{children:[(0,i.jsx)(i.Fragment,{children:n&&(0,i.jsxs)("div",{children:[w&&(0,i.jsx)(s.Z,{variant:"subtitle1",children:"Impact Outlooks"}),o.map((function(e,n){return(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:P?e[x]||"No Impact Outlook":e[b]||"Walang makitang impak awtluk"}},n)})),(0,i.jsx)("br",{})]})}),w&&(0,i.jsxs)(i.Fragment,{children:[Z&&(0,i.jsx)(s.Z,{variant:"subtitle1",children:"Recommendations"}),o.map((function(e,n){return(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:P?e[m]||"No Recommendations":e[g]||"Walang makitang rekomendasyon"}},n)}))]})]}):(0,i.jsx)(c.Z,{message:"We cannot find recommendations for your selected options."})]})}u.propTypes={recommendations:a().array,title:a().string,subtitle:a().string,titleFontSize:a().string,recommendationsEng:a().string,recommendationsTag:a().string,isTagalog:a().bool,isShowTitle:a().bool},n.Z=u},78613:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return ae},default:function(){return le}});var i=t(34051),r=t.n(i),o=t(85893),a=t(67294),l=t(16327),s=t(11427),c=t(47426),u=t(59111),d=t(25675),p=t(45697),f=t.n(p),m=t(61903),v=t(76295),g=t(87357),h=t(11057),x=t(56863),y=t(67720),b=t(15861),_=t(86886),j=t(11829),O=t(26613),Z={container:{display:"flex",flexDirection:"column"},cardContainer:{display:{xs:"none",md:"grid"},"& h6":{fontSize:"1.2rem",lineHeight:"1.6rem"},"& h6:nth-child(2)":{fontWeight:"bold"},placeContent:"center",width:"100%",maxWidth:"430px",minHeight:"85px",border:"2px solid #cc00cc",borderRadius:"40px",padding:function(e){return e.spacing(2)},margin:"auto",marginBottom:"6px",marginTop:"6px",textAlign:"center",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important"},arrowIcon:{margin:"auto",color:"#cc00cc",display:{xs:"none",md:"block"}}};var S=function(e){var n=e.info,t=e.show,i=void 0===t||t,r=e.borderColor,a=void 0===r?"#cc00cc":r;return(0,o.jsxs)(g.Z,{sx:Z.container,children:[(0,o.jsxs)(g.Z,{sx:Z.cardContainer,style:{borderColor:a},children:[(0,o.jsx)(b.Z,{variant:"subtitle1",children:"You have selected ".concat("cropstage"===n.from?"crop stage":n.from)}),(0,o.jsx)(b.Z,{variant:"subtitle1",children:n.label})]}),i&&(0,o.jsx)(O.Z,{size:24,sx:Z.arrowIcon,style:{color:a}})]})},w=t(24478),C=t(26660),P={container:{marginTop:function(e){return e.spacing(3)},minHeight:"400px"},controls:{marginTop:function(e){return e.spacing(6)}},selectContainer:{borderRight:{sm:"none",md:"1px solid gray"}},recsContainer:{marginTop:"-24px",paddingLeft:{sm:"none",md:"54px !important"},"& .toggleButton":{float:"right",width:"80px"}},autocomplete:{maxWidth:{xs:"100%",md:"300px"},paddingTop:function(e){return e.spacing(2)}},conditionLegend:{maxWidth:{sm:"100%"},margin:{md:"24px"},marginBottom:"32px",padding:function(e){return e.spacing(1)},borderRadius:"4px",border:"1px solid grey",textAlign:"center"},welcome:{display:"grid",placeContent:"center",marginTop:function(e){return e.spacing(10)},textAlign:"center","& h5":{marginTop:function(e){return e.spacing(2)}}}};function k(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){k(e,n,t[n])}))}return e}var R=["sel_province","sel_municipality","sel_crop","sel_stage","sel_activity"];function T(e){var n,t,i=(0,a.useState)(!1),r=i[0],l=i[1],s=e.sel_options,c=e.climateRisk,u=e.seasonalMonths,p=e.optsprovinces,f=e.optsmunicipalities,O=e.optscrops,Z=e.optsmonths,k=e.optscropstages,T=e.optsactivities,I=e.onSelectItemChange,D=e.onResetClick,L=e.recommendations,A=e.loading;(0,a.useEffect)((function(){null===s.sel_activity&&!0===r&&l(!1)}),[s.sel_activity,r]);var W=function(){var e="Loading...";return p.length>0&&(e=null===s.sel_province?"Select a province":"Province"),e};return(0,o.jsxs)(g.Z,{sx:{minHeight:"75vh"},id:"contents-seasonal-recommendations",children:[(0,o.jsx)(b.Z,{variant:"h4",children:"Seasonal Recommendations"}),(0,o.jsx)(b.Z,{variant:"subtitle1",children:"Crop Recommendations"}),(0,o.jsxs)(_.ZP,{container:!0,spacing:2,sx:P.container,children:[(0,o.jsxs)(_.ZP,{item:!0,xs:12,md:4,sx:P.selectContainer,children:[(0,o.jsxs)(g.Z,{sx:{paddingRight:function(e){return e.spacing(2)},wdith:"100%"},children:[(0,o.jsx)(v.Z,{disablePortal:!0,id:"province",value:s.sel_province,disabled:0===p.length||A,options:p,sx:P.autocomplete,PaperComponent:j.Z,renderInput:function(e){return(0,o.jsx)(m.Z,E({},e,{label:W()}))},isOptionEqualToValue:function(e,n){return e.label===n},onChange:function(e,n){return I(e,E({},n,{from:"province"}))}}),(0,o.jsx)(v.Z,{disablePortal:!0,id:"municipality",value:s.sel_municipality,disabled:0===f.length||A,options:f,sx:P.autocomplete,PaperComponent:j.Z,renderInput:function(e){return(0,o.jsx)(m.Z,E({},e,{label:null===s.sel_municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,n){return e.label===n},getOptionDisabled:function(e){return e.disabled||void 0!==e.iscalendar},onChange:function(e,n){return I(e,E({},n,{from:"municipality"}))}}),s.sel_municipality&&(0,o.jsxs)(g.Z,{sx:{mt:2},children:[(0,o.jsx)(b.Z,{align:"center",variant:"body1",children:(0,o.jsx)("strong",{children:"Seasonal Forecast Duration:"})}),(0,o.jsxs)(b.Z,{align:"center",variant:"body1",children:[null===(n=u[0])||void 0===n?void 0:n.label," to ",null===(t=u[5])||void 0===t?void 0:t.label]})]}),(0,o.jsx)(v.Z,{disablePortal:!0,id:"crop",value:s.sel_crop,disabled:0===O.length||A||null===s.sel_municipality,options:O,sx:P.autocomplete,PaperComponent:j.Z,renderInput:function(e){return(0,o.jsx)(m.Z,E({},e,{label:null===s.sel_crop?"Select a crop type":"Crop"}))},isOptionEqualToValue:function(e,n){return e.label===n},getOptionDisabled:function(e){return e.disabled},onChange:function(e,n){return I(e,E({},n,{from:"crop"}))}}),(0,o.jsx)(v.Z,{disablePortal:!0,id:"cropstage",value:s.sel_stage,disabled:0===k.length||A,options:k,sx:P.autocomplete,PaperComponent:j.Z,renderInput:function(e){return(0,o.jsx)(m.Z,E({},e,{label:null===s.sel_stage?"Select a crop stage":"Crop Stage"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},getOptionDisabled:function(e){return e.disabled},onChange:function(e,n){return I(e,E({},n,{from:"cropstage"}))}}),(0,o.jsx)(v.Z,{disablePortal:!0,id:"activity",value:s.sel_activity,disabled:0===T.length||A,options:T,sx:P.autocomplete,PaperComponent:j.Z,renderInput:function(e){return(0,o.jsx)(m.Z,E({},e,{label:null===s.sel_activity?"Select an activity":"Activity"}))},isOptionEqualToValue:function(e,n){return e.label===n},onChange:function(e,n){I(e,E({},n,{from:"activity"})),l(!1)}}),(0,o.jsx)("div",{children:""!==s.error?(0,o.jsx)("div",{style:{color:"red",fontSize:"12px",marginTop:"8px"},children:s.error}):(0,o.jsx)("div",{children:"\xa0"})}),(0,o.jsxs)(x.Z,{variant:"text",disableElevation:!0,sx:{width:"300px",margin:"auto",marginTop:"16px"},children:[(0,o.jsx)(h.Z,{size:"medium",disabled:A,onClick:D,children:"Clear"}),(0,o.jsx)(h.Z,{size:"medium",variant:"contained",onClick:function(){return l((function(e){return!e}))},disabled:null===s.sel_activity||r,children:"Finish"})]})]}),(0,o.jsx)("br",{}),(0,o.jsx)(y.Z,{}),(0,o.jsx)("br",{}),""!==c&&Z.length>0&&(0,o.jsxs)(g.Z,{sx:P.conditionLegend,children:[(0,o.jsxs)(b.Z,{variant:"body2",children:["Climate Risk for the season ",(0,o.jsx)("strong",{children:Z[0].label})," to ",(0,o.jsx)("strong",{children:Z[5].label}),":"]}),(0,o.jsx)("div",{children:c})]})]}),(0,o.jsx)(_.ZP,{item:!0,xs:12,md:8,sx:P.recsContainer,children:null!==s.sel_crop&&null!==s.sel_activity&&r?(0,o.jsx)(w.Z,{impactOutlookOnly:!0,title:s.sel_crop,recommendations:L}):Object.values(s).filter((function(e){return e})).length>1?(0,o.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:R.map((function(e,n){var t,i,r={from:e.slice(e.indexOf("_")+1),label:["sel_stage"].includes(e)?null!==(i=null===(t=s[e])||void 0===t?void 0:t.label)&&void 0!==i?i:"":s[e]};return null!==s[e]&&void 0!==s[e]?(0,o.jsx)(S,{info:r,show:n<R.length-1},"card-opt-".concat(n)):(0,o.jsx)("div",{},"card-opt-".concat(n))}))}):(0,o.jsxs)(g.Z,{sx:P.welcome,children:[(0,o.jsx)(d.default,{unoptimized:!0,src:(0,C.assetPrefixer)("images/icons/finance.svg"),height:120,width:120,loader:C.imageLoader,alt:"Empty data"}),(0,o.jsx)(b.Z,{variant:"h5",children:"Welcome to the Crop Recommendations Page"}),(0,o.jsx)(b.Z,{variant:"p",children:"Please select a province to start."})]})})]})]})}T.propTypes={sel_options:f().object,optsprovinces:f().array,optsmunicipalities:f().array,optscrops:f().array,optsmonths:f().array,optscropstages:f().array,optsactivities:f().array,seasonalMonths:f().array,recommendations:f().array,loading:f().bool,onSelectItemChange:f().func,onResetClick:f().func};var I=T,D=t(30560),L=t(23766),A=t(59390),W=t(38885),M=t(22856),N=t(87682),F=t(52955);function z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function B(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){z(e,n,t[n])}))}return e}var V={sel_province:null,sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:null,sel_condition:{id:0,from:"weather_condition",label:c.MW.WAY_BELOW_NORMAL.label},loading:!1,error:""};var q=function(e){var n,t,i=e.provinces,r=void 0===i?[]:i,l=(0,a.useState)(V),s=l[0],d=l[1],p=(0,a.useState)([]),f=p[0],m=p[1],v=(0,a.useState)({}),g=v[0],h=v[1],x=(0,a.useState)([]),y=x[0],b=x[1],_=(0,a.useState)([]),j=_[0],O=_[1],Z=(0,a.useState)([]),S=Z[0],w=Z[1],C=(0,a.useState)(!0),P=C[0],k=C[1],E=(0,a.useRef)(!1),R=(0,W.Z)().cropList.map((function(e,n){return{disabled:!1,label:e,id:n}})),T=(0,N.m$)(D.M.WEATHER_FORECASTS,"bicol",D.M.SUB_SEASONAL,"name"),z=T.documents,q=T.loading,H=(0,A.Z)(s.sel_province,s.sel_crop),U=H.cropcalendar,G=H.cropStages,J=H.loading,X=(0,M.Z)(g.code,null!==(t=null===(n=s.sel_stage)||void 0===n?void 0:n.code)&&void 0!==t?t:null,s.sel_crop,"seasonal"),Y=X.recommendations,$=X.farmoperations,K=X.loading,Q=(0,L.Z)(s.sel_province,r);return(0,a.useEffect)((function(){if(0!==U.length&&!P&&0!==f.length&&null!==s.sel_municipality){var e=U.data1.find((function(e){return e.municipality===s.sel_municipality&&e.crop===s.sel_crop})),n=U.data2.find((function(e){return e.municipality===s.sel_municipality&&e.crop===s.sel_crop})),t=[];f.forEach((function(i){if(e){var r=e[i.id].split(",");"none"===r[0]||t.includes(r[0])||t.push(r[0]),"none"===r[1]||t.includes(r[1])||t.push(r[1]);var o=n[i.id].split(",");"none"===o[0]||t.includes(o[0])||t.push(o[0]),"none"===o[1]||t.includes(o[1])||t.push(o[1])}}));var i=t.map((function(e,n){return{id:n,label:G[e].label,code:e}}));w(i)}}),[U,P,s.sel_crop,s.sel_municipality,f,G]),(0,a.useEffect)((function(){return E.current=!0,function(){E.current=!1}}),[]),(0,a.useEffect)((function(){if(r.length>0&&z.length>0&&!q){O((0,u.m)(r));var e=z[0].mos.reduce((function(e,n){return e.push({id:c.re[n.toUpperCase()].code,label:c.re[n.toUpperCase()].format,disabled:!1}),e}),[]);m(e)}}),[r,z,q]),(0,a.useEffect)((function(){k(q||K||J)}),[q,K,J]),(0,o.jsx)(I,{climateRisk:g.label,optsprovinces:j,optsmunicipalities:Q,optscrops:R,optsmonths:f,optscropstages:S,optsactivities:$,sel_options:s,recommendations:y,loading:P,seasonalMonths:f,onSelectItemChange:function(e,n){var t=n.from,i=n.label;if(y.length>0&&b([]),Object.keys(n).includes("id"))switch(t){case"province":w([]);var r=z.find((function(e){return e.name===i}));h((0,F.Z)(r.months,"seasonal")),d(B({},V,{sel_province:i}));break;case"municipality":w([]),d(B({},s,{sel_municipality:i,sel_crop:null,sel_stage:null,sel_activity:null}));break;case"crop":d(B({},s,{sel_crop:i,sel_stage:null,sel_activity:null}));break;case"cropstage":d(B({},s,{sel_stage:n,sel_activity:null}));break;case"activity":var o=Y.filter((function(e){return e.crop_stage===s.sel_stage.code&&e.farming_activity===i}));b(o),d(B({},s,{sel_activity:i}))}else"province"===t?(d(V),w([])):"municipality"===t?(d(B({},s,{sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:null})),w([])):"crop"===t?(d(B({},s,{sel_crop:null,sel_stage:null,sel_activity:null})),w([])):"cropstage"===t?d(B({},s,{sel_stage:null,sel_activity:null})):"activity"===t&&d(B({},s,{sel_activity:null}))},onResetClick:function(){d(V),w([]),b([])}})},H=t(41664);function U(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function G(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){U(e,n,t[n])}))}return e}var J=["sel_province","sel_municipality","sel_day","sel_crop","sel_month","sel_stage","sel_activity"];function X(e){var n,t,i=(0,a.useState)(!1),r=i[0],l=i[1],s=e.sel_options,u=e.loading,p=e.recommendations,f=e.weathertoday,O=e.warning,Z=e.climateRisk,k=e.optsprovinces,E=e.optsmunicipalities,R=e.optsdays,T=e.optscrops,I=e.optscropstages,D=e.optsactivities,L=e.onSelectItemChange,A=e.onResetClick;(0,a.useEffect)((function(){null===s.sel_activity&&!0===r&&l(!1)}),[s.sel_activity,r]);var W=function(){var e="Loading...";return k.length>0&&(e=null===s.sel_province?"Select a province":"Province"),e};return(0,o.jsxs)(g.Z,{sx:{minHeight:"75vh"},id:"contents-tenday-recommendations",children:[(0,o.jsx)(b.Z,{variant:"h4",children:"10-Day Farm Weather Outlook and Advisory Recommendations"}),(0,o.jsx)(b.Z,{variant:"subtitle1",children:"Crop Recommendations"}),(0,o.jsxs)(_.ZP,{container:!0,spacing:2,sx:P.container,children:[(0,o.jsxs)(_.ZP,{item:!0,xs:12,md:4,sx:P.selectContainer,children:[(0,o.jsxs)(g.Z,{sx:{minWidth:"100%",paddingRight:function(e){return e.spacing(2)}},children:[(0,o.jsx)(v.Z,{disablePortal:!0,id:"province",value:s.sel_province,disabled:0===k.length||u,options:k,sx:P.autocomplete,PaperComponent:j.Z,renderInput:function(e){return(0,o.jsx)(m.Z,G({},e,{label:W()}))},isOptionEqualToValue:function(e,n){return e.label===n},onChange:function(e,n){return L(e,G({},n,{from:"province"}))}}),(0,o.jsx)(v.Z,{disablePortal:!0,id:"municipality",value:s.sel_municipality,disabled:0===E.length||u,options:E,sx:P.autocomplete,PaperComponent:j.Z,renderInput:function(e){return(0,o.jsx)(m.Z,G({},e,{label:null===s.sel_municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,n){return e.label===n},getOptionDisabled:function(e){return e.disabled||void 0!==e.iscalendar},onChange:function(e,n){return L(e,G({},n,{from:"municipality"}))}}),s.sel_municipality&&(0,o.jsxs)(g.Z,{sx:{mt:2},children:[(0,o.jsx)(b.Z,{align:"center",variant:"body1",children:(0,o.jsx)("strong",{children:"Forecast Duration:"})}),(0,o.jsxs)(b.Z,{align:"center",variant:"body1",children:[null===(n=R[0])||void 0===n?void 0:n.label," to ",null===(t=R[9])||void 0===t?void 0:t.label]})]}),(0,o.jsx)(v.Z,{disablePortal:!0,id:"crop",value:s.sel_crop,disabled:0===T.length||null===s.sel_municipality||u,options:T,sx:P.autocomplete,PaperComponent:j.Z,renderInput:function(e){return(0,o.jsx)(m.Z,G({},e,{label:null===s.sel_crop?"Select a crop type":"Crop"}))},isOptionEqualToValue:function(e,n){return e.label===n},getOptionDisabled:function(e){return e.disabled},onChange:function(e,n){return L(e,G({},n,{from:"crop"}))}}),(0,o.jsx)(v.Z,{disablePortal:!0,id:"cropstage",value:s.sel_stage,disabled:0===I.length||u,options:I,sx:P.autocomplete,PaperComponent:j.Z,renderInput:function(e){return(0,o.jsx)(m.Z,G({},e,{label:null===s.sel_stage?"Select a crop stage":"Crop Stage"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},getOptionDisabled:function(e){return e.disabled},onChange:function(e,n){return L(e,G({},n,{from:"cropstage"}))}}),0===I.length&&null!==s.sel_crop&&(0,o.jsxs)("div",{children:[(0,o.jsx)(b.Z,{variant:"caption",color:"orange",children:(0,o.jsxs)("strong",{children:["No crop stages for this ten day range for ",s.sel_crop,"."]})}),(0,o.jsx)("br",{}),(0,o.jsxs)(b.Z,{variant:"caption",children:["See\xa0",(0,o.jsx)(H.default,{href:"/cropping-calendar-v2",passHref:!0,children:(0,o.jsx)("a",{style:{color:"orange",fontWeight:600},target:"_blank",children:"Cropping Calendar"})}),"\xa0for reference."]})]}),(0,o.jsx)(v.Z,{disablePortal:!0,id:"activity",value:s.sel_activity,disabled:0===D.length||u,options:D,sx:P.autocomplete,PaperComponent:j.Z,renderInput:function(e){return(0,o.jsx)(m.Z,G({},e,{label:null===s.sel_activity?"Select an activity":"Activity"}))},isOptionEqualToValue:function(e,n){return e.label===n},onChange:function(e,n){L(e,G({},n,{from:"activity"})),l(!1)}}),(0,o.jsx)("div",{children:""!==s.error||""!==O?(0,o.jsx)("div",{style:{color:"red",fontSize:"12px",marginTop:"8px"},children:s.error||O}):(0,o.jsx)("div",{children:"\xa0"})}),(0,o.jsxs)(x.Z,{variant:"text",disableElevation:!0,sx:{width:"300px",margin:"auto",marginTop:"16px"},children:[(0,o.jsx)(h.Z,{size:"medium",onClick:A,children:"Clear"}),(0,o.jsx)(h.Z,{size:"medium",variant:"contained",onClick:function(){return l((function(e){return!e}))},disabled:null===s.sel_activity||r,children:"Finish"})]})]}),(0,o.jsx)("br",{}),(0,o.jsx)(y.Z,{}),(0,o.jsx)("br",{}),null!==f&&(0,o.jsxs)(g.Z,{sx:P.conditionLegend,style:{backgroundColor:c.tN[f.code],color:[c.MW.ABOVE_NORMAL.label,c.MW.WAY_BELOW_NORMAL.label].includes(f.code)?"#fff":"#000"},children:[(0,o.jsx)(b.Z,{variant:"subtitle2",children:"Rainfall Intensity for the Day"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:f.label_full}),(0,o.jsx)("br",{}),(0,o.jsx)("span",{children:f.rainfall})]})]}),""!==Z&&(0,o.jsxs)(g.Z,{sx:P.conditionLegend,children:[(0,o.jsx)(b.Z,{variant:"subtitle2",children:"Climate Risk:"}),(0,o.jsx)("div",{children:Z})]})]}),(0,o.jsx)(_.ZP,{item:!0,xs:12,md:8,sx:P.recsContainer,children:null!==s.sel_crop&&null!==s.sel_activity&&r?(0,o.jsx)(w.Z,{impactOutlookOnly:!0,title:s.sel_crop,recommendations:p}):Object.values(s).filter((function(e){return e})).length>1?(0,o.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:J.map((function(e,n){var t,i,r={from:e.slice(e.indexOf("_")+1),label:["sel_day","sel_stage"].includes(e)?null!==(i=null===(t=s[e])||void 0===t?void 0:t.label)&&void 0!==i?i:"":s[e]};return null!==s[e]&&void 0!==s[e]?(0,o.jsx)(S,{info:r,show:n<J.length-1,borderColor:"blue"},"card-opt-".concat(n)):(0,o.jsx)("div",{},"card-opt-".concat(n))}))}):(0,o.jsxs)(g.Z,{sx:P.welcome,children:[(0,o.jsx)(d.default,{unoptimized:!0,src:(0,C.assetPrefixer)("images/icons/finance.svg"),height:120,width:120,loader:C.imageLoader,alt:"Empty data"}),(0,o.jsx)(b.Z,{variant:"h5",children:"Welcome to the Crop Recommendations Page"}),(0,o.jsx)(b.Z,{variant:"p",children:"Please select a province to start."})]})})]})]})}X.propTypes={sel_options:f().object,optsprovinces:f().array,optsmunicipalities:f().array,optscrops:f().array,optsdays:f().array,optscropstages:f().array,optsactivities:f().array,recommendations:f().array,weathertoday:f().object,onSelectItemChange:f().func,onClickDateSelector:f().func,onResetClick:f().func};var Y=X,$=t(94640),K=t(77715);function Q(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ee(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){Q(e,n,t[n])}))}return e}var ne={sel_province:null,sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:null,sel_month:null,sel_day:null,sel_condition:{id:0,from:"weather_condition",label:null,date:(new Date).toDateString()},loading:!1,error:"",warning:""};var te=function(e){var n,t,i=e.provinces,r=void 0===i?[]:i,l=(0,a.useState)(ne),s=l[0],c=l[1],d=(0,a.useState)({}),p=d[0],f=d[1],m=(0,a.useState)([]),v=m[0],g=m[1],h=(0,a.useState)(null),x=h[0],y=h[1],b=(0,a.useState)([]),_=b[0],j=b[1],O=(0,a.useState)([]),Z=O[0],S=O[1],w=(0,a.useState)(!0),C=w[0],P=w[1],k=(0,a.useRef)(!1),E=(0,W.Z)().cropList.map((function(e,n){return{disabled:!1,label:e,id:n}})),R=(0,L.Z)(s.sel_province,r),T=(0,M.Z)(p.code,null!==(t=null===(n=s.sel_stage)||void 0===n?void 0:n.code)&&void 0!==t?t:null,s.sel_crop,"tenday"),I=T.recommendations,D=T.farmoperations,N=T.loading,z=(0,A.Z)(s.sel_province,s.sel_crop,Z),B=z.cropcalendar,V=z.cropStages,q=z.loading,H=(0,$.Z)(s.sel_province,s.sel_municipality),U=H.days,G=H.loading,J=H.warning;(0,a.useEffect)((function(){U.length>0&&f((0,F.Z)(U,"tenday"))}),[U]),(0,a.useEffect)((function(){if(U.length>0&&!q&&!N){var e=new Date(U[0].label_full),n=(0,K.Mn)(e);if(0!==B.length){var t=B.data1.find((function(e){return e.municipality===s.sel_municipality&&e.crop===s.sel_crop})),i=B.data2.find((function(e){return e.municipality===s.sel_municipality&&e.crop===s.sel_crop})),r=[];if(t&&i&&Object.keys(V).length>0){Object.keys(n).forEach((function(e){var o=t[e].split(",");n[e].forEach((function(e){"1st_half"===e&&"none"!==o[0]?r.includes(o[0])||r.push(o[0]):"2nd_half"===e&&"none"!==o[1]&&(r.includes(o[1])||r.push(o[1]))}));var a=i[e].split(",");n[e].forEach((function(e){"1st_half"===e&&"none"!==a[0]?r.includes(a[0])||r.push(a[0]):"2nd_half"===e&&"none"!==a[1]&&(r.includes(a[1])||r.push(a[1]))}))}));var o=r.map((function(e,n){return{id:n,label:V[e].label,code:e}}));S(o)}}}}),[V,B.length,B.data1,B.data2,U,s.sel_municipality,s.sel_crop,q,N]),(0,a.useEffect)((function(){return k.current=!0,function(){k.current=!1}}),[]),(0,a.useEffect)((function(){r.length>0&&j((0,u.m)(r))}),[r]),(0,a.useEffect)((function(){P(G||N||q)}),[G,N,q]);var X=function(e,n){var t=n.from,i=n.label;if(v.length>0&&g([]),Object.keys(n).includes("id"))switch(t){case"province":S([]),y(null),c(ee({},ne,{sel_province:i}));break;case"municipality":S([]),c(ee({},s,{sel_municipality:i,sel_crop:null,sel_day:null,sel_month:null,sel_stage:null,sel_activity:null}));break;case"day":S([]),y(U.find((function(e){return e.label===i}))),c(ee({},s,{sel_day:n,sel_month:null,sel_crop:null,sel_stage:null,sel_activity:null}));break;case"crop":S([]),c(ee({},s,{sel_crop:i,sel_month:null,sel_stage:null,sel_activity:null}));break;case"cropstage":c(ee({},s,{sel_stage:n,sel_activity:null}));break;case"activity":g(I.filter((function(e){return e.crop_stage===s.sel_stage.code&&e.farming_activity===i}))),c(ee({},s,{sel_activity:i}))}else"province"===t?(c(ne),S([])):"municipality"===t?(c(ee({},s,{sel_municipality:null,sel_crop:null,sel_day:null,sel_month:null,sel_stage:null,sel_activity:null})),S([])):"day"===t?(c(ee({},s,{sel_day:null,sel_crop:null,sel_month:null,sel_stage:null,sel_activity:null})),S([])):"crop"===t?(c(ee({},s,{sel_crop:null,sel_month:null,sel_stage:null,sel_activity:null})),S([])):"cropstage"===t?c(ee({},s,{sel_stage:null,sel_activity:null})):"activity"===t&&c(ee({},s,{sel_activity:null}))};return(0,o.jsx)(Y,{climateRisk:p.label,optsprovinces:_,optsmunicipalities:R,optscrops:E,optsdays:U,optscropstages:Z,optsactivities:D,sel_options:s,recommendations:v,weathertoday:x,loading:C,warning:J,onSelectItemChange:X,onClickDateSelector:function(e){var n=new Date(e).toDateString();n=n.substring(0,n.length-5),X(null,{id:n,label:n,full:new Date(e),from:"day"})},onResetClick:function(){c(ne),S([]),g([])}})};var ie=function(e){var n=e.municipalities,t=void 0===n?[]:n,i=e.provinces,r=void 0===i?[]:i;return(0,o.jsxs)("div",{children:[(0,o.jsx)(s.Z,{sx:{boxShadow:"none"}}),(0,o.jsx)("div",{id:"seasonal-recommendations"}),(0,o.jsx)(s.Z,{sx:{marginTop:"80px",boxShadow:"none"},children:(0,o.jsx)(q,{municipalities:t,provinces:r})}),(0,o.jsx)("div",{id:"resilient-practices"}),(0,o.jsx)(s.Z,{sx:{marginTop:"80px",boxShadow:"none"},children:(0,o.jsx)(te,{provinces:r})})]})},re=t(43370);function oe(e,n,t,i,r,o,a){try{var l=e[o](a),s=l.value}catch(c){return void t(c)}l.done?n(s):Promise.resolve(s).then(i,r)}var ae=!0,le=function(e){var n=e.media,t=(0,a.useState)([]),i=t[0],s=t[1];return(0,a.useEffect)((function(){var e=function(){var e,n=(e=r().mark((function e(){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.$m)();case 3:n=e.sent,s(n.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var n=this,t=arguments;return new Promise((function(i,r){var o=e.apply(n,t);function a(e){oe(o,i,r,a,l,"next",e)}function l(e){oe(o,i,r,a,l,"throw",e)}a(void 0)}))});return function(){return n.apply(this,arguments)}}();e()}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)(re.Z,{title:"Agro-Climatic Advisory Portal - Bicol (ACAP-BICOL) Crop Recommendations",ogDescription:n.description,ogImageURL:n.url,ogURL:n.path}),(0,o.jsx)(ie,{provinces:i})]})}},23766:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var i=t(67294);function r(e,n){var t=(0,i.useState)([]),r=t[0],o=t[1];return(0,i.useEffect)((function(){var t,i;o(e&&n&&null!==(i=null===(t=n.find((function(n){return n.label===e})))||void 0===t?void 0:t.municipalities)&&void 0!==i?i:[])}),[e,n]),r}},87682:function(e,n,t){"use strict";t.d(n,{ky:function(){return p},Kx:function(){return f},m$:function(){return m},tl:function(){return v}});var i=t(34051),r=t.n(i),o=t(67294),a=t(25321),l=t(96772);function s(e,n,t,i,r,o,a){try{var l=e[o](a),s=l.value}catch(c){return void t(c)}l.done?n(s):Promise.resolve(s).then(i,r)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var o=e.apply(n,t);function a(e){s(o,i,r,a,l,"next",e)}function l(e){s(o,i,r,a,l,"throw",e)}a(void 0)}))}}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){u(e,n,t[n])}))}return e}function p(e,n){var t=(0,o.useState)(null),i=t[0],s=t[1],u=(0,o.useState)(!0),d=u[0],p=u[1],f=(0,o.useState)(""),m=f[0],v=f[1],g=(0,o.useRef)(!0);return(0,o.useEffect)((function(){var t=function(){var t=c(r().mark((function t(){var i,o;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i=(0,a.JU)(l.db,e,n),t.next=4,(0,a.QT)(i);case 4:(o=t.sent).exists()&&g.current&&(s(o.data()),p(!1)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),v(t.t0.message),p(!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){return g.current=!1}}),[e,n]),[i,d,m]}function f(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=(0,o.useState)([]),s=i[0],u=i[1],p=(0,o.useState)(!0),f=p[0],m=p[1],v=(0,o.useState)(""),g=v[0],h=v[1],x=(0,o.useRef)(!0);return(0,o.useEffect)((function(){var i=function(){var i=c(r().mark((function i(){var o,s,c;return r().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,o=(0,a.hJ)(l.db,e),s=t||(0,a.IO)(o,(0,a.Xo)(n,"asc")),i.next=5,(0,a.PL)(s);case 5:c=i.sent,x.current&&(u(c.docs.map((function(e){return d({},e.data())}))),m(!1)),i.next=13;break;case 9:i.prev=9,i.t0=i.catch(0),h(i.t0.message),m(!1);case 13:case"end":return i.stop()}}),i,null,[[0,9]])})));return function(){return i.apply(this,arguments)}}();return i(),function(){return x.current=!1}}),[e,n,t]),{documents:s,loading:f,error:g}}function m(e,n,t){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=(0,o.useState)([]),u=s[0],p=s[1],f=(0,o.useState)(!0),m=f[0],v=f[1],g=(0,o.useState)(""),h=g[0],x=g[1],y=(0,o.useRef)(!0);return(0,o.useEffect)((function(){var o=function(){var o=c(r().mark((function o(){var s,c;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,s=(0,a.IO)((0,a.hJ)(l.db,e,n,t),(0,a.Xo)(i)),r.next=4,(0,a.PL)(s);case 4:c=r.sent,y.current&&(p(c.docs.map((function(e){return d({},e.data())}))),v(!1)),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(0),x(r.t0.message),v(!1);case 12:case"end":return r.stop()}}),o,null,[[0,8]])})));return function(){return o.apply(this,arguments)}}();return o(),function(){return y.current=!1}}),[e,n,t,i]),{documents:u,loading:m,error:h}}function v(e,n,t){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=arguments.length>4?arguments[4]:void 0,u=(0,o.useState)([]),p=u[0],f=u[1],m=(0,o.useState)(!0),v=m[0],g=m[1],h=(0,o.useState)(""),x=h[0],y=h[1],b=(0,o.useRef)(!0);return(0,o.useEffect)((function(){var o=function(){var o=c(r().mark((function o(){var c,u;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c=(0,a.hJ)(l.db,e,n,t),""!==i&&(c=(0,a.IO)(c,(0,a.Xo)(i))),s&&(c=(0,a.IO)(c,(0,a.b9)(s))),r.next=6,(0,a.PL)(c);case 6:u=r.sent,b.current&&(f(u.docs.map((function(e){return d({},e.data())}))),g(!1)),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(0),y(r.t0.message),g(!1);case 14:case"end":return r.stop()}}),o,null,[[0,10]])})));return function(){return o.apply(this,arguments)}}();return o(),function(){return b.current=!1}}),[e,n,t,i,s]),{documents:p,loading:v,error:x}}},94640:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var i=t(67294),r=t(9473),o=t(47426),a=t(56867),l=t(77715),s=t(901);function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function u(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,n){var t=(0,i.useState)([]),c=t[0],d=t[1],p=(0,i.useState)(null),f=p[0],m=p[1],v=(0,i.useState)(""),g=v[0],h=v[1],x=(0,i.useState)(""),y=x[0],b=x[1],_=(0,i.useState)(!1),j=_[0],O=_[1],Z=(0,r.I0)(),S=(0,r.v9)((function(e){return e.tendayweather})),w=S.ids,C=S.status,P=S.entities,k=S.error;return(0,i.useEffect)((function(){null!==e&&(h(""),b(""),Z((0,a.R)(e)))}),[e,Z]),(0,i.useEffect)((function(){h(k)}),[k]),(0,i.useEffect)((function(){O(C===s.G.PENDING)}),[C]),(0,i.useEffect)((function(){if(h(""),b(""),C===s.G.FULLFILLED&&w.length>0&&""===k&&null!==n){var e=Object.values(P).find((function(e){return e.municipality===n}));if(void 0!==e){var t,i,r=JSON.parse(e.data),a=Object.values(o.MW);d(r.reduce((function(e,n,o){var s,c,d;return u(e).concat([{id:o,label:n.day_format,label_full:null===(s=(0,l.Ay)(n.day_format,r[9].day_format))||void 0===s?void 0:s.toDateString(),rainfall:n.rainfall,forecast:null!==(t=null===(c=a.find((function(e){return e.tenday===n.rainfall})))||void 0===c?void 0:c.sync)&&void 0!==t?t:"-",code:null!==(i=null===(d=a.find((function(e){return e.tenday===n.rainfall})))||void 0===d?void 0:d.label)&&void 0!==i?i:"-"}])}),[]));var c=new Date(1e3*r[0].date_start.seconds),p=(0,l.Mn)(c);c.getFullYear()!==(new Date).getFullYear()&&h("Invalid year detected in the 10-day validity date range: ".concat(r[0].date_range)),m({months:p,date_start:c,date_range:r[0].date_range})}else{var f=k||"Weather data for the municipality is not available at the moment, however, you can continue viewing recommendations. Please verify that the municipality name is present in the 10-Day weather forecast.";k?(d([]),m(null),h(f)):b(f)}}}),[n,P,w,C,k]),{days:c,summary:f,loading:j,error:g,warning:y}}}},function(e){e.O(0,[5778,9564,9964,1903,6295,5099,9385,9774,2888,179],(function(){return n=67741,e(e.s=n);var n}));var n=e.O();_N_E=n}]);