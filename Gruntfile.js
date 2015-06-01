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
        },

        ts: {
            default: {
                src: [
                    "app/**/*.ts",
                    "!app/**/*.spec.ts",
                    "!app/bower_components/**"
                ],
                out: "app/output/built.js",
                target: 'es5'
            },
            tests: {
                src: [
                    "app/**/*.spec.ts"
                ],
                out: "app/output/built-specs.js",
                target: 'es5'
            }
        },

        less: {
            development: {
                files: {
                    "output/style.css": "app/main-style.less"
                }
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('run-test', ['ts:default', 'ts:tests', 'karma:unit']);
    grunt.registerTask('default', ['concat']);

};