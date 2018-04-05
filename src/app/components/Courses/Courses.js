import React from 'react';

const Courses = (props) => {
  const employees = [{
    id: '1',
    name: 'Abhijit',
    designation: 'Senior Software Engineer',
  },
  {
    id: '2',
    name: 'Yogesh',
    designation: 'Senior Test Engineer',
  },
  ];

  const listItems = employees.map((item) =>
  <li key={item.id}>
    <p> Id: {item.id} </p>
    <p> Name: {item.name} </p>
    <p> Designation: {item.designation} </p>
  </li>
);

  return (
    <div>
      <h1> List of Employees </h1>
      <ul>{listItems}</ul>
     </div>
    );

};

export default Courses;
