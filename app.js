const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import des routes
const dotRoutes = require('./routes/dot.js');

// Log toutes les req
app.use(morgan('dev'));

app.use(cors());

// Permet d'analyser les données des req
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Utilisation des routes
app.use('/dot', dotRoutes);

//Gestion des erreurs, ce middleware s'active si aucune des routes ne correspond
app.use((req, res, next) => {
    const error = new Error("Non reconnu");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;