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
                target: 'es5',
                src: [
                    "app/**/*.ts",
                    "!app/**/*.spec.ts",
                    "!app/bower_components/**"
                ],
                out: "app/output/build.js"
            },
            tests: {
                target: 'es5',
                src: [
                    "app/**/*.spec.ts"
                ],
                out: "app/output/build-specs.js"
            }
        },

        less: {
            development: {
                files: {
                    "output/style.css": "app/**/*.less"
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
    grunt.registerTask('compile', ['less','ts']);
    grunt.registerTask('test', ['ts:default', 'ts:tests', 'karma:unit']);
    grunt.registerTask('default', ['concat','less','ts']);
    grunt.registerTask('build', ['concat','less','ts', 'karma'])

};