(this["webpackJsonpfavorites-frontend"]=this["webpackJsonpfavorites-frontend"]||[]).push([[0],{27:function(e,t,a){e.exports=a(45)},32:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(23),o=a.n(s),i=(a(32),a(4)),c=a(5),u=a(7),l=a(6),p=a(8),m=a(14),h=a(15),d=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"LiBEERary"))}}]),t}(n.Component),f=a(2),v=a.n(f),b=a(10),g=a(11),E=a.n(g),w=Object(h.g)(function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).makeFavorite=function(){var e=Object(b.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("https://damp-meadow-28672.herokuapp.com/api/my/favorites",{name:t.name,abv:t.abv,ibu:void 0===t.ibu?"N/A":t.ibu,style:t.style.name,image_url:t.labels.icon}).set("Authorization",a.props.user.token);case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.renderButtonOrStar=function(e){return a.props.favorites.find((function(t){return e.name===t.name}))?r.a.createElement("span",null,"\u2b50"):r.a.createElement("button",{onClick:function(t){a.makeFavorite(e),a.props.history.push("/")}},"Favorite")},a.renderImage=function(e){return e.image_url?e.image_url:e.labels?e.labels.icon:"../favorites-frontend/placeholder.jpg"},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("ul",null,this.props.beers.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("div",{className:"item-container"},r.a.createElement("div",{className:"item-name"},r.a.createElement("h3",null,t.name)),r.a.createElement("img",{src:e.renderImage(t),alt:t.name}),r.a.createElement("p",null,r.a.createElement("span",null,"IBU:",void 0===t.ibu?"N/A":t.ibu," | "),r.a.createElement("span",null,"ABV: ",t.abv,"%")),"/favorites"!==e.props.location.pathname&&e.renderButtonOrStar(t)))})))}}]),t}(n.Component)),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={beers:[],favorites:[],input:""},a.componentDidMount=Object(b.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://damp-meadow-28672.herokuapp.com/api/my/favorites").set("Authorization",a.props.user.token);case 2:t=e.sent,a.setState({favorites:t.body});case 4:case"end":return e.stop()}}),e)}))),a.handleInput=function(e){a.setState({input:e.target.value})},a.handleSearch=function(){var e=Object(b.a)(v.a.mark((function e(t){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({loading:!0}),e.next=4,E.a.get("https://damp-meadow-28672.herokuapp.com/api/beers?search=".concat(a.state.input));case 4:n=e.sent,r=n.body.data,a.setState({beers:r,loading:!1}),console.log(r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-component"},r.a.createElement(m.b,{to:"/favorites",className:"link-to"},"My Favorites"),r.a.createElement("div",{className:"search-container"},r.a.createElement("form",{onSubmit:this.handleSearch},r.a.createElement("input",{value:this.state.input,onChange:this.handleInput}),r.a.createElement("button",{disabled:this.state.loading},"Search"))),r.a.createElement("div",{className:"list-container"},this.state.loading?"Loading...":r.a.createElement(w,{beers:this.state.beers,favorites:this.state.favorites,user:this.props.user})))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={beers:[]},a.componentDidMount=Object(b.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://damp-meadow-28672.herokuapp.com/api/my/favorites").set("Authorization",a.props.user.token);case 2:t=e.sent,a.setState({beers:t.body});case 4:case"end":return e.stop()}}),e)}))),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"favorites-container"},r.a.createElement(m.b,{to:"/favorites-frontend",className:"link-to"},"Search"),r.a.createElement("h2",null,"My Favorite Beers"),r.a.createElement(w,{beers:this.state.beers}))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={usernameSignUp:"",passwordSignUp:"",usernameSignIn:"",passwordSignIn:""},a.handleSignUp=function(){var e=Object(b.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,E.a.post("https://damp-meadow-28672.herokuapp.com/api/auth/signup",{email:a.state.usernameSignUp,password:a.state.passwordSignUp});case 3:n=e.sent,a.props.setUser(n),a.props.history.push("/favorites-frontend");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleSignIn=function(){var e=Object(b.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,E.a.post("https://damp-meadow-28672.herokuapp.com/api/auth/signin",{email:a.state.usernameSignIn,password:a.state.passwordSignIn});case 3:n=e.sent,a.props.setUser(n),a.props.history.push("/favorites-frontend");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"signup-and-signin"},r.a.createElement("div",{className:"signup-container"},r.a.createElement("form",{onSubmit:this.handleSignUp},r.a.createElement("input",{placeholder:"Email address",value:this.state.usernameSignUp,onChange:function(t){return e.setState({usernameSignUp:t.target.value})}}),r.a.createElement("input",{placeholder:"Password",value:this.state.passwordSignUp,onChange:function(t){return e.setState({passwordSignUp:t.target.value})}}),r.a.createElement("button",null,"Sign Up"))),r.a.createElement("div",{className:"signin-container"},r.a.createElement("form",{onSubmit:this.handleSignIn},r.a.createElement("input",{placeholder:"Email address",value:this.state.usernameSignIn,onChange:function(t){return e.setState({usernameSignIn:t.target.value})}}),r.a.createElement("input",{placeholder:"Password",value:this.state.passwordSignIn,onChange:function(t){return e.setState({passwordSignIn:t.target.value})}}),r.a.createElement("button",null,"Sign In"))))}}]),t}(n.Component),y=a(26),k=function(e){var t=e.component,a=Object(y.a)(e,["component"]);return r.a.createElement(h.b,Object.assign({},a,{render:function(e){return a.user?r.a.createElement(t,Object.assign({},e,a)):r.a.createElement(h.a,{to:"/signin"})}}))},I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={user:null},a.setUser=function(e){a.setState({user:e.body})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(m.a,null,r.a.createElement(h.d,null,r.a.createElement(k,{exact:!0,path:"/favorites-frontend",component:O,user:this.state.user}),r.a.createElement(k,{exact:!0,path:"/favorites",component:j,user:this.state.user}),r.a.createElement(h.b,{exact:!0,path:"/signin",render:function(t){return r.a.createElement(S,Object.assign({},t,{setUser:e.setUser,user:e.state.user}))}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.4c121751.chunk.js.map