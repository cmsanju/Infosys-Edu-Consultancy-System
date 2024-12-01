import React, { createContext, useState, useContext } from 'react';

const CourseContext = createContext();

export const useCourseContext = () => {
  return useContext(CourseContext);
};

export const CourseProvider = ({ children }) => {
  const [myCourses, setMyCourses] = useState([]);

  const addCourse = (course) => {
    setMyCourses((prevCourses) => [...prevCourses, course]);
  };

  return (
    <CourseContext.Provider value={{ myCourses, addCourse }}>
      {children}
    </CourseContext.Provider>
  );
};
