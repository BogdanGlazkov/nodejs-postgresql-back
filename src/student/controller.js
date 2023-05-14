const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getStudentById, [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  pool.query(queries.checkEmailExists, [email], (error, result) => {
    if (error) throw error;
    if (result.rows.length) {
      res.send("This email already exists");
      return;
    }

    pool.query(queries.addStudent, [name, email, age, dob], (error, result) => {
      if (error) throw error;
      res.status(201).send("Student created successfully");
    });
  });
};

const removeStudent = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getStudentById, [id], (error, result) => {
    if (error) throw error;
    if (!result.rows.length) {
      res.send("Student does not exists in the database");
    }
  });

  pool.query(queries.removeStudent, [id], (error, result) => {
    if (error) throw error;
    res.status(200).send("Student has been removed");
  });
};

module.exports = { getStudents, getStudentById, addStudent, removeStudent };
