import User from '../models/User';

class UserController {

    getAll = (req, res) => {
        try {
            User.getAll().then(users => res.send(users));
            console.log("get ALL :D ");
        } catch (err) {
            res.send("there is an error: ", err);
        }
    }
    
    getOne = (req, res) => {
        try {
            const id = parseInt(req.params.id);
            User.getById(id)
                .then(user => {
                    if (user) res.send(user)
                    res.status(404).send({ 'message': 'not found user' });
                });
        } catch(err) {    
            res.status(400).send("there is an error ", err);
        }
    }
    
    addUser = (req, res) => {
        const user = {
            userName: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
        }
        try {
            User.addOne(user).then(user => res.send(user));
        } catch (err) {
            res.status(400).send(err);
        }
    }
    
    updateUser = (req, res) => {
        const userValue = {
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
        };
        try {
            const id = parseInt(req.params.id);
            User.getById(id)
                .then(user => {
                    if (user) {
                        user.update({userName: userValue.userName, firstName: userValue.firstName,
                            lastName: userValue.lastName, email: userValue.email }, 
                            {fields: ['userName', 'firstName', 'lastName', 'email']})
                            .then(() => res.status(201).send({ "message": "user updated !"}));
                    } else {
                        res.status(404).send({ 'message': 'not found user' });
                    }
                });
        } catch (err) {
            res.status(400).send("there is an Error in PUT method ", err);
        }
    }
    
    deleteUser = (req, res) => {
        try {
            const id = parseInt(req.params.id);
            User.getById(id)
                .then(user => {
                    if (user) {
                        user.destroy();
                        res.status(201).send({ "message": "user deleted !"})
                    } 
                    res.status(404).send({ 'message': 'not found user' });
                });
        } catch (err) {
            res.send("there is an Error in DELETE ", err);
        }
    }
    
}

module.exports = UserController;