import Sequelize from 'sequelize';
import connection from '../db/connection';

const User = {};

User = connection.sequelize.define('user', {
    userName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    firstName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING }
});

User.getAll = () => {
    return User.findAll();
}

User.getById = (id) => {
    return User.findById(id).then(user => user);
}

User.update = (user) => {;
    return user.update({userName: user.userName, firstName: user.firstName,
        lastName: user.lastName, email: user.email });
}

User.delete = (user) => {
    return user.destroy();
}

User.addOne = (user) => {
    return User.create(user);
}

module.exports = User;
