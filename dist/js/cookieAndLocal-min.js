var cookieController=function(){var e=function(e,o,t){var r="";if(t){var n=new Date;n.setTime(n.getTime()+24*t*60*60*1e3),r="; expires="+n.toUTCString()}document.cookie=e+"="+o+r+"; path=/"};return{createCookie:function(o,t,r=10){e(o,t,r)},readCookie:function(e){for(var o=e+"=",t=document.cookie.split(";"),r=0;r<t.length;r++){for(var n=t[r];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(o))return n.substring(o.length,n.length)}return null},eraseCookie:function(o){e(o,"",-1)}}}(),localStorageController=function(e){return{createLocalStorage:function(o,t){e.localStorage.setItem(o,t)},readsLocalStorage:function(o){return e.localStorage.getItem(o)},deleteSpecificLocalStorage:function(o){e.localStorage.removeItem(o)},deleteAllLocalStorage:function(){e.localStorage.clear()}}}(window);