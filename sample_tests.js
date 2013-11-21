define([
    'intern!object',
    'intern/chai!assert',
    './sample'
], function (registerSuite, assert, Sample) {

    registerSuite({
        name: 'Sample Tests',

        'Can add numbers': function () {
            assert.equal(Sample.addstuff(1, 2), 3);
        }
    })
});
