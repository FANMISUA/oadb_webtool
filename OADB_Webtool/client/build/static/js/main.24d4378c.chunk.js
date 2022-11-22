(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){e.exports={message:"homepage_message__3kL8h",h2:"homepage_h2__1J8g7",img:"homepage_img__YlocD"}},123:function(e,t,a){e.exports={message:"predictpage_message__1ZqvP",h2:"predictpage_h2__-lgKK",img:"predictpage_img__1PW12"}},138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(146),c=a.n(o),i=(a(165),a(167),a(82)),l=a(10),s=a(122),u=a.n(s);var m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:u.a.h2},"Opioid Agonist/Antagonist Knowledgebase"),r.a.createElement("img",{src:a(171),alt:"home",className:u.a.img}),r.a.createElement("div",{className:u.a.message},"\n            Opioid agonist/antagonist knowledgebase (OAK) is developed to help review and development of \n            analgesic products for pain management and opioid use disorder treatment. \n            The OAK database mainly contains experimental data on opioid agonist/antagonist activity curated from multiple public \n            databases such as PubChem, ChEMBL, and BindingDB.\n            "))},d=a(123),f=a.n(d);var p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:f.a.h2},"Opioid Prediction Model"),r.a.createElement("img",{src:a(173),alt:"model",className:f.a.img}),r.a.createElement("div",{className:f.a.message},"\n             The prediction model is designed to determine the agonist/antagonist properties for each opioid receptor: agonist, partial agonist and antagonist. The model will be generated based on descriptors from both structure-based and ligand-based methods.\n             The prediction model defines a mathematical transformation between the independent variables (chemical structure descriptors) and the dependent variable (biological endpoint). Qualitative models are trained to predict the dependent variable on a categorical scale such as biologically active or inactive. A quantitative model transforms the values of independent variables used in the model to a value on a continuous scale of the bioactivity. \n\n            "))};var h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Help Information"))},g=a(255),y=a(256),v=a(62),b=a(44),E=a(30),x=a(153),w=a(254),j=a(95),S=a(139),k=a(136),O=a(40),C=a(135),_=a(86),L=(a(249),a(151)),I=a.n(L);function N(){N=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(O){i=function(e,t,a){return e[t]=a}}function l(e,t,a,n){var r=t&&t.prototype instanceof m?t:m,o=Object.create(r.prototype),c=new j(n||[]);return o._invoke=function(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return k()}for(a.method=r,a.arg=o;;){var c=a.delegate;if(c){var i=E(c,a);if(i){if(i===u)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var l=s(e,t,a);if("normal"===l.type){if(n=a.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(n="completed",a.method="throw",a.arg=l.arg)}}}(e,a,c),o}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(O){return{type:"throw",arg:O}}}e.wrap=l;var u={};function m(){}function d(){}function f(){}var p={};i(p,r,function(){return this});var h=Object.getPrototypeOf,g=h&&h(h(S([])));g&&g!==t&&a.call(g,r)&&(p=g);var y=f.prototype=m.prototype=Object.create(p);function v(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var n;this._invoke=function(r,o){function c(){return new t(function(n,c){!function n(r,o,c,i){var l=s(e[r],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,c,i)},function(e){n("throw",e,c,i)}):t.resolve(m).then(function(e){u.value=e,c(u)},function(e){return n("throw",e,c,i)})}i(l.arg)}(r,o,n,c)})}return n=n?n.then(c,c):c()}}function E(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function S(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=f,i(y,"constructor",f),i(f,"constructor",d),d.displayName=i(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,i(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},v(b.prototype),i(b.prototype,o,function(){return this}),e.AsyncIterator=b,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var c=new b(l(t,a,n,r),o);return e.isGeneratorFunction(a)?c:c.next().then(function(e){return e.done?e.value:c.next()})},v(y),i(y,c,"Generator"),i(y,r,function(){return this}),i(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=S,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return c.type="throw",c.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),w(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;w(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:S(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var A=function(){var e=Object(n.useState)(0),t=Object(E.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!0),i=Object(E.a)(c,2),l=i[0],s=i[1],u=Object(n.useState)(!1),m=Object(E.a)(u,2),d=m[0],f=m[1],p=Object(n.useState)(!1),h=Object(E.a)(p,2),L=h[0],A=h[1],T=Object(n.useState)(0),F=Object(E.a)(T,2),P=F[0],K=F[1],D=Object(n.useState)([]),G=Object(E.a)(D,2),B=G[0],R=G[1],q=Object(n.useState)(!1),z=Object(E.a)(q,2),M=z[0],U=z[1],W=Object(n.useState)(1),H=Object(E.a)(W,2),J=H[0],Y=H[1],V=Object(n.useState)(10),Q=Object(E.a)(V,2),Z=Q[0],X=Q[1],$=Object(n.useState)(""),ee=Object(E.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(""),re=Object(E.a)(ne,2),oe=re[0],ce=re[1],ie=Object(n.useRef)(null),le=function(e,t,a){t(),ae(e[0]),ce(a)},se=function(e){return{filterDropdown:function(t){var a=t.setSelectedKeys,n=t.selectedKeys,o=t.confirm,c=t.clearFilters;return r.a.createElement("div",{style:{padding:8}},r.a.createElement(k.a,{ref:ie,placeholder:"Search ".concat(e),value:n[0],onChange:function(e){return a(e.target.value?[e.target.value]:[])},onPressEnter:function(){return le(n,o,e)},style:{marginBottom:8,display:"block"}}),r.a.createElement(w.b,null,r.a.createElement(O.a,{type:"primary",onClick:function(){return le(n,o,e)},icon:r.a.createElement(_.a,null),size:"small",style:{width:90}},"Search"),r.a.createElement(O.a,{onClick:function(){return c&&function(e){e(),ae("")}(c)},size:"small",style:{width:90}},"Reset"),r.a.createElement(O.a,{type:"link",size:"small",onClick:function(){o({closeDropdown:!1}),ae(n[0]),ce(e)}},"Filter")))},filterIcon:function(e){return r.a.createElement(_.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(t,a){return a[e].toString().toLowerCase().includes(t.toLowerCase())||""},render:function(t){return oe===e?r.a.createElement(I.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[te],autoEscape:!0,textToHighlight:t?t.toString():""}):t}}},ue=[{title:"Structure",dataIndex:"structure",key:"structure",render:function(e,t){return r.a.createElement("div",null,r.a.createElement("img",{src:t.dynamicimage,alt:"structure",placeholder:{imgvisible:M,onVisibleChange:function(e){U(e)}}}))}},Object(b.a)({title:"ID",dataIndex:"oadb_chemicalid",key:"oadb_chemicalid"},se("oadb_chemicalid"),{sorter:function(e,t){return e=e.cid||"",t=t.cid||"",e.localeCompare(t)}}),Object(b.a)({title:"ChemicalName",dataIndex:"cmpdname",key:"name"},se("cmpdname"),{sorter:function(e,t){return e=e.cmpdname||"",t=t.cmpdname||"",e.localeCompare(t)}}),{title:"AlogP",dataIndex:"alogp",key:"alogp",sorter:function(e,t){return e=e.alogp||"",t=t.alogp||"",e.localeCompare(t)}},{title:"Weight",dataIndex:"molecularweight",key:"molecularweight",sorter:function(e,t){return e=e.molecularweight||"",t=t.molecularweight||"",e.localeCompare(t)}},{title:"CASNO",dataIndex:"casno",key:"casno",sorter:function(e,t){return e=e.casno||"",t=t.casno||"",e.localeCompare(t)}},Object(b.a)({title:"SMILES",dataIndex:"smiles",key:"smiles"},se("smiles"),{sorter:function(e,t){return e=e.smiles||"",t=t.smiles||"",e.localeCompare(t)}}),Object(b.a)({title:"Activity",dataIndex:"activity",key:"activity"},se("activity"),{sorter:function(e,t){return e=e.activity||"",t=t.activity||"",e.localeCompare(t)}}),{title:"Endpoint",dataIndex:"endpoint",key:"endpoint",sorter:function(e,t){return e=e.endpoint||"",t=t.endpoint||"",e.localeCompare(t)}},{title:"Relation",dataIndex:"relation",key:"relation"},{title:"Value",dataIndex:"value",key:"value",sorter:function(e,t){return e&&e.value&&t&&t.value?e.value-t.value:e&&e.value?-1:t&&t.value?1:0}},{title:"standardunits",dataIndex:"standardunits",key:"standardunits"},Object(b.a)({title:"Receptor",dataIndex:"receptor",key:"receptor"},se("receptor"),{sorter:function(e,t){return e=e.receptor||"",t=t.receptor||"",e.receptor>t.receptor}}),Object(b.a)({title:"AssayType",dataIndex:"aidtype",key:"aidtype"},se("aidtype"),{sorter:function(e,t){return e=e.aidtype||"",t=t.aidtype||"",e.localeCompare(t)}}),Object(b.a)({title:"AssayName",dataIndex:"aidname",key:"aidname"},se("aidname"),{sorter:function(e,t){return e=e.aidtype||"",t=t.aidtype||"",e.localeCompare(t)}}),Object(b.a)({title:"AssaySource",dataIndex:"aidsrcname",key:"aidsrcname"},se("aidsrcname"),{sorter:function(e,t){return e=e.aidsrcname||"",t=t.aidsrcname||"",e.localeCompare(t)}}),Object(b.a)({title:"TargetName",dataIndex:"targetnamepubchem",key:"targetnamepubchem"},se("targetnamepubchem"),{sorter:function(e,t){return e=e.targetnamepubchem||"",t=t.targetnamepubchem||"",e.localeCompare(t)}}),{title:"TargetUrl",dataIndex:"targetUrl",key:"targeturl",sorter:function(e,t){return e=e.targetUrl||"",t=t.targetUrl||"",e.localeCompare(t)}},{title:"Journal",dataIndex:"documentjournal",key:"documentjournal",sorter:function(e,t){return e=e.documentjournal||"",t=t.documentjournal||"",e.localeCompare(t)}},{title:"Year",dataIndex:"documentyear",key:"documentyear",sorter:function(e,t){return e=e.documentyear||"",t=t.documentyear||"",e.localeCompare(t)}}],me=function(e){S.b.info({content:e,className:"custom-class",style:{marginTop:"15vh"}})},de=function(e){console.log("radio checked",e.target.value),o(e.target.value),K(e.target.value)},fe=x.a.Option,pe=k.a.Search,he=function(){var e=Object(v.a)(N().mark(function e(t,a){var n,r,o;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),console.log("loading new from ...",t,a,B),n=document.getElementById("Ketcher2.5"),r=null,r=n.contentWindow.ketcher,e.next=7,r.getSmiles();case 7:o=e.sent,console.log("querying...",o,t.pageSize),ge(B,"loading",t,a);case 10:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),ge=function(){var e=Object(v.a)(N().mark(function e(t,a,n,r){var o;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:A(!0),f(!1),console.log("load image...",a,n,r),console.log(a),o=document.getElementById("structureimg"),console.log("loading pagination info...",n,r),window.initRDKitModule().then(function(e){for(var c in console.log("RDKit version: "+e.version()),window.RDKit=e,t){var i=e.get_mol(t[c].smiles);if("cnamesearch"===a)c>=(n-1)*r&&c<=n*r&&(i=e.get_mol(t[c].smiles)).draw_to_canvas(o,-1,-1);else if(c>=(n-1)*r&&c<=n*r){var l=e.get_qmol(a),s=i.get_substruct_match(l);i.draw_to_canvas_with_highlights(o,s)}t[c].dynamicimage=o.toDataURL()}A(!1),t[0]&&f(!0)}).catch(function(e){console.log(e)});case 7:case"end":return e.stop()}},e)}));return function(t,a,n,r){return e.apply(this,arguments)}}(),ye=function(){var e=Object(v.a)(N().mark(function e(){var t,a,n;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("Ketcher2.5"),a=null,a=t.contentWindow.ketcher,e.next=5,a.getSmiles();case 5:n=e.sent,ve(n),console.log(n);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),ve=function(){var e=Object(v.a)(N().mark(function e(t){var a,n;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),console.log(t),R([]),e.next=5,fetch("http://localhost:5000/structurequery/".concat(t));case 5:return a=e.sent,e.next=8,a.json();case 8:n=e.sent,console.log(n),ge(n,t,J,Z),R(n),A(!1);case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(v.a)(N().mark(function e(t){var a,n;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),console.log(t),R([]),e.next=5,fetch("http://localhost:5000/casnoquery/".concat(t));case 5:return a=e.sent,e.next=8,a.json();case 8:n=e.sent,console.log(n),ge(n,t,J,Z),R(n),A(!1);case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(v.a)(N().mark(function e(t){var a,n;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),console.log(t),R([]),e.next=5,fetch("http://localhost:5000/assaynamequery/".concat(t));case 5:return a=e.sent,e.next=8,a.json();case 8:n=e.sent,console.log(n),ge(n,t,J,Z),R(n),A(!1);case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),xe=function(){var e=Object(v.a)(N().mark(function e(t){var a,n,r,o;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),console.log(t),R([]),a=t.split(" ")[0],n=t.split(" ")[1],e.next=7,fetch("http://localhost:5000/activitydataquery?minvalue=".concat(a,"&maxvalue=").concat(n));case 7:return r=e.sent,e.next=10,r.json();case 10:o=e.sent,console.log(o),ge(o,t,J,Z),R(o),A(!1);case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),we=function(){var e=Object(v.a)(N().mark(function e(t){var a,n;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),f(!1),console.log(t),R([]),e.next=6,fetch("http://localhost:5000/mastertableinfo/".concat(t));case 6:return a=e.sent,e.next=9,a.json();case 9:n=e.sent,R(n),console.log(n),ge(n,"cnamesearch",J,Z),A(!1);case 14:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"left"},r.a.createElement(g.a,{type:"flex",justify:"left"},r.a.createElement(y.a,{span:12,offset:0},"1. Search Type:"),r.a.createElement(y.a,{span:12,offset:0},r.a.createElement(x.a,{defaultValue:"Structure Search",style:{width:200},onChange:function(e){console.log("selected ".concat(e)),"StructureSearch"===e&&s(!0),"TextSearch"===e&&s(!1)}},r.a.createElement(fe,{value:"StructureSearch"},"Structure Search"),r.a.createElement(fe,{value:"TextSearch"},"Text Search")))),r.a.createElement(g.a,{type:"flex",justify:"left"},r.a.createElement(y.a,{span:12,offset:0},"2. Chemical:"),r.a.createElement(y.a,{span:12,offset:0},r.a.createElement(j.a.Group,{onChange:de,value:a},r.a.createElement(w.b,{direction:"vertical"},r.a.createElement(j.a,{value:1,defaultChecked:!1,disabled:l},"Chemical Name Search"),r.a.createElement(j.a,{value:2,defaultChecked:!1,disabled:l},"Smiles Search"),r.a.createElement(j.a,{value:3,defaultChecked:!1,disabled:l},"CasNo Search"))))),r.a.createElement(g.a,{type:"flex",justify:"left"},r.a.createElement(y.a,{span:12,offset:0},"3. Assay:"),r.a.createElement(y.a,{span:12,offset:0},r.a.createElement(j.a.Group,{onChange:de,value:a},r.a.createElement(w.b,{direction:"vertical"},r.a.createElement(j.a,{value:4,defaultChecked:!1,disabled:l},"Assay Name Search"))))),r.a.createElement(g.a,{type:"flex",justify:"left"},r.a.createElement(y.a,{span:12,offset:0},"4. Activity:"),r.a.createElement(y.a,{span:12,offset:0},r.a.createElement(j.a.Group,{onChange:de,value:a},r.a.createElement(w.b,{direction:"vertical"},r.a.createElement(j.a,{value:5,defaultChecked:!1,disabled:l},"Activity Data Search"))))),r.a.createElement(g.a,{type:"flex",justify:"left"},r.a.createElement(y.a,{span:12,offset:0},"Text Search Input:")),r.a.createElement(g.a,{type:"flex",justify:"left"},r.a.createElement(y.a,{span:12,offset:0},r.a.createElement(pe,{style:{width:"400px"},placeholder:"input search text",allowClear:!0,enterButton:"Text Search",size:"default",onSearch:function(e){console.log(e,P),0===P&&me("select search option before Text Search"),1===P?(console.log("search by chemical name..."),e?(f(!0),we(e)):(R([]),me("Search by chemical name. For example:aspirin"))):2===P?(console.log("search by smile..."),e?(f(!0),ve(e)):(R([]),me("Search by chemical smile code. For example:CC(O)CC(C)O"))):3===P?(console.log("search by casno..."),e?(f(!0),be(e)):(R([]),me("Search by chemical CasNo. For example: 41451-81-4"))):4===P?(console.log("search by Assay name..."),e?(f(!0),Ee(e)):(R([]),me("Search by Assay Name. For example: kappa opioid receptor"))):5===P?(console.log("search by Activity value..."),e?(f(!0),xe(e)):(R([]),me("Search by activity value. For example: 10 15"))):console.log("not find select option")},disabled:l}))),r.a.createElement(g.a,{type:"flex",justify:"left"},r.a.createElement(y.a,{span:12,offset:0},"Structure Search:")),r.a.createElement(g.a,{type:"flex",justify:"left"},r.a.createElement(y.a,{span:8,offset:4},r.a.createElement(O.a,{type:"primary",disabled:!l,icon:r.a.createElement(_.a,null),onClick:function(){ye(),console.log("search structure")}},"Structure Search")))),r.a.createElement("div",{id:"right"},r.a.createElement(g.a,{type:"flex",justify:"left"},r.a.createElement(y.a,{span:8,offset:0},r.a.createElement("iframe",{id:"Ketcher2.5",title:"ketcher2.5",src:"ketcher/index.html",width:"800",height:"600"})))),r.a.createElement("div",{id:"bottom"},r.a.createElement(g.a,{type:"flex",justify:"left"},r.a.createElement(y.a,{span:24,offset:0},d?r.a.createElement(C.a,{dataSource:B,columns:ue,rowkey:B.oadb_chemicalID,exportableProps:{showColumnPicker:!0},pagination:{current:J,pageSize:Z,onChange:function(e,t){Y(e),X(t),he(e,t)}}}):null,L?r.a.createElement("canvas",{id:"structureimg"}):null))))};var T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{type:"flex",justify:"center"},r.a.createElement(y.a,{xl:{span:18,offset:3}},r.a.createElement(A,null))))};var F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{styles:{flex:1}},r.a.createElement(T,null)))};var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement("div",{className:"mainStack"},r.a.createElement("nav",null,r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/searchpage"},"Search"),r.a.createElement(i.b,{to:"/predictpage"},"Predict"),r.a.createElement(i.b,{to:"/help"},"Help")),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",element:r.a.createElement(m,null)}),r.a.createElement(l.a,{path:"/searchpage",element:r.a.createElement(F,null)}),r.a.createElement(l.a,{path:"/predictpage",element:r.a.createElement(p,null)}),r.a.createElement(l.a,{path:"/help",element:r.a.createElement(h,null)})))))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)))},158:function(e,t,a){e.exports=a(138)},165:function(e,t,a){},167:function(e,t,a){},171:function(e,t,a){e.exports=a.p+"static/media/home.5cadeda2.png"},173:function(e,t,a){e.exports=a.p+"static/media/model.340b1347.png"},249:function(e,t,a){}},[[158,2,1]]]);
//# sourceMappingURL=main.24d4378c.chunk.js.map