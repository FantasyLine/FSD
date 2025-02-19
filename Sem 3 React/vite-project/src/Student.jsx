function Student ({student}) {
    const average = student.notes.reduce((sum, note) =>sum + note, 0) / student.notes.length;
    return (
    <>
        <li>{student.name} : {average.toFixed(2)}</li>
    </>
 )
}
export default Student;