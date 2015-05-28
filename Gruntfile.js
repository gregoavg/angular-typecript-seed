/**
 * Created by Grigorios on 14-May-15.
 */
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'app/bower_components/jquery/dist/jquery.js',
                    'app/bower_components/angular/angular.js',
                    'app/bower_components/angular-ui-router/release/angular-ui-router.js'
                ],
                dest: 'app/output/libs.js'
            }
        }
    });

    // Load the plugin that provides the "typescript compile" task
    grunt.loadNpmTasks('grunt-typescript');

    // Load the plugin that concats all bower dependencies
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', [
        'concat'
    ]);

};