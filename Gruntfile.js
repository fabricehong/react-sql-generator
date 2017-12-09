module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    comboall: {
      options: {
        // Task-specific options go here.
      },
      main:{
        files: [
            {'build/combo.html': ['build/index.html']}
        ]
      },
      your_target: {
        // Target-specific file lists and/or options go here.
      },
    },
  });

  grunt.loadNpmTasks('grunt-combo-html-css-js');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);

};
