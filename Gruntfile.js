'use strict';
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        clean: {
            reports: ['reports']
        },
        karma: {
            unit_tests: {
                configFile: 'karma-scripts/angular-unit-tests.conf.js',
                singleRun: true
            },
            form_tests: {
                configFile: 'karma-scripts/angular-form-tests.conf.js',
                singleRun: true
            }

        }



    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('run-all-tests', ['clean','karma:unit_tests','karma:form_tests']);
    grunt.registerTask('run-form-tests',['clean','karma:form_tests']);
}



///'coverage', 'html_coverage', 'html_out', 'junit