define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');
    var util = require('util/index');
    var backbone = require('Backbone');
    // Load library/vendor modules using
    // full IDs, like:
    var print = require('util/print');
    messages.sayHello();
    print(messages.getHello());
    console.error('gw');
    util.gw();
    console.info('backbone',Backbone);
});