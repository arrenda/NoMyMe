var profileModel = require('../profile');
var assert = require('chai').assert;

describe('Profile tests', function() {
  describe('Sets & Gets Profile tests', function() {
    
    var profile;
    
    //initializing profile for unique tests
    beforeEach(function(){
      profile = profileModel.create();
    });
    
    it('Should user name pile633', function() {
      assert.equal(profile.getUserName(), '');
      profile.setUserName('pile633');
      assert.equal(profile.getUserName(), 'pile633');
    });
    
    it('Should passwd 123456', function() {
      assert.equal(profile.getPasswd(), '');
      profile.setPasswd('123456');
      assert.equal(profile.getPasswd(), '123456');
    });
    
    it('Should films [300, Titanic, Torrente]', function() {
      assert.equal(profile.getFilm().length, 0);
      profile.setFilm(['300','Titanic','Torrente']);
      assert.equal(profile.getFilm()[0], '300');
      assert.equal(profile.getFilm()[1], 'Titanic');
      assert.equal(profile.getFilm()[2], 'Torrente');
    });
    
    it('Should series [LQSA, SAO, Juego de Tronos, BigBang Theory]', function() {
      assert.equal(profile.getSerie().length, 0);
      profile.setSerie(['LQSA', 'SAO', 'Juego de Tronos', 'BigBang Theory']);
      assert.equal(profile.getSerie()[0], 'LQSA');
      assert.equal(profile.getSerie()[1], 'SAO');
      assert.equal(profile.getSerie()[2], 'Juego de Tronos');
      assert.equal(profile.getSerie()[3], 'BigBang Theory');
    });
    
    it('Should books [Memorias de Idhun, El Nombre del Viento]', function() {
      assert.equal(profile.getBook().length, 0);
      profile.setBook(['Memorias de Idhun', 'El Nombre del Viento']);
      assert.equal(profile.getBook()[0], 'Memorias de Idhun');
      assert.equal(profile.getBook()[1], 'El Nombre del Viento');
    });
  });
});
 