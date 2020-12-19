(this.webpackJsonpptiuas=this.webpackJsonpptiuas||[]).push([[0],{216:function(e,t,a){},219:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a.n(r),s=a(87),o=a.n(s),i=a(8),l=a.n(i),u=a(19),d=a(14),j=a(15),p=a(17),b=a(16),h=a(237),O=a(241),f=a(238),x=a(239),v=a(42),m=a.n(v),g=a(43),y=a.n(g),_=a(24),C=a.n(_),w=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,s=t.lastUpdate;return a?t?Object(n.jsx)("div",{className:C.a.container,children:Object(n.jsxs)(h.a,{container:!0,spacing:3,justify:"center",children:[Object(n.jsx)(h.a,{item:!0,component:O.a,xs:12,md:3,className:y()(C.a.card,C.a.infected),children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(n.jsx)(x.a,{varaint:"h5",children:Object(n.jsx)(m.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(n.jsx)(x.a,{colr:"textSecondary",children:new Date(s).toDateString()}),Object(n.jsx)(x.a,{variant:"body2",children:"Number of active cases of COVID-19"})]})}),Object(n.jsx)(h.a,{item:!0,component:O.a,xs:12,md:3,className:y()(C.a.card,C.a.recovered),children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(n.jsx)(x.a,{varaint:"h5",children:Object(n.jsx)(m.a,{start:0,end:r.value,duration:2.5,separator:","})}),Object(n.jsx)(x.a,{colr:"textSecondary",children:new Date(s).toDateString()}),Object(n.jsx)(x.a,{variant:"body2",children:"Number of recoveries cases of COVID-19"})]})}),Object(n.jsx)(h.a,{item:!0,component:O.a,xs:12,md:3,className:y()(C.a.card,C.a.deaths),children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(n.jsx)(x.a,{varaint:"h5",children:Object(n.jsx)(m.a,{start:0,end:c.value,duration:2.5,separator:","})}),Object(n.jsx)(x.a,{colr:"textSecondary",children:new Date(s).toDateString()}),Object(n.jsx)(x.a,{variant:"body2",children:"Number of deaths caused by COVID-19"})]})})]})}):Object(n.jsx)("p",{children:" Loading "}):"Loading..."},k=a(41),A=a(44),N=a.n(A),S="https://covid19.mathdro.id/api",D=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,r,c,s,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S,t&&(a="".concat(S,"/countries/").concat(t)),e.prev=2,e.next=5,N.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,s=r.recovered,o=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:s,deaths:o,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(S,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,recovered:e.recovered.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(S,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),L=a(56),T=a(91),E=a.n(T),G=function(e){var t=e.data,a=t.confirmed,c=t.recovered,s=t.deaths,o=e.country,i=Object(r.useState)([]),d=Object(k.a)(i,2),j=d[0],p=d[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=j[0]?Object(n.jsx)(L.Line,{data:{labels:j.map((function(e){var t=e.date;return new Date(t).toLocaleDateString()})),datasets:[{data:j.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:j.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0},{data:j.map((function(e){return e.recovered})),label:"Recovered",borderColor:"green",backgroundColor:"rgba(0, 255, 0, 0.5)",fill:!0}]}}):null,h=a?Object(n.jsx)(L.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0 , 255 , 0.5)","rgba(0, 255 , 0 , 0.5)","rgba(255, 0 , 0 , 0.5)"],data:[a.value,c.value,s.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(o)}}}):null;return Object(n.jsx)("div",{className:E.a.container,children:o?h:b})},P=a(242),R=a(240),U=a(92),V=a.n(U),J=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),c=Object(k.a)(a,2),s=c[0],o=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.jsx)(P.a,{class:"container",className:V.a.formControl,children:Object(n.jsxs)(R.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(n.jsx)("option",{value:"global",children:"GLOBAL"}),s.map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)}))]})})};a(216);var F=function(){return Object(n.jsx)("div",{className:"main-footer",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("h4",{children:"Kelompok 9"}),Object(n.jsxs)("h1",{className:"list-unstyled",children:[Object(n.jsx)("li",{children:"Billy Nathanael Wongkar - 00000037503"}),Object(n.jsx)("li",{children:"Elfajar Bintang Samudera - 00000037235"}),Object(n.jsx)("li",{children:"Gilang Satria Putra - 00000037741"}),Object(n.jsx)("li",{children:"Nehemia Cecio Tanjung Jati - 00000039011"})]})]})}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("p",{className:"col-sm",children:["\xa9",(new Date).getFullYear()," PTI | Kelompok 9 | Terms Of Service | Privacy"]})})]})})},K=(a(85),a(86),a.p+"static/media/corona.1dcc25c9.png"),Y=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"logo",children:Object(n.jsxs)("h1",{children:[" Covid-19 ",Object(n.jsx)("img",{src:K,width:"100px",alt:"Covid"})]})})}}]),a}(r.Component),Z=a(27),q=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={toggle:!1},e.menuToggle=function(){e.setState({toggle:!e.state.toggle})},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state.toggle;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("ul",{className:e?"toggle":"",children:[Object(n.jsx)("li",{children:Object(n.jsx)(Z.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(Z.b,{to:"/about",children:"About Us"})}),Object(n.jsx)("li",{className:"close",onClick:this.menuToggle,children:"X"})]}),Object(n.jsx)("div",{className:"menu",onClick:this.menuToggle,children:"Menu"})]})}}]),a}(r.Component),H=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("header",{children:[Object(n.jsx)(Y,{}),Object(n.jsx)(q,{})]})}}]),a}(r.Component),M=a.p+"static/media/fajar.1e260f3e.jpg",W=a.p+"static/media/gilang.3e8a9bfe.jpg",X=a.p+"static/media/nehe.529a94f5.jpg",z=a.p+"static/media/billy.1d2a5e7f.jpg",Q=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App.module",children:[Object(n.jsx)("h2",{Justify:!0,children:"About Us"}),Object(n.jsx)("img",{class:"img",src:z,width:"350",alt:"Billy"}),Object(n.jsx)("img",{class:"img",src:M,width:"350",margin:"10px","margin-right":"5px",alt:"Fajar"}),Object(n.jsx)("img",{class:"img",src:W,width:"350",alt:"Gilang"}),Object(n.jsx)("img",{class:"img",src:X,width:"350",alt:"Nehemia"})]})}}]),a}(r.Component),$=a(6),ee=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("section",{children:[Object(n.jsx)($.a,{path:"/about",component:Q,exact:!0,target:"blank"}),Object(n.jsx)($.a,{path:"/app",component:te,exact:!0})]})}}]),a}(r.Component),te=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D("global"===a?null:a);case 2:n=t.sent,console.log(a),e.setState({data:n,country:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return console.log(t),t?Object(n.jsxs)(Z.a,{children:[Object(n.jsxs)("div",{class:"body",children:[Object(n.jsx)(H,{}),Object(n.jsx)(w,{data:t}),Object(n.jsx)(J,{classname:"App",handleCountryChange:this.handleCountryChange}),Object(n.jsx)(G,{data:t,country:a})]}),Object(n.jsx)(ee,{}),Object(n.jsx)(F,{})]}):Object(n.jsx)("p",{children:" Loading..."})}}]),a}(c.a.Component);a(218);o.a.render(Object(n.jsx)(te,{}),document.getElementById("root"))},24:function(e,t,a){e.exports={container:"Cards_container__NSSbg",card:"Cards_card__28YVk",infected:"Cards_infected__RY2fu",recovered:"Cards_recovered__2qfoF",deaths:"Cards_deaths__3_cGw"}},85:function(e,t,a){},86:function(e,t,a){e.exports={body:"App_body__2ZNPW",container:"App_container__zklHG","page-container":"App_page-container__2gxG4",App:"App_App__29Omt","App-logo":"App_App-logo__3IlaI","App-logo-spin":"App_App-logo-spin__2fTSZ","App-header":"App_App-header__w3D0E","App-link":"App_App-link__KL4lZ","content-wrap":"App_content-wrap__3DAA-","nav-links":"App_nav-links__1oOqc"}},91:function(e,t,a){e.exports={container:"Chart_container__X8SlN"}},92:function(e,t,a){e.exports={container:"CountryPicker_container__126RE"}}},[[219,1,2]]]);
//# sourceMappingURL=main.48457f7c.chunk.js.map