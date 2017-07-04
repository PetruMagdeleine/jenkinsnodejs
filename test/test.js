'use strict';
/*jshint expr: true*/

var server = require('../index');
var chai = require('chai');
var should = chai.should();

describe('T1', function() {

  it('it should be ok', function() {

    var bool = true;
    bool.should.be.eq(true);

  });

});
