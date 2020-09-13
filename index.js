"use strict";

//module.exports = Franz => Franz;
module.exports = Franz => class OpenPhone extends Franz { overrideUserAgent() { return "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.141 Safari/537.36"; } };
