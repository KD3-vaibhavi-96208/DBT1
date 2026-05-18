const express = require('express');
const db = require('../Express/db/db');

const app = express();

app.use(express.json());

app.get('/courses', (req, res) => {

    const sql = "SELECT * FROM courses";

    db.query(sql, (err, result) => {

        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/courses/:id', (req, res) => {

    const sql = "SELECT * FROM courses WHERE id=?";

    db.query(sql, [req.params.id], (err, result) => {

        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/courses', (req, res) => {

    const { course_name, duration, fees } = req.body;

    const sql =
        "INSERT INTO courses(course_name,duration,fees) VALUES(?,?,?)";

    db.query(
        sql,
        [course_name, duration, fees],
        (err, result) => {

            if (err) {
                res.send(err);
            } else {
                res.send("Course Added");
            }
        }
    );
});


app.put('/courses/:id', (req, res) => {

    const { course_name, duration, fees } = req.body;

    const sql =
        "UPDATE courses SET course_name=?, duration=?, fees=? WHERE id=?";

    db.query(
        sql,
        [course_name, duration, fees, req.params.id],
        (err, result) => {

            if (err) {
                res.send(err);
            } else {
                res.send("Course Updated");
            }
        }
    );
});


app.delete('/courses/:id', (req, res) => {

    const sql = "DELETE FROM courses WHERE id=?";

    db.query(sql, [req.params.id], (err, result) => {

        if (err) {
            res.send(err);
        } else {
            res.send("Course Deleted");
        }
    });
});


app.get('/students', (req, res) => {

    const sql = "SELECT * FROM students";

    db.query(sql, (err, result) => {

        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});


app.get('/students/:id', (req, res) => {

    const sql = "SELECT * FROM students WHERE id=?";

    db.query(sql, [req.params.id], (err, result) => {

        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});


app.post('/students', (req, res) => {

    const { student_name, email, course_id } = req.body;

    const sql =
        "INSERT INTO students(student_name,email,course_id) VALUES(?,?,?)";

    db.query(
        sql,
        [student_name, email, course_id],
        (err, result) => {

            if (err) {
                res.send(err);
            } else {
                res.send("Student Added");
            }
        }
    );
});


app.put('/students/:id', (req, res) => {

    const { student_name, email, course_id } = req.body;

    const sql =
        "UPDATE students SET student_name=?, email=?, course_id=? WHERE id=?";

    db.query(
        sql,
        [student_name, email, course_id, req.params.id],
        (err, result) => {

            if (err) {
                res.send(err);
            } else {
                res.send("Student Updated");
            }
        }
    );
});

app.delete('/students/:id', (req, res) => {

    const sql = "DELETE FROM students WHERE id=?";

    db.query(sql, [req.params.id], (err, result) => {

        if (err) {
            res.send(err);
        } else {
            res.send("Student Deleted");
        }
    });
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});