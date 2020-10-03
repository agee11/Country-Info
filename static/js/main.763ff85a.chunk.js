(this.webpackJsonpcountry_app=this.webpackJsonpcountry_app||[]).push([[0],{58:function(e,t,n){e.exports=n(80)},63:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),l=(n(63),n(55)),i=n(15),u=n(8),s=n(9),d=n(18),m=n(11),p=n(10),h=n(50),f=n(22),k=(n(68),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleDarkMode=a.handleDarkMode.bind(Object(d.a)(a)),a}return Object(s.a)(n,[{key:"handleDarkMode",value:function(){this.props.toggleDarkMode()}},{key:"render",value:function(){return r.a.createElement(h.a,{expand:"true",bg:this.props.darkmode?"dark":"light",variant:this.props.darkmode?"dark":"light"},r.a.createElement(h.a.Brand,null,r.a.createElement("strong",{className:"brand"},"Where in the world?")),r.a.createElement(f.a,{onClick:this.handleDarkMode,variant:this.props.darkmode?"dark":"light"},r.a.createElement("i",{className:"fas fa-moon"})," Dark Mode"))}}]),n}(r.a.Component));var v=Object(i.b)((function(e){return{darkmode:e.darkmode}}),(function(e){return{toggleDarkMode:function(){return e({type:"DARKMODE"})}}}))(k),E=(n(69),n(70),n(6)),b=n(85),g=n(86),y=n(32),O=(n(71),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(e){var t=this;return r.a.createElement(y.a,{onClick:function(){return t.props.history.push("/country/"+t.props.countryInfo.alpha3Code)},bg:this.props.darkmode?"dark":"light",text:this.props.darkmode?"white":"black",className:"country-card",style:{width:"18rem"}},r.a.createElement(y.a.Img,{className:"card-img",variant:"top",style:{height:"11rem"},src:this.props.countryInfo.flag}),r.a.createElement(y.a.Body,null,r.a.createElement(y.a.Title,null,this.props.countryInfo.name),r.a.createElement(y.a.Text,null,r.a.createElement("span",null,r.a.createElement("strong",null,"Population: "),this.props.countryInfo.population.toLocaleString()),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("strong",null,"Region: "),this.props.countryInfo.region),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("strong",null,"Capital: "),this.props.countryInfo.capital))))}}]),n}(r.a.Component)),j=Object(E.f)(O),C=(n(73),n(56)),I=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={input:""},a.handleSearch=a.handleSearch.bind(Object(d.a)(a)),a}return Object(s.a)(n,[{key:"handleSearch",value:function(e){this.props.updateSearch(e.target.value)}},{key:"render",value:function(){return r.a.createElement(C.a.Control,{style:this.props.darkmode?{backgroundColor:"#343a40",color:"#fff"}:{backgroundColor:"#fff"},className:"flex-40",type:"input",placeholder:"Search for a country...",onChange:this.handleSearch})}}]),n}(r.a.Component),S=n(20),N=n(54),D=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleFilter=a.handleFilter.bind(Object(d.a)(a)),a}return Object(s.a)(n,[{key:"handleFilter",value:function(e){console.log(e),this.props.setFilter(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"filter-dropdown"},r.a.createElement(N.a,{variant:this.props.darkmode?"dark":"light",title:"Filter by Region"},r.a.createElement(S.a.Item,{onSelect:this.handleFilter,eventKey:""},"All"),r.a.createElement(S.a.Item,{onSelect:this.handleFilter,eventKey:"Africa"},"Africa"),r.a.createElement(S.a.Item,{onSelect:this.handleFilter,eventKey:"Americas"},"Americas"),r.a.createElement(S.a.Item,{onSelect:this.handleFilter,eventKey:"Asia"},"Asia"),r.a.createElement(S.a.Item,{onSelect:this.handleFilter,eventKey:"Europe"},"Europe"),r.a.createElement(S.a.Item,{onSelect:this.handleFilter,eventKey:"Oceania"},"Oceania")))}}]),n}(r.a.Component);var F=Object(i.b)((function(e){return{darkmode:e.darkmode,region:e.filter}}),(function(e){return{setFilter:function(t){return e(function(e){return{type:"FILTER",region:e}}(t))}}}))(D),M=(n(76),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-container",style:this.props.darkmode?{backgroundColor:"#212428"}:{backgroundColor:"#fff"}},r.a.createElement(I,{darkmode:this.props.darkmode,updateSearch:this.props.updateSearch}),r.a.createElement(F,null))}}]),n}(r.a.Component));var A=Object(i.b)((function(e){return{darkmode:e.darkmode}}),(function(e){return{updateSearch:function(t){return e(function(e){return{type:"SEARCH",text:e}}(t))}}}))(M),w=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={cards:[]},a.handleCardClicked=a.handleCardClicked.bind(Object(d.a)(a)),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(t){e.setState({cards:t,inProp:!0})}),(function(e){console.log(e)}))}},{key:"handleCardClicked",value:function(e){this.setState({countryCode:e})}},{key:"render",value:function(){var e,t=this;return e=this.props.region?this.state.cards.filter((function(e){return e.region===t.props.region})):this.state.cards,this.props.search&&(e=e.filter((function(e){return e.name.toLowerCase().includes(t.props.search)}))),r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement("div",{className:"card-container",style:this.props.darkmode?{backgroundColor:"#212428"}:{backgroundColor:"#fff"}},e.map((function(e,n){return r.a.createElement(j,{key:n,handleClick:t.handleCardClicked,darkmode:t.props.darkmode,countryInfo:e})}))))}}]),n}(r.a.Component),R=Object(E.f)(w);var x=Object(i.b)((function(e){return{darkmode:e.darkmode,region:e.filter,search:e.search}}))(R),K=(n(77),n(78),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={countryInfo:{name:""}},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2/alpha/"+this.props.code).then((function(e){return e.json()})).then((function(t){e.setState({countryInfo:t})}),(function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(e){}},{key:"render",value:function(){var e=this;return r.a.createElement(f.a,{className:"border-link",variant:this.props.darkmode?"dark":"light",onClick:function(){e.props.history.push("/country/"+e.props.code)}},this.state.countryInfo.name)}}]),n}(r.a.Component)),L=Object(E.f)(K),B=(n(79),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={countryInfo:{flag:"",name:"",nativeName:"",population:"",region:"",subregion:"",capital:"",topLevelDomain:"",currencies:[{name:""}],languages:[{name:""}],borders:[]}},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(e){var t=this;this.props.match&&fetch("https://restcountries.eu/rest/v2/alpha/"+this.props.match.params.code).then((function(e){return e.json()})).then((function(e){t.setState({countryInfo:e})}),(function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(e){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"back-button-section"+(this.props.darkmode?" darkmode":"")},r.a.createElement(f.a,{className:"back-button",onClick:function(){e.props.history.goBack()},variant:this.props.darkmode?"dark":"light"},r.a.createElement("i",{className:"fas fa-arrow-left"})," Back")),r.a.createElement("div",{className:"country-page"+(this.props.darkmode?" darkmode":"")},r.a.createElement("img",{className:"flag-img",src:this.state.countryInfo.flag,alt:"flag"}),r.a.createElement("div",{className:"country-info"},r.a.createElement("h3",null,r.a.createElement("strong",null,this.state.countryInfo.name)),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Native Name: "),this.state.countryInfo.nativeName),r.a.createElement("p",null,r.a.createElement("strong",null,"Population: "),this.state.countryInfo.population),r.a.createElement("p",null,r.a.createElement("strong",null,"Region: "),this.state.countryInfo.region),r.a.createElement("p",null,r.a.createElement("strong",null,"Sub Region: "),this.state.countryInfo.subregion),r.a.createElement("p",null,r.a.createElement("strong",null,"Capital: "),this.state.countryInfo.capital)),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Top Level Domain: "),this.state.countryInfo.topLevelDomain),r.a.createElement("p",null,r.a.createElement("strong",null,"Currencies: "),this.state.countryInfo.currencies.map((function(e){return e.name}))),r.a.createElement("p",null,r.a.createElement("strong",null,"Languages: "),this.state.countryInfo.languages.map((function(t,n){return t.name+(n<e.state.countryInfo.languages.length-1?", ":"")})))),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Border Countries: "),this.state.countryInfo.borders.map((function(t,n){return r.a.createElement(L,{key:n,darkmode:e.props.darkmode,code:t})})))))))}}]),n}(r.a.Component)),T=Object(E.f)(B);var P=Object(i.b)((function(e){return{darkmode:e.darkmode}}))(T),H=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(g.a,{key:this.props.location.key,timeout:3e3,classNames:"page"},r.a.createElement("div",{className:"content-container"},r.a.createElement(E.c,{location:this.props.location},r.a.createElement(E.a,{exact:!0,path:"/",component:x}),r.a.createElement(E.a,{path:"/country/:code",component:P})))))}}]),n}(r.a.Component),J=Object(E.f)(H);var U=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(v,null)),r.a.createElement(l.a,null,r.a.createElement(J,null)))},_=n(27),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER":return t.region;default:return e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DARKMODE":return!e;default:return e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH":return t.text;default:return e}},G=Object(_.b)({filter:W,darkmode:q,search:z}),Q=Object(_.c)(G);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:Q},r.a.createElement(U,null))),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.763ff85a.chunk.js.map