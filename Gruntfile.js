module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
            uglify: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },

                build: {
                    src: 'src/<%= pkg.name %>.js',
                    dest: 'build/<%= pkg.name %>.min.js'
                }
            },

            sass: {
                dist: {
                    options: {
                        style: 'compressed',
                        sourcemap: 'auto'
                    },

                    files: {
                        'css/style.minify.css': 'sass/style.scss',
                    }
                }
            },

            csslint: {
                strict: {
                    src: ['css/style.minify.css']
                },
            },

            autoprefixer: {
                options: {
                    browsers: ['last 3 version']
                },

                no_dest: {
                    src: 'css/style.minify.css'
                },

                sourcemap: {
                    options: {
                        map: true
                    },
                    src: 'css/style.minify.css',
                },
            },

            imageoptim: {
                options: {
                    quitAfter: true
                },

                myTask: {
                    src: ['www/img']
                }
            },

            svgmin: {
                options: {
                    plugins: [
                        {
                            removeViewBox: false
                        },

                        {
                            removeUselessStrokeAndFill: false
                        }
                    ]
                },
                dist: {
                    files: {
                        'dist/unicorn.svg': 'app/unicorn.svg'
                    }
                }
            },

            watch: {
                html: {
                    files: '*.html',
                    options: {
                        livereload: true,
                    }
                },

                css: {
				    files: '**/*.scss',
				    tasks: ['sass'],
                    options: {
                        livereload: true,
                    },
			    },
            }
        }
    );

    // Grunt task(s)
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('css', ['sass', 'autoprefixer', 'csslint']);
    grunt.registerTask('minImg', ['imageoptim']);
    grunt.registerTask('minSvg' ['svgmin']);
    grunt.registerTask('js', ['jshint', 'uglify']);
};
