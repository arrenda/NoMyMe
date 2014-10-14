
var profileModel = require('./profile');
var assert = require('chai').assert;

describe('Profile tests', function() {
  describe('Sets & Gets Profile tests', function() {
    
    var profile;
    
    //
    beforeEach(function(){
      profile = profileModel.create();
    });
    
    
    
    it(' should score three points to home team', function() {
      assert.equal(score.getTeamPoints('home'), 0);
      assert.equal(score.getTeamPoints('guest'), 0);
      score.scoreOneBasket('home', 3);
      assert.equal(score.getTeamPoints('home'), 3);
      assert.equal(score.getTeamPoints('guest'), 0);
    });
  });
});
 