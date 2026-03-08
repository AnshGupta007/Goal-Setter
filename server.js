const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');  // To allow requests from other origins (cross-origin resource sharing)

// Create Express app
const app = express();
const port = 3306;  // Or any port you prefer

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',  // Change to your MySQL host (localhost by default)
    user: 'root',  // Change to your MySQL username
    password: '',  // Change to your MySQL password
    database: 'goalsetter'  // Replace with your actual database name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database');
});

// Handle form submission (POST request)
app.post('form2.html', (req, res) => {
    const { FullName, EmailAddress, MobileNumber, PhysicalAddress, dob, Password, Gender } = req.body;

    // Insert user data into the 'users' table
    const query = `INSERT INTO sign (full_name, email, mobile_number, physical_address, dob, password, gender) 
                   VALUES (?, ?, ?, ?, ?, ?, ?)`;

    db.execute(query, [FullName, EmailAddress, MobileNumber, PhysicalAddress, dob, Password, Gender], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error inserting data');
            return;
        }
        res.status(200).send('Registration successful');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});