
let utilFunc = {
    getJumpBaseUrl(toUrl) {  
        var bundleUrl = weex.config.bundleUrl;  
        bundleUrl = new String(bundleUrl);  
        var nativeBase;  
        var native;
        if (WXEnvironment.platform.toLowerCase() === 'ios') {  
            nativeBase = 'file://assets/dist/';  
            native = nativeBase + toUrl + ".js";  
        } else if (WXEnvironment.platform.toLowerCase() === 'android') {  
            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
            native = nativeBase + toUrl + ".js";
        } else {  
            var host = 'localhost:8081';  
            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);  
            if (matches && matches.length >= 2) {  
                host = matches[1];  
            }  
            if (typeof window === 'object') {  
                nativeBase = 'http://' + host + '/';  
            } else {  
                nativeBase = 'http://' + host + '/';  
            }  
  
            native = nativeBase + toUrl + ".html";  
        }  
        return native;  
    } 
};

export default utilFunc;