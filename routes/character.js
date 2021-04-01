const express = require('express');
const routes = express();
// we have a controller that we want to use, so we import this
const CharacterController = require('../controllers/character');
// because this is class, so dont forget to call first
const characterController = new CharacterController();

// register route / which is home, and use the controller function
routes.get('/', characterController.getAllCharacter);
routes.post('/add', characterController.insertCharacter);
routes.put('/:id', characterController.updateChara);
routes.delete('/:id/soft', characterController.softDelete);
routes.delete('/:id/hard', characterController.hardDelete);

module.exports = routes;
