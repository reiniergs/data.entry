/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

	grunt.config.set('watch', {
		css: {
			files : ['assets/styles/**/*.scss'],
			tasks : ['compass']			
		},
		jsx : {
			files : ['assets/js/src/**/*.js','assets/js/src/**/*.html'],
			tasks : ['browserify']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};
