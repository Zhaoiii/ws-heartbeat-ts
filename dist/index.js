!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o=function(){return(o=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(e){this.opts=null,this.ws=null,this.repeat=0,this.lockReconnect=!1,this.forbidReconnect=!1,this.pingTimeoutId=null,this.pongTimeoutId=null,this.onclose=function(t){},this.onerror=function(){},this.onopen=function(){},this.onmessage=function(t,e){},this.onreconnect=function(){},this.send=function(t){this.ws.send(t)},this.sendData=function(t){this.ws.send(JSON.stringify(t))},this.close=function(){this.forbidReconnect=!0,this.heartReset(),this.ws.close(),delete t.instance[this.opts.url]},this.heartCheck=function(){this.heartReset(),this.heartStart()},this.heartStart=function(){var t=this;this.forbidReconnect||(this.pingTimeoutId=setTimeout((function(){t.ws.send(t.opts.pingMsg),t.pongTimeoutId=setTimeout((function(){t.ws.close()}),t.opts.pongTimeout)}),this.opts.pingTimeout))},this.heartReset=function(){clearTimeout(this.pingTimeoutId),clearTimeout(this.pongTimeoutId)},this.reconnect=function(){var t=this;this.opts.repeatLimit>0&&this.opts.repeatLimit<=this.repeat||this.lockReconnect||this.forbidReconnect||(this.lockReconnect=!0,this.repeat++,this.onreconnect(),setTimeout((function(){t.createWebSocket(),t.lockReconnect=!1}),this.opts.reconnectTimeout))},this.initEventHandle=function(){var t=this;this.ws.onclose=function(e){t.heartReset(),t.onclose(e),t.reconnect()},this.ws.onerror=function(){t.heartReset(),t.onerror(),t.reconnect()},this.ws.onopen=function(){t.repeat=0,t.onopen()},this.ws.onmessage=function(e){if(t.heartCheck(),e.data!==t.opts.pingMsg){var n=null;try{n=function(t,e){var n="";switch(t.type){case"json":n=JSON.parse(e.data);break;case"byte":var o=new TextDecoder(t.format);n=JSON.parse(o.decode(e.data));break;default:n=e.data}return n}({type:t.opts.dataType,format:t.opts.byteFormat},e)}catch(o){n=e.data,console.warn("There is a problem with data analysis. A string of type "+t.opts.dataType+" is required, but the provided parameter is parsed incorrectly")}t.onmessage(n,e)}},this.heartCheck()},this.createWebSocket=function(){var t=this;try{this.ws=new WebSocket(this.opts.url);var e=setInterval((function(){1===t.ws.readyState&&(clearInterval(e),t.initEventHandle())}),100)}catch(t){throw this.reconnect(),t}},this.opts={url:e.url,pingTimeout:e.pingTimeout||5e3,pongTimeout:e.pongTimeout||1e4,reconnectTimeout:e.reconnectTimeout||2e3,pingMsg:e.pingMsg||"{}",repeatLimit:e.repeatLimit||5,dataType:e.dataType||"json",byteFormat:e.byteFormat||"utf-8"},this.createWebSocket()}return t.getInstance=function(e){var n,i;return t.instance||(t.instance=o(o({},t.instance),((n={})[e.url]=new t(e),n))),-1===Object.keys(t.instance).indexOf(e.url)&&(t.instance=o(o({},t.instance),((i={})[e.url]=new t(e),i))),t.instance[e.url]},t}();"undefined"!=typeof window&&(window.WsHeartBeat=i),e.default=i}])}));