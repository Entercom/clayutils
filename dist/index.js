!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=5)}([function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports.strCheck=function(t){if("string"==typeof t)return!0;throw new Error("Argument must be a string, not "+n(t))}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t){n.strCheck(t);var e=/_components\/(.+?)[\/\.]/.exec(t)||/_components\/(.*)/.exec(t);return e&&e[1]}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t){n.strCheck(t);var e=/\/_layouts\/.+?\/instances\/([^\.\/@]+)/.exec(t);return e&&e[1]}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t){return n.strCheck(t),t.toLowerCase().indexOf("/_layouts/")>-1}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t){return n.strCheck(t),t.toLowerCase().indexOf("/_pages/")>-1}},function(t,e,r){"use strict";t.exports.findComponentRefInPage=r(6),t.exports.getComponentInstance=r(7),t.exports.getLayoutInstance=r(2),t.exports.getComponentName=r(1),t.exports.getLayoutName=r(8),t.exports.getComponentVersion=r(9),t.exports.getPageInstance=r(10),t.exports.getPageVersion=r(11),t.exports.getListInstance=r(12),t.exports.getPrefix=r(13),t.exports.isComponent=r(14),t.exports.isLayout=r(3),t.exports.isLayoutMeta=r(15),t.exports.isDefaultComponent=r(16),t.exports.isDefaultLayout=r(17),t.exports.isPage=r(4),t.exports.isPageMeta=r(18),t.exports.isPublished=r(19),t.exports.isList=r(20),t.exports.isUri=r(21),t.exports.isUser=r(22),t.exports.replaceVersion=r(23),t.exports.uriPrefixToSlug=r(24),t.exports.uriSlugToPrefix=r(25),t.exports.jsonPrefixToSlug=r(26),t.exports.jsonSlugToPrefix=r(27)},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(1),c=r(0).strCheck;t.exports=function(t,e){if(c(e),"object"!==n(t))throw new Error("Page argument must be an object, not ".concat(n(t)));return Object.values(t).filter(Array.isArray).reduce((function(t,e){return t.concat(e)}),[]).find((function(t){return o(t)===e}))}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t){n.strCheck(t);var e=/\/_components\/.+?\/instances\/([^\.@]+)/.exec(t);return e&&e[1]}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t){n.strCheck(t);var e=/_layouts\/(.+?)[\/\.]/.exec(t)||/_layouts\/(.*)/.exec(t);return e&&e[1]}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t){n.strCheck(t);var e=/\/_components\/.+?@(.+)/.exec(t);return e&&e[1]}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t){n.strCheck(t);var e=/\/_pages\/([^\.\/]+)/.exec(t);return e&&e[1]}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t){n.strCheck(t);var e=/\/_pages\/.+?@(.+)/.exec(t);return e&&e[1]}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t){n.strCheck(t);var e=/\/_lists\/(.*)/.exec(t);return e&&e[1]}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t){return n.strCheck(t),t.split(/\/_(pages|components|lists|uris|schedule|users|layouts|sites)/)[0]}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t){return n.strCheck(t),t.toLowerCase().indexOf("/_components/")>-1}},function(t,e,r){"use strict";var n=r(0),o=r(3),c=r(2);t.exports=function(t){return n.strCheck(t),o(t)&&!!c(t)&&!!t.match(/\/meta$/i)}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t){return n.strCheck(t),!!t.match(/\/_components\/[A-Za-z0-9\-]+$/)}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t){return n.strCheck(t),!!t.match(/\/_layouts\/[A-Za-z0-9\-]+$/)}},function(t,e,r){"use strict";var n=r(0),o=r(4);t.exports=function(t){return n.strCheck(t),o(t)&&!!t.match(/\/meta$/i)}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t){return n.strCheck(t),-1!==t.indexOf("@published")}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t){return n.strCheck(t),t.toLowerCase().indexOf("/_lists/")>-1}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t){return n.strCheck(t),t.toLowerCase().indexOf("/_uris/")>-1}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t){return n.strCheck(t),t.toLowerCase().indexOf("/_users/")>-1}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t,e){return n.strCheck(t),e?t.split("@")[0]+"@"+e:t.split("@")[0]}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t,e){var r=e.host,o=e.path,c=e.slug,s=e.prefix,u=-1!==t.indexOf("/_");return s||(s=o&&o.length>1?"".concat(r).concat(o):r),n.strCheck(t),t.replace("".concat(s).concat(u?"/":""),"".concat(c).concat(u?"/":""))}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t,e){var r=e.slug,o=e.prefix,c=e.host,s=e.path,u=-1!==t.indexOf("/_");return o||(o=s&&s.length>1?"".concat(c).concat(s):c),n.strCheck(t),t.replace("".concat(r).concat(u?"/":""),"".concat(o).concat(u?"/":""))}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t,e){var r,o,c,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],u=e.slug,i=e.host,a=e.path,f=e.prefix;return n.strCheck(t),f||(f=a&&a.length>1?"".concat(i).concat(a):i),r="".concat(s?'"_ref":':"",'"').concat(f,"/_components/"),o="".concat(s?'"_ref":':"",'"').concat(u,"/_components/"),c=new RegExp(r,"g"),t.replace(c,o)}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(r){var o,c,s,u=t.slug,i=t.host,a=t.path,f=t.prefix;return n.strCheck(r),f||(f=a&&a.length>1?"".concat(i).concat(a):i),o="".concat(e?'"_ref":':"",'"').concat(f,"/_components/"),c="".concat(e?'"_ref":':"",'"').concat(u,"/_components/"),s=new RegExp(c,"g"),r.replace(s,o)}}}]);