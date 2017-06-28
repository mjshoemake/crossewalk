// Service
angular.module('app.downloads').service('downloadsService', function() {
	var list = 
		[
			{
				"name" : "Manager Resume",
				"imageUrl" : "assets/images/thumbnails/manager-resume.png",
				"docUrl" : "assets/doc/manager-resume.docx"
			}, 
			{
				"name" : "Developer Resume",
				"imageUrl" : "assets/images/thumbnails/developer-resume.png",
				"docUrl" : "assets/doc/developer-resume.docx"
			}, 
			{
				"name" : "Cover Letter",
				"imageUrl" : "assets/images/thumbnails/cover-letter.png",
				"docUrl" : "assets/doc/leadership-cover-letter.docx"
			}
		]; 

    this.getAll = function() {
        return list;
    }

});

