module.exports = function(grunt) {

  grunt.config.set('compass', {
      dev: {
        options: {
          sassDir: 'assets/styles',
          cssDir:  'assets/styles'
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
};