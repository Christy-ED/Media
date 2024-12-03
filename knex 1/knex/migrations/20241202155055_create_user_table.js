exports.up = async function (knex) {
    try {
        await knex.schema.createTable("users", (table) => {
            table.increments("id").primary();
            table.string("username").notNullable().unique();
            table.string("email").notNullable().unique();
            table.string("password").notNullable();
            table.timestamps(true, true);
        });
        console.log("Table 'users' created successfully");
    } catch (error) {
        console.error("Error creating table 'users':", error);
        throw error;
    }
};

exports.down = async function (knex) {
    try {
        await knex.schema.dropTableIfExists("users");
        console.log("Table 'users' dropped successfully");
    } catch (error) {
        console.error("Error dropping table 'users':", error);
        throw error;
    }
};
