/*jshint node:true */
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({
    jshint: {
      all: ['*.js']
    },
    qunit: {
      all: ['test/index.html']
    },
    sass: {
      dist: {
        files: {
          'dist/qunit-theme-light.css': 'src/qunit-theme-light.scss'
        }
      }
    },
    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      sass: {
        files: ['src/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('dev', ['sass', 'watch']);
  grunt.registerTask('test', ['qunit']);
};
