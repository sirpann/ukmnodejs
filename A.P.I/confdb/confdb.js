import knex from "knex";

const connect = knex({
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '',
      database: 'ukmsdapi',
    },
  });

//   export const createTable= async ()=>{
//     try{
//     await connect.schema.createTable
//     ("todo", (table) => {
//         table.string("alamat", 255).notNullable();
//         table.string("noktp", 255).primary();
//         table.string("nopunggung").notNullable().unique();
//         table.string("nim", 255).notNullable();
//         table.foreign("nopunggung").references("nopunggung").on("player");
    

//         // ... add more columns as needed
//       });
//       console.log('Table "player" created successfully!');
//     } catch (error) {
//       console.error("Error creating table:", error);
//     }
// }
export default connect;