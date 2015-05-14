/**
 * Created by Grigorios on 14-May-15.
 */
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'app/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        typescript: {
            base: {
                src: [
                    'app/**/*.ts'
                ],
                dest: 'app/',
                options: {
                    module: 'amd',
                    target: 'es5',
                    basePath: 'app/',
                    sourceMap: true,
                    declaration: true
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Load the plugin that provides the "typescript compile" task
    grunt.loadNpmTasks('grunt-typescript');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'typescript']);

};