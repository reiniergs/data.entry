module.exports = function(grunt) {

    grunt.config.set('browserify', {
        dist : {
                files : {
                    'assets/js/app.js' : ['assets/js/src/app.js']
                },
                options : {
                    browserifyOptions : {
                        standalone : 'DATA_ENTRY'
                    }
                }
            }
    });

    grunt.loadNpmTasks('grunt-browserify');
};