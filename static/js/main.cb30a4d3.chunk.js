(this["webpackJsonpcorona-app"]=this["webpackJsonpcorona-app"]||[]).push([[0],{114:function(e,t,a){e.exports={mapContainer:"Map_mapContainer__dIyOX"}},115:function(e,t,a){e.exports={tooltip:"Tooltip_tooltip__39nFh"}},116:function(e,t,a){e.exports=a(189)},186:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){},189:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),o=a(25),c=a.n(o),l=a(13),u=a(52);!function(e){e.Light="light",e.Dark="dark"}(n||(n={}));var s=i.a.createContext({theme:null,switchTheme:function(e){}});function d(e){var t=e.children,a=localStorage.getItem("theme")||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?n.Dark:n.Light),o=Object(r.useState)(a),c=Object(u.a)(o,2),l=c[0],d=c[1];return Object(r.useLayoutEffect)((function(){var e=l===n.Dark?n.Light:n.Dark,t=document.getElementsByTagName("html")[0];t.className=t.className.includes(l)?t.className:t.className.includes(e)?t.className.replace(e,l):t.className.split(" ").concat(l).join(" "),localStorage.setItem("theme",l)}),[l]),i.a.createElement(s.Provider,{value:{theme:l,switchTheme:d}},t)}var m,b,f=a(15),v=a(34),h=a.n(v),p=a(51),y=a(26),O=a(23),j=a(108),C=a.n(j),g=a(16),D=a(9),w=a(22),E=a.n(w);!function(e){e.Active="active",e.Confirmed="confirmed",e.Deaths="deaths",e.Recovered="recovered"}(m||(m={}));var _=(b={},Object(D.a)(b,m.Active,{}),Object(D.a)(b,m.Confirmed,{}),Object(D.a)(b,m.Deaths,{}),Object(D.a)(b,m.Recovered,{}),b);function S(){return k.apply(this,arguments)}function k(){return(k=Object(p.a)(h.a.mark((function e(){var t,a,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["https://corona.lmao.ninja/v2/countries","https://corona.lmao.ninja/v2/historical?lastdays=all"],e.next=3,Promise.all(t.map(function(){var e=Object(p.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:return a=e.sent,n=B(a[0]),r=R(a[1],n),e.abrupt("return",Object.values(n).reduce((function(e,t){var a,n=r[t.country],i=n?n.timeline:_;return Object.keys(i[m.Confirmed]).length||console.warn("countries without timeline",t),Object(f.a)({},e,Object(D.a)({},t.country,Object(f.a)({},t,{timeline:x((a={},Object(D.a)(a,m.Active,Object(f.a)({},i[m.Active],{},t.timeline[m.Active])),Object(D.a)(a,m.Confirmed,Object(f.a)({},i[m.Confirmed],{},t.timeline[m.Confirmed])),Object(D.a)(a,m.Deaths,Object(f.a)({},i[m.Deaths],{},t.timeline[m.Deaths])),Object(D.a)(a,m.Recovered,Object(f.a)({},i[m.Recovered],{},t.timeline[m.Recovered])),a))})))}),{}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){var t=E.a.utc().format("M/D/YY");return e.reduce((function(e,a){var n,r,i={country:a.country,province:null,coordinates:{latitude:a.countryInfo.lat,longitude:a.countryInfo.long},timeline:(n={},Object(D.a)(n,m.Active,Object(D.a)({},t,a.cases-a.deaths-a.recovered)),Object(D.a)(n,m.Confirmed,Object(D.a)({},t,a.cases)),Object(D.a)(n,m.Deaths,Object(D.a)({},t,a.deaths)),Object(D.a)(n,m.Recovered,Object(D.a)({},t,a.recovered)),n),updated:a.updated};return Object(f.a)({},e,Object(D.a)({},(T[r=i.country]||r).toLowerCase(),i))}),{})}function R(e,t){return e.reduce((function(e,a){var n,r,i,o,c,l={country:(null===(n=t[a.country])||void 0===n?void 0:n.country)||N(a.country),province:(null===(r=t[a.province])||void 0===r?void 0:r.country)||N(a.province),coordinates:{latitude:0,longitude:0},timeline:(i={},Object(D.a)(i,m.Active,Object.keys(a.timeline.cases).reduce((function(e,t){var n=a.timeline.cases[t]-a.timeline.deaths[t]-a.timeline.recovered[t];return e[t]=n,e}),{})),Object(D.a)(i,m.Confirmed,a.timeline.cases),Object(D.a)(i,m.Deaths,a.timeline.deaths),Object(D.a)(i,m.Recovered,a.timeline.recovered),i)},u=["Australia","China","Canada"].includes(l.country);return e[l.country]||l.province&&!u||(e[l.country]=Object(f.a)({},l,{province:null,timeline:l.province?_:l.timeline})),l.province&&(e[l.province]=l),e[l.country]&&l.province&&u&&(e[l.country].timeline=(o=e[l.country].timeline,c=l.timeline,Object.keys(o).reduce((function(e,t){var a=Object.keys(o[t]),n=Object.keys(c[t]),r=a.length?a:n;return Object(f.a)({},e,Object(D.a)({},t,r.reduce((function(e,a){return Object(f.a)({},e,Object(D.a)({},a,(o[t][a]||0)+(c[t][a]||0)))}),{})))}),_))),e}),{})}function x(e){return Object.keys(e).reduce((function(t,a){return Object(f.a)({},t,Object(D.a)({},a,Object.keys(e[a]).reduce((function(t,n){return e[a][n]&&(t[n]=e[a][n]),t}),{})))}),_)}var T={"C\xf4te d'Ivoire":"Cote d'Ivoire",Palestine:"West Bank and Gaza","Lao People's Democratic Republic":'Lao People"s Democratic Republic',Myanmar:"Burma","Holy See (Vatican City State)":"Holy See","R\xe9union":"Reunion",Macao:"macau","Saint Martin":"st martin","St. Barth":"saint barthelemy","Saint Pierre Miquelon":"saint pierre and miquelon","Cura\xe7ao":"curacao","Caribbean Netherlands":"bonaire, sint eustatius and saba"};function N(e){return Object.keys(T).reduce((function(e,t){return Object(f.a)({},e,Object(D.a)({},T[t],t))}),{})[e]||e}var Y={filterBy:m.Confirmed,sortBy:m.Confirmed,sortDirection:g.c.DESC,timelineDate:E()().format(),isTableVisibleOnMobile:!1},A=Object(y.c)({name:"sideBar",initialState:Y,reducers:{setFilterType:function(e,t){e.filterBy=t.payload},setTimelineDate:function(e,t){e.timelineDate=t.payload},sort:function(e,t){e.sortBy=t.payload.sortBy,e.sortDirection=t.payload.sortDirection},toggleTableVisibility:function(e){e.isTableVisibleOnMobile=!e.isTableVisibleOnMobile}}}),M=function(e){return e.sideBar.sortBy},L=function(e){return e.sideBar.sortDirection},F=function(e){return e.sideBar.filterBy},I=function(e){return e.sideBar.isTableVisibleOnMobile},K=Object(O.a)([function(e){return e.sideBar.timelineDate}],(function(e){return E()(e)})),G=A.actions,V=G.setFilterType,P=G.setTimelineDate,H=G.sort,z=G.toggleTableVisibility,W=A.reducer,X=Object(y.b)("countries/fetchCountries",Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),Q=Object(y.c)({name:"countries",initialState:{loading:"idle",countriesByName:{},error:null},reducers:{},extraReducers:function(e){e.addCase(X.pending,(function(e){"idle"===e.loading&&(e.loading="pending")})).addCase(X.fulfilled,(function(e,t){"pending"===e.loading&&(e.loading="idle"),e.countriesByName=t.payload})).addCase(X.rejected,(function(e,t){e.error=t.error}))}}),q=function(e){return e.countries.countriesByName},J=Object(O.a)([q],(function(e){return Object.values(e)})),Z=Object(O.a)([J,K],(function(e,t){var a=t.format("M/D/YY");return e.filter((function(e){return e.timeline.active[a]||e.timeline.confirmed[a]||e.timeline.deaths[a]||e.timeline.recovered[a]}))})),U=Object(O.a)([Z,K,M,L],(function(e,t,a,n){var r=t.format("M/D/YY"),i=Object.values(m).includes(a);return C.a.orderBy(e,(function(e){return i?e.timeline[a][r]||0:e[a]}),n===g.c.ASC?"asc":"desc").map((function(e,t){return Object(f.a)({},e,{index:t+1})}))})),$=Object(O.a)([Z,K],(function(e,t){var a=t.format("M/D/YY");return e.reduce((function(e,t){return{active:e.active+(t.timeline.active[a]||0),confirmed:e.confirmed+(t.timeline.confirmed[a]||0),deaths:e.deaths+(t.timeline.deaths[a]||0),recovered:e.recovered+(t.timeline.recovered[a]||0)}}),{active:0,confirmed:0,deaths:0,recovered:0})})),ee=Object(O.a)([Z],(function(e){return{type:"FeatureCollection",features:e.map((function(e){return{type:"Feature",geometry:{type:"Point",coordinates:[e.coordinates.longitude,e.coordinates.latitude]},properties:e}}))}})),te=Q.reducer,ae=a(63),ne=(a(184),a(44)),re=a(12),ie=a(65),oe=a.n(ie);function ce(){var e=Object(r.useContext)(s),t=e.theme,a=e.switchTheme;return i.a.createElement("label",{className:oe.a.themeSwitch},i.a.createElement("input",{type:"checkbox",checked:t===n.Dark,onChange:function(){return a(t===n.Dark?n.Light:n.Dark)}}),i.a.createElement("span",{className:Object(re.a)(oe.a.icon,t===n.Dark&&oe.a.iconDark),"aria-label":"Switch theme",role:"img"},"\ud83d\udca1"))}var le,ue=a(114),se=a.n(ue),de=Object(y.c)({name:"map",initialState:{viewport:{longitude:0,latitude:15,zoom:1.5}},reducers:{setViewport:function(e,t){e.viewport=t.payload}}}),me=function(e){return e.map.viewport},be=de.actions.setViewport,fe=de.reducer,ve=(le={},Object(D.a)(le,m.Confirmed,"#FF5733"),Object(D.a)(le,m.Recovered,"#7ECB88"),Object(D.a)(le,m.Deaths,"#BD33FF"),Object(D.a)(le,m.Active,"#FFBD33"),le);function he(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e6,t=[0,1,5,10,50,100,500,1e3,2e3],a=5e3;a<=e;)t.push(a),a+=a<1e5?5e3:a<2e5?1e4:2e4;return t.reduce((function(e,t,a){return[].concat(Object(ae.a)(e),[t,a+4])}),[])}function pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"get",t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;return[e,t,["get",a,["get","timeline"]]]}var ye=a(115),Oe=a.n(ye);function je(e){var t=e.label,a=e.value,n=e.perDay,r=e.status;return i.a.createElement("div",null,i.a.createElement("span",null,t,":"),i.a.createElement("span",{style:{color:ve[r]}},i.a.createElement("span",null,(null===a||void 0===a?void 0:a.toLocaleString())||0),i.a.createElement("sup",null,"(","".concat(n>0?"+":"").concat(!isNaN(n)&&(null===n||void 0===n?void 0:n.toLocaleString())||0),")")))}function Ce(e){var t=e.date,a=e.hoveredCountry;if(a.country){var n=t.format("M/D/YY"),r=t.clone().subtract(1,"day").format("M/D/YY"),o=a.country.timeline,c=[{label:"Confirmed",status:m.Confirmed},{label:"Deaths",status:m.Deaths},{label:"Recovered",status:m.Recovered},{label:"Active",status:m.Active}];return i.a.createElement("div",{className:Oe.a.tooltip,style:{top:a.offsetY,left:a.offsetX}},i.a.createElement("b",null,a.country.country),c.map((function(e){var t=e.label,a=e.status;return i.a.createElement(je,{key:a,label:t,value:o[a][n],perDay:o[a][n]-o[a][r],status:a})})))}return null}var ge=Object(r.memo)((function(){var e=Object(r.useRef)(null),t=Object(r.useContext)(s).theme,a=Object(l.c)(me),o=Object(r.useState)(a),c=Object(u.a)(o,2),d=c[0],m=c[1],b=Object(r.useState)({country:null,offsetX:0,offsetY:0}),v=Object(u.a)(b,2),h=v[0],p=v[1],y=Object(l.c)(q),O=Object(l.c)(ee),j=Object(l.c)(F),C=Object(l.c)(K),g=C.format("M/D/YY"),D=pe("has",g,j),w=pe("get",g,j),E=Object(r.useCallback)((function(e){var t=e.features,a=void 0===t?[]:t,n=e.srcEvent,r=n.offsetX,i=n.offsetY,o=a.find((function(e){return["label","point"].includes(e.layer.id)}));if(o&&o.properties&&o.properties.country){if(h.country!==o.properties.country)return p({offsetX:r,offsetY:i,country:y[o.properties.country]})}else if(h.country)return p({offsetX:0,offsetY:0,country:null})}),[y,h]);return Object(r.useEffect)((function(){m(Object(f.a)({},a,{transitionInterpolator:new ne.a({speed:1.2}),transitionDuration:"auto"}))}),[a]),i.a.createElement("div",{className:se.a.mapContainer},i.a.createElement(ne.d,Object.assign({ref:e},d,{width:"100%",height:"100%",mapStyle:"mapbox://styles/mapbox/".concat(t,"-v10"),mapboxApiAccessToken:"pk.eyJ1IjoiZGVtcGtoIiwiYSI6ImNrOGZwanFuazAxdnozbG4yNm1tOHVuYzkifQ.fRJrCsndLJ4yM-jlPaAG9Q",onViewportChange:function(e){return m(e)},onHover:E}),i.a.createElement(ne.c,{id:"data",type:"geojson",data:O},i.a.createElement(ne.b,{id:"point",type:"circle",filter:["all",D,[">",w,0]],paint:{"circle-radius":["interpolate",["linear"],w].concat(Object(ae.a)(he())),"circle-color":ve[j],"circle-opacity":.4,"circle-stroke-width":1,"circle-stroke-color":ve[j]}}),i.a.createElement(ne.b,{id:"label",type:"symbol",filter:["all",D,[">",w,0]],paint:{"text-color":t===n.Light?"#3B3B3B":"#EBEBEB"},layout:{"text-field":w,"text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"],"text-size":12}})),i.a.createElement(Ce,{date:C,hoveredCountry:h})),i.a.createElement(ce,null))})),De=a(31),we=a.n(De);function Ee(e){var t=e.dataKey,a=e.label,n=e.sortBy,r=e.sortDirection;return i.a.createElement("div",{key:t,className:we.a.headerCol},i.a.createElement("span",null,a),i.a.createElement("span",null,n===t&&i.a.createElement(g.d,{sortDirection:r})))}function _e(){var e=Object(l.b)(),t=Object(l.c)(U),a=Object(l.c)(K).format("M/D/YY"),n=Object(l.c)(M),r=Object(l.c)(L),o=Object(l.c)(I);return i.a.createElement("div",{style:{height:"100%"}},i.a.createElement("div",{className:Object(re.a)(we.a.tableContainer,!o&&we.a.hiddenForMobile)},i.a.createElement(g.a,null,(function(c){var l=c.width,u=c.height,s=(l-50)/100*17.5,d=(l-50)/100*30;return i.a.createElement(g.e,{width:l,height:u,headerHeight:40,rowHeight:50,rowCount:t.length,rowClassName:Se,rowGetter:function(e){var a=e.index;return t[a]},onRowClick:function(t){var a=t.rowData;o&&e(z()),e(be({longitude:a.coordinates.longitude,latitude:a.coordinates.latitude,zoom:6}))},sort:function(t){var a=t.sortBy,n=t.sortDirection;return e(H({sortBy:a,sortDirection:n}))},sortBy:n,sortDirection:r},i.a.createElement(g.b,{label:"#",dataKey:"index",disableSort:!0,width:50,headerRenderer:Ee}),i.a.createElement(g.b,{width:d,label:"Country",dataKey:"country",defaultSortDirection:"ASC",headerRenderer:Ee}),i.a.createElement(g.b,{label:"Confirmed",dataKey:m.Confirmed,defaultSortDirection:"DESC",width:s,headerRenderer:Ee,cellDataGetter:function(e){var t,n=e.dataKey;return(null===(t=e.rowData.timeline[n][a])||void 0===t?void 0:t.toLocaleString())||0}}),i.a.createElement(g.b,{label:"Recovered",dataKey:m.Recovered,defaultSortDirection:"DESC",width:s,headerRenderer:Ee,cellDataGetter:function(e){var t,n=e.dataKey;return(null===(t=e.rowData.timeline[n][a])||void 0===t?void 0:t.toLocaleString())||0}}),i.a.createElement(g.b,{label:"Deaths",dataKey:m.Deaths,defaultSortDirection:"DESC",width:s,headerRenderer:Ee,cellDataGetter:function(e){var t,n=e.dataKey;return(null===(t=e.rowData.timeline[n][a])||void 0===t?void 0:t.toLocaleString())||0}}),i.a.createElement(g.b,{label:"Active",dataKey:m.Active,defaultSortDirection:"DESC",width:s,headerRenderer:Ee,cellDataGetter:function(e){var t,n=e.dataKey;return(null===(t=e.rowData.timeline[n][a])||void 0===t?void 0:t.toLocaleString())||0}}))}))),i.a.createElement("div",{className:we.a.toggleTable,onClick:function(){return e(z())}},"".concat(o?"Hide":"Show"," table")))}function Se(e){var t=e.index;return t>=0?t%2?we.a.evenRow:we.a.oddRow:we.a.headerRow}var ke=a(32),Be=a.n(ke);function Re(e){var t=e.label,a=e.quantity,n=e.activeColor,r=e.isActive,o=e.onClick;return i.a.createElement("div",{className:Object(re.a)(Be.a.totalCount,r&&Be.a.totalCountActive),style:r?{color:n}:{},onClick:o},i.a.createElement("div",{className:Be.a.totalCountLabel},t),i.a.createElement("div",{className:Be.a.totalCountTotalQuantity},a.toLocaleString()))}a(186);var xe=Object(r.memo)((function(e){var t=e.date,a=void 0===t?E()():t,n=e.onChange,o=e.minDate,c=e.maxDate,l=Object(r.useCallback)((function(e){var t=a.clone().dayOfYear(+e.currentTarget.value);return n(t)}),[a,n]);return i.a.createElement("div",{className:"timeline-panel"},i.a.createElement("label",null,a.format("LL")),i.a.createElement("input",{className:"range",type:"range",value:a.dayOfYear(),step:1,min:null===o||void 0===o?void 0:o.dayOfYear(),max:null===c||void 0===c?void 0:c.dayOfYear(),onChange:l}))}));function Te(){var e=Object(l.b)(),t=Object(l.c)(K),a=Object(l.c)(F),n=Object(l.c)($),r=Object(l.c)(I),o=[{label:"Confirmed",status:m.Confirmed},{label:"Recovered",status:m.Recovered},{label:"Deaths",status:m.Deaths},{label:"Active",status:m.Active}];return i.a.createElement("div",{className:Object(re.a)(Be.a.sideBar,r&&Be.a.open)},i.a.createElement("div",{className:Be.a.header},o.map((function(t){var r=t.label,o=t.status;return i.a.createElement(Re,{key:o,label:r,quantity:n[o],activeColor:ve[a],isActive:a===o,onClick:function(){return e(V(o))}})}))),i.a.createElement(xe,{date:E()(t),onChange:function(t){return e(P(t.format()))},minDate:E()("2020-01-22T00:00:00"),maxDate:E()()}),i.a.createElement(_e,null))}a(187);var Ne=function(){var e=Object(l.b)();return Object(r.useEffect)((function(){e(X())}),[e]),i.a.createElement(d,null,i.a.createElement("div",{className:"App"},i.a.createElement(Te,null),i.a.createElement(ge,null)))},Ye=Object(y.a)({reducer:{countries:te,map:fe,sideBar:W},middleware:Object(y.d)()});a(188),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(l.a,{store:Ye},i.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,t,a){e.exports={tableContainer:"CountriesTable_tableContainer__HsFmS",toggleTable:"CountriesTable_toggleTable__1hgWR",hiddenForMobile:"CountriesTable_hiddenForMobile__3k__Z",headerCol:"CountriesTable_headerCol__2UGwN",headerRow:"CountriesTable_headerRow__9aWhl",evenRow:"CountriesTable_evenRow__24xvc",oddRow:"CountriesTable_oddRow__3SP1f"}},32:function(e,t,a){e.exports={sideBar:"SideBar_sideBar__3wXsx",open:"SideBar_open__EKK0f",header:"SideBar_header__1g25-",totalCount:"SideBar_totalCount__3igL0",totalCountLabel:"SideBar_totalCountLabel__1ys8g",totalCountTotalQuantity:"SideBar_totalCountTotalQuantity__p9LpH"}},65:function(e,t,a){e.exports={themeSwitch:"ThemeSwitch_themeSwitch__1QWdi",icon:"ThemeSwitch_icon__3Wdqm",iconDark:"ThemeSwitch_iconDark___vnup"}}},[[116,1,2]]]);
//# sourceMappingURL=main.cb30a4d3.chunk.js.map