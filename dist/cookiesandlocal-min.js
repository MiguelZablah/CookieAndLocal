"use strict";var cookie=function(){var e=function(e,t,n){var r="";if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3),r="; expires="+o.toUTCString()}document.cookie=e+"="+t+r+"; path=/"};return{create:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;e(t,n,r)},read:function(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var o=n[r];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null},erase:function(t){e(t,"",-1)}}}(),localStorage=function(e){return{create:function(t,n){e.localStorage.setItem(t,n)},read:function(t){return e.localStorage.getItem(t)},delete:function(t){e.localStorage.removeItem(t)},deleteAll:function(){e.localStorage.clear()}}}(global);