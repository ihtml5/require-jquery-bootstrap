// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
// Start loading the main app file. Put all of
// your application logic in there.

//Load common code that includes config, then load the app logic for this page.

require(['plugins/domReady'], function (dom){
	console.info('domReady');
	console.dir(dom);
	requirejs(['./common'], function (common) {
		requirejs(['app/main']);
	});
});