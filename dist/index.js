'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.injectMarkup = exports.generate = exports.checkUpdates = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpRealFavicon = require('gulp-real-favicon');

var _gulpRealFavicon2 = _interopRequireDefault(_gulpRealFavicon);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkUpdates = function checkUpdates() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var cfg = _extends({}, _config2.default, params);

    var markupFile = cfg.markupFile;


    var task = function task(done) {
        var _JSON$parse = JSON.parse(_fs2.default.readFileSync(markupFile));

        var version = _JSON$parse.version;


        _gulpRealFavicon2.default.checkForUpdates(version, function (err) {
            if (err) {
                throw err;
            }

            done();
        });
    };

    task.displayName = 'favicon-check-update';
    task.description = 'Check favicon updates';

    return task;
};

var generate = function generate() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var cfg = _extends({}, _config2.default, params);

    var task = function task(done) {
        _gulpRealFavicon2.default.generateFavicon(cfg, done);
    };

    task.displayName = 'favicon-generate';
    task.description = 'Generate favicons';

    return task;
};

var injectMarkup = function injectMarkup() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var cfg = _extends({}, _config2.default, params);

    var markupFile = cfg.markupFile;
    var templateFiles = cfg.templateFiles;
    var templateDest = cfg.templateDest;


    var faviconConfig = JSON.parse(_fs2.default.readFileSync(markupFile));
    var htmlCode = faviconConfig.favicon.html_code;

    var task = function task() {
        _gulp2.default.src(templateFiles).pipe(_gulpRealFavicon2.default.injectFaviconMarkups(htmlCode)).pipe(_gulp2.default.dest(templateDest));
    };

    task.displayName = 'favicon-inject-markup';
    task.description = 'Inject favicon markup in HTML file(s)';

    return task;
};

exports.checkUpdates = checkUpdates;
exports.generate = generate;
exports.injectMarkup = injectMarkup;