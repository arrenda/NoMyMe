/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Profile(){
    this._username = '';
    this._passwd = '';
    this._films = [];
    this._series = [];
    this._books = [];
}

Profile.prototype.getUserName = function()
{
    return this._username;
};

Profile.prototype.getPasswd = function()
{
    return this._passwd;
};

Profile.prototype.setUserName = function(username)
{
    this._username = username;
};

Profile.prototype.setPasswd = function(passwd)
{
    this._passwd = passwd;
};

Profile.prototype.getFilm = function()
{
    return this._films;
};

Profile.prototype.getSerie = function()
{
    return this._series;
};

Profile.prototype.getBook = function()
{
    return this._books;
};

Profile.prototype.setFilm = function(name,state,time)
{
    var film = {
        _name : name,
        _state : state,
        _time : time
    };
    this._films.push(film);
};

Profile.prototype.setSerie = function(name,state,chapter)
{
    var serie = {
        _name : name,
        _state : state,
        _chapter : chapter
    };
    this._series.push(serie);

};

Profile.prototype.setBook = function(name,state,page)
{
    var book = {
        _name : name,
        _state : state,
        _page : page
    };
    this._books.push(book);
};

Profile.prototype.checkPassword = function(password)
{
    return this._passwd === password;
};

Profile.prototype.setMedia = function(type, options)
{
    this[type].push(options);
};

module.exports = {
    create: function()
    {
        return new Profile();
    }
};

