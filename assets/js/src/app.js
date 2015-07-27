var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var datepicker = require('../vendor/bootstrap-datepicker/js/bootstrap-datepicker');
var moment = require('moment');
var bootstrap = require('bootstrap');


var template = require('./templates/purchase_order.html');

var manageOrderView = Backbone.View.extend({
    initialize : function () {
        this.on('rendered',this.afterRender)
    },
    render : function () {
        this.$el.html(template({ name : 'Saray'}));
        this.trigger('rendered');
        return this;
    },
    afterRender : function () {
        this.$('.date-container input').val(moment().format('MM/DD/YYYY'));
        this.$('.date-container input').datepicker({
            format: 'mm/dd/yyyy',
            startDate : moment().format('MM/DD/YYYY')
        });
    }
});


module.exports = manageOrderView;