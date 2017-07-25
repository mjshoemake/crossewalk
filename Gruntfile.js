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
          "src/main/webapp/ngjs/css/theme2.0.2.css": "less/theme1.less",
          "src/main/webapp/ngjs/css/03-headroom.css": "less/headroom1.less", 
          "angular/src/assets/css/theme2.0.3.css": "less/theme2.less",
          "angular/src/assets/css/headroom.css": "less/headroom2.less" 
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};