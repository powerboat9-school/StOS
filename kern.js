(function()
    if (typeof stos === "undefined") {
        stos = {};
    }
    stos._libs = {};
    stos.loadLib = function(name, data) {
        if (typeof name !== "string") {
            return false;
        }
        stos._libs[name] = data;
    }
    stos.unloadLib = function(name) {
        if (typeof stos._libs[name] === "undefined") {
            return false;
        }
        stos._libs[name] = undefined;
    }
    stos.loadLibFind()
    stos.getLib(name) {
        stos.loadLib
        return stos._libs[name];
    }
