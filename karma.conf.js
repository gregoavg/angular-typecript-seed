module.exports = function (config) {
    config.set({
        basePath: 'app/output/',
        frameworks: [
            'jasmine'
        ],
        port: 9876,
        files: [
            'libs.js',
            'build.js',
            'build-specs.js'
        ],

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],
        singleRun: true
    });
};
