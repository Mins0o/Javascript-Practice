!function(){'use strict';var c=35,d=46,f=0,g=1,h=2,i=function(a){var b=null,e=null,i=null,j=f,k=0;for(var l=0;l<=a.length;l++){var m=a.charCodeAt(l),n=m===c,o=m===d,p=!m;(n||o||p)&&(j===f?(l===0?(b='div'):(b=a.substring(k,l))):j===g?(e=a.substring(k,l)):i?(i+=' '+a.substring(k,l)):(i=a.substring(k,l)),n?(j=g):o&&(j=h),k=l+1)}return{tag:b,id:e,className:i}},j=function(a,b){var c=i(a),d=c.tag,e=c.id,f=c.className,g=b?document.createElementNS(b,d):document.createElement(d);e&&(g.id=e);f&&(b?g.setAttribute('class',f):(g.className=f));return g},k=function(a,b){var c=A(a),d=A(b);b===d&&d.__redom_view&&(b=d.__redom_view);d.parentNode&&(l(b,d,c),c.removeChild(d));return b},l=function(a,b,c){var d=b.__redom_lifecycle;if(m(d)){b.__redom_mounted=!1;return}var e=c;b.__redom_mounted&&r(b,'onunmount');while(e){var f=e.__redom_lifecycle||{};for(var g in d)f[g]&&(f[g]-=d[g]);m(f)&&(e.__redom_lifecycle=null);e=e.parentNode}},m=function(a){if(a==null){return !0}for(var b in a){if(a[b]){return !1}}return !0},n=['onmount','onremount','onunmount'],o=typeof window!=='undefined'&&'ShadowRoot' in window,p=function(a,b,c,d){var e=A(a),f=A(b);b===f&&f.__redom_view&&(b=f.__redom_view);b!==f&&(f.__redom_view=b);var g=f.__redom_mounted,h=f.parentNode;g&&h!==e&&l(b,f,h);c!=null?(d?e.replaceChild(f,A(c)):e.insertBefore(f,A(c))):e.appendChild(f);q(b,f,e,h);return b},q=function(a,b,c,d){var e=b.__redom_lifecycle||(b.__redom_lifecycle={}),f=c===d,g=!1;for(var h=0,i=n;h<i.length;h+=1){var j=i[h];f||(a!==b&&(j in a&&(e[j]=(e[j]||0)+1)));e[j]&&(g=!0)}if(!g){b.__redom_mounted=!0;return}var k=c,l=!1;(f||k&&k.__redom_mounted)&&(r(b,f?'onremount':'onmount'),l=!0);while(k){var m=k.parentNode,p=k.__redom_lifecycle||(k.__redom_lifecycle={});for(var q in e)p[q]=(p[q]||0)+e[q];if(l){break}else (k===document||o&&k instanceof window.ShadowRoot||m&&m.__redom_mounted)&&(r(k,f?'onremount':'onmount'),l=!0),k=m}},r=function(a,b){b==='onmount'||b==='onremount'?(a.__redom_mounted=!0):b==='onunmount'&&(a.__redom_mounted=!1);var c=a.__redom_lifecycle;if(!c){return}var d=a.__redom_view,e=0;d&&d[b]&&d[b]();for(var f in c)f&&e++;if(e){var g=a.firstChild;while(g){var h=g.nextSibling;r(g,b);g=h}}},s=function(a,b,c){var d=A(a);if(c!==undefined)d.style[b]=c;else if(typeof b==='string')d.setAttribute('style',b);else{for(var e in b)s(d,e,b[e])}},t='http://www.w3.org/1999/xlink',u=function(a,b,c){var d=A(a),e=d instanceof SVGElement,f=typeof c==='function';if(c!==undefined){if(b==='style')s(d,c);else if(e&&f)d[b]=c;else if(b==='dataset')w(d,c);else if(!e&&(b in d||f))d[b]=c;else{if(e&&b==='xlink'){v(d,c);return}d.setAttribute(b,c)}}else{for(var g in b)u(d,g,b[g])}};function v(a,b){for(var c in b)a.setAttributeNS(t,c,b[c])}function w(a,b){for(var c in b)a.dataset[c]=b[c]}var x=function(a){return document.createTextNode(a!=null?a:'')},y=function(a,b){for(var c=0,d=b;c<d.length;c+=1){var e=d[c];if(e!==0&&!e){continue}var f=typeof e;f==='function'?e(a):f==='string'||f==='number'?a.appendChild(x(e)):B(A(e))?p(a,e):e.length?y(a,e):f==='object'&&u(a,e)}},z=function(a){return typeof a==='string'?E(a):A(a)},A=function(a){return a.nodeType&&a||!a.el&&a||A(a.el)},B=function(a){return a&&a.nodeType},C={},D=function(a){return C[a]||(C[a]=j(a))},E=function(a){var b=arguments,c=[],d=arguments.length-1;while(d-->0)c[d]=b[d+1];var e,f=typeof a;if(f==='string')e=D(a).cloneNode(!1);else if(B(a))e=a.cloneNode(!1);else if(f==='function'){var g=a;e=new (Function.prototype.bind.apply(g,[null].concat(c)))}else{throw new Error('At least one argument required')};y(A(e),c);return e};E.extend=function(a){var b=arguments,c=[],d=arguments.length-1;while(d-->0)c[d]=b[d+1];var e=D(a);return E.bind.apply(E,[this,e].concat(c))};var F=E,G=function(a){var b=arguments,c=[],d=arguments.length-1;while(d-->0)c[d]=b[d+1];var e=A(a),f=H(a,c,e.firstChild);while(f){var g=f.nextSibling;k(a,f);f=g}};function H(a,b,c){var d=c,e=new Array(b.length);for(var f=0;f<b.length;f++)e[f]=b[f]&&A(b[f]);for(var g=0;g<b.length;g++){var h=b[g];if(!h){continue}var i=e[g];if(i===d){d=d.nextSibling;continue}if(B(i)){var j=d&&d.nextSibling,k=h.__redom_index!=null,l=k&&j===e[g+1];p(a,h,d,l);l&&(d=j);continue}h.length!=null&&(d=H(a,h,d))}return d}var I=function(a){return function(b){return b[a]}},J=function d(a,b,c){this.View=a;this.initData=c;this.oldLookup={};this.lookup={};this.oldViews=[];this.views=[];b!=null&&(this.key=typeof b==='function'?b:I(b))};J.prototype.update=function c(a,b){var d=this,e=d.View,f=d.key,g=d.initData,h=f!=null,i=this.lookup,j={},k=new Array(a.length),l=this.views;for(var m=0;m<a.length;m++){var n=a[m],o=void 0;if(h){var p=f(n);o=i[p]||new e(g,n,m,a);j[p]=o;o.__redom_id=p}else o=l[m]||new e(g,n,m,a);o.update&&o.update(n,m,a,b);var q=A(o.el);q.__redom_view=o;k[m]=o}this.oldViews=l;this.views=k;this.oldLookup=i;this.lookup=j};var K=function e(a,b,c,d){this.__redom_list=!0;this.View=b;this.initData=d;this.views=[];this.pool=new J(b,c,d);this.el=z(a);this.keySet=c!=null};K.prototype.update=function c(a,b){a===void 0&&(a=[]);var d=this,e=d.keySet,f=this.views;this.pool.update(a,b);var g=this.pool,h=g.views,i=g.lookup;if(e){for(var j=0;j<f.length;j++){var l=f[j],m=l.__redom_id;i[m]==null&&(l.__redom_index=null,k(this,l))}}for(var n=0;n<h.length;n++){var o=h[n];o.__redom_index=n}G(this,h);e&&(this.lookup=i);this.views=h};K.extend=function(a,b,c,d){return K.bind(K,a,b,c,d)};var L=function(a,b){var c=a.el||a,d=function(a){var c=a.detail,d=c.type,e=c.data;b[d]&&b[d](e)};c.addEventListener('redom',d);return{destroy:function a(){c.removeEventListener('redom',d)}}},M=function b(a){var c=this;a===void 0&&(a="1 Jan 2022");var d=new Date(a);this.day=F('h1#day',0,{style:'padding: 10px'});this.hour=F('h1#hour',0,{style:'padding: 10px'});this.min=F('h1#min',0,{style:'padding: 10px'});this.sec=F('h1#sec',0,{style:'padding: 10px'});this.headline=F('h1','Happy new year',{style:"display: flex; flex-wrap: wrap; justify-content: center; color: rgb(255, 236, 188)"});this.clock=F('div',F('div',this.day,F('p','days',{style:'text-align: center'})),F('h1',':',{style:'padding: 10px'}),F('div',this.hour,F('p','hours',{style:'text-align: center'})),F('h1',':',{style:'padding: 10px'}),F('div',this.min,F('p','mins',{style:'text-align: center'})),F('h1',':',{style:'padding: 10px'}),F('div',this.sec,F('p','secs',{style:'text-align: center'})),{style:"display: flex; flex-wrap: wrap; justify-content: center; color: rgb(255,229,87)"});this.el=F('div',this.headline,this.clock);var e=function(a){return a<10?"0"+a:a};this.count=function(){var a=new Date(),b=(d-a)/1000;c.day.innerHTML=e(Math.floor(b/3600/24));c.hour.innerHTML=e(Math.floor(b/3600)%24);c.min.innerHTML=e(Math.floor(b/60)%60);c.sec.innerHTML=e(Math.floor(b)%60)}},N=function a(){this.el=F('.app',this.counter=new M());setInterval(this.counter.count,1000)},O=function a(){this.data={}};O.prototype.get=function b(a){if(!a){return this.data}var c=a.split('.'),d=this.data;for(var e=0;e<c.length;e++){var f=c[e];if(f in d)d=d[f];else{return}}return d};O.prototype.set=function c(a,b){var d=a.split('.'),e=this.data=Object.assign({},this.data);for(var f=0;f<d.length;f++){var g=d[f];f===d.length-1?(e[g]=b):(e=e[g]=Object.assign({},e[g]))}};var P=function(a){var b=new O(),c;L(a,{hello:function b(a){d('hello.subject',a)}});var d=function(d,e){b.set(d,e);c||(c=window.requestAnimationFrame(function(){c=!1;a.update(b.get())}))}},Q=new N();P(Q);p(document.body,Q)}()
//# sourceMappingURL=main.js.map
