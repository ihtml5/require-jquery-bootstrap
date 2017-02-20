requirejs.config({
    baseUrl: 'assets/js/lib',
    //为资源添加后缀，强制其从服务器上拉取资源
    urlArgs: 'v='+new Date().getTime(),
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
      "bootstrap.multiselect": {
        'deps':["jquery","bootstrap"]
      }
    }
});
