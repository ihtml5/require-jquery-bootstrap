requirejs.config({
    baseUrl: 'assets/js/lib',
    paths: {
        app: '../app',
        util: '../utils',
        plugins: '../plugins'
    },
    shim: {
	    'backbone': {
	      'deps': ['underscore', 'jquery'],
	      'exports': 'Backbone'
	    }
    }
});
