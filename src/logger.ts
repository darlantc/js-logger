declare global {
  interface Window {
    Logger_shouldDebug: boolean;
    Logger_logStyle: string;
    Logger_infoStyle: string;
    Logger_warningStyle: string;
    Logger_errorStyle: string;
  }
}

export function configureLogger(options: {
  shouldDebug?: boolean;
  logStyle?: string;
  infoStyle?: string;
  warningStyle?: string;
  errorStyle?: string;
}): void {
  window.Logger_shouldDebug = options.shouldDebug || window.Logger_shouldDebug;
  window.Logger_logStyle = options.logStyle || window.Logger_logStyle;
  window.Logger_infoStyle = options.infoStyle || window.Logger_infoStyle;
  window.Logger_warningStyle = options.warningStyle || window.Logger_warningStyle;
  window.Logger_errorStyle = options.errorStyle || window.Logger_errorStyle;
}

configureLogger({
  shouldDebug: window.location.href.includes("debug=true"),
  logStyle: "color:#333;padding:1px 10px;background:#c8d6e5",
  infoStyle: "color:white;padding:1px 10px;background:#2e86de;",
  warningStyle: "color:white;padding:1px 10px;background:#ff9f43;",
  errorStyle: "color:white;padding:1px 10px;background:red;",
});

class Logger {
  static log = (message: string, ...optionalParams: any[]) => {
    if (!window.Logger_shouldDebug) return;
    console.log(`%c${message}`, window.Logger_logStyle, ...optionalParams);
  };

  static info = (message: string, ...optionalParams: any[]) => {
    if (!window.Logger_shouldDebug) return;
    console.info(`%c${message}`, window.Logger_infoStyle, ...optionalParams);
  };

  static warning = (message: string, ...optionalParams: any[]) => {
    if (!window.Logger_shouldDebug) return;
    console.warn(`%c${message}`, window.Logger_warningStyle, ...optionalParams);
  };

  static error = (message: string, ...optionalParams: any[]) => {
    if (!window.Logger_shouldDebug) return;
    console.error(`%c${message}`, window.Logger_errorStyle, ...optionalParams);
  };
}

export default Logger;
