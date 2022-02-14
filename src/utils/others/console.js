// exports = module.exports = {}

// Log 處理
// 異步處理？
class Console {
    constructor() {
        this.error = [];
        this.info = [];
    }
    // TODO: where() : file name, line
    // TODO: time() : log time
    // TODO: message() :
    // TODO: log, info, debug, warn, error, dir
    // TODO: debugger

    // TODO: snippet, clwg, cltg, clwtg

    output() {
        this.error.forEach(function (e) {
            console.log(e);
        });
        this.info.forEach(function (e) {
            console.log(e);
        });
    }
}

// return module.exports;
