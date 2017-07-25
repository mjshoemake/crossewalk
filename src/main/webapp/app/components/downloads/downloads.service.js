// Service
angular.module('app.downloads').service('downloadsService', function() {
	var list = 
		[
			{
				"name" : "Manager Resume",
				"imageUrl" : "ngjs/images/thumbnails/manager-resume.png",
				"docUrl" : "ngjs/doc/manager-resume.docx"
			}, 
			{
				"name" : "Developer Resume",
				"imageUrl" : "ngjs/images/thumbnails/developer-resume.png",
				"docUrl" : "ngjs/doc/developer-resume.docx"
			}, 
			{
				"name" : "Cover Letter",
				"imageUrl" : "ngjs/images/thumbnails/cover-letter.png",
				"docUrl" : "ngjs/doc/leadership-cover-letter.docx"
			}
		]; 

    this.getAll = function() {
        return list;
    }

});

