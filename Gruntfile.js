module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          // destination file and source file       
          "src/main/webapp/assets/css/theme2.0.2.css": "less/theme2.less", 
          "src/main/webapp/assets/css/03-headroom.css": "less/headroom.less" 
        }
      }
    },
    watch: {
      includeSource: {
        // Watch for added and deleted scripts to update index.html
        files: ['src/main/webapp/app/**/app.module.js',
                'src/main/webapp/app/**/app.service.js',
                'src/main/webapp/app/shared/**/*module.js',
                'src/main/webapp/app/shared/**/*directive.js',
                'src/main/webapp/app/component/**/*module.js',
                'src/main/webapp/app/component/**/*service.js',
                'src/main/webapp/app/component/**/*controller.js',
                'src/main/webapp/app/component/**/*directive.js',
                'src/main/webapp/assets/**/*.css',
                
        ],
        tasks: ['includeSource'],
        options: {
          event: ['added', 'deleted']
      	}
      },
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },
    includeSource: {
        options: {
            //This is the directory inside which grunt-include-source will be looking for files
            basePath: 'src/main/webapp'
        },
        app: {
            files: {
                //Overwriting index.html
                'src/main/webapp/index.html': 'src/main/webapp/index.html'
            }
        }
    }
  });

	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-include-source');

	grunt.registerTask('default', ['less', 'includeSource', 'watch']);
};