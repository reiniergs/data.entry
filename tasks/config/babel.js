module.exports = function(grunt) {

    grunt.config.set('babel', {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'assets/js/manage_orders.js': 'assets/js/src/manage_orders.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');
};


