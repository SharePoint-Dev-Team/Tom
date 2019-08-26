/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!function(){"use strict";const e=function(){let e=!1;return()=>{e||(e=!0,require("electron").webFrame.registerURLSchemeAsPrivileged("vscode-resource",{secure:!0,bypassCSP:!1,allowServiceWorkers:!1,supportFetchAPI:!0,corsEnabled:!0}))}}(),n=require("electron").ipcRenderer;let o=!1;const t={postMessage:(e,o)=>{n.sendToHost(e,o)},onMessage:(e,o)=>{n.on(e,o)},focusIframeOnCreate:!0,onIframeLoaded:e=>{e.contentWindow.onbeforeunload=(()=>o?(t.postMessage("do-reload"),!1):(console.log("prevented webview navigation"),!1));let n=!1;e.contentWindow.addEventListener("mousedown",()=>{n=!0});const s=e=>{n||t.postMessage("synthetic-mouse-event",{type:e.type,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY})};e.contentWindow.addEventListener("mouseup",e=>{s(e),n=!1}),e.contentWindow.addEventListener("mousemove",s)}};t.onMessage("devtools-opened",()=>{o=!0}),document.addEventListener("DOMContentLoaded",()=>{e(),window.onmessage=(e=>{n.sendToHost(e.data.command,e.data.data)})}),
require("../../browser/pre/main")(t)}();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f06011ac164ae4dc8e753a3fe7f9549844d15e35/core/vs/workbench/contrib/webview/electron-browser/pre/electron-index.js.map
