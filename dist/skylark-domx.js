/**
 * skylark-domx - An Elegant HTML5 DOM utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,e){var n=e.define,require=e.require,o="function"==typeof n&&n.amd,s=!o&&"undefined"!=typeof exports;if(!o&&!n){var t={};n=e.define=function(r,e,n){"function"==typeof n?(t[r]={factory:n,deps:e.map(function(e){return function(r,e){if("."!==r[0])return r;var n=e.split("/"),o=r.split("/");n.pop();for(var s=0;s<o.length;s++)"."!=o[s]&&(".."==o[s]?n.pop():n.push(o[s]));return n.join("/")}(e,r)}),resolved:!1,exports:null},require(r)):t[r]={factory:null,resolved:!0,exports:n}},require=e.require=function(r){if(!t.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var module=t[r];if(!module.resolved){var n=[];module.deps.forEach(function(r){n.push(require(r))}),module.exports=module.factory.apply(e,n)||null,module.resolved=!0}return module.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,require){r("skylark-domx/browser",["skylark-domx-browser"],function(r){"use strict";return r}),r("skylark-domx/css",["skylark-domx-css"],function(r){"use strict";return r}),r("skylark-domx/data",["skylark-domx-data"],function(r){return r}),r("skylark-domx/eventer",["skylark-domx-eventer"],function(r){return r}),r("skylark-domx/finder",["skylark-domx-finder"],function(r){return r}),r("skylark-domx/fx",["skylark-domx-fx"],function(r){return r}),r("skylark-domx/geom",["skylark-domx-geom"],function(r){return r}),r("skylark-domx/iframes",["skylark-domx-iframes"],function(r){return r}),r("skylark-domx/lists",["skylark-domx-lists"],function(r){return r}),r("skylark-domx/noder",["skylark-domx-noder"],function(r){return r}),r("skylark-domx/styler",["skylark-domx-styler"],function(r){return r}),r("skylark-domx/query",["skylark-domx-query","./data","./eventer","./fx","./geom","./styler"],function(r){return r}),r("skylark-domx/scripter",["skylark-domx-scripter"],function(r){return r}),r("skylark-domx/transforms",["skylark-domx-transforms"],function(r){return r}),r("skylark-domx/velm",["skylark-domx-velm","./data","./eventer","./fx","./geom","./styler"],function(r){return r}),r("skylark-domx/main",["./browser","./css","./data","./eventer","./finder","./fx","./geom","./iframes","./lists","./noder","./query","./scripter","./styler","./transforms","./velm"],function(r,e,n,o,s,t,a,k,l,i,u,d,f,m,y){return{browser:r,css:e,data:n,eventer:o,finder:s,geom:a,lists:k,noder:l,iframes:i,query:u,scripter:d,styler:f,transforms:m,velm:y}}),r("skylark-domx",["skylark-domx/main"],function(r){return r})}(n),!o){var a=require("skylark-langx-ns");s?module.exports=a:e.skylarkjs=a}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx.js.map
