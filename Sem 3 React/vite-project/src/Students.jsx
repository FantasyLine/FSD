import Student from "./Student.jsx";

const Students = ({ students }) => {
  return (
    <ul>
      {students.map((student, index) => (
        <Student key={index} student={student} />
      ))}
    </ul>
  );
};

export default Students;