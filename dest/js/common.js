(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var openBtn=$(".hambuger--open--btn "),closeBtn=$(".hambuger-close-btn "),menu=$(".menu");openBtn.click(function(){menu.addClass("show")}),closeBtn.click(function(){menu.removeClass("show")});

},{}]},{},[1]);

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";function setChildValue(t){window.location.href="worksDetail.html?worksName=".concat(t)}$("a").click(function(t){var a=this;t.preventDefault();var s=$(this).attr("href");$(this).hasClass("sns")||$(this).hasClass("site-link")?window.open("about:blank").location.href=s:$(this).hasClass("mail")?window.location.href=s:$(this).hasClass("works")?($(".page-move").addClass("show"),setTimeout(function(){setChildValue($(a).data("projectname"))},2e3)):($(".page-move").addClass("show"),setTimeout(function(){document.location.href=s},2e3));return!1}),1==$(".dim").length&&$(".dim").animate({left:"-100vw"},250);

},{}]},{},[1]);