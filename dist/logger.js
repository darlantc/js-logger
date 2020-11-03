"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function configureLogger(options) {
    window.Logger_shouldDebug = options.shouldDebug || window.Logger_shouldDebug;
    window.Logger_logStyle = options.logStyle || window.Logger_logStyle;
    window.Logger_infoStyle = options.infoStyle || window.Logger_infoStyle;
    window.Logger_warningStyle =
        options.warningStyle || window.Logger_warningStyle;
    window.Logger_errorStyle = options.errorStyle || window.Logger_errorStyle;
}
exports.configureLogger = configureLogger;
configureLogger({
    shouldDebug: window.location.href.includes("debug=true"),
    logStyle: "color:#333;padding:1px 10px;background:#c8d6e5",
    infoStyle: "color:white;padding:1px 10px;background:#2e86de;",
    warningStyle: "color:white;padding:1px 10px;background:#ff9f43;",
    errorStyle: "color:white;padding:1px 10px;background:red;",
});
class Logger {
}
Logger.log = (message, ...optionalParams) => {
    if (!window.Logger_shouldDebug)
        return;
    console.log(`%c${message}`, window.Logger_logStyle, ...optionalParams);
};
Logger.info = (message, ...optionalParams) => {
    if (!window.Logger_shouldDebug)
        return;
    console.info(`%c${message}`, window.Logger_infoStyle, ...optionalParams);
};
Logger.warning = (message, ...optionalParams) => {
    if (!window.Logger_shouldDebug)
        return;
    console.warn(`%c${message}`, window.Logger_warningStyle, ...optionalParams);
};
Logger.error = (message, ...optionalParams) => {
    if (!window.Logger_shouldDebug)
        return;
    console.error(`%c${message}`, window.Logger_errorStyle, ...optionalParams);
};
exports.default = Logger;
//# sourceMappingURL=logger.js.map