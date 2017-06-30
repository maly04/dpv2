(function (window) {

    function getBaseUrl() {
        return window.location.href.match(/^.*\//);
    }

    window.__env = window.__env || {};

    // PUT HERE YOUR environement variable
    window.__env.apiUrl = (window.location.origin + '/').replace("5001", "5000");

}(this));


// prototype Object with native assign method
if (typeof Object.assign != 'function') {
    (function () {
        Object.assign = function (target) {
            'use strict';
            // We must check against these specific cases.
            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert undefined or null to object');
            }

            var output = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var source = arguments[index];
                if (source !== undefined && source !== null) {
                    for (var nextKey in source) {
                        if (source.hasOwnProperty(nextKey)) {
                            output[nextKey] = source[nextKey];
                        }
                    }
                }
            }
            return output;
        };
    })();
}