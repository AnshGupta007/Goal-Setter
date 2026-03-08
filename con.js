const sql = require("mssql");

// SQL Server configuration for localhost
const config = {
    user: "sa",                 // SQL Server username (default admin is "sa")
    password: "your_password",  // Replace with your actual password
    server: "localhost",        // SQL Server running locally
    database: "master",         // Connect to 'master' database to create a new one
    options: {
        encrypt: false,          // Disable encryption for local development
        trustServerCertificate: true,
    },
};

// Function to create a new database
async function createDatabase() {
    try {
        // Connect to SQL Server
        const pool = await sql.connect(config);
        console.log("Connected to SQL Server!");

        // SQL query to create a database
        const dbName = "MyNewDatabase"; // Change database name as needed
        const createDbQuery = `CREATE DATABASE ${dbName}`;

        // Execute the query
        await pool.request().query(createDbQuery);
        console.log(`Database '${dbName}' created successfully!`);

        // Close the connection
        await sql.close();
    } catch (err) {
        console.error("Error creating database:", err);
    }
}

// Run the function
createDatabase();