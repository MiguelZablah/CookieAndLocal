/* Local Storage Controller */
var localStorageController = (function(window){

    return{
        
        createLocalStorage: function(localStorageKey, localStorageValue) {
            window.localStorage.setItem(localStorageKey, localStorageValue);
        },
        
        readsLocalStorage: function(localStorageKey) {
            return window.localStorage.getItem(localStorageKey);
        },

        deleteSpecificLocalStorage: function(localStorageKey) {
            window.localStorage.removeItem(localStorageKey);
        },

        deleteAllLocalStorage: function() {
            window.localStorage.clear();
        }
    };

}(window));