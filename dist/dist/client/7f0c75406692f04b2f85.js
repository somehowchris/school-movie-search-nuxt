(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{247:function(e,t,r){var content=r(250);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(46).default)("30629462",content,!0,{sourceMap:!1})},248:function(e,t,r){"use strict";r(6),r(3),r(4),r(1),r(5),r(47);var o=r(0),n=(r(33),r(11)),c=r(55),l=r(77);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"MovieCard",props:{movie:Object},data:function(){return{show:!1,favorite:!1,trailer:void 0}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.favorite=e.isFavorite,l.c||!e.movie.id){t.next=4;break}return t.next=4,e.checkForTrailer();case 4:case"end":return t.stop()}}),t)})))()},computed:{isFavorite:function(){return!!localStorage.getItem(this.movie.id)}},methods:v(v({},Object(c.c)(["setMovie"])),{},{toggleFavorite:function(){localStorage.setItem(this.movie.id,!this.favorite),this.favorite=!this.favorite},checkForTrailer:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$mdb.movieInfo({id:e.movie.id,language:e.$i18n.locale,append_to_response:"videos"});case 2:e.trailer=t.sent,e.trailer=e.trailer.videos.results.find((function(e){return"Trailer"===e.type}))||{};case 4:case"end":return t.stop()}}),t)})))()},watchTrailer:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.trailer||!l.c||!e.movie.id){t.next=3;break}return t.next=3,e.checkForTrailer();case 3:e.trailer&&e.trailer.key&&e.setMovie(e.trailer);case 4:case"end":return t.stop()}}),t)})))()}})},f=(r(249),r(52)),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"card"},[e.movie.poster_path?r("div",{staticClass:"card-header"},[r("img",{staticClass:"card-img",attrs:{src:e.movie.poster_path?"https://image.tmdb.org/t/p/w780"+e.movie.poster_path:void 0,alt:"Card image"}})]):r("div",{staticStyle:{"margin-top":"32%"}}),e._v(" "),r("div",{staticClass:"card-body"},[r("h1",{staticClass:"card-title"},[e._v(e._s(e.movie.title))]),e._v(" "),r("b-row",[r("b-col",{attrs:{md:"12"}},[r("b-row",[r("b-col",{staticClass:"metadata",attrs:{md:"4"}},[r("i",{staticClass:"fa fa-star",attrs:{"aria-hidden":"true"}}),e._v(" "),r("p",[e._v(e._s(e.movie.vote_average)+"/10")])]),e._v(" "),r("b-col",{attrs:{md:"8"}},[e._v(e._s(e.movie.release_date))])],1)],1)],1),e._v(" "),r("p",{staticClass:"card-text"},[e._v(e._s(e.movie.overview))]),e._v(" "),r("b-row",[e.movie.id&&(void 0===e.trailer||e.trailer.key)?r("b-col",{staticStyle:{"margin-top":"8px"},attrs:{sm:"12",md:"6",lg:"6"}},[r("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"},on:{click:function(t){return e.watchTrailer()}}},[e._v(e._s(e.$t("trailer.watch")))])]):e._e(),e._v(" "),e.movie.id?r("b-col",{staticStyle:{"margin-top":"8px"},attrs:{sm:"12",md:"6",lg:"6"}},[r("button",{staticClass:"btn btn-outline-warning align-right",attrs:{type:"button"},on:{click:e.toggleFavorite}},[e._v(e._s(e.favorite?e.$t("favorite.remove"):e.$t("favorite.add")))])]):e._e()],1)],1)])])}),[],!1,null,null,null);t.a=component.exports},249:function(e,t,r){"use strict";var o=r(247);r.n(o).a},250:function(e,t,r){(t=r(45)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700);"]),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Fredericka+the+Great);"]),t.push([e.i,".col-md-4,.description{padding:0}.description{font-family:Fredericka the Great,cursive;text-align:left}.card-header,.metadata{background:none;padding:0;position:relative;border-style:none}.metadata{font-size:16px}.metadata i,.metadata p{float:left}.metadata p{margin-top:0;margin-left:10px}.metadata i{color:#ff9d00;margin-top:5px;margin-left:1px}.card-img{-webkit-clip-path:inset(10% 0 20% 0);clip-path:inset(10% 0 20% 0);margin-top:-15%}.card-body{position:relative;margin-top:-30%;color:#9fa7a9}.card-body .card-title{font-weight:600;color:#414345}.card-body .card-text{margin-top:8px;font-weight:600;line-height:30px}.card,.trailer-preview{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.card:hover,.trailer-preview:hover{box-shadow:0 8px 18px rgba(0,0,0,.1),0 8px 8px rgba(0,0,0,.18)}.card{border-radius:8pt;border-style:none;overflow:hidden}.trailer-preview{position:absolute;top:-46px;right:24px;width:80px;height:80px;border-radius:50%;font-size:36px;text-align:left;padding-top:13px}.trailer-preview,.trailer-preview:active,.trailer-preview:disabled,.trailer-preview:focus,.trailer-preview:hover{background-color:#ff3d49;color:#fff}.trailer-preview i{margin-left:5px}",""]),e.exports=t},251:function(e,t,r){var content=r(254);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(46).default)("6759f5ab",content,!0,{sourceMap:!1})},252:function(e,t,r){"use strict";var o={name:"MovieTable",components:{MovieCard:r(248).a},props:{movies:Array}},n=r(52),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-row",{staticStyle:{"padding-left":"15px","padding-right":"15px",color:"lightgray","margin-bottom":"4px"}},[e.movies?r("span",[e._v("Showing you "+e._s(e.movies.results.length+" out of "+e.movies.total_results))]):r("span",[e._v(e._s(e.$t("search.no_search")))])]),e._v(" "),r("b-row",e._l(e.movies.results,(function(e){return r("b-col",{key:e.id,staticStyle:{"margin-top":"20px"},attrs:{md:"6",lg:"6",xl:"3"}},[r("MovieCard",{attrs:{movie:e}})],1)})),1)],1)}),[],!1,null,null,null);t.a=component.exports},253:function(e,t,r){"use strict";var o=r(251);r.n(o).a},254:function(e,t,r){(t=r(45)(!1)).push([e.i,".container-fluid{margin-top:80px;justify-content:center;align-items:center;text-align:left}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""]),e.exports=t},256:function(e,t,r){"use strict";r.r(t);var o=r(14),n=(r(122),r(33),r(11)),c=r(252),l=r(166),d=r.n(l),v={components:{MovieTable:c.a},data:function(){return{response:{},search:""}},methods:{debounceSearch:d.a.debounce(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.searchOnline(this.search);case 2:this.response=e.sent;case 3:case"end":return e.stop()}}),e,this)}))),200),searchOnline:function(){var e=arguments,t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var o,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.length>0&&void 0!==e[0]?e[0]:"",n=e.length>1&&void 0!==e[1]?e[1]:1,r.abrupt("return",t.$mdb.searchMovie({query:o,page:n,language:t.$i18n.locale,append_to_response:"videos"}));case 3:case"end":return r.stop()}}),r)})))()},clearSearch:function(){this.search=""},loadMore:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.searchOnline(e.search,e.response.page+1);case 2:(r=t.sent).results=e.response?[].concat(Object(o.a)(e.response.results),Object(o.a)(r.results)):r,e.response=r;case 5:case"end":return t.stop()}}),t)})))()}},watch:{search:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.debounceSearch();case 1:case"end":return t.stop()}}),t)})))()}}},m=(r(253),r(52)),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.$t("search.title")))]),e._v(" "),r("b-row",[r("b-col",{staticClass:"input-group mb-3",attrs:{lg:"10",md:"8",sm:"12"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.$t("search.placeholder"),"aria-label":e.$t("search.placeholder"),"aria-describedby":"basic-addon2"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),e._v(" "),r("b-col",{staticStyle:{"padding-right":"15px","padding-left":"15px",width:"100%"},attrs:{lg:"2",mg:"4",sm:"12"}},[r("button",{staticClass:"btn btn-light",staticStyle:{width:"100%"},attrs:{type:"button"},on:{click:e.clearSearch}},[e._v(e._s(e.$t("search.clear")))])])],1),e._v(" "),e.response&&e.response.results?r("MovieTable",{attrs:{movies:e.response}}):e._e(),e._v(" "),!e.search||e.search&&0===e.search.length?r("div",{staticStyle:{color:"lightgray"}},[e._v(e._s(e.$t("search.no_search")))]):e._e(),e._v(" "),e.response&&e.response.results&&e.response.page<e.response.total_pages?r("b-row",{staticStyle:{"margin-bottom":"40px","margin-top":"40px",display:"box"}},[r("div",{staticClass:"mx-auto"},[r("div",{staticStyle:{color:"lightgray"}},[e._v(e._s(e.response.results.length+" out of "+e.response.total_results))]),e._v(" "),r("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:e.loadMore}},[e._v(e._s(e.$t("loadMore")))])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);