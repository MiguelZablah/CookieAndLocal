"use strict";var cookie=function(){var e=function(e,t,n){var r="";if(n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3),r="; expires="+i.toUTCString()}document.cookie=e+"="+t+r+"; path=/"};return{create:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;e(t,n,r)},read:function(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var i=n[r];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return null},erase:function(t){e(t,"",-1)}}}();