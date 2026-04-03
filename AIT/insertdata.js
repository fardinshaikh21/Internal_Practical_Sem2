const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Fardin@2121',
  database: 'fardin'
}); 

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }     
    console.log('Connected to MySQL database'); 
});

app.post('/add', (req, res) => {
 const {Rno, Fname, Saddress, Sclass, Lname} = req.body;
 const sql = 'INSERT INTO student (Rno, Fname, Saddress, Sclass, Lname) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [Rno, Fname, Saddress, Sclass, Lname], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
    } else {
      res.send('Data inserted successfully');
    }
    });
});

app.get('/students', (req, res) => {
  const sql = 'SELECT * FROM student';
    db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data');
    }
        else {
        res.json(results);
    }
    });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});  