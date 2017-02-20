{
    appDir: './',
    mainConfigFile: './assets/js/config.js',
    dir: './dist',
    modules: [
        //First set up the common build layer.
        {
            //module names are relative to baseUrl
            name: '../config',
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            include: ['jquery',
                      'bootstrap',
                      'bootstrap.table',
                      'bootstrap.multiselect'
            ]
        },

        {
            //module names are relative to baseUrl
            name: 'app/list',
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            exclude: ['../config']
        },
        {
            //module names are relative to baseUrl
            name: 'app/home',
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            exclude: ['../config']
        }
        //Now set up a build layer for each page, but exclude
        //the common one. "exclude" will exclude
        //the nested, built dependencies from "common". Any
        //"exclude" that includes built modules should be
        //listed before the build layer that wants to exclude it.
        //"include" the appropriate "app/main*" module since by default
        //it will not get added to the build since it is loaded by a nested
        //requirejs in the page*.js files.
    ],
    fileExclusionRegExp:/^(r|build)\.js|.*\.scss$/,
    optimizeCss: 'standard',
    removeCombined: true,
    optimize: 'uglify2',
    generateSourceMaps: true,
    preserveLicenseComments: false
}
