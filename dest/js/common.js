(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var openBtn=$(".hambuger--open--btn "),closeBtn=$(".hambuger-close-btn "),menu=$(".menu");openBtn.click(function(){menu.addClass("show")}),closeBtn.click(function(){menu.removeClass("show")});

},{}]},{},[1]);

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var win_width=$(window).innerWidth(),win_height=$(window).innerHeight();function setChildValue(e){window.location.href="worksDetail.html?worksName=".concat(e)}$(window).resize(function(){win_width=$(window).innerWidth(),win_height=$(window).innerHeight()}),$("a").click(function(e){var i=this;e.preventDefault();var s=$(this).attr("href");if($(this).hasClass("sns")||$(this).hasClass("site-link"))window.open("about:blank").location.href=s;else if($(this).hasClass("mail"))window.location.href=s;else if($(this).hasClass("works-link"))win_width>=474?($(".page-move").addClass("show"),setTimeout(function(){setChildValue($(i).data("projectname"))},2e3)):$(this).closest(".works--item--text").hasClass("works--item--text")?($(".page-move").addClass("show"),setTimeout(function(){setChildValue($(i).data("projectname"))},2e3)):$(this).parent("h4")&&($(".works-link").parent().siblings(".thumbnail_mo").removeClass("show"),$(this).parent().siblings(".thumbnail_mo").addClass("show"));else if($(this).hasClass("works-link-mo"))$(".page-move").addClass("show"),setTimeout(function(){setChildValue($(i).data("projectname"))},2e3);else if($(this).hasClass("github")||$(this).hasClass("preview")){window.open("about:blank").location.href=s}else if($(this).hasClass("download-btn")){window.open("about:blank").location.href="/files/LeeSeungyeol(이승열)_이력서.pdf"}else $(".page-move").addClass("show"),setTimeout(function(){document.location.href=s},2e3);return!1}),1==$(".dim").length&&$(".dim").animate({left:"-100vw"},250);

},{}]},{},[1]);
