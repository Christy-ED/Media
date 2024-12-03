const knex = required("../knexfile");

function getPostsbyUser(user_id) {
  return knex("posts").where("user_id", user_id);
}

function createPost(newPost) {
  return knex("posts").insert(newPost)
  .returning("*") //ensures that the inserted post is returned from the database
  .then((rows) => rows[0]); 
}

module.exports = {getPostsbyUser, createPost};


/* nex returns an array of inserted rows. Since you're inserting one post at a time, 
the array will have only one element, which we extract using rows[0]. */