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
            'public_html/morgue-app/assets/js/messagePump.js',
            'public_html/morgue-app/assets/pinterest/pinit_test.js',
            'public_html/morgue-app/assets/js/jquery/dist/jquery.min.js',
            'public_html/morgue-app/assets/js/bootstrap/dist/js/bootstrap.min.js',
            'public_html/morgue-app/assets/js/angular/angular.min.js',
            'public_html/morgue-app/assets/js/angular-route/angular-route.min.js',
            'public_html/morgue-app/assets/js/angular-animate/angular-animate.min.js',
            'public_html/morgue-app/assets/js/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'public_html/morgue-app/assets/js/angular-local-storage/dist/angular-local-storage.min.js',
            'public_html/morgue-app/assets/js/angular-messages/angular-messages.min.js',
            'public_html/morgue-app/assets/js/angular-deckgrid/angular-deckgrid.js',
            'public_html/morgue-app/app/app.js',
            'public_html/morgue-app/app/app.constants.js',
            'public_html/morgue-app/app/app.routes.js',
            'public_html/morgue-app/app/app.services.js',
            'public_html/morgue-app/services/messagepump.fct.js',
            'public_html/morgue-app/services/utils.fct.js',
            'public_html/morgue-app/services/boards.fct.js',
            'public_html/morgue-app/services/folders.fct.js',
            'public_html/morgue-app/services/dialogs.fct.js',
            'public_html/morgue-app/sections/edit-folder/edit-folder.ctl.js',
            'public_html/morgue-app/sections/folder-contents/folder-contents.ctl.js',
            'public_html/morgue-app/sections/dialogs/editfolder.ctl.js',
            'public_html/morgue-app/sections/main/main.ctl.js',
            'public_html/morgue-app/sections/dialogs/confirm.ctl.js',
            'public_html/morgue-app/components/url-checker/url-checker.drct.js',
            'public_html/morgue-app/components/folder/folder.drct.js',
            'public_html/morgue-app/components/image-widget/image-widget.drct.js',
            'test/unit_tests/*.js'

        ],
        htmlReporter: {
            outputFile: 'reports/html_out/karma_unit_tests.html'

        },
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
//        preprocessors: {
//            
//            'test/unit_test/**_tests.js': ['coverage']
//        },
        junitReporter: {
            outputFile: 'reports/junit/karma-test-results.xml',
            suite: 'Unit Tests'
        },
        coverageReporter: {
            reporters: [
                {
                    type: 'html',
                    dir: 'reports/unit_test_html_coverage/',
                    subdir: 'unit_test_chrome'
                },
                {
                    type: 'cobertura',
                    dir: 'reports/unit_test_coverage/',
                    subdir: 'chrome',
                    file: 'karma-chrome.xml'
                }, {
                    type: 'json',
                    dir: 'reports/unit_test_coverage/',
                    subdir: 'json',
                    file: 'karma-coverage.json'
                }]
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage', 'html', 'dots', 'junit'],
        // web server port
        port: 9876,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_WARN,
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //browsers: ['PhantomJS'],
        browsers: ['Chrome'],
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};

