exports.up= async function(knex){
    try{
        await knex.schema.createTable("posts", (table) => {
            table.increments("id").primary();
            table.string("content").notNullable().unique();
            table
              .integer("user_id")
              .unsigned()
              .notNullable()
              //The posts table references the users table through the user_id column.
              .references("id").inTable("users")
              .onDelete("CASCADE") // Delete post if the uer is deleted
              .onUpdate("CASCADE");// Update foreign key  on user 'id' changes
        });
        console.log("Table 'posts' created successfully ");
    } catch(error) {
        console.log("Error creating able 'posts' :", error);
        throw error;
    }
};

exports.down = async function(knex) {
    try{
        await knex.cshema.dropTableIfExits("posts");
        console.log("Table 'posts' dropped succesfully");
    } catch (error) {
        console.error("Error dropping table 'posts':", error);
    }
};