module.exports = function (config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude) to the root of the netbeans app
        basePath: '..',
        autoWatch: false,
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],
        // list of files / patterns to load in the browser
        files: [
            'public_html/jasmine/json2.js',
            'public_html/jasmine/jasmine.js',
            'public_html/morgue-app/assets/js/angular/angular.min.js',
            'public_html/form_test/app.js',
            'public_html/form_test/form.tpl.html',
            'test/form_tests/**/*.js'

        ],
        htmlReporter: {
            outputFile: 'reports/form_html_out/karma_form_tests.html'

        },
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
             
            'public_html/form_test/form.tpl.html': ['ng-html2js']


        },
        ngHtml2JsPreprocessor: {
            
             moduleName: 'formTemplates'
            
            
        },
        junitReporter: {
            outputFile: 'reports/junit/karma-form-test-results.xml',
            suite: 'Form Unit Tests'
        } ,
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress',   'html', 'dots', 'junit'],
        // web server port
        port: 9876,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_WARN,
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //browsers: ['Chrome'],
        browsers: ['PhantomJS'],
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};

