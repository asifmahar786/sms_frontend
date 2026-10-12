import { useEffect, useState } from "react";

const API_URL = "https://smsbackend-theta.vercel.app/students";

function Students() {

  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  // ==========================
  // 2. POST - INSERT STUDENT
  // ==========================

  async function addStudent(e) {

    e.preventDefault();

    const studentData = {
      name,
      email,
      course
    };

    try {

      const response = await fetch(API_URL, {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(studentData)

      });

      if (!response.ok) {
        throw new Error("Failed to add student");
      }

      alert("Student Added Successfully");

      setName("");
      setEmail("");
      setCourse("");

    } catch (error) {

      console.log(error);

    }

  }
  return (
    <div>
      <h1>Student Management System</h1>
      <h2>Add New Student</h2>
      <form onSubmit={addStudent}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />

        <button type="submit">
          Add Student
        </button>

      </form>

    </div>

  );

}
export default Students;
