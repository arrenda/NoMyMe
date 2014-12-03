module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			src: ['Gruntfile.js', '*.js']
		},
    connect: {
      server: {
        options: {
          port: 8080,
          hostname: '0.0.0.0',
          keepalive: true
        }
      }
    }
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
  
	grunt.registerTask('default', ['jshint','connect']);

};
