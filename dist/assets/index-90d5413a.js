(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();$(function(){feather.replace(),$('[data-toggle="tooltip"]').tooltip(),$('[data-toggle="popover"]').popover(),$("a.page-scroll").bind("click",function(t){var l=$(this);$("html, body").stop().animate({scrollTop:$(l.attr("href")).offset().top-20},1e3),t.preventDefault()}),$(".slick-about").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,dots:!0,arrows:!1});var r=0;$(window).scroll(function(){var t=$(window).scrollTop();return t>80?t>r?$(".smart-scroll").addClass("scrolling").removeClass("up"):$(".smart-scroll").addClass("up"):$(".smart-scroll").removeClass("scrolling").removeClass("up"),r=t,t>=600?$(".scroll-top").addClass("active"):$(".scroll-top").removeClass("active"),!1}),$(".scroll-top").click(function(){$("html, body").stop().animate({scrollTop:0},1e3)}),$(".switcher-trigger").click(function(){$(".switcher-wrap").toggleClass("active")}),$(".color-switcher ul li").click(function(){$(this).attr("data-color"),$("#theme-color").attr("href","./yellow.css"),$(".color-switcher ul li").removeClass("active"),$(this).addClass("active")})});
