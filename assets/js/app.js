// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
// Start loading the main app file. Put all of
// your application logic in there.

//Load common code that includes config, then load the app logic for this page.

requirejs(['plugins/domReady','pollify/index'], function (dom,allshim){
	requirejs(['./config'], function (common) {
		requirejs(['app/home']);
	});
});
