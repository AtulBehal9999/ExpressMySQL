const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(bodyParser.json());

// app.get()
// app.post()
// app.put()
// app.delete()


//Connection with database...
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "mydb"
});

//// CREATE DATABASE mydb.....
// con.connect(function(error){
//     if(error) throw error;
//     console.log("Connected!!");
//     con.query("CREATE DATABASE mydb", function(error){
//         if(error) throw error;
//         console.log("Database Created");
//     });
// });

//// CREATE TABLE students.....
// con.connect(function (error){
//     if(error) throw error;
//     console.log("Connected!!");
//     var sql = "CREATE TABLE students(id int auto_increment primary key, name varchar(55))";
//     con.query(sql, function(error, result){
//         if(error) throw error;
//         console.log("Table Created");
//     });
// });


//// INSERT DATA INTO students.....
// con.connect(function(error){
//     if(error) throw error;
//     console.log("Connected!!");
//     var sql = "INSERT INTO students(name) values('abc'),('efg'),('xyz')";
//     con.query(sql, function(error, result){
//         if(error) throw error;
//         console.log("3 rows Inserted into students");
//     });
// });

//// INSERT MULTIPLE VALUES INTO students
// con.connect(function(error){
//     if(error) throw error;
//     console.log("Connected!!");
//     var sql = "INSERT INTO students(name) values? ";
//     var values = [
//         ['atul'],
//         ['behal'],
//         ['rohan'],
//         ['sahil'],
//         ['kumar']
//     ];
//     con.query(sql, [values], function(error, result){
//         if(error) throw error;
//         console.log("Number of rows inserted " + result.affectedRows);
//     });
// });


//// TO SELECT THE DATA AND DISPLAY THE RESULT
// con.connect(function(error) {
//     if (error) throw error;
//     con.query("SELECT * FROM students", function (error, result, fields) {
//       if (error) throw error;
//       console.log(result);
//     });
// });

//// TO SELECT PARTICULAR COLUMN 
// con.connect(function(error) {
//     if (error) throw error;
//     con.query("SELECT name FROM students", function (error, result, fields) {
//       if (error) throw error;
//       console.log(result);
//     });
// });


//// SELECT record FROM TABLE students AND DISPLAY fields OBJECT
// con.connect(function(error) {
//     if (error) throw error;
//     con.query("SELECT name FROM students", function (error, result, fields) {
//       if (error) throw error;
//       console.log(fields);
//     });
// });


//// USE OF order by OPERATOR
// con.connect(function(error) {
//     if (error) throw error;
//     con.query("SELECT * FROM students order by name", function (error, result, fields) {
//       if (error) throw error;
//       console.log(result);
//     });
// });

//// UPDATE PARTICULAR COLUMN
// con.connect(function(error) {
//     if (error) throw error;
//     var sql = "UPDATE students SET name='kumar sahil' where id =3";
//     con.query(sql, function(error, result){
//       if (error) throw error;
//       console.log("Number of rows deleted " + result.affectedRows);
//     });
// });

//// DELETE ANY RECORD FROM TABLE
// con.connect(function(error) {
//     if (error) throw error;
//     var sql = "DELETE FROM students where name='abc'";
//     con.query(sql, function(error, result){
//       if (error) throw error;
//       console.log("Number of rows deleted " + result.affectedRows);
//     });
// });


/// DROP TABLE STUDENTS
// con.connect(function(error) {
//     if (error) throw error;
//     var sql = "DROP TABLE students";
//     con.query(sql, function(error, result){
//       if (error) throw error;
//       console.log("Table Deleted");
//     });
// });

//PORT
//const port = process.env.PORT || 8080;
app.listen(8080, function(req,res) { 
    console.log('Listening on port 8080...')
});