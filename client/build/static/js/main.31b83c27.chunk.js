/*! For license information please see main.31b83c27.chunk.js.LICENSE.txt */
(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{43:function(e,t,n){e.exports=n.p+"static/media/spinner.ab497855.gif"},69:function(e,t,n){e.exports=n(82)},74:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(59),i=n.n(o),c=(n(74),n(23)),l=n(10),u=n(8),s=n(65),m=n(93),f=n(95),h=n(92),d=n(63),p=n(21),v=n(97);var g,y,E,w,b=function(e){var t=e.image,n=e.name,r=e._id,o=e.price,i=e.quantity;return a.a.createElement("div",{className:"card px-1 py-1"},a.a.createElement(l.b,{to:"/products/".concat(r)},a.a.createElement("img",{alt:n,src:"/images/".concat(t)}),a.a.createElement("p",null,n)),a.a.createElement("div",null,a.a.createElement("div",null,i," ",function(e,t){return 1===t?e:e+"s"}("item",i)," in stock"),a.a.createElement("span",null,"$",o)),a.a.createElement("button",null,"Add to cart"))},x=n(24),O=n(94),j=Object(O.a)(g||(g=Object(x.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),N=(Object(O.a)(y||(y=Object(x.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(O.a)(E||(E=Object(x.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),L=Object(O.a)(w||(w=Object(x.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),k=n(43),_=n.n(k);var S=function(e){var t=e.currentCategory,n=Object(v.a)(j),r=n.loading,o=n.data,i=(null===o||void 0===o?void 0:o.products)||[];return a.a.createElement("div",{className:"my-2"},a.a.createElement("h2",null,"Our Products:"),i.length?a.a.createElement("div",{className:"flex-row"},(t?i.filter((function(e){return e.category._id===t})):i).map((function(e){return a.a.createElement(b,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):a.a.createElement("h3",null,"You haven't added any products yet!"),r?a.a.createElement("img",{src:_.a,alt:"loading"}):null)};var P=function(e){var t=e.setCategory,n=Object(v.a)(N).data,r=(null===n||void 0===n?void 0:n.categories)||[];return a.a.createElement("div",null,a.a.createElement("h2",null,"Choose a Category:"),r.map((function(e){return a.a.createElement("button",{key:e._id,onClick:function(){t(e._id)}},e.name)})))},F=function(){var e=Object(r.useState)(""),t=Object(p.a)(e,2),n=t[0],o=t[1];return a.a.createElement("div",{className:"container"},a.a.createElement(P,{setCategory:o}),a.a.createElement(S,{currentCategory:n}))};var $=function(){var e=Object(u.f)().id,t=Object(r.useState)({}),n=Object(p.a)(t,2),o=n[0],i=n[1],c=Object(v.a)(j),s=c.loading,m=c.data,f=(null===m||void 0===m?void 0:m.products)||[];return Object(r.useEffect)((function(){f.length&&i(f.find((function(t){return t._id===e})))}),[f,e]),a.a.createElement(a.a.Fragment,null,o?a.a.createElement("div",{className:"container my-1"},a.a.createElement(l.b,{to:"/"},"\u2190 Back to Products"),a.a.createElement("h2",null,o.name),a.a.createElement("p",null,o.description),a.a.createElement("p",null,a.a.createElement("strong",null,"Price:"),"$",o.price," ",a.a.createElement("button",null,"Add to Cart"),a.a.createElement("button",null,"Remove from Cart")),a.a.createElement("img",{src:"/images/".concat(o.image),alt:o.name})):null,s?a.a.createElement("img",{src:_.a,alt:"loading"}):null)};var C,T,G,I=function(e){var t=e.children;return a.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)},A=function(){return a.a.createElement("div",null,a.a.createElement(I,null,a.a.createElement("h1",null,"404 Page Not Found"),a.a.createElement("h1",null,a.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},D=n(31),q=n(45),W=n(90),U=Object(O.a)(C||(C=Object(x.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),B=(Object(O.a)(T||(T=Object(x.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),Object(O.a)(G||(G=Object(x.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])))),R=n(61),Y=n(62),H=n(50),J=n.n(H),z=new(function(){function e(){Object(R.a)(this,e)}return Object(Y.a)(e,[{key:"getProfile",value:function(){return J()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return J()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}());function M(){M=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),c=new N(a||[]);return r(i,"_invoke",{value:b(e,n,c)}),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(_){return{type:"throw",arg:_}}}e.wrap=u;var m={};function f(){}function h(){}function d(){}var p={};l(p,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(L([])));g&&g!==t&&n.call(g,o)&&(p=g);var y=d.prototype=f.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t((function(a,i){!function r(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(m).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function b(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return k()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=d,r(y,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:h,configurable:!0}),h.displayName=l(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new w(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(y),l(y,c,"Generator"),l(y,o,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var K=function(e){var t=Object(r.useState)({email:"",password:""}),n=Object(p.a)(t,2),o=n[0],i=n[1],u=Object(W.a)(U),s=Object(p.a)(u,2),m=s[0],f=s[1].error,h=function(){var e=Object(q.a)(M().mark((function e(t){var n,r;return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m({variables:{email:o.email,password:o.password}});case 4:n=e.sent,r=n.data.login.token,z.login(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,n=t.name,r=t.value;i(Object(c.a)(Object(c.a)({},o),{},Object(D.a)({},n,r)))};return a.a.createElement("div",{className:"container my-1"},a.a.createElement(l.b,{to:"/signup"},"\u2190 Go to Signup"),a.a.createElement("h2",null,"Login"),a.a.createElement("form",{onSubmit:h},a.a.createElement("div",{className:"flex-row space-between my-2"},a.a.createElement("label",{htmlFor:"email"},"Email address:"),a.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:d})),a.a.createElement("div",{className:"flex-row space-between my-2"},a.a.createElement("label",{htmlFor:"pwd"},"Password:"),a.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:d})),f?a.a.createElement("div",null,a.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,a.a.createElement("div",{className:"flex-row flex-end"},a.a.createElement("button",{type:"submit"},"Submit"))))};function Q(){Q=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),c=new N(a||[]);return r(i,"_invoke",{value:b(e,n,c)}),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(_){return{type:"throw",arg:_}}}e.wrap=u;var m={};function f(){}function h(){}function d(){}var p={};l(p,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(L([])));g&&g!==t&&n.call(g,o)&&(p=g);var y=d.prototype=f.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t((function(a,i){!function r(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(m).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function b(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return k()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=d,r(y,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:h,configurable:!0}),h.displayName=l(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new w(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(y),l(y,c,"Generator"),l(y,o,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var V=function(e){var t=Object(r.useState)({email:"",password:""}),n=Object(p.a)(t,2),o=n[0],i=n[1],u=Object(W.a)(B),s=Object(p.a)(u,1)[0],m=function(){var e=Object(q.a)(Q().mark((function e(t){var n,r;return Q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s({variables:{email:o.email,password:o.password,firstName:o.firstName,lastName:o.lastName}});case 3:n=e.sent,r=n.data.addUser.token,z.login(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.target,n=t.name,r=t.value;i(Object(c.a)(Object(c.a)({},o),{},Object(D.a)({},n,r)))};return a.a.createElement("div",{className:"container my-1"},a.a.createElement(l.b,{to:"/login"},"\u2190 Go to Login"),a.a.createElement("h2",null,"Signup"),a.a.createElement("form",{onSubmit:m},a.a.createElement("div",{className:"flex-row space-between my-2"},a.a.createElement("label",{htmlFor:"firstName"},"First Name:"),a.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:f})),a.a.createElement("div",{className:"flex-row space-between my-2"},a.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),a.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:f})),a.a.createElement("div",{className:"flex-row space-between my-2"},a.a.createElement("label",{htmlFor:"email"},"Email:"),a.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:f})),a.a.createElement("div",{className:"flex-row space-between my-2"},a.a.createElement("label",{htmlFor:"pwd"},"Password:"),a.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:f})),a.a.createElement("div",{className:"flex-row flex-end"},a.a.createElement("button",{type:"submit"},"Submit"))))};var X=function(){return a.a.createElement("header",{className:"flex-row px-1"},a.a.createElement("h1",null,a.a.createElement(l.b,{to:"/"},a.a.createElement("span",{role:"img","aria-label":"shopping bag"},"\ud83d\udecd\ufe0f"),"-Shop-Shop")),a.a.createElement("nav",null,z.loggedIn()?a.a.createElement("ul",{className:"flex-row"},a.a.createElement("li",{className:"mx-1"},a.a.createElement(l.b,{to:"/orderHistory"},"Order History")),a.a.createElement("li",{className:"mx-1"},a.a.createElement("a",{href:"/",onClick:function(){return z.logout()}},"Logout"))):a.a.createElement("ul",{className:"flex-row"},a.a.createElement("li",{className:"mx-1"},a.a.createElement(l.b,{to:"/signup"},"Signup")),a.a.createElement("li",{className:"mx-1"},a.a.createElement(l.b,{to:"/login"},"Login")))))};var Z=function(){var e,t=Object(v.a)(L).data;return t&&(e=t.user),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"container my-1"},a.a.createElement(l.b,{to:"/"},"\u2190 Back to Products"),e?a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return a.a.createElement("div",{key:e._id,className:"my-2"},a.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),a.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var n=e._id,r=e.image,o=e.name,i=e.price;return a.a.createElement("div",{key:t,className:"card px-1 py-1"},a.a.createElement(l.b,{to:"/products/".concat(n)},a.a.createElement("img",{alt:o,src:"/images/".concat(r)}),a.a.createElement("p",null,o)),a.a.createElement("div",null,a.a.createElement("span",null,"$",i)))}))))}))):null))},ee=Object(s.a)({uri:"/graphql"}),te=Object(d.a)((function(e,t){var n=t.headers,r=localStorage.getItem("id_token");return{headers:Object(c.a)(Object(c.a)({},n),{},{authorization:r?"Bearer ".concat(r):""})}})),ne=new m.a({link:te.concat(ee),cache:new f.a});var re=function(){return a.a.createElement(h.a,{client:ne},a.a.createElement(l.a,null,a.a.createElement("div",null,a.a.createElement(X,null),a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/",component:F}),a.a.createElement(u.a,{exact:!0,path:"/login",component:K}),a.a.createElement(u.a,{exact:!0,path:"/signup",component:V}),a.a.createElement(u.a,{exact:!0,path:"/orderHistory",component:Z}),a.a.createElement(u.a,{exact:!0,path:"/products/:id",component:$}),a.a.createElement(u.a,{component:A})))))},ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(re,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ae?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):oe(t,e)}))}}()}},[[69,1,2]]]);
//# sourceMappingURL=main.31b83c27.chunk.js.map