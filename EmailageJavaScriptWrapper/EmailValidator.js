function emailValidate(requestObject, accountSId, authToken, baseUrl, requestType, dataType, sigMethod, nonce, version) {
    if (baseUrl == undefined || (baseUrl.length) > 0 == false) {
        baseUrl = "https://api.emailage.com/EmailAgeValidator/"
    }

    if (!sigMethod)
        sigMethod = "HMAC-SHA1";

    if (!version)
        version = "1.0";

    var authObject = getAuthObject(dataType, accountSId, sigMethod, version);

    if (nonce)
        authObject.oauth_nonce = nonce;

    var oauthPostModel = getOAuthPostModel(requestType, authObject, baseUrl);
    var oauthData = getOauthData(oauthPostModel);
    var sig = oauthSign(authToken + '&', oauthData, sigMethod);
    var requestUrl = oauthPostModel.action + "?" + getParameterString(oauthPostModel.parameters) + "&oauth_signature=" + percentEncode(sig);
    var result = "";

    $.ajax({
        type: requestType,
        url: requestUrl,
        dataType: dataType,
        data: requestObject,
        async: false,
        success: function (emailValidResult) {
            return (emailValidResult);
        },
        error: function (xmlhttprequest, textstatus, message) {
            return textstatus;
        }
    }).done(function (response) {
        result = response;
    });
    return result;
};

var getAuthObject = function (dataType, accountSId, sigMethod, version) {

    if (!sigMethod)
        sigMethod = "HMAC-SHA1";
    /**
     * HMAC-SHA256
     * HMAC-SHA234
     * HMAC-SHA512
     */

    return {
        format: dataType,
        oauth_version: version ? version : "1.0",
        oauth_consumer_key: accountSId,
        oauth_timestamp: new Date().getTime(),
        oauth_nonce: getRandomString(),
        oauth_signature_method: sigMethod
    };
}

var getOAuthPostModel = function (requestType, authObject, baseUrl) {
    return {
        method: requestType,
        action: baseUrl,
        parameters: authObject
    };
};

var getOauthData = function (m) {
    return percentEncode(m.method.toUpperCase())
        + '&' + percentEncode(m.action)
        + '&' + percentEncode(getParameterString(m.parameters));
};

var oauthSign = function (key, data, method) {
    switch (method) {
        case "HMAC-SHA1":
            var hmacObj = new jsSHA('SHA-1', 'TEXT');
            break;
        case "HMAC-SHA256":
            var hmacObj = new jsSHA('SHA-256', 'TEXT');
            break;
        case "HMAC-SHA384":
            var hmacObj = new jsSHA('SHA-384', 'TEXT');
            break;
        case "HMAC-SHA512":
            var hmacObj = new jsSHA('SHA-512', 'TEXT');
            break;
        default:
            var hmacObj = new jsSHA('SHA-1', 'TEXT');
    }

    hmacObj.setHMACKey(key, 'TEXT');
    hmacObj.update(data);
    return hmacObj.getHMAC('B64');
}

var getParameterString = function (p) {
    var s = "";
    for (var i in p) {
        s += percentEncode(i) + "=" + percentEncode(p[i]) + "&";
    }
    if (s[s.length - 1] == "&") {
        s = s.substr(0, s.length - 1);
    }
    return s;
};

var percentEncode = function (s) {
    s = encodeURIComponent(s);
    s = s.replace(/\!/g, "%21");
    s = s.replace(/\*/g, "%2A");
    s = s.replace(/\'/g, "%27");
    s = s.replace(/\(/g, "%28");
    s = s.replace(/\)/g, "%29");
    return s;
};


// generate random string
var _UnreservedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.~";
var getRandomString = function (length) {
    length = length || 10;
    var str = "";

    while (length-- > 0) {
        str += _UnreservedChars[Math.floor(Math.random() * _UnreservedChars.length)];
    }
    return str;
};

var getNonce = function (length) {
    length = length || 10;
    var str = "";

    while (length-- > 0) {
        str += _UnreservedChars[Math.floor(Math.random() * _UnreservedChars.length)];
    }
    return str;
};
