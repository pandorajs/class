/*! class-0.0.5 2014-01-29 20:31:39 */
define("crossjs/class/0.0.5/class",["$","./super"],function(a){"use strict";var b=a("$"),c=a("./super"),d=function(){var a,d,e,f=arguments,g={};switch(f.length){case 2:"function"==typeof f[0]&&(d=f[0]),b.isPlainObject(f[1])&&(e=f[1]);break;case 1:"function"==typeof f[0]?d=f[0]:b.isPlainObject(f[0])&&(e=f[0])}return a=function(){var c=Array.prototype.slice.call(arguments,0),d=function(a,b,e){b&&b.hasOwnProperty(e)&&(d(a,b.constructor.uber,e),b[e].apply(a,c))};d(this,a.uber,"__construct"),a.prototype.hasOwnProperty("__construct")&&"function"==typeof this.__construct&&this.__construct.apply(this,c),b.each(g,b.proxy(function(a,b){b.apply(this,c)},this))},a.addPlugins=function(c){return b.extend(g,c),a},"function"!=typeof d?d=c:b.isPlainObject(d.uber)&&d.uber.hasSuper||c.inherit(d,c),c.inherit(a,d),b.isPlainObject(e)&&b.extend(a.prototype,e),a};return d});