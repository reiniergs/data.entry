var $ = require('jquery');

$.fn.qty = function (options) {
    var initOptions = options || {};
    var initValue = options.initValue || 0;
    this.each(function (index,node) {
        var edit = $(node).find('.qty-edit');
        var increase = $(node).find('.qty-increase');
        var decrease = $(node).find('.qty-decrease');
        edit.val(initValue);

        /* validation only number */
        edit.on('input',function (e) {
            e.target.value = e.target.value.replace(/\D/g,'');
        });

        increase.on('click',function (e) {
           edit.val(+edit.val() + 1);
        });

        decrease.on('click',function (e) {
            if (edit.val() > 0)
            edit.val(+edit.val() - 1);
        });


    });

    return this;
}
