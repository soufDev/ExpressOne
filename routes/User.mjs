const Router = require('express').Router;
const UserController = require('../controllers/UserController');

const router = Router();

router.get('/users', (req, res) => {
    controller.getAll(req, res);
});

router.get('/user/:id', (req, res) => {
    controller.getOne(req, res);
});

router.post('/users', (req, res) => {
    controller.addUser(req, res);
});

router.put('/user/:id', (req, res) => {
    controller.updateUser(req, res);
});

router.delete('/user/:id', (req, res) => {
    controller.deleteUser(req, res);
});

module.exports = router;