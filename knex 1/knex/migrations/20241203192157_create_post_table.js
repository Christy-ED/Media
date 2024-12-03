exports.up= async function(knex){
    try{
        await knex.schema.createTable("users", (table) => {
            table.increment("id").primary();
            table.string("content").notNullable().unique();
            table
            .integer("user_id")// Foreign key column
            .unsigned()
            .notNullable()
            .references("id")// Reference the id colum in the users table
            .inTable("users")
            .onDelete("CASCADE")// Delete post if the uer is deleted
            .onUpdate("CASCADE")// Update foreign key  on user 'id' changes
          
        })
  
    }
};