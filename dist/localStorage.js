"use strict";

/* Local Storage Controller */
var localStorage = function (window) {

    return {

        create: function create(localStorageKey, localStorageValue) {
            window.localStorage.setItem(localStorageKey, localStorageValue);
        },

        read: function read(localStorageKey) {
            return window.localStorage.getItem(localStorageKey);
        },

        delete: function _delete(localStorageKey) {
            window.localStorage.removeItem(localStorageKey);
        },

        deleteAll: function deleteAll() {
            window.localStorage.clear();
        }
    };
}(global);