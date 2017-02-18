define(['jquery','require'],function($) {
	return {
		getWidthFromWin: function() {
			console.log($(window).width())
		},
		version: '1.0.0',
		getVersion: function() {
			console.log(this.version);
		},
		getCssUrl: function(url) {
			return require.toUrl(url);
		}
	}
})
