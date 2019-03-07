/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";"function"!=typeof define&&"object"==typeof module&&"object"==typeof module.exports&&(global.define=function(e,n){module.exports=n(),global.define=void 0}),define([],function(){global._performanceEntries=global._performanceEntries||[];const e=2,n="function"==typeof console.timeStamp?console.timeStamp.bind(console):()=>{};return{mark:function(e){global._performanceEntries.push(e,Date.now()),n(e)},getEntries:function(){const n=[],t=global._performanceEntries;for(let o=0;o<t.length;o+=e)n.push({name:t[o],timestamp:t[o+1]});return n},getEntry:function(n){const t=global._performanceEntries;for(let o=0;o<t.length;o+=e)if(t[o]===n)return{name:t[o],timestamp:t[o+1]}},getDuration:function(n,t){const o=global._performanceEntries;let r=t,i=0;for(let l=o.length-e;l>=0;l-=e)if(o[l]===r){if(r!==t)return o[i+1]-o[l+1];i=l,r=n}return 0},importEntries:function(e){global._performanceEntries.splice(0,0,...e)},exportEntries:function(){return global._performanceEntries.slice(0)}}});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/1b8e8302e405050205e69b59abb3559592bb9e60/core/vs\base\common\performance.js.map
