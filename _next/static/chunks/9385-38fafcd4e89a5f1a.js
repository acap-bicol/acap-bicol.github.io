"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9385],{38885:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(34051),o=n.n(r),a=n(67294),i=n(32848);function u(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(r,o)}function c(){var e=(0,a.useState)([]),t=e[0],n=e[1],r=(0,a.useState)(!1),c=r[0],l=r[1],s=(0,a.useState)(""),f=s[0],d=s[1];return(0,a.useEffect)((function(){var e=function(){var e,t=(e=o().mark((function e(){var t,r,a,u,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,(0,i.TQ)();case 4:t=e.sent,n(null!==(r=null===t||void 0===t?void 0:t.list)&&void 0!==r?r:[]),l(!1),d(""),e.next=19;break;case 11:e.prev=11,e.t0=e.catch(0),c=null!==(u=null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a?void 0:a.data)&&void 0!==u?u:e.t0.message,d(c),l(!1),n([]);case 19:case"end":return e.stop()}}),e,null,[[0,11]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){u(a,r,o,i,c,"next",e)}function c(e){u(a,r,o,i,c,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();e()}),[]),{cropList:t,loading:c,error:f}}},59390:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(34051),o=n.n(r),a=n(67294),i=n(32848);function u(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(r,o)}function c(e,t){var n=(0,a.useState)([]),r=n[0],c=n[1],l=(0,a.useState)([]),s=l[0],f=l[1],d=(0,a.useState)(!1),p=d[0],v=d[1],m=(0,a.useState)(""),h=m[0],b=m[1];return(0,a.useEffect)((function(){var n=function(){var n,r=(n=o().mark((function n(){var r,a,u,l,s,d,p;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,v(!0),n.next=4,(0,i.ad)(e,t);case 4:return r=n.sent,c(null!==(a=null===r||void 0===r?void 0:r.data)&&void 0!==a?a:[]),n.next=9,(0,i.Fj)(t);case 9:u=n.sent,f(null!==(l=null===u||void 0===u?void 0:u.data)&&void 0!==l?l:[]),v(!1),b(""),n.next=24;break;case 16:n.prev=16,n.t0=n.catch(0),p=null!==(d=null===n.t0||void 0===n.t0||null===(s=n.t0.response)||void 0===s?void 0:s.data)&&void 0!==d?d:n.t0.message,b(p),v(!1),c([]);case 24:case"end":return n.stop()}}),n,null,[[0,16]])})),function(){var e=this,t=arguments;return new Promise((function(r,o){var a=n.apply(e,t);function i(e){u(a,r,o,i,c,"next",e)}function c(e){u(a,r,o,i,c,"throw",e)}i(void 0)}))});return function(){return r.apply(this,arguments)}}();e&&t&&(b(""),n())}),[e,t]),{cropcalendar:r,cropStages:s,loading:p,error:h}}},22856:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(34051),o=n.n(r),a=n(67294),i=n(1096);function u(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(r,o)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){u(a,r,o,i,c,"next",e)}function c(e){u(a,r,o,i,c,"throw",e)}i(void 0)}))}}function l(e,t,n,r){var u=arguments.length>4&&void 0!==arguments[4]&&arguments[4],l=(0,a.useState)([]),s=l[0],f=l[1],d=(0,a.useState)([]),p=d[0],v=d[1],m=(0,a.useState)(!1),h=m[0],b=m[1],y=(0,a.useState)(""),g=y[0],w=y[1];return(0,a.useEffect)((function(){var a=function(){var a=c(o().mark((function a(){var c,l,s,d,p,m;return o().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,c=[],b(!1),w(""),l=t,"object"===typeof t&&(l=t.map((function(e){return e.code}))),o.next=8,(0,i.$K)({climateRisk:e,_cropStage:l,crop:n,type:r,multipleStages:u});case 8:c=o.sent,s=c.map((function(e){return e.farming_activity})).filter((function(e,t,n){return n.indexOf(e)===t})).reduce((function(e,t,n){return e.push({id:n,label:t}),e}),[]),b(!1),v(s),f(c||[]),o.next=22;break;case 15:o.prev=15,o.t0=o.catch(0),m=null!==(p=null===o.t0||void 0===o.t0||null===(d=o.t0.response)||void 0===d?void 0:d.data)&&void 0!==p?p:o.t0.message,w(m),b(!1);case 22:case"end":return o.stop()}}),a,null,[[0,15]])})));return function(){return a.apply(this,arguments)}}();t&&(null===t||void 0===t?void 0:t.length)>0?a():(f([]),v([]))}),[e,t,n,r,u]),{recommendations:s,farmoperations:p,loading:h,error:g}}},1096:function(e,t,n){n.d(t,{$K:function(){return x},iR:function(){return R}});var r=n(34051),o=n.n(r),a=n(94763),i=n(16013);function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(r,o)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){c(a,r,o,i,u,"next",e)}function u(e){c(a,r,o,i,u,"throw",e)}i(void 0)}))}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function p(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?u(e):t}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}var m=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}var b="n_list_crop_recommendations",y="n_list_crop_recommendations_",g="n_crop_recommendations_",w="n_crop_recommendations_",_=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(n,e);var t=h(n);function n(){var e;s(this,n);var r=u(e=t.apply(this,arguments));f(u(e),"getFormattedRecommendationsFromStages",function(){var e=l(o().mark((function e(t){var n,a,u,c,l,s,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.cropstages,a=t.forecast,u=t.type,void 0!==n&&void 0!==a){e.next=3;break}return e.abrupt("return");case 3:return c="".concat(y).concat(u),l=r.collection(r.db,c),s=u===i.q.SEASONAL?r.query(l,r.where("crop_stage","in",n),r.where("forecast","==",a)):r.query(l,r.where("crop_stage","in",n)),e.next=9,r.getCollectionData(c,"",s);case 9:return f=e.sent,e.abrupt("return",f);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var a=u(e);f(u(e),"getFormattedRecommendations",function(){var e=l(o().mark((function e(t){var n,r,u,c,l,s,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.cropstage,r=t.forecast,u=t.type,void 0!==n&&void 0!==r){e.next=3;break}return e.abrupt("return");case 3:return c="".concat(y).concat(u),l=a.collection(a.db,c),s=u===i.q.SEASONAL?a.query(l,a.where("crop_stage","==",n),a.where("forecast","==",r)):a.query(l,a.where("crop_stage","==",n)),e.next=9,a.getCollectionData(c,"",s);case 9:return f=e.sent,e.abrupt("return",f);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var c=u(e);f(u(e),"getCropRecommendationsLite",function(){var e=l(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.type,e.next=3,c.getDocumentData(b,n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var d=u(e);f(u(e),"getRecommendations",function(){var e=l(o().mark((function e(t){var n,r,a,i,u,c,l,s,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.climateRisk,r=t._cropStage,a=t.crop,i=t.type,u=t.multipleStages,n&&a){e.next=3;break}return e.abrupt("return");case 3:if(!u){e.next=8;break}if(0!==r.length){e.next=6;break}return e.abrupt("return");case 6:e.next=10;break;case 8:if(r){e.next=10;break}return e.abrupt("return");case 10:return c="".concat(g).concat(i),l=d.collection(d.db,c),s=u?d.query(l,d.where("climate_risk","==",n),d.where("crop_stage","in",r),d.where("crop","==",a)):d.query(l,d.where("climate_risk","==",n),d.where("crop_stage","==",r),d.where("crop","==",a)),e.next=16,d.getCollectionData(c,"",s);case 16:return f=e.sent,e.abrupt("return",f);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var p=u(e);return f(u(e),"getRecommendationsSMS",function(){var e=l(o().mark((function e(t){var n,r,a,i,u,c,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.crop,r=t.climateRisk,a=t.type,n&&r&&a){e.next=3;break}return e.abrupt("return");case 3:return i="".concat(w).concat(a),u=p.collection(p.db,i),c=p.query(u,p.where("crop","==",n),p.where("climate_risk","==",r)),e.next=8,p.getCollectionData(i,"",c);case 8:return l=e.sent,e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e}return n}(a.Z),S=new _,x=(S.getFormattedRecommendations.bind(S),S.getFormattedRecommendationsFromStages.bind(S),S.getCropRecommendationsLite.bind(S),S.getRecommendations.bind(S)),R=S.getRecommendationsSMS.bind(S)},59111:function(e,t,n){n.d(t,{m:function(){return r}});var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return e.map((function(e,n){return{id:n,label:e[t]}}))}},52955:function(e,t){function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){if(0===e.length)return{};for(var t={wb_normal:[],b_normal:[],above_normal:[],near_normal:[]},n=e[0].con,o=1,a=1;a<e.length;a++)e[a].con===n?o++:(t[n].push(o),n=e[a].con,o=1);return t[n].push(o),function(e){var t,n,o,a,i,u,c=(null!==(a=null===e||void 0===e?void 0:e.b_normal.length)&&void 0!==a?a:0)>0?(t=Math).max.apply(t,r(e.b_normal)):void 0,l=(null!==(i=null===e||void 0===e?void 0:e.wb_normal.length)&&void 0!==i?i:0)>0?(n=Math).max.apply(n,r(e.wb_normal)):void 0,s=(null!==(u=null===e||void 0===e?void 0:e.above_normal.length)&&void 0!==u?u:0)>0?(o=Math).max.apply(o,r(e.above_normal)):void 0,f=void 0!==c&&5===c||void 0!==l&&3===l,d=void 0!==c&&c[0]>=3||void 0!==l&&2===l[0];return f?{label:"Drought",code:"drought"}:d?{label:"Dry Spell",code:"dry_spell"}:void 0!==c&&2===c?{label:"Dry Condition",code:"dry_condition"}:void 0!==s&&s>=3?{label:"Wetter Condition",code:"wetter condition"}:{label:"No Risk",code:"no_risk"}}(t)}function a(e){if(0===e.length)return{};for(var t={"NO RAIN":[],"MODERATE RAINS":[],"HEAVY RAINS":[],"LIGHT RAINS":[]},n=e[0].rainfall,o=1,a=1;a<e.length;a++)e[a].rainfall===n?o++:(t[n].push(o),n=e[a].rainfall,o=1);return t[n].push(o),function(e){var t,n,o,a,i,u,c,l,s=(null!==(u=null===(a=e["MODERATE RAINS"])||void 0===a?void 0:a.length)&&void 0!==u?u:0)>0?(t=Math).max.apply(t,r(e["MODERATE RAINS"])):void 0,f=(null!==(c=null===(i=e["HEAVY RAINS"])||void 0===i?void 0:i.length)&&void 0!==c?c:0)>0?(n=Math).max.apply(n,r(e["HEAVY RAINS"])):void 0,d=(null!==(l=e["NO RAIN"].length)&&void 0!==l?l:0)>0?(o=Math).max.apply(o,r(e["NO RAIN"])):void 0;return void 0!==s&&s>=3?{label:"Flooding/Submergence 3M",code:"flooding_submergence_3M"}:void 0!==f&&f>=2?{label:"Flooding/Submergence 2H",code:"flooding_submergence_2H"}:void 0!==d&&10===d?{label:"Dry Condition",code:"dry_condition"}:{label:"No Risk",code:"no_risk"}}(t)}t.Z=function(e,t){switch(t){case"seasonal":return o(e);case"tenday":return a(e)}}}}]);