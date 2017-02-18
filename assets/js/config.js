requirejs.config({
    baseUrl: 'assets/js/lib',
    paths: {
        'app': '../app',
        'utils': '../utils',
        'plugins': '../plugins',
        'jquery': 'jquery',
        'bootstrap': 'bootstrap',
        'bootstrap.table': 'bootstrap.table',
        'bootstrap.multiselect': 'bootstrap.multiselect',
        'exshim': '../shim/index',
        'jquery-private': '../shim/jquery-private'
    },
    // map: {
    //   '*': { 'jquery': 'jquery-private'},
    //   'jquery-private': { 'jquery': 'jquery'}
    // },
    shim: {
	    'backbone': {
	      'deps': ['underscore', 'jquery'],
	      'exports': 'Backbone'
	    },
      'exshim': {
        // shimEx指的是模块中定义的函数
        exports: 'shimEx',
        init: function() {
          return {
            exshim: 'shimEx',
            jsonToStr: 'JsonToStr'
          }
        }
      },
      "bootstrap": {
          'deps': ["jquery"]
      },
      "bootstrap.table": {
        'deps':["jquery","bootstrap"]
      },
      "bootstrap.": {
        'deps':["jquery","bootstrap"]
      }
    }
});
