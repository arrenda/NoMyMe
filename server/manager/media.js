var daoMedia = require('../dao/media');

function create(media, callback) {
  daoMedia.create(media, callback);
}

function updateMedia(mediaId, newMedia, callback) {
  
	var update = {
		$set: newMedia
	};
	
  daoMedia.updateMedia(mediaId, update, callback);
}

function delMedia(mediaId, callback) {
  daoMedia.delScore(mediaId, callback);
}

function getMedia(mediaId, callback) {
  daoMedia.getById(mediaId, callback);
}

function getById(mediaId, callback) {
	daoMedia.getById(mediaId, callback);
}

function checkMediaExists(mediaId) {
  daoMedia.getById(mediaId, function (err, media) {
    if (err) {
      throw err;
    }
    return media !== null;
  });
}

function getAll(callback) {
  daoMedia.getAll(callback);
}

function delMedia(mediaId, callback) {
  daoMedia.delMedia(mediaId, callback);
}


module.exports = {
  create: create,
  updateMedia: updateMedia,
  getAll: getAll,
  delMedia: delMedia,
  getById: getById,
  getMedia: getMedia
};