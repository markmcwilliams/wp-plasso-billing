jQuery(document).ready(function($){$(document).on("click",".scroll",function(){var o=this.hash,t=$(o);return $(this).hasClass("down")?$("html, body").stop().animate({scrollTop:$(window).scrollTop()+300}):$(this).hasClass("form")?$(".panel.active").stop().animate({scrollTop:t.offset().top-60}):$("html, body").stop().animate({scrollTop:t.offset().top-60}),!1})});