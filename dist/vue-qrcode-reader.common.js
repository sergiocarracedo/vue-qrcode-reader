module.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=42)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(36)("wks"),o=n(40),i=n(0).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(0),o=n(2),i=n(12),c=n(6),u=function(t,e,n){var a,s,f,l=t&u.F,h=t&u.G,p=t&u.S,d=t&u.P,v=t&u.B,y=t&u.W,m=h?o:o[e]||(o[e]={}),g=m.prototype,x=h?r:p?r[e]:(r[e]||{}).prototype;h&&(n=e);for(a in n)(s=!l&&x&&void 0!==x[a])&&a in m||(f=s?x[a]:n[a],m[a]=h&&"function"!=typeof x[a]?n[a]:v&&s?i(f,r):y&&x[a]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):d&&"function"==typeof f?i(Function.call,f):f,d&&((m.virtual||(m.virtual={}))[a]=f,t&u.R&&g&&!g[a]&&c(g,a,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e,n){t.exports=!n(13)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(9),o=n(35);t.exports=n(5)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,e,n){var r=n(3),o=n(60),i=n(81),c=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(10);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(7),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){"use strict";function r(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=o(e),this.reject=o(n)}var o=n(10);t.exports.f=function(t){return new r(t)}},function(t,e,n){var r=n(73),o=n(28);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(9).f,o=n(14),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(36)("keys"),o=n(40);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(30),o=n(15);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(15);t.exports=function(t){return Object(r(t))}},function(t,e,n){t.exports={default:n(55),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(24),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,n){function r(i,c){try{var u=e[i](c),a=u.value}catch(t){return void n(t)}if(!u.done)return o.default.resolve(a).then(function(t){r("next",t)},function(t){r("throw",t)});t(a)}return r("next")})}}},function(t,e,n){t.exports=n(94)},function(t,e,n){var r=n(11),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=c(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(11);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){"use strict";var r=n(32),o=n(4),i=n(77),c=n(6),u=n(14),a=n(8),s=n(64),f=n(19),l=n(72),h=n(1)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,v,y,m,g){s(n,e,v);var x,w,_,b=function(t){if(!p&&t in E)return E[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},j=e+" Iterator",O="values"==y,L=!1,E=t.prototype,P=E[h]||E["@@iterator"]||y&&E[y],S=P||b(y),k=y?O?b("entries"):S:void 0,T="Array"==e?E.entries||P:P;if(T&&(_=l(T.call(new t)))!==Object.prototype&&_.next&&(f(_,j,!0),r||u(_,h)||c(_,h,d)),O&&P&&"values"!==P.name&&(L=!0,S=function(){return P.call(this)}),r&&!g||!p&&!L&&E[h]||c(E,h,S),a[e]=S,a[j]=d,y)if(x={values:O?S:b("values"),keys:m?S:b("keys"),entries:k},g)for(w in x)w in E||i(E,w,x[w]);else o(o.P+o.F*(p||L),e,x);return x}},function(t,e){t.exports=!0},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(3),o=n(7),i=n(17);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var r=n(3),o=n(10),i=n(1)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||void 0==(n=r(c)[i])?e:o(n)}},function(t,e,n){var r,o,i,c=n(12),u=n(61),a=n(29),s=n(16),f=n(0),l=f.process,h=f.setImmediate,p=f.clearImmediate,d=f.MessageChannel,v=f.Dispatch,y=0,m={},g=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},x=function(t){g.call(t.data)};h&&p||(h=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return m[++y]=function(){u("function"==typeof t?t:Function(t),e)},r(y),y},p=function(t){delete m[t]},"process"==n(11)(l)?r=function(t){l.nextTick(c(g,t,1))}:v&&v.now?r=function(t){v.now(c(g,t,1))}:d?(o=new d,i=o.port2,o.port1.onmessage=x,r=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",x,!1)):r="onreadystatechange"in s("script")?function(t){a.appendChild(s("script")).onreadystatechange=function(){a.removeChild(this),g.call(t)}}:function(t){setTimeout(c(g,t,1),0)}),t.exports={set:h,clear:p}},function(t,e,n){var r=n(21),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){n(93);var r=n(96)(n(45),n(97),null,null);t.exports=r.exports},function(t,e,n){"use strict";function r(t){t.component("qrcode-reader",i.a)}Object.defineProperty(e,"__esModule",{value:!0}),e.install=r;var o=n(41),i=n.n(o);n.d(e,"QrcodeReader",function(){return i.a});var c={version:"0.8.5",install:r};e.default=c;var u=null;"undefined"!=typeof window?u=window.Vue:"undefined"!=typeof global&&(u=global.Vue),u&&u.use(c)},function(t,e,n){"use strict";var r=n(26),o=n.n(r),i=n(24),c=n.n(i),u=n(25),a=n.n(u),s=n(49),f=n.n(s),l=n(50),h=n.n(l),p=function(){function t(e,n){f()(this,t);var r=document.createElement("canvas");r.width=e.videoWidth,r.height=e.videoHeight,this.canvasCtx=r.getContext("2d"),this.videoEl=e,this.stream=n}return h()(t,[{key:"stop",value:function(){this.stream.getTracks().forEach(function(t){return t.stop()})}},{key:"captureFrame",value:function(){return this.canvasCtx.drawImage(this.videoEl,0,0,this.resolutionWidth,this.resolutionHeight),this.canvasCtx.getImageData(0,0,this.resolutionWidth,this.resolutionHeight)}},{key:"resolutionWidth",get:function(){return this.videoEl.videoWidth}},{key:"resolutionHeight",get:function(){return this.videoEl.videoHeight}},{key:"displayWidth",get:function(){return this.videoEl.offsetWidth}},{key:"displayHeight",get:function(){return this.videoEl.offsetHeight}}]),t}();e.a=function(){var t=a()(o.a.mark(function t(e,n){var r,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){t.next=2;break}throw new Error("WebRTC API not supported in this browser");case 2:return t.next=4,navigator.mediaDevices.getUserMedia(e);case 4:return r=t.sent,i=new c.a(function(t,e){n.addEventListener("loadeddata",t,{once:!0}),n.addEventListener("error",e,{once:!0})}),void 0!==n.srcObject?n.srcObject=r:void 0!==n.mozSrcObject?n.mozSrcObject=r:window.URL.createObjectURL?n.src=window.URL.createObjectURL(r):window.webkitURL?n.src=window.webkitURL.createObjectURL(r):n.src=r,n.playsInline=!0,n.play(),t.next=11,i;case 11:return t.abrupt("return",new p(n,r));case 12:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},function(t,e,n){"use strict";function r(t){var e=t.data,n=t.width,r=t.height,o=u()(e,n,r),i=void 0,c=void 0;return null===o?(i=null,c=null):(i=o.data,c=o.location),{content:i,location:c}}function o(t,e){var n=e.decodeHandler,o=e.locateHandler,i=e.shouldContinue,c=e.minDelay,u=null,a=null,s=performance.now();!function e(){if(i()){window.requestAnimationFrame(e);var f=performance.now();if(f-s>=c){s=f;var l=t.captureFrame(),h=r(l),p=h.content,d=h.location;null!==p&&p!==u&&n(p),d!==a&&o(d),u=p||u,a=d}}}()}e.a=o;var i=n(100),c=(n.n(i),n(98)),u=n.n(c)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(48),o=n.n(r),i=n(26),c=n.n(i),u=n(25),a=n.n(u),s=n(51),f=n.n(s),l=n(44),h=n(43),p=n(99),d=n.n(p);e.default={props:{paused:{type:Boolean,default:!1},videoConstraints:{type:[Object,Boolean],default:function(){return{}}},track:{type:[Function,Boolean],default:!0}},data:function(){return{camera:null,destroyed:!1,readyAfterPause:!0}},computed:{shouldScan:function(){return!1===this.paused&&null!==this.camera&&!1===this.destroyed&&this.readyAfterPause},scanInterval:function(){return!1===this.track?500:40},constraints:function(){var t=void 0;return t=d()(this.videoConstraints)?this.videoConstraints:f()({facingMode:{ideal:"environment"},width:{min:360,ideal:640,max:1920},height:{min:240,ideal:480,max:1080}},this.videoConstraints),{audio:!1,video:t}},trackRepaintFunction:function(){return!0===this.track?function(t,e){if(null!==t){var n=t.topLeftCorner,r=t.topRightCorner,o=t.bottomLeftCorner,i=t.bottomRightCorner;e.strokeStyle="red",e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(o.x,o.y),e.lineTo(i.x,i.y),e.lineTo(r.x,r.y),e.lineTo(n.x,n.y),e.closePath(),e.stroke()}}:!1===this.track?null:this.track}},watch:{shouldScan:function(t){t&&this.startScanning()},paused:function(t){var e=this,n=this.$refs.video;t?(n.pause(),this.readyAfterPause=!1):(n.play(),n.addEventListener("timeupdate",function(){e.readyAfterPause=!0},{once:!0}))},constraints:{deep:!0,handler:function(){this.$emit("init",this.init())}}},mounted:function(){this.$emit("init",this.init())},beforeDestroy:function(){null!==this.camera&&this.camera.stop(),this.destroyed=!0},methods:{init:function(){var t=this;return a()(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return null!==t.camera&&t.camera.stop(),e.next=3,n.i(h.a)(t.constraints,t.$refs.video);case 3:t.camera=e.sent;case 4:case"end":return e.stop()}},e,t)}))()},startScanning:function(){var t=this;l.a(this.camera,{decodeHandler:this.onDecode,locateHandler:this.onLocate,shouldContinue:function(){return t.shouldScan},minDelay:this.scanInterval})},onDecode:function(t){this.$emit("decode",t)},onLocate:function(t){null!==this.trackRepaintFunction&&this.repaintTrack(t)},normalizeLocation:function(t){if(null===t)return null;var e=this.camera.displayWidth/this.camera.resolutionWidth,n=this.camera.displayHeight/this.camera.resolutionHeight;return o()(t).forEach(function(r){var o=t[r],i=o.x,c=o.y;t[r].x=Math.floor(i*e),t[r].y=Math.floor(c*n)}),t},repaintTrack:function(t){var e=this;t=this.normalizeLocation(t);var n=this.$refs.trackingLayer,r=n.getContext("2d");n.width=this.camera.displayWidth,n.height=this.camera.displayHeight,window.requestAnimationFrame(function(){return e.trackRepaintFunction(t,r)})}}}},function(t,e,n){t.exports={default:n(52),__esModule:!0}},function(t,e,n){t.exports={default:n(53),__esModule:!0}},function(t,e,n){t.exports={default:n(54),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(47),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";e.__esModule=!0;var r=n(46),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){n(84),t.exports=n(2).Object.assign},function(t,e,n){n(85);var r=n(2).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){n(86),t.exports=n(2).Object.keys},function(t,e,n){n(87),n(89),n(92),n(88),n(90),n(91),t.exports=n(2).Promise},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(22),o=n(39),i=n(80);t.exports=function(t){return function(e,n,c){var u,a=r(e),s=o(a.length),f=i(c,s);if(t&&n!=n){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(12),o=n(63),i=n(62),c=n(3),u=n(39),a=n(82),s={},f={},e=t.exports=function(t,e,n,l,h){var p,d,v,y,m=h?function(){return t}:a(t),g=r(n,l,e?2:1),x=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(p=u(t.length);p>x;x++)if((y=e?g(c(d=t[x])[0],d[1]):g(t[x]))===s||y===f)return y}else for(v=m.call(t);!(d=v.next()).done;)if((y=o(v,g,d.value,e))===s||y===f)return y};e.BREAK=s,e.RETURN=f},function(t,e,n){t.exports=!n(5)&&!n(13)(function(){return 7!=Object.defineProperty(n(16)("div"),"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(8),o=n(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(3);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){"use strict";var r=n(69),o=n(35),i=n(19),c={};n(6)(c,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(c,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:n=!0}},i[r]=function(){return c},t(i)}catch(t){}return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(0),o=n(38).set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,u=r.Promise,a="process"==n(11)(c);t.exports=function(){var t,e,n,s=function(){var r,o;for(a&&(r=c.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(a)n=function(){c.nextTick(s)};else if(i){var f=!0,l=document.createTextNode("");new i(s).observe(l,{characterData:!0}),n=function(){l.data=f=!f}}else if(u&&u.resolve){var h=u.resolve();n=function(){h.then(s)}}else n=function(){o.call(r,s)};return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},function(t,e,n){"use strict";var r=n(18),o=n(71),i=n(74),c=n(23),u=n(30),a=Object.assign;t.exports=!a||n(13)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=a({},t)[n]||Object.keys(a({},e)).join("")!=r})?function(t,e){for(var n=c(t),a=arguments.length,s=1,f=o.f,l=i.f;a>s;)for(var h,p=u(arguments[s++]),d=f?r(p).concat(f(p)):r(p),v=d.length,y=0;v>y;)l.call(p,h=d[y++])&&(n[h]=p[h]);return n}:a},function(t,e,n){var r=n(3),o=n(70),i=n(28),c=n(20)("IE_PROTO"),u=function(){},a=function(){var t,e=n(16)("iframe"),r=i.length;for(e.style.display="none",n(29).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[c]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(9),o=n(3),i=n(18);t.exports=n(5)?Object.defineProperties:function(t,e){o(t);for(var n,c=i(e),u=c.length,a=0;u>a;)r.f(t,n=c[a++],e[n]);return t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(14),o=n(23),i=n(20)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,e,n){var r=n(14),o=n(22),i=n(58)(!1),c=n(20)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),a=0,s=[];for(n in u)n!=c&&r(u,n)&&s.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(s,n)||s.push(n));return s}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(4),o=n(2),i=n(13);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],c={};c[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",c)}},function(t,e,n){var r=n(6);t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},function(t,e,n){t.exports=n(6)},function(t,e,n){"use strict";var r=n(0),o=n(2),i=n(9),c=n(5),u=n(1)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];c&&e&&!e[u]&&i.f(e,u,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(21),o=n(15);t.exports=function(t){return function(e,n){var i,c,u=String(o(e)),a=r(n),s=u.length;return a<0||a>=s?t?"":void 0:(i=u.charCodeAt(a),i<55296||i>56319||a+1===s||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536)}}},function(t,e,n){var r=n(21),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(7);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(27),o=n(1)("iterator"),i=n(8);t.exports=n(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){"use strict";var r=n(56),o=n(66),i=n(8),c=n(22);t.exports=n(31)(Array,"Array",function(t,e){this._t=c(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(4);r(r.S+r.F,"Object",{assign:n(68)})},function(t,e,n){var r=n(4);r(r.S+r.F*!n(5),"Object",{defineProperty:n(9).f})},function(t,e,n){var r=n(23),o=n(18);n(75)("keys",function(){return function(t){return o(r(t))}})},function(t,e){},function(t,e,n){"use strict";var r,o,i,c,u=n(32),a=n(0),s=n(12),f=n(27),l=n(4),h=n(7),p=n(10),d=n(57),v=n(59),y=n(37),m=n(38).set,g=n(67)(),x=n(17),w=n(33),_=n(34),b=a.TypeError,j=a.process,O=a.Promise,L="process"==f(j),E=function(){},P=o=x.f,S=!!function(){try{var t=O.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(E,E)};return(L||"function"==typeof PromiseRejectionEvent)&&t.then(E)instanceof e}catch(t){}}(),k=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},T=function(t,e){if(!t._n){t._n=!0;var n=t._c;g(function(){for(var r=t._v,o=1==t._s,i=0;n.length>i;)!function(e){var n,i,c=o?e.ok:e.fail,u=e.resolve,a=e.reject,s=e.domain;try{c?(o||(2==t._h&&C(t),t._h=1),!0===c?n=r:(s&&s.enter(),n=c(r),s&&s.exit()),n===e.promise?a(b("Promise-chain cycle")):(i=k(n))?i.call(n,u,a):u(n)):a(r)}catch(t){a(t)}}(n[i++]);t._c=[],t._n=!1,e&&!t._h&&M(t)})}},M=function(t){m.call(a,function(){var e,n,r,o=t._v,i=R(t);if(i&&(e=w(function(){L?j.emit("unhandledRejection",o,t):(n=a.onunhandledrejection)?n({promise:t,reason:o}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=L||R(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},R=function(t){if(1==t._h)return!1;for(var e,n=t._a||t._c,r=0;n.length>r;)if(e=n[r++],e.fail||!R(e.promise))return!1;return!0},C=function(t){m.call(a,function(){var e;L?j.emit("rejectionHandled",t):(e=a.onrejectionhandled)&&e({promise:t,reason:t._v})})},F=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),T(e,!0))},A=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw b("Promise can't be resolved itself");(e=k(t))?g(function(){var r={_w:n,_d:!1};try{e.call(t,s(A,r,1),s(F,r,1))}catch(t){F.call(r,t)}}):(n._v=t,n._s=1,T(n,!1))}catch(t){F.call({_w:n,_d:!1},t)}}};S||(O=function(t){d(this,O,"Promise","_h"),p(t),r.call(this);try{t(s(A,this,1),s(F,this,1))}catch(t){F.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(76)(O.prototype,{then:function(t,e){var n=P(y(this,O));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=L?j.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&T(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(A,t,1),this.reject=s(F,t,1)},x.f=P=function(t){return t===O||t===c?new i(t):o(t)}),l(l.G+l.W+l.F*!S,{Promise:O}),n(19)(O,"Promise"),n(78)("Promise"),c=n(2).Promise,l(l.S+l.F*!S,"Promise",{reject:function(t){var e=P(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(u||!S),"Promise",{resolve:function(t){return _(u&&this===c?O:this,t)}}),l(l.S+l.F*!(S&&n(65)(function(t){O.all(t).catch(E)})),"Promise",{all:function(t){var e=this,n=P(e),r=n.resolve,o=n.reject,i=w(function(){var n=[],i=0,c=1;v(t,!1,function(t){var u=i++,a=!1;n.push(void 0),c++,e.resolve(t).then(function(t){a||(a=!0,n[u]=t,--c||r(n))},o)}),--c||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=P(e),r=n.reject,o=w(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},function(t,e,n){"use strict";var r=n(79)(!0);n(31)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(4),o=n(2),i=n(0),c=n(37),u=n(34);r(r.P+r.R,"Promise",{finally:function(t){var e=c(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return u(e,t()).then(function(){return n})}:t,n?function(n){return u(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";var r=n(4),o=n(17),i=n(33);r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){n(83);for(var r=n(0),o=n(6),i=n(8),c=n(1)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<u.length;a++){var s=u[a],f=r[s],l=f&&f.prototype;l&&!l[c]&&o(l,c,s),i[s]=i.Array}},function(t,e){},function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(95),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";function n(t,e,n,r){var i=e&&e.prototype instanceof o?e:o,c=Object.create(i.prototype),u=new p(r||[]);return c._invoke=s(t,n,u),c}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function c(){}function u(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function a(t){function e(n,o,i,c){var u=r(t[n],t,o);if("throw"!==u.type){var a=u.arg,s=a.value;return s&&"object"==typeof s&&g.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,c)},function(t){e("throw",t,i,c)}):Promise.resolve(s).then(function(t){a.value=t,i(a)},c)}c(u.arg)}function n(t,n){function r(){return new Promise(function(r,o){e(t,n,r,o)})}return o=o?o.then(r,r):r()}var o;this._invoke=n}function s(t,e,n){var o=L;return function(i,c){if(o===P)throw new Error("Generator is already running");if(o===S){if("throw"===i)throw c;return v()}for(n.method=i,n.arg=c;;){var u=n.delegate;if(u){var a=f(u,n);if(a){if(a===k)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===L)throw o=S,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=P;var s=r(t,e,n);if("normal"===s.type){if(o=n.done?S:E,s.arg===k)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=S,n.method="throw",n.arg=s.arg)}}}function f(t,e){var n=t.iterator[e.method];if(n===y){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=y,f(t,e),"throw"===e.method))return k;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return k}var o=r(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,k;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y),e.delegate=null,k):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,k)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function h(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function d(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(g.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=y,e.done=!0,e};return r.next=r}}return{next:v}}function v(){return{value:y,done:!0}}var y,m=Object.prototype,g=m.hasOwnProperty,x="function"==typeof Symbol?Symbol:{},w=x.iterator||"@@iterator",_=x.asyncIterator||"@@asyncIterator",b=x.toStringTag||"@@toStringTag",j="object"==typeof t,O=e.regeneratorRuntime;if(O)return void(j&&(t.exports=O));O=e.regeneratorRuntime=j?t.exports:{},O.wrap=n;var L="suspendedStart",E="suspendedYield",P="executing",S="completed",k={},T={};T[w]=function(){return this};var M=Object.getPrototypeOf,R=M&&M(M(d([])));R&&R!==m&&g.call(R,w)&&(T=R);var C=c.prototype=o.prototype=Object.create(T);i.prototype=C.constructor=c,c.constructor=i,c[b]=i.displayName="GeneratorFunction",O.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},O.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,b in t||(t[b]="GeneratorFunction")),t.prototype=Object.create(C),t},O.awrap=function(t){return{__await:t}},u(a.prototype),a.prototype[_]=function(){return this},O.AsyncIterator=a,O.async=function(t,e,r,o){var i=new a(n(t,e,r,o));return O.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},u(C),C[b]="Generator",C[w]=function(){return this},C.toString=function(){return"[object Generator]"},O.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},O.values=d,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(h),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=y),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var c=g.call(o,"catchLoc"),u=g.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&g.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,k):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),k},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),h(n),k}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;h(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:d(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=y),k}}}(function(){return this}()||Function("return this")())},function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(o=t,i=t.default);var u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var a=u.computed||(u.computed={});Object.keys(r).forEach(function(t){var e=r[t];a[t]=function(){return e}})}return{esModule:o,exports:i,options:u}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qrcode-reader"},[n("div",{staticClass:"qrcode-reader__inner-wrapper"},[n("div",{staticClass:"qrcode-reader__overlay"},[t._t("default")],2),t._v(" "),n("canvas",{ref:"trackingLayer",staticClass:"qrcode-reader__tracking-layer"}),t._v(" "),n("video",{ref:"video",staticClass:"qrcode-reader__camera"})])])},staticRenderFns:[]}},function(t,e){t.exports=require("jsqr")},function(t,e){t.exports=require("lodash/isBoolean")},function(t,e){t.exports=require("webrtc-adapter")}]);