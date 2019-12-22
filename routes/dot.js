const express = require ('express');
const router = express.Router();

const {sortByPixel} = require('../algorithm/utils.js');
const circleMinRitter = require('../algorithm/algoCercleMinRitter.js');
const graham = require('../algorithm/algoGraham.js')
const gen = require('../algorithm/gen.js');

router.get('/', (req, res, next) => {
    res.status(200).json(algo1(req.body.val));
});

router.post('/gen', (req, res, next) => {
    res.status(200).json(gen.generate(req.body.number, req.body.width, req.body.height));
});

router.post('/generate-gaussian', (req, res, next) => {
    res.status(200).json(gen.generateGaussian(req.body.number, req.body.width, req.body.height));
});

router.post('/circle-min-ritter', (req, res, next) => {
    res.status(200).json(circleMinRitter(req.body.list));
});

router.post('/sort-by-pixel', (req, res, next) => {
    res.status(200).json(sortByPixel(req.body.list));
});

router.post('/graham', (req, res, next) => {
    res.status(200).json(graham(req.body.list));
});

module.exports = router;