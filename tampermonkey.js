// ==UserScript==
// @name         mokyBox辅助小工具
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  网页截图、csdn复制代码、查看密码、电影天堂直通豆瓣详情页看评分 https://github.com/booms21/mokyBox.git
// @author       naje
// @match http://*/*
// @match https://*/*
// @noframes
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant unsafeWindow
// @require https://cdn.bootcdn.net/ajax/libs/html2canvas/1.4.1/html2canvas.min.js

// ==/UserScript==

;(function () {
  "use strict";
  unsafeWindow.html2canvas = html2canvas;

  if (location.href === "http://localhost:8080/") return;
  var script = document.createElement("script");
  script.src = "http://localhost:8080/app.bundle.js";
  document.body.appendChild(script);
})();
