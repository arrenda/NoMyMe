var db = require('../util/mongodb').db;
var toObjectID = require('../util/mongodb').toObjectID;
var col = db.bind('media');

function create(media, callback) {
	this.insert(media, callback);
}

function getMedia(mediaId, callback) {
	this.findById(mediaId, callback);
}

function getAll(callback) {
	this.find({}, function(err, cursor) {
		if (err) {
			return callback(err);
		}

		cursor.toArray(callback);
	});
}

function getById(mediaId, callback) {
	this.findOne({_id: toObjectID(mediaId)}, callback);
}

/*function delAll(callback) {
	this.remove({}, callback);
}
*/
function delMedia(mediaId, callback) {
	this.remove({_id: toObjectID(mediaId)}, callback);
}

function updateMedia(mediaId, update, callback) {
	var query = {
		_id: toObjectID(mediaId)
	};
	
	var sort = [
		['_id', 1]
	];
	
	col.findAndModify(query, sort, update, {new: true}, callback);
}

col.bind({
	create: create,
	getMedia: getMedia,
	getAll: getAll,
  getById: getById,
	//delAll: delAll,
	delMedia: delMedia,
	updateMedia: updateMedia
});

module.exports = col;