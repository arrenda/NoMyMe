var express = require('express');
var router = express.Router();
var mediaManager = require('../manager/media');

/* ROUTES */
  router.post('/', createMedia);
  router.put('/:mediaId', updateMedia);
  router.get('/:mediaId', getMedia);
  router.delete('/:mediaId', delMedia);
  router.get('/', getAll);
/* END ROUTES */

function createMedia(req, res) {
  
  var newMedia = {
		type: req.body.type,
    name: req.body.name,
		description: req.body.desc
	};
  
  mediaManager.create(newMedia, function(err, result) {
		res.json(result);
	});
}

function updateMedia(req, res) {
  
  var mediaId = req.params.mediaId;
  var newMedia = {
		type: req.body.type,
    name: req.body.name,
		description: req.body.desc
	};

	mediaManager.updateMedia(mediaId, newMedia, function(err, newMedia) {
		if (newMedia === null) {
			next(new Error(new Error(scoreId + ' not exists')));
		} else {
			res.json(newMedia);
		}
	});
}

function delMedia(req, res, next) {
  var mediaId = req.params.mediaId;
  mediaManager.delMedia(req.params.mediaId, function(err, result) {
		if (result === 0) {
			next(new Error(mediaId + ' not exists'));
		} else {
			res.send('Media[' + mediaId + '] deleted.');
		}
	});
}

function getMedia(req, res, next) {
	var mediaId = req.params.mediaId;
	mediaManager.getById(mediaId, function(err, media) {
		if (media) {
			res.json(media);
		} else {
			next(new Error(new Error(mediaId + ' not exists')));
		}
	});
}

function getAll(req, res) {
	mediaManager.getAll(function(err, medias) {
		res.json(medias);
	});
}

module.exports = router;