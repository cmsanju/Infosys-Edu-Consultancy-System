import React, { useEffect, useState } from "react";
import './Courses.css'
function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Retrieve courses from localStorage or initialize as an empty array
    const savedCourses = JSON.parse(localStorage.getItem("myCourses")) || [];

    // Filter out invalid or duplicate courses
    const validCourses = savedCourses.filter(
      (course, index, self) =>
        course && // Ensure course is not null
        typeof course === "object" && // Ensure course is an object
        course.title && // Ensure course has a title
        self.findIndex((c) => c?.title === course.title) === index // Remove duplicates by title
    );

    // Set valid courses in state
    setCourses(validCourses);
  }, []);

  if (courses.length === 0) {
    return <div>No courses have been added yet.</div>;
  }

  return (
    <div className="courser">
  <br />
  <br />
  <h2 className="ncourse">My Courses</h2>
  <div className="course-grid">
    {courses.map((course, index) => (
      <div key={index} className="course">
        {/* Only render valid properties */}
        {course.image ? <img src={course.image} alt={course.title} /> : <div>No Image Available</div>}
        <h3>{course.title || "No Title Available"}</h3>
        <p>{course.description || "No Description Available"}</p>
        <button className="card-button">Start Course</button>
      </div>
    ))}
  </div>
</div>

  );
}

export default Courses;
