(this["webpackJsonptask-pokemon"]=this["webpackJsonptask-pokemon"]||[]).push([[0],{31:function(e,t,n){},73:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(52),s=n.n(o),i=(n(31),n(64)),r=n(93),l=n(12),m=n(9),d=n(65),j=n(53),u=n(24),b=n(54),O=(n(73),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAATUlEQVRIie3MOxEAIBAD0RSU+KNEAlIQggyEwTF8DOQaZrLbP0Cdiu3CDJumNrNOPkxHFCNGDM0A9UENgYFEiRJFUpmDLlVZZlMuzFdNO/WPEVqT7vQAAAAASUVORK5CYII="),h=n(0);function v(e){e.img;var t=e.text;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("p",{className:"navbar-text",children:t})})}var f,p,k,x=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=(t[1],Object(a.useState)([])),o=Object(u.a)(c,2),s=o[0],i=o[1],r=Object(m.g)(),f=Object(b.useMediaQuery)({query:"(max-width: 960px)"});return Object(a.useEffect)((function(){return r.listen((function(e){"PUSH"===r.action&&i([e.key]),"POP"===r.action&&(s[1]===e.key?"/my-pokemon-action"===e.pathname?r.replace("/"):i((function(e){var t=Object(j.a)(e);t[0];return t.slice(1)})):"/my-pokemon-action"===e.pathname?r.replace("/"):i((function(t){return[e.key].concat(Object(d.a)(t))})))}))}),[s,r]),Object(a.useEffect)((function(){"/my-pokemon-action"===r.location.pathname&&window.addEventListener("beforeunload",r.replace("/"))}),[r]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("nav",{className:!n&&f?"display-none":"navbar",children:Object(h.jsxs)("div",{className:"navbar-container",children:[Object(h.jsx)(l.b,{className:"navbar-links",to:"/pokemon-details",exact:!0,children:Object(h.jsx)(v,{text:"POKEMON"})}),Object(h.jsxs)("ul",{className:f?"navbar-menu flex-start":"navbar-menu",children:[Object(h.jsx)("li",{className:n&&f?"navbar-item":"display-none",children:Object(h.jsx)("div",{className:"navbar-links back",onClick:function(){r.goBack()},children:Object(h.jsx)(v,{img:O,text:"BACK"})})}),Object(h.jsx)("li",{className:n&&f?"display-none":"navbar-item",children:Object(h.jsx)(l.c,{className:"navbar-links",to:"/",exact:!0,children:Object(h.jsx)(v,{text:"EXPLORE"})})}),Object(h.jsx)("li",{className:n&&f?"display-none":"navbar-item",children:Object(h.jsx)(l.c,{className:"navbar-links",to:"/my-pokemon-list",children:Object(h.jsx)(v,{text:"MY POKEMON LIST"})})})]})]})}),Object(h.jsx)("nav",{className:n||f?"navbar-bottom":"display-none",children:Object(h.jsx)("div",{className:"navbar-container",children:Object(h.jsxs)("ul",{className:"navbar-menu",children:[Object(h.jsx)("li",{className:n&&!f?"display-none":"navbar-item",children:Object(h.jsx)(l.c,{className:"navbar-links",to:"/",exact:!0,children:Object(h.jsx)(v,{text:"EXPLORE"})})}),Object(h.jsx)("li",{className:n&&!f?"display-none":"navbar-item",children:Object(h.jsx)(l.c,{className:"navbar-links",to:"/my-pokemon-list",children:Object(h.jsx)(v,{text:"MY POKEMON LIST"})})})]})})})]})},g=n(21),y=n(22),N=n(26),A=n(25),P=n(94),E=n(45),S=n(30),w=Object(S.a)(f||(f=Object(E.a)(["\n  query pokemons($limit: Int, $offset: Int) {\n    pokemons(limit: $limit, offset: $offset) {\n      results {\n        id\n        name\n        image\n      }\n    }\n  }\n"]))),C=Object(S.a)(p||(p=Object(E.a)(["\n  query pokemon($name: String!) {\n    pokemon(name: $name) {\n      id\n      name\n      sprites {\n        front_default\n      }\n      abilities {\n        ability {\n          name\n        }\n      }\n      moves {\n        move {\n          name\n        }\n      }\n      types {\n        type {\n          name\n        }\n      }\n    }\n  }\n"]))),I=(Object(S.a)(k||(k=Object(E.a)(["\n  query pokemon($name: String!) {\n    pokemon(name: $name) {\n      id @client\n      name @client\n      sprites {\n        front_default @client\n      }\n      abilities {\n        ability {\n          name @client\n        }\n      }\n      moves {\n        move {\n          name @client\n        }\n      }\n      types {\n        type {\n          name @client\n        }\n      }\n    }\n  }\n"]))),n(57)),F=n.n(I).a.open("POKEMONS",1,(function(e){e.createObjectStore("Pokemons",{keyPath:"myPokemonId"}).createIndex("myPokemonId","myPokemonId",{unique:!1})})),R=new(function(){function e(){Object(g.a)(this,e)}return Object(y.a)(e,[{key:"catchPokemon",value:function(e){F.then((function(t){var n=t.transaction("Pokemons","readwrite"),a=n.objectStore("Pokemons");return console.log(e),a.put(e),n.complete})).then((function(){console.log("Pokemon catched.")}))}},{key:"releasePokemon",value:function(e){F.then((function(t){var n=t.transaction("Pokemons","readwrite"),a=n.objectStore("Pokemons");return console.log(e),a.delete(e),n.complete})).then((function(){console.log("Pokemon released.")}))}},{key:"getMyPokemons",value:function(){return new Promise((function(e){F.then((function(e){return e.transaction("Pokemons","readonly").objectStore("Pokemons").getAll()})).then((function(t){e(t),console.log("Got your Pokemons!")}))}))}},{key:"getMyPokemonById",value:function(e){return new Promise((function(t){F.then((function(t){return t.transaction("Pokemons","readonly").objectStore("Pokemons").get(e)})).then((function(e){t(e),console.log("Got the Pokemon!")}))}))}}]),e}()),L=n.p+"static/media/open_pokeball.327609e2.png",M=n.p+"static/media/pokeball.9fc0eeae.png";n(82);var U=function(e){var t=e.text;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"loading-container",children:[Object(h.jsx)("div",{className:"loading-image-container",children:Object(h.jsx)("img",{className:"loading-image",src:M,alt:M})}),t&&Object(h.jsx)("div",{className:"loading-text",children:t})]})})};n(83);function B(e){var t=e.pokemon,n=void 0!==t.myPokemonId;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"card",children:Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsxs)(l.b,{to:{pathname:"/pokemon-details",state:{pokemon:t}},className:"card-link",children:[n&&t.sprites?Object(h.jsx)("img",{src:t.sprites.front_default,className:"card-img",alt:t.name}):Object(h.jsx)("img",{src:t.image,className:"card-img",alt:t.name}),Object(h.jsx)("div",{className:"card-title",children:t.name})]},t.id),n?Object(h.jsxs)(l.b,{to:{pathname:"/my-pokemon-action",state:{pokemon:t,isCatching:!1}},onClick:function(){t.myPokemonId&&R.releasePokemon(t.myPokemonId)},className:"button-container button card-link",children:[Object(h.jsx)("img",{className:"card-button-img",src:L,alt:L}),Object(h.jsx)("div",{className:"card-button-text",children:"RELEASE"})]}):null]})})})}var D=function(e){var t=e.pokemons,n=Object(m.g)(),c=!!n&&"/my-pokemon-list"===n.location.pathname,o=Object(a.useState)(t),s=Object(u.a)(o,2),i=s[0],r=s[1],l=Object(a.useState)(20),d=Object(u.a)(l,2),j=d[0],b=d[1],O=Object(P.a)(w,{variables:{limit:j,offset:0},skip:c}),v=O.loading,f=O.data,p=(f=void 0===f?{}:f).pokemons,k=(p=void 0===p?{}:p).results,x=void 0===k?[]:k,g=O.error;return Object(a.useEffect)((function(){v||c||r(x)}),[v,c,x,i]),g?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(U,{text:"No data found!"})}):(i&&!c&&i.forEach((function(e){var n=0;t.forEach((function(t){e.id===t.id&&n++})),e.count=n})),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"cards-container",children:i&&i.map((function(e){return Object(h.jsx)(B,{pokemon:e},c?e.myPokemonId:e.id)}))}),!c&&Object(h.jsx)("div",{className:"button-container",children:v?Object(h.jsx)(U,{}):Object(h.jsx)("div",{className:"button",onClick:function(){b(j+20)},children:"Load more"})})]}))},Q=function(e){Object(N.a)(n,e);var t=Object(A.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).state={data:[]},a.getPokemons(),a}return Object(y.a)(n,[{key:"getPokemons",value:function(){var e=this;R.getMyPokemons().then((function(t){e.setState({data:t})}))}},{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(D,{pokemons:this.state.data})})}}]),n}(c.a.Component),K=function(e){Object(N.a)(n,e);var t=Object(A.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).state={data:[]},a.getPokemons(),a}return Object(y.a)(n,[{key:"getPokemons",value:function(){var e=this;R.getMyPokemons().then((function(t){e.setState({data:t})}))}},{key:"render",value:function(){return this.state.data.length>0?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(D,{pokemons:this.state.data})}):Object(h.jsx)(U,{text:"You have no Pokemons yet!"})}}]),n}(c.a.Component),T=n(37),W=n(95);n(84);var q=function(e){var t=e?e.pokemon:null,n=!!t&&(!!t.pokemon&&!!t.pokemon.myPokemonId),c=Math.random()<.5,o=Object(a.useState)(t?t.pokemon:null),s=Object(u.a)(o,2),i=s[0],r=s[1];console.log("PokemonData",t);var m=Object(a.useState)(i?i.name:null),d=Object(u.a)(m,2),j=d[0],b=d[1],O=Object(P.a)(C,{variables:{name:j},skip:n}),v=O.loading,f=O.data,p=(f=void 0===f?{}:f).pokemon,k=void 0===p?[]:p,x=O.error,g=Object(a.useState)(!1),y=Object(u.a)(g,2),N=y[0],A=y[1],E=Object(a.useRef)();return Object(a.useEffect)((function(){N&&E.current.focus()}),[N]),Object(a.useEffect)((function(){r((function(e){return Object(T.a)(Object(T.a)({},e),{},{name:j})}))}),[j]),Object(a.useEffect)((function(){v||n||r(k)}),[v]),v?Object(h.jsx)(U,{}):x?Object(h.jsx)(U,{text:"No data found!"}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"details-container",children:[Object(h.jsxs)("div",{className:"details-header",children:[i.sprites?Object(h.jsx)("img",{src:i.sprites.front_default,className:"details-img",alt:"item"}):null,Object(h.jsx)("form",{className:"details-name-container",children:Object(h.jsx)("input",{className:N?"details-name":"details-name center",type:"text",ref:E,value:i.name?i.name:"",onChange:function(e){var t=e.target.value;b(t)},onKeyDown:function(e){13===e.keyCode&&S()},disabled:N?"":"disabled"})}),i.types?Object(h.jsx)("div",{className:"details-types-container",children:Object(h.jsx)("div",{className:"details-values",children:i.types.map((function(e){return Object(h.jsx)("div",{className:"details-value ".concat(e.type.name),children:e.type.name},e.type.name)}))})}):null]}),Object(h.jsxs)("div",{className:"details",children:[i.abilities?Object(h.jsxs)("div",{className:"details-pokemon-container",children:[Object(h.jsx)("div",{className:"details-title",children:"ABILITIES"}),Object(h.jsx)("div",{className:"details-values",children:i.abilities.map((function(e){return Object(h.jsx)("div",{className:"details-value",children:e.ability.name},e.ability.name)}))})]}):null,i.moves?Object(h.jsxs)("div",{className:"details-pokemon-container",children:[Object(h.jsx)("div",{className:"details-title",children:"MOVES"}),Object(h.jsx)("div",{className:"details-values",children:i.moves.map((function(e){return Object(h.jsx)("div",{className:"details-value",children:e.move.name},e.move.name)}))})]}):null]}),n?null:Object(h.jsx)(l.b,{to:{pathname:"/my-pokemon-action",state:{pokemon:i,isCatching:!0,isSuccessful:c}},onClick:function(){if(c){i.myPokemonId=Object(W.a)(),R.catchPokemon(i)}},className:"details-button-container",children:Object(h.jsx)("div",{className:"details-button",children:Object(h.jsx)("img",{src:M,className:"details-button-img",alt:M})})},i.id)]})});function S(){r(Object(T.a)(Object(T.a)({},i),{},{name:i.name})),R.catchPokemon(i),A(!1)}},G=function(e){Object(N.a)(n,e);var t=Object(A.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).state={data:e.location?e.location.state:{}},a}return Object(y.a)(n,[{key:"render",value:function(){if(!this.state.data)return Object(h.jsx)(m.a,{to:"/"});var e=this.state.data;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(q,{pokemon:e})})}}]),n}(c.a.Component),V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAW0lEQVR4Ae3OgQWAIRBA4R8/QgO0ZaM0SGM0ROPUReAIkDt5jwfA970e5b0bzNhnRxh7VJC7wpijEihQoO4EChSoKLcDqIABswIDBgwYg365esFolD1GoxSGaAKRQaqRlGw8/QAAAABJRU5ErkJggg==";n(85);var $=function(e){var t=e.pokemon,n=e.isCatching,a=e.isSuccessful;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"action-pokemon-container",children:[Object(h.jsx)("div",{className:"action-pokemon-title",children:n&&a?"SUCCESSFUL!":n?"FAILED!":"RELEASED!"}),Object(h.jsx)("div",{className:"action-pokemon-subtitle",children:n&&a?"let's catch it again..":n?"a little more come on..":"Goodbye friend!"}),Object(h.jsx)("div",{className:"action-pokemon-button-container",children:n&&a?Object(h.jsx)(l.b,{className:"action-pokemon-button",to:{pathname:"/pokemon-details",state:{pokemon:t}},children:Object(h.jsx)("img",{src:V,alt:V})}):Object(h.jsx)(l.b,{className:"action-pokemon-button",to:{pathname:"/"},children:Object(h.jsx)("img",{src:O,alt:O})})})]})})},J=function(e){Object(N.a)(n,e);var t=Object(A.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).state={data:e.location?e.location.state:null},a}return Object(y.a)(n,[{key:"render",value:function(){if(void 0===this.state.data)return Object(h.jsx)(m.a,{to:"/"});var e=this.state.data?this.state.data.pokemon:null,t=this.state.data?this.state.data.isCatching:null,n=this.state.data?this.state.data.isSuccessful:null;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)($,{pokemon:e,isCatching:t,isSuccessful:n})})}}]),n}(c.a.Component);var Y=function(){var e=new i.a({uri:"https://graphql-pokeapi.vercel.app/api/graphql"});return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(r.a,{client:e,children:Object(h.jsxs)(l.a,{basename:"",children:[Object(h.jsx)(x,{}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(m.d,{children:[Object(h.jsx)(m.b,{path:"/",exact:!0,component:Q}),Object(h.jsx)(m.b,{path:"/my-pokemon-list",exact:!0,component:K}),Object(h.jsx)(m.b,{path:"/pokemon-details",exact:!0,component:G}),Object(h.jsx)(m.b,{path:"/my-pokemon-action",exact:!0,component:J})]})})]})})})},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(h.jsx)(Y,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");_?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Z(t,e)}))}}(),z()}},[[88,1,2]]]);
//# sourceMappingURL=main.637e2815.chunk.js.map