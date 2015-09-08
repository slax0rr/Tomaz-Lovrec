module.exports = function(grunt){
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true
                },
                src: ['**/*.html']
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/core/*.js', 'bower_components/material-design-lite/material.min.js'],
                dest: '../public/js/all.js'
            }
        },

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: ['js/component/**'],
                        dest: '../public/',
                    },
                    {
                        expand: true,
                        src: ['js/lib/**'],
                        dest: '../public/',
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/material-design-lite/',
                        src: ['material.min.js.map'],
                        dest: '../public/js/'
                    },
                    {
                        expand: true,
                        cwd:'bower_components/material-design-lite/',
                        src: ['material.min.css', 'material.min.css.map'],
                        dest: '../public/css/'
                    }
                ]
            }
        },

        uglify: {
            build: {
                files: {
                    '../public/js/all.min.js': ['../public/js/all.js']
                }
            }
        },

        jshint: {
            files: ['js/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },

        // autoprefix compass created stylesheet
        autoprefixer: {
          dev: {
            options: {

            },
            src: '../public/css/style.css',
            dest: '../public/css/style.css'
          }
        },

        // compile sass scripts into css
        sass: {
            dist: {
                options: {
                    style: "compressed",
                },
                files: [{
                    src: ["./style/style.sass"],
                    dest: "../public/css/style.css",
                    ext: ".css"
                }]
            },
            dev: {
                options: {
                    trace: true,
                    sourcemap: "file",
                    style: "expanded",
                    lineNumbers: true,
                },
                files: [{
                    src: ["./style/style.sass"],
                    dest: "../public/css/style.css",
                    ext: ".css"
                }, {
                    src: ["./style/landingpad.sass"],
                    dest: "../public/css/landingpad.css",
                    ext: ".css"
                }]
            }
        },

        // watch task - realtime
        watch: {
            compass: {
                files: ['**/*.{scss,sass}'],
                tasks: ['sass:dev', 'autoprefixer:dev']
            },
            js: {
                files: ['js/core/*.js', 'js/component/*.js'],
                tasks: ['concat', 'copy']
            }
        }
    });

    // Common Tasks
    grunt.registerTask('default', ['sass:dev', 'autoprefixer:dev', 'concat', 'copy']);
    grunt.registerTask('build', ['sass:dist', 'autoprefixer:dev', 'concat', 'uglify', 'copy']);

};
