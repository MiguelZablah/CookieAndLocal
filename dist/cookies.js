"use strict";

/* Cookie Controller */
var cookie = function () {

    // Create Cookie
    var createsCookie = function createsCookie(cookieName, cookieValue, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = cookieName + "=" + cookieValue + expires + "; path=/";
    };

    return {

        create: function create(cookieName, cookieValue) {
            var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

            createsCookie(cookieName, cookieValue, days);
        },

        read: function read(cookieName) {
            var nameEQ = cookieName + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1, c.length);
                }if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        },

        erase: function erase(cookieName) {
            createsCookie(cookieName, "", -1);
        }
    };
}();