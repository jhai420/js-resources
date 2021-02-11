const express = require('express');
const resourceCtrl = require('../controllers/resources-ctrl');
const router = express.Router();
const path = require('path');

//API Routes

router.get('/resource', resourceCtrl.getResources)
router.get('/resource/:category', resourceCtrl.getCategories)
router.post('/resource', resourceCtrl.createResource);
router.put('/resource/:id', resourceCtrl.updateResource);
router.delete('/resource/:id', resourceCtrl.deleteResource);

module.exports = router;