/* Local Storage Controller */
var localStorage = (function(window){

    return{
        
        create: function(localStorageKey, localStorageValue) {
            window.localStorage.setItem(localStorageKey, localStorageValue);
        },
        
        read: function(localStorageKey) {
            return window.localStorage.getItem(localStorageKey);
        },

        delete: function(localStorageKey) {
            window.localStorage.removeItem(localStorageKey);
        },

        deleteAll: function() {
            window.localStorage.clear();
        }
    };

}(window));