(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2378],{27840:function(e,n,t){"use strict";var r=t(85893),i=t(15861);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=(0,t(11496).ZP)((function(e){return(0,r.jsx)(i.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({component:"p",variant:"caption"},e))}))((function(e){var n=e.theme;return{color:n.palette.text.secondary,"& a":{color:n.palette.green.dark,textDecoration:"none"},"& a:visited":{color:n.palette.green.dark},"& a:hover, span:hover":{textDecoration:"underline"}}}));n.Z=o},2378:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return oe}});var r=t(34051),i=t.n(r),a=t(85893),o=t(9669),c=t.n(o),l=t(67294),s=t(9473),u=t(4936),p=t(98396),d=t(60795),f=t(86105),h=t(38303),m=t(72471),x=t(27409),v=t(97651),g=t(87357),y=t(41664),b=t(25675),w=t(76295),j=t(66242),S=t(98456),_=t(86886),O=t(61903),E=t(15861),C=t(26660),M={daily:{width:{xs:"75px",sm:"87px"},minWidth:{xs:"75px",sm:"87px"},minHeight:"114px",display:"flex",flexDirection:"column",justifyContent:"space-between",backgroundColor:"rgba(255, 255, 255, 1.0)",padding:function(e){return e.spacing(1)},margin:"2px",borderRadius:"5px","& div":{textAlign:"center"},"& .temp-label":{display:"flex",justifyContent:"space-between",fontSize:{xs:"8px",sm:"9px"}},"& .daily-date":{fontSize:{xs:"10px",sm:"12px"}}}},k=t(63365),L=t(48038);var A=function(e){var n=e.dailyweather;return(0,a.jsxs)(g.Z,{sx:M.daily,children:[(0,a.jsx)("div",{className:"daily-date",children:n.day}),(0,a.jsx)("div",{children:(0,a.jsx)(b.default,{unoptimized:!0,src:n.icon,height:50,width:50,loader:C.imageLoader,alt:n.day})}),(0,a.jsxs)("div",{className:"temp-label",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(k.Z,{fontSize:"12px"}),(0,a.jsxs)("strong",{children:[n.temp_mean,"\xb0"]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(L.Z,{fontSize:"12px"}),n.wind_speed]})]})]})},I=t(27840);var P,N,D,Z={card:{backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",minWidth:{xs:"200px",sm:"490px"},maxWidth:"490px",marginTop:function(e){return e.spacing(3)},padding:function(e){return e.spacing(2)},borderRadius:function(e){return e.spacing(1)},"& h5":{marginBottom:function(e){return e.spacing(2)}},"& .span-source":{"& a":{color:function(e){return e.palette.primary.main},textDecoration:"none"},"& a:hover":{color:function(e){return e.palette.third.main}}}},cardInfo:{backgroundColor:"rgba(255, 255, 255, 0.8)",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important",width:"100%",maxWidth:"490px",padding:function(e){return e.spacing(1)},marginTop:function(e){return e.spacing(3)},fontSize:{xs:"11px",sm:"14px"},"& td":{padding:(P={xs:0},N="xs",D="1px",N in P?Object.defineProperty(P,N,{value:D,enumerable:!0,configurable:!0,writable:!0}):P[N]=D,P)}},autocomplete:{maxWidth:"100%",marginTop:function(e){return e.spacing(1)}},weathertoday:{width:"100%",display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"10px",flexDirection:{xs:"column",b4xs:"row",sm:"row"},"& .icon-temp":{display:"flex",alignItems:"center",gap:"10px"},"& .temperature":{fontSize:"50px",fontWeight:"bold"},"& .weather-details":{fontSize:"14px"}},info:{minWidth:"285px",minHeight:"90px",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(2)},textAlign:"center","& p":{color:"red",fontSize:"12px"}}},z=t(901);function T(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){T(e,n,t[n])}))}return e}var R=function(e){var n=e.sel_options,t=e.weather,r=e.forecast,i=e.record,o=e.isSmallScreen,c=void 0!==o&&o,u=e.onSelectItemChange,p=(0,l.useState)(0),d=p[0],f=p[1],h=(0,s.v9)((function(e){return e.provinces})),m=(0,s.v9)((function(e){return e.municipalities})),x=(0,s.v9)((function(e){return e.tendayweather})),v=(0,l.useState)(!0),M=v[0],k=v[1];(0,l.useEffect)((function(){var e=function(){return f((window.innerWidth-L())/2+24)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var L=function(){var e=document.getElementById("header-contents");return e?e.getBoundingClientRect().width:1200};return(0,l.useEffect)((function(){var e=h.status!==z.G.FULLFILLED||x.status!==z.G.FULLFILLED;k(e)}),[h.status,x.status,h.error,x.error]),(0,a.jsxs)(g.Z,{sx:{position:"absolute",top:function(e){return e.constants.navbar.outerHeight+40},right:d,marginLeft:"24px",zIndex:400},className:"mui-fixed",children:[(0,a.jsxs)(j.Z,{variant:"outlined",sx:Z.card,style:{backgroundColor:"rgba(139, 195, 74, 0.5)"},children:[(0,a.jsxs)(g.Z,{children:[(0,a.jsx)(E.Z,{variant:"h5",children:"Bicol Region Weather Today"}),(0,a.jsx)(w.Z,{disablePortal:!0,id:"province",value:h.province,disabled:0===h.ids.length||M,options:Object.values(h.entities),size:"small",renderInput:function(e){return(0,a.jsx)(O.Z,W({},e,{label:null===h.province?"Select a province":"Province"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},onChange:function(e,n){return u(e,W({},n,{from:"province"}))}}),(0,a.jsx)("br",{}),(0,a.jsx)(w.Z,{disablePortal:!0,id:"municipality",value:m.municipality,disabled:0===m.ids.length||M,options:Object.values(m.entities),sx:Z.autoMuni,size:"small",renderInput:function(e){return(0,a.jsx)(O.Z,W({},e,{label:null===m.municipality?"Select a municipality":"Municipality"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},getOptionDisabled:function(e){return void 0!==e.iscalendar},onChange:function(e,n){return u(e,W({},n,{from:"municipality",province:h.province}))}})]}),n.loading&&(0,a.jsx)(g.Z,{sx:Z.info,style:{minWidth:c?window.innerWidth-80:"285px"},children:(0,a.jsx)(S.Z,{size:24,color:"secondary"})}),""===n.error&&!n.loading&&null!==n.sel_municipality&&""!==t.description&&(0,a.jsxs)(g.Z,{sx:Z.weathertoday,children:[(0,a.jsxs)("div",{className:"icon-temp",children:[(0,a.jsx)(b.default,{unoptimized:!0,src:t.icon,height:100,width:100,loader:C.imageLoader,alt:t.description}),(0,a.jsxs)("div",{className:"temperature",children:[t.temp,"\xb0C"]})]}),(0,a.jsxs)("div",{className:"weather-details",children:[(0,a.jsxs)("div",{children:["Date today: ",t.datenow]}),(0,a.jsxs)("div",{children:["Humidity: ",t.humidity]}),(0,a.jsxs)("div",{children:["Wind speed: ",t.wind]}),(0,a.jsx)("div",{children:t.description?"".concat(t.description.charAt(0).toUpperCase()).concat(t.description.slice(1)):""})]})]}),""===n.error&&!n.loading&&null===n.sel_municipality&&(0,a.jsx)(g.Z,{sx:Z.info,style:{minWidth:c?window.innerWidth-80:"285px"},children:(0,a.jsx)("p",{children:"\xa0"})}),""!==n.error&&(0,a.jsx)(g.Z,{sx:Z.info,style:{minWidth:c?window.innerWidth-80:"285px"},children:(0,a.jsx)("p",{children:n.error})})]}),r.length>0&&(0,a.jsxs)(j.Z,{variant:"outlined",sx:Z.card,children:[(0,a.jsx)(E.Z,{variant:"h6",children:"10-Day Rainfall Forecast"}),(0,a.jsxs)(I.Z,{sx:{marginBottom:"16px"},children:["View the full 10-Day Weather Forecast"," ",(0,a.jsx)(y.default,{href:"/weather-services",children:"here"}),"."]}),(0,a.jsx)(_.ZP,{container:!0,children:r.map((function(e,n){return(0,a.jsx)(_.ZP,{item:!0,children:(0,a.jsx)(A,{dailyweather:e})},"daily-".concat(n))}))}),(0,a.jsxs)(E.Z,{variant:"caption",className:"span-source",children:["source:"," ",(0,a.jsx)(y.default,{href:"https://www.pagasa.dost.gov.ph/climate/climate-prediction/10-day-climate-forecast",children:"PAGASA's 10-Day Climate Forecast"})]})]}),c&&null!==i&&(0,a.jsx)(j.Z,{variant:"outlined",sx:Z.cardInfo,children:(0,a.jsx)("table",{children:(0,a.jsx)("tbody",{children:["Barangay","Municipality","Province","Association"].map((function(e,n){return["lat","lon"].includes(e)?(0,a.jsx)("tr",{},n):(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsxs)("b",{children:[e,":"]})}),(0,a.jsx)("td",{children:i[e.toLowerCase()]})]},n)}))})})})]})},G=t(18217),U=t(23549),Y=t(56867),B=t(1902);function H(e,n,t,r,i,a,o){try{var c=e[a](o),l=c.value}catch(s){return void t(s)}c.done?n(l):Promise.resolve(l).then(r,i)}function F(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){H(a,r,i,o,c,"next",e)}function c(e){H(a,r,i,o,c,"throw",e)}o(void 0)}))}}function Q(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function J(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Q(e,n,t[n])}))}return e}var V={sel_municipality:null,sel_province:"",loading:!0,error:""},X={icon:"https://openweathermap.org/img/wn/10d@2x.png",temp:"00",pressure:"0000 hPa",humidity:"0%",wind:"00 meter/sec"};var q=function(e){var n=e.record,t=e.isSmallScreen,r=e.onSelectMunicipality,o=(0,l.useState)(V),c=o[0],u=o[1],p=(0,l.useState)(X),d=p[0],f=p[1],h=(0,l.useState)([]),m=h[0],x=h[1],v=(0,l.useState)(!1),g=v[0],y=v[1],b=(0,s.I0)(),w=(0,s.v9)((function(e){return e.provinces})),j=w.ids,S=w.entities,_=w.municipalities,O=w.province,E=(0,s.v9)((function(e){return e.municipalities})).municipality,C=(0,s.v9)((function(e){return e.tendayweather})),M=C.ids,k=C.entities,L=C.status;(0,l.useEffect)((function(){b((0,G.QA)(null))}),[b]),(0,l.useEffect)((function(){j.length>0&&(b((0,U.Wn)(Object.values(S)[0])),b((0,Y.R)(Object.values(S)[0].label)).unwrap().then((function(){y(!0)})))}),[b,j,S]),(0,l.useEffect)((function(){if(M.length>0&&L===z.G.FULLFILLED&&g&&null!==O){var e=null;if(E)e=E;else{var n=Object.keys(_).find((function(e){return e===O.label}));n&&_[n].length>0&&(e=_[n][0])}b((0,G.X4)(_[O.label]||[])),b((0,G.QA)(e))}}),[b,M,k,L,g,E,_,O]),(0,l.useEffect)((function(){null!==E&&g&&u((function(e){return J({},e,{sel_province:O,sel_municipality:E})}))}),[b,E,O,k,L,g]),(0,l.useEffect)((function(){if(L===z.G.FULLFILLED&&null!==c.sel_municipality&&0===m.length)try{r(c.sel_municipality.label,c.sel_province.label);var e=Object.values(k).find((function(e){return e.municipality===c.sel_municipality.label}));if(e){var n=JSON.parse(e.data),t=void 0!==B.Sx.rainfall[n[0].rainfall]?"images/icons/weather/".concat(B.Sx.rainfall[n[0].rainfall]):"images/icons/weather/blank_weather.png",i=(new Date).toDateString(),a=n.find((function(e){return e.day_format===i.substring(0,i.length-5)}))||n[0],o={icon:t,temp:Math.round(a.tmean),precipitation:null,humidity:"".concat(P(a.humidity),"%"),datenow:i,wind:"".concat(P(a.wspeed)," mps"),description:"".concat(N(a.rainfall),", ").concat(N(a.cover))},l=[];n.forEach((function(e){var n=new Date("".concat(e.day_format,", ").concat((new Date).getFullYear())),t={day:e.day_format,wind_speed:P(e.wspeed),temp_mean:P(e.tmean),icon:void 0!==e.rainfall?"images/icons/weather/".concat(B.Sx.rainfall[e.rainfall]):"images/icons/weather/blank_weather.png",date:n.toLocaleDateString("en-US"),description:""};l.push(t)})),f(o),x(l),u((function(e){return J({},e,{loading:!1,error:""})}))}}catch(s){u((function(e){return J({},e,{loading:!1,error:s.message})}))}}),[L,k,S,m,c.sel_municipality,c.sel_province.label,r]);var A=(0,l.useCallback)(function(){var e=F(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=_[t.label],void 0!==(a=r.find((function(e){return e.label===n})))){e.next=4;break}return e.abrupt("return");case 4:x([]),u(J({},c,{sel_municipality:a,sel_province:t,loading:!0,error:""})),b((0,Y.R)(t.label));case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),[_,c,b]),I=function(){var e=F(i().mark((function e(n,t){var a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.label,o=t.from,!a){e.next=21;break}e.t0=o,e.next="province"===e.t0?5:"municipality"===e.t0?9:18;break;case 5:return b((0,U.Wn)(t)),b((0,Y.R)(a)),b((0,G.X4)([])),e.abrupt("break",19);case 9:if(b((0,G.QA)({id:t.id,label:t.label,iscalendar:t.iscalendar})),void 0!==t.id){e.next=16;break}return u(J({},c,{sel_municipality:null,loading:!1})),f(X),x([]),r(null),e.abrupt("return");case 16:return A(t.label,null===t||void 0===t?void 0:t.province),e.abrupt("break",19);case 18:return e.abrupt("break",19);case 19:e.next=30;break;case 21:e.t1=o,e.next="province"===e.t1?24:"municipality"===e.t1?27:29;break;case 24:return b((0,U.jg)()),b((0,G.X4)([])),e.abrupt("break",30);case 27:return b((0,G.QA)(null)),e.abrupt("break",30);case 29:return e.abrupt("break",30);case 30:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),P=function(e){return Math.round(100*(e+Number.EPSILON))/100},N=function(e){return e.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()})).join(" ")};return(0,a.jsx)(R,{sel_options:c,weather:d,forecast:m,record:n,isSmallScreen:t,onSelectItemChange:I})},K=t(99108),$=t.n(K);var ee=function(e){var n=e.record,t=(0,l.useState)(null),r=t[0],i=t[1],o=(0,l.useState)(null),c=o[0],s=o[1];return(0,l.useEffect)((function(){i(null!==n?[n.lat,n.lon]:null),s(n)}),[n]),null===r?null:(0,a.jsx)(x.J,{position:r,eventHandlers:{mouseover:function(){i(null)},click:function(){i(null)}},children:(0,a.jsx)(v.u,{className:$().tooltipCustom,permanent:!0,children:(0,a.jsx)("table",{style:{width:"100%"},children:(0,a.jsx)("tbody",{children:["Barangay","Municipality","Province","Association"].map((function(e,n){return["lat","lon"].includes(e)?(0,a.jsx)("tr",{},n):(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsxs)("b",{children:[e,":"]})}),(0,a.jsx)("td",{children:c[e.toLowerCase()]})]},n)}))})})})})},ne=[{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",name:"Street Map",attribution:"Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012"},{url:"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",name:"Topography Map",attribution:'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'},{url:"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",name:"Light",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'},{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png",name:"Terrain Map",attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",name:"Watercolor",attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",name:"Satellite Map",attribution:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"},{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",name:"Shaded Relief",attribution:"Tiles &copy; Esri &mdash; Source: Esri"},{url:"https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}",name:"Ocean",attribution:"Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"}],te={map:{width:"100%",minHeight:"700px",height:"calc(100vh - 88px - 119px)",maxWidth:function(e){return e.breakpoints.xl}}};function re(e,n,t,r,i,a,o){try{var c=e[a](o),l=c.value}catch(s){return void t(s)}c.done?n(l):Promise.resolve(l).then(r,i)}var ie={lat:13.29341114953598,lng:124.5},ae=["Barangay","Municipality","Province","Association"];var oe=function(e){var n=e.data,t=void 0===n?{villages:[],provincesMunicipalities:[]}:n,r=(0,l.useState)({}),o=r[0],y=r[1],b=(0,l.useState)(""),w=b[0],j=b[1],S=(0,l.useState)(null),_=S[0],O=S[1],E=(0,l.useRef)(null),C=(0,p.Z)((function(e){return e.breakpoints.down("md")})),M=(0,s.v9)((function(e){return e.provinces.ids})),k=(0,l.useRef)(null),L=(0,s.I0)();return(0,l.useEffect)((function(){null===k.current&&0===M.length&&(k.current=!0,L((0,u.Q)()))}),[L,M.length]),(0,l.useEffect)((function(){var e=function(){var e,n=(e=i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=4,c().get("https://firebasestorage.googleapis.com/v0/b/acap-bicol-v2-5af4e.appspot.com/o/files%2Facap-bicol.geojson?alt=media&token=5d7e9d06-9dcd-478f-934e-a27177516754");case 4:n=e.sent,y(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){re(a,r,i,o,c,"next",e)}function c(e){re(a,r,i,o,c,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();e()}),[]),(0,a.jsxs)(g.Z,{sx:te.map,style:{minHeight:C?"1300px":"750px"},children:[(0,a.jsxs)(d.h,{style:{height:"100%"},center:ie,zoom:8,maxZoom:12,minZoom:8,tileSize:512,placeholder:(0,a.jsx)("h3",{children:"You need JavaScript to render this app."}),whenCreated:function(e){E.current=e},children:[(0,a.jsx)(f.et,{position:"topleft",children:ne.map((function(e,n){return(0,a.jsx)(f.et.BaseLayer,{name:e.name,checked:0===n,children:(0,a.jsx)(h.I,{zIndex:0,attribution:e.attribution,url:e.url})},"map-".concat(n))}))}),(0,a.jsx)(m.Q,{municipality:w,data:o.features,zIndex:1,onEachFeature:function(e,n){n.setStyle(function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}({fillColor:e.properties.ADM2_EN===w?"#ff6a00":"#ffa666",fillOpacity:1,weight:0},"fillOpacity","0.5"))}},Math.random().toString(36).substring(2,8)),t.villages.map((function(e,n){return(0,a.jsx)(x.J,{position:[e.lat,e.lon],id:"tooltip-".concat(n),eventHandlers:{mouseover:function(e){null!==_&&O(null)},click:function(e){null!==_&&O(null)}},children:(0,a.jsx)(v.u,{className:$().tooltipCustom,direction:"left",children:(0,a.jsx)("table",{style:{width:"100%"},id:"tip-".concat(n),children:(0,a.jsx)("tbody",{children:ae.map((function(n,t){return["lat","lon"].includes(n)?(0,a.jsx)("tr",{},t):(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsxs)("b",{children:[n,":"]})}),(0,a.jsx)("td",{children:e[n.toLowerCase()]})]},t)}))})})})},n)})),!C&&(0,a.jsx)(ee,{record:_})]}),(0,a.jsx)(q,{record:_,isSmallScreen:C,onSelectMunicipality:function(e,n){if(null===e&&null===n)j(""),O(null);else{var r=t.villages.find((function(t){return t.municipality===e&&t.province===n}));if(void 0!==r){var i=r.province;j((function(e){return i})),O(r),function(e,n){var t=E.current;t&&t.flyTo([e,n+4],10,{duration:2.5})}(r.lat,r.lon)}else j(""),O(null)}}})]})}},1902:function(e,n,t){"use strict";t.d(n,{J4:function(){return r},Y1:function(){return i},Sx:function(){return a}});var r=[{icon:"cc_sunny_49.svg",label:"No rain",nowrap:!0},{icon:"rainfall_light_rain_49.svg",label:"Light rain"},{icon:"rainfall_moderate_rain_49.svg",label:"Moderate rain"},{icon:"rainfall_heavy_rain_49.svg",label:"Heavy rain"},{icon:"blank_weather.png",label:"Heavy rain",hidden:!0}],i=[{icon:"cc_sunny_49.svg",label:"Sunny"},{icon:"cc_mostly_sunny_49.svg",label:"Mostly sunny"},{icon:"cc_partly_cloudy_49.svg",label:"Partly cloudy"},{icon:"cc_mostly_cloudy_49.svg",label:"Mostly cloudy"},{icon:"cc_cloudy_49.svg",label:"Cloudy"}],a={rainfall:{"NO RAIN":"cc_sunny_49.svg","LIGHT RAINS":"rainfall_light_rain_49.svg","MODERATE RAINS":"rainfall_moderate_rain_49.svg","HEAVY RAINS":"rainfall_heavy_rain_49.svg"},cloudCover:{SUNNY:"cc_sunny_49.svg","MOSTLY SUNNY":"cc_mostly_sunny_49.svg","PARTLY CLOUDY":"cc_partly_cloudy_49.svg","MOSTLY CLOUDY":"cc_mostly_cloudy_49.svg",CLOUDY:"cc_cloudy_49.svg"}}},99108:function(e){e.exports={tooltipCustom:"Map_tooltipCustom___IYju"}}}]);