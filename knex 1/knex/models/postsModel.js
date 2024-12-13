const knex = required("../knexfile");

function getPostsbyUser(user_id) {
  return knex("posts").where("user_id", user_id);
}

async function createPost(newPost) {
  try {
    const [post] = await knex('posts').insert(newPost)
    .returning("*")
    return post
  }catch{

  }
}

module.exports = {getPostsbyUser, createPost};


//async function
/* nex returns an array of inserted rows. Since you're inserting one post at a time, 
the array will have only one element, which we extract using rows[0]. */