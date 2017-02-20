requirejs(['plugins/domReady'], function (dom){
	requirejs(['./config'], function (common) {
		requirejs(['app/list']);
	});
});