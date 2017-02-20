define(function(require) {
  var utils = require('../utils/index');
  var $ = require('jquery');
  var $multiselect = require('bootstrap.multiselect');
  var $btsTable = require('bootstrap.table');
  var $ownSelect = $('#ownSelect');
  var $ownTable = $('#ownTable');
  var $bts = require('bootstrap');
  var allShims = require('exshim');
  $ownSelect.hide().multiselect({
    nonSelectedText: '请选择使用require'
  });
  $ownTable.bootstrapTable({
    columns: [{
        field: 'id',
        title: 'Item ID'
    }, {
        field: 'name',
        title: 'Item Name'
    }, {
        field: 'price',
        title: 'Item Price'
    }],
    data: [{
        id: 1,
        name: 'Item 1',
        price: '$1'
    }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
    }]
  });
  utils.getVersion();
  $('[data-toggle="tooltip"]').popover();
  console.dir(allShims);
});
