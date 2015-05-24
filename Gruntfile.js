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
                    declaration: true,
                    watch: {
                        path: 'app/',
                        before: ['beforetasks'],   //Set before tasks. eg: clean task
                        after: ['aftertasks'],      //Set after tasks.  eg: minify task
                        atBegin: true              //Run tasks when watcher starts. default false
                    }
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Load the plugin that provides the "typescript compile" task
    grunt.loadNpmTasks('grunt-typescript');

    grunt.loadNpmTasks('grunt-typescript-compile');

    grunt.loadNpmTasks('tsd update')

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'typescript']);

};