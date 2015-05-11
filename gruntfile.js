module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      options: {
        compress: true,
        mangle: true,
        banner: "/*---------kangw3n 2015-----------*/\n"
      },
      my_target: {
        files: {
          'application/js/script.js': ['dev/js/script.js']
        }
      }
    },
    jshint: {
      options: {
        eqeqeq: true,
        curly: true
      },
      target: {
        src: ['dev/js/other.js', 'dev/js/script.js']
      }
    },
    concat: {
      options: {
        seperator: ":",
        banner: "/*---------kangw3n 2015-----------*/\n"
      },
      target: {
        src: ['dev/js/other.js', 'dev/js/script.js'],
        dest: 'application/js/script.js'
      }
    },
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        }
      }
    },
    watch: {
      options: { livereload: true },
      script: {
        files: ['dev/js/other.js', 'dev/js/script.js'],
        tasks: ['uglify']
      },
      sass: {
        files: ['dev/sass/*.scss'],
        tasks: ['compass:dev']
      },
      html: {
        files: ['application/*.html']
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask("default", 'watch')


};
