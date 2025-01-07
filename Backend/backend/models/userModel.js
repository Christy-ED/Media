const knex = require('../knexfile');

function findByUsername(username) {
    return knex('users').where({ username }).first();
};

function findById(id){
    return knex("users").where({id}).first();
}

function createUser(user){
    return knex("users").insert(user);
}


module.exports = {findByUsername, findById, createUser};