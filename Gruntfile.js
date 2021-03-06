// Generated on2014-01-31 using generator-deployd 0.0.5
'use strict';


module.exports = function(grunt) {

    grunt.initConfig({
        folders: {
            public: 'public',
            tmp: '.tmp'
        },
        deployd: {
            dev: {
                options: {
                    port: 2403,
                    db: {
                        host: 'localhost',
                        port: 27017,
                        name: 'development'
                    },
                    env: 'development'
                }
            },
            prod: {
                options: {
                    port: 2403,
                    db: {
                        port: 27017,
                        name: 'production',
                        host: 'localhost',
                        credentials: {
                            username: 'prod_user',
                            password: 'prod_pass'
                        }
                    },
                    env: 'production'
                }
            }
        },
        watch: {
            livereload: {
                js: {
                    files: ['<%= folders.public %>/lib/**', '<%= folders.public %>/app/**/*.js'],
                    tasks: ['jshint'],
                    options: {
                        livereload: true,
                    },
                },
                files: [
                    '<%= folders.public %>/*.html',
                    '<%= folders.public %>/styles/{,*/}*.css',
                    '<%= folders.public %>/script/{,*/}*.js',
                    '<%= folders.public %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ],
                options: {
                    livereload: true
                }
            }
        },
         open: {
            dev: {
                path: 'http://localhost:<%= deployd.dev.options.port%>'
            },
            prod: {
                path: 'http://localhost:<%= deployd.prod.options.port%>'
            }
         }
    });

    // Import of plugins
//    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');
//    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-deployd');

    //grunt.registerTask('build', ['jshint', 'concat', 'uglify']);
    grunt.registerTask('server', function(target) {
        grunt.task.run( [
            'deployd:dev',
            'open:dev',
            'watch'
        ] );
    });
}