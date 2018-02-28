/* Cookie Controller */
var cookie = (function(){

    // Create Cookie
    var createsCookie = function(cookieName, cookieValue, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = cookieName + "=" + cookieValue + expires + "; path=/";
    };

    return{
        
        create: function(cookieName, cookieValue, days = 10) {
            createsCookie(cookieName, cookieValue, days);
        },
        
        read: function(cookieName) {
            var nameEQ = cookieName + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
            }
            return null;
        },

        erase: function(cookieName) {
            createsCookie(cookieName,"",-1);
        }
    };

}());